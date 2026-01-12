"use client"
import React from "react"
import PricingCard from "./PricingCard"

export default function PricingGrid({ plans }: { plans: any[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-20">
      {plans.map((p, i) => (
        <PricingCard key={i} plan={p} index={i} />
      ))}
    </div>
  )
}
