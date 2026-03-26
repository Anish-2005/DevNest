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
          Supernatural Powers Unleashed
        </span>
      </motion.div>

      <h1 className="section-title">All The Dark Features</h1>
      <p className="section-subtitle">
        Harness the complete arsenal of cursed tools and supernatural abilities to master full-stack development from the shadows.
      </p>
    </motion.div>
  )
}

export default FeaturesHero

