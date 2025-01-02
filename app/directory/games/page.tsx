'use client'

import './games.css'
import PresentBox from '../../components/PresentationBox';
import { Parallax } from 'react-scroll-parallax';


export default function Games() {
    return (
            <div className='gamesPage'>
                <div className='parallax-container'>
                <Parallax translateY={[-20, 40]}>
                        <div className='parallax-bg' />
                        </Parallax></div>
                        <div className='boxes'>
                            <h1>Games</h1><br />
                            <PresentBox image='/games/Tragedy.png' imageAlt='The text "Tragedy!_" in off-white on off-black' title='Tragedy!_' link='https://boopenthusiast.itch.io/tragedy'
                            description="A university project for GAME204: Writing For Games. It has a branching narrative, with 5 paths, on 3 different layers of story. The layers of story are connected, but you, the player, must unravel the truth of the situation. It is a text-based narrative game made in Ink. It's rather pretentious lol, but the narrative came together seamlessly and well, I am proud of how it turned out."/>
                            <PresentBox image='/games/Reverie.png' imageAlt='A character select screen with a child and flowers on the right (player 2), and an old guy with wires on the left (player 1)' title='Reverie Memory' link='https://boopenthusiast.itch.io/reverie-memory'
                            description='Two player asynchronous multiplayer game made with two (and a half) wonderful other people as a group project for GAME201: Game Design I. I remember the lecturer writing a really, really sweet note about how he was baffled that we made an actually fun and interesting game, which is what this is! Got basically a perfect grade. It, of course, requires two people to play, but it is well worth the hassle for the 5-10 minutes you will play the game.'/>
                            <PresentBox image='/games/Snakerosion.png' imageAlt='A vibrant red snake coming toward the screen with a :3 face with the text "SNAKE-ROSION"' title='Snakerosion' link='https://boopenthusiast.itch.io/snake-rosion'
                            description="Snakerosion is a game made in only 3 hours for the Trijam! For 3 hours, it turned out pretty well. It's got super basic music, art, and gameplay. You fly around and stop acid rain from hitting the ground, that is all. It's a very simple game but it was a lot for only 3 hours by myself."/> 
                            <PresentBox image='/games/Space.png' imageAlt='A spaceship swerving to the side' title='Space To Repair' link='https://boopenthusiast.itch.io/space-to-repair'
                            description="This is where games begin to get not-so-good, these are all for game jams from now on. This is Space To Repair, you fly around in a spaceship avoiding asteroids and exit the cockpit to repair your ship from the inside. Space To Repair was my first time making two viewports - one for flying, and another for repairing. You can flip between both of them at the monitor that shows the flying. It's a pretty neat technique but not a great game."/> 
                            <PresentBox image='/games/BPD.png' imageAlt='A speech bubble under the light with a large crack in it. The speech bubble has the text "BPD" on it.' title="Breaking Partner's Dates" link='https://boopenthusiast.itch.io/breaking-partners-dates'
                            description="This game is left unfinished, it was a university project for GAME204: Writing For Games. I was on a waitlist for a Borderline Personality Disorder (BPD) diagnosis and this was my way of conveying my experience. It was made in PICO-8, so everything including collision, physics, drawing to the screen, etc is all made from scratch. I am now diagnosed with BPD."/> 
                            <PresentBox image='/games/Espionage.png' imageAlt='A piece of paper with a light on it and a menacing face with the text "Espionage Office" on it.' title='Espionage Office' link='https://boopenthusiast.itch.io/espionage-office'
                            description="Espionage office is a small game where you collect clues for 5 minutes as employees pick and up and put down pieces of paper in random locations. After those 5 minutes you have a small interview where the highest point total you can get is 12 points! It's just an OK game, I worked on 90% of it within the last few hours of the due date because my teammates weren't very forthcoming with their work. I believe we won the local game jam though, not very firce competition."/> 
                            <PresentBox image='/games/Flower.png' imageAlt='A picture of a pixellated flower' title='Flower Tower' link='https://boopenthusiast.itch.io/flower-tower'
                            description="This was my first game! Kind of, I had worked on projects previously but this was my first start-to-end game for a game jam. This is Flower Tower, a tower defense game made with 2 (and a half) others. It's not great and very buggy, figuratively and literally speaking."/> 
                            <PresentBox image='/games/Cozy.png' imageAlt='A Lil Guy (plant-looking person) peeking up from the bottom of the frame' title='Cozy Potion Evolution' link='https://boopenthusiast.itch.io/cozy-potion-evolution'
                            description="A game with adorable and amazing artwork from one of my teammates, the game is almost unbeatable but it's fun for a while. Deeply untested, this game's upgrades might not work at all. I had... a number of teammates that I have forgotten as part of a game jam. Fun fact: we were originally going to call it Cozy Potion Eugenics."/>
                            <PresentBox image='/games/Mycelium.png' imageAlt='A mushroom person holding up a microphone with two little slugs with sunglasses heading towards it, the text "MYCELIUM MELODY" above it' title='Mycelium Melody' link='https://boopenthusiast.itch.io/mycelium-melody'
                            description="We made this for 2 games jams at the same time! This meant two themes, a special object, and a limitation. We had almost a full small team of like 5 people on this, but I was showing people how to work with Godot most of the first day. It's an alright game. Kinda boring."/>
                            <PresentBox image='/games/Necro.png' imageAlt='A terminal with errors in it and at the bottom in the enter line is the term "Micro Necro", it has some little people and ghosts to the right of it. It is in small pixel art.' title='Micro Necro' link='https://boopenthusiast.itch.io/micro-necro'
                            description="This game is kinda meh, it's greatly untested too. I was showing people the ropes of gamedev most of the time, and then I wrote a basic terminal emulator. I'm proud of the codebase, not the final product. This is kind of where I learned to focus more on the product than the code."/>
                            <PresentBox image='/games/Zephyrinth.png' imageAlt='A very ugly image with the text "Zephyrinth" on it' title='Zephyrinth' link='https://boopenthusiast.itch.io/zephyrinth'
                            description="Pretty awful is how I'd describe this game, like Reverie Memory it's an asynchronous multiplayer game, go play that one, maybe leave this one till after with your friend. The game isn't so great, it was a disaster to work on, my teammates were useless, it was my first 3D game. There are a lot of excuses but at the end of the day it's just kinda shit."/>
                            
                            <PresentBox title='Big project' description="I've been working on a rather large project for some time, it even has a programming language I'm writing from scratch... This is one that's definetly going on Steam/Epic. No telling what it might be..."/> 
                        </div>
            </div> 
    );
}
