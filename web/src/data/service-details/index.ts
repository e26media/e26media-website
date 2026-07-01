import type { ServiceDetailEnhancement } from "@/types";
import { WEBSITE_DETAIL_ENHANCEMENTS } from "./website";
import { SOFTWARE_DETAIL_ENHANCEMENTS } from "./software";
import { AI_DETAIL_ENHANCEMENTS, MOBILE_DETAIL_ENHANCEMENTS } from "./ai-mobile";
import { MARKETING_DETAIL_ENHANCEMENTS, BRANDING_DETAIL_ENHANCEMENTS } from "./marketing-branding";
import { PHASE4_DETAIL_ENHANCEMENTS } from "./phase4";
import { PHASE5_DETAIL_ENHANCEMENTS } from "./phase5";

const ALL_ENHANCEMENTS: ServiceDetailEnhancement[] = [
  ...WEBSITE_DETAIL_ENHANCEMENTS,
  ...SOFTWARE_DETAIL_ENHANCEMENTS,
  ...AI_DETAIL_ENHANCEMENTS,
  ...MOBILE_DETAIL_ENHANCEMENTS,
  ...MARKETING_DETAIL_ENHANCEMENTS,
  ...BRANDING_DETAIL_ENHANCEMENTS,
  ...PHASE4_DETAIL_ENHANCEMENTS,
  ...PHASE5_DETAIL_ENHANCEMENTS,
];

const ENHANCEMENT_MAP = new Map(
  ALL_ENHANCEMENTS.map((e) => [`${e.categorySlug}/${e.serviceSlug}`, e])
);

export const PHASE2_SERVICE_SLUGS = ALL_ENHANCEMENTS.map((e) => ({
  category: e.categorySlug,
  slug: e.serviceSlug,
}));

export function getServiceDetailEnhancement(
  categorySlug: string,
  serviceSlug: string
): ServiceDetailEnhancement | null {
  return ENHANCEMENT_MAP.get(`${categorySlug}/${serviceSlug}`) ?? null;
}

export function hasServiceDetailEnhancement(categorySlug: string, serviceSlug: string): boolean {
  return ENHANCEMENT_MAP.has(`${categorySlug}/${serviceSlug}`);
}
