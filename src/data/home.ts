import { Code2, Layers, Zap, Target, Cpu, Lock, Users, TrendingUp, Lightbulb, Sparkles } from "lucide-react"

export const roadmaps = [
  {
    title: "Frontend Engineering",
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
    color: "from-indigo-500 to-blue-500",
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
    color: "from-cyan-500 to-teal-500",
    steps: [
      { name: "Bundle Optimization", progress: 88 },
      { name: "Code Splitting", progress: 82 },
      { name: "Caching Strategies", progress: 75 },
      { name: "Core Web Vitals", progress: 65 },
      { name: "Advanced Monitoring", progress: 40 },
    ],
  },
]

export const features = [
  {
    icon: Target,
    title: "Adaptive Learning Paths",
    description: "Goal-based roadmaps that adjust to your experience and progress.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Cpu,
    title: "Intelligent Code Feedback",
    description: "Instant suggestions focused on readability, architecture, and reliability.",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: Lock,
    title: "Secure Practice Environments",
    description: "Experiment safely in isolated sandboxes that mirror production setups.",
    gradient: "from-slate-500 to-indigo-500",
  },
  {
    icon: Users,
    title: "Collaborative Community",
    description: "Learn with a global network of developers, mentors, and peers.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Progress Analytics",
    description: "Track completion, strengths, and skill gaps through clear dashboards.",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: Lightbulb,
    title: "Contextual Guidance",
    description: "Actionable hints and resources when you need support on difficult topics.",
    gradient: "from-blue-500 to-indigo-500",
  },
]

export const stats = [
  { number: "50K+", label: "Learners Worldwide", icon: Users },
  { number: "15K+", label: "Projects Completed", icon: Code2 },
  { number: "4.9/5", label: "Satisfaction Rate", icon: Sparkles },
  { number: "24/7", label: "AI Support", icon: Cpu },
]

export default { roadmaps, features, stats }

