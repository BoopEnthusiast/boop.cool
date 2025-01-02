'use client'

import { Parallax } from 'react-scroll-parallax';

export default function ParallaxContainer() {
    return (
        <div className='parallax-container'>
            <Parallax translateY={[-20, 40]}>
                <div className='parallax-bg' />
            </Parallax>        
        </div>
    );
}