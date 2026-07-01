import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import type { Industry, IndustryPillar } from "@/types";
import { Container, SectionHeading } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";
import { PageHero } from "@/components/visual/page-hero";
import { CtaBand } from "@/components/visual/cta-band";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { ContactForm } from "@/components/forms/contact-form";
import { ProjectCard } from "@/components/portfolio/project-card";
import { PORTFOLIO } from "@/data/portfolio";
import { getGoogleSheetsUrl } from "@/lib/sheets-url";

type Props = {
  pillar: IndustryPillar;
  industry: Industry;
};

export function IndustryPillarLayout({ pillar, industry }: Props) {
  const sheetsUrl = getGoogleSheetsUrl();
  const portfolio = pillar.portfolioSlugs
    .map((slug) => PORTFOLIO.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <>
      <PageHero
        badge="Industry"
        title={`${industry.title} technology solutions`}
        highlight={pillar.heroHighlight ?? industry.title}
        description={industry.overview}
      />

      <Container className="space-y-20 py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-6">
          <nav aria-label="Breadcrumb" className="text-sm text-zinc-500">
            <Link href="/industries" className="hover:text-green-600">
              Industries
            </Link>
            <span aria-hidden> / </span>
            <span className="text-zinc-950 dark:text-white">{industry.title}</span>
          </nav>
          {pillar.intro.map((p) => (
            <p key={p.slice(0, 48)} className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              {p}
            </p>
          ))}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/contact" className={buttonVariants({ size: "lg" })}>
              Discuss your project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/industries" className={buttonVariants({ variant: "outline", size: "lg" })}>
              All industries
            </Link>
          </div>
        </div>

        {pillar.sections.map((section) => (
          <article key={section.heading} className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-3xl">
              {section.heading}
            </h2>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 48)} className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                {p}
              </p>
            ))}
          </article>
        ))}

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="font-heading text-xl font-semibold">Common challenges</h2>
            <ul className="mt-6 space-y-3">
              {industry.challenges.map((c) => (
                <li key={c} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="text-red-400">•</span> {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="font-heading text-xl font-semibold">How E26 Media helps</h2>
            <ul className="mt-6 space-y-3">
              {industry.solutions.map((s) => (
                <li key={s} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" /> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section className="space-y-8">
          <SectionHeading title="Automation opportunities" />
          <div className="grid gap-4 md:grid-cols-2">
            {pillar.automation.map((a) => (
              <div key={a} className="rounded-xl border border-zinc-200 p-5 text-sm leading-relaxed dark:border-zinc-800">
                {a}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeading title="Relevant services for this industry" />
          <div className="flex flex-wrap gap-3">
            {pillar.serviceCategorySlugs.map((s) => (
              <Link
                key={s}
                href={`/services/${s}`}
                className="rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 hover:bg-green-100 dark:bg-green-950/40 dark:text-green-400"
              >
                {s.replace(/-/g, " ")} →
              </Link>
            ))}
          </div>
        </section>

        {portfolio.length > 0 && (
          <section className="space-y-8">
            <SectionHeading eyebrow="Proof" title="Related client work" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {portfolio.map((project) => (
                <ProjectCard key={project!.slug} project={project!} href={`/portfolio/${project!.slug}`} />
              ))}
            </div>
          </section>
        )}

        <section className="mx-auto max-w-3xl space-y-8">
          <SectionHeading
            title={`${industry.title} FAQ`}
            description={`Common questions about technology for ${industry.title.toLowerCase()} businesses in Karnataka.`}
            align="center"
          />
          <FaqAccordion faqs={pillar.faqs} />
        </section>

        <section className="grid gap-8 rounded-xl border border-zinc-200 bg-zinc-50 p-8 lg:grid-cols-2 lg:items-start dark:border-zinc-800 dark:bg-zinc-900">
          <SectionHeading
            title={`Start your ${industry.title.toLowerCase()} project`}
            description="Tell us about your goals. We respond within 24 business hours."
          />
          <ContactForm sheetsUrl={sheetsUrl} />
        </section>
      </Container>

      <CtaBand heading={`Technology partners for ${industry.title.toLowerCase()} in Karnataka`} />
    </>
  );
}
