import type { Metadata } from "next";
import { Cinzel, IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import AuthGuard from "@/components/auth/AuthGuard"
import { BackgroundClient } from "@/components/background/BackgroundClient";
import { CursorTrail } from "@/components/effects/CursorTrail";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-retro-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevNest - Enter The Upside Down Of Learning",
  description: "A cinematic Stranger Things-inspired developer portal with eerie roadmaps, cursed features, and neon learning paths.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} ${cinzel.variable} font-sans`}
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

