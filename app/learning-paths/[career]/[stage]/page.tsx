import { notFound } from "next/navigation";

import { StageDetailView } from "@/components/roadmap/StageDetailView";
import { getRoadmapByCareerSlug, ROADMAPS } from "@/content/roadmaps";

export function generateStaticParams() {
  return ROADMAPS.flatMap((roadmap) =>
    roadmap.stages.map((stage) => ({ career: roadmap.careerSlug, stage: stage.slug })),
  );
}

interface StagePageProps {
  params: Promise<{ career: string; stage: string }>;
}

export default async function StagePage({ params }: StagePageProps) {
  const { career, stage } = await params;
  const roadmap = getRoadmapByCareerSlug(career);
  const stageExists = roadmap?.stages.some((candidate) => candidate.slug === stage);

  if (!roadmap || !stageExists) {
    notFound();
  }

  return <StageDetailView careerSlug={roadmap.careerSlug} stageSlug={stage} />;
}
