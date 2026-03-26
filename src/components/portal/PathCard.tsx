import Link from "next/link"

export default function PathCard({ path }: { path: any }) {
  const Icon = path.icon

  return (
    <div className="surface-card surface-card-hover p-7">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className={`neon-glow-red flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${path.gradient}`}>
          {Icon ? <Icon className="h-7 w-7 text-white" /> : null}
        </div>

        <div className="text-right">
          <span className="chip">{path.difficulty}</span>
          <p className="mt-2 text-sm text-red-100/65">{path.duration}</p>
        </div>
      </div>

      <h3 className="st-title text-2xl">{path.title}</h3>
      <p className="st-retro mt-3 text-sm leading-relaxed">{path.description}</p>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <div className="rounded-lg border border-red-900/60 bg-black/35 p-3 text-center">
          <div className="text-xl font-semibold text-white">{path.totalModules}</div>
          <div className="text-xs text-red-100/60">Modules</div>
        </div>
        <div className="rounded-lg border border-red-900/60 bg-black/35 p-3 text-center">
          <div className="text-xl font-semibold text-white">{path.projects}</div>
          <div className="text-xs text-red-100/60">Projects</div>
        </div>
        <div className="rounded-lg border border-red-900/60 bg-black/35 p-3 text-center">
          <div className="text-sm font-semibold text-amber-300">{path.jobs}</div>
          <div className="text-xs text-red-100/60">Demand</div>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-red-100">Core Skills</h4>
        <div className="flex flex-wrap gap-2">
          {path.skills.map((skill: string) => (
            <span key={skill} className="chip">{skill}</span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-red-100">Start With</h4>
        <div className="space-y-2">
          {path.startWith.slice(0, 3).map((module: any) => (
            <div key={module.name} className="rounded-lg border border-red-900/60 bg-black/30 p-3">
              <p className="text-sm font-medium text-red-100">{module.name}</p>
              <p className="text-xs text-red-100/60">{module.duration}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <Link href={`/portal/${path.id}`} className="btn-primary w-full">
          Begin Journey
        </Link>
      </div>
    </div>
  )
}

