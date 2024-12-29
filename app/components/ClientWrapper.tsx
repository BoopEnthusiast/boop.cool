// @ts-nocheck
'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, AdaptiveDpr, AdaptiveEvents, Text3D } from '@react-three/drei'
import { useState } from 'react'
import Noto from './Noto Sans_Regular.json'

function Box({width = 1, height = 1, depth = 1, x = 0, y = 0, z = 0, color = 'magenta'}) {
  return (
    <mesh position={[x, y, z]}>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

function Text({scale = 0.2, x = 0, y = 0, z = 1, text = 'Hello, World!', color = 'black', isLink = false, link = ''}) {
  const [hovered, setHovered] = useState(false)

  return (
    <Text3D position={[x, y, z]} font={Noto} scale={scale}
    onClick={(event) => {
      if (isLink) {
        event.stopPropagation()
        window.location.href = {link}
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
      <meshStandardMaterial color={hovered ? 'magenta' : color} />
    </Text3D>
  )
}

export default function ClientWrapper() {
  return (
    <div>
      <Canvas>
        <Suspense fallback={null}>
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />

          {/* Intro box */}
          <Box width={3} height={2.2} depth={0.5} y={0.95} z={0.75} color='#9b15f6'/>
          <Text scale={0.3} x={-1.4} y={1.7} color='#fbe9fa'/>
          <Text x={-1.4} y={1.4} text='Use mouse/touch' color='#e6e7c9'/>
          <Text x={-1.4} y={1.1} text='controls to move.' color='#e6e7c9'/>
          <Text scale={0.22} x={-1.4} y={0.8} text='LMB/One finger:' color='#c8ece4'/>
          <Text x={-1.4} y={0.5} text='Rotate' color='#c8ece4'/>
          <Text scale={0.22} x={-1.4} y={0.2} text='RMB/Two fingers:' color='#f4def6'/>
          <Text x={-1.4} y={-0.1} text='Pan' color='#f4def6'/>
          
          

          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 3, 5]} />
        </Suspense>
      </Canvas>
    </div>
  )
}