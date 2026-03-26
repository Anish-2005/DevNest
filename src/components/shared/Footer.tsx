"use client"
import { motion } from "framer-motion"
import { Code2, Github, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-700/60 bg-slate-950/55 py-14 backdrop-blur-xl">
      <div className="page-container">
        <div className="mb-12 grid gap-12 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                <Code2 className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-semibold text-white">DevNest</span>
            </div>
            <p className="text-sm text-slate-400">
              Structured developer education designed for modern engineering teams.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-200">Learn</h4>
            <ul className="space-y-2">
              {["Features", "Roadmaps", "Pricing"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-sm text-slate-400 hover:text-sky-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-200">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "Portal", href: "/portal" },
                { label: "Login", href: "/login" },
                { label: "Support", href: "/pricing" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-sky-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-200">Connect</h4>
            <div className="flex gap-4">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-600/70 bg-slate-900/75 text-slate-300 transition-colors hover:border-sky-400/50 hover:text-sky-200"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700/60 pt-8 text-center">
          <p className="text-sm text-slate-400">© 2026 DevNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
