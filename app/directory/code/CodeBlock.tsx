import './codeBlock.css'

interface CodeBlockProps {
    link?: string;
}

export default function CodeBlock({ 
    link = ''
}: CodeBlockProps) {
    return (
        <div className='code-block'>
            
        </div>
    );
}