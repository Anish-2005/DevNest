"use client"
import { motion } from "framer-motion"
import React from "react"

const faqs = [
  {
    q: "Can I escape my contract anytime?",
    a: "Yes, you can cancel your subscription at any time. No hidden traps or dark magic required."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, PayPal, and souls (just kidding on the last one)."
  },
  {
    q: "Is there a free trial?",
    a: "The Lost Soul plan is free forever. Upgrade anytime to unlock more dark powers."
  },
  {
    q: "Do you offer student discounts?",
    a: "Yes! Students get 40% off on all paid plans. Contact us with your .edu email."
  },
  {
    q: "What if I need help during my journey?",
    a: "All paid plans include mentor support. Shadow Masters get 24/7 priority assistance."
  }
]

export default function PricingFAQ() {
  return (
    <motion.div className="max-w-3xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <h2 className="st-title text-4xl font-black text-center mb-12 text-neon-red st-flicker">Frequently Asked Curses</h2>

      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <motion.div key={i} className="p-6 rounded-2xl border-2 border-red-900/30 bg-black/60 backdrop-blur-xl neon-glow-red" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
            <h3 className="st-retro text-lg font-bold text-red-300 mb-2">{faq.q}</h3>
            <p className="st-retro text-red-200/70">{faq.a}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
