'use client'

import './games.css'
import PresentBox from '../../components/PresentationBox';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


export default function Games() {
    return (
            <div className='gamesPage'>
                <Parallax pages={2} style={{ top: '0', left: '0' }}>
                    <ParallaxLayer offset={0} speed={1.9}>
                        <div className='parallax-bg'>
                                <img src={'/games/Games.jpg'} alt='background image with pink keyboard, two index controllers, and a pink mouse' />
                        </div> 
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={1}>
                        <div className='boxes'>
                            <h1>Games</h1> <br />
                            <PresentBox image='/games/Tragedy.png' imageAlt='The text "Tragedy!_" in off-white on off-black' title='Tragedy!_'
                            description="A university project for GAME204: Writing For Games. It has a branching narrative, with 5 paths, on 3 different layers of story. The layers of story are connected, but you, the player, must unravel the truth of the situation. It is a text-based narrative game made in Ink. It's rather pretentious lol, but the narrative came together seamlessly and well, I am proud of how it turned out."/>
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
