import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/shared/Header"
import { Footer } from "@/components/shared/Footer"
import { BackgroundClient } from "@/components/background/BackgroundClient"
import StartJourneyButton from "@/components/portal/StartJourneyButton"
import PathDetailHero from "@/components/portal/PathDetailHero"
import PathOverview from "@/components/portal/PathOverview"
import StartWithList from "@/components/portal/StartWithList"
import learningPaths from "@/data/portalPaths"

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

// use centralized learningPaths from data file

export default async function PathPage({ params }: { params: Promise<{ id: string }> | { id: string } }) {
  const resolvedParams = await params
  const path = learningPaths.find((p) => p.id === resolvedParams.id)
  if (!path) return notFound()

  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0a] text-white overflow-hidden scanlines vhs-effect">
      <BackgroundClient />
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-20">
        <PathDetailHero path={path} />

        <PathOverview path={path} />

        <section className="mb-8">
          <h3 className="st-retro font-bold text-red-300 mb-4">Core Skills</h3>
          <div className="flex flex-wrap gap-2">
            {path.skills.map((s) => (
              <span key={s} className="px-3 py-1 rounded-full bg-red-900/20 border border-red-700/30 text-red-200 text-xs st-retro">{s}</span>
            ))}
          </div>
        </section>

        <StartWithList startWith={path.startWith} />

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


