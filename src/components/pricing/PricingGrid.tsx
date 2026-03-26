"use client"
import React from "react"
import PricingCard from "./PricingCard"

export default function PricingGrid({ plans }: { plans: any[] }) {
  return (
    <div className="mb-12 grid gap-6 md:grid-cols-3">
      {plans.map((p, i) => (
        <PricingCard key={i} plan={p} index={i} />
      ))}
    </div>
  )
}

