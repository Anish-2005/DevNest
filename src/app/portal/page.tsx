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
          title="Choose a Career Path"
          subtitle="Explore structured tracks designed to help you build practical, job-ready engineering skills."
        />
        <PathsGrid learningPaths={learningPaths} />
        <PortalCTA />
      </main>

      <Footer />
    </div>
  )
}

