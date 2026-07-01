import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Container, SectionHeading } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { RESOURCES } from "@/data/knowledge";
import { PageHero } from "@/components/visual/page-hero";
import { CtaBand } from "@/components/visual/cta-band";
import { Download } from "lucide-react";

export const metadata = buildMetadata({
  title: "Free Downloads & Templates — E26 Media Knowledge Center",
  description:
    "Download free checklists and guides for website planning, SEO, branding, automation, and lead generation from E26 Media.",
  path: "/knowledge/downloads",
});

export default function KnowledgeDownloadsPage() {
  return (
    <>
      <PageHero
        badge="Downloads"
        title="Free resources for smarter digital decisions"
        highlight="Free resources"
        description="Practical checklists and templates from our project team. Request access via our contact form."
      />

      <Container className="space-y-12 py-16 md:py-24">
        <SectionHeading
          title="Available downloads"
          description="Submit a quick enquiry and we will send download links within 24 business hours."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((r) => (
            <Card key={r.slug} className="flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-wider text-green-600">{r.category}</p>
              <h2 className="mt-2 text-lg font-semibold">{r.title}</h2>
              <p className="mt-2 flex-1 text-sm text-zinc-600 dark:text-zinc-400">{r.description}</p>
              <Link href="/contact" className={`${buttonVariants({ variant: "outline", size: "sm" })} mt-6 w-fit`}>
                <Download className="h-4 w-4" /> Request download
              </Link>
            </Card>
          ))}
        </div>
      </Container>

      <CtaBand />
    </>
  );
}
