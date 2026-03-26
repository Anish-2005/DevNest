"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function RoadmapCTA() {
  return (
    <motion.div
      className="surface-card mt-12 p-8 text-center sm:p-12"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Ready to start a focused roadmap?</h3>
      <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
        Pick a track, follow the modules, and build a portfolio that demonstrates real capability.
      </p>
      <div className="mt-8">
        <Link href="/portal" className="btn-primary">
          Start a learning path
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  )
}

