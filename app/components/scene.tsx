// @ts-nocheck
'use client'

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from 'three'

export default function Scene() {
  return (
    <Canvas>
      <OrbitControls />
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhongMaterial />
      </mesh>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 5]} color="red" />
    </Canvas>
  )
}
