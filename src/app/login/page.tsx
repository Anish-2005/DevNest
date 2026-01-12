"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { Mail, Lock, LogIn } from "lucide-react"
import { motion } from "framer-motion"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.replace("/")
    } catch (err: any) {
      setError(err.message || "Failed to sign in")
    } finally {
      setLoading(false)
    }
  }

  const signInWithGoogle = async () => {
    setLoading(true)
    setError(null)
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
      router.replace("/")
    } catch (err: any) {
      setError(err.message || "Google sign-in failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#050306] via-[#07060a] to-[#040204] text-white px-6">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Left - marketing / illustration */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-white/3 to-black/20 border border-red-900/30 backdrop-blur-md shadow-xl">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 st-retro text-red-100">Welcome back to DevNest</h1>
          <p className="text-sm text-red-200/80 mb-6">Continue your learning journey — access portals, curated roadmaps, and hands-on projects.</p>

          <ul className="space-y-3 text-sm text-red-100/90">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-red-400 rounded-full mt-2" />
              <span>Fast sign-in with Email or Google</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-red-400 rounded-full mt-2" />
              <span>Secure, branch-friendly progress saving</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-red-400 rounded-full mt-2" />
              <span>Explore curated roadmaps and challenges</span>
            </li>
          </ul>

          <div className="mt-8 text-xs text-red-200/70">New here? <a href="/" className="underline decoration-red-700/30">Create an account</a></div>
        </div>

        {/* Right - form */}
        <div className="p-8 rounded-2xl bg-black/60 border border-red-900/40 backdrop-blur-md shadow-lg">
          <div className="mb-6">
            <h2 className="text-2xl font-bold st-retro text-white">Sign in</h2>
            <p className="text-sm text-red-200/80">Use your account to continue</p>
          </div>

          <form onSubmit={submit} className="space-y-4">
            <label className="block">
              <div className="flex items-center gap-2 text-xs text-red-200 mb-1">Email</div>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-red-300/80" />
                <input
                  aria-label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-black/40 border border-red-800 placeholder-red-400 text-sm"
                />
              </div>
            </label>

            <label className="block">
              <div className="flex items-center gap-2 text-xs text-red-200 mb-1">Password</div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-4 h-4 text-red-300/80" />
                <input
                  aria-label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-black/40 border border-red-800 placeholder-red-400 text-sm"
                />
              </div>
            </label>

            {error && <div role="alert" className="text-sm text-red-400">{error}</div>}

            <div className="flex items-center justify-between gap-4">
              <button type="submit" disabled={loading} className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-red-700 to-red-900 font-semibold">
                {loading ? "Signing in…" : "Sign in"}
              </button>
              <button type="button" onClick={signInWithGoogle} disabled={loading} className="flex items-center gap-2 px-4 py-3 rounded-lg bg-white text-black font-medium">
                <LogIn className="w-4 h-4" />
                Google
              </button>
            </div>

            <div className="flex items-center justify-between text-xs text-red-200/70">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 bg-black/30 accent-red-600" />
                Remember me
              </label>
              <a href="/" className="underline">Forgot password?</a>
            </div>
          </form>

          <div className="mt-6 text-center text-xs text-red-200/60">By signing in you agree to DevNest's <a href="/" className="underline">terms</a> and <a href="/" className="underline">privacy</a>.</div>
        </div>

      </motion.div>
    </div>
  )
}
