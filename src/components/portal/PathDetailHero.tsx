export default function PathDetailHero({ path }: { path: any }) {
  return (
    <div className="mb-8">
      <span className="chip">{path.difficulty}</span>
      <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{path.title}</h1>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">{path.description}</p>
    </div>
  )
}
