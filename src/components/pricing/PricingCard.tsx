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
          ? "border-sky-400/55 bg-slate-900/80 shadow-[0_16px_45px_-24px_rgba(56,189,248,0.65)]"
          : "border-slate-700/60 bg-slate-900/65"
      }`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
    >
      {plan.highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-1 text-xs font-semibold text-white">
          Most Popular
        </div>
      )}

      <div className="mb-7 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
          <Icon className="h-7 w-7 text-white" />
        </div>

        <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
        <p className="mt-2 text-sm text-slate-300">{plan.description}</p>

        <div className="mt-4">
          <span className="text-4xl font-semibold text-white">{plan.price}</span>
          <span className="ml-2 text-sm text-slate-400">{plan.period}</span>
        </div>
      </div>

      <ul className="mb-7 space-y-3">
        {plan.features.map((feature: Feature, idx: number) => (
          <li key={idx} className="flex items-start gap-3 text-sm">
            {feature.included ? (
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-300" />
            ) : (
              <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-600" />
            )}
            <span className={feature.included ? "text-slate-200" : "text-slate-500"}>{feature.name}</span>
          </li>
        ))}
      </ul>

      <button className={plan.highlight ? "btn-primary w-full" : "btn-secondary w-full"}>{plan.cta}</button>
    </motion.div>
  )
}

