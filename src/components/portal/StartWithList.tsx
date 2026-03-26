export default function StartWithList({ startWith }: { startWith: any[] }) {
  return (
    <section className="mb-8">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-200">Start With</h3>
      <div className="space-y-3">
        {startWith.map((m) => (
          <div key={m.name} className="surface-card p-4">
            <p className="text-sm font-medium text-slate-100">{m.name}</p>
            <p className="text-xs text-slate-400">{m.duration}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

