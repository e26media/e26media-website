import type { ServicePillar } from "@/types";
import { buildPillarFaqs } from "@/lib/pillar-faqs";

export const AI_SOLUTIONS_PILLAR: ServicePillar = {
  slug: "ai-solutions",
  metaTitle: "AI Solutions Company in Mangalore — Chatbots, Automation & AI Assistants | E26 Media",
  metaDescription:
    "Practical AI for Karnataka businesses: chatbots, WhatsApp AI, workflow automation, document processing. ROI-focused AI from E26 Media Mangalore. Live projects including Floriva chatbots.",
  hero: {
    badge: "AI Solutions",
    title: "AI that saves time and answers customers — not hype",
    highlight: "saves time",
    description:
      "Intelligent chatbots, assistants, and workflow automation with clear ROI — deployed for real businesses in Mangalore and beyond.",
  },
  intro: [
    "Artificial intelligence delivers value when it solves repetitive problems — answering the same customer questions, routing enquiries, extracting data from documents, and freeing staff for higher-value work. E26 Media implements practical AI with defined boundaries, human escalation, and measurable outcomes.",
    "We have built and deployed AI chatbots for Floriva Gifts and internal E26 projects — WhatsApp flows, website assistants, and IVR integrations. Our approach starts with ROI: which tasks cost you the most manual hours? What would deflection of 30% of support queries be worth monthly?",
    "Based in Mangalore, we serve Karnataka SMEs and international clients who need AI connected to real business tools — not disconnected demos.",
  ],
  sections: [
    {
      heading: "AI solutions we implement for businesses",
      paragraphs: [
        "Customer-facing AI chatbots — website widgets and WhatsApp bots that answer FAQs, capture leads, qualify enquiries, and hand off to humans when needed.",
        "Internal AI assistants — staff tools for summarising documents, drafting responses, searching knowledge bases, and accelerating operations work.",
        "Workflow automation — connect AI to CRM, sheets, email, and ticketing so actions happen automatically after classification or extraction.",
        "AI customer support flows — 24/7 first-line support with sentiment awareness and escalation rules for complex cases.",
        "Document processing — extract fields from invoices, forms, and PDFs into your systems with human review queues for accuracy.",
      ],
    },
    {
      heading: "How we deliver AI projects responsibly",
      paragraphs: [
        "We define scope narrowly for phase one — e.g. top 20 customer questions — and expand after measuring deflection rate and satisfaction. Every bot has fallback to human contact and clear disclosure where appropriate.",
        "Data handling follows your privacy requirements. We document what is sent to model providers, retention policies, and access controls. No shadow IT deployments.",
        "Integration is core: AI must connect to WhatsApp Business API, your website, CRM, or helpdesk — not sit in isolation. We build Node.js backends, webhooks, and admin dashboards for monitoring conversations.",
      ],
    },
    {
      heading: "Technologies and platforms",
      paragraphs: [
        "OpenAI and compatible APIs, LangChain-style orchestration, vector search for knowledge bases, WhatsApp Business API, Node.js backends, and analytics dashboards tracking deflection, resolution, and lead capture.",
        "We recommend models and architecture based on volume, latency, language needs (English, Arabic, Kannada content support where required), and budget — not the latest headline model for every use case.",
      ],
    },
    {
      heading: "AI pricing and engagement models",
      paragraphs: [
        "Pilot chatbot projects often start from focused five-figure INR investments covering discovery, knowledge base setup, deployment, and 30-day tuning. Larger automation programmes scale with integrations and compliance requirements.",
        "Ongoing costs include API usage, hosting, and optional monitoring retainers. We forecast monthly operating costs before you commit.",
      ],
    },
    {
      heading: "Proof from our portfolio",
      paragraphs: [
        "Floriva Gifts AI chatbot and WhatsApp bot — customer enquiry automation for an international ecommerce brand. E26 website chatbot and IVR calling — internal production systems demonstrating our capability to ship AI, not just pitch it.",
        "Ask for a demo during consultation — we show working systems, not slideware.",
      ],
    },
  ],
  pricingTiers: [
    {
      name: "AI Pilot / Chatbot",
      range: "₹75,000 – ₹3,00,000",
      description: "Website or WhatsApp bot for defined FAQ set and lead capture.",
      includes: ["Knowledge base setup", "Deployment", "Human handoff rules", "30-day tuning", "Usage analytics"],
    },
    {
      name: "Automation Programme",
      range: "₹3,00,000 – ₹12,00,000",
      description: "Multi-step workflows, integrations, document processing, admin dashboards.",
      includes: ["Process mapping", "API integrations", "Monitoring", "Staff training", "Documentation"],
    },
    {
      name: "Enterprise AI",
      range: "Custom",
      description: "High volume, compliance, multi-channel, custom models and SLAs.",
      includes: ["Architecture review", "Security audit", "SLA options", "Dedicated support"],
    },
  ],
  deliverables: [
    "Use case definition and ROI estimate",
    "Trained knowledge base and conversation flows",
    "Production deployment on web and/or WhatsApp",
    "Admin dashboard for conversation review",
    "Human escalation and fallback paths",
    "Analytics on deflection and lead capture",
    "Documentation and handover training",
  ],
  whyChoose: [
    "Live AI projects in portfolio — Floriva, E26 internal tools",
    "ROI-first scoping — no AI for AI's sake",
    "WhatsApp and website integration expertise",
    "Mangalore team with international client delivery",
    "Clear operating cost forecasts before launch",
    "Human handoff and monitoring built in",
  ],
  process: [
    { step: "Discover", description: "Map repetitive enquiries, volume, languages, and integration points." },
    { step: "Design", description: "Conversation flows, escalation rules, knowledge base structure, success metrics." },
    { step: "Build", description: "Backend, model integration, WhatsApp/web channels, staging tests." },
    { step: "Tune", description: "Live pilot with staff review, FAQ expansion, accuracy improvements." },
    { step: "Launch", description: "Production rollout, monitoring, and staff training." },
    { step: "Optimise", description: "Monthly review of deflection, leads, and new intent categories." },
  ],
  portfolioSlugs: ["floriva-flower-chatbot", "floriva-whatsapp-chatbot", "e26-website-chatbot", "e26-ivr-calling"],
  faqs: buildPillarFaqs("AI Solutions", [
    { question: "Can AI chatbots work on WhatsApp?", answer: "Yes. We integrate with WhatsApp Business API for customer enquiry automation — popular for Karnataka SMEs." },
    { question: "Will AI replace my support team?", answer: "No — it handles repetitive first-line queries and captures leads; staff focus on complex cases and relationships." },
    { question: "What languages can the chatbot support?", answer: "English is standard; Arabic and other languages can be supported depending on content and model selection." },
    { question: "How do you prevent wrong AI answers?", answer: "Knowledge boundaries, confidence thresholds, human handoff, and conversation review dashboards." },
    { question: "What are ongoing AI costs?", answer: "API usage and hosting — we estimate monthly costs from expected conversation volume before launch." },
  ]),
};
