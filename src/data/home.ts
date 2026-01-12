import { Code2, Layers, Zap, Target, Cpu, Lock, Users, TrendingUp, Lightbulb, Sparkles } from "lucide-react"

export const roadmaps = [
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

export const features = [
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
]

export const stats = [
  { number: "50K+", label: "Learners Worldwide", icon: Users },
  { number: "15K+", label: "Projects Completed", icon: Code2 },
  { number: "4.9/5", label: "Satisfaction Rate", icon: Sparkles },
  { number: "24/7", label: "AI Support", icon: Cpu },
]

export default { roadmaps, features, stats }
