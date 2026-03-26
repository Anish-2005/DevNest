export default function StartWithList({ startWith }: { startWith: any[] }) {
  return (
    <section className="mb-8">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-red-100">Start With</h3>
      <div className="space-y-3">
        {startWith.map((m) => (
          <div key={m.name} className="surface-card p-4">
            <p className="text-sm font-medium text-red-100">{m.name}</p>
            <p className="text-xs text-red-100/60">{m.duration}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

