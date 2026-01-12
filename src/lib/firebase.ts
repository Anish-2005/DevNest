// Firebase client initialization
import { initializeApp, getApps, getApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAnalytics, isSupported } from "firebase/analytics"

// Configuration - prefer environment variables, fall back to provided values
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyAW2Z5CJG7OIVd-LLJw6WpZ9mqYjU8Byzo",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "devnest-d659d.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "devnest-d659d",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "devnest-d659d.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "543064641822",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:543064641822:web:abc383e5bc06f37a8ff90f",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-Q65L0NXKBG",
}

// Initialize app (avoid duplicate in dev/hmr)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

// Exports
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

// Analytics is browser-only and optional
export let analytics: ReturnType<typeof getAnalytics> | null = null
if (typeof window !== "undefined") {
  ;(async () => {
    if (await isSupported()) {
      analytics = getAnalytics(app)
    }
  })()
}

export default app
