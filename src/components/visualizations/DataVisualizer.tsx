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
          <PolarGrid stroke="rgba(148, 163, 184, 0.35)" strokeWidth={1} />
          <PolarAngleAxis
            dataKey="subject"
            stroke="rgba(148, 163, 184, 0.85)"
            tick={{ fill: "rgba(203, 213, 225, 0.95)", fontSize: 12, fontFamily: "var(--font-manrope)" }}
          />
          <PolarRadiusAxis
            stroke="rgba(100, 116, 139, 0.5)"
            tick={{ fill: "rgba(148, 163, 184, 0.75)", fontFamily: "var(--font-manrope)", fontSize: 11 }}
          />
          <Radar
            name="Progress"
            dataKey="progress"
            stroke="rgb(56, 189, 248)"
            strokeWidth={2}
            fill="rgba(56, 189, 248, 0.24)"
            fillOpacity={0.9}
            dot={{ fill: "rgb(125, 211, 252)", stroke: "rgb(14, 165, 233)", strokeWidth: 1.5, r: 3.5 }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

export default DataVisualizer

