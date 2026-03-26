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
  Cloud,
} from "lucide-react"

export const features = [
  {
    icon: Target,
    title: "Cursed Paths",
    description: "AI-conjured roadmaps from the shadows, tuned to your skill level.",
    details: ["Personalized curriculum", "Adaptive difficulty", "Progress tracking", "Skill assessments"],
  },
  {
    icon: Cpu,
    title: "Psychic Feedback",
    description: "Real-time code insights beamed straight from the void.",
    details: ["Live code analysis", "AI suggestions", "Performance metrics", "Best practices guidance"],
  },
  {
    icon: Lock,
    title: "Isolated Realm",
    description: "Practice safely in dimensional pockets cut off from reality.",
    details: ["Sandbox environments", "Production simulations", "Safe experimentation", "Version control"],
  },
  {
    icon: Users,
    title: "Lost Souls Network",
    description: "Collaborate with 50K+ developers escaping the Upside Down.",
    details: ["Peer collaboration", "Code reviews", "Discussion forums", "Mentorship circles"],
  },
  {
    icon: TrendingUp,
    title: "Flickering Analytics",
    description: "Track your descent through charts, streaks, and milestones.",
    details: ["Learning progress", "Time tracking", "Skill graphs", "Achievement system"],
  },
  {
    icon: Lightbulb,
    title: "Haunted Hints",
    description: "Receive whispers where your strategy is weak.",
    details: ["Personalized tips", "Skill gap analysis", "Resource recommendations", "Learning strategies"],
  },
  {
    icon: Code2,
    title: "Dark IDE Integration",
    description: "Write code inside a possessed but polished web IDE.",
    details: ["Web-based IDE", "Syntax highlighting", "Auto-completion", "Debugging tools"],
  },
  {
    icon: Terminal,
    title: "Terminal From Beyond",
    description: "Run commands through a haunted shell with full power.",
    details: ["Terminal access", "Package management", "Git integration", "Custom scripts"],
  },
  {
    icon: Database,
    title: "Spectral Databases",
    description: "Master SQL and NoSQL across eerie data dimensions.",
    details: ["PostgreSQL", "MongoDB", "Redis", "MySQL practice"],
  },
  {
    icon: Server,
    title: "Cursed Backend",
    description: "Build APIs and services in the deepest layers of the lab.",
    details: ["Node.js", "Express", "REST APIs", "GraphQL"],
  },
  {
    icon: GitBranch,
    title: "Version Control Spirits",
    description: "Collaborative Git rituals used by veteran engineers.",
    details: ["Git fundamentals", "Branching strategies", "Merge conflicts", "Team workflows"],
  },
  {
    icon: Cloud,
    title: "Deployment Portals",
    description: "Ship your creations to the cloud before the gate closes.",
    details: ["Vercel", "Netlify", "AWS", "Docker"],
  },
]

export type Feature = typeof features[number]

export default features
