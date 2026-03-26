import { Header } from "@/components/shared/Header"
import { Footer } from "@/components/shared/Footer"
import PortalHero from "@/components/portal/PortalHero"
import PathsGrid from "@/components/portal/PathsGrid"
import PortalCTA from "@/components/portal/PortalCTA"
import learningPaths from "@/data/portalPaths"

export default function PortalPage() {
  return (
    <div className="app-page">
      <Header />

      <main className="page-container py-14 sm:py-16">
        <PortalHero
          title="Enter The Learning Portal"
          subtitle="Select your path through the darkness. Each journey leads to power, knowledge, and mastery."
        />
        <PathsGrid learningPaths={learningPaths} />
        <PortalCTA />
      </main>

      <Footer />
    </div>
  )
}

