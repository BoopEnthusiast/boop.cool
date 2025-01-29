import React from 'react';
import './codeBlock.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeGridProps {
  titles: string[];
  codeExamples: string[];
  languages?: string[]; // Made optional
  links: string[];
}

const CodeGrid: React.FC<CodeGridProps> = ({ titles, codeExamples, languages, links }) => {
  // Default to JavaScript if languages prop is not provided
  const resolvedLanguages = languages || Array(titles.length).fill('javascript');

  if (titles.length !== codeExamples.length || titles.length !== resolvedLanguages.length) {
    console.error('All arrays must have the same length');
    return null;
  }

  return (
    <div className="container">
      <div className="grid">
        {titles.map((title, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <a href={links[index]}><h3 className="card-title">{title}</h3></a>
            </div>
            <div className="card-content">
              <div className="code-block">
                <SyntaxHighlighter
                  language={resolvedLanguages[index]}
                  style={vscDarkPlus}
                  className="code-text"
                  showLineNumbers
                  wrapLines
                >
                  {codeExamples[index]}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeGrid;