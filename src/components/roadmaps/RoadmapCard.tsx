"use client"
import { motion } from "framer-motion"
import { Check, ChevronRight } from "lucide-react"

export default function RoadmapCard({ module, index }: any) {
  return (
    <motion.div
      key={index}
      className="surface-card p-6 sm:p-7"
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      whileHover={{ y: -2 }}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold text-white">Module {index + 1}: {module.name}</h3>
          <p className="mt-1 text-sm text-slate-400">{module.duration}</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-sm font-semibold text-cyan-300">
          {index + 1}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-200">Topics Covered</h4>
          <ul className="space-y-2">
            {module.topics.map((topic: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-300" />
                {topic}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-200">Projects</h4>
          <ul className="space-y-2">
            {module.projects.map((project: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-300" />
                {project}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

