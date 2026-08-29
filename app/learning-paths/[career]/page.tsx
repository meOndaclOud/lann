import { notFound } from "next/navigation";

import { LearningPathView } from "@/components/roadmap/LearningPathView";
import { getRoadmapByCareerSlug, ROADMAPS } from "@/content/roadmaps";

export function generateStaticParams() {
  return ROADMAPS.map((roadmap) => ({ career: roadmap.careerSlug }));
}

interface LearningPathPageProps {
  params: Promise<{ career: string }>;
}

export default async function LearningPathPage({ params }: LearningPathPageProps) {
  const { career } = await params;
  const roadmap = getRoadmapByCareerSlug(career);

  if (!roadmap) {
    notFound();
  }

  return <LearningPathView slug={roadmap.careerSlug} />;
}
