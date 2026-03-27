import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import learningPaths from "@/data/portalPaths";

type Params = Promise<{ id: string }> | { id: string };

function toSentenceCase(input: string): string {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const path = learningPaths.find((item) => item.id === resolvedParams.id);

  if (!path) {
    return createPageMetadata({
      title: "Path Not Found",
      description: "The requested learning path could not be found.",
      path: "/portal",
      index: false,
    });
  }

  const readableDifficulty = toSentenceCase(path.difficulty.toLowerCase());
  const topSkills = path.skills.slice(0, 4).join(", ");
  const description = `${path.title} learning path on DevNest. ${path.duration} timeline, ${readableDifficulty} difficulty, ${path.totalModules} modules, and core skills including ${topSkills}.`;

  return createPageMetadata({
    title: `${path.title} Learning Path`,
    description,
    path: `/portal/${path.id}`,
    keywords: [
      `${path.title.toLowerCase()} roadmap`,
      `${path.title.toLowerCase()} learning path`,
      "developer career path",
      "project based learning",
      ...path.skills.map((skill) => skill.toLowerCase()),
    ],
  });
}

export default function PathLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
