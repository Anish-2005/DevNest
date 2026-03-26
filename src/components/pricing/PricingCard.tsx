"use client"
import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

type Feature = { name: string; included: boolean }

export default function PricingCard({ plan, index }: any) {
  const Icon = plan.icon as any

  return (
    <motion.div
      className={`relative rounded-2xl border p-7 backdrop-blur-xl ${
        plan.highlight
          ? "border-red-700/70 bg-red-950/25 shadow-[0_16px_45px_-24px_rgba(210,20,37,0.62)]"
          : "border-red-900/60 bg-black/55"
      }`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
    >
      {plan.highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-red-700 to-red-900 px-3 py-1 text-xs font-semibold text-white neon-glow-red">
          Most Popular
        </div>
      )}

      <div className="mb-7 text-center">
        <div className="neon-glow-red mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-red-700 to-red-900">
          <Icon className="h-7 w-7 text-white" />
        </div>

        <h3 className="st-title text-2xl">{plan.name}</h3>
        <p className="st-retro mt-2 text-sm">{plan.description}</p>

        <div className="mt-4">
          <span className="text-4xl font-semibold text-white">{plan.price}</span>
          <span className="ml-2 text-sm text-red-100/70">{plan.period}</span>
        </div>
      </div>

      <ul className="mb-7 space-y-3">
        {plan.features.map((feature: Feature, idx: number) => (
          <li key={idx} className="flex items-start gap-3 text-sm">
            {feature.included ? (
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-400" />
            ) : (
              <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-900/60" />
            )}
            <span className={feature.included ? "text-red-100/85" : "text-red-100/40"}>{feature.name}</span>
          </li>
        ))}
      </ul>

      <button className={plan.highlight ? "btn-primary w-full" : "btn-secondary w-full"}>{plan.cta}</button>
    </motion.div>
  )
}

