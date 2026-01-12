import Link from "next/link"

export default function PathCard({ path }: { path: any }) {
  const Icon = path.icon

  return (
    <div className="group relative p-8 rounded-3xl border-2 border-red-900/30 bg-black/60 backdrop-blur-xl hover:border-red-700/60 transition-all cursor-pointer overflow-hidden neon-glow-red">
      <div className={`absolute inset-0 bg-gradient-to-br ${path.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

      <div className="relative z-10 mb-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${path.gradient} flex items-center justify-center shadow-lg neon-glow-red`}>
            {Icon ? <Icon className="w-8 h-8 text-red-100" /> : null}
          </div>

          <div className="text-right">
            <span className="inline-block px-3 py-1 rounded-full bg-red-900/20 border border-red-700/40 text-red-300 text-xs font-bold st-retro mb-2">{path.difficulty}</span>
            <p className="text-red-400/60 text-sm st-retro">{path.duration}</p>
          </div>
        </div>

        <h3 className="st-title text-3xl font-bold text-neon-red mb-3">{path.title}</h3>
        <p className="text-red-200/70 leading-relaxed st-retro">{path.description}</p>
      </div>

      <div className="relative z-10 grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-3 rounded-lg bg-red-900/10 border border-red-900/20">
          <div className="text-2xl font-bold text-red-400 st-title">{path.totalModules}</div>
          <div className="text-xs text-red-300/60 st-retro">Modules</div>
        </div>
        <div className="text-center p-3 rounded-lg bg-red-900/10 border border-red-900/20">
          <div className="text-2xl font-bold text-red-400 st-title">{path.projects}</div>
          <div className="text-xs text-red-300/60 st-retro">Projects</div>
        </div>
        <div className="text-center p-3 rounded-lg bg-red-900/10 border border-red-900/20">
          <div className="text-2xl font-bold text-yellow-400 st-title">{/* icon */}</div>
          <div className="text-xs text-red-300/60 st-retro">{path.jobs}</div>
        </div>
      </div>

      <div className="relative z-10 mb-6">
        <h4 className="text-sm font-bold text-red-300 mb-3 st-retro">Core Skills:</h4>
        <div className="flex flex-wrap gap-2">
          {path.skills.map((skill: string) => (
            <span key={skill} className="px-3 py-1 rounded-full bg-red-900/20 border border-red-700/30 text-red-200 text-xs st-retro">{skill}</span>
          ))}
        </div>
      </div>

      <div className="relative z-10 mb-6">
        <h4 className="text-sm font-bold text-red-300 mb-3 st-retro flex items-center gap-2">Start Your Journey:</h4>
        <div className="space-y-2">
          {path.startWith.map((module: any) => (
            <div key={module.name} className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-red-900/20 hover:border-red-700/40 transition-all">
              <div className="flex-1">
                <p className="text-red-200 text-sm font-medium st-retro">{module.name}</p>
                <p className="text-red-400/60 text-xs st-retro">{module.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link href={`/portal/${path.id}`} className="relative z-10 w-full py-4 rounded-full bg-gradient-to-r from-red-700 to-red-900 font-bold text-lg shadow-lg neon-glow-red hover:shadow-red-700/80 transition-all st-retro flex items-center justify-center gap-2">Begin Journey</Link>
    </div>
  )
}
