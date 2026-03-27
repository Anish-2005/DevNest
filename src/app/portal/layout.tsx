import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Learning Portal",
  description:
    "Enter the DevNest learning portal and choose a curated path across web, AI, cloud, security, and other high-demand domains.",
  path: "/portal",
  keywords: [
    "developer learning portal",
    "tech learning paths",
    "coding career portal",
    "software skills",
  ],
});

export default function PortalLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
