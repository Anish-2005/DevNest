export default function PathDetailHero({ path }: { path: any }) {
  return (
    <div className="mb-8">
      <span className="chip">{path.difficulty}</span>
      <h1 className="st-title mt-5 text-4xl sm:text-5xl">{path.title}</h1>
      <p className="st-retro mt-4 max-w-3xl text-base leading-relaxed sm:text-lg">{path.description}</p>
    </div>
  )
}

