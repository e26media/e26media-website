import { buildMetadata } from "@/lib/seo";
import { BLOG_POSTS } from "@/data/knowledge";
import { PageHero } from "@/components/visual/page-hero";
import { CtaBand } from "@/components/visual/cta-band";
import { KnowledgeGrid } from "@/components/knowledge/knowledge-grid";

export const metadata = buildMetadata({
  title: "Guides & Articles — E26 Media Knowledge Center",
  description:
    "Expert guides on website development, software, SEO, AI, and digital marketing for Karnataka businesses from E26 Media.",
  path: "/knowledge/guides",
});

export default function KnowledgeGuidesPage() {
  return (
    <>
      <PageHero
        badge="Guides"
        title="In-depth guides for business owners"
        highlight="business owners"
        description="Practical articles — each linking to commercial services when you are ready to implement."
      />
      <KnowledgeGrid posts={BLOG_POSTS} />
      <CtaBand text="Ready to implement? Book a free consultation with our Mangalore team." />
    </>
  );
}
