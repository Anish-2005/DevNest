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
    import { motion } from "framer-motion"
    import {
      Code2,
      Brain,
      Cloud,
      Smartphone,
      Database,
      Shield,
      Zap,
      Terminal,
      Layers,
      Cpu,
      Globe,
      Lock,
      ChevronRight,
      Flame,
      TrendingUp,
      Target,
    } from "lucide-react"
    import { Header } from "@/components/shared/Header"
    import { Footer } from "@/components/shared/Footer"
    import { BackgroundClient } from "@/components/background/BackgroundClient"
    import PortalHero from "@/components/portal/PortalHero"
    import PathsGrid from "@/components/portal/PathsGrid"
    import PortalCTA from "@/components/portal/PortalCTA"

    const itemVariants: any = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
            { name: "Backend with Node.js", duration: "4 weeks", icon: Terminal },
          ],
          careerPaths: ["Frontend Developer", "Full-Stack Developer", "Web Designer"],
          averageSalary: "$75,000 - $120,000",
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
            { name: "Deep Learning", duration: "6 weeks", icon: Cpu },
          ],
          careerPaths: ["ML Engineer", "Data Scientist", "AI Researcher"],
          averageSalary: "$90,000 - $150,000",
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
            { name: "Kubernetes Orchestration", duration: "4 weeks", icon: Cpu },
          ],
          careerPaths: ["DevOps Engineer", "Cloud Architect", "Site Reliability Engineer"],
          averageSalary: "$85,000 - $140,000",
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
            { name: "State Management", duration: "3 weeks", icon: Database },
          ],
          careerPaths: ["Mobile Developer", "iOS Developer", "Android Developer"],
          averageSalary: "$70,000 - $125,000",
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
            { name: "Penetration Testing", duration: "5 weeks", icon: Shield },
          ],
          careerPaths: ["Security Analyst", "Ethical Hacker", "Security Architect"],
          averageSalary: "$80,000 - $145,000",
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
            { name: "Big Data Tools", duration: "4 weeks", icon: Cpu },
          ],
          careerPaths: ["Data Engineer", "ETL Developer", "Big Data Engineer"],
          averageSalary: "$85,000 - $135,000",
        },
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
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          />

          <div className="fixed inset-0 -z-10 opacity-10">
            <motion.div
              className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,.3)_1px,transparent_1px)] bg-[size:4rem_4rem]"
              animate={{ backgroundPosition: ["0px 0px", "64px 64px"] }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </div>

          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="max-w-7xl mx-auto px-4 py-20">
            {/* Hero Section with Three.js */}
            <div className="relative">
              <div className="absolute inset-0 -top-20 h-[600px] opacity-40 pointer-events-none">
                <BackgroundClient />
              </div>

              <PortalHero title="Enter The Learning Portal" subtitle="Select your path through the darkness. Each journey leads to power, knowledge, and mastery." />
            </div>

            {/* Learning Paths Grid */}
            <PathsGrid learningPaths={learningPaths} />

            {/* Bottom CTA */}
            <PortalCTA />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      )
    }

