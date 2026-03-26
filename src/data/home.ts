import { Code2, Layers, Zap, Target, Cpu, Lock, Users, TrendingUp, Lightbulb, Sparkles } from "lucide-react"

export const roadmaps = [
  {
    title: "Frontend Escape Route",
    icon: Code2,
    color: "from-red-700 to-red-900",
    steps: [
      { name: "HTML & CSS Signals", progress: 100 },
      { name: "JavaScript Echoes", progress: 100 },
      { name: "React Portals", progress: 85 },
      { name: "State Management", progress: 70 },
      { name: "Performance Exorcism", progress: 45 },
    ],
  },
  {
    title: "Full-Stack Abyss",
    icon: Layers,
    color: "from-red-800 to-red-950",
    steps: [
      { name: "Node.js & Express", progress: 90 },
      { name: "Database Vault", progress: 75 },
      { name: "API Rituals", progress: 80 },
      { name: "Auth & Security", progress: 60 },
      { name: "Deployment Gate", progress: 50 },
    ],
  },
  {
    title: "Performance Lab",
    icon: Zap,
    color: "from-red-700 to-yellow-700",
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
    title: "Cursed Paths",
    description: "AI-conjured learning routes tailored to your fate and skill level.",
    gradient: "from-red-700 to-red-900",
  },
  {
    icon: Cpu,
    title: "Psychic Feedback",
    description: "Instant code readings and supernatural hints from beyond the veil.",
    gradient: "from-red-800 to-yellow-700",
  },
  {
    icon: Lock,
    title: "Isolated Realm",
    description: "Practice in protected sandboxes sealed from production reality.",
    gradient: "from-red-900 to-red-950",
  },
  {
    icon: Users,
    title: "Lost Souls Network",
    description: "Join 50K+ developers navigating the Upside Down together.",
    gradient: "from-yellow-700 to-red-700",
  },
  {
    icon: TrendingUp,
    title: "Flickering Analytics",
    description: "Track progress with eerie dashboards and milestone omens.",
    gradient: "from-red-600 to-red-800",
  },
  {
    icon: Lightbulb,
    title: "Haunted Hints",
    description: "Get whispered recommendations when the challenge gets dark.",
    gradient: "from-yellow-600 to-red-700",
  },
]

export const stats = [
  { number: "50K+", label: "Trapped Learners", icon: Users },
  { number: "15K+", label: "Artifacts Shipped", icon: Code2 },
  { number: "4.9/5", label: "Signal Clarity", icon: Sparkles },
  { number: "24/7", label: "Watcher Support", icon: Cpu },
]

export default { roadmaps, features, stats }
