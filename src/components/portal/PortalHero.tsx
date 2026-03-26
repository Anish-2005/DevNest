import { Compass } from "lucide-react"

export default function PortalHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="section-header">
      <div className="mb-6">
        <span className="badge-pill">
          <Compass className="h-4 w-4" />
          Dimensional Portal
        </span>
      </div>

      <h1 className="section-title">{title}</h1>
      <p className="section-subtitle">{subtitle}</p>
    </div>
  )
}

