import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { INDUSTRIES, getIndustry } from "@/data/industries";
import { getIndustryPillar } from "@/data/industry-pillars";
import { IndustryPillarLayout } from "@/components/industries/industry-pillar-layout";
import { FaqJsonLd } from "@/components/seo/json-ld";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const pillar = getIndustryPillar(slug);
  const industry = getIndustry(slug);
  if (!industry) return {};
  if (pillar) {
    return buildMetadata({
      title: pillar.metaTitle,
      description: pillar.metaDescription,
      path: `/industries/${slug}`,
    });
  }
  return buildMetadata({
    title: `${industry.title} Technology Solutions — E26 Media Karnataka`,
    description: industry.overview,
    path: `/industries/${slug}`,
  });
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const pillar = getIndustryPillar(slug);
  if (!pillar) notFound();

  return (
    <>
      <FaqJsonLd faqs={pillar.faqs} />
      <IndustryPillarLayout pillar={pillar} industry={industry} />
    </>
  );
}
