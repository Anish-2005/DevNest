"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Trail {
  id: number
  x: number
  y: number
}

export default function CursorTrail() {
  const [trails, setTrails] = useState<Trail[]>([])
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    // Only enable on larger screens
    if (window.innerWidth < 768) {
      setEnabled(false)
      return
    }

    let trailId = 0
    const handleMouseMove = (e: MouseEvent) => {
      if (!enabled) return
      
      const newTrail: Trail = {
        id: trailId++,
        x: e.clientX,
        y: e.clientY,
      }
      
      setTrails((prev) => [...prev.slice(-8), newTrail])
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [enabled])

  if (!enabled) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {trails.map((trail, i) => (
          <motion.div
            key={trail.id}
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: trail.x - 6,
              top: trail.y - 6,
              background: `radial-gradient(circle, ${
                i % 3 === 0
                  ? "rgba(139, 92, 246, 0.6)"
                  : i % 3 === 1
                  ? "rgba(6, 182, 212, 0.6)"
                  : "rgba(236, 72, 153, 0.6)"
              }, transparent)`,
            }}
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 0, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
