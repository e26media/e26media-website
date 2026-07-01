import type { BlogPost } from "@/types";
import { BLOG_POSTS } from "@/data/blogs";
import { RESOURCES } from "@/data/resources";

export type KnowledgeCategory = {
  slug: string;
  title: string;
  description: string;
  type: "topic" | "format";
};

export const KNOWLEDGE_CATEGORIES: KnowledgeCategory[] = [
  { slug: "website-development", title: "Website Development", description: "Guides on websites, pricing, and web strategy for Karnataka businesses.", type: "topic" },
  { slug: "software", title: "Software", description: "Custom software, ERP, CRM, and business systems.", type: "topic" },
  { slug: "ai", title: "AI", description: "Practical AI, chatbots, and automation.", type: "topic" },
  { slug: "branding", title: "Branding", description: "Logo, identity, and brand strategy.", type: "topic" },
  { slug: "seo", title: "SEO", description: "Search rankings, local SEO, and organic growth.", type: "topic" },
  { slug: "marketing", title: "Marketing", description: "Digital marketing, ads, and growth.", type: "topic" },
  { slug: "cloud", title: "Cloud", description: "Hosting, migration, and infrastructure.", type: "topic" },
  { slug: "mobile", title: "Mobile", description: "App development and mobile strategy.", type: "topic" },
  { slug: "guides", title: "Guides", description: "In-depth articles and playbooks.", type: "format" },
  { slug: "downloads", title: "Downloads", description: "Free checklists and templates.", type: "format" },
];

const BLOG_CATEGORY_MAP: Record<string, string> = {
  "Website Development": "website-development",
  "Software Development": "software",
  SEO: "seo",
  "Mobile App Development": "mobile",
  AI: "ai",
  "Digital Marketing": "marketing",
  "Cloud Solutions": "cloud",
  Branding: "branding",
};

export function getKnowledgeCategoryForPost(post: BlogPost): string {
  return BLOG_CATEGORY_MAP[post.category] ?? "guides";
}

export function getPostsByKnowledgeCategory(categorySlug: string): BlogPost[] {
  if (categorySlug === "guides") return BLOG_POSTS;
  return BLOG_POSTS.filter((p) => getKnowledgeCategoryForPost(p) === categorySlug);
}

export function getKnowledgeCategory(slug: string): KnowledgeCategory | undefined {
  return KNOWLEDGE_CATEGORIES.find((c) => c.slug === slug);
}

export { BLOG_POSTS, RESOURCES };
