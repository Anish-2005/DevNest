"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Mail, Lock, LogIn, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import BrandIcon from "@/components/shared/BrandIcon";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace("/");
    } catch (err: any) {
      setError(err.message || "Failed to sign in");
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    setError(null);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.replace("/");
    } catch (err: any) {
      setError(err.message || "Google sign-in failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-page flex items-center px-6 py-14">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto grid w-full max-w-5xl gap-6 md:grid-cols-2"
      >
        <div className="surface-card p-8 md:p-10">
          <div className="neon-glow-red inline-flex h-10 w-10 items-center justify-center rounded-lg">
            <BrandIcon className="h-6 w-6" />
          </div>
          <span className="badge-pill">Signal Reconnected</span>
          <h1 className="st-title mt-5 text-3xl sm:text-4xl">
            Welcome Back To Hawkins Lab
          </h1>
          <p className="st-retro mt-4 text-sm leading-relaxed">
            Re-enter your dimensional roadmap, haunted projects, and progress
            telemetry.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-red-100/90">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-red-400" />
              Personalized escape routes and milestone tracking.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-red-400" />
              Secure entry via email/password or Google.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-red-400" />
              Cursed labs built for real engineering battles.
            </li>
          </ul>

          <p className="mt-8 text-xs text-red-100/65">
            New to DevNest?{" "}
            <Link
              href="/"
              className="underline decoration-red-700/40 underline-offset-2 hover:text-red-100"
            >
              Enter as a new soul
            </Link>
          </p>
        </div>

        <div className="surface-card p-8 md:p-10">
          <div className="mb-6">
            <h2 className="st-title text-2xl">Sign In</h2>
            <p className="st-retro mt-2 text-sm">
              Use your account to cross the threshold.
            </p>
          </div>

          <form onSubmit={submit} className="space-y-4">
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-red-100/80">
                Email
              </span>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-red-100/60" />
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
              <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-red-100/80">
                Password
              </span>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-red-100/60" />
                <input
                  aria-label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  className="form-input pl-10"
                  required
                />
              </div>
            </label>

            {error && (
              <div
                role="alert"
                className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-200"
              >
                {error}
              </div>
            )}

            <div className="flex flex-col gap-3 sm:flex-row">
              <button type="submit" disabled={loading} className="btn-primary flex-1">
                {loading ? "Crossing..." : "Sign In"}
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

            <div className="flex items-center justify-between text-xs text-red-100/65">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 accent-red-700" />
                Remember me
              </label>
              <Link href="/" className="underline hover:text-red-100">
                Forgot password?
              </Link>
            </div>
          </form>

          <p className="mt-6 text-center text-xs text-red-100/60">
            By signing in, you agree to DevNest&apos;s{" "}
            <Link href="/" className="underline">
              terms
            </Link>{" "}
            and{" "}
            <Link href="/" className="underline">
              privacy policy
            </Link>
            .
          </p>
        </div>
      </motion.div>
    </div>
  );
}
