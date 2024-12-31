import './presentationBox.css'

interface PresentBoxProps {
    image?: string;
    imageAlt?: string;
    title?: string;
    description?: string;
}

export default function PresentBox({ 
    image = '', 
    imageAlt = '', 
    title = '', 
    description = '' 
}: PresentBoxProps) {
    return (
        <div className='present-box'>
            <img src={image} alt={imageAlt} />
            <div className='text-container'>
                <h2>
                    {title}
                </h2>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}