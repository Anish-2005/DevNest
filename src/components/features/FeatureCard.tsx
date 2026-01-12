"use client"
import { motion } from "framer-motion"
import React from "react"
import { Feature } from "@/data/features"

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const Icon = feature.icon as any

  return (
    <motion.div
      className="group p-8 rounded-3xl border-2 border-red-900/30 bg-black/60 backdrop-blur-xl hover:border-red-700/60 transition-all cursor-pointer relative overflow-hidden neon-glow-red"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      whileHover={{ y: -10, scale: 1.02, boxShadow: "0 25px 50px rgba(255, 0, 0, 0.4)" }}
      variants={cardVariants}
    >
      <motion.div className="absolute inset-0 bg-gradient-to-r from-red-900/0 via-red-700/10 to-yellow-900/0 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10">
        <motion.div
          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center mb-6 shadow-lg shadow-red-700/30 group-hover:shadow-red-700/60 neon-glow-red"
          whileHover={{ scale: 1.15, rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="w-8 h-8 text-red-100" />
        </motion.div>

        <h3 className="st-title text-2xl font-bold mb-3 text-neon-red">{feature.title}</h3>

        <p className="text-red-200/60 leading-relaxed st-retro mb-4">{feature.description}</p>

        <ul className="space-y-2">
          {feature.details.map((detail, idx) => (
            <li key={idx} className="flex items-center gap-2 text-red-300/50 text-sm st-retro">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full neon-glow-red" />
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default FeatureCard
