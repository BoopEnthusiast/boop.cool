import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css'; // Choose a theme
import 'prismjs/components/prism-gdscript'; // Add GDScript language support

interface CodeHighlightProps {
  code: string;
  language?: string;
}

const CodeHighlight: React.FC<CodeHighlightProps> = ({ 
  code, 
  language = 'gdscript' 
}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <pre>
      <code className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};

export default CodeHighlight;