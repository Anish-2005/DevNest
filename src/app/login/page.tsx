"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "@/lib/firebase"

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
    <div className="min-h-screen flex items-center justify-center bg-[#070707] text-white">
      <div className="w-full max-w-md p-8 rounded-xl bg-black/60 border border-red-900/40 backdrop-blur">
        <h2 className="text-2xl font-bold mb-4">Sign in to DevNest</h2>
        <form onSubmit={submit} className="space-y-4">
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full px-4 py-3 rounded bg-black/70 border border-red-800" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full px-4 py-3 rounded bg-black/70 border border-red-800" />
          {error && <div className="text-sm text-red-400">{error}</div>}
          <div className="flex gap-2">
            <button type="submit" disabled={loading} className="flex-1 px-4 py-3 rounded bg-gradient-to-r from-red-700 to-red-900 font-bold">{loading ? "Signing in…" : "Sign in"}</button>
            <button type="button" onClick={signInWithGoogle} disabled={loading} className="px-4 py-3 rounded bg-yellow-500 text-black font-semibold">Google</button>
          </div>
        </form>
      </div>
    </div>
  )
}
