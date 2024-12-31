'use client'

import './games.css'
import PresentBox from '../../components/PresentationBox';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


export default function Games() {
    const calculatedSpeed = window.innerWidth * 0.0018

    return (
            <div className='gamesPage'>
                <Parallax pages={2} style={{ top: '0', left: '0' }}>
                    <ParallaxLayer offset={0} speed={calculatedSpeed}>
                        <div className='parallax-bg'>
                                <img src={'/games/Games.jpg'} alt='background image with pink keyboard, two index controllers, and a pink mouse' />
                        </div> 
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={1}>
                        <div className='boxes'>
                            <h1>Games</h1> <br />
                            <PresentBox image='/games/Tragedy.png' imageAlt='The text "Tragedy!_" in off-white on off-black' title='Tragedy!_' link='https://boopenthusiast.itch.io/tragedy'
                            description="A university project for GAME204: Writing For Games. It has a branching narrative, with 5 paths, on 3 different layers of story. The layers of story are connected, but you, the player, must unravel the truth of the situation. It is a text-based narrative game made in Ink. It's rather pretentious lol, but the narrative came together seamlessly and well, I am proud of how it turned out."/>
                            <PresentBox image='/games/Reverie.png' imageAlt='A character select screen with a child and flowers on the right (player 2), and an old guy with wires on the left (player 1)' title='Reverie Memory' link='https://boopenthusiast.itch.io/reverie-memory'
                            description='Two player asynchonous multiplayer game made with two (and a half) wonderful other people as a group project for GAME201: Game Design I. I remember the lecturer writing a really, really sweet note about how he was baffled that we made an actually fun and interesting game, which is what this is! Got basically a perfect grade. It, of course, requires two people to play, but it is well worth the hassle for the 5-10 minutes you will play the game.'/>
                            <PresentBox image='/games/Snakerosion.png' imageAlt='A vibrant red snake coming toward the screen with a :3 face with the text "SNAKE-ROSION"' title='Snakerosion' link='https://boopenthusiast.itch.io/snake-rosion'
                            description="Snakerosion is a game made in only 3 hours! For 3 hours, it turned out pretty well. It's got super basic music, art, and gameplay. You fly around and stop acid rain from hitting the ground, that is all. It's a very simple game but it was a lot for only 3 hours by myself."/> 
                            <PresentBox /> 
                            <PresentBox /> 
                            <PresentBox /> 
                            <PresentBox /> 
                            <PresentBox title='Big project' description="I've been working on a rather large project for some time, it even has a programming language I'm writing from scratch... This is one that's definetly going on Steam/Epic. No telling what it might be..."/> 
                        </div>
                    </ParallaxLayer>
                </Parallax>
            </div> 
    );
}
