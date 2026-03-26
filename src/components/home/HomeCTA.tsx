"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function HomeCTA() {
  return (
    <section className="section-block">
      <motion.div
        className="surface-card overflow-hidden p-8 text-center sm:p-12"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <span className="badge-pill">The Portal Is Closing</span>
        <h3 className="st-title mx-auto mt-5 max-w-3xl text-3xl sm:text-4xl">
          Will You Escape The
          <br />
          Upside Down?
        </h3>
        <p className="st-retro mx-auto mt-4 max-w-2xl text-base sm:text-lg">
          Join 50K+ trapped souls who found their way through the darkness. Your escape route awaits.
        </p>
        <div className="mt-8">
          <Link href="/portal" className="btn-primary">
            Cross The Threshold
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

