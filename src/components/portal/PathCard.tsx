import Link from "next/link"

export default function PathCard({ path }: { path: any }) {
  const Icon = path.icon

  return (
    <div className="surface-card surface-card-hover p-7">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${path.gradient}`}>
          {Icon ? <Icon className="h-7 w-7 text-white" /> : null}
        </div>

        <div className="text-right">
          <span className="chip">{path.difficulty}</span>
          <p className="mt-2 text-sm text-slate-400">{path.duration}</p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-white">{path.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{path.description}</p>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <div className="rounded-lg border border-slate-700/60 bg-slate-900/55 p-3 text-center">
          <div className="text-xl font-semibold text-white">{path.totalModules}</div>
          <div className="text-xs text-slate-400">Modules</div>
        </div>
        <div className="rounded-lg border border-slate-700/60 bg-slate-900/55 p-3 text-center">
          <div className="text-xl font-semibold text-white">{path.projects}</div>
          <div className="text-xs text-slate-400">Projects</div>
        </div>
        <div className="rounded-lg border border-slate-700/60 bg-slate-900/55 p-3 text-center">
          <div className="text-sm font-semibold text-cyan-300">{path.jobs}</div>
          <div className="text-xs text-slate-400">Demand</div>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-200">Core Skills</h4>
        <div className="flex flex-wrap gap-2">
          {path.skills.map((skill: string) => (
            <span key={skill} className="chip">{skill}</span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-200">Start with</h4>
        <div className="space-y-2">
          {path.startWith.slice(0, 3).map((module: any) => (
            <div key={module.name} className="rounded-lg border border-slate-700/60 bg-slate-900/45 p-3">
              <p className="text-sm font-medium text-slate-100">{module.name}</p>
              <p className="text-xs text-slate-400">{module.duration}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <Link href={`/portal/${path.id}`} className="btn-primary w-full">
          View path details
        </Link>
      </div>
    </div>
  )
}
