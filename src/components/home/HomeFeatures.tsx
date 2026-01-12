"use client"
import { motion } from "framer-motion"
import React from "react"

export default function HomeFeatures({ features }: any) {
  return (
    <section className="relative py-24 px-4" id="features">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="st-title text-5xl md:text-6xl font-black mb-6 st-flicker">Supernatural <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">Powers</span></h2>
          <p className="st-retro text-xl text-red-200/70 max-w-2xl mx-auto">Harness dark forces to accelerate your journey through the code dimension</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature: any, i: number) => {
            const Icon = feature.icon as any
            return (
              <motion.div key={i} className="group p-8 rounded-3xl border-2 border-red-900/30 bg-black/60 backdrop-blur-xl hover:border-red-700/60 transition-all cursor-pointer relative overflow-hidden neon-glow-red" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }} whileHover={{ y: -15, scale: 1.02 }}>
                <motion.div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg shadow-red-700/30 group-hover:shadow-red-700/60 neon-glow-red`} whileHover={{ scale: 1.15, rotate: 360 }} transition={{ duration: 0.6 }}>
                  <Icon className="w-8 h-8 text-red-100" />
                </motion.div>
                <h3 className="st-title text-2xl font-bold mb-3 text-neon-red">{feature.title}</h3>
                <p className="text-red-200/60 leading-relaxed st-retro">{feature.description}</p>
                <motion.div className="mt-4 flex items-center gap-2 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity st-retro" initial={{ x: -10 }} whileHover={{ x: 0 }}>
                  <span className="text-sm font-semibold">Investigate</span>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
