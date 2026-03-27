import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Login",
  description:
    "Sign in to DevNest to continue your learning progress, roadmaps, and personalized developer pathways.",
  path: "/login",
  index: false,
});

export default function LoginLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
