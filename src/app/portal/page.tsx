import {
  Code2,
  Brain,
  Cloud,
  Smartphone,
  Database,
  Shield,
  Zap,
  Terminal,
  Layers,
  Cpu,
  Globe,
  Lock,
  Flame,
  Target,
} from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/shared/Header"
import { Footer } from "@/components/shared/Footer"
import { BackgroundClient } from "@/components/background/BackgroundClient"
import PortalBackgroundEffects from "@/components/portal/PortalBackgroundEffects"
import PortalHero from "@/components/portal/PortalHero"
import PathsGrid from "@/components/portal/PathsGrid"
import PortalCTA from "@/components/portal/PortalCTA"
import learningPaths from "@/data/portalPaths"

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function PortalPage() {

  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0a] text-white overflow-hidden scanlines vhs-effect">
      <BackgroundClient />

      <PortalBackgroundEffects />

      <Header />

      <main className="max-w-7xl mx-auto px-4 py-20">
        <div className="relative">
          <div className="absolute inset-0 -top-20 h-[600px] opacity-40 pointer-events-none">
            <BackgroundClient />
          </div>

          <PortalHero title="Enter The Learning Portal" subtitle="Select your path through the darkness. Each journey leads to power, knowledge, and mastery." />
        </div>

        <PathsGrid learningPaths={learningPaths} />

        <PortalCTA />
      </main>

      <Footer />
    </div>
  )
}