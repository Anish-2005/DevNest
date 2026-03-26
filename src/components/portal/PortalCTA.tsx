import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function PortalCTA() {
  return (
    <div className="surface-card p-8 text-center sm:p-12">
      <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Not sure which track to choose?</h3>
      <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
        Start with a beginner-friendly path and advance as your confidence grows.
      </p>
      <div className="mt-8">
        <Link href="/roadmaps" className="btn-primary">
          Compare roadmaps
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

