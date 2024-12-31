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
                            <PresentBox image='/games/Tragedy.png' imageAlt='The text "Tragedy!_" in off-white on off-black' title='Tragedy!_' id='tragedy' link='https://boopenthusiast.itch.io/tragedy'
                            description="A university project for GAME204: Writing For Games. It has a branching narrative, with 5 paths, on 3 different layers of story. The layers of story are connected, but you, the player, must unravel the truth of the situation. It is a text-based narrative game made in Ink. It's rather pretentious lol, but the narrative came together seamlessly and well, I am proud of how it turned out."/>
                            <PresentBox image='/games/Reverie.PNG' imageAlt='A character select screen with a child and flowers on the right (player 2), and an old guy with wires on the left (player 1)' title='Reverie Memory' id='reverie' link='https://boopenthusiast.itch.io/reverie-memory'
                            description='Two player asynchonous multiplayer game made with two (and a half) wonderful other people as a group project for GAME201: Game Design I. I remember the lecturer writing a really, really sweet note about how he was baffled that we made an actually fun and interesting game, which is what this is! Got basically a perfect grade. It, of course, requires two people to play, but it is well worth the hassle for the 5-10 minutes you will play the game.'/>
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
