import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { getAllServices, getService } from "@/data/services";
import { getServicePillar } from "@/data/pillars";
import { getServiceDetailEnhancement } from "@/data/service-details";
import { ServicePillarLayout } from "@/components/services/service-pillar-layout";
import { ServiceDetailLayout } from "@/components/services/service-detail-layout";
import { FaqJsonLd } from "@/components/seo/json-ld";

type Props = { params: Promise<{ category: string; slug: string }> };

export async function generateStaticParams() {
  return getAllServices().map(({ category, item }) => ({
    category: category.slug,
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { category, slug } = await params;
  const pillar = getServicePillar(category, slug);
  if (pillar) {
    return buildMetadata({
      title: pillar.metaTitle,
      description: pillar.metaDescription,
      path: `/services/${category}/${slug}`,
    });
  }
  const enhancement = getServiceDetailEnhancement(category, slug);
  if (enhancement) {
    return buildMetadata({
      title: enhancement.metaTitle,
      description: enhancement.metaDescription,
      path: `/services/${category}/${slug}`,
    });
  }
  const data = getService(category, slug);
  if (!data) return {};
  return buildMetadata({
    title: `${data.item.title} in Mangalore & Karnataka — E26 Media`,
    description: data.item.overview.slice(0, 155),
    path: `/services/${category}/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { category: catSlug, slug } = await params;
  const data = getService(catSlug, slug);
  if (!data) notFound();
  const { category, item } = data;

  const servicePillar = getServicePillar(catSlug, slug);
  if (servicePillar) {
    return (
      <>
        <FaqJsonLd faqs={servicePillar.faqs} />
        <ServicePillarLayout pillar={servicePillar} category={category} />
      </>
    );
  }

  const enhancement = getServiceDetailEnhancement(catSlug, slug);
  if (!enhancement) notFound();

  return (
    <>
      <FaqJsonLd faqs={enhancement.faqs} />
      <ServiceDetailLayout enhancement={enhancement} category={category} item={item} />
    </>
  );
}
