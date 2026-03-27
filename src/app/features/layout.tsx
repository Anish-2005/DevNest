import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Features",
  description:
    "Explore DevNest features for focused learning, structured developer progression, and practical project-first growth.",
  path: "/features",
  keywords: [
    "developer learning features",
    "coding platform features",
    "skill tracking",
    "learning journey",
  ],
});

export default function FeaturesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
