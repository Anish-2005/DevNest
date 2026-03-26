"use client"
import { useState } from "react"
import { Header } from "@/components/shared/Header"
import { Footer } from "@/components/shared/Footer"
import RoadmapHero from "@/components/roadmaps/RoadmapHero"
import RoadmapSelector from "@/components/roadmaps/RoadmapSelector"
import RoadmapGrid from "@/components/roadmaps/RoadmapGrid"
import RoadmapCTA from "@/components/roadmaps/RoadmapCTA"
import roadmaps from "@/data/roadmaps"

export default function RoadmapsPage() {
  const [activeRoadmap, setActiveRoadmap] = useState(0)

  return (
    <div className="app-page">
      <Header />

      <main className="page-container py-14 sm:py-16">
        <RoadmapHero />

        <RoadmapSelector roadmaps={roadmaps} activeIndex={activeRoadmap} onSelect={setActiveRoadmap} />

        <div className="space-y-8">
          <div className="surface-card p-8 sm:p-10">
            <h2 className="text-3xl font-semibold tracking-tight text-white">{roadmaps[activeRoadmap].title}</h2>
            <p className="mt-3 text-base text-slate-300 sm:text-lg">{roadmaps[activeRoadmap].description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="chip">
                <span className="mr-1 text-slate-400">Duration:</span>{roadmaps[activeRoadmap].duration}
              </div>
              <div className="chip">
                <span className="mr-1 text-slate-400">Level:</span>{roadmaps[activeRoadmap].level}
              </div>
            </div>
          </div>

          <RoadmapGrid modules={roadmaps[activeRoadmap].modules} />
        </div>

        <RoadmapCTA />
      </main>

      <Footer />
    </div>
  )
}

