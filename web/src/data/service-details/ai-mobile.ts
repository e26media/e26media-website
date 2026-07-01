import type { ServiceDetailEnhancement } from "@/types";
import { buildPillarFaqs } from "@/lib/pillar-faqs";

export const AI_DETAIL_ENHANCEMENTS: ServiceDetailEnhancement[] = [
  {
    categorySlug: "ai-solutions",
    serviceSlug: "ai-chatbots",
    metaTitle: "AI Chatbot Development in Mangalore — Website & WhatsApp Bots | E26 Media",
    metaDescription:
      "AI chatbot development in Mangalore. Customer-facing bots for websites and WhatsApp. Floriva Gifts chatbot in portfolio. ROI-focused implementation with human handoff.",
    heroHighlight: "AI Chatbots",
    intro: [
      "AI chatbots answer repetitive customer questions 24/7 — pricing, hours, services, order status — while capturing leads and escalating complex cases to your team. Done right, they reduce support load and speed response times.",
      "E26 Media has deployed AI chatbots for Floriva Gifts (website and WhatsApp) and internal E26 systems. We scope narrowly for phase one — your top 20 questions — measure deflection, then expand.",
      "Every bot includes human handoff, conversation logging, and admin review — not a black box that frustrates customers.",
    ],
    sections: [
      {
        heading: "Where AI chatbots deliver ROI fastest",
        paragraphs: [
          "Ecommerce pre-sales questions — shipping, products, availability. Service businesses — 'do you cover my area?', pricing ranges, booking enquiries. FAQ-heavy industries — healthcare hours, restaurant catering menus, real estate project details.",
          "WhatsApp bots are especially effective in India where customers prefer chat to forms.",
        ],
      },
      {
        heading: "Our chatbot implementation stack",
        paragraphs: [
          "Knowledge base from your website, PDFs, and approved Q&A. LLM with guardrails and confidence thresholds. Website widget and/or WhatsApp Business API. CRM or spreadsheet lead capture.",
          "Dashboard for staff to review conversations and add new intents monthly.",
        ],
      },
      {
        heading: "Floriva Gifts — proof of delivery",
        paragraphs: [
          "We built customer-facing AI chat experiences for an international ecommerce brand — handling product enquiries and routing to human support when needed. Ask for a demo during consultation.",
        ],
      },
    ],
    pricingTiers: [
      {
        name: "Website Bot",
        range: "₹75,000 – ₹2,00,000",
        description: "Web widget with defined FAQ set and lead capture.",
        includes: ["Knowledge setup", "Widget deploy", "Handoff rules", "30-day tuning"],
      },
      {
        name: "WhatsApp AI Bot",
        range: "₹1,50,000 – ₹4,00,000",
        description: "WhatsApp Business API integration with AI responses.",
        includes: ["API setup", "Flows", "Lead routing", "Analytics"],
      },
      {
        name: "Omnichannel",
        range: "₹4,00,000+",
        description: "Web + WhatsApp + internal tools unified.",
        includes: ["Shared knowledge", "CRM sync", "Monitoring", "SLA"],
      },
    ],
    deliverables: ["Use case definition", "Knowledge base", "Deployed bot", "Admin dashboard", "Handoff workflow", "Usage analytics"],
    whyChoose: ["Floriva chatbot in portfolio", "WhatsApp expertise", "ROI-first scoping", "Human escalation built in"],
    portfolioSlugs: ["floriva-flower-chatbot", "floriva-whatsapp-chatbot", "e26-website-chatbot"],
    relatedSlugs: ["ai-automation", "ai-customer-support"],
    faqs: buildPillarFaqs("AI Chatbots", [
      { question: "Can the chatbot speak Kannada?", answer: "English is primary; Kannada and other languages can be supported with curated content and model selection." },
      { question: "What if the bot gives a wrong answer?", answer: "Confidence thresholds, knowledge boundaries, and human handoff minimize risk; staff review improves accuracy over time." },
    ]),
  },
  {
    categorySlug: "ai-solutions",
    serviceSlug: "ai-automation",
    metaTitle: "AI Workflow Automation in Mangalore — Intelligent Process Automation | E26 Media",
    metaDescription:
      "AI-powered workflow automation in Mangalore. Classify emails, extract document data, route enquiries, automate repetitive office work. Practical AI with clear ROI.",
    heroHighlight: "AI Automation",
    intro: [
      "AI automation goes beyond rule-based scripts — it classifies unstructured input, extracts data from documents, drafts responses for human approval, and routes work to the right person automatically.",
      "E26 Media implements automation where volume justifies investment: support ticket triage, invoice data extraction, lead qualification, and content summarisation for internal teams.",
      "We connect AI to your existing tools — email, CRM, sheets, WhatsApp — with audit logs and human approval gates for high-stakes actions.",
    ],
    sections: [
      {
        heading: "AI automation use cases",
        paragraphs: [
          "Email and form classification → route to department. PDF invoice → extract fields → accounting queue. Support message → suggested reply for agent approval. Daily report → auto-summary for management.",
          "Pair with traditional automation for triggers and notifications.",
        ],
      },
      {
        heading: "Responsible implementation",
        paragraphs: [
          "Human-in-the-loop for financial and customer-facing outputs. Data privacy documented. Monthly review of accuracy and edge cases.",
        ],
      },
    ],
    pricingTiers: [
      {
        name: "Pilot Automation",
        range: "₹1,50,000 – ₹4,00,000",
        description: "One workflow with AI classification or extraction.",
        includes: ["Mapping", "Build", "Review UI", "30-day tune"],
      },
      {
        name: "Programme",
        range: "₹4,00,000 – ₹12,00,000",
        description: "Multiple AI workflows integrated.",
        includes: ["Audit", "Roadmap", "Dashboards", "Training"],
      },
      {
        name: "Enterprise",
        range: "Custom",
        description: "High volume, compliance, custom models.",
        includes: ["SLA", "Security review", "Dedicated support"],
      },
    ],
    deliverables: ["Workflow map", "AI integration", "Approval interfaces", "Logging", "Documentation", "Training"],
    whyChoose: ["Practical ROI focus", "Human approval gates", "Integration experience", "Mangalore team"],
    portfolioSlugs: ["e26-website-chatbot", "e26-ivr-calling"],
    relatedSlugs: ["ai-chatbots", "business-automation"],
    faqs: buildPillarFaqs("AI Automation", [
      { question: "AI automation vs traditional automation?", answer: "Traditional handles fixed rules; AI handles unstructured text and classification — often combined in one workflow." },
    ]),
  },
];

export const MOBILE_DETAIL_ENHANCEMENTS: ServiceDetailEnhancement[] = [
  {
    categorySlug: "mobile-app-development",
    serviceSlug: "android-app-development",
    metaTitle: "Android App Development in Mangalore — Google Play Launch | E26 Media",
    metaDescription:
      "Android app development company in Mangalore. Native Kotlin apps, Play Store submission, secure APIs. Portfolio: Tawakkal Muslim App on Google Play.",
    heroHighlight: "Android App",
    intro: [
      "Android dominates smartphone usage in India — your customers are on Android first. A native or cross-platform app puts your business in their pocket with push notifications, offline access, and device features websites cannot match.",
      "E26 Media develops Android applications with Kotlin and cross-platform Flutter when appropriate. Tawakkal Muslim App is live on Google Play — proof we handle development, QA, store listing, and launch support.",
      "We build the backend APIs, admin tools, and analytics — not just the mobile UI.",
    ],
    sections: [
      {
        heading: "Android apps we build",
        paragraphs: [
          "Consumer apps — content, community, utilities. Business apps — field sales, delivery tracking, inventory checks. Companion apps for ERP and booking systems. Play Store optimisation and update management.",
        ],
      },
      {
        heading: "Google Play launch process",
        paragraphs: [
          "Store listing, screenshots, privacy policy, content rating, signing keys (secure handling), and submission. Post-launch crash monitoring and review response guidance.",
        ],
      },
      {
        heading: "Android for Karnataka businesses",
        paragraphs: [
          "Optimise for low-end devices and variable network — common in Indian markets. Offline-first patterns where connectivity is unreliable.",
        ],
      },
    ],
    pricingTiers: [
      {
        name: "MVP",
        range: "₹3,00,000 – ₹7,00,000",
        description: "Core Android app with backend.",
        includes: ["UX design", "API", "QA", "Play Store support"],
      },
      {
        name: "Full Product",
        range: "₹7,00,000 – ₹18,00,000",
        description: "Payments, maps, notifications, admin.",
        includes: ["Full features", "Analytics", "Launch", "30-day warranty"],
      },
      {
        name: "Enterprise",
        range: "₹18,00,000+",
        description: "Complex integrations and roadmap.",
        includes: ["Dedicated team", "CI/CD", "SLA"],
      },
    ],
    deliverables: ["App design", "Android build", "Backend API", "Play Store assets", "Analytics", "Source code"],
    whyChoose: ["Tawakkal Muslim on Google Play", "Kotlin + Flutter", "Backend in-house", "Mangalore team"],
    portfolioSlugs: ["tawakkal-muslim-app"],
    relatedSlugs: ["flutter-app-development", "react-native-apps"],
    faqs: buildPillarFaqs("Android App Development", [
      { question: "Native Android vs Flutter?", answer: "Native Kotlin for maximum platform features; Flutter when iOS launch is also planned and budget is constrained." },
    ]),
  },
  {
    categorySlug: "mobile-app-development",
    serviceSlug: "flutter-app-development",
    metaTitle: "Flutter App Development in Mangalore — iOS & Android | E26 Media",
    metaDescription:
      "Flutter app development in Mangalore. One codebase for Android and iOS. Faster cross-platform delivery for Karnataka startups and businesses.",
    heroHighlight: "Flutter App",
    intro: [
      "Flutter delivers native-quality UI on Android and iOS from a single codebase — reducing cost and time versus building two separate native apps when requirements align.",
      "E26 Media uses Flutter for cross-platform consumer and business apps where shared logic, fast iteration, and consistent UI across platforms matter.",
      "We pair Flutter clients with secure Node.js or Firebase backends, push notifications, and store submission for both Google Play and App Store.",
    ],
    sections: [
      {
        heading: "When Flutter is the right choice",
        paragraphs: [
          "Startup MVPs needing both platforms. Internal business tools for mixed device teams. Apps with rich custom UI where consistency matters.",
          "When heavy platform-specific features dominate, we recommend native or hybrid strategy — we advise during discovery.",
        ],
      },
      {
        heading: "Flutter delivery process",
        paragraphs: [
          "Shared design system in Figma → Flutter widgets. API-first backend. Device testing on Android and iOS. CI builds for TestFlight and internal APK distribution.",
        ],
      },
    ],
    pricingTiers: [
      {
        name: "Flutter MVP",
        range: "₹3,50,000 – ₹8,00,000",
        description: "Cross-platform core features.",
        includes: ["Design", "Flutter build", "API", "Store prep"],
      },
      {
        name: "Full Flutter App",
        range: "₹8,00,000 – ₹18,00,000",
        description: "Both stores, payments, maps, admin.",
        includes: ["Dual platform", "Backend", "Analytics", "Launch"],
      },
      {
        name: "Scale",
        range: "₹18,00,000+",
        description: "Ongoing features and SLA.",
        includes: ["Roadmap", "CI/CD", "Support"],
      },
    ],
    deliverables: ["Flutter codebase", "iOS + Android builds", "Backend", "Store listings", "Documentation"],
    whyChoose: ["Cross-platform efficiency", "Single team both stores", "Backend included", "Mangalore studio"],
    portfolioSlugs: ["tawakkal-muslim-app", "restaurant-app"],
    relatedSlugs: ["android-app-development", "ios-app-development"],
    faqs: buildPillarFaqs("Flutter App Development", [
      { question: "Flutter vs React Native?", answer: "Both viable; we often choose Flutter for UI consistency and performance on varied Android devices common in India." },
    ]),
  },
];
