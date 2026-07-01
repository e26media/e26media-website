import type { ServiceDetailEnhancement } from "@/types";
import { buildPillarFaqs } from "@/lib/pillar-faqs";

const WEB_PRICING = [
  {
    name: "Essential",
    range: "₹60,000 – ₹1,20,000",
    description: "Focused scope with core pages and mobile-first design.",
    includes: ["Up to 8 pages", "Contact & WhatsApp", "Technical SEO", "Analytics", "30-day support"],
  },
  {
    name: "Professional",
    range: "₹1,20,000 – ₹3,50,000",
    description: "Full business site with custom UI and integrations.",
    includes: ["Custom design", "CMS or Next.js", "Blog structure", "Schema markup", "Training"],
  },
  {
    name: "Enterprise",
    range: "₹3,50,000+",
    description: "Multi-language, advanced integrations, compliance needs.",
    includes: ["Discovery & SRS", "Role-based content", "API integrations", "Performance SLA", "Dedicated PM"],
  },
];

const SW_PRICING = [
  {
    name: "MVP",
    range: "₹2,50,000 – ₹8,00,000",
    description: "Core module with essential workflows.",
    includes: ["Requirements doc", "Admin dashboard", "User roles", "Deployment", "30-day warranty"],
  },
  {
    name: "Full Platform",
    range: "₹8,00,000 – ₹25,00,000",
    description: "Multi-module system with reporting.",
    includes: ["SRS", "Custom modules", "Reports", "API layer", "Training"],
  },
  {
    name: "Enterprise",
    range: "₹25,00,000+",
    description: "Large-scale with compliance and integrations.",
    includes: ["Phased rollout", "Migration", "SLA support", "Dedicated team", "Enhancement sprints"],
  },
];

const AI_PRICING = [
  {
    name: "Starter",
    range: "₹75,000 – ₹2,50,000",
    description: "Chatbot or single automation workflow.",
    includes: ["Conversation design", "Knowledge base", "Web/WhatsApp widget", "Analytics", "30-day tuning"],
  },
  {
    name: "Business",
    range: "₹2,50,000 – ₹8,00,000",
    description: "AI integrated into support or operations.",
    includes: ["Process mapping", "API integrations", "Human handoff", "Training", "Monitoring"],
  },
  {
    name: "Platform",
    range: "₹8,00,000+",
    description: "Custom AI product or multi-agent system.",
    includes: ["Data pipelines", "Security review", "Custom models", "Ongoing optimization"],
  },
];

const MKT_PRICING = [
  {
    name: "Local SEO",
    range: "₹25,000 – ₹50,000/mo",
    description: "GBP, citations, on-page SEO.",
    includes: ["GBP optimization", "Monthly reporting", "Review strategy", "Local pages"],
  },
  {
    name: "Growth",
    range: "₹50,000 – ₹1,50,000/mo",
    description: "SEO + content + one paid channel.",
    includes: ["Technical audits", "Content calendar", "Ad management", "CRO"],
  },
  {
    name: "Full Funnel",
    range: "₹1,50,000+/mo",
    description: "Multi-channel growth programme.",
    includes: ["Strategy", "Multi-channel ads", "Content production", "Attribution"],
  },
];

const CLOUD_PRICING = [
  {
    name: "Audit",
    range: "₹50,000 – ₹1,50,000",
    description: "Assessment and migration roadmap.",
    includes: ["Infrastructure audit", "Cost analysis", "Migration plan", "Risk assessment"],
  },
  {
    name: "Migration",
    range: "₹1,50,000 – ₹6,00,000",
    description: "Execute migration with monitoring.",
    includes: ["Architecture", "Migration execution", "SSL & DNS", "Backup automation"],
  },
  {
    name: "Managed",
    range: "₹25,000 – ₹1,00,000/mo",
    description: "Ongoing hosting and incident response.",
    includes: ["24/7 monitoring", "Patches", "Scaling", "Monthly reports"],
  },
];

const UX_PRICING = [
  {
    name: "Single Page",
    range: "₹15,000 – ₹40,000",
    description: "High-fidelity design for key screen.",
    includes: ["Wireframe", "Visual design", "Mobile + desktop", "Figma handoff"],
  },
  {
    name: "Full Product",
    range: "₹1,00,000 – ₹4,00,000",
    description: "Complete web or app UI.",
    includes: ["User flows", "Wireframes", "UI kit", "Prototype", "Developer handoff"],
  },
  {
    name: "Design System",
    range: "₹4,00,000+",
    description: "Scalable component library.",
    includes: ["Audit", "Components", "Documentation", "Accessibility standards"],
  },
];

export const PHASE4_DETAIL_ENHANCEMENTS: ServiceDetailEnhancement[] = [
  {
    categorySlug: "website-development",
    serviceSlug: "website-maintenance",
    metaTitle: "Website Maintenance & Support in Mangalore — E26 Media",
    metaDescription:
      "Website maintenance, security updates, backups, and content support for Karnataka businesses. Keep your site fast, secure, and current.",
    heroHighlight: "Website Maintenance",
    intro: [
      "A website is not a one-time project — plugins age, certificates expire, and content drifts out of date. Without maintenance, security vulnerabilities and broken forms silently cost you leads.",
      "E26 Media offers website maintenance retainers for clients we built and for sites inherited from other agencies — security patches, uptime monitoring, backup verification, and minor content updates on a predictable monthly fee.",
      "Based in Mangalore, we respond via WhatsApp and email with SLA-backed turnaround for production issues.",
    ],
    sections: [
      {
        heading: "What maintenance includes",
        paragraphs: [
          "Monthly security and dependency updates for WordPress, Next.js, or static stacks. SSL renewal monitoring. Daily or weekly backups with restore testing quarterly. Uptime alerts when your site goes down.",
          "Minor content edits — text changes, image swaps, new team members — within included hours. Larger features are quoted as enhancement sprints.",
        ],
      },
      {
        heading: "Why retainers beat break-fix",
        paragraphs: [
          "Break-fix support costs more per incident and waits until something breaks — often during a campaign or product launch. Retainers prioritise your site in the queue and include proactive monitoring.",
          "Clients running Google Ads or local SEO cannot afford multi-hour outages. Maintenance pays for itself the first time we prevent a hack or restore from backup.",
        ],
      },
    ],
    pricingTiers: [
      { name: "Basic", range: "₹8,000 – ₹15,000/mo", description: "Small business sites, monthly updates.", includes: ["Security patches", "Backups", "Uptime monitoring", "2 content edits/mo"] },
      { name: "Business", range: "₹15,000 – ₹25,000/mo", description: "Active marketing sites.", includes: ["Weekly checks", "Priority support", "Analytics review", "5 content edits/mo"] },
      { name: "Priority", range: "₹25,000+/mo", description: "Ecommerce or high-traffic sites.", includes: ["SLA response", "Performance tuning", "Staging environment", "Dedicated contact"] },
    ],
    deliverables: ["Maintenance schedule", "Backup policy", "Update log", "Incident reports", "Monthly health check"],
    whyChoose: ["We know sites we build", "Mangalore support team", "Proactive monitoring", "Clear hourly overage rates"],
    portfolioSlugs: ["abrar-caterers", "lamiya-alkhaleej"],
    relatedSlugs: ["corporate-website", "website-redesign"],
    faqs: buildPillarFaqs("Website Maintenance", [
      { question: "Do you maintain WordPress sites?", answer: "Yes — plugin updates, theme compatibility, and malware cleanup are core maintenance tasks." },
    ]),
  },
  {
    categorySlug: "website-development",
    serviceSlug: "educational-website",
    metaTitle: "Educational Institution Website Development — Schools & Colleges | E26 Media",
    metaDescription:
      "Website development for schools, colleges, and training institutes in Mangalore and Karnataka. Admissions, courses, events, and parent communication.",
    heroHighlight: "Educational Website",
    intro: [
      "Parents and students research institutions online before visiting campus. An educational website must communicate credibility — faculty, facilities, admissions process, results, and campus life — while staying easy for non-technical staff to update.",
      "E26 Media builds websites for schools, colleges, coaching centres, and training institutes across Karnataka with admission enquiry flows, course catalogues, event calendars, and news sections.",
      "We understand academic approval cycles and launch timelines aligned to admission seasons.",
    ],
    sections: [
      {
        heading: "Pages every institution needs",
        paragraphs: [
          "About and leadership, academic programmes, admissions with clear eligibility and fee structure, campus facilities gallery, placements or results (where applicable), news and events, contact with map and transport info.",
          "Optional parent portal links, alumni section, and downloadable prospectus PDFs.",
        ],
      },
      {
        heading: "Accessibility and multilingual needs",
        paragraphs: [
          "Readable fonts, sufficient contrast, and mobile-first layouts for parents searching on phones. Kannada and English content support for Karnataka institutions serving local families.",
        ],
      },
    ],
    pricingTiers: WEB_PRICING,
    deliverables: ["Admissions enquiry forms", "Course pages", "Event/news CMS", "Gallery", "SEO setup", "Staff training"],
    whyChoose: ["Admission-season timing experience", "Easy CMS for staff", "Karnataka education context", "Maintenance retainers"],
    portfolioSlugs: [],
    relatedSlugs: ["corporate-website", "ngo-website"],
    faqs: buildPillarFaqs("Educational Website", [
      { question: "Can teachers update news without developers?", answer: "Yes — we train staff on CMS workflows and provide documentation." },
    ]),
  },
  {
    categorySlug: "website-development",
    serviceSlug: "ngo-website",
    metaTitle: "NGO & Non-Profit Website Development in Mangalore — E26 Media",
    metaDescription:
      "Websites for NGOs and non-profits in Karnataka. Donation flows, volunteer registration, impact stories, and transparency pages that build donor trust.",
    heroHighlight: "NGO Website",
    intro: [
      "Donors and grant reviewers evaluate NGOs online before committing funds. Your website must tell your mission clearly, show measurable impact, and make donating or volunteering frictionless.",
      "E26 Media builds NGO websites with impact storytelling, project pages, team and governance transparency, donation integration (Razorpay, UPI), and volunteer sign-up forms.",
      "We work with Mangalore and Karnataka non-profits on budgets that respect mission-first spending — scoping essentials first, phasing advanced features later.",
    ],
    sections: [
      {
        heading: "Trust-building content architecture",
        paragraphs: [
          "Mission and vision, legal registration and 80G/12A information where applicable, annual reports or impact metrics, project case studies with photos, partner logos, and contact for CSR enquiries.",
          "Donation page with suggested amounts, recurring gift options, and thank-you automation.",
        ],
      },
    ],
    pricingTiers: WEB_PRICING,
    deliverables: ["Impact pages", "Donation integration", "Volunteer forms", "Gallery", "SEO", "CMS training"],
    whyChoose: ["Mission-sensitive scoping", "Donation gateway experience", "Karnataka NGO context", "Ongoing content support"],
    portfolioSlugs: [],
    relatedSlugs: ["educational-website", "corporate-website"],
    faqs: buildPillarFaqs("NGO Website", [
      { question: "Do you integrate Razorpay for donations?", answer: "Yes — Razorpay, UPI, and international gateways depending on donor geography." },
    ]),
  },
  {
    categorySlug: "website-development",
    serviceSlug: "ecommerce-website",
    metaTitle: "Ecommerce Website Development in Mangalore — Online Store Builders | E26 Media",
    metaDescription:
      "Ecommerce website development in Mangalore. Product catalogues, cart, checkout, Razorpay, and inventory sync. Floriva Gifts Australia case study.",
    heroHighlight: "Ecommerce Website",
    intro: [
      "Selling online requires more than product photos — catalogue structure, variant selection, shipping rules, payment trust, and order notifications must work flawlessly on mobile.",
      "E26 Media builds ecommerce stores for Indian and international markets — Floriva Gifts Australia is a live reference for cross-border gift commerce with AI support integration.",
      "We integrate Razorpay, Shiprocket, and inventory systems so your store connects to how you actually fulfil orders.",
    ],
    sections: [
      {
        heading: "Ecommerce features we deliver",
        paragraphs: [
          "Product catalogue with categories, filters, and search. Variant management (size, colour). Cart persistence and guest checkout. Payment gateway and order confirmation emails. Admin panel for orders and catalogue updates.",
          "Optional: coupon codes, wishlists, reviews, and WhatsApp order notifications.",
        ],
      },
      {
        heading: "Platform selection",
        paragraphs: [
          "Custom Next.js storefronts for unique UX. Shopify or WooCommerce when speed-to-market and standard catalogues fit. We recommend honestly after discovery — not every store needs custom code.",
        ],
      },
    ],
    pricingTiers: [
      { name: "Starter Store", range: "₹1,50,000 – ₹3,50,000", description: "Up to 100 SKUs, standard checkout.", includes: ["Catalogue", "Cart & checkout", "Razorpay", "Admin panel", "Mobile UX"] },
      { name: "Growth Store", range: "₹3,50,000 – ₹8,00,000", description: "Advanced catalogues and integrations.", includes: ["Inventory sync", "Coupons", "SEO", "Analytics", "Shiprocket"] },
      { name: "Enterprise", range: "₹8,00,000+", description: "Multi-vendor or international commerce.", includes: ["Multi-currency", "ERP sync", "Custom workflows", "Performance SLA"] },
    ],
    deliverables: ["Store UX design", "Payment integration", "Order management", "SEO foundation", "Training", "Launch support"],
    whyChoose: ["Floriva international reference", "Razorpay + Shiprocket experience", "AI support add-on", "Mangalore team"],
    portfolioSlugs: ["floriva-gifts"],
    relatedSlugs: ["landing-page", "website-maintenance"],
    faqs: buildPillarFaqs("Ecommerce Website", [
      { question: "Shopify or custom — which do you recommend?", answer: "Shopify for fast standard stores; custom when UX, integrations, or international rules require flexibility." },
    ]),
  },
  {
    categorySlug: "software-development",
    serviceSlug: "hospital-management-system",
    metaTitle: "Hospital Management System Software in Mangalore & Karnataka — E26 Media",
    metaDescription:
      "Hospital and clinic management software — appointments, patient records, billing, pharmacy, and lab modules for Karnataka healthcare providers.",
    heroHighlight: "Hospital Management System",
    intro: [
      "Clinics and hospitals juggle appointments, patient records, billing, pharmacy, and staff schedules across paper registers and disconnected spreadsheets. A hospital management system unifies these workflows with role-based access and audit trails.",
      "E26 Media develops HMS platforms for nursing homes, multi-specialty clinics, and diagnostic centres in Karnataka — scoped to your bed count, departments, and compliance needs without forcing enterprise software you will never fully use.",
      "Our hospital website portfolio complements HMS projects — patients discover you online and book through connected systems.",
    ],
    sections: [
      {
        heading: "HMS modules",
        paragraphs: [
          "Patient registration and EMR basics. Appointment scheduling with doctor calendars and SMS reminders. OPD and IPD billing with GST. Pharmacy inventory linked to prescriptions. Lab order tracking and report upload.",
          "Admin dashboards for occupancy, revenue, and department performance.",
        ],
      },
      {
        heading: "Deployment for Karnataka healthcare",
        paragraphs: [
          "On-premise or cloud hosting based on data policies. Training for reception, nurses, and billing staff. Phased rollout — appointments and billing first, pharmacy and lab next.",
        ],
      },
    ],
    pricingTiers: SW_PRICING,
    deliverables: ["Department workflow mapping", "Role-based access", "Billing module", "Appointment system", "Training", "Documentation"],
    whyChoose: ["Healthcare website + software combo", "Phased MVP approach", "Karnataka clinic context", "Post-launch support"],
    portfolioSlugs: [],
    relatedSlugs: ["hospital-website", "billing-system", "custom-software"],
    faqs: buildPillarFaqs("Hospital Management System", [
      { question: "Is the HMS ABDM compliant?", answer: "We architect for integration readiness; full ABDM compliance is scoped based on your facility category and timeline." },
    ]),
  },
  {
    categorySlug: "software-development",
    serviceSlug: "school-management-system",
    metaTitle: "School Management System Software in Karnataka — E26 Media Mangalore",
    metaDescription:
      "School ERP software — admissions, attendance, fees, exams, parent portal, and staff management for Karnataka schools and colleges.",
    heroHighlight: "School Management System",
    intro: [
      "School administrators spend term starts drowning in admission forms, fee receipts, attendance registers, and parent phone calls. School management software automates these workflows and gives parents a portal for fees, homework, and announcements.",
      "E26 Media builds school ERP systems aligned to how Karnataka institutions actually operate — fee structures with instalments, transport routes, exam timetables, and report cards.",
      "Pair with an educational website for admissions marketing plus operational software behind the scenes.",
    ],
    sections: [
      {
        heading: "School ERP capabilities",
        paragraphs: [
          "Student information system, admission workflow, attendance (manual or biometric integration), fee management with receipts and reminders, exam scheduling and marks entry, parent and teacher portals, transport and hostel modules where needed.",
        ],
      },
    ],
    pricingTiers: SW_PRICING,
    deliverables: ["Admission module", "Fee billing", "Parent portal", "Staff roles", "Reports", "Training"],
    whyChoose: ["Education sector focus", "Website + ERP combo", "Kannada/English UI options", "Mangalore support"],
    portfolioSlugs: [],
    relatedSlugs: ["educational-website", "billing-system"],
    faqs: buildPillarFaqs("School Management System", [
      { question: "Can parents pay fees online?", answer: "Yes — Razorpay or bank integration with automatic receipt generation." },
    ]),
  },
  {
    categorySlug: "software-development",
    serviceSlug: "billing-system",
    metaTitle: "Billing & Invoicing Software in Mangalore — GST Billing Systems | E26 Media",
    metaDescription:
      "Custom billing and invoicing software with GST, quotations, payment tracking, and Tally export for Karnataka SMEs and retailers.",
    heroHighlight: "Billing System",
    intro: [
      "Generic billing apps force your business into their template. Custom billing software matches your quotation format, approval chain, GST rules, and Tally export workflow exactly.",
      "E26 Media builds billing systems for distributors, retailers, service businesses, and clinics — integrated with inventory and CRM when you need a single source of truth.",
      "MMART-style retail and ERP clients often start with billing before expanding to full inventory modules.",
    ],
    sections: [
      {
        heading: "Billing features",
        paragraphs: [
          "GST-compliant invoices and credit notes. Quotation-to-invoice conversion. Payment tracking and ageing reports. Customer ledger. PDF and WhatsApp share. Tally export for accountants.",
          "Role-based access — sales creates quotations; finance approves discounts; admin sees all branches.",
        ],
      },
    ],
    pricingTiers: SW_PRICING,
    deliverables: ["Invoice templates", "GST configuration", "User roles", "Reports", "Tally export", "Training"],
    whyChoose: ["Tally integration experience", "Retail and distribution context", "ERP expansion path", "Fixed milestone quotes"],
    portfolioSlugs: ["supermarket"],
    relatedSlugs: ["erp", "inventory-management", "pos-system"],
    faqs: buildPillarFaqs("Billing System", [
      { question: "Does billing sync with inventory?", answer: "Yes — we recommend integration when stock deduction should follow each sale." },
    ]),
  },
  {
    categorySlug: "ai-solutions",
    serviceSlug: "ai-customer-support",
    metaTitle: "AI Customer Support Solutions in Mangalore — 24/7 Intelligent Support | E26 Media",
    metaDescription:
      "AI customer support automation — website chat, WhatsApp bots, ticket deflection, and human handoff. Floriva Gifts chatbot case study.",
    heroHighlight: "AI Customer Support",
    intro: [
      "Customers expect instant answers at 10 PM on Sunday. Hiring round-the-clock support staff is expensive; leaving enquiries unanswered loses sales. AI customer support handles FAQs, order status, and routing — escalating to humans when needed.",
      "E26 Media built Floriva Gifts' website and WhatsApp AI assistants to deflect repetitive product and delivery questions while preserving brand voice.",
      "We design conversation flows, connect to your product catalogue or CRM, and measure deflection rate and customer satisfaction.",
    ],
    sections: [
      {
        heading: "Support automation channels",
        paragraphs: [
          "Website chat widget with branded UI. WhatsApp Business API bots for India's preferred channel. Email triage and suggested replies for support teams. Slack or Teams internal assistants for staff.",
          "Human handoff with full conversation context — no 'please repeat your order number' frustration.",
        ],
      },
    ],
    pricingTiers: AI_PRICING,
    deliverables: ["Conversation design", "Knowledge base setup", "Channel integration", "Handoff rules", "Analytics dashboard", "30-day tuning"],
    whyChoose: ["Floriva live chatbot reference", "WhatsApp API experience", "Practical ROI focus", "Mangalore-based AI team"],
    portfolioSlugs: ["floriva-flower-chatbot", "floriva-whatsapp-chatbot"],
    relatedSlugs: ["ai-chatbots", "ai-automation"],
    faqs: buildPillarFaqs("AI Customer Support", [
      { question: "Will the bot hallucinate wrong answers?", answer: "We ground responses in your approved knowledge base and product data; sensitive flows escalate to humans." },
    ]),
  },
  {
    categorySlug: "ai-solutions",
    serviceSlug: "document-processing",
    metaTitle: "AI Document Processing in Mangalore — Extract & Automate Documents | E26 Media",
    metaDescription:
      "AI document processing — invoice extraction, OCR, contract parsing, and workflow automation for Karnataka businesses drowning in paperwork.",
    heroHighlight: "Document Processing",
    intro: [
      "Teams waste hours retyping data from invoices, application forms, and contracts into spreadsheets and ERP systems. AI document processing extracts structured data with human review for exceptions.",
      "E26 Media implements document AI for finance (invoice matching), HR (resume parsing), logistics (delivery challans), and healthcare (report digitisation) — integrated into your existing software via API.",
      "We select models and pipelines based on accuracy requirements and data sensitivity — cloud APIs or private deployment as needed.",
    ],
    sections: [
      {
        heading: "Document AI use cases",
        paragraphs: [
          "Invoice and receipt extraction to accounting. KYC document verification with field validation. Contract clause highlighting for legal review. Bulk PDF report parsing to database.",
          "Workflow integration — extracted data posts to ERP, CRM, or Google Sheets with approval gates.",
        ],
      },
    ],
    pricingTiers: AI_PRICING,
    deliverables: ["Document type mapping", "Extraction pipeline", "Review UI", "API integration", "Accuracy benchmarking", "Training"],
    whyChoose: ["Business workflow integration", "Accuracy-first approach", "Data privacy options", "Phased pilot programmes"],
    portfolioSlugs: [],
    relatedSlugs: ["ai-automation", "business-automation"],
    faqs: buildPillarFaqs("AI Document Processing", [
      { question: "What accuracy can we expect?", answer: "Pilots include benchmarking on your sample documents; we set human-review thresholds based on results." },
    ]),
  },
  {
    categorySlug: "digital-marketing",
    serviceSlug: "content-marketing",
    metaTitle: "Content Marketing Services in Mangalore & Karnataka — E26 Media",
    metaDescription:
      "Content marketing for Karnataka businesses — blog strategy, SEO content, case studies, and authority building that drives organic leads.",
    heroHighlight: "Content Marketing",
    intro: [
      "Paid ads stop when budget stops; content compounds. Businesses that publish helpful, search-optimised content earn trust and inbound leads for years — but only with consistent strategy and quality execution.",
      "E26 Media provides content marketing for Karnataka B2B and local service brands — keyword research, editorial calendars, blog and landing page copy, case studies, and distribution aligned to your sales funnel.",
      "We coordinate with your technical SEO and paid media so content supports rankings and conversion, not vanity traffic.",
    ],
    sections: [
      {
        heading: "Content that drives commercial intent",
        paragraphs: [
          "Service pages expanded with unique depth. Location and industry landing pages. How-to guides that capture mid-funnel researchers. Case studies with measurable outcomes — like Abrar Caterers and Lamiya Alkhaleej narratives.",
          "Content briefs tied to keyword opportunity and sales objections your team hears on calls.",
        ],
      },
    ],
    pricingTiers: MKT_PRICING,
    deliverables: ["Content audit", "Editorial calendar", "SEO briefs", "Published articles", "Performance reporting", "Quarterly strategy review"],
    whyChoose: ["Technical SEO integration", "Real case study assets", "Karnataka market context", "No AI-slop filler content"],
    portfolioSlugs: ["brightleaf", "abrar-caterers"],
    relatedSlugs: ["local-seo", "google-ads"],
    faqs: buildPillarFaqs("Content Marketing", [
      { question: "Do you write content in-house?", answer: "Yes — strategists and writers collaborate with your subject experts for accuracy." },
    ]),
  },
  {
    categorySlug: "cloud-solutions",
    serviceSlug: "cloud-migration",
    metaTitle: "Cloud Migration Services in Mangalore — AWS, Azure, GCP | E26 Media",
    metaDescription:
      "Cloud migration consulting and execution in Karnataka. Move servers, apps, and databases to AWS, Azure, or Google Cloud with minimal downtime.",
    heroHighlight: "Cloud Migration",
    intro: [
      "On-premise servers mean capacity guessing, hardware refresh cycles, and disaster recovery anxiety. Cloud migration moves workloads to elastic infrastructure — but rushed migrations cause downtime and cost surprises.",
      "E26 Media plans and executes cloud migrations for Karnataka businesses — assessment, architecture design, phased cutover, and post-migration optimisation.",
      "We work with AWS, Azure, and GCP depending on your stack, compliance needs, and team familiarity.",
    ],
    sections: [
      {
        heading: "Migration methodology",
        paragraphs: [
          "Discover — inventory applications, dependencies, and data volumes. Plan — target architecture, TCO comparison, and rollback strategy. Migrate — pilot non-critical workloads first, then production with maintenance windows.",
          "Optimise — right-size instances, reserved capacity, and monitoring alerts to prevent bill shock.",
        ],
      },
    ],
    pricingTiers: CLOUD_PRICING,
    deliverables: ["Migration assessment", "Architecture diagram", "Runbook", "Cutover execution", "Monitoring setup", "Hypercare period"],
    whyChoose: ["Multi-cloud experience", "Phased risk reduction", "Cost transparency", "Mangalore consultation available"],
    portfolioSlugs: ["floriva-gifts"],
    relatedSlugs: ["cloud-hosting", "aws-solutions"],
    faqs: buildPillarFaqs("Cloud Migration", [
      { question: "How long will migration take?", answer: "Simple websites: days. Multi-app environments: weeks to months depending on dependencies and compliance." },
    ]),
  },
  {
    categorySlug: "ui-ux-design",
    serviceSlug: "website-ui-design",
    metaTitle: "Website UI Design in Mangalore — Conversion-Focused Web Design | E26 Media",
    metaDescription:
      "Website UI design services in Mangalore. Wireframes, high-fidelity mockups, and developer-ready Figma files for marketing and product sites.",
    heroHighlight: "Website UI Design",
    intro: [
      "Great development cannot fix weak design. Website UI design defines how users perceive your brand, find information, and convert — before a single line of code is written.",
      "E26 Media designs marketing websites, landing pages, and product marketing sites with mobile-first layouts, accessibility basics, and developer handoff in Figma.",
      "Design-only engagements are available if you have an in-house dev team; we also design-and-build end-to-end.",
    ],
    sections: [
      {
        heading: "Our UI design process",
        paragraphs: [
          "Research competitors and audience. Wireframe key pages for approval. High-fidelity UI with your brand colours, typography, and imagery direction. Interactive prototype for stakeholder testing. Figma dev handoff with spacing, components, and export assets.",
        ],
      },
    ],
    pricingTiers: UX_PRICING,
    deliverables: ["Wireframes", "UI mockups", "Mobile + desktop", "Figma file", "Style guide", "Revision rounds"],
    whyChoose: ["Design + dev under one roof", "Conversion-focused layouts", "Real portfolio references", "Karnataka client collaboration"],
    portfolioSlugs: ["lamiya-alkhaleej", "cleanpro"],
    relatedSlugs: ["brand-identity", "corporate-website"],
    faqs: buildPillarFaqs("Website UI Design", [
      { question: "Design only without development?", answer: "Yes — we deliver Figma files and specs for your developers." },
    ]),
  },
];
