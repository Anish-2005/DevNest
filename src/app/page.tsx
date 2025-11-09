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
  Flame,
  Skull,
} from "lucide-react"
import dynamic from "next/dynamic"
import { Header } from "@/components/shared/Header"
import { Footer } from "@/components/shared/Footer"

// Dynamically import 3D components to avoid SSR issues
const DataVisualizer = dynamic(() => import("@/components/visualizations/DataVisualizer"), { ssr: false })

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
      color: "from-red-700 to-red-900",
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
      color: "from-red-800 to-red-950",
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
      color: "from-red-600 to-yellow-700",
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
    <div className="relative w-full min-h-screen bg-[#0a0a0a] text-white overflow-hidden scanlines vhs-effect">
      {/* Dark Stranger Things background gradient */}
      <motion.div
        className="fixed inset-0 -z-10"
        style={{
          background: "radial-gradient(circle at 20% 50%, rgba(139, 0, 0, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 0, 0, 0.15) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(255, 235, 59, 0.08) 0%, transparent 50%)",
        }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      />

      {/* Eerie floating grid */}
      <div className="fixed inset-0 -z-10 opacity-10">
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,.3)_1px,transparent_1px)] bg-[size:4rem_4rem]"
          animate={{ 
            backgroundPosition: ["0px 0px", "64px 64px"],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      {/* Red glowing orbs following mouse (Upside Down energy) */}
      <motion.div
        className="fixed -z-10 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255, 0, 0, 0.3) 0%, rgba(139, 0, 0, 0.15) 40%, transparent 70%)",
          x: mousePos.x - 300,
          y: mousePos.y - 300,
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="fixed -z-10 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255, 235, 59, 0.2) 0%, transparent 70%)",
          x: mousePos.x - 250 + Math.sin(scrollY * 0.001) * 100,
          y: mousePos.y - 250 + Math.cos(scrollY * 0.001) * 100,
        }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
      />
      
      {/* Floating orbs */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed -z-10 rounded-full pointer-events-none"
          style={{
            width: `${100 + i * 30}px`,
            height: `${100 + i * 30}px`,
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
            background: i % 3 === 0 
              ? "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)"
              : i % 3 === 1
              ? "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8 + i,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* ========== HEADER ========== */}
      <motion.header
        className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-red-900/20 py-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <motion.div className="flex items-center gap-2 group cursor-pointer" whileHover={{ scale: 1.05 }}>
            <motion.div
              className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center neon-glow-red"
              animate={{ 
                boxShadow: [
                  "0 0 10px rgba(255, 0, 0, 0.5)",
                  "0 0 20px rgba(255, 0, 0, 0.8)",
                  "0 0 10px rgba(255, 0, 0, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Sparkles className="w-6 h-6 text-red-200" />
            </motion.div>
            <span className="st-title text-2xl text-neon-red st-flicker">
              DevNest
            </span>
          </motion.div>          <nav className="hidden md:flex items-center gap-8">
            {["Roadmaps", "Features", "Community", "Pricing"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative st-retro text-sm font-medium text-red-200 hover:text-neon-red transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-700 to-red-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          <motion.button
            className="px-6 py-2 rounded-full bg-gradient-to-r from-red-700 to-red-900 font-semibold text-white shadow-lg neon-glow-red hover:shadow-red-500/70 transition-shadow st-retro"
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-900/20 border border-red-700/40 text-red-200 text-sm font-medium st-retro neon-glow-red">
              <Zap className="w-4 h-4" />
              Enter the Upside Down of Learning
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="st-title text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight text-balance st-flicker"
            style={{
              textShadow: "0 0 40px rgba(255, 0, 0, 0.5), 0 0 80px rgba(255, 0, 0, 0.3), 0 0 120px rgba(255, 235, 59, 0.2)",
            }}
          >
            Master Web{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-yellow-500 bg-clip-text text-transparent">
                Development
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-600 to-yellow-500 bg-clip-text text-transparent blur-2xl opacity-50"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                Development
              </motion.span>
            </span>{" "}
            <span className="text-neon-yellow">Like Never Before</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="st-retro text-xl md:text-2xl text-red-200/70 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Dive into the dark dimension of code. Interactive paths through the shadows, real-time tracking, 
            and AI guidance from beyond. Your journey into the unknown starts here.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-6 justify-center">
            <motion.button
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-red-700 to-red-900 font-bold text-lg shadow-2xl shadow-red-700/50 hover:shadow-red-700/70 transition-all flex items-center gap-2 group st-retro neon-glow-red"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Enter the Portal <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              className="px-8 py-4 rounded-lg border-2 border-red-700/50 font-bold text-lg hover:bg-red-900/20 transition-all flex items-center gap-2 st-retro text-red-200"
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
              { value: "50K+", label: "Trapped Souls" },
              { value: "200+", label: "Dark Paths" },
              { value: "99%", label: "Escape Rate" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                className="text-center"
              >
                <div className="st-title text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent st-flicker">
                  {stat.value}
                </div>
                <div className="text-red-300/60 text-sm md:text-base mt-2 st-retro">{stat.label}</div>
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
            <span className="text-sm text-red-300/60 st-retro">Descend Deeper</span>
            <div className="w-6 h-10 border-2 border-red-700/50 rounded-full flex justify-center neon-glow-red">
              <motion.div
                className="w-1 h-2 bg-red-500 rounded-full mt-2"
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
            <h2 className="st-title text-5xl md:text-6xl font-black mb-6 st-flicker">
              Supernatural{" "}
              <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                Powers
              </span>
            </h2>
            <p className="st-retro text-xl text-red-200/70 max-w-2xl mx-auto">
              Harness dark forces to accelerate your journey through the code dimension
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Cursed Paths",
                description: "AI-conjured learning paths from the shadows, tailored to your fate",
                gradient: "from-red-700 to-red-900",
              },
              {
                icon: Cpu,
                title: "Psychic Feedback",
                description: "Instant code readings and supernatural insights from beyond",
                gradient: "from-red-800 to-yellow-700",
              },
              {
                icon: Lock,
                title: "Isolated Realm",
                description: "Practice in dimensional pockets sealed from the real world",
                gradient: "from-red-900 to-red-950",
              },
              {
                icon: Users,
                title: "Lost Souls Network",
                description: "Connect with 50K+ trapped developers in the Upside Down",
                gradient: "from-yellow-600 to-red-700",
              },
              {
                icon: TrendingUp,
                title: "Flickering Analytics",
                description: "Track your descent through the darkness with eerie metrics",
                gradient: "from-red-600 to-red-800",
              },
              {
                icon: Lightbulb,
                title: "Haunted Hints",
                description: "Whispers from the void revealing your weaknesses",
                gradient: "from-yellow-500 to-red-600",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="group p-8 rounded-3xl border-2 border-red-900/30 bg-black/60 backdrop-blur-xl hover:border-red-700/60 transition-all cursor-pointer relative overflow-hidden neon-glow-red"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.02, boxShadow: "0 25px 50px rgba(255, 0, 0, 0.4)" }}
              >
                {/* Animated red glow */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, rgba(139, 0, 0, 0.2), rgba(255, 0, 0, 0.1))`,
                  }}
                />
                
                {/* Corner red accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-700/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <motion.div className="relative z-10">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg shadow-red-700/30 group-hover:shadow-red-700/60 neon-glow-red`}
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-8 h-8 text-red-100" />
                  </motion.div>
                  <h3 className="st-title text-2xl font-bold mb-3 text-neon-red">
                    {feature.title}
                  </h3>
                  <p className="text-red-200/60 leading-relaxed st-retro">{feature.description}</p>
                  
                  {/* Hover arrow indicator */}
                  <motion.div
                    className="mt-4 flex items-center gap-2 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity st-retro"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <span className="text-sm font-semibold">Investigate</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
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
            <h2 className="st-title text-5xl md:text-6xl font-black mb-6 st-flicker">
              Twisted{" "}
              <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                Escape Routes
              </span>
            </h2>
          </motion.div>

          {/* Roadmap selector */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {roadmaps.map((roadmap, i) => (
              <motion.button
                key={i}
                className={`px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 st-retro ${
                  activeRoadmap === i
                    ? `bg-gradient-to-r from-red-700 to-red-900 text-white shadow-lg neon-glow-red`
                    : "bg-black/60 border border-red-900/40 text-red-200/70 hover:border-red-700/60"
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
              <div className="space-y-5">
                {roadmaps[activeRoadmap].steps.map((step, i) => (
                  <motion.div
                    key={i}
                    className="group p-8 rounded-2xl border-2 border-red-900/30 bg-black/60 backdrop-blur-xl hover:border-red-700/60 transition-all cursor-pointer relative overflow-hidden neon-glow-red"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ x: 15, scale: 1.02, boxShadow: "0 15px 40px rgba(255, 0, 0, 0.3)" }}
                  >
                    {/* Red glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-red-900/0 via-red-700/10 to-yellow-900/0 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="st-title font-bold text-xl text-neon-red">
                          {step.name}
                        </span>
                        <motion.span 
                          className="st-retro text-lg text-red-400 font-bold px-3 py-1 rounded-full bg-red-900/20 border border-red-700/40"
                          whileHover={{ scale: 1.1 }}
                        >
                          {step.progress}%
                        </motion.span>
                      </div>
                      <div className="w-full h-3 bg-black/70 rounded-full overflow-hidden border border-red-900/50 shadow-inner">
                        <motion.div
                          className="h-full bg-gradient-to-r from-red-700 via-red-600 to-yellow-600 rounded-full relative"
                          initial={{ width: 0 }}
                          animate={{ width: `${step.progress}%` }}
                          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Data Visualization */}
              <motion.div
                className="rounded-2xl border border-red-900/30 bg-black/70 p-8 overflow-hidden neon-glow-red backdrop-blur-xl"
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
                  <div className="p-4 rounded-full bg-gradient-to-br from-red-900/30 to-yellow-900/20 neon-glow-red">
                    <stat.icon className="w-8 h-8 text-red-400" />
                  </div>
                </motion.div>
                <div className="st-title text-4xl md:text-5xl font-black bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent mb-2 st-flicker">
                  {stat.number}
                </div>
                <p className="text-red-300/60 text-lg st-retro">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative rounded-3xl border-2 border-red-900/40 bg-gradient-to-br from-black/90 via-red-950/30 to-yellow-950/20 p-12 md:p-20 text-center overflow-hidden backdrop-blur-xl shadow-2xl shadow-red-900/30 neon-glow-red"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Multiple animated red glow effects */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-900/0 via-red-700/20 to-yellow-900/0"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />
            <motion.div
              className="absolute top-0 left-1/4 w-96 h-96 bg-red-700/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-700/20 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
            />

            <motion.div className="relative z-10">
              <motion.div
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-red-900/30 border border-red-700/50 text-red-300 text-sm font-semibold mb-6 st-retro neon-glow-red"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Flame className="w-4 h-4" />
                The Portal Is Closing
              </motion.div>
              
              <h3 className="st-title text-4xl md:text-5xl lg:text-6xl font-black mb-6 st-flicker" style={{
                textShadow: "0 0 40px rgba(255, 0, 0, 0.5), 0 0 80px rgba(255, 0, 0, 0.3)",
              }}>
                Will You Escape The{" "}
                <span className="bg-gradient-to-r from-red-500 via-red-600 to-yellow-500 bg-clip-text text-transparent">
                  Upside Down?
                </span>
              </h3>
              <p className="st-retro text-xl md:text-2xl text-red-200/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join 50K+ trapped souls who found their way through the darkness. Your escape route awaits...
              </p>
              <motion.button
                className="px-12 py-5 rounded-full bg-gradient-to-r from-red-700 via-red-800 to-red-900 font-bold text-xl shadow-2xl shadow-red-700/60 hover:shadow-red-700/90 transition-all relative overflow-hidden group neon-glow-red st-retro"
                whileHover={{ scale: 1.08, y: -8 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Cross The Threshold Now
                  <Skull className="w-5 h-5" />
                </span>
              </motion.button>
              
              <p className="text-sm text-red-400/60 mt-6 st-retro">
                No soul required • Escape in 14 days • Return anytime (if you can)
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <motion.footer
        className="relative border-t border-red-900/20 bg-black/90 backdrop-blur-sm py-12 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {[
              { title: "Dimensions", links: ["Powers", "Pricing", "Containment", "Dark Map"] },
              { title: "The Lab", links: ["Experiments", "Archives", "Recruitment", "Signals"] },
              { title: "Lost Souls", links: ["Discord", "Twitter", "GitHub", "Transmissions"] },
              { title: "Protocols", links: ["Privacy", "Terms", "Cookies", "Compliance"] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="st-title font-bold mb-4 text-red-400 st-flicker">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="st-retro text-red-300/50 hover:text-red-300 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-red-900/30 pt-8 flex items-center justify-between text-red-400/50 text-sm st-retro">
            <p>&copy; 2025 DevNest. All souls trapped.</p>
            <div className="flex gap-4">
              {["Twitter", "GitHub", "LinkedIn"].map((social) => (
                <a key={social} href="#" className="hover:text-red-400 transition-colors">
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
