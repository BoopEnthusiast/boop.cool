'use client'

import { useEffect, useState } from 'react';
import './games.css'
import PresentBox from '../../components/PresentationBox';
import SimpleParallax from 'simple-parallax-js';


export default function Games() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    return (
            <div className='gamesPage'>
                <div className='parallax-bg'>
                    <SimpleParallax scale={1.1} orientation='left' delay={0} overflow>
                        <img src={'/Games.jpg'} alt='background image' />
                    </SimpleParallax>
                </div> 
                <h1>Games</h1> <br />
                <PresentBox />
                <PresentBox />
                <PresentBox /> 
            </div> 
    );
}
