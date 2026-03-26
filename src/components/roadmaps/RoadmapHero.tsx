"use client"
import { motion } from "framer-motion"
import { Map } from "lucide-react"

const itemVariants: any = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export default function RoadmapHero({
  title = "Twisted Learning Paths",
  subtitle = "Navigate structured curriculum designed to guide you from the darkness into mastery.",
}: any) {
  return (
    <motion.div className="section-header" initial="hidden" animate="visible" variants={itemVariants}>
      <motion.div variants={itemVariants} className="mb-6">
        <span className="badge-pill">
          <Map className="h-4 w-4" />
          Choose Your Escape Route
        </span>
      </motion.div>

      <h1 className="section-title">{title}</h1>
      <p className="section-subtitle">{subtitle}</p>
    </motion.div>
  )
}

