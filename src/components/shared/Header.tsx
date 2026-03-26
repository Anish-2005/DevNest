"use client"
import { motion } from "framer-motion"
import { LogOut, Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth, signOutUser } from "@/lib/firebase"
import BrandIcon from "@/components/shared/BrandIcon"

const navItems = [
  { label: "Portal", href: "/portal" },
  { label: "Features", href: "/features" },
  { label: "Roadmaps", href: "/roadmaps" },
  { label: "Pricing", href: "/pricing" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-red-900/45 bg-black/55 py-3 backdrop-blur-xl"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="page-container flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <BrandIcon className="h-8 w-8" />
          <div className="leading-tight">
            <p className="st-title st-flicker text-lg md:text-2xl">DevNest</p>
            <p className="st-retro hidden text-[11px] uppercase sm:block">Hawkins Learning Lab</p>
          </div>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-red-100/80 transition-colors hover:bg-red-950/35 hover:text-red-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex">
            <AuthArea compact={false} />
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            className="rounded-lg border border-red-900/60 bg-black/60 p-2 text-red-100 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-x-0 top-full border-t border-red-900/45 bg-black/85 py-4 backdrop-blur-xl md:hidden"
          >
            <div className="page-container flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-red-100/90 hover:bg-red-950/40"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-1">
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
      <Link
        href="/login"
        className={`btn-secondary ${compact ? "w-full" : ""}`}
      >
        Sign In
      </Link>
    )
  }

  const initials = (user.displayName || user.email || "User").split(" ").map((s: string) => s[0]).slice(0, 2).join("")

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((s) => !s)}
        className="flex items-center gap-2 rounded-xl border border-red-900/60 bg-black/60 px-3 py-2 text-sm text-red-50"
      >
        <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-red-950/50 text-xs font-semibold text-red-100">
          {user.photoURL ? <img src={user.photoURL} alt="avatar" className="h-8 w-8 rounded-full object-cover" /> : initials}
        </div>
        {!compact && <div className="max-w-28 truncate">{user.email?.split("@")[0]}</div>}
        <ChevronDown className="h-4 w-4 text-red-100/80" />
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute right-0 mt-2 w-52 rounded-xl border border-red-900/60 bg-black/95 p-2 shadow-2xl"
        >
          <Link href="/portal" className="block rounded-lg px-3 py-2 text-sm text-red-100 hover:bg-red-950/35">My Portal</Link>
          <Link href="/roadmaps" className="block rounded-lg px-3 py-2 text-sm text-red-100 hover:bg-red-950/35">Roadmaps</Link>
          <button onClick={() => signOutUser()} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-red-100 hover:bg-red-950/35">
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </motion.div>
      )}
    </div>
  )
}
