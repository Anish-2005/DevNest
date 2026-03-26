"use client"
import React from "react"
import FeatureCard from "./FeatureCard"
import { Feature } from "@/data/features"

export function FeaturesGrid({ features }: { features: Feature[] }) {
  return (
    <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {features.map((f, i) => (
        <FeatureCard key={i} feature={f} index={i} />
      ))}
    </div>
  )
}

export default FeaturesGrid

