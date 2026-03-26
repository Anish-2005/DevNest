import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function PortalCTA() {
  return (
    <div className="surface-card p-8 text-center sm:p-12">
      <h3 className="st-title text-3xl sm:text-4xl">Will You Escape The Upside Down?</h3>
      <p className="st-retro mx-auto mt-4 max-w-2xl text-base sm:text-lg">
        Start with the easiest path and unlock darker dimensions as your powers grow.
      </p>
      <div className="mt-8">
        <Link href="/roadmaps" className="btn-primary">
          Compare Escape Routes
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

