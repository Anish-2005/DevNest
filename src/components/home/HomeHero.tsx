"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Zap, ChevronRight, ArrowRight } from "lucide-react"
import React from "react"

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
}

const itemVariants: any = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      <motion.div className="relative z-10 max-w-6xl mx-auto text-center" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-900/20 border border-red-700/40 text-red-200 text-sm font-medium st-retro neon-glow-red">
            <Zap className="w-4 h-4" />
            Enter the Upside Down of Learning
          </span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="st-title text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight text-balance st-flicker">
          Master Web <span className="bg-gradient-to-r from-red-500 via-red-600 to-yellow-500 bg-clip-text text-transparent">Development</span> <span className="text-neon-yellow">Like Never Before</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="st-retro text-xl md:text-2xl text-red-200/70 mb-12 max-w-3xl mx-auto leading-relaxed">
          Dive into the dark dimension of code. Interactive paths through the shadows, real-time tracking, and AI guidance from beyond.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-6 justify-center">
          <Link href="/portal">
            <motion.button className="px-8 py-4 rounded-lg bg-gradient-to-r from-red-700 to-red-900 font-bold text-lg shadow-2xl shadow-red-700/50 hover:shadow-red-700/70 transition-all flex items-center gap-2 group st-retro neon-glow-red" whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
              Enter the Portal <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
          <motion.button className="px-8 py-4 rounded-lg border-2 border-red-700/50 font-bold text-lg hover:bg-red-900/20 transition-all flex items-center gap-2 st-retro text-red-200" whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
            Watch Demo <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        <motion.div className="grid grid-cols-3 gap-6 mt-24" variants={containerVariants} initial="hidden" animate="visible">
          {[
            { value: "50K+", label: "Trapped Souls" },
            { value: "200+", label: "Dark Paths" },
            { value: "99%", label: "Escape Rate" },
          ].map((stat, i) => (
            <motion.div key={i} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="text-center">
              <div className="st-title text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent st-flicker">{stat.value}</div>
              <div className="text-red-300/60 text-sm md:text-base mt-2 st-retro">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
