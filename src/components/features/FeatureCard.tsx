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
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
        <Icon className="h-6 w-6 text-white" />
      </div>

      <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{feature.description}</p>

      <ul className="mt-5 space-y-2">
        {feature.details.map((detail, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
            {detail}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default FeatureCard

