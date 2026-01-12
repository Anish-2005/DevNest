"use client"

import React from "react"
import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { Zap, ChevronRight, ArrowRight, Radio } from "lucide-react"

/* ----------------------------------
   Animation Variants (STRICTLY TYPED)
-----------------------------------*/

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const buttonVariants: Variants = {
  idle: { scale: 1 },
  hover: {
    scale: 1.06,
    y: -4,
    boxShadow: "0px 0px 40px rgba(185, 28, 28, 0.7)",
  },
  tap: { scale: 0.95 },
}

/* ----------------------------------
   Component
-----------------------------------*/

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-black">
      
      {/* Ambient portal glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[700px] rounded-full bg-red-700/20 blur-[140px] animate-pulse" />
      </div>

      {/* Optional noise overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-red-700/40 bg-red-900/20 text-red-200 text-sm tracking-widest">
            <Radio className="w-4 h-4 animate-pulse" />
            TRANSMISSION RECEIVED
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
        >
          Learn Web Dev
          <br />
          <span className="bg-gradient-to-r from-red-500 via-red-600 to-yellow-500 bg-clip-text text-transparent">
            Beyond Reality
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-red-200/70 mb-14 max-w-3xl mx-auto leading-relaxed"
        >
          The signal is unstable.  
          The code is alive.  
          Step into a parallel dimension where learning adapts, tracks, and evolves.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-6 justify-center"
        >
          <Link href="/portal">
            <motion.button
              variants={buttonVariants}
              initial="idle"
              whileHover="hover"
              whileTap="tap"
              className="px-10 py-4 rounded-lg bg-gradient-to-r from-red-700 to-red-900 font-bold text-lg text-white flex items-center gap-3"
            >
              Enter the Portal
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </Link>

          <motion.button
            variants={buttonVariants}
            initial="idle"
            whileHover="hover"
            whileTap="tap"
            className="px-10 py-4 rounded-lg border-2 border-red-700/50 font-bold text-lg text-red-200 flex items-center gap-3"
          >
            Watch the Signal
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-28"
          variants={containerVariants}
        >
          {[
            { value: "50K+", label: "Connected Minds" },
            { value: "200+", label: "Learning Paths" },
            { value: "99%", label: "Completion Rate" },
          ].map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-red-300/60 text-sm mt-3 tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
