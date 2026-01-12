"use client"
import { motion, AnimatePresence } from "framer-motion"
import dynamic from "next/dynamic"
import React from "react"

const DataVisualizer = dynamic(() => import("@/components/visualizations/DataVisualizer"), { ssr: false })

export default function HomeRoadmapsPreview({ roadmaps, activeIndex, onSelect }: any) {
  return (
    <section className="relative py-24 px-4" id="roadmaps">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="st-title text-5xl md:text-6xl font-black mb-6 st-flicker">Twisted <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">Escape Routes</span></h2>
        </motion.div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {roadmaps.map((roadmap: any, i: number) => {
            const Icon = roadmap.icon as any
            return (
              <motion.button key={i} className={`px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 st-retro ${activeIndex === i ? `bg-gradient-to-r from-red-700 to-red-900 text-white shadow-lg neon-glow-red` : "bg-black/60 border border-red-900/40 text-red-200/70 hover:border-red-700/60"}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => onSelect(i)}>
                <Icon className="w-5 h-5" />
                {roadmap.title}
              </motion.button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-5">
              {roadmaps[activeIndex].steps.map((step: any, i: number) => (
                <motion.div key={i} className="group p-8 rounded-2xl border-2 border-red-900/30 bg-black/60 backdrop-blur-xl hover:border-red-700/60 transition-all cursor-pointer relative overflow-hidden neon-glow-red" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ x: 15, scale: 1.02 }}>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="st-title font-bold text-xl text-neon-red">{step.name}</span>
                      <span className="st-retro text-lg text-red-400 font-bold px-3 py-1 rounded-full bg-red-900/20 border border-red-700/40">{step.progress}%</span>
                    </div>
                    <div className="w-full h-3 bg-black/70 rounded-full overflow-hidden border border-red-900/50 shadow-inner">
                      <motion.div className="h-full bg-gradient-to-r from-red-700 via-red-600 to-yellow-600 rounded-full relative" initial={{ width: 0 }} animate={{ width: `${step.progress}%` }} transition={{ duration: 1.2, delay: 0.2 }}>
                        <motion.div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" animate={{ x: ["-100%", "100%"] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }} />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div className="rounded-2xl border border-red-900/30 bg-black/70 p-8 overflow-hidden neon-glow-red backdrop-blur-xl" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
              <DataVisualizer roadmapData={roadmaps[activeIndex].steps} />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
