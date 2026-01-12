"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function StartJourneyButton({ pathId, pathTitle, gradient }: { pathId: string; pathTitle: string; gradient?: string }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleStart = () => {
    setLoading(true)
    try {
      const key = "devnest_enrollments"
      const existing = typeof window !== "undefined" ? localStorage.getItem(key) : null
      const enrollments = existing ? JSON.parse(existing) : []
      if (!enrollments.find((e: any) => e.id === pathId)) {
        enrollments.push({ id: pathId, title: pathTitle, startedAt: new Date().toISOString() })
        localStorage.setItem(key, JSON.stringify(enrollments))
      }
    } catch (e) {
      // ignore
    }
    // small delay for UX then redirect back to portal overview
    setTimeout(() => {
      setLoading(false)
      router.push("/portal")
    }, 400)
  }

  return (
    <button
      onClick={handleStart}
      className={`px-8 py-4 rounded-full bg-gradient-to-r ${gradient ?? "from-red-700 to-red-900"} font-bold text-lg shadow-lg neon-glow-red hover:shadow-red-700/80 transition-all st-retro`}
      disabled={loading}
    >
      {loading ? "Starting..." : "Start Journey"}
    </button>
  )
}
