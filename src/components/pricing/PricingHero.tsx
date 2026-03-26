"use client"
import { motion } from "framer-motion"
import { Wallet } from "lucide-react"

const itemVariants: any = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export default function PricingHero() {
  return (
    <motion.div className="section-header" initial="hidden" animate="visible" variants={itemVariants}>
      <motion.div variants={itemVariants} className="mb-6">
        <span className="badge-pill">
          <Wallet className="h-4 w-4" />
          Transparent Pricing
        </span>
      </motion.div>

      <h1 className="section-title">Choose the plan that fits your growth stage</h1>
      <p className="section-subtitle">
        Flexible plans for individuals and teams. No hidden fees, and you can change plans anytime.
      </p>
    </motion.div>
  )
}

