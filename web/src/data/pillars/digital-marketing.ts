import type { ServicePillar } from "@/types";
import { buildPillarFaqs } from "@/lib/pillar-faqs";

export const DIGITAL_MARKETING_PILLAR: ServicePillar = {
  slug: "digital-marketing",
  metaTitle: "Digital Marketing Agency in Mangalore — SEO, Google Ads & Growth | E26 Media",
  metaDescription:
    "Data-driven digital marketing in Mangalore: SEO, local SEO, Google Ads, Meta Ads, content, and conversion optimisation. Measurable leads for Karnataka businesses.",
  hero: {
    badge: "Digital Marketing",
    title: "Digital marketing tied to leads and revenue — not vanity metrics",
    highlight: "leads and revenue",
    description:
      "SEO, paid search, social ads, and conversion optimisation for businesses that need predictable enquiry flow across Karnataka.",
  },
  intro: [
    "Traffic without conversions is wasted spend. E26 Media delivers digital marketing programmes anchored to measurable outcomes — calls, form submissions, WhatsApp enquiries, store visits, and revenue where trackable.",
    "We combine technical SEO, local SEO for Mangalore and Karnataka cities, Google Ads for high-intent keywords, Meta Ads for awareness and retargeting, and landing page optimisation so ad spend lands on pages built to convert.",
    "Clients including BrightLeaf and Abrar Caterers trust us for visibility and enquiry growth. We report in plain language — what moved, what it cost, and what we recommend next month.",
  ],
  sections: [
    {
      heading: "Digital marketing services we deliver",
      paragraphs: [
        "Search engine optimisation (SEO) — technical audits, on-page optimisation, content strategy, internal linking, and authority building for commercial keywords.",
        "Local SEO — Google Business Profile optimisation, local citations, review strategy, and location landing pages for city-specific rankings.",
        "Google Ads — search campaigns for high-intent queries like 'website development company Mangalore' and service-specific terms.",
        "Meta Ads — Facebook and Instagram campaigns for awareness, lead forms, and retargeting website visitors.",
        "Social media marketing — organic content calendars, creative production, and community management.",
        "Content marketing — articles, guides, and landing pages that build topical authority (supporting your commercial service pages).",
        "Email marketing — nurture sequences, newsletters, and retention campaigns.",
        "Conversion rate optimisation — A/B tests, funnel analysis, and landing page improvements.",
      ],
    },
    {
      heading: "Our marketing methodology",
      paragraphs: [
        "Audit first — analytics, Search Console, site speed, competitor visibility, and current lead sources. Strategy follows data, not assumptions.",
        "We align campaigns to your sales capacity — flooding leads you cannot answer hurts reviews and conversion. Monthly reporting covers spend, CPL, rankings, and recommendations.",
        "Marketing works best with a fast, trustworthy website. We coordinate with our development team when technical fixes unblock SEO or ad quality scores.",
      ],
    },
    {
      heading: "Who benefits most from our marketing services",
      paragraphs: [
        "Local service businesses — caterers, clinics, hotels, real estate, contractors — competing for Google Maps and 'near me' searches.",
        "B2B and corporate — long-cycle leads requiring content authority and retargeting.",
        "Ecommerce — product feeds, shopping campaigns, and checkout optimisation.",
      ],
    },
    {
      heading: "Digital marketing pricing",
      paragraphs: [
        "SEO retainers typically start from monthly five-figure INR depending on competition and content volume. Google and Meta ad management is quoted as management fee plus media spend you control.",
        "We define KPIs and reporting cadence in the proposal — no black-box monthly invoices.",
      ],
    },
  ],
  pricingTiers: [
    {
      name: "Local SEO Starter",
      range: "₹15,000 – ₹35,000 / month",
      description: "GBP optimisation, citations, on-page fixes, monthly reporting.",
      includes: ["Audit", "On-page SEO", "GBP management", "Review strategy", "Monthly report"],
    },
    {
      name: "Growth SEO + Content",
      range: "₹35,000 – ₹80,000 / month",
      description: "Ongoing SEO, content production, link building, technical fixes.",
      includes: ["Keyword strategy", "Content calendar", "Technical SEO", "Analytics", "Strategy calls"],
    },
    {
      name: "Paid Media Management",
      range: "Management fee + ad spend",
      description: "Google Ads and/or Meta Ads with landing page optimisation.",
      includes: ["Campaign setup", "Conversion tracking", "A/B tests", "Weekly optimisations", "ROI reporting"],
    },
  ],
  deliverables: [
    "Marketing audit and strategy document",
    "Keyword and competitor research",
    "Analytics and conversion tracking setup",
    "Monthly performance reports",
    "Campaign creatives and ad copy",
    "SEO content and on-page implementations",
    "Quarterly strategy review",
  ],
  whyChoose: [
    "Development + marketing under one roof",
    "Local Karnataka expertise — Maps, citations, regional search behaviour",
    "Transparent reporting on leads and cost per lead",
    "Portfolio clients with measurable visibility outcomes",
    "Landing pages built for conversion, not generic templates",
    "Mangalore team available for in-person strategy sessions",
  ],
  process: [
    { step: "Audit", description: "Analytics, SEO technical review, competitor landscape, lead tracking check." },
    { step: "Strategy", description: "Channel mix, budget allocation, KPIs, content and campaign plan." },
    { step: "Execute", description: "On-page SEO, campaigns live, content published, tracking verified." },
    { step: "Measure", description: "Monthly reporting on rankings, traffic, leads, and spend efficiency." },
    { step: "Optimise", description: "Double down on winners, cut losers, test new creatives and pages." },
    { step: "Scale", description: "Expand keywords, cities, and budgets when unit economics work." },
  ],
  portfolioSlugs: ["brightleaf", "abrar-caterers"],
  faqs: buildPillarFaqs("Digital Marketing", [
    { question: "How long until SEO results appear?", answer: "Technical improvements can show in weeks; competitive rankings often take 3–6+ months depending on niche and content investment." },
    { question: "Do you manage Google Ads spend?", answer: "You retain control of ad accounts and spend; we manage strategy, setup, and optimisation with full transparency." },
    { question: "Can you market my business only on Instagram?", answer: "Yes — though we recommend aligning social with website conversion paths and tracking." },
    { question: "Do you guarantee #1 rankings?", answer: "No ethical agency guarantees rankings. We guarantee process, reporting, and best-practice execution." },
  ]),
};

export const SEO_SERVICES_PILLAR: ServicePillar = {
  slug: "seo",
  categorySlug: "digital-marketing",
  metaTitle: "SEO Company in Mangalore & Karnataka — Technical & Local SEO | E26 Media",
  metaDescription:
    "Professional SEO services in Mangalore: technical SEO, local SEO, content strategy, and Google rankings for Karnataka businesses. Free SEO audit consultation.",
  hero: {
    badge: "SEO Services",
    title: "SEO services that put your business on Google’s first page",
    highlight: "first page",
    description:
      "Technical SEO, local SEO, and content strategy for Mangalore, Bengaluru, Udupi, and businesses competing across Karnataka.",
  },
  intro: [
    "When someone searches 'caterers in Mangalore', 'software company near me', or 'website developer Karnataka', your business either appears — or your competitor wins the click. SEO is the long-term engine for that visibility.",
    "E26 Media provides SEO as part of website builds and as ongoing retainers: technical foundations, on-page optimisation, local SEO, content programmes, and reporting tied to enquiries — not just traffic graphs.",
    "We practice what we preach — our own site architecture, location pages, service depth, and performance standards reflect how we approach client SEO.",
  ],
  sections: [
    {
      heading: "What our SEO services include",
      paragraphs: [
        "Technical SEO — crawlability, site speed, mobile usability, HTTPS, structured data, XML sitemaps, canonical tags, and indexation fixes.",
        "On-page SEO — title tags, meta descriptions, heading structure, internal linking, image alt text, and commercial page depth.",
        "Local SEO — Google Business Profile optimisation, NAP consistency, local citations, review acquisition strategy, and geo-targeted landing pages.",
        "Content SEO — keyword research, service and blog content, FAQ expansion, and topical authority clusters linking to commercial pages.",
        "Off-page SEO — ethical link building, digital PR, and partnership placements where relevant.",
      ],
    },
    {
      heading: "SEO for Karnataka local businesses",
      paragraphs: [
        "Local search blends Maps, organic results, and reviews. We optimise all three — not just meta tags on your homepage. City pages for Mangalore, Bengaluru, Udupi, Mysuru, and Hubballi support regional visibility.",
        "Industries we rank include hospitality, healthcare, education, real estate, retail, professional services, and technology — each with different keyword intent and content needs.",
      ],
    },
    {
      heading: "SEO pricing and retainers",
      paragraphs: [
        "One-time technical SEO audits and fixes can be scoped as projects. Ongoing SEO retainers include monthly content, link building, reporting, and strategy calls — typically starting from ₹15,000–₹80,000/month depending on competition and deliverables.",
        "SEO pairs best with a fast, well-structured website. If your site has fundamental issues, we address them first or alongside content work.",
      ],
    },
    {
      heading: "How SEO connects to your sales funnel",
      paragraphs: [
        "Rankings matter when they drive calls and forms. We configure GA4, Search Console, call tracking, and conversion events so you see which keywords produce revenue.",
        "Commercial service pages are the conversion hub — educational content from your future Knowledge Center should link back to these pages, building authority that converts.",
      ],
    },
  ],
  pricingTiers: [
    {
      name: "SEO Audit & Fix",
      range: "₹25,000 – ₹75,000 one-time",
      description: "Technical audit and critical fixes on existing site.",
      includes: ["Crawl audit", "Speed fixes", "On-page templates", "Search Console setup", "Priority roadmap"],
    },
    {
      name: "Local SEO Retainer",
      range: "₹15,000 – ₹35,000 / month",
      description: "GBP, citations, local pages, reviews, monthly reporting.",
      includes: ["GBP optimisation", "Citation building", "Review strategy", "Local content", "Monthly report"],
    },
    {
      name: "Full SEO Programme",
      range: "₹35,000 – ₹80,000+ / month",
      description: "Technical + content + links for competitive keywords.",
      includes: ["Content production", "Link building", "Technical monitoring", "Strategy calls", "Lead reporting"],
    },
  ],
  deliverables: [
    "SEO audit with prioritised action list",
    "Keyword and competitor research",
    "On-page optimisation across target pages",
    "Google Search Console and Analytics setup",
    "Local SEO implementation (where applicable)",
    "Monthly ranking and lead reports",
    "Quarterly content and link roadmap",
  ],
  whyChoose: [
    "SEO built into our website development standard",
    "Local Karnataka focus — Maps, cities, regional behaviour",
    "Commercial page strategy — not just blog traffic",
    "Transparent reporting on leads, not vanity metrics",
    "In-house dev team to fix technical blockers fast",
    "Mangalore office for face-to-face SEO consultations",
  ],
  process: [
    { step: "Audit", description: "Technical crawl, speed, indexation, competitor SERP review." },
    { step: "Strategy", description: "Keyword map, page assignments, local vs national priorities." },
    { step: "Fix", description: "Technical and on-page implementations on commercial pages first." },
    { step: "Content", description: "Service depth, FAQs, supporting articles linking to money pages." },
    { step: "Authority", description: "Ethical links, citations, reviews, digital PR where fit." },
    { step: "Report", description: "Monthly rankings, traffic, conversions, and next actions." },
  ],
  portfolioSlugs: ["brightleaf", "abrar-caterers", "lamiya-alkhaleej"],
  faqs: buildPillarFaqs("SEO Services", [
    { question: "What is local SEO?", answer: "Optimisation for geographic searches — Google Maps, 'near me', and city keywords — via GBP, citations, reviews, and location content." },
    { question: "Do I need SEO if I run Google Ads?", answer: "Yes — SEO reduces long-term acquisition cost while ads capture immediate demand; together they dominate SERP real estate." },
    { question: "Can you SEO my WordPress site?", answer: "Yes — technical, on-page, and content SEO for WordPress and custom builds." },
    { question: "How many keywords can you target?", answer: "We prioritise commercial intent keywords that drive leads — quality over hundreds of irrelevant terms." },
  ]),
};
