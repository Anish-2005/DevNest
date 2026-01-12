"use client"
import { motion } from "framer-motion"
import { Zap } from "lucide-react"
import React from "react"

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function PricingHero() {
  return (
    <div className="relative">
      <motion.div className="relative z-10 text-center mb-20" initial="hidden" animate="visible" variants={itemVariants}>
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-900/20 border border-red-700/40 text-red-200 text-sm font-medium st-retro neon-glow-red">
            <Zap className="w-4 h-4" />
            Choose Your Soul Contract
          </span>
        </motion.div>

        <h1 className="st-title text-6xl md:text-7xl font-black mb-6 st-flicker">
          Pricing From The {" "}
          <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">Underworld</span>
        </h1>

        <p className="st-retro text-xl text-red-200/70 max-w-3xl mx-auto">
          Select your escape plan. No hidden curses, cancel your contract anytime
        </p>
      </motion.div>
    </div>
  )
}
