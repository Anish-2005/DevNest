import {
  Target,
  Cpu,
  Lock,
  Users,
  TrendingUp,
  Lightbulb,
  Code2,
  Terminal,
  Database,
  Server,
  GitBranch,
  Cloud
} from "lucide-react"

export const features = [
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

export type Feature = typeof features[number]

export default features
