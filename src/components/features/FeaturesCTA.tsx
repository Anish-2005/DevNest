"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import React from "react"

export function FeaturesCTA() {
  return (
    <motion.div className="relative rounded-3xl border-2 border-red-900/40 bg-gradient-to-br from-black/90 via-red-950/30 to-yellow-950/20 p-12 md:p-20 text-center overflow-hidden backdrop-blur-xl neon-glow-red" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <motion.div className="absolute inset-0 bg-gradient-to-r from-red-900/0 via-red-700/20 to-yellow-900/0" animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }} transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }} />

      <div className="relative z-10">
        <h3 className="st-title text-4xl md:text-5xl font-black mb-6 st-flicker">
          Ready To Harness {" "}
          <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">These Powers?</span>
        </h3>
        <p className="st-retro text-xl text-red-200/70 mb-10 max-w-2xl mx-auto">Enter the portal and unlock all supernatural abilities</p>
        <Link href="/">
          <motion.button className="px-12 py-5 rounded-full bg-gradient-to-r from-red-700 via-red-800 to-red-900 font-bold text-xl shadow-2xl shadow-red-700/60 hover:shadow-red-700/90 transition-all st-retro neon-glow-red" whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
            Enter The Portal
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}

export default FeaturesCTA
