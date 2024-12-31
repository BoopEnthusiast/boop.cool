'use client'

import './games.css'
import PresentBox from '../../components/PresentationBox';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


export default function Games() {
    return (
            <div className='gamesPage'>
                <Parallax pages={3} style={{ top: '0', left: '0' }}>
                    <ParallaxLayer offset={0} speed={1.9}>
                        <div className='parallax-bg'>
                                <img src={'/games/Games.jpg'} alt='background image' />
                        </div> 
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={1}>
                        <div className='boxes'>
                            <h1>Games</h1> <br />
                            <PresentBox />
                            <PresentBox />
                            <PresentBox /> 
                            <PresentBox /> 
                            <PresentBox /> 
                            <PresentBox /> 
                            <PresentBox /> 
                            <PresentBox /> 
                        </div>
                    </ParallaxLayer>
                </Parallax>
            </div> 
    );
}
