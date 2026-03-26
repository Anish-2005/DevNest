"use client"
import { motion } from "framer-motion"

export default function RoadmapSelector({ roadmaps, activeIndex, onSelect }: any) {
  return (
    <div className="mb-10 flex flex-wrap justify-center gap-3">
      {roadmaps.map((roadmap: any, i: number) => {
        const Icon = roadmap.icon as any
        return (
          <motion.button
            key={i}
            className={activeIndex === i ? "btn-primary" : "btn-secondary"}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(i)}
          >
            <Icon className="h-4 w-4" />
            {roadmap.title}
          </motion.button>
        )
      })}
    </div>
  )
}

