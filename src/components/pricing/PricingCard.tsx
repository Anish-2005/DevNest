"use client"
import { motion } from "framer-motion"
import React from "react"

type Feature = { name: string; included: boolean }

export default function PricingCard({ plan, index }: any) {
  const Icon = plan.icon as any

  return (
    <motion.div
      className={`relative p-8 rounded-3xl border-2 backdrop-blur-xl ${
        plan.highlight
          ? "border-red-700/60 bg-gradient-to-br from-red-950/60 to-black/60 scale-105"
          : "border-red-900/30 bg-black/60"
      } neon-glow-red`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: plan.highlight ? 1.05 : 1.02 }}
    >
      {plan.highlight && (
        <motion.div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-red-700 to-red-900 text-white text-sm font-bold st-retro neon-glow-red" animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          Most Popular
        </motion.div>
      )}

      <div className="text-center mb-8">
        <motion.div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center neon-glow-red" whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }}>
          <Icon className="w-10 h-10 text-red-100" />
        </motion.div>

        <h3 className="st-title text-3xl font-bold text-neon-red mb-2">{plan.name}</h3>
        <p className="st-retro text-red-200/60 mb-4">{plan.description}</p>

        <div className="mb-2">
          <span className="st-title text-5xl font-black text-white">{plan.price}</span>
          <span className="st-retro text-red-300/70 ml-2">{plan.period}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature: Feature, idx: number) => (
          <li key={idx} className="flex items-start gap-3">
            {feature.included ? (
              <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
            ) : (
              <svg className="w-5 h-5 text-red-900/50 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.3 5.7L12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3 10.6 10.6 16.9 4.3z"/></svg>
            )}
            <span className={`st-retro text-sm ${feature.included ? "text-red-200/80" : "text-red-300/40"}`}>{feature.name}</span>
          </li>
        ))}
      </ul>

      <motion.button className={`w-full py-4 rounded-full font-bold text-lg st-retro transition-all ${plan.highlight ? "bg-gradient-to-r from-red-700 to-red-900 text-white shadow-lg neon-glow-red hover:shadow-red-700/80" : "bg-red-900/20 border-2 border-red-700/40 text-red-200 hover:bg-red-900/40"}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>{plan.cta}</motion.button>
    </motion.div>
  )
}
