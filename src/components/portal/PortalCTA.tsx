import { Flame } from "lucide-react"

export default function PortalCTA() {
  return (
    <div className="relative rounded-3xl border-2 border-red-900/40 bg-gradient-to-br from-black/90 via-red-950/30 to-yellow-950/20 p-12 text-center overflow-hidden backdrop-blur-xl neon-glow-red">
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-red-900/30 border border-red-700/50 text-red-300 text-sm font-semibold mb-6 st-retro neon-glow-red">
          <Flame className="w-4 h-4" />
          The Portal Is Closing
        </div>

        <h3 className="st-title text-4xl font-black mb-6 st-flicker">Will You Escape The <span className="bg-gradient-to-r from-red-500 via-red-600 to-yellow-500 bg-clip-text text-transparent">Upside Down?</span></h3>

        <p className="st-retro text-xl md:text-2xl text-red-200/70 mb-10 max-w-2xl mx-auto leading-relaxed">Join 50K+ trapped souls who found their way through the darkness. Your escape route awaits...</p>

        <button className="px-12 py-5 rounded-full bg-gradient-to-r from-red-700 via-red-800 to-red-900 font-bold text-xl shadow-2xl shadow-red-700/60 hover:shadow-red-700/90 transition-all st-retro neon-glow-red">Cross The Threshold Now</button>

        <p className="text-sm text-red-400/60 mt-6 st-retro">No soul required • Escape in 14 days • Return anytime (if you can)</p>
      </div>
    </div>
  )
}
