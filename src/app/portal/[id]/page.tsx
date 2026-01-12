import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/shared/Header"
import { Footer } from "@/components/shared/Footer"
import { BackgroundClient } from "@/components/background/BackgroundClient"
import StartJourneyButton from "@/components/portal/StartJourneyButton"

type Module = { name: string; duration: string; icon?: any }

type Path = {
  id: string
  title: string
  description: string
  duration: string
  difficulty: string
  totalModules: number
  skills: string[]
  projects: number
  jobs: string
  startWith: Module[]
  careerPaths: string[]
  averageSalary: string
  gradient?: string
}

// Minimal data copy — keep in sync with the portal listing
const LEARNING_PATHS: Path[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "Master the art of building modern web applications from the shadows",
    duration: "4-6 months",
    difficulty: "Beginner Friendly",
    totalModules: 8,
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "Databases", "APIs"],
    projects: 12,
    jobs: "High Demand",
    startWith: [
      { name: "HTML & CSS Fundamentals", duration: "2 weeks" },
      { name: "JavaScript Basics", duration: "3 weeks" },
      { name: "React Framework", duration: "4 weeks" },
      { name: "Backend with Node.js", duration: "4 weeks" },
    ],
    careerPaths: ["Frontend Developer", "Full-Stack Developer", "Web Designer"],
    averageSalary: "$75,000 - $120,000",
    gradient: "from-red-700 via-red-800 to-red-900",
  },
  {
    id: "machine-learning",
    title: "Machine Learning & AI",
    description: "Unlock the supernatural powers of artificial intelligence and deep learning",
    duration: "6-8 months",
    difficulty: "Intermediate",
    totalModules: 10,
    skills: ["Python", "TensorFlow", "Neural Networks", "Data Science", "Statistics", "Deep Learning"],
    projects: 15,
    jobs: "Explosive Growth",
    startWith: [
      { name: "Python Programming", duration: "3 weeks" },
      { name: "Math & Statistics", duration: "4 weeks" },
      { name: "ML Fundamentals", duration: "5 weeks" },
      { name: "Deep Learning", duration: "6 weeks" },
    ],
    careerPaths: ["ML Engineer", "Data Scientist", "AI Researcher"],
    averageSalary: "$90,000 - $150,000",
    gradient: "from-yellow-600 via-red-700 to-red-900",
  },
]

export default function PathPage({ params }: { params: { id: string } }) {
  const path = LEARNING_PATHS.find((p) => p.id === params.id)
  if (!path) return notFound()

  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0a] text-white overflow-hidden scanlines vhs-effect">
      <BackgroundClient />
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-20">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/20 border border-red-700/40 text-red-200 text-sm font-medium st-retro neon-glow-red">
            {path.difficulty}
          </div>
          <h1 className="st-title text-5xl font-black text-neon-red mt-6 mb-4">{path.title}</h1>
          <p className="st-retro text-red-200/70 mb-6">{path.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-xl bg-black/50 border border-red-900/20">
            <h4 className="st-retro font-bold text-red-300 mb-2">Duration</h4>
            <p className="st-retro text-red-200">{path.duration}</p>
          </div>
          <div className="p-6 rounded-xl bg-black/50 border border-red-900/20">
            <h4 className="st-retro font-bold text-red-300 mb-2">Modules</h4>
            <p className="st-retro text-red-200">{path.totalModules}</p>
          </div>
          <div className="p-6 rounded-xl bg-black/50 border border-red-900/20">
            <h4 className="st-retro font-bold text-red-300 mb-2">Avg. Salary</h4>
            <p className="st-title text-yellow-400 font-bold">{path.averageSalary}</p>
          </div>
        </div>

        <section className="mb-8">
          <h3 className="st-retro font-bold text-red-300 mb-4">Core Skills</h3>
          <div className="flex flex-wrap gap-2">
            {path.skills.map((s) => (
              <span key={s} className="px-3 py-1 rounded-full bg-red-900/20 border border-red-700/30 text-red-200 text-xs st-retro">{s}</span>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h3 className="st-retro font-bold text-red-300 mb-4">Start With</h3>
          <div className="space-y-2">
            {path.startWith.map((m) => (
              <div key={m.name} className="p-4 rounded-lg bg-black/40 border border-red-900/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-red-200 st-retro font-medium">{m.name}</p>
                    <p className="text-red-400/60 text-xs st-retro">{m.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-8">
          <StartJourneyButton pathId={path.id} pathTitle={path.title} gradient={path.gradient} />
        </div>

        <div className="mt-6">
          <Link href="/portal" className="st-retro text-sm text-red-300/70 hover:text-neon-red">← Back to Portal</Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}


