"use client"
import { motion } from "framer-motion"
import { Flame, Skull } from "lucide-react"
import React from "react"

export default function HomeCTA() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div className="relative rounded-3xl border-2 border-red-900/40 bg-gradient-to-br from-black/90 via-red-950/30 to-yellow-950/20 p-12 md:p-20 text-center overflow-hidden backdrop-blur-xl shadow-2xl shadow-red-900/30 neon-glow-red" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <motion.div className="absolute inset-0 bg-gradient-to-r from-red-900/0 via-red-700/20 to-yellow-900/0" animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }} transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }} />
          <div className="relative z-10">
            <motion.div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-red-900/30 border border-red-700/50 text-red-300 text-sm font-semibold mb-6 st-retro neon-glow-red" animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
              <Flame className="w-4 h-4" />
              The Portal Is Closing
            </motion.div>

            <h3 className="st-title text-4xl md:text-5xl lg:text-6xl font-black mb-6 st-flicker">Will You Escape The <span className="bg-gradient-to-r from-red-500 via-red-600 to-yellow-500 bg-clip-text text-transparent">Upside Down?</span></h3>
            <p className="st-retro text-xl md:text-2xl text-red-200/70 mb-10 max-w-2xl mx-auto leading-relaxed">Join 50K+ trapped souls who found their way through the darkness. Your escape route awaits...</p>
            <motion.button className="px-12 py-5 rounded-full bg-gradient-to-r from-red-700 via-red-800 to-red-900 font-bold text-xl shadow-2xl shadow-red-700/60 hover:shadow-red-700/90 transition-all relative overflow-hidden group neon-glow-red st-retro" whileHover={{ scale: 1.08, y: -8 }} whileTap={{ scale: 0.95 }}>
              <motion.div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0" animate={{ x: ["-100%", "200%"] }} transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }} />
              <span className="relative z-10 flex items-center gap-2">Cross The Threshold Now <Skull className="w-5 h-5" /></span>
            </motion.button>
            <p className="text-sm text-red-400/60 mt-6 st-retro">No soul required • Escape in 14 days • Return anytime (if you can)</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
