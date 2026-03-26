"use client"
import { useState } from "react"
import { Header } from "@/components/shared/Header"
import { Footer } from "@/components/shared/Footer"
import HomeHero from "@/components/home/HomeHero"
import HomeFeatures from "@/components/home/HomeFeatures"
import HomeRoadmapsPreview from "@/components/home/HomeRoadmapsPreview"
import HomeStats from "@/components/home/HomeStats"
import HomeCTA from "@/components/home/HomeCTA"
import { roadmaps, features, stats } from "@/data/home"

export default function Home() {
  const [activeRoadmap, setActiveRoadmap] = useState(0)

  return (
    <div className="app-page">
      <Header />

      <main className="page-container pb-8">
        <HomeHero />
        <HomeFeatures features={features} />
        <HomeRoadmapsPreview roadmaps={roadmaps} activeIndex={activeRoadmap} onSelect={setActiveRoadmap} />
        <HomeStats stats={stats} />
        <HomeCTA />
      </main>

      <Footer />
    </div>
  )
}
