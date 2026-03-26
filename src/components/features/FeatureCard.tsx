"use client"
import { motion } from "framer-motion"
import { Feature } from "@/data/features"

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

export function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const Icon = feature.icon as any

  return (
    <motion.div
      className="surface-card surface-card-hover p-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      variants={cardVariants}
    >
      <div className="neon-glow-red mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-700 to-red-900">
        <Icon className="h-6 w-6 text-white" />
      </div>

      <h3 className="st-title text-2xl">{feature.title}</h3>
      <p className="st-retro mt-3 text-sm leading-relaxed">{feature.description}</p>

      <ul className="mt-5 space-y-2">
        {feature.details.map((detail, idx) => (
          <li key={idx} className="st-retro flex items-center gap-2 text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
            {detail}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default FeatureCard

