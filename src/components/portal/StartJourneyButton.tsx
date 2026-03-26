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
    } catch (_e) {
      // no-op
    }

    setTimeout(() => {
      setLoading(false)
      router.push("/portal")
    }, 400)
  }

  const gradientClass = gradient ?? "from-red-700 to-red-900"

  return (
    <button
      onClick={handleStart}
      className={`neon-glow-red inline-flex items-center justify-center rounded-xl bg-gradient-to-r ${gradientClass} px-8 py-3.5 text-sm font-semibold text-white shadow-[0_14px_35px_-18px_rgba(210,20,37,0.85)] transition-transform hover:-translate-y-0.5`}
      disabled={loading}
    >
      {loading ? "Crossing..." : "Start Journey"}
    </button>
  )
}

