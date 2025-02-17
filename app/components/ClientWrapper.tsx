// @ts-nocheck
'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, AdaptiveDpr, AdaptiveEvents, Text3D, Outlines } from '@react-three/drei'
import { useState } from 'react'
import Calibri from './Calibri_Regular.json'

function Box({width = 1, height = 1, depth = 1, x = 0, y = 0, z = 0, color = 'magenta'}) {
  return (
    <mesh position={[x, y, z]}>
      <bufferGeometry />
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

function Text({scale = 0.2, x = 0, y = 0, z = 0, text = 'Hello, World!', color = 'black', isLink = false, link = '', rotY = 0, hasOutline = false}) {
  const [hovered, setHovered] = useState(false)

  return (
    <Text3D position={[x, y, z]} font={Calibri} scale={scale} rotation={[0, rotY, 0]} curveSegments={2} bevelEnabled={false} frustumCulled={true}
    onClick={(event) => {
      if (isLink) {
        event.stopPropagation()
        window.location.href = link
      }
    }}
    onPointerOver={(event) => {
      if (isLink) {
        event.stopPropagation()
        setHovered(true)
        document.body.style.cursor = 'pointer'
      }
    }}
    onPointerOut={(event) => {
      if (isLink) {
        event.stopPropagation()
        setHovered(false)
        document.body.style.cursor = 'auto'
      }
    }}
    >
      {text}
      <meshStandardMaterial color={hovered ? 'magenta' : color}/>
      {hasOutline && <Outlines />}
    </Text3D>
  )
}

export default function ClientWrapper() {
  return (
    <div>
      <Canvas dpr={[1, 2]}>
        <Suspense fallback={null}>
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />

          {/* Intro box */}
          <Box width={3} height={2.2} depth={0.5} y={0.95} z={0.75} color='#000000'/>
          <Text scale={0.3} x={-1.4} y={1.7} z={1} color='#fbe9fa' hasOutline={true}/>
          <Text x={-1.4} y={1.4} z={1} text='Use mouse/touch' color='#e6e7c9'/>
          <Text x={-1.4} y={1.19} z={1} text='controls to move.' color='#e6e7c9'/>
          <Text scale={0.22} x={-1.4} y={0.8} z={1} text='LMB/One finger:' color='#c8ece4' hasOutline={true}/>
          <Text x={-1.4} y={0.59} z={1} text='Rotate' color='#c8ece4'/>
          <Text scale={0.22} x={-1.4} y={0.2} z={1} text='RMB/Two fingers:' color='#f4def6' hasOutline={true}/>
          <Text x={-1.4} y={-0.01} z={1} text='Pan' color='#f4def6'/>
          {/* Back text */}
          <Text x={0.1} y={0.8} z={0.5} rotY={Math.PI} text=':3' color='#f4def6'/>

          {/* Games box */}
          <Box width={3} height={4} depth={1} x={3.5} y={0.5} color='#fdd1fa'/>
          <Text scale={0.4} x={2.1} y={2} z={0.5} text='Games' color='#000000' isLink link='/directory/games'/>
          <Text x={2.1} y={1.7} z={0.5} text='Tragedy!_' color='#000000' isLink link='/directory/games'/>
          <Text x={2.1} y={1.4} z={0.5} text='Reverie Memory' color='#000000' isLink link='/directory/games/'/>
          <Text x={2.1} y={1.1} z={0.5} text='Snakerosion' color='#000000' isLink link='/directory/games/'/>
          <Text x={2.1} y={0.8} z={0.5} text='Space To Repair' color='#000000' isLink link='/directory/games/'/>
          <Text x={2.1} y={0.5} z={0.5} text="Breaking Partner's Dates" color='#000000' isLink link='/directory/games/'/>
          <Text x={2.1} y={0.2} z={0.5} text='Espionage Office' color='#000000' isLink link='/directory/games/'/>
          <Text x={2.1} y={-0.1} z={0.5} text='Flower Tower' color='#000000' isLink link='/directory/games/'/>
          <Text x={2.1} y={-0.4} z={0.5} text='Mycelium Melody' color='#000000' isLink link='/directory/games/'/>
          <Text x={2.1} y={-0.7} z={0.5} text='Micro Necro' color='#000000' isLink link='/directory/games/'/>
          <Text x={2.1} y={-1} z={0.5} text='Zephyrinth' color='#000000' isLink link='/directory/games/'/>
          <Text x={2.1} y={-1.3} z={0.5} text='Tetraduel' color='#000000' isLink link='/directory/games/'/>

          {/* Code box */}
          <Box width={3} height={2} depth={1} x={-3.5} y={0.5} color='#fdd1fa'/>
          <Text scale={0.4} x={-4.9} y={1} z={0.5} text='Code' color='#000000' isLink link='/directory/code'/>
          <Text x={-4.9} y={0.6} z={0.5} text='Programming Language' color='#000000' isLink link='/directory/code'/>

          {/* Websites box */}
          <Box width={3} height={2} depth={1} x={0} y={-1.3} color='#fdd1fa'/>
          <Text scale={0.4} x={-1.4} y={-0.8} z={0.5} text='Websites' color='#000000'/>
          <Text x={-1.4} y={-1.2} z={0.5} text='boop.website' color='#000000' isLink link='https://boop.website'/>
          <Text x={-1.4} y={-1.5} z={0.5} text='boop.cool' color='#000000' isLink link='https://boop.cool'/>
          <Text x={-1.4} y={-1.8} z={0.5} text='boop.pink' color='#000000' isLink link='https://boop.pink'/>
          <Text x={-1.4} y={-2.1} z={0.5} text='tilde.town/~boop' color='#000000' isLink link='https://tilde.town/~boop/'/>

          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 3, 5]} />
        </Suspense>
      </Canvas>
    </div>
  )
}