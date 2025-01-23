import './codeBlock.css'

interface CodeBlockProps {
    link?: string;
    fileNames?: string[];
    fileContents?: string[];
}

export default function CodeBlock({ 
    link = '',
    fileNames = [''],
    fileContents = [''],
}: CodeBlockProps) {
    return (
        <div className='code-block'>
            {fileNames.map((fileName, index) => (
                <div key={index} className='code-file-container'>
                    <div className='code-file-name'>{fileName}</div>
                    <div className='code-file-content'>{fileContents[index]}</div>
                </div>
            ))}
        </div>
    );
}