import { Flame } from "lucide-react"

export default function PortalHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 -top-20 h-[600px] opacity-40 pointer-events-none">
        {/* BackgroundClient is kept in page to avoid client import here */}
      </div>

      <div className="relative z-10 text-center mb-20">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-900/20 border border-red-700/40 text-red-200 text-sm font-medium st-retro neon-glow-red">
            <Flame className="w-4 h-4" />
            Choose Your Dimensional Path
          </span>
        </div>

        <h1 className="st-title text-6xl md:text-7xl font-black mb-6 st-flicker">{title}</h1>

        <p className="st-retro text-xl text-red-200/70 max-w-3xl mx-auto">{subtitle}</p>
      </div>
    </div>
  )
}
