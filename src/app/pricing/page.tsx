"use client"
import { motion } from "framer-motion"
import { Code2, Zap, Check, X, Skull, Flame, Ghost } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/shared/Header"
import { BackgroundClient } from "@/components/background/BackgroundClient"

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function PricingPage() {
  const plans = [
    {
      name: "Lost Soul",
      icon: Ghost,
      price: "Free",
      period: "Forever",
      description: "For wanderers testing the waters of darkness",
      features: [
        { name: "5 basic courses", included: true },
        { name: "Community access", included: true },
        { name: "Code playground", included: true },
        { name: "Basic projects", included: true },
        { name: "Mentor support", included: false },
        { name: "Certificate", included: false },
        { name: "Job board access", included: false },
        { name: "Advanced courses", included: false }
      ],
      cta: "Enter Free",
      highlight: false
    },
    {
      name: "Trapped Developer",
      icon: Skull,
      price: "$29",
      period: "per month",
      description: "For souls committed to escaping the void",
      features: [
        { name: "All courses & roadmaps", included: true },
        { name: "Community & forums", included: true },
        { name: "Full IDE access", included: true },
        { name: "All projects", included: true },
        { name: "1-on-1 mentor sessions", included: true },
        { name: "Completion certificates", included: true },
        { name: "Job board access", included: true },
        { name: "Priority support", included: false }
      ],
      cta: "Start Escaping",
      highlight: true
    },
    {
      name: "Shadow Master",
      icon: Flame,
      price: "$99",
      period: "per month",
      description: "For those who've conquered the darkness",
      features: [
        { name: "Everything in Trapped", included: true },
        { name: "Unlimited mentor sessions", included: true },
        { name: "Private community", included: true },
        { name: "Career coaching", included: true },
        { name: "Interview prep", included: true },
        { name: "Lifetime access", included: true },
        { name: "Custom learning paths", included: true },
        { name: "Priority support 24/7", included: true }
      ],
      cta: "Achieve Mastery",
      highlight: false
    }
  ]

  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0a] text-white overflow-hidden scanlines vhs-effect">
      {/* Three.js Background */}
      <BackgroundClient />

      {/* Background Effects */}
      <motion.div
        className="fixed inset-0 -z-10"
        style={{
          background: "radial-gradient(circle at 20% 50%, rgba(139, 0, 0, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 0, 0, 0.15) 0%, transparent 50%)",
        }}
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="fixed inset-0 -z-10 opacity-10">
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,.3)_1px,transparent_1px)] bg-[size:4rem_4rem]"
          animate={{ backgroundPosition: ["0px 0px", "64px 64px"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-900/20 border border-red-700/40 text-red-200 text-sm font-medium st-retro neon-glow-red">
              <Zap className="w-4 h-4" />
              Choose Your Soul Contract
            </span>
          </motion.div>
          
          <h1 className="st-title text-6xl md:text-7xl font-black mb-6 st-flicker">
            Pricing From The{" "}
            <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              Underworld
            </span>
          </h1>
          
          <p className="st-retro text-xl text-red-200/70 max-w-3xl mx-auto">
            Select your escape plan. No hidden curses, cancel your contract anytime
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`relative p-8 rounded-3xl border-2 backdrop-blur-xl ${
                plan.highlight
                  ? "border-red-700/60 bg-gradient-to-br from-red-950/60 to-black/60 scale-105"
                  : "border-red-900/30 bg-black/60"
              } neon-glow-red`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: plan.highlight ? 1.05 : 1.02 }}
            >
              {plan.highlight && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-red-700 to-red-900 text-white text-sm font-bold st-retro neon-glow-red"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Most Popular
                </motion.div>
              )}

              <div className="text-center mb-8">
                <motion.div 
                  className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center neon-glow-red"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <plan.icon className="w-10 h-10 text-red-100" />
                </motion.div>
                
                <h3 className="st-title text-3xl font-bold text-neon-red mb-2">
                  {plan.name}
                </h3>
                
                <p className="st-retro text-red-200/60 mb-4">
                  {plan.description}
                </p>

                <div className="mb-2">
                  <span className="st-title text-5xl font-black text-white">
                    {plan.price}
                  </span>
                  <span className="st-retro text-red-300/70 ml-2">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-red-900/50 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={`st-retro text-sm ${
                      feature.included ? "text-red-200/80" : "text-red-300/40"
                    }`}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.button
                className={`w-full py-4 rounded-full font-bold text-lg st-retro transition-all ${
                  plan.highlight
                    ? "bg-gradient-to-r from-red-700 to-red-900 text-white shadow-lg neon-glow-red hover:shadow-red-700/80"
                    : "bg-red-900/20 border-2 border-red-700/40 text-red-200 hover:bg-red-900/40"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="st-title text-4xl font-black text-center mb-12 text-neon-red st-flicker">
            Frequently Asked Curses
          </h2>

          <div className="space-y-6">
            {[
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
            ].map((faq, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl border-2 border-red-900/30 bg-black/60 backdrop-blur-xl neon-glow-red"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="st-retro text-lg font-bold text-red-300 mb-2">{faq.q}</h3>
                <p className="st-retro text-red-200/70">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-20 relative rounded-3xl border-2 border-red-900/40 bg-gradient-to-br from-black/90 via-red-950/30 to-yellow-950/20 p-12 text-center overflow-hidden backdrop-blur-xl neon-glow-red"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10">
            <h3 className="st-title text-4xl font-black mb-6 st-flicker">
              Still Wandering In{" "}
              <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                The Darkness?
              </span>
            </h3>
            <p className="st-retro text-xl text-red-200/70 mb-10">
              Talk to our lost souls support team for guidance
            </p>
            <Link href="/">
              <motion.button
                className="px-12 py-5 rounded-full bg-gradient-to-r from-red-700 to-red-900 font-bold text-xl shadow-2xl shadow-red-700/60 hover:shadow-red-700/90 transition-all st-retro neon-glow-red"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Support
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
