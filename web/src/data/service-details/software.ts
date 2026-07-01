import type { ServiceDetailEnhancement } from "@/types";
import { buildPillarFaqs } from "@/lib/pillar-faqs";

const SW_PRICING = [
  {
    name: "Module / MVP",
    range: "₹2,00,000 – ₹6,00,000",
    description: "Single module or proof-of-concept.",
    includes: ["SRS", "Staging demos", "Core features", "UAT", "Source handover"],
  },
  {
    name: "Platform",
    range: "₹6,00,000 – ₹20,00,000",
    description: "Multi-module system with integrations.",
    includes: ["Architecture", "Role-based access", "Reporting", "Training", "Warranty"],
  },
  {
    name: "Enterprise",
    range: "₹20,00,000+",
    description: "Multi-branch, compliance, high user volume.",
    includes: ["Dedicated team", "SLA", "Phased rollout", "Documentation"],
  },
];

export const SOFTWARE_DETAIL_ENHANCEMENTS: ServiceDetailEnhancement[] = [
  {
    categorySlug: "software-development",
    serviceSlug: "custom-software",
    metaTitle: "Custom Software Development in Mangalore & Karnataka — E26 Media",
    metaDescription:
      "Custom business software development in Mangalore. Tailored apps for workflows spreadsheets cannot handle. ERP, CRM, billing — scoped honestly with source code ownership.",
    heroHighlight: "Custom Software",
    intro: [
      "When off-the-shelf software forces your team into workarounds, custom development returns control — workflows match how you operate, data lives in one place, and reports reflect reality in real time.",
      "E26 Media builds custom software for Karnataka manufacturers, retailers, distributors, healthcare operators, and service businesses. We start with process mapping, deliver a written SRS, and show weekly progress on staging — never a black box.",
      "You own the source code. We document architecture, deployment, and admin procedures so you are never hostage to a vendor.",
    ],
    sections: [
      {
        heading: "Problems custom software solves",
        paragraphs: [
          "Duplicate data entry across WhatsApp, Excel, and accounting tools. No single view of inventory, orders, or customer history. Manual approvals slowing operations. Reports that take days to compile.",
          "Custom software replaces fragmentation with one system — or integrates existing tools through APIs when full replacement is unnecessary.",
        ],
      },
      {
        heading: "Our custom software delivery model",
        paragraphs: [
          "Discovery workshops with the people who do the work daily — not only management. SRS with modules, user roles, acceptance criteria, and fixed milestone pricing.",
          "Agile sprints with demo every week. UAT with your team before production. Training and hypercare after launch.",
        ],
      },
      {
        heading: "Technology choices",
        paragraphs: [
          "Node.js and PostgreSQL for web platforms; React admin panels; mobile companions in Flutter when field staff need apps. Cloud on AWS or Azure with automated backups.",
          "Integrations with Tally, Razorpay, SMS gateways, WhatsApp APIs, and legacy systems via documented REST APIs.",
        ],
      },
    ],
    pricingTiers: SW_PRICING,
    deliverables: ["SRS document", "Staging environment", "Production deployment", "Source code", "API docs", "Admin training"],
    whyChoose: ["Honest build-vs-buy advice", "Weekly demos", "Karnataka SME context", "Source ownership", "Mangalore office"],
    portfolioSlugs: ["supermarket", "restaurant-app"],
    relatedSlugs: ["erp", "crm", "business-automation"],
    faqs: buildPillarFaqs("Custom Software", [
      { question: "Custom software vs SaaS?", answer: "SaaS when standard workflows fit; custom when your process is your competitive advantage or integrations are unique." },
    ]),
  },
  {
    categorySlug: "software-development",
    serviceSlug: "erp",
    metaTitle: "ERP Software Development in Mangalore & Karnataka — E26 Media",
    metaDescription:
      "Custom ERP development for Karnataka SMEs. Finance, inventory, procurement, production — integrated operations software. Tally integration available.",
    heroHighlight: "ERP",
    intro: [
      "ERP unifies finance, inventory, procurement, production, and reporting — replacing spreadsheets and disconnected tools with one source of truth. For growing Karnataka manufacturers and distributors, that visibility is the difference between reactive firefighting and planned growth.",
      "E26 Media builds ERP modules tailored to your operations — not forced configuration of generic software. We integrate with Tally and accounting tools common in Indian SMEs.",
      "Phased rollout is standard: start with inventory and billing, add production and HR modules as adoption proves ROI.",
    ],
    sections: [
      {
        heading: "ERP modules we implement",
        paragraphs: [
          "Inventory and warehouse — multi-location stock, batch tracking, low-stock alerts. Purchase and vendor management. Sales orders and invoicing with GST. Production planning for manufacturers. Financial summaries and dashboards.",
          "Role-based access — warehouse staff see stock; finance sees margins; leadership sees KPIs.",
        ],
      },
      {
        heading: "ERP for Karnataka manufacturing and distribution",
        paragraphs: [
          "Baikampady, Hubballi, and Mysuru industrial clients need shop-floor to office connectivity. We build dashboards that replace end-of-month spreadsheet chaos.",
          "Mobile-friendly stock checks and approval flows for managers on the move.",
        ],
      },
      {
        heading: "Integration and migration",
        paragraphs: [
          "Import from Excel with validation. Tally export for accounting. API hooks for ecommerce and POS when you sell online and in-store.",
        ],
      },
    ],
    pricingTiers: SW_PRICING,
    deliverables: ["Process mapping", "Module-wise SRS", "Staging ERP", "Data migration", "Training", "Documentation"],
    whyChoose: ["Tally integration experience", "Phased MVP approach", "Manufacturing context", "Weekly demos"],
    portfolioSlugs: ["supermarket"],
    relatedSlugs: ["inventory-management", "custom-software", "billing-system"],
    faqs: buildPillarFaqs("ERP Software", [
      { question: "Custom ERP vs SAP/Odoo?", answer: "Custom when mid-size operations need fit without enterprise cost; we advise honestly based on user count and complexity." },
      { question: "Can ERP integrate with Tally?", answer: "Yes — common for Karnataka SMEs using Tally for statutory accounting." },
    ]),
  },
  {
    categorySlug: "software-development",
    serviceSlug: "crm",
    metaTitle: "CRM Software Development in Mangalore — Custom CRM Solutions | E26 Media",
    metaDescription:
      "Custom CRM development in Mangalore. Lead tracking, pipeline, quotations, and follow-up automation for Karnataka sales teams. Integrated with your website and WhatsApp.",
    heroHighlight: "CRM",
    intro: [
      "Leads slip through cracks when they live in personal WhatsApp chats and notebooks. A CRM built for your sales process ensures every enquiry is captured, assigned, followed up, and reported.",
      "E26 Media develops custom CRM systems — lead capture from website forms, Google Ads, and walk-ins; pipeline stages matching how you actually sell; quotation and proposal tracking; activity history per customer.",
      "Integrate with your existing website, email, and optional WhatsApp notifications for instant lead alerts to sales reps.",
    ],
    sections: [
      {
        heading: "CRM features for Karnataka B2B sales",
        paragraphs: [
          "Lead source tracking — know which channel delivers revenue. Assignment rules by territory or product. Follow-up reminders and overdue alerts. Quotation builder with approval workflow.",
          "Dashboards for conversion rates, pipeline value, and rep performance.",
        ],
      },
      {
        heading: "CRM + marketing alignment",
        paragraphs: [
          "Website forms feed CRM automatically. Retargeting lists from CRM segments. Closed-loop reporting from ad spend to closed deal when data discipline is maintained.",
        ],
      },
    ],
    pricingTiers: SW_PRICING,
    deliverables: ["Lead capture integration", "Pipeline configuration", "User roles", "Reports", "Mobile-friendly UI", "Training"],
    whyChoose: ["Custom fit vs forced Salesforce config", "Website integration", "WhatsApp alert options", "Mangalore support"],
    portfolioSlugs: ["brightleaf"],
    relatedSlugs: ["custom-software", "business-automation"],
    faqs: buildPillarFaqs("CRM Software", [
      { question: "Custom CRM vs Zoho/HubSpot?", answer: "Custom when your sales process is unique; SaaS when standard pipelines suffice and budget is tight." },
    ]),
  },
  {
    categorySlug: "software-development",
    serviceSlug: "inventory-management",
    metaTitle: "Inventory Management Software in Mangalore & Karnataka — E26 Media",
    metaDescription:
      "Inventory and stock management software for Karnataka retailers, warehouses, and supermarkets. Multi-location, POS sync, low-stock alerts. MMART-style retail systems.",
    heroHighlight: "Inventory Management",
    intro: [
      "Stockouts lose sales; overstock ties up cash. Inventory software gives accurate counts across warehouse, shop floor, and ecommerce — with alerts before you run dry.",
      "E26 Media builds inventory systems for retailers, supermarkets, distributors, and manufacturers — including multi-location Karnataka operations like MMART Supermarket class projects.",
      "Sync with POS, barcode scanning, purchase orders, and supplier management in one platform.",
    ],
    sections: [
      {
        heading: "Inventory system capabilities",
        paragraphs: [
          "Real-time stock levels by SKU and location. Low-stock and expiry alerts. Purchase order workflows with vendor history. Stock transfer between branches. Barcode and label printing support.",
          "Integration with POS and ecommerce so online and in-store stock stay aligned.",
        ],
      },
      {
        heading: "Retail and warehouse in Karnataka",
        paragraphs: [
          "High SKU count supermarkets need fast search and batch updates. Distributors need vehicle loading and route delivery tracking. We scope for your operational reality.",
        ],
      },
    ],
    pricingTiers: SW_PRICING,
    deliverables: ["SKU catalogue setup", "Multi-location config", "Alert rules", "POS integration", "Reports", "Training"],
    whyChoose: ["Retail portfolio experience", "POS sync capability", "Phased rollout", "Mangalore-based team"],
    portfolioSlugs: ["supermarket"],
    relatedSlugs: ["erp", "pos-system", "custom-software"],
    faqs: buildPillarFaqs("Inventory Management Software", [
      { question: "Can inventory sync with my POS?", answer: "Yes — we integrate common POS and ecommerce platforms." },
    ]),
  },
  {
    categorySlug: "software-development",
    serviceSlug: "business-automation",
    metaTitle: "Business Automation Software in Mangalore — Workflow Automation | E26 Media",
    metaDescription:
      "Business process automation in Mangalore. Replace manual approvals, notifications, and data entry with automated workflows. Integrate WhatsApp, email, and your existing tools.",
    heroHighlight: "Business Automation",
    intro: [
      "Automation removes repetitive work — approval chains, status notifications, report generation, data sync between systems — so your team focuses on customers and decisions.",
      "E26 Media maps your manual workflows, identifies high-ROI automation candidates, and builds reliable systems with logging and human override when needed.",
      "Common in Karnataka SMEs: enquiry routing, invoice reminders, inventory alerts, fee payment reminders for schools, and appointment confirmations for clinics.",
    ],
    sections: [
      {
        heading: "Automation opportunities we implement",
        paragraphs: [
          "Form submission → CRM → WhatsApp alert to sales. Invoice due → email + SMS reminder. Low stock → purchase request to manager. Leave approval → HR notification chain.",
          "Scheduled reports to leadership email every Monday — no manual export.",
        ],
      },
      {
        heading: "Tools and approach",
        paragraphs: [
          "Custom Node.js automation, Zapier-style integrations where appropriate, WhatsApp Business API, and webhooks to Tally, Google Sheets, and internal databases.",
          "We start small — one workflow with measurable hours saved — then expand.",
        ],
      },
    ],
    pricingTiers: [
      {
        name: "Single Workflow",
        range: "₹75,000 – ₹2,50,000",
        description: "One high-impact automation end-to-end.",
        includes: ["Process map", "Build", "Testing", "Documentation"],
      },
      {
        name: "Automation Programme",
        range: "₹2,50,000 – ₹8,00,000",
        description: "Multiple workflows and integrations.",
        includes: ["Audit", "Priority roadmap", "Dashboard", "Training"],
      },
      {
        name: "Ongoing",
        range: "Monthly retainer",
        description: "New workflows and monitoring.",
        includes: ["Support", "New automations", "Monitoring"],
      },
    ],
    deliverables: ["Workflow documentation", "Automated triggers", "Admin dashboard", "Error logging", "Training"],
    whyChoose: ["ROI-first scoping", "WhatsApp integration", "Works with existing tools", "Mangalore team"],
    portfolioSlugs: ["e26-website-chatbot", "floriva-whatsapp-chatbot"],
    relatedSlugs: ["custom-software", "ai-automation"],
    faqs: buildPillarFaqs("Business Automation", [
      { question: "Automation vs full custom software?", answer: "Automation connects and orchestrates existing tools; custom software replaces core operations — we recommend the smallest solution that works." },
    ]),
  },
  {
    categorySlug: "software-development",
    serviceSlug: "pos-system",
    metaTitle: "POS System Development in Mangalore — Retail Point of Sale Software | E26 Media",
    metaDescription:
      "Custom POS software in Mangalore for retail, supermarkets, and restaurants. Billing, inventory sync, GST invoicing. Experience with supermarket retail systems.",
    heroHighlight: "POS System",
    intro: [
      "A modern POS system is the front line of retail — fast billing, accurate inventory deduction, GST-compliant receipts, and sync with your back office. Slow or unreliable POS means queues, stock errors, and lost revenue.",
      "E26 Media builds POS solutions for Karnataka retailers and supermarkets — including till interfaces, barcode scanning, multi-counter support, and integration with inventory and ecommerce.",
      "MMART Supermarket class projects inform our understanding of high-SKU retail environments in Mangalore.",
    ],
    sections: [
      {
        heading: "POS features for Indian retail",
        paragraphs: [
          "GST invoicing and bill formats. Barcode and SKU search. Discounts and promotions. Multi-payment — cash, UPI, card. End-of-day reports. User roles for cashiers and managers.",
          "Inventory sync — every sale updates stock in real time across tills and warehouse.",
        ],
      },
      {
        heading: "POS + ecommerce omnichannel",
        paragraphs: [
          "When you sell in-store and online, POS and ecommerce must share one inventory pool. We build integrations preventing oversell and enabling click-and-collect workflows.",
        ],
      },
    ],
    pricingTiers: SW_PRICING,
    deliverables: ["POS UI", "Billing engine", "Inventory sync", "Reports", "Hardware guidance", "Training"],
    whyChoose: ["Supermarket retail experience", "GST-ready billing", "Inventory integration", "Mangalore support"],
    portfolioSlugs: ["supermarket"],
    relatedSlugs: ["inventory-management", "erp", "custom-software"],
    faqs: buildPillarFaqs("POS System", [
      { question: "Does POS work with barcode scanners?", answer: "Yes — we support standard USB/Bluetooth scanners and label printers common in Indian retail." },
    ]),
  },
];
