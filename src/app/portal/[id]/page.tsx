import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/shared/Header"
import { Footer } from "@/components/shared/Footer"
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

export default async function PathPage({ params }: { params: Promise<{ id: string }> | { id: string } }) {
  const resolvedParams = await params
  const path = learningPaths.find((p) => p.id === resolvedParams.id)
  if (!path) return notFound()

  return (
    <div className="app-page">
      <Header />

      <main className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 sm:py-16">
        <PathDetailHero path={path as Path} />
        <PathOverview path={path as Path} />

        <section className="mb-8">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-200">Core Skills</h3>
          <div className="flex flex-wrap gap-2">
            {path.skills.map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
        </section>

        <StartWithList startWith={path.startWith} />

        <div className="mt-8">
          <StartJourneyButton pathId={path.id} pathTitle={path.title} gradient={path.gradient} />
        </div>

        <div className="mt-6">
          <Link href="/portal" className="text-sm text-slate-400 hover:text-sky-200">? Back to portal</Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
