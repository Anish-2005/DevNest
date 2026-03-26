"use client"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

const itemVariants: any = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export function FeaturesHero() {
  return (
    <motion.div className="section-header" initial="hidden" animate="visible" variants={itemVariants}>
      <motion.div variants={itemVariants} className="mb-6">
        <span className="badge-pill">
          <Sparkles className="h-4 w-4" />
          Product Features
        </span>
      </motion.div>

      <h1 className="section-title">Everything you need to learn and ship with confidence</h1>
      <p className="section-subtitle">
        DevNest brings curriculum, mentorship, tooling, and analytics together in one professional learning environment.
      </p>
    </motion.div>
  )
}

export default FeaturesHero
