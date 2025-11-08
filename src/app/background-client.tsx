"use client"

import ThreeScene from "./three-scene"

export default function BackgroundClient() {
  return (
    // wrapper preserves fixed full-bleed placement and prevents pointer capture
    <div className="fixed inset-0 -z-20 pointer-events-none">
      <ThreeScene />
    </div>
  )
}
