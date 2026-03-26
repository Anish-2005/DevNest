"use client"
import { motion } from "framer-motion"

const faqs = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. You can cancel or change your plan at any time from your account settings.",
  },
  {
    q: "Which payment methods are supported?",
    a: "We support major credit cards and standard online payment methods.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. The Starter plan is free and includes core courses and community access.",
  },
  {
    q: "Do you offer student discounts?",
    a: "Yes, we offer discounted pricing for eligible students. Contact support with your student details.",
  },
  {
    q: "What support is included?",
    a: "Paid plans include mentorship and priority support options based on plan tier.",
  },
]

export default function PricingFAQ() {
  return (
    <motion.div className="mx-auto max-w-3xl" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">Frequently asked questions</h2>

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
            <h3 className="text-base font-semibold text-slate-100">{faq.q}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{faq.a}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
