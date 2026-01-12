export default function PathDetailHero({ path }: { path: any }) {
  return (
    <div className="mb-8">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/20 border border-red-700/40 text-red-200 text-sm font-medium st-retro neon-glow-red">
        {path.difficulty}
      </div>
      <h1 className="st-title text-5xl font-black text-neon-red mt-6 mb-4">{path.title}</h1>
      <p className="st-retro text-red-200/70 mb-6">{path.description}</p>
    </div>
  )
}
