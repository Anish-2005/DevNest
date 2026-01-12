export default function PathOverview({ path }: { path: any }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="p-6 rounded-xl bg-black/50 border border-red-900/20">
        <h4 className="st-retro font-bold text-red-300 mb-2">Duration</h4>
        <p className="st-retro text-red-200">{path.duration}</p>
      </div>
      <div className="p-6 rounded-xl bg-black/50 border border-red-900/20">
        <h4 className="st-retro font-bold text-red-300 mb-2">Modules</h4>
        <p className="st-retro text-red-200">{path.totalModules}</p>
      </div>
      <div className="p-6 rounded-xl bg-black/50 border border-red-900/20">
        <h4 className="st-retro font-bold text-red-300 mb-2">Avg. Salary</h4>
        <p className="st-title text-yellow-400 font-bold">{path.averageSalary}</p>
      </div>
    </div>
  )
}
