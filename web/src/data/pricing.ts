import type { FAQ } from "@/types";

export type PricingCategory = {
  slug: string;
  title: string;
  href: string;
  summary: string;
  tiers: {
    name: string;
    range: string;
    description: string;
    includes: string[];
  }[];
};

export const PRICING_INTRO = [
  "Transparent pricing is rare in Indian technology services — and for good reason. Every project has different scope, integrations, content readiness, and timeline pressure. What we can promise is honest bands, fixed quotes after discovery, and no surprise invoices mid-project.",
  "E26 Media publishes these ranges so you can budget before our consultation call. Exact quotes follow a free discovery session where we map requirements, review your existing assets, and align on milestones. Most clients receive a written proposal within 24 business hours.",
  "All prices are in Indian Rupees (INR) unless noted. GST applies as per Indian tax law. International clients may be quoted in USD for software and AI projects — we discuss currency and payment terms during scoping.",
];

export const PRICING_SECTIONS = [
  {
    heading: "How our quoting process works",
    paragraphs: [
      "Step one is a consultation — in person at our Kanakanady office, over video, or by phone. We ask about your business goals, audience, existing systems, and deadline. For websites and marketing, we review competitors and search intent. For software and apps, we document workflows and integration points.",
      "Step two is a written scope document: deliverables, timeline, assumptions, and a fixed price or milestone-based payment schedule. We do not charge for this scoping on standard projects under ₹10 lakh. Larger enterprise engagements may include a paid discovery phase credited against development.",
      "Step three is a staging demo cadence — you see progress weekly or bi-weekly, provide feedback, and approve before launch. Payment is typically 40% at kickoff, 40% at beta, and 20% at go-live for fixed-scope projects. Retainers are billed monthly in advance.",
    ],
  },
  {
    heading: "What affects your final price",
    paragraphs: [
      "Page count and content complexity drive website costs. Custom illustrations, multilingual content, and third-party API integrations add engineering time. Software projects scale with user roles, reporting depth, and compliance requirements (healthcare, finance).",
      "Marketing retainers depend on ad spend management, content volume, and number of channels. AI projects vary with model choice, training data preparation, and whether you need on-premise deployment versus cloud APIs.",
      "Timeline compression costs more — we can accelerate with additional resources when deadlines are non-negotiable. Content creation (copywriting, photography, video) is quoted separately unless bundled in your package.",
    ],
  },
  {
    heading: "Maintenance, support, and growth packages",
    paragraphs: [
      "Websites: ₹8,000–₹25,000/month for security updates, backups, minor content changes, and uptime monitoring. Software: ₹15,000–₹75,000/month depending on SLA, bug-fix windows, and enhancement hours included.",
      "Digital marketing retainers start at ₹25,000/month for local SEO and GBP management; full-funnel programmes with paid media typically run ₹50,000–₹2,00,000/month plus ad spend. Branding retainers for ongoing creative assets are scoped per deliverable volume.",
      "All maintenance clients get priority support via WhatsApp and email. Emergency fixes for production outages are handled within agreed SLA windows — critical for ecommerce, healthcare booking, and operational software.",
    ],
  },
];

export const PRICING_CATEGORIES: PricingCategory[] = [
  {
    slug: "website-development",
    title: "Website Development",
    href: "/services/website-development",
    summary: "Corporate, business, landing pages, ecommerce, and industry-specific sites.",
    tiers: [
      {
        name: "Essential",
        range: "₹60,000 – ₹1,20,000",
        description: "Focused scope — up to 8 pages, mobile-first, SEO foundation.",
        includes: ["Custom responsive design", "Contact & WhatsApp CTAs", "Technical SEO setup", "Google Analytics", "30-day post-launch support"],
      },
      {
        name: "Professional",
        range: "₹1,20,000 – ₹3,50,000",
        description: "Full business or corporate site with CMS, blog, and integrations.",
        includes: ["Custom UI/UX", "CMS or Next.js", "Blog & case study templates", "Schema markup", "Team training"],
      },
      {
        name: "Enterprise",
        range: "₹3,50,000+",
        description: "Multi-language, advanced integrations, compliance-heavy builds.",
        includes: ["Stakeholder workshops", "API integrations", "Role-based admin", "Performance SLA", "Dedicated project manager"],
      },
    ],
  },
  {
    slug: "software-development",
    title: "Software Development",
    href: "/services/software-development",
    summary: "ERP, CRM, inventory, billing, hospital systems, and custom business software.",
    tiers: [
      {
        name: "MVP / Module",
        range: "₹2,50,000 – ₹8,00,000",
        description: "Single-module or MVP with core workflows and one integration.",
        includes: ["Requirements document", "Admin dashboard", "User roles", "Deployment", "30-day warranty"],
      },
      {
        name: "Full Platform",
        range: "₹8,00,000 – ₹25,00,000",
        description: "Multi-module systems — ERP, CRM, or vertical-specific platforms.",
        includes: ["Discovery & SRS", "Custom modules", "Reporting", "API layer", "Training & documentation"],
      },
      {
        name: "Enterprise",
        range: "₹25,00,000+",
        description: "Large-scale deployments with compliance, multi-branch, and integrations.",
        includes: ["Phased rollout", "Legacy migration", "SLA support", "Dedicated team", "Ongoing enhancement sprints"],
      },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    href: "/services/mobile-app-development",
    summary: "Android, iOS, Flutter, and React Native applications.",
    tiers: [
      {
        name: "Single Platform",
        range: "₹3,00,000 – ₹8,00,000",
        description: "Android or iOS app with backend API and admin panel.",
        includes: ["UI/UX design", "Native or cross-platform build", "API development", "Play Store / App Store submission", "30-day support"],
      },
      {
        name: "Cross-Platform",
        range: "₹6,00,000 – ₹15,00,000",
        description: "Flutter or React Native for iOS + Android from one codebase.",
        includes: ["Shared codebase", "Push notifications", "Payment integration", "Analytics", "Store optimization"],
      },
      {
        name: "Complex App",
        range: "₹15,00,000+",
        description: "Real-time features, offline sync, multi-role, or marketplace models.",
        includes: ["Architecture planning", "Scalable backend", "Third-party integrations", "Performance testing", "Long-term roadmap"],
      },
    ],
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    href: "/services/ai-solutions",
    summary: "Chatbots, automation, document processing, and workflow AI.",
    tiers: [
      {
        name: "Starter Bot",
        range: "₹75,000 – ₹2,50,000",
        description: "Website or WhatsApp chatbot with FAQ and lead capture.",
        includes: ["Conversation design", "Knowledge base setup", "WhatsApp or web widget", "Analytics", "30-day tuning"],
      },
      {
        name: "Business Automation",
        range: "₹2,50,000 – ₹8,00,000",
        description: "AI integrated into workflows — support, documents, or internal tools.",
        includes: ["Process mapping", "Model selection", "API integrations", "Human handoff flows", "Training"],
      },
      {
        name: "Custom AI Platform",
        range: "₹8,00,000+",
        description: "Multi-agent systems, RAG pipelines, or industry-specific AI products.",
        includes: ["Data pipeline design", "Custom training/fine-tuning", "Security review", "Monitoring", "Ongoing optimization"],
      },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    summary: "SEO, local SEO, Google Ads, Meta Ads, content, and conversion optimization.",
    tiers: [
      {
        name: "Local SEO",
        range: "₹25,000 – ₹50,000/mo",
        description: "Google Business Profile, local citations, on-page SEO.",
        includes: ["GBP optimization", "Monthly reporting", "Review strategy", "Local landing pages", "Keyword tracking"],
      },
      {
        name: "Growth Retainer",
        range: "₹50,000 – ₹1,50,000/mo",
        description: "SEO + content + one paid channel with conversion tracking.",
        includes: ["Technical SEO audits", "Content calendar", "Ad management", "Landing page CRO", "Bi-weekly calls"],
      },
      {
        name: "Full Funnel",
        range: "₹1,50,000+/mo",
        description: "Multi-channel programmes for competitive markets.",
        includes: ["Strategy workshops", "Multi-channel ads", "Content production", "Attribution setup", "Dedicated account manager"],
      },
    ],
  },
  {
    slug: "branding",
    title: "Branding & Creative",
    href: "/services/branding",
    summary: "Logo, brand identity, guidelines, packaging, and creative assets.",
    tiers: [
      {
        name: "Logo Package",
        range: "₹25,000 – ₹75,000",
        description: "Logo concepts, revisions, and export files.",
        includes: ["3–5 concepts", "2 revision rounds", "Vector & raster files", "Basic usage guide"],
      },
      {
        name: "Brand Identity",
        range: "₹75,000 – ₹2,50,000",
        description: "Full visual identity — colour, typography, stationery, social templates.",
        includes: ["Brand strategy session", "Logo system", "Colour & type palette", "Stationery mockups", "Social media kit"],
      },
      {
        name: "Complete Brand System",
        range: "₹2,50,000+",
        description: "Guidelines, packaging, presentations, and ongoing creative support.",
        includes: ["Brand guidelines document", "Packaging design", "Pitch deck template", "Photography direction", "Creative retainer options"],
      },
    ],
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    href: "/services/cloud-solutions",
    summary: "Migration, hosting, AWS/Azure/GCP, backup, and managed infrastructure.",
    tiers: [
      {
        name: "Migration Audit",
        range: "₹50,000 – ₹1,50,000",
        description: "Assessment and migration roadmap for existing workloads.",
        includes: ["Infrastructure audit", "Cost analysis", "Migration plan", "Risk assessment"],
      },
      {
        name: "Migration + Setup",
        range: "₹1,50,000 – ₹6,00,000",
        description: "Execute migration with monitoring and backup configuration.",
        includes: ["Cloud architecture", "Migration execution", "SSL & DNS", "Backup automation", "30-day hypercare"],
      },
      {
        name: "Managed Cloud",
        range: "₹25,000 – ₹1,00,000/mo",
        description: "Ongoing hosting, patching, scaling, and incident response.",
        includes: ["24/7 monitoring", "Security patches", "Scaling policies", "Monthly reports", "SLA-backed uptime"],
      },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    href: "/services/ui-ux-design",
    summary: "Website UI, app UI, wireframes, prototypes, and design systems.",
    tiers: [
      {
        name: "Single Screen / Page",
        range: "₹15,000 – ₹40,000",
        description: "High-fidelity design for one key page or app screen.",
        includes: ["Wireframe", "Visual design", "Mobile + desktop", "Figma handoff"],
      },
      {
        name: "Full Product UI",
        range: "₹1,00,000 – ₹4,00,000",
        description: "Complete web or mobile app interface design.",
        includes: ["User flows", "Wireframes", "UI kit", "Prototype", "Developer handoff"],
      },
      {
        name: "Design System",
        range: "₹4,00,000+",
        description: "Scalable component library for product teams.",
        includes: ["Audit & research", "Component library", "Documentation", "Accessibility standards", "Ongoing design support"],
      },
    ],
  },
];

export const PRICING_FAQS: FAQ[] = [
  {
    question: "Are these prices fixed or estimates?",
    answer:
      "These are realistic budget bands based on projects we have delivered in Mangalore and across Karnataka. Your exact quote is fixed after discovery — we document scope, assumptions, and milestones before you commit.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes. Standard projects use milestone billing: typically 40% at kickoff, 40% at beta/demo approval, and 20% at launch. Larger software engagements can be structured across monthly sprints. We discuss payment terms in your proposal.",
  },
  {
    question: "Is GST included in the listed ranges?",
    answer:
      "Listed ranges are exclusive of GST unless stated otherwise. We issue proper tax invoices as E26 Media Private Limited. International clients may receive quotes in USD with wire transfer options.",
  },
  {
    question: "Can I start small and expand later?",
    answer:
      "Absolutely. Many clients begin with an MVP website or single-module software and add features in phased sprints. We architect for growth so early decisions do not block later expansion.",
  },
  {
    question: "What is included in free consultation?",
    answer:
      "A 30–45 minute call or meeting to understand your goals, review competitors or existing systems, recommend an approach, and provide a ballpark range. Written proposals with detailed scope follow within 24 business hours for standard enquiries.",
  },
  {
    question: "Do you compete on price with freelancers?",
    answer:
      "We are not the cheapest option — we are the reliable one. You get a registered company, verifiable portfolio, structured delivery, and post-launch support. For brochure sites with no support needs, freelancers may suffice. For business-critical systems, the cost of failure exceeds our fee difference.",
  },
  {
    question: "How do retainers work for marketing?",
    answer:
      "Marketing retainers are monthly and billed in advance. They include agreed deliverables — SEO work, content pieces, ad management hours, and reporting. Ad spend (Google/Meta) is separate and paid directly to platforms or managed with transparent billing.",
  },
  {
    question: "Do you provide hosting and domain costs?",
    answer:
      "Domain registration and cloud hosting are typically billed separately or passed through at cost. We recommend Vercel, AWS, or similar based on your stack. Annual hosting for a business website is usually ₹5,000–₹25,000 depending on traffic and storage.",
  },
];
