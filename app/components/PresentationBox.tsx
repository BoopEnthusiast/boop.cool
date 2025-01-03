import './presentationBox.css'

interface PresentBoxProps {
    image?: string;
    imageAlt?: string;
    title?: string;
    description?: string;
    link?: string;
}

export default function PresentBox({ 
    image = '', 
    imageAlt = '', 
    title = '', 
    description = '',
    link = ''
}: PresentBoxProps) {
    return (
        <div className='present-box'>
            {image ? (
                <div className='display-image-holder'>
                    <img className='display-image' src={image} alt={imageAlt} loading='lazy'/>
                </div>
            ) : (<div />)}
            
            <div className='text-container'>
                <h2>
                    {link ? (
                        <a href={link}>
                            {title}
                        </a>
                    ) : (
                        title
                    )}
                </h2>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}