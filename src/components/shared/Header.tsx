"use client"
import { motion } from "framer-motion"
import { Code2, LogOut } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth, signOutUser } from "@/lib/firebase"

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
          {["Portal", "Features", "Roadmaps", "Pricing", "Community", "About"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="st-retro text-sm font-medium text-red-200 hover:text-neon-red transition-colors"
            >
              {item}
            </Link>
          ))}

          {/* Auth area */}
          <AuthArea />
        </nav>
      </div>
    </motion.header>
  )
}

function AuthArea() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u))
    return () => unsub()
  }, [])

  if (!user) {
    return (
      <Link href="/login" className="px-3 py-2 rounded bg-black/40 border border-red-800 text-sm font-medium st-retro">
        Sign In
      </Link>
    )
  }

  return (
    <div className="flex items-center gap-3">
      <div className="text-sm text-red-200 st-retro">{user.email}</div>
      <button onClick={() => signOutUser()} className="px-3 py-2 rounded bg-black/40 border border-red-800 flex items-center gap-2">
        <LogOut className="w-4 h-4" />
        Sign Out
      </button>
    </div>
  )
}
