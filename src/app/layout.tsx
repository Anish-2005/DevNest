import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CursorTrail } from "@/components/effects/CursorTrail"
import AuthGuard from "@/components/auth/AuthGuard"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevNest - Enter the Upside Down of Learning",
  description: "Master web development through the darkness. Interactive learning paths with an eerie 80s Stranger Things aesthetic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {/* Interactive cursor trail effect */}
        <CursorTrail />

        {/* Protect all pages except landing/login via client-side guard */}
        <AuthGuard>
          {children}
        </AuthGuard>
      </body>
    </html>
  );
}
