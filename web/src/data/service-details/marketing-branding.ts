import type { ServiceDetailEnhancement } from "@/types";
import { buildPillarFaqs } from "@/lib/pillar-faqs";

export const MARKETING_DETAIL_ENHANCEMENTS: ServiceDetailEnhancement[] = [
  {
    categorySlug: "digital-marketing",
    serviceSlug: "local-seo",
    metaTitle: "Local SEO Services in Mangalore — Google Maps Rankings | E26 Media",
    metaDescription:
      "Local SEO company in Mangalore. Google Business Profile, citations, reviews, city rankings. Get found for 'near me' searches across Karnataka.",
    heroHighlight: "Local SEO",
    intro: [
      "When someone searches 'caterer near me' or 'web developer Mangalore', local SEO determines whether your business appears in Google Maps and the local pack — or whether competitors take the call.",
      "E26 Media provides local SEO for Karnataka service businesses: Google Business Profile optimisation, citation building, review strategy, location pages on your website, and NAP consistency across directories.",
      "We align local SEO with your website and ads — Abrar Caterers and similar clients benefit from visibility where footfall and phone enquiries matter.",
    ],
    sections: [
      {
        heading: "What local SEO includes",
        paragraphs: [
          "Google Business Profile — categories, services, photos, posts, Q&A, review responses. Local citations on India-relevant directories. Location and service-area pages on your site with unique content.",
          "Schema markup for LocalBusiness. Review acquisition ethics and response templates. Competitor local analysis in your city.",
        ],
      },
      {
        heading: "Local SEO for multiple Karnataka cities",
        paragraphs: [
          "Mangalore, Udupi, Bengaluru, Mysuru, Hubballi — each may need targeted pages and GBP service areas when you operate regionally.",
          "We avoid duplicate thin content — each location page adds genuine local proof and service detail.",
        ],
      },
      {
        heading: "Measuring local SEO success",
        paragraphs: [
          "Maps impressions, direction requests, calls from GBP, local keyword rankings, and form submissions attributed to local landing pages. Monthly reporting in plain language.",
        ],
      },
    ],
    pricingTiers: [
      {
        name: "GBP Starter",
        range: "₹15,000 – ₹25,000 / month",
        description: "Profile optimisation and basic citations.",
        includes: ["GBP setup", "Citations", "Monthly posts", "Review guidance"],
      },
      {
        name: "Local Growth",
        range: "₹25,000 – ₹45,000 / month",
        description: "Full local programme with location pages.",
        includes: ["On-page local SEO", "Content", "Link building", "Reporting"],
      },
      {
        name: "Multi-City",
        range: "₹45,000+ / month",
        description: "Several cities and competitive niches.",
        includes: ["City pages", "Advanced citations", "Strategy calls"],
      },
    ],
    deliverables: ["GBP optimisation", "Citation audit", "Location page recommendations", "Monthly ranking report", "Review playbook"],
    whyChoose: ["Karnataka local market knowledge", "Website + SEO together", "Transparent lead reporting", "Mangalore office"],
    portfolioSlugs: ["abrar-caterers", "brightleaf"],
    relatedSlugs: ["seo", "google-ads", "content-marketing"],
    faqs: buildPillarFaqs("Local SEO", [
      { question: "How long for Maps results?", answer: "GBP improvements can show in weeks; competitive map pack rankings often take 2–4 months with consistent effort." },
      { question: "Do I need a website for local SEO?", answer: "Yes — GBP and website reinforce each other; we fix both for best results." },
    ]),
  },
  {
    categorySlug: "digital-marketing",
    serviceSlug: "google-ads",
    metaTitle: "Google Ads Management in Mangalore — Search & Lead Campaigns | E26 Media",
    metaDescription:
      "Google Ads agency in Mangalore. High-intent search campaigns, landing pages, conversion tracking. Measurable leads for Karnataka businesses.",
    heroHighlight: "Google Ads",
    intro: [
      "Google Ads captures demand the moment someone searches for your service — 'ERP software Karnataka', 'website company Mangalore', 'catering services near me'. Done well, it delivers predictable leads; done poorly, it burns budget on irrelevant clicks.",
      "E26 Media manages search campaigns with dedicated landing pages, conversion tracking, and weekly optimisation. You retain account ownership and control of spend; we manage strategy and execution.",
      "We coordinate with our web team when landing page speed or message mismatch hurts quality score.",
    ],
    sections: [
      {
        heading: "Google Ads services we provide",
        paragraphs: [
          "Search campaigns on commercial keywords. Negative keyword discipline to reduce waste. Ad copy testing. Landing page alignment. Conversion tracking — calls, forms, WhatsApp. Remarketing to site visitors.",
          "Monthly reporting: spend, clicks, CPL, conversions, and recommendations.",
        ],
      },
      {
        heading: "Google Ads + SEO together",
        paragraphs: [
          "Ads for immediate leads while SEO builds long-term free traffic. Shared keyword intelligence between teams. Avoid sending paid traffic to slow or generic pages.",
        ],
      },
    ],
    pricingTiers: [
      {
        name: "Setup",
        range: "₹25,000 – ₹50,000 one-time",
        description: "Account structure, tracking, initial campaigns.",
        includes: ["Tracking audit", "Campaign build", "Landing page review"],
      },
      {
        name: "Management",
        range: "15–20% of ad spend / month",
        description: "Ongoing optimisation and reporting.",
        includes: ["Weekly tweaks", "Ad tests", "Monthly report", "Strategy call"],
      },
      {
        name: "Ads + Landing Pages",
        range: "Management + page build",
        description: "Campaign plus dedicated high-converting pages.",
        includes: ["Landing page", "Tracking", "Management"],
      },
    ],
    deliverables: ["Campaign structure", "Conversion tracking", "Ad copy", "Monthly ROI report", "Optimisation log"],
    whyChoose: ["Landing page team in-house", "Karnataka keyword experience", "Transparent spend reporting", "No long lock-in contracts"],
    portfolioSlugs: ["brightleaf", "abrar-caterers"],
    relatedSlugs: ["google-ads", "meta-ads", "seo"],
    faqs: buildPillarFaqs("Google Ads", [
      { question: "Minimum ad budget?", answer: "Depends on niche — we recommend realistic spend levels during audit so data accumulates fast enough to optimise." },
      { question: "Who owns the Google Ads account?", answer: "You do — we request access as managers; you control billing and spend caps." },
    ]),
  },
  {
    categorySlug: "digital-marketing",
    serviceSlug: "meta-ads",
    metaTitle: "Meta Ads (Facebook & Instagram) in Mangalore — E26 Media",
    metaDescription:
      "Meta Ads management in Mangalore. Facebook and Instagram campaigns for awareness, leads, and retargeting. Creative and targeting for Karnataka audiences.",
    heroHighlight: "Meta Ads",
    intro: [
      "Meta Ads reach audiences on Facebook and Instagram — powerful for brand awareness, visual products, local events, hospitality, and retargeting website visitors who did not convert.",
      "E26 Media creates campaign structure, audience targeting, ad creatives, and landing flows aligned to your goals. We report on reach, leads, and cost per result — not just impressions.",
      "Pair Meta Ads with strong landing pages and local SEO for full-funnel coverage.",
    ],
    sections: [
      {
        heading: "Meta campaign types we run",
        paragraphs: [
          "Lead generation forms and website conversion campaigns. Retargeting warm audiences. Lookalike audiences from customer lists. Seasonal promotions for retail and hospitality.",
          "Creative testing — image, video, carousel — with brand-aligned assets from our design team when needed.",
        ],
      },
      {
        heading: "Meta Ads for Karnataka markets",
        paragraphs: [
          "Geo-target Mangalore, coastal Karnataka, or statewide. Language and creative tuned for local resonance. WhatsApp follow-up integration for lead nurture.",
        ],
      },
    ],
    pricingTiers: [
      {
        name: "Setup",
        range: "₹20,000 – ₹40,000",
        description: "Pixel, audiences, initial campaigns.",
        includes: ["Pixel install", "Campaign build", "Creative guidance"],
      },
      {
        name: "Management",
        range: "15–20% of spend / month",
        description: "Ongoing optimisation.",
        includes: ["Creative tests", "Audience refine", "Reporting"],
      },
      {
        name: "Creative + Ads",
        range: "Custom",
        description: "Ad design production included.",
        includes: ["Creatives", "Campaigns", "Landing support"],
      },
    ],
    deliverables: ["Meta pixel setup", "Campaign structure", "Ad creatives", "Monthly performance report"],
    whyChoose: ["Creative team available", "Retargeting expertise", "WhatsApp nurture alignment", "Mangalore-based"],
    portfolioSlugs: ["brightleaf", "floriva-gifts"],
    relatedSlugs: ["google-ads", "social-media-marketing", "local-seo"],
    faqs: buildPillarFaqs("Meta Ads", [
      { question: "Facebook Ads vs Google Ads?", answer: "Google captures active search intent; Meta builds awareness and retargets — most businesses benefit from both with clear roles." },
    ]),
  },
];

export const BRANDING_DETAIL_ENHANCEMENTS: ServiceDetailEnhancement[] = [
  {
    categorySlug: "branding",
    serviceSlug: "logo-design",
    metaTitle: "Logo Design Company in Mangalore — Professional Brand Marks | E26 Media",
    metaDescription:
      "Logo design in Mangalore. Memorable brand marks for startups, restaurants, corporates. Vector files, revisions, brand-ready exports. E26 Media.",
    heroHighlight: "Logo Design",
    intro: [
      "Your logo is the shortest summary of your brand — it must work on a favicon, shop sign, app icon, and embroidered uniform. Amateur marks undermine premium positioning before you speak a word.",
      "E26 Media designs logos through structured discovery — positioning, audience, competitors, personality — then concept rounds and refinement to a final vector mark with full file exports.",
      "Many clients pair logo design with website development for a cohesive launch.",
    ],
    sections: [
      {
        heading: "Our logo design process",
        paragraphs: [
          "Brief and mood direction. Three concept directions. Refinement on chosen direction. Final logo in AI, SVG, PNG, PDF — colour and monochrome versions. Basic usage guidance.",
        ],
      },
      {
        heading: "Logo design for Karnataka businesses",
        paragraphs: [
          "Restaurants and caterers — appetite appeal and cultural sensitivity. Corporates — restraint and scalability. Startups — distinctive marks that trademark more easily.",
        ],
      },
    ],
    pricingTiers: [
      {
        name: "Logo Only",
        range: "₹25,000 – ₹50,000",
        description: "Concepts, revisions, final files.",
        includes: ["3 concepts", "2 revision rounds", "Vector exports"],
      },
      {
        name: "Logo + Stationery",
        range: "₹50,000 – ₹90,000",
        description: "Logo plus business card and letterhead.",
        includes: ["Logo package", "Stationery", "Social avatar"],
      },
      {
        name: "Full Identity",
        range: "₹90,000 – ₹1,50,000",
        description: "Logo, colours, type, mini guidelines.",
        includes: ["Identity system", "Guidelines PDF", "Templates"],
      },
    ],
    deliverables: ["Logo concepts", "Final vector files", "Colour specs", "Usage guide", "Source files"],
    whyChoose: ["Integrated with web launch", "Structured revision process", "Mangalore studio", "Full ownership"],
    portfolioSlugs: ["lamiya-alkhaleej", "abrar-caterers", "alfiya"],
    relatedSlugs: ["brand-identity", "brand-guidelines"],
    faqs: buildPillarFaqs("Logo Design", [
      { question: "How many concepts do we get?", answer: "Three distinct directions after discovery, then structured refinement on your chosen path." },
      { question: "Do you design logos for restaurants?", answer: "Yes — including catering and F&B brands in Mangalore and Karnataka." },
    ]),
  },
  {
    categorySlug: "branding",
    serviceSlug: "brand-identity",
    metaTitle: "Brand Identity Design in Mangalore — Complete Visual Systems | E26 Media",
    metaDescription:
      "Brand identity design in Mangalore. Logo, colour, typography, guidelines, and creative systems for consistent brand presence across web, print, and social.",
    heroHighlight: "Brand Identity",
    intro: [
      "Brand identity is more than a logo — it is the complete visual system: colour palette, typography, imagery style, iconography, and rules that keep every touchpoint consistent.",
      "E26 Media delivers identity systems for startups launching in Karnataka, restaurants refreshing their look, and corporates aligning web, print, and social after growth or merger.",
      "Identity projects include brand guidelines PDF so your team and partners execute correctly without drift.",
    ],
    sections: [
      {
        heading: "What a brand identity system includes",
        paragraphs: [
          "Primary and secondary logos, colour palette with CMYK/RGB/hex, typography pairing, icon style, photography direction, stationery templates, social media templates, and brand voice summary where scoped.",
        ],
      },
      {
        heading: "Identity before website launch",
        paragraphs: [
          "We recommend completing identity before major website redesigns — design once, deploy across web, ads, and print without rework.",
          "Our development team receives brand files directly for pixel-accurate web implementation.",
        ],
      },
    ],
    pricingTiers: [
      {
        name: "Identity Core",
        range: "₹60,000 – ₹1,20,000",
        description: "Logo, colours, type, basic templates.",
        includes: ["Logo", "Palette", "Type", "Social kit"],
      },
      {
        name: "Identity Plus",
        range: "₹1,20,000 – ₹2,00,000",
        description: "Full guidelines and stationery suite.",
        includes: ["Guidelines PDF", "Stationery", "Presentations", "Signage direction"],
      },
      {
        name: "Rebrand Programme",
        range: "₹2,00,000+",
        description: "Workshop, packaging, campaign launch support.",
        includes: ["Strategy workshop", "Rollout plan", "Web coordination"],
      },
    ],
    deliverables: ["Logo system", "Brand guidelines", "Template files", "Colour and type specs", "Partner handoff pack"],
    whyChoose: ["Web + brand one team", "Guidelines that teams actually use", "Mangalore-based", "Export-ready assets"],
    portfolioSlugs: ["lamiya-alkhaleej", "floriva-gifts", "abrar-caterers"],
    relatedSlugs: ["logo-design", "brand-guidelines", "social-media-creatives"],
    faqs: buildPillarFaqs("Brand Identity", [
      { question: "Brand identity vs logo only?", answer: "Logo is one asset; identity is the full system ensuring consistency everywhere your brand appears." },
      { question: "Can you rebrand an existing business?", answer: "Yes — phased rollout plans minimise disruption to signs, uniforms, and digital assets." },
    ]),
  },
];
