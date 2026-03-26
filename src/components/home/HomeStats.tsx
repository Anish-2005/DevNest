"use client"
import { motion } from "framer-motion"

export default function HomeStats({ stats }: any) {
  return (
    <section className="section-block">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat: any, i: number) => {
          const Icon = stat.icon as any
          return (
            <motion.div
              key={i}
              className="surface-card p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-cyan-300">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-3xl font-semibold text-white">{stat.number}</p>
              <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

