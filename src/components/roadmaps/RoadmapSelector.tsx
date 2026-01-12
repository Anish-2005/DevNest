"use client"
import React from "react"
import { motion } from "framer-motion"

export default function RoadmapSelector({ roadmaps, activeIndex, onSelect }: any) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      {roadmaps.map((roadmap: any, i: number) => (
        <motion.button
          key={i}
          className={`px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 st-retro ${
            activeIndex === i
              ? `bg-gradient-to-r from-red-700 to-red-900 text-white shadow-lg neon-glow-red`
              : "bg-black/60 border border-red-900/40 text-red-200/70 hover:border-red-700/60"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(i)}
        >
          <roadmap.icon className="w-5 h-5" />
          {roadmap.title}
        </motion.button>
      ))}
    </div>
  )
}
