import type { ServiceDetailEnhancement } from "@/types";
import { buildPillarFaqs } from "@/lib/pillar-faqs";

const AI_PRICING = [
  {
    name: "Pilot",
    range: "₹75,000 – ₹2,00,000",
    description: "Focused chatbot or automation pilot.",
    includes: ["Use case scope", "Knowledge base", "Deployment", "30-day tuning"],
  },
  {
    name: "Production",
    range: "₹2,00,000 – ₹8,00,000",
    description: "Multi-channel AI with integrations.",
    includes: ["WhatsApp + web", "Admin dashboard", "Analytics", "Training"],
  },
  {
    name: "Programme",
    range: "₹8,00,000+",
    description: "Enterprise automation and document AI.",
    includes: ["Multiple workflows", "SLA", "Security review", "Ongoing optimisation"],
  },
];

export const AI_DETAIL_ENHANCEMENTS: ServiceDetailEnhancement[] = [
  {
    categorySlug: "ai-solutions",
    serviceSlug: "ai-chatbots",
    metaTitle: "AI Chatbot Development in Mangalore — Website & WhatsApp Bots | E26 Media",
    metaDescription:
      "AI chatbot development for Karnataka businesses. Website and WhatsApp customer bots with lead capture. Live Floriva chatbot portfolio. E26 Media.",
    heroHighlight: "AI Chatbots",
    intro: [
      "Customers ask the same questions daily — hours, pricing, services, order status. AI chatbots answer instantly on your website and WhatsApp, capture leads, and escalate to staff when conversations need a human.",
      "E26 Media has deployed AI chatbots for Floriva Gifts (website and WhatsApp) and internal E26 systems. We scope phase-one around your top 15–20 intents so you see ROI before expanding.",
      "Every bot includes human handoff, conversation logging, and analytics on deflection and leads generated.",
    ],
    sections: [
      {
        heading: "Website vs WhatsApp chatbots",
        paragraphs: [
          "Website widgets engage visitors browsing services — ideal for B2B lead qualification. WhatsApp bots meet customers on their preferred channel in India — order updates, FAQs, and appointment requests.",
          "Many Karnataka businesses deploy both with shared knowledge base.",
        ],
      },
      {
        heading: "Chatbot capabilities",
        paragraphs: [
          "FAQ answering from approved knowledge base. Lead forms inside chat. Product or service recommendations. Appointment or callback requests. Multilingual support where required. Integration to CRM or Google Sheets.",
        ],
      },
      {
        heading: "Responsible AI deployment",
        paragraphs: [
          "Bounded knowledge — bot answers only from approved content. Confidence thresholds trigger human takeover. Monthly review of failed intents to expand coverage.",
        ],
      },
    ],
    pricingTiers: AI_PRICING,
    deliverables: ["Intent mapping", "Knowledge base", "Web and/or WhatsApp deployment", "Admin review UI", "Analytics dashboard"],
    whyChoose: ["Live Floriva chatbot portfolio", "WhatsApp Business API experience", "ROI-scoped pilots", "Human escalation built in"],
    portfolioSlugs: ["floriva-flower-chatbot", "floriva-whatsapp-chatbot", "e26-website-chatbot"],
    relatedSlugs: ["ai-automation", "ai-customer-support"],
    faqs: buildPillarFaqs("AI Chatbots", [
      { question: "Can the chatbot speak Kannada?", answer: "English primary; Kannada and Arabic possible depending on content preparation and model selection." },
      { question: "How long to launch a chatbot?", answer: "4–8 weeks for pilot scope including knowledge base preparation and testing." },
    ]),
  },
  {
    categorySlug: "ai-solutions",
    serviceSlug: "ai-automation",
    metaTitle: "AI Workflow Automation in Mangalore — Intelligent Process Automation | E26 Media",
    metaDescription:
      "AI automation for Karnataka businesses. Document processing, email classification, workflow triggers. Practical ROI-focused AI from E26 Media.",
    heroHighlight: "AI Automation",
    intro: [
      "AI automation goes beyond chat — classifying emails, extracting invoice fields, routing support tickets, summarising documents, and triggering workflows when conditions are met.",
      "E26 Media implements automation with clear boundaries: human review queues for high-risk decisions, audit logs, and measurable time savings per process.",
      "Ideal for operations teams drowning in repetitive document and communication work across Mangalore and statewide branches.",
    ],
    sections: [
      {
        heading: "Automation use cases",
        paragraphs: [
          "Invoice and PO data extraction into accounting. Support ticket categorisation and routing. Sales enquiry classification by product line. Meeting notes summarisation for internal teams.",
        ],
      },
      {
        heading: "Architecture",
        paragraphs: [
          "API integrations to email, drive, CRM, and ERP. Queue-based processing with error handling. Dashboards showing automation volume and exception rate.",
        ],
      },
    ],
    pricingTiers: AI_PRICING,
    deliverables: ["Process audit", "Automation design", "Integration build", "Monitoring", "Staff training"],
    whyChoose: ["Practical ROI focus", "Human-in-the-loop design", "Integration expertise", "Not hype-driven scope"],
    portfolioSlugs: ["e26-ivr-calling", "e26-website-chatbot"],
    relatedSlugs: ["ai-chatbots", "business-automation"],
    faqs: buildPillarFaqs("AI Automation", [
      { question: "What processes should we automate first?", answer: "Highest volume, lowest risk, easiest to measure — we identify these in discovery." },
    ]),
  },
  {
    categorySlug: "ai-solutions",
    serviceSlug: "ai-customer-support",
    metaTitle: "AI Customer Support Solutions in Mangalore — 24/7 Intelligent Support | E26 Media",
    metaDescription:
      "AI customer support automation in Karnataka. 24/7 first-line support, ticket deflection, WhatsApp support flows. E26 Media.",
    heroHighlight: "AI Customer Support",
    intro: [
      "Support teams cannot scale linearly with enquiry volume. AI customer support handles first-line questions 24/7 — order status, policies, booking changes, troubleshooting steps — while routing complex cases to humans with full context.",
      "E26 Media designs support flows for ecommerce, hospitality, healthcare enquiries, and B2B service companies. Multichannel: website, WhatsApp, and email intake.",
      "Measure deflection rate, average handle time, and customer satisfaction — not just messages processed.",
    ],
    sections: [
      {
        heading: "Support automation layers",
        paragraphs: [
          "Tier 0: AI answers from knowledge base. Tier 1: AI gathers details then creates ticket for human. Tier 2: Live agent with conversation history visible.",
          "Escalation rules for angry sentiment, high-value accounts, or legal/compliance topics.",
        ],
      },
      {
        heading: "Knowledge base maintenance",
        paragraphs: [
          "Support AI is only as good as kept-up documentation. We include knowledge base setup and monthly update cadence in retainers.",
        ],
      },
    ],
    pricingTiers: AI_PRICING,
    deliverables: ["Support flow design", "Knowledge base", "Channel deployment", "Agent handoff UI", "Metrics dashboard"],
    whyChoose: ["24/7 coverage without night shifts", "WhatsApp support expertise", "Floriva ecommerce context", "Measurable deflection KPIs"],
    portfolioSlugs: ["floriva-whatsapp-chatbot", "floriva-flower-chatbot"],
    relatedSlugs: ["ai-chatbots", "ai-automation"],
    faqs: buildPillarFaqs("AI Customer Support", [
      { question: "Will customers know they are talking to AI?", answer: "We recommend transparency; bots identify as automated assistants with human escalation available." },
    ]),
  },
];
