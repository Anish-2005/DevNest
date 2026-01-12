import { Code2, Database, Layers } from "lucide-react"

export const roadmaps = [
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

export default roadmaps
