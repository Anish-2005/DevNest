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
      <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Need help selecting the right plan?</h3>
      <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
        Talk to our team for guidance on individual, student, or organization pricing.
      </p>
      <div className="mt-8">
        <Link href="/" className="btn-primary">
          <MessageSquare className="h-4 w-4" />
          Contact Support
        </Link>
      </div>
    </motion.div>
  )
}

