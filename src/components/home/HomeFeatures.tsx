"use client"
import { motion } from "framer-motion"

export default function HomeFeatures({ features }: any) {
  return (
    <section className="section-block" id="features">
      <div className="section-header">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Supernatural Powers
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          Harness dark forces to accelerate your journey through the code dimension.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature: any, i: number) => {
          const Icon = feature.icon as any
          return (
            <motion.div
              key={i}
              className="surface-card surface-card-hover p-6"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <div className="neon-glow-red mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-700 to-red-900">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="st-retro mt-3 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

