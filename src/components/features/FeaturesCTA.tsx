"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function FeaturesCTA() {
  return (
    <motion.div
      className="surface-card mt-12 overflow-hidden p-8 text-center sm:p-12"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Ready to put these capabilities into practice?
      </h3>
      <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
        Explore the portal and start with a path aligned to your goals.
      </p>
      <div className="mt-8">
        <Link href="/portal" className="btn-primary">
          Explore Portal
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  )
}

export default FeaturesCTA
