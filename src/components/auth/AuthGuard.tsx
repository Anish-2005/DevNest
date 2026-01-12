"use client"
import React, { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/lib/firebase"

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    if (!pathname) return
    if (pathname === "/" || pathname.startsWith("/login")) {
      setChecking(false)
      return
    }

    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setChecking(false)
      } else {
        router.replace('/login')
      }
    })

    return () => unsub()
  }, [pathname, router])

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="h-10 w-10 rounded-full border-4 border-red-600 animate-spin mx-auto" />
          <p className="mt-4 text-sm text-red-300">Checking authentication…</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
