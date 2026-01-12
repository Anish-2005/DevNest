"use client"
import React from "react"
import RoadmapCard from "./RoadmapCard"

export default function RoadmapGrid({ modules }: any) {
  return (
    <div className="space-y-6">
      {modules.map((m: any, i: number) => (
        <RoadmapCard key={i} module={m} index={i} />
      ))}
    </div>
  )
}
