"use client"

import { ThreeScene } from "@/components/three/ThreeScene"

export function BackgroundClient() {
  return (
    // wrapper preserves fixed full-bleed placement and prevents pointer capture
    <div className="fixed inset-0 -z-20 pointer-events-none">
      <ThreeScene />
    </div>
  )
}

export default BackgroundClient
