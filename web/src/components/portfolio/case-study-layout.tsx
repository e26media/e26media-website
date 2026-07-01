import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { PortfolioProject } from "@/types";
import type { CaseStudyEnhancement } from "@/types";
import { Container, SectionHeading } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { ProjectHeroImage } from "@/components/ui/client-logo-image";
import { projectShowsLogoHero } from "@/lib/client-logo";
import { cn } from "@/lib/utils";

type Props = {
  project: PortfolioProject;
  study: CaseStudyEnhancement;
};

export function CaseStudyLayout({ project, study }: Props) {
  const logoHero = projectShowsLogoHero(project.image, project.clientLogo);

  return (
    <Container className="space-y-16 py-14 md:py-20">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <div className="space-y-5">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-green-600">Case Study</p>
            <p className="mt-1 text-sm font-semibold text-zinc-500">{project.client}</p>
          </div>
          <h1 className="font-heading text-4xl font-semibold tracking-tight">{project.title}</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">{project.excerpt}</p>
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline" })}>
              <ExternalLink className="h-4 w-4" /> Visit live project
            </a>
          )}
        </div>
        <div
          className={cn(
            "relative aspect-[16/10] overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800",
            logoHero ? "bg-zinc-50 dark:bg-zinc-900" : "bg-zinc-100"
          )}
        >
          <ProjectHeroImage src={project.image} alt={project.title} contain={logoHero} sizes="50vw" priority />
        </div>
      </div>

      <div className="mx-auto max-w-3xl space-y-6">
        {study.intro.map((p) => (
          <p key={p.slice(0, 48)} className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            {p}
          </p>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {study.metrics.map((m) => (
          <Card key={m.label} className="text-center">
            <p className="font-mono text-xs uppercase tracking-wider text-green-600">{m.label}</p>
            <p className="mt-2 font-heading text-lg font-semibold text-zinc-950 dark:text-white">{m.value}</p>
          </Card>
        ))}
      </div>

      {study.sections.map((section) => (
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

      <section className="mx-auto max-w-3xl space-y-6">
        <SectionHeading title="Project timeline" align="center" />
        <div className="space-y-4">
          {study.timeline.map((step) => (
            <div key={step.phase} className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
              <p className="font-mono text-xs font-bold text-green-600">{step.phase}</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid gap-5 md:grid-cols-3">
        <Card>
          <h2 className="font-semibold">Problem</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{project.problem}</p>
        </Card>
        <Card>
          <h2 className="font-semibold">Solution</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{project.solution}</p>
        </Card>
        <Card>
          <h2 className="font-semibold">Outcome</h2>
          <p className="mt-2 text-sm font-medium text-green-700 dark:text-green-400">{project.outcome}</p>
        </Card>
      </div>

      {project.highlights && project.highlights.length > 0 && (
        <Card>
          <h2 className="font-semibold">Key highlights</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="text-green-600">✓</span> {h}
              </li>
            ))}
          </ul>
        </Card>
      )}

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((t) => (
          <span key={t} className="rounded-full border border-zinc-200 px-3 py-1 font-mono text-xs dark:border-zinc-700">
            {t}
          </span>
        ))}
      </div>

      {study.faqs.length > 0 && (
        <section className="mx-auto max-w-3xl space-y-8">
          <SectionHeading title="Related questions" align="center" />
          <FaqAccordion faqs={study.faqs} />
        </section>
      )}

      <div className="flex flex-wrap gap-4">
        <Link href="/contact" className={buttonVariants({ size: "lg" })}>
          Start a similar project
        </Link>
        <Link href="/pricing" className={buttonVariants({ variant: "outline", size: "lg" })}>
          View pricing
        </Link>
      </div>
    </Container>
  );
}
