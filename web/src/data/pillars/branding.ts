import type { ServicePillar } from "@/types";
import { buildPillarFaqs } from "@/lib/pillar-faqs";

export const BRANDING_PILLAR: ServicePillar = {
  slug: "branding",
  metaTitle: "Branding Agency in Mangalore — Logo, Identity & Brand Design | E26 Media",
  metaDescription:
    "Professional branding in Mangalore: logo design, brand identity, guidelines, packaging, and creative assets. Build trust before your website or marketing launches.",
  hero: {
    badge: "Branding & Creative",
    title: "Branding that makes your business look as good as it performs",
    highlight: "look as good",
    description:
      "Logo, visual identity, brand guidelines, and creative systems — the foundation for websites, social media, and sales materials that convert.",
  },
  intro: [
    "Before a prospect reads your services or checks your reviews, they judge your brand visually. Inconsistent logos, mismatched colours, and amateur templates signal risk — especially when competing with established players in Karnataka and international markets.",
    "E26 Media delivers branding and creative services for startups, restaurants, corporates, NGOs, and retailers — logo design, full identity systems, brand guidelines, packaging, social creatives, company profiles, and presentation decks.",
    "Strong branding amplifies everything else we build — websites, apps, ads, and pitch materials share one coherent story. Many clients engage branding before or alongside website development for maximum impact.",
  ],
  sections: [
    {
      heading: "Branding services we offer",
      paragraphs: [
        "Logo design — memorable, scalable marks that work on signage, apps, favicons, and embroidery.",
        "Brand identity systems — colour palettes, typography, icon style, photography direction, and visual language.",
        "Brand guidelines — documented standards so your team and partners stay consistent.",
        "Packaging design — retail and product packaging for shelf impact and regulatory clarity.",
        "Social media creatives — templates and campaign assets aligned to your identity.",
        "Company profile and presentation design — professional PDFs and pitch decks for sales and investors.",
      ],
    },
    {
      heading: "Our branding process",
      paragraphs: [
        "Discovery workshops capture positioning, audience, competitors, and personality — not just aesthetic preferences. Mood boards and directional concepts precede refined logo rounds.",
        "You receive editable source files (AI, SVG, PDF guidelines) and export packages for web and print. We coordinate with our development team so new websites launch with correct assets — not stretched logos.",
      ],
    },
    {
      heading: "When to invest in branding",
      paragraphs: [
        "Launching a new business or product line; rebranding after merger or market shift; preparing for fundraising or franchise expansion; or fixing inconsistency across website, social, and print.",
        "Branding before a major website redesign prevents costly rework — design once, deploy everywhere.",
      ],
    },
    {
      heading: "Branding pricing guide",
      paragraphs: [
        "Logo-only projects start lower; full identity with guidelines, stationery, and social kits require larger investment. We quote fixed packages after a creative brief — typically ₹25,000–₹2,50,000+ depending on depth and revision rounds.",
      ],
    },
  ],
  pricingTiers: [
    {
      name: "Logo Package",
      range: "₹25,000 – ₹60,000",
      description: "Logo concepts, refinements, final files for web and print.",
      includes: ["Discovery brief", "3 concept directions", "2 revision rounds", "SVG/PNG/PDF exports"],
    },
    {
      name: "Brand Identity",
      range: "₹60,000 – ₹1,50,000",
      description: "Logo plus colour, type, icons, stationery, social templates.",
      includes: ["Identity system", "Stationery design", "Social kit", "Brand guidelines PDF"],
    },
    {
      name: "Full Brand Programme",
      range: "₹1,50,000 – ₹3,00,000+",
      description: "Strategy workshop, packaging, profiles, campaign creatives.",
      includes: ["Workshop", "Packaging or profile", "Presentation deck", "Implementation support"],
    },
  ],
  deliverables: [
    "Creative brief and mood direction",
    "Logo files in vector and raster formats",
    "Colour and typography specifications",
    "Brand guidelines document",
    "Stationery and social templates (package dependent)",
    "Source files for your team and printers",
  ],
  whyChoose: [
    "Branding integrated with web and marketing delivery",
    "Mangalore studio with Karnataka and Gulf/Australia client experience",
    "Fixed package quotes after brief — clear revision rounds",
    "Assets optimised for digital and print from day one",
    "Guidelines that keep teams consistent long-term",
    "Portfolio brands across hospitality, retail, and corporate sectors",
  ],
  process: [
    { step: "Discover", description: "Positioning, audience, competitors, brand personality workshop." },
    { step: "Direct", description: "Mood boards and creative direction approval." },
    { step: "Design", description: "Logo concepts, identity elements, application mockups." },
    { step: "Refine", description: "Revision rounds, guidelines documentation, file preparation." },
    { step: "Deliver", description: "Master files, exports, printer handoff, web team coordination." },
    { step: "Apply", description: "Support rollout on website, social, and print as scoped." },
  ],
  portfolioSlugs: ["lamiya-alkhaleej", "abrar-caterers", "floriva-gifts"],
  faqs: buildPillarFaqs("Branding", [
    { question: "How many logo concepts do we receive?", answer: "Typically three distinct directions after discovery, followed by structured revision rounds on the chosen concept." },
    { question: "Do you design brands for restaurants?", answer: "Yes — menus, signage, social templates, and identity for food and catering brands including Mangalore clients." },
    { question: "Can branding be bundled with website development?", answer: "Yes — bundling reduces duplication and ensures the site matches your identity from launch." },
    { question: "Who owns the logo files?", answer: "You receive full ownership and source files upon final payment unless otherwise agreed in writing." },
  ]),
};
