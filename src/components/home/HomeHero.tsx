"use client"

import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react"

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
        className="surface-card overflow-hidden p-8 sm:p-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span variants={itemVariants} className="badge-pill">
          <CheckCircle2 className="h-4 w-4" />
          Production-Ready Learning Paths
        </motion.span>

        <motion.h1 variants={itemVariants} className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Build practical engineering skills that translate directly to real-world delivery.
        </motion.h1>

        <motion.p variants={itemVariants} className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
          DevNest combines structured curriculum, hands-on projects, and progress analytics to help you move from fundamentals to confident execution.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/portal" className="btn-primary">
            Explore Learning Paths
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/roadmaps" className="btn-secondary">
            View Roadmaps
            <BookOpen className="h-4 w-4" />
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { value: "50K+", label: "Active learners" },
            { value: "200+", label: "Guided modules" },
            { value: "4.9/5", label: "Learner rating" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-slate-700/70 bg-slate-900/50 p-4">
              <p className="text-2xl font-semibold text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
