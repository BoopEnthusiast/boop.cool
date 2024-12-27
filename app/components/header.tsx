'use client'

import './header.css'
import React, { useEffect, useState } from 'react';

export default function Header() {
    

    const [text, setText] = useState('Boop\'s Portfolio Site')

    useEffect(() => {
        const desktopText = 'Boop\'s Portfolio Site'
        const mobileText = 'Boop\'s Portfolio'
        
        const updateText = () => {
            if (window.innerWidth <= 768) {
                setText(mobileText);
            } else {
                setText(desktopText);
            }
        };
    
        updateText();
        window.addEventListener('resize', updateText);
    
        return () => window.removeEventListener('resize', updateText);
    }, []);

    return (
        <div className='header'>
            <h1 className='header-text'>{text}</h1>
        </div>
    )
}
