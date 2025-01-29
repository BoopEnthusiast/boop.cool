import './code.css'
import CodeBlock from './CodeBlock';


export const metadata = {
    title: 'Code',
}

export default function() {
    return (
        <div className='code-root'>
            <div className='code-section'>
                <CodeBlock titles={["lang.gd", "tokenize_code.gd", "build_script_tree.gd", "form_actions.gd"]} codeExamples={[`# lang.gd
# Has no class_name as it is a singleton/global (which don't need class names in Godot)
extends Node
## Forms a list of Callables (references to functions in Godot) for a Spell to run when it's cast
## 
## Find this code at https://github.com/BoopEnthusiast/My-Game[br]
## This is in its infancy and will be extended as I work on the overall game and add more to it. But, it works and is a functional language.
## Currently there aren't many functions or methods to call, or nodes to add.[br][br]
## 
## This is the second version of it, the previous was much less extensible, but this should be the final version as I can now extend it in any way I need.[br][br]
## 
## This class does not need to be fast, it's run very infrequently and is literally the compliation of a custom language.
## For that reason, there are some inefficiencies in this code. 
## For goodness sake I'm using *recursion* directly in a video game and not just the engine, that's almost unheard of.[br][br]
##
## In the future this class may be moved to a seperate thread. 
## This will not be hard to do, especially in Godot, and it's not slow now, so I am not worried about it yet.[br][br]


enum Keywords {
	IF,
	ELIF,
	ELSE,
	WHILE,
	FOR,
	IN,
	RETURN,
}
const KEYWORDS: Array[String] = [
	"if",
	"elif",
	"else",
	"while",
	"for",
	"in",
	"return",
]


var tree_root_item: TreeItem
var form_actions_node: LangFormActions
var tokenize_code_node: LangTokenizeCode
var build_script_tree_node: LangBuildScriptTree

var error_color = Color.from_ok_hsl(0.05, 0.8, 0.4, 0.3) # Can't be a constant (you try it)

var _spells: Array[Spell] = [] # TODO: Show the list of compiled spells that don't have errors 
var _compile_errors: Array = [] # Array of tuples that goes [error_text: String, program_node: ProgramNode, line: line]


func _enter_tree() -> void:
	tokenize_code_node = LangTokenizeCode.new()
	build_script_tree_node = LangBuildScriptTree.new()
	form_actions_node = LangFormActions.new()


## Makes a new spell and takes a start node and goes through all the connected nodes until it's done
func compile_spell(start_node: StartNode) -> void:
	# Setup new spell
	var new_spell = Spell.new()
	new_spell.start_node = start_node
	
	# Go to all connected nodes and compile each of them
	# TODO: Add more nodes that the start node can connect to
	# Maybe add more types of connections?
	var connected_node = start_node.outputs[0].get_connected_node()
	if connected_node is ProgramNode:
		var parsed_code = compile_program_node(connected_node)
		new_spell.actions.append_array(parsed_code)
	_spells.append(new_spell)
	IDE.current_spell = new_spell


## Adds an error to an array of errors when one is found in the code during compilation or checking beforehand. Give program_node and line when possible (during compile time).
func add_error(error_text: String = "Unspecified error...", program_node: ProgramNode = null,  line: int = -1) -> void:
	# Debug
	print("FOUND ERROR:")
	print(error_text,"  ",program_node,"  ",line)
	
	# Main body
	if is_instance_valid(program_node) and line >= 0: # Run when called during compile time
		_compile_errors.append([error_text, program_node, line])
	else:
		pass # TODO: Add errors during runtime and not compile time


## At the end of compile time it goes through all of the found errors and shows them.
func _show_compiling_errors() -> void:
	if _compile_errors.size() <= 0:
		return
	
	_compile_errors[0][1].error_message.text = _compile_errors[0][0]
	
	for error in _compile_errors:
		error[1].code_edit.set_line_background_color(error[2], error_color)


## Takes a program node's text and inputs and forms a list of callables for a spell to run
func compile_program_node(program_node: ProgramNode) -> Array:
	var tokenized_code: Array[Token] = tokenize_code_node.tokenize_code(program_node.code_edit.text)
	
	var tree_root: ScriptTreeRoot = build_script_tree_node.build_script_tree(tokenized_code, program_node)
	
	tree_root_item = IDE.start_node_tree.create_item()
	var actions = form_actions_node.form_actions(tree_root, tree_root_item)
	_show_compiling_errors()
	return actions



# The piece of code that should work FOR NOW
# Input 1: "fireball" - leads to ball node
# Input 2: "start" - leads to start node
# Input 3: "transmutation" - leads to transmute node
# Code for now:
# spawn(fireball)
# fireball.transmute(transmutation)
# fireball.push(5 * 3 + 2)
#
# Code for later:
# spawn(fireball)
# fireball.set_on_fire() 
# fireball.push((4 + 3) * 2)
# while fireball:
#     fireball.push(1) # moves fireball in direction player is facing, the cooldown so that the while loop isn't infinitely fast is the TTC (time to cast) for the push method on the ball
`, `class_name LangTokenizeCode
extends Node
## External code for the Lang Singleton

## All possible unicode whitespace characters, there may be duplicates since it's hard to tell and better safe than sorry. This class does not need to be efficient.
const WHITESPAC_CHARS: Array[String] = [
	" ",
	" ",
	" ",
	"	",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	"　",
	"\\t",
	"\\v",
	"\\f",
	"\\r",
]
## All symbols that can be used in expressions
const EXPRESSION_SYMBOLS: Array[String] = [
	"*",
	"/",
	"+",
	"-",
	"%",
	"=",
	"(",
	")",
	".",
]
## All symbols that can be used for boolean operations
const BOOLEAN_OPERATORS: Array[String] = [
	"==",
	"!=",
	"<",
	"<=",
	">",
	">=",
]


## Goes through each character and turns them into an array of Token objects
func tokenize_code(text: String) -> Array[Token]:
	var tokenized_code: Array[Token] = []
	
	var working_token: String = "" # Built up over each iteration of the main loop until a special condition is met
	var next_type: Array[Token.Type] # The next expected token types for the next working_token
	
	var is_comment := false
	var line_number: int = 0
	
	# Loop through characters and turn them into tokens with types that can then be compiled into a Script Tree
	for chr in text:
		# Check if it's a new line to increment the line number
		if chr == '\\n':
			line_number += 1
		
		# Main checks
		## Comments 1
		if is_comment and chr == "\\n":
			is_comment = false
			working_token = ""
			continue
			
		elif is_comment:
			continue
			
		## Strings
		elif next_type.has(Token.Type.STRING):
			if chr == "\\\\":
				pass # TODO: Implement something like newlines and tabs and whatnot
			elif chr == "\\"":
				if next_type.has(Token.Type.PARAMETER):
					tokenized_code.append(Token.new(working_token, line_number, [Token.Type.STRING, Token.Type.PARAMETER]))
				else:
					tokenized_code.append(Token.new(working_token, line_number, [Token.Type.STRING]))
				next_type.clear()
				working_token = ""
				continue
				
		elif chr == "\\"":
			if next_type.has(Token.Type.PARAMETER):
				next_type = [Token.Type.STRING, Token.Type.PARAMETER]
			else:
				next_type = [Token.Type.STRING]
			working_token = ""
			continue
			
		## Expressions
		elif next_type.has(Token.Type.EXPRESSION):
			if chr == ')':
				if next_type.has(Token.Type.INNER_EXPRESSION):
					next_type = [Token.Type.EXPRESSION]
				else:
					if not working_token.is_empty():
						tokenized_code.append(Token.new(working_token, line_number, [Token.Type.PARAMETER, Token.Type.EXPRESSION]))
					next_type = []
					working_token = ""
					continue
			elif chr == '(':
				next_type = [Token.Type.INNER_EXPRESSION, Token.Type.EXPRESSION]
			
			if not EXPRESSION_SYMBOLS.has(chr) and not chr.is_valid_float():
				next_type.clear()
				
		## Comments 2
		elif chr == "#":
			is_comment = true
			continue
			
		## New line / Break
		elif chr == "\\n":
			tokenized_code.append(Token.new("", line_number, [Token.Type.BREAK]))
			working_token = ""
			continue
			
		## Keywords
		elif WHITESPAC_CHARS.has(chr):
			if Lang.KEYWORDS.has(working_token):
				tokenized_code.append(Token.new(working_token, line_number, [Token.Type.KEYWORD]))
				match working_token:
					Lang.KEYWORDS[Lang.Keywords.IF], Lang.KEYWORDS[Lang.Keywords.ELIF], Lang.KEYWORDS[Lang.Keywords.WHILE]:
						next_type = [Token.Type.BOOLEAN]
					Lang.KEYWORDS[Lang.Keywords.FOR]:
						pass
					Lang.KEYWORDS[Lang.Keywords.RETURN]:
						next_type = [Token.Type.OBJECT_NAME, Token.Type.EXPRESSION, Token.Type.STRING, Token.Type.BOOLEAN, Token.Type.NONE]
						
				working_token = ""
				continue
				
		## Property
		elif chr == ".":
			if not working_token.is_valid_int():
				if not tokenized_code.is_empty() and tokenized_code.back().types.has(Token.Type.OBJECT_NAME):
					tokenized_code.append(Token.new(working_token, line_number, [Token.Type.OBJECT_NAME, Token.Type.PARAMETER]))
				else:
					tokenized_code.append(Token.new(working_token, line_number, [Token.Type.OBJECT_NAME]))
				next_type = [Token.Type.PROPERTY, Token.Type.METHOD_NAME]
				working_token = ""
				continue
				
		## Function/Method parameters
		elif chr == "(":
			if next_type.has(Token.Type.METHOD_NAME):
				tokenized_code.append(Token.new(working_token, line_number, [Token.Type.METHOD_NAME]))
			else:
				tokenized_code.append(Token.new(working_token, line_number, [Token.Type.FUNCTION_NAME]))
			next_type = [Token.Type.PARAMETER, Token.Type.EXPRESSION]
			working_token = ""
			continue
			
		elif chr == ",":
			# TODO: Implement multiple parameters
			
			next_type = [Token.Type.PARAMETER]
			working_token = ""
			continue
			
		elif chr == ")":
			if not working_token.is_empty():
				if next_type.has(Token.Type.PROPERTY):
					tokenized_code.append(Token.new(working_token, line_number, [Token.Type.PARAMETER, Token.Type.PROPERTY]))
				else:
					tokenized_code.append(Token.new(working_token, line_number, [Token.Type.PARAMETER, Token.Type.OBJECT_NAME]))
			next_type = []
			working_token = ""
			continue
			
		
		working_token += chr
		print(working_token,"   ",next_type,"    ",is_comment) # Debugging
	
	tokenized_code.append(Token.new("", line_number, [Token.Type.BREAK])) # Add a break at the end just in case
	
	# Debugging
	print(tokenized_code)
	for token in tokenized_code:
		print(token.types,"   ",token.string)
	return tokenized_code

`, `class_name LangBuildScriptTree
extends Node
## External code for the Lang Singleton


## Loop through tokens and build out the Script Tree, returning the root node
func build_script_tree(tokenized_code: Array[Token], program_node: ProgramNode) -> ScriptTreeRoot:
	var inputs = program_node.inputs
	
	var tree_root = ScriptTreeRoot.new()
	var working_st: ScriptTree = tree_root # The current parent of the next token
	
	# Main loop
	# Almost all of the conditions ends with making a new ScriptTree object and adding it as a child of the working_st
	for token in tokenized_code:
		# Reset working_st back to the tree root, it's a new command
		if token.types.has(Token.Type.BREAK):
			working_st = tree_root
			
		# Keywords
		elif token.types.has(Token.Type.KEYWORD):
			match token.string: # TODO: Implement other keywords
				Lang.KEYWORDS[Lang.Keywords.RETURN]:
					var new_child = ScriptTreeFunction.new(working_st, "return")
					working_st.add_child(new_child)
					working_st = new_child
					
		# Objects
		# The inputs are the objects
		elif token.types.has(Token.Type.OBJECT_NAME):
			var input = _get_input(token.string, inputs)
			if not is_instance_valid(input):
				Lang.add_error("Can't find input with name: " + token.string, program_node, token.line)
				continue
			
			var new_child = ScriptTreeObject.new(working_st, input)
			working_st.add_child(new_child)
			
			working_st = new_child
			
		# Function
		# Has to either be a built-in function or a function from another node
		elif token.types.has(Token.Type.FUNCTION_NAME):
			
			var function_name = _get_input(token.string, inputs)
			
			var function_names_index = Functions.FUNCTION_NAMES.find(token.string)
			if function_names_index < 0:
				Lang.add_error("Could not find function: " + token.string, program_node, token.line)
				continue
			
			function_name = Functions.FUNCTION_NAMES[function_names_index]
			if not typeof(function_name) == TYPE_STRING:
				Lang.add_error("Can't find function: " + token.string, program_node, token.line)
				continue
			
			var new_child = ScriptTreeFunction.new(working_st, function_name)
			working_st.add_child(new_child)
			
			working_st = new_child
			
		elif token.types.has(Token.Type.METHOD_NAME):
			# Initial check
			if not working_st.type == ScriptTree.Type.OBJECT:
				Lang.add_error("Parent of Script Tree Method isn't an object, parent is: " + str(working_st.type), program_node, token.line)
				continue
			
			var new_child = ScriptTreeMethod.new(working_st, token.string.strip_edges())
			working_st.add_child(new_child)
			
			working_st = new_child
			
		elif token.types.has(Token.Type.PARAMETER):
			# Initial check
			if not working_st.type == ScriptTree.Type.FUNCTION and not working_st.type == ScriptTree.Type.METHOD and not token.types.has(Token.Type.PROPERTY):
				Lang.add_error("Parent of Script Tree Parameter isn't a function or method, nor is it a property, parent is: " + str(working_st.type) + " with value: " + str(working_st.value), program_node, token.line)
				continue
			
			var value
			if token.types.has(Token.Type.OBJECT_NAME):
				value = _get_input(token.string, inputs)
				if not is_instance_valid(value):
					Lang.add_error("Can't find input with name: " + token.string, program_node, token.line)
					continue
					
			elif token.types.has(Token.Type.EXPRESSION):
				# Execute the expression
				var expression = Expression.new()
				var error = expression.parse(token.string)
				if error != OK:
					Lang.add_error(expression.get_error_text(), program_node, token.line)
					continue
				value = expression.execute()
				
			elif token.types.has(Token.Type.STRING) or token.types.has(Token.Type.PROPERTY):
				value = token.string
			
			var new_child = ScriptTreeObject.new(working_st, value)
			working_st.add_child(new_child)
			
			working_st = new_child
			
	
	tree_root.parent = null
	return tree_root


## Checks all of the NodeInputs and checks against them for the name
func _get_input(find_name: String, inputs: Array) -> NodeInput:
	for input in inputs:
		if input.name_field.text.strip_edges() == find_name.strip_edges():
			return input
	return null
`, `class_name LangFormActions
extends Node
## External code for the Lang Singleton

## Go down the built up ScriptTree with recursion and form the array of callables
func form_actions(working_st: ScriptTree, tree_item: TreeItem) -> Array[Callable]:
	if not is_instance_valid(working_st):
		return []
	
	var callable_list: Array[Callable] = []
	
	# Debugging
	print(working_st.type,"  ",working_st.value,"    HAS ",working_st.children.size()," CHILDREN: ")
	for child in working_st.children:
		print(child.type,"  ",child.value)
	print("END OF CHILDREN")
	
	# Go through each child and run this function on them, then get their array of callables and add it to the current one
	for child in working_st.children:
		print("STARTING WORK ON: ",child.type,"  ",child.value,"    PARENTS TYPE IS: ",working_st.type) # Debug
		var new_tree_item = tree_item.create_child()
		new_tree_item.set_text(0, str(working_st.type)+" | "+str(working_st.value))
		callable_list.append_array(form_actions(child, new_tree_item))
	
	
	## See if the current object and its parent match to a known function/method, if so, add it to the callable list
	# Built-in functions and keywords
	if working_st.type == ScriptTree.Type.OBJECT or working_st.type == ScriptTree.Type.DATA:
		# Keywords
		if working_st.parent.type == ScriptTree.Type.KEYWORD:
			match working_st.parent.value: # TODO: Implement more keywords
				Lang.KEYWORDS[Lang.Keywords.RETURN]:
					return working_st.value
		
		# Functions
		elif working_st.parent.type == ScriptTree.Type.FUNCTION:
			match working_st.parent.value:
				"spawn":
					callable_list.append(Callable(Functions, "spawn").bind(working_st.value))
				"print":
					callable_list.append(Callable(Functions, "pprint").bind(working_st.value))
				"wait":
					callable_list.append(Callable(Functions, "wait").bind(working_st.value))
				"call":
					callable_list.append_array(Lang.compile_program_node(working_st.value.get_connected_node()))
				
	# Method on an object
	elif working_st.type == ScriptTree.Type.METHOD:
		if working_st.parent.type == ScriptTree.Type.OBJECT:
			var has_parameters := false
			for child in working_st.children:
				if child.type == ScriptTree.Type.OBJECT:
					has_parameters = true
			if not has_parameters:
				callable_list.append(Callable(working_st.parent.value.get_output_node(), working_st.value))
			else:
				var new_callable := Callable(working_st.parent.value.get_output_node(), working_st.value)
				for child in working_st.children:
					new_callable = new_callable.bind(child.value)
				callable_list.append(new_callable)
				
	
	print("Callable list: " + str(callable_list)) # Debug
	# Pass the callable list back up the tree
	return callable_list
`]} languages={['gdscript', 'gdscript', 'gdscript', 'gdscript']}/>
            </div>
        </div>
    );
}