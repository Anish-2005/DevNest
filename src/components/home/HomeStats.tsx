"use client"
import { motion } from "framer-motion"
import React from "react"

export default function HomeStats({ stats }: any) {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat: any, i: number) => {
            const Icon = stat.icon as any
            return (
              <motion.div key={i} className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }}>
                <motion.div className="mb-4 flex justify-center" whileHover={{ scale: 1.2, rotate: 10 }}>
                  <div className="p-4 rounded-full bg-gradient-to-br from-red-900/30 to-yellow-900/20 neon-glow-red">
                    <Icon className="w-8 h-8 text-red-400" />
                  </div>
                </motion.div>
                <div className="st-title text-4xl md:text-5xl font-black bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent mb-2 st-flicker">{stat.number}</div>
                <p className="text-red-300/60 text-lg st-retro">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
