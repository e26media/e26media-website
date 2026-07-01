import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Container, SectionHeading } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { PageHero } from "@/components/visual/page-hero";
import { CtaBand } from "@/components/visual/cta-band";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { ContactForm } from "@/components/forms/contact-form";
import {
  PRICING_INTRO,
  PRICING_SECTIONS,
  PRICING_CATEGORIES,
  PRICING_FAQS,
} from "@/data/pricing";
import { getGoogleSheetsUrl } from "@/lib/sheets-url";

export const metadata = buildMetadata({
  title: "Pricing & Investment — E26 Media Mangalore",
  description:
    "Transparent pricing for website development, software, mobile apps, AI, digital marketing, branding, and cloud services in Mangalore and Karnataka. Free consultation with fixed quotes.",
  path: "/pricing",
});

export default function PricingPage() {
  const sheetsUrl = getGoogleSheetsUrl();

  return (
    <>
      <PageHero
        badge="Investment"
        title="Transparent pricing for"
        highlight="technology that delivers ROI"
        description="Honest budget bands before you commit. Fixed quotes after free discovery — no surprise invoices."
      />

      <Container className="space-y-20 py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-6">
          {PRICING_INTRO.map((p) => (
            <p key={p.slice(0, 48)} className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              {p}
            </p>
          ))}
          <Link href="/contact" className={buttonVariants({ size: "lg" })}>
            Get a fixed quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {PRICING_SECTIONS.map((section) => (
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

        <section className="space-y-12">
          <SectionHeading
            eyebrow="Service pricing"
            title="Investment by service category"
            description="Click any category for full service details, case studies, and FAQs."
            align="center"
          />
          {PRICING_CATEGORIES.map((cat) => (
            <div key={cat.slug} className="space-y-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-zinc-950 dark:text-white">{cat.title}</h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{cat.summary}</p>
                </div>
                <Link href={cat.href} className="text-sm font-semibold text-green-600 hover:underline">
                  View {cat.title} services →
                </Link>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {cat.tiers.map((tier) => (
                  <Card key={tier.name} className="flex flex-col">
                    <p className="font-mono text-xs font-semibold uppercase tracking-wider text-green-600">{tier.name}</p>
                    <p className="mt-2 font-heading text-xl font-semibold text-zinc-950 dark:text-white">{tier.range}</p>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{tier.description}</p>
                    <ul className="mt-4 flex-1 space-y-2">
                      {tier.includes.map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mx-auto max-w-3xl space-y-8">
          <SectionHeading title="Pricing FAQs" align="center" />
          <FaqAccordion faqs={PRICING_FAQS} />
        </section>

        <section className="grid gap-8 rounded-xl border border-zinc-200 bg-zinc-50 p-8 lg:grid-cols-2 lg:items-start dark:border-zinc-800 dark:bg-zinc-900">
          <SectionHeading
            title="Request your fixed quote"
            description="Tell us what you need. We respond within 24 business hours with scope, timeline, and a transparent price."
          />
          <ContactForm sheetsUrl={sheetsUrl} />
        </section>
      </Container>

      <CtaBand heading="Ready to invest in technology that grows your business?" />
    </>
  );
}
