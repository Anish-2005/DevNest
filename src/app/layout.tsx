import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundClient from "./background-client"
import CursorTrail from "./cursor-trail"

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
        {/* Fullscreen interactive background placed behind all content (client) */}
        <BackgroundClient />
        
        {/* Interactive cursor trail effect */}
        <CursorTrail />

        {children}
      </body>
    </html>
  );
}
