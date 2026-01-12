"use client"
import { motion } from "framer-motion"
import { Check, ChevronRight } from "lucide-react"
import React from "react"

export default function RoadmapCard({ module, index }: any) {
  return (
    <motion.div
      key={index}
      className="group p-8 rounded-2xl border-2 border-red-900/30 bg-black/60 backdrop-blur-xl hover:border-red-700/60 transition-all neon-glow-red"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ x: 10, scale: 1.01 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="st-title text-2xl font-bold text-neon-red mb-2">Module {index + 1}: {module.name}</h3>
          <p className="st-retro text-red-300/60">{module.duration}</p>
        </div>
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center neon-glow-red">
          <span className="st-title text-xl text-white">{index + 1}</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="st-retro text-red-400 font-bold mb-3">Topics Covered:</h4>
          <ul className="space-y-2">
            {module.topics.map((topic: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2 text-red-200/70 st-retro">
                <Check className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                {topic}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="st-retro text-red-400 font-bold mb-3">Projects:</h4>
          <ul className="space-y-2">
            {module.projects.map((project: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2 text-red-200/70 st-retro">
                <ChevronRight className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                {project}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
