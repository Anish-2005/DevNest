"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import React from "react"

export default function PricingCTA() {
  return (
    <motion.div className="mt-20 relative rounded-3xl border-2 border-red-900/40 bg-gradient-to-br from-black/90 via-red-950/30 to-yellow-950/20 p-12 text-center overflow-hidden backdrop-blur-xl neon-glow-red" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <div className="relative z-10">
        <h3 className="st-title text-4xl font-black mb-6 st-flicker">Still Wandering In {" "}<span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">The Darkness?</span></h3>
        <p className="st-retro text-xl text-red-200/70 mb-10">Talk to our lost souls support team for guidance</p>
        <Link href="/">
          <motion.button className="px-12 py-5 rounded-full bg-gradient-to-r from-red-700 to-red-900 font-bold text-xl shadow-2xl shadow-red-700/60 hover:shadow-red-700/90 transition-all st-retro neon-glow-red" whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>Contact Support</motion.button>
        </Link>
      </div>
    </motion.div>
  )
}
