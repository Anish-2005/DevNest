"use client"

import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { ArrowRight, Radio, Skull } from "lucide-react"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export default function HomeHero() {
  return (
    <section className="section-block">
      <motion.div
        className="surface-card relative overflow-hidden p-8 sm:p-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="floating-fog left-[-120px] top-[-140px] h-64 w-64 bg-red-700/25" />
        <div className="floating-fog right-[-90px] bottom-[-130px] h-56 w-56 bg-amber-500/20 [animation-delay:1.5s]" />

        <motion.span variants={itemVariants} className="badge-pill">
          <Radio className="h-4 w-4" />
          Transmission Received
        </motion.span>

        <motion.h1 variants={itemVariants} className="st-title mt-6 max-w-4xl text-4xl sm:text-5xl lg:text-6xl">
          Learn Web Dev
          <br />
          Beyond Reality
        </motion.h1>

        <motion.p variants={itemVariants} className="st-retro mt-5 max-w-3xl text-base leading-relaxed sm:text-lg">
          The signal is unstable. The code is alive. Step into a parallel dimension where learning adapts, tracks, and evolves.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/portal" className="btn-primary">
            Enter The Portal
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/roadmaps" className="btn-secondary">
            Watch The Signal
            <Skull className="h-4 w-4" />
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { value: "50K+", label: "Connected Minds" },
            { value: "200+", label: "Escape Routes" },
            { value: "4.9/5", label: "Signal Strength" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-red-900/60 bg-black/40 p-4">
              <p className="text-2xl font-semibold text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-red-100/70">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

