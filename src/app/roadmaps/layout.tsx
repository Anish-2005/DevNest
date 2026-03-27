import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Roadmaps",
  description:
    "Browse role-based developer roadmaps with milestones, modules, and timelines designed for real-world skill progression.",
  path: "/roadmaps",
  keywords: [
    "developer roadmaps",
    "software engineering roadmap",
    "web development roadmap",
    "tech career roadmap",
  ],
});

export default function RoadmapsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
