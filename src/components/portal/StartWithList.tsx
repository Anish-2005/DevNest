export default function StartWithList({ startWith }: { startWith: any[] }) {
  return (
    <section className="mb-8">
      <h3 className="st-retro font-bold text-red-300 mb-4">Start With</h3>
      <div className="space-y-2">
        {startWith.map((m) => (
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
  )
}
