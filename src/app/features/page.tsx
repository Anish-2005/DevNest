"use client"
import { Header } from "@/components/shared/Header"
import { Footer } from "@/components/shared/Footer"
import FeaturesHero from "@/components/features/FeaturesHero"
import FeaturesGrid from "@/components/features/FeaturesGrid"
import FeaturesCTA from "@/components/features/FeaturesCTA"
import features from "@/data/features"

export default function FeaturesPage() {
  return (
    <div className="app-page">
      <Header />

      <main className="page-container py-14 sm:py-16">
        <FeaturesHero />
        <FeaturesGrid features={features} />
        <FeaturesCTA />
      </main>

      <Footer />
    </div>
  )
}

