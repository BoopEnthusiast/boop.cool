import './directoryBox.css'

interface PresentBoxProps {
    title?: string;
    description?: string;
    link?: string;
    items?: string[];
}

export default function DirectoryBox({ 
    title = '', 
    description = '',
    link = '',
    items = [],
}: PresentBoxProps) {
    return (
        <div className='directory-box'>
            <h2><a href={link}>{title}</a></h2>
            <p>{description}</p>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}