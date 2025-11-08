"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronRight,
  Sparkles,
  Code2,
  Zap,
  Target,
  Users,
  TrendingUp,
  ArrowRight,
  Lock,
  Cpu,
  Lightbulb,
  Layers,
} from "lucide-react"
import dynamic from "next/dynamic"

// Dynamically import 3D components to avoid SSR issues
const ThreeScene = dynamic(() => import("./three-scene"), { ssr: false })
const DataVisualizer = dynamic(() => import("./data-viz"), { ssr: false })

// Enhanced animation variants
const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
}

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const floatingVariants: any = {
  initial: { y: 0 },
  animate: {
    y: [-20, 20],
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  },
}

const glowVariants: any = {
  initial: { boxShadow: "0 0 0px rgba(139, 92, 246, 0)" },
  animate: {
    boxShadow: ["0 0 20px rgba(139, 92, 246, 0)", "0 0 40px rgba(139, 92, 246, 0.5)", "0 0 20px rgba(139, 92, 246, 0)"],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
    },
  },
}

export default function Home() {
  const [activeRoadmap, setActiveRoadmap] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const roadmaps = [
    {
      title: "Frontend Mastery",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      steps: [
        { name: "HTML & CSS Fundamentals", progress: 100 },
        { name: "JavaScript ES6+", progress: 100 },
        { name: "React & Components", progress: 85 },
        { name: "State Management", progress: 70 },
        { name: "Performance Optimization", progress: 45 },
      ],
    },
    {
      title: "Full-Stack Excellence",
      icon: Layers,
      color: "from-purple-500 to-pink-500",
      steps: [
        { name: "Node.js & Express", progress: 90 },
        { name: "Database Design", progress: 75 },
        { name: "API Development", progress: 80 },
        { name: "Authentication & Security", progress: 60 },
        { name: "Deployment & DevOps", progress: 50 },
      ],
    },
    {
      title: "Web Performance",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      steps: [
        { name: "Bundle Optimization", progress: 88 },
        { name: "Code Splitting", progress: 82 },
        { name: "Caching Strategies", progress: 75 },
        { name: "Core Web Vitals", progress: 65 },
        { name: "Advanced Monitoring", progress: 40 },
      ],
    },
  ]

  return (
    <div className="relative w-full min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      />

      {/* Floating grid background */}
      <div className="fixed inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.3)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Dynamic mouse-following glow */}
      <motion.div
        className="fixed -z-10 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
          x: mousePos.x - 192,
          y: mousePos.y - 192,
        }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      />

      {/* ========== HEADER ========== */}
      <motion.header
        className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/50 border-b border-purple-500/10 py-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <motion.div className="flex items-center gap-2 group cursor-pointer" whileHover={{ scale: 1.05 }}>
            <motion.div
              className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6" />
            </motion.div>
              <span className="font-bold text-xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              DevNest
            </span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            {["Roadmaps", "Features", "Community", "Pricing"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          <motion.button
            className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold text-white shadow-lg hover:shadow-purple-500/50 transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </motion.header>

      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
        {/* Hero 3D Scene */}
        <div className="absolute inset-0 opacity-40">
          <ThreeScene />
        </div>

        <motion.div
          className="relative z-10 max-w-6xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm font-medium">
              ✨ Next Generation Learning Platform
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight text-balance"
          >
            Master Web{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Development
            </span>{" "}
            Like Never Before
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Interactive learning paths, real-time progress tracking, and AI-powered guidance. Transform your development
            journey today.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-6 justify-center">
            <motion.button
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 font-bold text-lg shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all flex items-center gap-2 group"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Learning <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              className="px-8 py-4 rounded-lg border-2 border-purple-500/50 font-bold text-lg hover:bg-purple-500/10 transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Demo <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Floating stats */}
          <motion.div
            className="grid grid-cols-3 gap-6 mt-24"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              { value: "50K+", label: "Active Learners" },
              { value: "200+", label: "Learning Paths" },
              { value: "99%", label: "Success Rate" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-slate-500 text-sm md:text-base mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-slate-500">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-2 bg-purple-500 rounded-full mt-2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ========== FEATURES SECTION ========== */}
      <section className="relative py-24 px-4" id="features">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Powerful{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Everything you need to accelerate your web development career
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Personalized Paths",
                description: "AI-curated learning paths tailored to your goals and pace",
              },
              {
                icon: Cpu,
                title: "Real-time Feedback",
                description: "Instant code analysis and performance insights with AI guidance",
              },
              {
                icon: Lock,
                title: "Secure Environment",
                description: "Practice in isolated sandboxes with production-like conditions",
              },
              {
                icon: Users,
                title: "Community Hub",
                description: "Connect with 50K+ developers and collaborate on projects",
              },
              {
                icon: TrendingUp,
                title: "Progress Analytics",
                description: "Advanced tracking and insights into your learning journey",
              },
              {
                icon: Lightbulb,
                title: "Smart Suggestions",
                description: "AI-powered recommendations based on your skill gaps",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="group p-8 rounded-2xl border border-purple-500/20 bg-slate-900/50 backdrop-blur hover:border-purple-500/50 transition-all cursor-pointer relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:via-purple-500/10 group-hover:to-cyan-500/10 transition-all"
                  initial={false}
                />

                <motion.div className="relative z-10">
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-purple-500/40 group-hover:to-cyan-500/40 transition-all"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <feature.icon className="w-6 h-6 text-purple-400" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ROADMAPS SECTION ========== */}
      <section className="relative py-24 px-4" id="roadmaps">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Structured{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Learning Paths
              </span>
            </h2>
          </motion.div>

          {/* Roadmap selector */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {roadmaps.map((roadmap, i) => (
              <motion.button
                key={i}
                className={`px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${
                  activeRoadmap === i
                    ? `bg-gradient-to-r ${roadmap.color} text-white shadow-lg`
                    : "bg-slate-800/50 border border-slate-700 text-slate-300 hover:border-slate-600"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveRoadmap(i)}
              >
                <roadmap.icon className="w-5 h-5" />
                {roadmap.title}
              </motion.button>
            ))}
          </div>

          {/* Roadmap content with smooth transitions */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRoadmap}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
              {/* Steps */}
              <div className="space-y-4">
                {roadmaps[activeRoadmap].steps.map((step, i) => (
                  <motion.div
                    key={i}
                    className="group p-6 rounded-xl border border-purple-500/20 bg-slate-900/50 hover:border-purple-500/50 transition-all cursor-pointer relative overflow-hidden"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ x: 10, boxShadow: "0 10px 30px rgba(139, 92, 246, 0.2)" }}
                  >
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-bold text-lg">{step.name}</span>
                        <span className="text-sm text-purple-400 font-semibold">{step.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${step.progress}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Data Visualization */}
              <motion.div
                className="rounded-2xl border border-purple-500/20 bg-slate-900/50 p-8 overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <DataVisualizer roadmapData={roadmaps[activeRoadmap].steps} />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: "Learners Worldwide", icon: Users },
              { number: "15K+", label: "Projects Completed", icon: Code2 },
              { number: "4.9/5", label: "Satisfaction Rate", icon: Sparkles },
              { number: "24/7", label: "AI Support", icon: Cpu },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div className="mb-4 flex justify-center" whileHover={{ scale: 1.2, rotate: 10 }}>
                  <div className="p-4 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20">
                    <stat.icon className="w-8 h-8 text-purple-400" />
                  </div>
                </motion.div>
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-slate-400 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative rounded-3xl border-2 border-purple-500/30 bg-gradient-to-br from-slate-900/80 via-purple-900/20 to-cyan-900/20 p-12 md:p-20 text-center overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Animated glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-cyan-500/0"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />

            <motion.div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-black mb-6">
                Ready to Transform Your{" "}
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Development Career?
                </span>
              </h3>
              <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                Join thousands of developers who have mastered web development with our cutting-edge platform.
              </p>
              <motion.button
                className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 font-bold text-lg shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial Today
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <motion.footer
        className="relative border-t border-purple-500/10 bg-slate-950/80 backdrop-blur-sm py-12 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {[
              { title: "Product", links: ["Features", "Pricing", "Security", "Roadmap"] },
              { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
              { title: "Community", links: ["Discord", "Twitter", "GitHub", "Newsletter"] },
              { title: "Legal", links: ["Privacy", "Terms", "Cookies", "Compliance"] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-bold mb-4 text-purple-400">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-800 pt-8 flex items-center justify-between text-slate-500 text-sm">
            <p>&copy; 2025 DevNest. All rights reserved.</p>
            <div className="flex gap-4">
              {["Twitter", "GitHub", "LinkedIn"].map((social) => (
                <a key={social} href="#" className="hover:text-purple-400 transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
