import { notFound } from "next/navigation";

import { CareerDetailView } from "@/components/career/CareerDetailView";
import { getAllCareerSlugs, getCareerBySlug } from "@/content/careers";

export function generateStaticParams() {
  return getAllCareerSlugs().map((slug) => ({ slug }));
}

interface CareerDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CareerDetailPage({ params }: CareerDetailPageProps) {
  const { slug } = await params;
  const career = getCareerBySlug(slug);

  if (!career) {
    notFound();
  }

  return <CareerDetailView slug={career.slug} />;
}
