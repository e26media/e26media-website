import type { ServicePillar } from "@/types";
import { buildPillarFaqs } from "@/lib/pillar-faqs";

export const MOBILE_APP_PILLAR: ServicePillar = {
  slug: "mobile-app-development",
  metaTitle: "Mobile App Development Company in Mangalore & Karnataka — E26 Media",
  metaDescription:
    "Android, iOS, Flutter, and React Native app development in Mangalore. Google Play launch support. Portfolio includes Tawakkal Muslim App and business apps for Karnataka clients.",
  hero: {
    badge: "Mobile App Development",
    title: "Mobile apps built for Google Play, App Store, and real users",
    highlight: "Google Play",
    description:
      "Native and cross-platform apps with secure APIs, polished UX, and store-ready delivery — from Mangalore to global markets.",
  },
  intro: [
    "Mobile-first behaviour dominates in Karnataka — customers book, browse, pay, and communicate on smartphones. A well-built app puts your business one tap away and enables push notifications, offline access, and device features websites cannot match.",
    "E26 Media develops Android, iOS, Flutter, React Native, and PWA applications. Our Tawakkal Muslim App is live on Google Play — proof we handle development, testing, store submission, and post-launch support.",
    "Whether you need a consumer app, field sales tool, delivery tracker, or companion to existing software, we scope MVPs honestly and roadmap phase two based on adoption data.",
  ],
  sections: [
    {
      heading: "Mobile apps we design and build",
      paragraphs: [
        "Native Android (Kotlin) and iOS (Swift) when maximum platform performance and features are required.",
        "Flutter and React Native for cost-efficient cross-platform delivery with shared business logic.",
        "Progressive Web Apps (PWA) when install friction must be minimal and web distribution is preferred.",
        "Companion apps for ERP, CRM, and booking systems — extending software you already use.",
      ],
    },
    {
      heading: "End-to-end app delivery",
      paragraphs: [
        "Discovery defines users, core flows, offline needs, and integrations. UI/UX design validates navigation before engineering. Backend APIs are secured with authentication, rate limiting, and documented contracts.",
        "QA covers real devices — especially Android fragmentation common in India. We prepare store listings, screenshots, privacy policies, and submission packages for Google Play and App Store.",
        "Post-launch we monitor crashes, reviews, and analytics; iterate with updates and feature roadmaps.",
      ],
    },
    {
      heading: "App development pricing guide",
      paragraphs: [
        "Simple MVPs with limited screens and no complex backend often start in mid five figures INR. Full consumer apps with payments, maps, chat, and admin panels require larger investment and longer timelines — typically 12–20+ weeks.",
        "Cross-platform (Flutter/React Native) reduces cost versus dual native builds when requirements align. We recommend the approach during discovery, not after quoting.",
      ],
    },
    {
      heading: "Why Karnataka businesses launch apps with E26 Media",
      paragraphs: [
        "Store-published portfolio, Mangalore-based accountability, and integration experience with payment gateways, maps, push notifications, and WhatsApp deep links.",
        "You receive source code, keystores documentation (with secure handling), and deployment guides — full ownership.",
      ],
    },
  ],
  pricingTiers: [
    {
      name: "App MVP",
      range: "₹3,00,000 – ₹8,00,000",
      description: "Core flows, single platform or Flutter, basic backend.",
      includes: ["UX design", "API development", "Device testing", "Store submission support"],
    },
    {
      name: "Full Product App",
      range: "₹8,00,000 – ₹20,00,000",
      description: "Cross-platform, payments, maps, notifications, admin panel.",
      includes: ["SRS", "Staging builds", "Analytics", "Launch support", "30-day warranty"],
    },
    {
      name: "Enterprise Mobile",
      range: "₹20,00,000+",
      description: "Complex integrations, compliance, multi-role, ongoing roadmap.",
      includes: ["Dedicated squad", "SLA options", "CI/CD", "Security review"],
    },
  ],
  deliverables: [
    "App UX design and interactive prototype",
    "Android and/or iOS production builds",
    "Secure backend APIs and admin tools where required",
    "Google Play / App Store submission support",
    "Analytics and crash reporting setup",
    "Source code and deployment documentation",
    "Post-launch support window",
  ],
  whyChoose: [
    "Tawakkal Muslim App live on Google Play",
    "Flutter, React Native, and native expertise",
    "Store submission and review experience",
    "API security and backend development in-house",
    "Mangalore office with Karnataka and international clients",
    "MVP-first roadmap to control risk and budget",
  ],
  process: [
    { step: "Discover", description: "User personas, core journeys, platform choice, integration list." },
    { step: "Design", description: "Wireframes, UI kit, prototype validation on devices." },
    { step: "Develop", description: "Sprint delivery, TestFlight/internal APK demos, API integration." },
    { step: "Test", description: "Device lab QA, performance, security, UAT sign-off." },
    { step: "Launch", description: "Store submission, listing assets, release monitoring." },
    { step: "Grow", description: "Analytics review, feature roadmap, retention improvements." },
  ],
  portfolioSlugs: ["tawakkal-muslim-app", "restaurant-app"],
  faqs: buildPillarFaqs("Mobile App Development", [
    { question: "Flutter or native — which should I choose?", answer: "Flutter/React Native when one codebase for iOS and Android fits your timeline and budget; native when platform-specific features dominate." },
    { question: "Do you publish apps on Google Play?", answer: "Yes — we support development, testing, listing creation, and submission including the Tawakkal Muslim App." },
    { question: "Can you maintain and update my app after launch?", answer: "Yes — maintenance retainers cover OS updates, bug fixes, and feature releases." },
    { question: "Do you build the backend API too?", answer: "Yes. Most apps include secure APIs, authentication, and admin panels we develop alongside the mobile client." },
  ]),
};
