"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code2, Layers, Zap, Database, Cloud, Shield, ChevronRight, Check } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/shared/Header"
import { BackgroundClient } from "@/components/background/BackgroundClient"

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function RoadmapsPage() {
  const [activeRoadmap, setActiveRoadmap] = useState(0)

  const roadmaps = [
    {
      title: "Frontend Dimension",
      icon: Code2,
      color: "from-red-700 to-red-900",
      description: "Master the visible realm - HTML, CSS, JavaScript, and React",
      duration: "3-4 months",
      level: "Beginner to Advanced",
      modules: [
        {
          name: "HTML & CSS Fundamentals",
          duration: "2 weeks",
          topics: ["Semantic HTML", "CSS Grid & Flexbox", "Responsive Design", "Animations"],
          projects: ["Portfolio Website", "Landing Page"]
        },
        {
          name: "JavaScript Mastery",
          duration: "4 weeks",
          topics: ["ES6+ Features", "DOM Manipulation", "Async/Await", "Closures"],
          projects: ["Interactive Game", "Todo App"]
        },
        {
          name: "React & Modern Frontend",
          duration: "6 weeks",
          topics: ["Components & Props", "Hooks", "State Management", "React Router"],
          projects: ["Social Media Dashboard", "E-commerce Store"]
        },
        {
          name: "Advanced Topics",
          duration: "4 weeks",
          topics: ["Next.js", "TypeScript", "Performance", "Testing"],
          projects: ["Full-Stack Blog", "SaaS Application"]
        }
      ]
    },
    {
      title: "Backend Abyss",
      icon: Database,
      color: "from-red-800 to-red-950",
      description: "Descend into server-side development with Node.js and databases",
      duration: "4-5 months",
      level: "Intermediate",
      modules: [
        {
          name: "Node.js & Express",
          duration: "3 weeks",
          topics: ["Server Setup", "Routing", "Middleware", "REST APIs"],
          projects: ["API Server", "Authentication System"]
        },
        {
          name: "Database Design",
          duration: "4 weeks",
          topics: ["SQL vs NoSQL", "PostgreSQL", "MongoDB", "Data Modeling"],
          projects: ["Blog Database", "User Management"]
        },
        {
          name: "API Development",
          duration: "4 weeks",
          topics: ["RESTful Design", "GraphQL", "WebSockets", "Rate Limiting"],
          projects: ["Real-time Chat API", "GraphQL Server"]
        },
        {
          name: "Security & Deployment",
          duration: "5 weeks",
          topics: ["Authentication", "Authorization", "Docker", "CI/CD"],
          projects: ["Secure API", "Production Deployment"]
        }
      ]
    },
    {
      title: "Full-Stack Portal",
      icon: Layers,
      color: "from-red-600 to-yellow-700",
      description: "Master both dimensions - complete full-stack applications",
      duration: "6-8 months",
      level: "Advanced",
      modules: [
        {
          name: "Architecture & Design",
          duration: "2 weeks",
          topics: ["System Design", "Microservices", "Monoliths", "Patterns"],
          projects: ["Architecture Diagrams"]
        },
        {
          name: "Frontend + Backend Integration",
          duration: "6 weeks",
          topics: ["API Integration", "State Management", "Error Handling", "Performance"],
          projects: ["Task Management App", "Social Network"]
        },
        {
          name: "DevOps & Cloud",
          duration: "4 weeks",
          topics: ["AWS/Azure", "Kubernetes", "Monitoring", "Logging"],
          projects: ["Cloud Deployment", "Auto-scaling App"]
        },
        {
          name: "Production Best Practices",
          duration: "4 weeks",
          topics: ["Testing", "Documentation", "Code Review", "Maintenance"],
          projects: ["Enterprise Application"]
        }
      ]
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
              Choose Your Escape Route
            </span>
          </motion.div>
          
          <h1 className="st-title text-6xl md:text-7xl font-black mb-6 st-flicker">
            Twisted{" "}
            <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              Learning Paths
            </span>
          </h1>
          
          <p className="st-retro text-xl text-red-200/70 max-w-3xl mx-auto">
            Navigate through structured curriculum designed to guide you from the darkness into mastery
          </p>
        </motion.div>

        {/* Roadmap Selector */}
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

        {/* Roadmap Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRoadmap}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Roadmap Overview */}
            <motion.div className="p-8 rounded-3xl border-2 border-red-900/30 bg-black/60 backdrop-blur-xl neon-glow-red">
              <h2 className="st-title text-4xl font-bold mb-4 text-neon-red">
                {roadmaps[activeRoadmap].title}
              </h2>
              <p className="st-retro text-lg text-red-200/70 mb-6">
                {roadmaps[activeRoadmap].description}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 rounded-full bg-red-900/20 border border-red-700/40 text-red-300 st-retro">
                  <span className="text-red-400 font-bold">Duration:</span> {roadmaps[activeRoadmap].duration}
                </div>
                <div className="px-4 py-2 rounded-full bg-red-900/20 border border-red-700/40 text-red-300 st-retro">
                  <span className="text-red-400 font-bold">Level:</span> {roadmaps[activeRoadmap].level}
                </div>
              </div>
            </motion.div>

            {/* Modules */}
            <div className="space-y-6">
              {roadmaps[activeRoadmap].modules.map((module, i) => (
                <motion.div
                  key={i}
                  className="group p-8 rounded-2xl border-2 border-red-900/30 bg-black/60 backdrop-blur-xl hover:border-red-700/60 transition-all neon-glow-red"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 10, scale: 1.01 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="st-title text-2xl font-bold text-neon-red mb-2">
                        Module {i + 1}: {module.name}
                      </h3>
                      <p className="st-retro text-red-300/60">{module.duration}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center neon-glow-red">
                      <span className="st-title text-xl text-white">{i + 1}</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="st-retro text-red-400 font-bold mb-3">Topics Covered:</h4>
                      <ul className="space-y-2">
                        {module.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-red-200/70 st-retro">
                            <Check className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="st-retro text-red-400 font-bold mb-3">Projects:</h4>
                      <ul className="space-y-2">
                        {module.projects.map((project, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-red-200/70 st-retro">
                            <ChevronRight className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          className="mt-20 relative rounded-3xl border-2 border-red-900/40 bg-gradient-to-br from-black/90 via-red-950/30 to-yellow-950/20 p-12 text-center overflow-hidden backdrop-blur-xl neon-glow-red"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10">
            <h3 className="st-title text-4xl font-black mb-6 st-flicker">
              Ready To Begin{" "}
              <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                Your Journey?
              </span>
            </h3>
            <p className="st-retro text-xl text-red-200/70 mb-10">
              Choose your path and start escaping the darkness today
            </p>
            <Link href="/">
              <motion.button
                className="px-12 py-5 rounded-full bg-gradient-to-r from-red-700 to-red-900 font-bold text-xl shadow-2xl shadow-red-700/60 hover:shadow-red-700/90 transition-all st-retro neon-glow-red"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Escape
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
