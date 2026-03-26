"use client"
import { Header } from "@/components/shared/Header"
import { Footer } from "@/components/shared/Footer"
import PricingHero from "@/components/pricing/PricingHero"
import PricingGrid from "@/components/pricing/PricingGrid"
import PricingFAQ from "@/components/pricing/PricingFAQ"
import PricingCTA from "@/components/pricing/PricingCTA"
import plans from "@/data/pricingPlans"

export default function PricingPage() {
  return (
    <div className="app-page">
      <Header />

      <main className="page-container py-14 sm:py-16">
        <PricingHero />
        <PricingGrid plans={plans} />
        <PricingFAQ />
        <PricingCTA />
      </main>

      <Footer />
    </div>
  )
}
