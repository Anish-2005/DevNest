"use client"
import { motion } from "framer-motion"
import { 
  Target, Cpu, Lock, Users, TrendingUp, Lightbulb, 
  Code2, Zap, Shield, Globe, BookOpen, Brain,
  Terminal, GitBranch, Database, Server, Layers, Cloud
} from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/shared/Header"
import { BackgroundClient } from "@/components/background/BackgroundClient"

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function FeaturesPage() {
  const features = [
    {
      icon: Target,
      title: "Cursed Paths",
      description: "AI-conjured learning paths from the shadows, tailored to your fate and skill level",
      details: ["Personalized curriculum", "Adaptive difficulty", "Progress tracking", "Skill assessments"]
    },
    {
      icon: Cpu,
      title: "Psychic Feedback",
      description: "Instant code readings and supernatural insights from beyond the veil",
      details: ["Real-time code analysis", "AI-powered suggestions", "Performance metrics", "Best practices guidance"]
    },
    {
      icon: Lock,
      title: "Isolated Realm",
      description: "Practice in dimensional pockets sealed from the real world",
      details: ["Sandbox environments", "Production simulations", "Safe experimentation", "Version control"]
    },
    {
      icon: Users,
      title: "Lost Souls Network",
      description: "Connect with 50K+ trapped developers in the Upside Down",
      details: ["Peer collaboration", "Code reviews", "Discussion forums", "Mentorship program"]
    },
    {
      icon: TrendingUp,
      title: "Flickering Analytics",
      description: "Track your descent through the darkness with eerie metrics",
      details: ["Learning progress", "Time tracking", "Skill graphs", "Achievement system"]
    },
    {
      icon: Lightbulb,
      title: "Haunted Hints",
      description: "Whispers from the void revealing your weaknesses",
      details: ["Personalized tips", "Skill gap analysis", "Resource recommendations", "Learning strategies"]
    },
    {
      icon: Code2,
      title: "Dark IDE Integration",
      description: "Code directly in our possessed development environment",
      details: ["Web-based IDE", "Syntax highlighting", "Auto-completion", "Debugging tools"]
    },
    {
      icon: Terminal,
      title: "Terminal from Beyond",
      description: "Command line interface connected to the shadow realm",
      details: ["Full terminal access", "Package management", "Git integration", "Custom scripts"]
    },
    {
      icon: Database,
      title: "Spectral Databases",
      description: "Master SQL and NoSQL in haunted data dimensions",
      details: ["PostgreSQL", "MongoDB", "Redis", "MySQL practice"]
    },
    {
      icon: Server,
      title: "Cursed Backend",
      description: "Build APIs and servers in the darkest depths",
      details: ["Node.js", "Express", "REST APIs", "GraphQL"]
    },
    {
      icon: GitBranch,
      title: "Version Control Spirits",
      description: "Git workflows possessed by ancient developers",
      details: ["Git fundamentals", "Branching strategies", "Merge conflicts", "Collaboration"]
    },
    {
      icon: Cloud,
      title: "Deployment Portals",
      description: "Deploy your creations to the cloud dimension",
      details: ["Vercel", "Netlify", "AWS", "Docker"]
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
        {/* Hero Section with Three.js */}
        <div className="relative">
          {/* Three.js Scene overlay for hero */}
          <div className="absolute inset-0 -top-20 h-[500px] opacity-40 pointer-events-none">
            <BackgroundClient />
          </div>

          <motion.div
            className="relative z-10 text-center mb-20"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-900/20 border border-red-700/40 text-red-200 text-sm font-medium st-retro neon-glow-red">
                <Zap className="w-4 h-4" />
                Supernatural Powers Unleashed
              </span>
            </motion.div>
          
          <h1 className="st-title text-6xl md:text-7xl font-black mb-6 st-flicker">
            All The{" "}
            <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              Dark Features
            </span>
          </h1>
          
          <p className="st-retro text-xl text-red-200/70 max-w-3xl mx-auto">
            Harness the complete arsenal of cursed tools and supernatural abilities to master full-stack development from the shadows
          </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="group p-8 rounded-3xl border-2 border-red-900/30 bg-black/60 backdrop-blur-xl hover:border-red-700/60 transition-all cursor-pointer relative overflow-hidden neon-glow-red"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02, boxShadow: "0 25px 50px rgba(255, 0, 0, 0.4)" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-900/0 via-red-700/10 to-yellow-900/0 opacity-0 group-hover:opacity-100 transition-opacity"
              />
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-700/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center mb-6 shadow-lg shadow-red-700/30 group-hover:shadow-red-700/60 neon-glow-red"
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-8 h-8 text-red-100" />
                </motion.div>
                
                <h3 className="st-title text-2xl font-bold mb-3 text-neon-red">
                  {feature.title}
                </h3>
                
                <p className="text-red-200/60 leading-relaxed st-retro mb-4">
                  {feature.description}
                </p>

                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-red-300/50 text-sm st-retro">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full neon-glow-red" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="relative rounded-3xl border-2 border-red-900/40 bg-gradient-to-br from-black/90 via-red-950/30 to-yellow-950/20 p-12 md:p-20 text-center overflow-hidden backdrop-blur-xl neon-glow-red"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-red-900/0 via-red-700/20 to-yellow-900/0"
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          />

          <div className="relative z-10">
            <h3 className="st-title text-4xl md:text-5xl font-black mb-6 st-flicker">
              Ready To Harness{" "}
              <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                These Powers?
              </span>
            </h3>
            <p className="st-retro text-xl text-red-200/70 mb-10 max-w-2xl mx-auto">
              Enter the portal and unlock all supernatural abilities
            </p>
            <Link href="/">
              <motion.button
                className="px-12 py-5 rounded-full bg-gradient-to-r from-red-700 via-red-800 to-red-900 font-bold text-xl shadow-2xl shadow-red-700/60 hover:shadow-red-700/90 transition-all st-retro neon-glow-red"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                Enter The Portal
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
