"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { MessageSquare } from "lucide-react"

export default function PricingCTA() {
  return (
    <motion.div
      className="surface-card mt-12 p-8 text-center sm:p-12"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="st-title text-3xl sm:text-4xl">Still Wandering In The Darkness?</h3>
      <p className="st-retro mx-auto mt-4 max-w-2xl text-base sm:text-lg">
        Talk to our lost-souls support team for guidance before the gate shuts.
      </p>
      <div className="mt-8">
        <Link href="/" className="btn-primary">
          <MessageSquare className="h-4 w-4" />
          Contact The Watchers
        </Link>
      </div>
    </motion.div>
  )
}

