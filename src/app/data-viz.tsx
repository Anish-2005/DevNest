"use client"

import { useMemo } from "react"
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts"
import { motion } from "framer-motion"

interface Step {
  name: string
  progress: number
}

export default function DataVisualizer({ roadmapData }: { roadmapData: Step[] }) {
  const chartData = useMemo(() => {
    return roadmapData.map((step) => ({
      name: step.name.split(" ")[0],
      progress: step.progress,
      fullName: step.name,
    }))
  }, [roadmapData])

  const radarData = useMemo(() => {
    return roadmapData.map((step) => ({
      subject: step.name.split(" ")[0],
      A: step.progress,
      fullMark: 100,
    }))
  }, [roadmapData])

  return (
    <motion.div
      className="w-full h-full flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={radarData}>
          <PolarGrid stroke="rgba(139, 92, 246, 0.1)" />
          <PolarAngleAxis dataKey="subject" stroke="rgba(139, 92, 246, 0.5)" />
          <PolarRadiusAxis stroke="rgba(139, 92, 246, 0.3)" />
          <Radar
            name="Progress"
            dataKey="A"
            stroke="rgb(139, 92, 246)"
            fill="rgba(139, 92, 246, 0.1)"
            dot={{ fill: "rgb(6, 182, 212)" }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
