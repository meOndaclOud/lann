import { CareerPathPreview } from "@/components/home/CareerPathPreview";
import { CommunityPreview } from "@/components/home/CommunityPreview";
import { Hero } from "@/components/home/Hero";
import { LearningJourney } from "@/components/home/LearningJourney";
import { MentorPreview } from "@/components/home/MentorPreview";
import { ProjectPreview } from "@/components/home/ProjectPreview";
import { ResourcePreview } from "@/components/home/ResourcePreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CareerPathPreview />
      <LearningJourney />
      <ResourcePreview />
      <ProjectPreview />
      <MentorPreview />
      <CommunityPreview />
    </>
  );
}
