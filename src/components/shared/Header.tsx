"use client"
import { motion } from "framer-motion"
import { Code2 } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <motion.header
      className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-red-900/20 py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center neon-glow-red">
            <Code2 className="w-6 h-6 text-red-200" />
          </div>
          <span className="st-title text-2xl text-neon-red st-flicker">DevNest</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {["Features", "Roadmaps", "Pricing", "Community", "About"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="st-retro text-sm font-medium text-red-200 hover:text-neon-red transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
