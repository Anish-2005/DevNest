"use client"
import { motion } from "framer-motion"
import { Code2, LogOut, Menu, X, User, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth, signOutUser } from "@/lib/firebase"

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <motion.header
      className="sticky top-0 z-50 backdrop-blur-md bg-[#050405]/70 border-b border-red-900/20 py-3"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <motion.div
            initial={{ scale: 0.96 }}
            animate={{ scale: [0.98, 1, 0.99] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
            className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center neon-glow-red"
            aria-hidden
          >
            <Code2 className="w-5 h-5 text-red-100" />
          </motion.div>
          <span className="st-title text-lg md:text-2xl text-neon-red st-flicker">DevNest</span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
          {["Portal", "Features", "Roadmaps", "Pricing", "Community", "About"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="st-retro text-sm font-medium text-red-200/90 hover:text-neon-red transition-colors px-3 py-1 rounded-md"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <AuthArea compact={false} />
          </div>

          {/* mobile menu toggle */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            className="md:hidden p-2 rounded bg-black/30 border border-red-800"
          >
            {open ? <X className="w-5 h-5 text-red-200" /> : <Menu className="w-5 h-5 text-red-200" />}
          </button>
        </div>

        {/* mobile nav panel */}
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="md:hidden absolute left-0 right-0 top-full bg-black/60 border-t border-red-900/20 backdrop-blur py-4">
            <div className="max-w-4xl mx-auto px-4 flex flex-col gap-3">
              {["Portal", "Features", "Roadmaps", "Pricing", "Community", "About"].map((item) => (
                <Link key={item} href={`/${item.toLowerCase()}`} className="px-3 py-2 rounded text-red-100 hover:bg-red-900/5">
                  {item}
                </Link>
              ))}

              <div className="pt-2">
                <AuthArea compact={true} />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

type AuthAreaProps = { compact?: boolean }

function AuthArea({ compact = false }: AuthAreaProps) {
  const [user, setUser] = useState<any>(null)
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u))
    return () => unsub()
  }, [])

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("click", onDoc)
    return () => document.removeEventListener("click", onDoc)
  }, [])

  if (!user) {
    return (
      <Link href="/login" className={`px-3 py-2 rounded ${compact ? "block w-full text-center" : ""} bg-black/40 border border-red-800 text-sm font-medium st-retro`}>
        Sign In
      </Link>
    )
  }

  const initials = (user.displayName || user.email || "User").split(" ").map((s: string) => s[0]).slice(0, 2).join("")

  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen((s) => !s)} className="flex items-center gap-2 px-3 py-2 rounded bg-black/30 border border-red-800">
        <div className="w-8 h-8 rounded-full bg-red-800/20 flex items-center justify-center text-xs text-red-100">{user.photoURL ? <img src={user.photoURL} alt="avatar" className="w-8 h-8 rounded-full object-cover" /> : initials}</div>
        {!compact && <div className="text-sm text-red-200 st-retro">{user.email?.split("@")[0]}</div>}
        <ChevronDown className="w-4 h-4 text-red-200" />
      </button>

      {open && (
        <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="absolute right-0 mt-2 w-44 bg-black/80 border border-red-900/30 rounded-md shadow-lg py-2">
          <Link href="/profile" className="block px-3 py-2 text-sm text-red-100 hover:bg-red-900/5">Profile</Link>
          <Link href="/dashboard" className="block px-3 py-2 text-sm text-red-100 hover:bg-red-900/5">Dashboard</Link>
          <button onClick={() => signOutUser()} className="w-full text-left px-3 py-2 text-sm text-red-100 hover:bg-red-900/5 flex items-center gap-2">
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
        </motion.div>
      )}
    </div>
  )
}
