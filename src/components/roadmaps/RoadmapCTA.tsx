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
      <h3 className="st-title text-3xl sm:text-4xl">Ready To Begin Your Journey?</h3>
      <p className="st-retro mx-auto mt-4 max-w-2xl text-base sm:text-lg">
        Choose your path and start escaping the darkness tonight.
      </p>
      <div className="mt-8">
        <Link href="/portal" className="btn-primary">
          Start Your Escape
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  )
}

