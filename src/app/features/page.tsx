"use client"
import React from "react"
import { Header } from "@/components/shared/Header"
import { BackgroundClient } from "@/components/background/BackgroundClient"
import FeaturesHero from "@/components/features/FeaturesHero"
import FeaturesGrid from "@/components/features/FeaturesGrid"
import FeaturesCTA from "@/components/features/FeaturesCTA"
import features from "@/data/features"

export default function FeaturesPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0a] text-white overflow-hidden scanlines vhs-effect">
      {/* Three.js Background */}
      <BackgroundClient />

      {/* Subtle animated overlays */}
      <div className="fixed inset-0 -z-10">
        <div
          style={{
            background: "radial-gradient(circle at 20% 50%, rgba(139, 0, 0, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 0, 0, 0.15) 0%, transparent 50%)",
          }}
          className="opacity-60 animate-pulse"
        />
      </div>

      <div className="fixed inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,.3)_1px,transparent_1px)] bg-[size:4rem_4rem] animate-[bg-scroll_20s_linear_infinite]" />
      </div>

      <Header />

      <main className="max-w-7xl mx-auto px-4 py-20">
        <div className="relative">
          <div className="absolute inset-0 -top-20 h-[500px] opacity-40 pointer-events-none">
            <BackgroundClient />
          </div>

          <FeaturesHero />
        </div>

        <FeaturesGrid features={features} />

        <FeaturesCTA />
      </main>
    </div>
  )
}
