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
          Choose Your Soul Contract
        </span>
      </motion.div>

      <h1 className="section-title">Pricing From The Underworld</h1>
      <p className="section-subtitle">
        Pick your escape tier. No hidden curses, cancel your contract anytime.
      </p>
    </motion.div>
  )
}

