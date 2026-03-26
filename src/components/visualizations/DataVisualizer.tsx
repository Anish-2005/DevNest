"use client"

import { useMemo } from "react"
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts"
import { motion } from "framer-motion"

interface Step {
  name: string
  progress: number
}

export function DataVisualizer({ roadmapData }: { roadmapData: Step[] }) {
  const radarData = useMemo(() => {
    return roadmapData.map((step) => ({
      subject: step.name.split(" ")[0],
      progress: step.progress,
      fullMark: 100,
    }))
  }, [roadmapData])

  return (
    <motion.div
      className="relative flex h-full w-full items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <ResponsiveContainer width="100%" height={280}>
        <RadarChart data={radarData}>
          <PolarGrid stroke="rgba(210, 20, 37, 0.25)" strokeWidth={1.2} />
          <PolarAngleAxis
            dataKey="subject"
            stroke="rgba(248, 185, 175, 0.8)"
            tick={{ fill: "rgba(248, 211, 201, 0.9)", fontSize: 12, fontFamily: "var(--font-body)" }}
          />
          <PolarRadiusAxis
            stroke="rgba(120, 35, 41, 0.65)"
            tick={{ fill: "rgba(239, 172, 157, 0.75)", fontFamily: "var(--font-body)", fontSize: 11 }}
          />
          <Radar
            name="Progress"
            dataKey="progress"
            stroke="rgb(232, 65, 81)"
            strokeWidth={2}
            fill="rgba(210, 20, 37, 0.26)"
            fillOpacity={0.9}
            dot={{ fill: "rgb(255, 191, 115)", stroke: "rgb(232, 65, 81)", strokeWidth: 1.5, r: 3.5 }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

export default DataVisualizer

