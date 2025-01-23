import './code.css'
import CodeBlock from './CodeBlock';

export const metadata = {
    title: 'Code',
}

export default function() {
    return (
        <div className='code-root'>
            <div className='code-section'>
                <CodeBlock link='https://github.com/BoopEnthusiast/My-Game'/>
            </div>
        </div>
    );
}