// @ts-nocheck
'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei'

function Box({width, height, depth}) {
  return (
    <mesh>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial color="magenta" />
    </mesh>
  )
}

export default function ClientWrapper() {
  return (
    <div className="w-full h-screen">
      <Canvas>
        <Suspense fallback={null}>
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />
          <Box width={3} height={4} depth={2}/>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 0, 5]} color="magenta" />
        </Suspense>
      </Canvas>
    </div>
  )
}