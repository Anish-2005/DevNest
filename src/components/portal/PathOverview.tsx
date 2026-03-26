export default function PathOverview({ path }: { path: any }) {
  return (
    <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="surface-card p-5">
        <h4 className="text-xs font-semibold uppercase tracking-wide text-red-100/70">Duration</h4>
        <p className="mt-2 text-base font-medium text-red-100">{path.duration}</p>
      </div>
      <div className="surface-card p-5">
        <h4 className="text-xs font-semibold uppercase tracking-wide text-red-100/70">Modules</h4>
        <p className="mt-2 text-base font-medium text-red-100">{path.totalModules}</p>
      </div>
      <div className="surface-card p-5">
        <h4 className="text-xs font-semibold uppercase tracking-wide text-red-100/70">Avg. Salary</h4>
        <p className="mt-2 text-base font-medium text-amber-300">{path.averageSalary}</p>
      </div>
    </div>
  )
}

