"use client"
import { motion, AnimatePresence } from "framer-motion"
import dynamic from "next/dynamic"

const DataVisualizer = dynamic(() => import("@/components/visualizations/DataVisualizer"), { ssr: false })

export default function HomeRoadmapsPreview({ roadmaps, activeIndex, onSelect }: any) {
  return (
    <section className="section-block" id="roadmaps">
      <div className="section-header">
        <h2 className="section-title">Twisted Escape Routes</h2>
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {roadmaps.map((roadmap: any, i: number) => {
          const Icon = roadmap.icon as any
          const active = activeIndex === i
          return (
            <motion.button
              key={i}
              className={active ? "btn-primary" : "btn-secondary"}
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

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-2"
        >
          <div className="space-y-4">
            {roadmaps[activeIndex].steps.map((step: any, i: number) => (
              <motion.div
                key={i}
                className="surface-card p-5"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="text-sm font-medium text-red-50 sm:text-base">{step.name}</span>
                  <span className="chip">{step.progress}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-red-950/50">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-red-700 via-red-600 to-yellow-700"
                    initial={{ width: 0 }}
                    animate={{ width: `${step.progress}%` }}
                    transition={{ duration: 0.8, delay: 0.05 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="surface-card p-5" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}>
            <DataVisualizer roadmapData={roadmaps[activeIndex].steps} />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

