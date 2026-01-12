"use client"
import { useState } from "react"
import { BackgroundClient } from "@/components/background/BackgroundClient"
import { Header } from "@/components/shared/Header"
import RoadmapHero from "@/components/roadmaps/RoadmapHero"
import RoadmapSelector from "@/components/roadmaps/RoadmapSelector"
import RoadmapGrid from "@/components/roadmaps/RoadmapGrid"
import RoadmapCTA from "@/components/roadmaps/RoadmapCTA"
import roadmaps from "@/data/roadmaps"

export default function RoadmapsPage() {
  const [activeRoadmap, setActiveRoadmap] = useState(0)

  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0a] text-white overflow-hidden scanlines vhs-effect">
      <BackgroundClient />

      <div className="fixed inset-0 -z-10">
        <div style={{ background: "radial-gradient(circle at 20% 50%, rgba(139, 0, 0, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 0, 0, 0.15) 0%, transparent 50%)" }} className="opacity-60 animate-pulse" />
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

          <RoadmapHero />
        </div>

        <RoadmapSelector roadmaps={roadmaps} activeIndex={activeRoadmap} onSelect={setActiveRoadmap} />

        <div className="space-y-8">
          <div className="p-8 rounded-3xl border-2 border-red-900/30 bg-black/60 backdrop-blur-xl neon-glow-red">
            <h2 className="st-title text-4xl font-bold mb-4 text-neon-red">{roadmaps[activeRoadmap].title}</h2>
            <p className="st-retro text-lg text-red-200/70 mb-6">{roadmaps[activeRoadmap].description}</p>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 rounded-full bg-red-900/20 border border-red-700/40 text-red-300 st-retro">
                <span className="text-red-400 font-bold">Duration:</span> {roadmaps[activeRoadmap].duration}
              </div>
              <div className="px-4 py-2 rounded-full bg-red-900/20 border border-red-700/40 text-red-300 st-retro">
                <span className="text-red-400 font-bold">Level:</span> {roadmaps[activeRoadmap].level}
              </div>
            </div>
          </div>

          <RoadmapGrid modules={roadmaps[activeRoadmap].modules} />
        </div>

        <RoadmapCTA />
      </main>
    </div>
  )
}
