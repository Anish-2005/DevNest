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
        <span className="badge-pill">Start Today</span>
        <h3 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Turn your learning plan into consistent execution.
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
          Join thousands of developers using DevNest to build stronger fundamentals and faster project delivery.
        </p>
        <div className="mt-8">
          <Link href="/portal" className="btn-primary">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
