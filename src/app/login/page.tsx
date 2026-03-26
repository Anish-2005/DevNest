"use client"
import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { Mail, Lock, LogIn, ArrowRight } from "lucide-react"
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
    <div className="app-page flex items-center px-6 py-14">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto grid w-full max-w-5xl gap-6 md:grid-cols-2"
      >
        <div className="surface-card p-8 md:p-10">
          <span className="badge-pill">Welcome Back</span>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Continue learning with DevNest</h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            Access your learning tracks, hands-on projects, and progress analytics in one place.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-slate-200">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
              Personalized roadmaps and milestone tracking.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
              Secure access with email/password or Google.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
              Practical exercises built for real engineering workflows.
            </li>
          </ul>

          <p className="mt-8 text-xs text-slate-400">
            New to DevNest?{" "}
            <Link href="/" className="underline decoration-slate-500 underline-offset-2 hover:text-sky-200">
              Explore the platform
            </Link>
          </p>
        </div>

        <div className="surface-card p-8 md:p-10">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white">Sign in</h2>
            <p className="mt-2 text-sm text-slate-300">Use your account to continue.</p>
          </div>

          <form onSubmit={submit} className="space-y-4">
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-300">Email</span>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                <input
                  aria-label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="form-input pl-10"
                  required
                />
              </div>
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-300">Password</span>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                <input
                  aria-label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="form-input pl-10"
                  required
                />
              </div>
            </label>

            {error && <div role="alert" className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-200">{error}</div>}

            <div className="flex flex-col gap-3 sm:flex-row">
              <button type="submit" disabled={loading} className="btn-primary flex-1">
                {loading ? "Signing in..." : "Sign in"}
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={signInWithGoogle}
                disabled={loading}
                className="btn-secondary sm:min-w-[150px]"
              >
                <LogIn className="h-4 w-4" />
                Google
              </button>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 accent-sky-400" />
                Remember me
              </label>
              <Link href="/" className="underline hover:text-sky-200">Forgot password?</Link>
            </div>
          </form>

          <p className="mt-6 text-center text-xs text-slate-400">
            By signing in, you agree to DevNest's <Link href="/" className="underline">terms</Link> and <Link href="/" className="underline">privacy policy</Link>.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
