// @ts-nocheck
'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei'

function Box({width = 1, height = 1, depth = 1, x = 0, y = 0, z = 0}) {
  return (
    <mesh position={[x, y, z]}>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial color="magenta" />
    </mesh>
  )
}

export default function ClientWrapper() {
  return (
    <div>
      <Canvas>
        <Suspense fallback={null}>
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />

          <Box width={2} height={2} depth={2} x={-2.5} y={2}/>
          <Box width={3} height={4} depth={2} y={-2}/>

          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 0, 5]} color="magenta" />
        </Suspense>
      </Canvas>
    </div>
  )
}