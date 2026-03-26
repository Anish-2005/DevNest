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
      <h3 className="st-title text-3xl sm:text-4xl">
        Ready To Harness
        <br />
        These Powers?
      </h3>
      <p className="st-retro mx-auto mt-4 max-w-2xl text-base sm:text-lg">
        Enter the portal and unlock every supernatural advantage.
      </p>
      <div className="mt-8">
        <Link href="/portal" className="btn-primary">
          Enter The Portal
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  )
}

export default FeaturesCTA

