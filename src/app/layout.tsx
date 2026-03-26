import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Mono, Work_Sans } from "next/font/google";
import "./globals.css";
import AuthGuard from "@/components/auth/AuthGuard"
import { BackgroundClient } from "@/components/background/BackgroundClient";
import { CursorTrail } from "@/components/effects/CursorTrail";

const workSans = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-retro-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevNest - Enter The Upside Down Of Learning",
  description: "A cinematic Stranger Things-inspired developer portal with eerie roadmaps, cursed features, and neon learning paths.",
  icons: {
    icon: [{ url: "/brand-icon.svg", type: "image/svg+xml" }],
    shortcut: ["/brand-icon.svg"],
    apple: [{ url: "/brand-icon.svg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${spaceMono.variable} ${cormorant.variable} font-sans`}
      >
        <BackgroundClient />
        <CursorTrail />
        <AuthGuard>
          {children}
        </AuthGuard>
      </body>
    </html>
  );
}

