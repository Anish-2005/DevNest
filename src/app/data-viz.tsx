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
      className="w-full h-full flex items-center justify-center relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Eerie red glow behind chart */}
      <motion.div
        className="absolute inset-0 bg-red-900/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={radarData}>
          <PolarGrid 
            stroke="rgba(255, 0, 0, 0.15)" 
            strokeWidth={1.5}
          />
          <PolarAngleAxis 
            dataKey="subject" 
            stroke="rgba(255, 0, 0, 0.6)" 
            tick={{ fill: 'rgba(255, 100, 100, 0.8)', fontSize: 12, fontFamily: 'VT323, monospace' }}
          />
          <PolarRadiusAxis 
            stroke="rgba(139, 0, 0, 0.4)" 
            tick={{ fill: 'rgba(255, 0, 0, 0.5)', fontFamily: 'VT323, monospace' }}
          />
          <Radar
            name="Escape Progress"
            dataKey="A"
            stroke="rgb(255, 0, 0)"
            strokeWidth={2}
            fill="rgba(139, 0, 0, 0.2)"
            fillOpacity={0.6}
            dot={{ 
              fill: "rgb(255, 235, 59)", 
              stroke: "rgb(255, 0, 0)", 
              strokeWidth: 2, 
              r: 4 
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
