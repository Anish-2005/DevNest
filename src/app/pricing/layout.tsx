import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Pricing",
  description:
    "Compare DevNest plans and choose the right tier for your learning goals, project volume, and career growth pace.",
  path: "/pricing",
  keywords: [
    "developer learning pricing",
    "coding platform plans",
    "tech education subscription",
    "DevNest pricing",
  ],
});

export default function PricingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
