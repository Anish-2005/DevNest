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
    title: "Adaptive Learning Paths",
    description: "AI-curated paths tailored to your current skill level and target role.",
    details: ["Personalized curriculum", "Adaptive difficulty", "Progress tracking", "Skill assessments"]
  },
  {
    icon: Cpu,
    title: "Intelligent Code Feedback",
    description: "Get instant recommendations that improve quality, structure, and performance.",
    details: ["Real-time code analysis", "AI-powered suggestions", "Performance metrics", "Best practices guidance"]
  },
  {
    icon: Lock,
    title: "Secure Sandboxes",
    description: "Practice in isolated environments designed for safe experimentation.",
    details: ["Sandbox environments", "Production simulations", "Safe experimentation", "Version control"]
  },
  {
    icon: Users,
    title: "Developer Community",
    description: "Collaborate with 50K+ developers through discussions, reviews, and mentorship.",
    details: ["Peer collaboration", "Code reviews", "Discussion forums", "Mentorship program"]
  },
  {
    icon: TrendingUp,
    title: "Progress Analytics",
    description: "Track growth with practical metrics focused on outcomes.",
    details: ["Learning progress", "Time tracking", "Skill graphs", "Achievement system"]
  },
  {
    icon: Lightbulb,
    title: "Contextual Guidance",
    description: "Receive targeted tips and recommendations to close skill gaps faster.",
    details: ["Personalized tips", "Skill gap analysis", "Resource recommendations", "Learning strategies"]
  },
  {
    icon: Code2,
    title: "Integrated Web IDE",
    description: "Code directly in a streamlined browser-based development environment.",
    details: ["Web-based IDE", "Syntax highlighting", "Auto-completion", "Debugging tools"]
  },
  {
    icon: Terminal,
    title: "Cloud Terminal",
    description: "Use a full-featured terminal for real workflows and tooling.",
    details: ["Full terminal access", "Package management", "Git integration", "Custom scripts"]
  },
  {
    icon: Database,
    title: "Database Labs",
    description: "Build practical SQL and NoSQL skills with guided hands-on exercises.",
    details: ["PostgreSQL", "MongoDB", "Redis", "MySQL practice"]
  },
  {
    icon: Server,
    title: "Backend Engineering",
    description: "Build robust APIs and services with modern backend practices.",
    details: ["Node.js", "Express", "REST APIs", "GraphQL"]
  },
  {
    icon: GitBranch,
    title: "Version Control Workflows",
    description: "Master collaborative Git workflows used by high-performing teams.",
    details: ["Git fundamentals", "Branching strategies", "Merge conflicts", "Collaboration"]
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    description: "Ship projects confidently across modern hosting platforms.",
    details: ["Vercel", "Netlify", "AWS", "Docker"]
  }
]

export type Feature = typeof features[number]

export default features
