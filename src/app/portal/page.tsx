"use client"
import { motion } from "framer-motion"
import { 
  Code2, Brain, Cloud, Smartphone, Database, Shield, 
  Zap, Terminal, Layers, Cpu, Globe, Lock,
  ChevronRight, Flame, TrendingUp, Target
} from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/shared/Header"
import { Footer } from "@/components/shared/Footer"
import { BackgroundClient } from "@/components/background/BackgroundClient"

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function PortalPage() {
  const learningPaths = [
    {
      id: "web-dev",
      title: "Web Development",
      icon: Code2,
      gradient: "from-red-700 via-red-800 to-red-900",
      description: "Master the art of building modern web applications from the shadows",
      duration: "4-6 months",
      difficulty: "Beginner Friendly",
      totalModules: 8,
      skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "Databases", "APIs"],
      projects: 12,
      jobs: "High Demand",
      startWith: [
        { name: "HTML & CSS Fundamentals", duration: "2 weeks", icon: Code2 },
        { name: "JavaScript Basics", duration: "3 weeks", icon: Zap },
        { name: "React Framework", duration: "4 weeks", icon: Layers },
        { name: "Backend with Node.js", duration: "4 weeks", icon: Terminal }
      ],
      careerPaths: ["Frontend Developer", "Full-Stack Developer", "Web Designer"],
      averageSalary: "$75,000 - $120,000"
    },
    {
      id: "machine-learning",
      title: "Machine Learning & AI",
      icon: Brain,
      gradient: "from-yellow-600 via-red-700 to-red-900",
      description: "Unlock the supernatural powers of artificial intelligence and deep learning",
      duration: "6-8 months",
      difficulty: "Intermediate",
      totalModules: 10,
      skills: ["Python", "TensorFlow", "Neural Networks", "Data Science", "Statistics", "Deep Learning"],
      projects: 15,
      jobs: "Explosive Growth",
      startWith: [
        { name: "Python Programming", duration: "3 weeks", icon: Code2 },
        { name: "Math & Statistics", duration: "4 weeks", icon: Target },
        { name: "ML Fundamentals", duration: "5 weeks", icon: Brain },
        { name: "Deep Learning", duration: "6 weeks", icon: Cpu }
      ],
      careerPaths: ["ML Engineer", "Data Scientist", "AI Researcher"],
      averageSalary: "$90,000 - $150,000"
    },
    {
      id: "cloud-computing",
      title: "Cloud Computing & DevOps",
      icon: Cloud,
      gradient: "from-red-600 via-red-800 to-yellow-700",
      description: "Command the ethereal realm of cloud infrastructure and deployment",
      duration: "3-5 months",
      difficulty: "Intermediate",
      totalModules: 7,
      skills: ["AWS/Azure/GCP", "Docker", "Kubernetes", "CI/CD", "Infrastructure as Code", "Monitoring"],
      projects: 10,
      jobs: "Very High Demand",
      startWith: [
        { name: "Linux Fundamentals", duration: "2 weeks", icon: Terminal },
        { name: "AWS Basics", duration: "3 weeks", icon: Cloud },
        { name: "Docker & Containers", duration: "3 weeks", icon: Layers },
        { name: "Kubernetes Orchestration", duration: "4 weeks", icon: Cpu }
      ],
      careerPaths: ["DevOps Engineer", "Cloud Architect", "Site Reliability Engineer"],
      averageSalary: "$85,000 - $140,000"
    },
    {
      id: "mobile-dev",
      title: "Mobile App Development",
      icon: Smartphone,
      gradient: "from-red-900 via-red-800 to-red-700",
      description: "Conjure powerful mobile applications for iOS and Android from the void",
      duration: "4-5 months",
      difficulty: "Beginner Friendly",
      totalModules: 8,
      skills: ["React Native", "Flutter", "Swift", "Kotlin", "Mobile UI/UX", "API Integration"],
      projects: 10,
      jobs: "High Demand",
      startWith: [
        { name: "JavaScript/Dart Basics", duration: "2 weeks", icon: Code2 },
        { name: "React Native Setup", duration: "2 weeks", icon: Smartphone },
        { name: "Mobile UI Components", duration: "3 weeks", icon: Layers },
        { name: "State Management", duration: "3 weeks", icon: Database }
      ],
      careerPaths: ["Mobile Developer", "iOS Developer", "Android Developer"],
      averageSalary: "$70,000 - $125,000"
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      icon: Shield,
      gradient: "from-red-950 via-red-900 to-red-800",
      description: "Protect the digital realm from malevolent forces and dark threats",
      duration: "5-7 months",
      difficulty: "Advanced",
      totalModules: 9,
      skills: ["Network Security", "Ethical Hacking", "Cryptography", "Penetration Testing", "Security Analysis"],
      projects: 8,
      jobs: "Critical Demand",
      startWith: [
        { name: "Network Fundamentals", duration: "3 weeks", icon: Globe },
        { name: "Linux Security", duration: "3 weeks", icon: Terminal },
        { name: "Ethical Hacking Basics", duration: "4 weeks", icon: Lock },
        { name: "Penetration Testing", duration: "5 weeks", icon: Shield }
      ],
      careerPaths: ["Security Analyst", "Ethical Hacker", "Security Architect"],
      averageSalary: "$80,000 - $145,000"
    },
    {
      id: "data-engineering",
      title: "Data Engineering",
      icon: Database,
      gradient: "from-yellow-700 via-red-800 to-red-900",
      description: "Build and maintain the arcane pipelines that fuel data-driven decisions",
      duration: "5-6 months",
      difficulty: "Intermediate",
      totalModules: 8,
      skills: ["SQL", "Python", "ETL Pipelines", "Big Data", "Data Warehousing", "Apache Spark"],
      projects: 11,
      jobs: "High Demand",
      startWith: [
        { name: "SQL Mastery", duration: "3 weeks", icon: Database },
        { name: "Python for Data", duration: "3 weeks", icon: Code2 },
        { name: "ETL Fundamentals", duration: "4 weeks", icon: Layers },
        { name: "Big Data Tools", duration: "4 weeks", icon: Cpu }
      ],
      careerPaths: ["Data Engineer", "ETL Developer", "Big Data Engineer"],
      averageSalary: "$85,000 - $135,000"
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
          <div className="absolute inset-0 -top-20 h-[600px] opacity-40 pointer-events-none">
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
                <Flame className="w-4 h-4" />
                Choose Your Dimensional Path
              </span>
            </motion.div>
            
            <h1 className="st-title text-6xl md:text-7xl font-black mb-6 st-flicker">
              Enter The{" "}
              <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                Learning Portal
              </span>
            </h1>
            
            <p className="st-retro text-xl text-red-200/70 max-w-3xl mx-auto">
              Select your path through the darkness. Each journey leads to power, knowledge, and mastery.
            </p>
          </motion.div>
        </div>

        {/* Learning Paths Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {learningPaths.map((path, i) => (
            <motion.div
              key={path.id}
              className="group relative p-8 rounded-3xl border-2 border-red-900/30 bg-black/60 backdrop-blur-xl hover:border-red-700/60 transition-all cursor-pointer overflow-hidden neon-glow-red"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Animated gradient background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${path.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Header */}
              <div className="relative z-10 mb-6">
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${path.gradient} flex items-center justify-center shadow-lg neon-glow-red`}
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <path.icon className="w-8 h-8 text-red-100" />
                  </motion.div>
                  
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 rounded-full bg-red-900/20 border border-red-700/40 text-red-300 text-xs font-bold st-retro mb-2">
                      {path.difficulty}
                    </span>
                    <p className="text-red-400/60 text-sm st-retro">{path.duration}</p>
                  </div>
                </div>

                <h3 className="st-title text-3xl font-bold text-neon-red mb-3">
                  {path.title}
                </h3>
                <p className="text-red-200/70 leading-relaxed st-retro">
                  {path.description}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="relative z-10 grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 rounded-lg bg-red-900/10 border border-red-900/20">
                  <div className="text-2xl font-bold text-red-400 st-title">{path.totalModules}</div>
                  <div className="text-xs text-red-300/60 st-retro">Modules</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-red-900/10 border border-red-900/20">
                  <div className="text-2xl font-bold text-red-400 st-title">{path.projects}</div>
                  <div className="text-xs text-red-300/60 st-retro">Projects</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-red-900/10 border border-red-900/20">
                  <div className="text-2xl font-bold text-yellow-400 st-title">
                    <TrendingUp className="w-6 h-6 mx-auto" />
                  </div>
                  <div className="text-xs text-red-300/60 st-retro">{path.jobs}</div>
                </div>
              </div>

              {/* Skills */}
              <div className="relative z-10 mb-6">
                <h4 className="text-sm font-bold text-red-300 mb-3 st-retro">Core Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {path.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-red-900/20 border border-red-700/30 text-red-200 text-xs st-retro"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Start With Section */}
              <div className="relative z-10 mb-6">
                <h4 className="text-sm font-bold text-red-300 mb-3 st-retro flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Start Your Journey:
                </h4>
                <div className="space-y-2">
                  {path.startWith.map((module, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-red-900/20 hover:border-red-700/40 transition-all"
                    >
                      <module.icon className="w-5 h-5 text-red-400" />
                      <div className="flex-1">
                        <p className="text-red-200 text-sm font-medium st-retro">{module.name}</p>
                        <p className="text-red-400/60 text-xs st-retro">{module.duration}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-red-500/50" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Paths */}
              <div className="relative z-10 mb-6">
                <h4 className="text-sm font-bold text-red-300 mb-2 st-retro">Career Paths:</h4>
                <p className="text-red-200/60 text-sm st-retro">{path.careerPaths.join(" • ")}</p>
              </div>

              {/* Salary */}
              <div className="relative z-10 mb-6">
                <h4 className="text-sm font-bold text-red-300 mb-2 st-retro">Average Salary:</h4>
                <p className="text-yellow-400 text-lg font-bold st-title">{path.averageSalary}</p>
              </div>

              {/* CTA Button */}
              <Link
                href={`/portal/${path.id}`}
                className={`relative z-10 w-full py-4 rounded-full bg-gradient-to-r ${path.gradient} font-bold text-lg shadow-lg neon-glow-red hover:shadow-red-700/80 transition-all st-retro flex items-center justify-center gap-2`}
              >
                <span>Begin Journey</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="relative rounded-3xl border-2 border-red-900/40 bg-gradient-to-br from-black/90 via-red-950/30 to-yellow-950/20 p-12 text-center overflow-hidden backdrop-blur-xl neon-glow-red"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10">
            <h3 className="st-title text-4xl font-black mb-6 st-flicker">
              Not Sure Where To{" "}
              <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                Start?
              </span>
            </h3>
            <p className="st-retro text-xl text-red-200/70 mb-8">
              Take our dark assessment and let the AI guide you to your destined path
            </p>
            <motion.button
              className="px-12 py-5 rounded-full bg-gradient-to-r from-red-700 to-red-900 font-bold text-xl shadow-2xl shadow-red-700/60 hover:shadow-red-700/90 transition-all st-retro neon-glow-red"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Take Path Assessment
            </motion.button>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
