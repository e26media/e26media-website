import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { Container, SectionHeading } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { getCategory } from "@/data/services";
import { getCategoryPillar } from "@/data/pillars";
import { ServicePillarLayout } from "@/components/services/service-pillar-layout";
import { FaqJsonLd } from "@/components/seo/json-ld";

type Props = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  const { SERVICE_CATEGORIES } = await import("@/data/services");
  return SERVICE_CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { category: slug } = await params;
  const pillar = getCategoryPillar(slug);
  const category = getCategory(slug);
  if (!category) return {};
  if (pillar) {
    return buildMetadata({
      title: pillar.metaTitle,
      description: pillar.metaDescription,
      path: `/services/${slug}`,
    });
  }
  return buildMetadata({
    title: `${category.title} Services — E26 Media`,
    description: category.description,
    path: `/services/${slug}`,
  });
}

export default async function ServiceCategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const pillar = getCategoryPillar(slug);
  if (pillar) {
    return (
      <>
        <FaqJsonLd faqs={pillar.faqs} />
        <ServicePillarLayout pillar={pillar} category={category} />
      </>
    );
  }

  return (
    <Container className="space-y-12 py-16 md:py-24">
      <SectionHeading eyebrow="Services" title={category.title} description={category.description} />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {category.items.map((item) => (
          <Link key={item.slug} href={`/services/${category.slug}/${item.slug}`}>
            <Card className="h-full transition hover:border-green-300 hover:shadow-md">
              <h2 className="font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{item.tagline}</p>
            </Card>
          </Link>
        ))}
      </div>
    </Container>
  );
}
