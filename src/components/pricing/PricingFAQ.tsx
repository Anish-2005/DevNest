"use client"
import { motion } from "framer-motion"

const faqs = [
  {
    q: "Can I escape my contract anytime?",
    a: "Yes. Cancel or switch plans whenever you want. No hidden traps.",
  },
  {
    q: "What payment rituals do you accept?",
    a: "All major credit cards and standard online payments are supported.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. Lost Soul stays free forever and gives access to core routes.",
  },
  {
    q: "Do you offer student discounts?",
    a: "Yes. Students receive reduced pricing with valid academic details.",
  },
  {
    q: "What support is included?",
    a: "Paid tiers include mentor support, with Shadow Master receiving priority 24/7 guidance.",
  },
]

export default function PricingFAQ() {
  return (
    <motion.div className="mx-auto max-w-3xl" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <h2 className="st-title mb-10 text-center text-3xl sm:text-4xl">Frequently Asked Curses</h2>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            className="surface-card p-5"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.04 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base font-semibold text-red-100">{faq.q}</h3>
            <p className="st-retro mt-2 text-sm leading-relaxed">{faq.a}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

