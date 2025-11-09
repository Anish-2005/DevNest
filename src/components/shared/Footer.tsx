"use client"
import { motion } from "framer-motion"
import { Code2, Github, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative mt-20 py-16 border-t border-red-900/20 backdrop-blur-xl bg-black/60">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center neon-glow-red">
                <Code2 className="w-5 h-5 text-red-200" />
              </div>
              <span className="st-title text-xl text-neon-red st-flicker">DevNest</span>
            </div>
            <p className="st-retro text-sm text-red-200/60">
              Navigate the Upside Down of full-stack development
            </p>
          </div>

          <div>
            <h4 className="st-retro font-bold text-red-300 mb-4">Learn</h4>
            <ul className="space-y-2">
              {["Features", "Roadmaps", "Pricing"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="st-retro text-sm text-red-200/60 hover:text-neon-red transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="st-retro font-bold text-red-300 mb-4">Community</h4>
            <ul className="space-y-2">
              {["About", "Community", "Support"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="st-retro text-sm text-red-200/60 hover:text-neon-red transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="st-retro font-bold text-red-300 mb-4">Connect</h4>
            <div className="flex gap-4">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-red-900/20 border border-red-700/40 flex items-center justify-center hover:bg-red-900/40 transition-colors neon-glow-red"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5 text-red-300" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-red-900/20 text-center">
          <p className="st-retro text-sm text-red-200/60">
            © 2025 DevNest. All souls trapped in the Upside Down.
          </p>
        </div>
      </div>
    </footer>
  )
}
