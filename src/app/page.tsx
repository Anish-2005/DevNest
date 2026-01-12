"use client"
import { useState, useEffect } from "react"
import { Header } from "@/components/shared/Header"
import { Footer } from "@/components/shared/Footer"
import { BackgroundClient } from "@/components/background/BackgroundClient"
import HomeHero from "@/components/home/HomeHero"
import HomeFeatures from "@/components/home/HomeFeatures"
import HomeRoadmapsPreview from "@/components/home/HomeRoadmapsPreview"
import HomeStats from "@/components/home/HomeStats"
import HomeCTA from "@/components/home/HomeCTA"
import { roadmaps, features, stats } from "@/data/home"

export default function Home() {
  const [activeRoadmap, setActiveRoadmap] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0a] text-white overflow-hidden scanlines vhs-effect">
      <BackgroundClient />

      <div className="fixed inset-0 -z-10" style={{ background: "radial-gradient(circle at 20% 50%, rgba(139, 0, 0, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 0, 0, 0.15) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(255, 235, 59, 0.08) 0%, transparent 50%)" }} />

      <div className="fixed inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,.3)_1px,transparent_1px)] bg-[size:4rem_4rem] animate-[bg-scroll_20s_linear_infinite]" />
      </div>

      {/* subtle floating orbs follow mouse */}
      <div style={{ position: "fixed", inset: 0, zIndex: -10 }}>
        <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", filter: "blur(48px)", background: "radial-gradient(circle, rgba(255,0,0,0.3) 0%, rgba(139,0,0,0.15) 40%, transparent 70%)", transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)` }} />
      </div>

      <Header />

      <HomeHero />

      <HomeFeatures features={features} />

      <HomeRoadmapsPreview roadmaps={roadmaps} activeIndex={activeRoadmap} onSelect={setActiveRoadmap} />

      <HomeStats stats={stats} />

      <HomeCTA />

      <Footer />
    </div>
  )
}
              