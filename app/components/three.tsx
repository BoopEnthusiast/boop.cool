'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Create a dynamic component with SSR disabled
const Scene = dynamic(() => import('./scene'), {
  ssr: false
})

// Main component that renders the Canvas
export default function ThreeScene() {
  return (
    <div className="w-full h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <Scene />
      </Suspense>
    </div>
  )
}