import type { ServicePillar } from "@/types";
import { buildPillarFaqs } from "@/lib/pillar-faqs";

export const SOFTWARE_DEVELOPMENT_PILLAR: ServicePillar = {
  slug: "software-development",
  metaTitle: "Custom Software Development Company in Mangalore & Karnataka — E26 Media",
  metaDescription:
    "ERP, CRM, billing, inventory, and custom business software for Karnataka SMEs. Mangalore-based team. Transparent scoping, milestone delivery, and source code ownership.",
  hero: {
    badge: "Software Development",
    title: "Custom software that replaces spreadsheets and manual work",
    highlight: "replaces spreadsheets",
    description:
      "ERP, CRM, billing, inventory, HRMS, and bespoke business applications — built for how your Karnataka business actually operates.",
  },
  intro: [
    "Spreadsheets, WhatsApp threads, and disconnected tools work until they do not — then errors compound, reporting delays decisions, and growth stalls. Custom software centralises operations, automates repetitive work, and gives owners real-time visibility across Mangalore, Bengaluru, Hubballi, and beyond.",
    "E26 Media develops business software for manufacturers, retailers, healthcare providers, schools, distributors, and service companies. We deliver written scope documents, weekly demos on staging environments, and full source code ownership — so you are never locked into a black box.",
    "From ERP and inventory modules to billing systems, POS integrations, hospital management features, and workflow automation, our Mangalore team combines product thinking with engineering discipline.",
  ],
  sections: [
    {
      heading: "When custom software makes sense for your business",
      paragraphs: [
        "Off-the-shelf SaaS fits generic workflows. Custom software fits yours — unique pricing rules, regional compliance, multi-branch inventory, role-based approvals, and integrations with Tally, Zoho, or legacy systems common in Karnataka SMEs.",
        "If your team spends hours reconciling data across tools, re-entering orders, or chasing status updates manually, a tailored system typically pays back within months through time saved and errors eliminated.",
        "We advise honestly when integration or configuration of existing tools is enough — and when a custom build is the right long-term investment.",
      ],
    },
    {
      heading: "Software solutions we build",
      paragraphs: [
        "ERP and operations platforms — unified finance, inventory, procurement, production, and reporting for manufacturers and distributors.",
        "CRM and sales systems — lead tracking, pipeline management, quotation workflows, and customer communication history.",
        "Billing and subscription systems — GST-compliant invoicing, payment reminders, recurring billing, and accounting exports.",
        "Inventory and warehouse management — multi-location stock, low-stock alerts, barcode support, and POS sync.",
        "HRMS and school management — attendance, payroll hooks, fee collection, parent portals, and announcement systems.",
        "Hospital management modules — appointments, patient records, billing, and departmental workflows where compliance allows.",
        "Business automation — approval chains, notification rules, API integrations, and dashboard reporting.",
      ],
    },
    {
      heading: "Our software development methodology",
      paragraphs: [
        "Discovery produces a Software Requirements Specification (SRS) — modules, user roles, integrations, acceptance criteria, and timeline. You sign off before development starts.",
        "We work in agile sprints with staging demos every week. You see working features, not slide decks. Change requests are documented with impact on timeline and cost.",
        "Quality assurance includes unit and integration testing, role-based UAT, and security review for authentication, backups, and data access. Deployment includes training and administrator documentation.",
        "Post-launch support covers bug fixes, monitoring, and phased roadmap for module two — so you can launch an MVP and expand based on real usage.",
      ],
    },
    {
      heading: "Technology stack and integrations",
      paragraphs: [
        "Backend: Node.js, Python, PostgreSQL, REST and GraphQL APIs. Frontend: React and Next.js for web admin panels. Mobile: Flutter or React Native when field teams need apps.",
        "Cloud deployment on AWS, Azure, or Google Cloud with automated backups, SSL, and role-based access control. Integrations with Tally, Razorpay, SMS gateways, WhatsApp APIs, and existing ERPs where required.",
      ],
    },
    {
      heading: "Software pricing and investment guide",
      paragraphs: [
        "Single-module tools (e.g. billing or inventory lite) often start in the mid five figures INR. Multi-module ERP or industry-specific platforms require larger investment proportional to users, branches, and integrations.",
        "We quote fixed milestones — not open-ended hourly billing without visibility. Typical payment: 40% kickoff, 30% mid-build, 30% launch, adjustable for longer programmes.",
        "Request a consultation with your process maps, user count, and integration list for an accurate proposal within 24 business hours.",
      ],
    },
    {
      heading: "Industries we serve with custom software",
      paragraphs: [
        "Manufacturing and distribution in Baikampady, Hubballi, and Mysuru industrial corridors; retail and supermarket operations; healthcare clinics; schools and training institutes; hospitality groups; construction and real estate sales teams; and growing corporates modernising legacy workflows.",
      ],
    },
  ],
  pricingTiers: [
    {
      name: "Single Module / MVP",
      range: "₹2,00,000 – ₹8,00,000",
      description: "Focused tool — billing, inventory lite, CRM core, or automation workflow.",
      includes: ["SRS document", "Staging demos", "Core module delivery", "UAT support", "Source code handover"],
    },
    {
      name: "Multi-Module Platform",
      range: "₹8,00,000 – ₹25,00,000",
      description: "ERP-style systems with several integrated modules and reporting.",
      includes: ["Architecture design", "Role-based access", "Integrations", "Training", "90-day warranty support"],
    },
    {
      name: "Enterprise / Custom",
      range: "₹25,00,000+",
      description: "Large user bases, compliance requirements, multi-branch, and complex integrations.",
      includes: ["Dedicated team", "SLA options", "Phased rollout", "Documentation", "Ongoing roadmap"],
    },
  ],
  deliverables: [
    "Software Requirements Specification (SRS)",
    "Staging environment with weekly demos",
    "Production deployment and admin training",
    "Source code and database ownership",
    "API documentation and integration guides",
    "Backup and security baseline configuration",
    "Post-launch warranty support period",
  ],
  whyChoose: [
    "Honest scoping — we recommend build vs buy vs integrate",
    "Weekly visible progress on staging — not black-box development",
    "Karnataka SME context — Tally, GST, WhatsApp workflows understood",
    "Source code ownership in your contract",
    "Mangalore office for in-person discovery and support",
    "Experience across retail, healthcare, education, and manufacturing",
  ],
  process: [
    { step: "Discover", description: "Process mapping, stakeholder interviews, integration audit, and success metrics definition." },
    { step: "Specify", description: "SRS with modules, roles, acceptance criteria, timeline, and fixed milestone quote." },
    { step: "Architect", description: "Database design, API contracts, security model, and infrastructure plan." },
    { step: "Build", description: "Agile sprints, weekly demos, code review, and integration testing." },
    { step: "Test", description: "UAT with your team, performance and security checks, data migration if required." },
    { step: "Launch", description: "Production deployment, training, documentation, and hypercare support window." },
  ],
  portfolioSlugs: ["supermarket", "restaurant-app", "e26-website-chatbot"],
  faqs: buildPillarFaqs("Software Development", [
    { question: "Can you integrate custom software with Tally?", answer: "Yes. We build API integrations and export flows commonly used with Tally and other accounting platforms in Karnataka SMEs." },
    { question: "Do you build ERP from scratch?", answer: "We build tailored ERP modules mapped to your operations — often faster and more fit-for-purpose than forcing generic ERP configuration." },
    { question: "How do you handle data migration?", answer: "We plan migration from spreadsheets or legacy systems with validation rules, pilot imports, and rollback procedures." },
    { question: "Is cloud or on-premise deployment available?", answer: "Both. We typically recommend cloud for accessibility; on-premise is available for specific compliance needs." },
    { question: "Can you add modules after MVP launch?", answer: "Yes. Roadmap phasing is standard — launch core modules first, expand based on user feedback and ROI." },
  ]),
};
