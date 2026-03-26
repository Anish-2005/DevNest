"use client"
import { motion } from "framer-motion"
import { Github, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"
import BrandIcon from "@/components/shared/BrandIcon"

export function Footer() {
  return (
    <footer className="mt-20 border-t border-red-900/40 bg-black/60 py-14 backdrop-blur-xl">
      <div className="page-container">
        <div className="mb-12 grid gap-12 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <BrandIcon className="h-6 w-6" />
              <span className="st-title text-xl">DevNest</span>
            </div>
            <p className="st-retro text-sm">
              Navigate the Upside Down of full-stack development.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-red-100">Learn</h4>
            <ul className="space-y-2">
              {["Features", "Roadmaps", "Pricing"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-sm text-red-100/70 hover:text-red-100">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-red-100">Community</h4>
            <ul className="space-y-2">
              {[
                { label: "Portal", href: "/portal" },
                { label: "Login", href: "/login" },
                { label: "Support", href: "/pricing" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-red-100/70 hover:text-red-100">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-red-100">Signal</h4>
            <div className="flex gap-4">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-red-900/60 bg-black/70 text-red-100/80 transition-colors hover:border-red-700 hover:text-red-100"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-red-900/35 pt-8 text-center">
          <p className="st-retro text-sm">© 2026 DevNest. All souls trapped in the Upside Down.</p>
        </div>
      </div>
    </footer>
  )
}
