import type { IndustryPillar } from "@/types";
import { buildPillarFaqs } from "@/lib/pillar-faqs";

function pillar(
  slug: string,
  title: string,
  metaDescription: string,
  intro: string[],
  sections: IndustryPillar["sections"],
  automation: string[],
  portfolioSlugs: string[],
  serviceCategorySlugs: string[],
  faqExtras: { question: string; answer: string }[] = []
): IndustryPillar {
  return {
    slug,
    metaTitle: `${title} Technology Solutions in Karnataka — E26 Media`,
    metaDescription,
    heroHighlight: title,
    intro,
    sections,
    automation,
    portfolioSlugs,
    serviceCategorySlugs,
    faqs: buildPillarFaqs(`${title} technology`, faqExtras),
  };
}

export const INDUSTRY_PILLARS: IndustryPillar[] = [
  pillar(
    "healthcare",
    "Healthcare",
    "Healthcare technology in Mangalore: hospital websites, HMS software, patient portals, and local SEO for clinics across Karnataka.",
    [
      "Hospitals, clinics, and diagnostic centres in Mangalore, Udupi, and Bengaluru depend on digital systems patients trust — fast websites, clear doctor directories, appointment flows, and secure data handling.",
      "E26 Media builds healthcare websites and software modules for appointment management, patient communication, and local discovery on Google. We understand that healthcare marketing requires sensitivity, accuracy, and mobile-first design.",
      "Whether you are a multi-specialty hospital or a single-clinic practice, we scope technology that fits your size — not enterprise software you will never use.",
    ],
    [
      {
        heading: "Digital challenges facing healthcare providers in Karnataka",
        paragraphs: [
          "Patients search on mobile before calling — doctor names, specialties, insurance, hours, and directions. Outdated websites and missing Google Business Profile optimisation cost appointments daily.",
          "Front-desk teams juggle phone calls, WhatsApp, and walk-ins without integrated appointment systems. Manual registers create double-bookings and reporting gaps.",
          "Data security and patient privacy expectations are rising — forms, portals, and software must handle information responsibly with clear consent and access controls.",
        ],
      },
      {
        heading: "Healthcare solutions we deliver",
        paragraphs: [
          "Hospital and clinic websites with department pages, doctor profiles, health packages, and enquiry forms. Hospital Management System modules for appointments, billing, and records where scope allows.",
          "Local healthcare SEO — Google Maps rankings, schema markup, and city-specific content for Mangalore and Karnataka markets.",
          "Patient communication automation — appointment reminders via SMS or WhatsApp, post-visit follow-up templates, and review request workflows.",
        ],
      },
      {
        heading: "Why healthcare clients choose E26 Media",
        paragraphs: [
          "Mangalore-based team available for on-site discovery. Experience with healthcare page architecture and fast mobile performance. Honest phasing — website first, HMS modules when operations are ready.",
          "Integration path from marketing site to operational software without switching vendors mid-journey.",
        ],
      },
    ],
    [
      "Online appointment scheduling with SMS/WhatsApp reminders",
      "Patient registration and digital intake forms",
      "Automated follow-up messages after visits",
      "Inventory alerts for pharmacy and consumables",
      "Lab report notification workflows",
      "Google review request automation after discharge",
    ],
    ["lamiya-alkhaleej"],
    ["website-development", "software-development", "digital-marketing"],
    [
      { question: "Can you build a hospital website with online appointments?", answer: "Yes — enquiry forms in phase one; full booking engines with calendar sync in phase two." },
      { question: "Do you develop Hospital Management Software?", answer: "We build HMS modules tailored to clinic or hospital size — appointments, billing, records, and reporting." },
    ]
  ),
  pillar(
    "education",
    "Education",
    "Education technology in Karnataka: school websites, school management systems, admission funnels, and parent portals from E26 Media Mangalore.",
    [
      "Schools, colleges, and training institutes compete for enrollment visibility online. Parents compare institutions on mobile — websites, Google reviews, and social proof before campus visits.",
      "E26 Media delivers educational websites with admission funnels, parent communication portals, and school management software that reduces admin workload on fees, attendance, and announcements.",
      "From Udupi and Mangalore institutions to Bengaluru ed-tech startups, we build systems sized to your student count and budget.",
    ],
    [
      {
        heading: "Technology needs in Karnataka education",
        paragraphs: [
          "Enrollment marketing requires SEO, clear program pages, and fast contact paths. Admin teams need fee collection, attendance, and parent messaging without endless phone calls.",
          "Ed-tech products need MVPs that launch quickly and scale — we support founders with product strategy and engineering.",
        ],
      },
      {
        heading: "Education solutions from E26 Media",
        paragraphs: [
          "Educational institution websites — programs, faculty, facilities, admission forms, and virtual tour galleries. School Management Systems — fees, attendance, exams, parent portals.",
          "Learning portals with course modules, video content, and quizzes for training institutes. UI/UX design for student-friendly interfaces.",
        ],
      },
    ],
    ["Fee payment reminders", "Bulk SMS/email to parents", "Online admission forms", "Exam result publishing portals", "Attendance alert automation", "Event registration workflows"],
    ["lamiya-alkhaleej"],
    ["website-development", "software-development", "ui-ux-design"],
    [{ question: "Can parents pay fees online?", answer: "Yes — Razorpay and other gateways with receipt generation and accounting exports." }]
  ),
  pillar(
    "manufacturing",
    "Manufacturing",
    "Manufacturing software in Karnataka: ERP, inventory, production dashboards, and automation for factories in Mangalore, Hubballi, and Mysuru.",
    [
      "Manufacturers in Karnataka industrial corridors still run on spreadsheets, WhatsApp coordination, and end-of-month reporting — creating stock errors, delayed decisions, and margin leakage.",
      "E26 Media builds ERP, inventory, and production dashboard systems that connect shop floor to management in real time. Tally integration and GST-ready billing are standard for Indian SMEs.",
      "We serve Baikampady, Hubballi, Mysuru, and Mangalore manufacturers with phased rollouts — inventory and billing first, production modules next.",
    ],
    [
      {
        heading: "Manufacturing digital transformation in Karnataka",
        paragraphs: [
          "Inventory inaccuracy drives wrong purchasing and production stops. Manual reporting means leadership decides on stale data. Disconnected systems between warehouse, accounts, and sales create reconciliation nightmares.",
          "Custom ERP tailored to your SKU structure, batches, and units of measure beats forcing generic software that requires expensive configuration.",
        ],
      },
      {
        heading: "Systems we implement for manufacturers",
        paragraphs: [
          "Inventory and warehouse management with multi-location stock. Production planning and shop-floor reporting. Purchase orders and vendor management. B2B customer portals for distributors.",
          "Cloud hosting for remote plant visibility. IT consulting for architecture before large investments.",
        ],
      },
    ],
    ["Low-stock alerts", "Purchase order workflows", "Production scheduling", "Vendor payment tracking", "Quality inspection checklists", "Daily production email reports"],
    ["supermarket"],
    ["software-development", "cloud-solutions", "it-consulting"],
    [{ question: "Can ERP integrate with Tally?", answer: "Yes — API integrations and exports commonly used with Tally in Karnataka SMEs." }]
  ),
  pillar(
    "retail",
    "Retail & Ecommerce",
    "Retail and ecommerce technology in Karnataka: online stores, POS, inventory sync, and marketing for supermarkets and retailers. MMART experience.",
    [
      "Retailers need omnichannel presence — ecommerce, in-store POS, and marketing that drives footfall and online sales. Inventory must stay accurate across channels or overselling damages trust.",
      "E26 Media has built retail and supermarket systems — POS, inventory, and ecommerce for Karnataka operations. Floriva Gifts demonstrates international ecommerce capability.",
      "We integrate POS with websites, automate stock alerts, and run local SEO and paid campaigns for retail brands.",
    ],
    [
      {
        heading: "Retail challenges in Karnataka markets",
        paragraphs: [
          "Cart abandonment on slow mobile checkout. Stock mismatches between shop floor and website. Weak local discovery on Google Maps for multi-branch retailers.",
          "High SKU supermarkets need fast search, barcode workflows, and reliable billing at peak hours.",
        ],
      },
      {
        heading: "Retail technology we deliver",
        paragraphs: [
          "Ecommerce websites with secure checkout, GST invoicing, and shipping rules. POS systems with inventory sync. Performance marketing — Google Ads, Meta Ads, local SEO.",
          "Custom inventory and ERP modules for distributors and supermarket chains.",
        ],
      },
    ],
    ["Abandoned cart emails", "Inventory sync across POS and website", "Automated order status updates", "Customer segmentation for campaigns", "Low-stock purchase reorders", "Daily sales summary to owners"],
    ["supermarket", "floriva-gifts", "alfiya"],
    ["website-development", "software-development", "digital-marketing"],
    [{ question: "Do you build ecommerce websites?", answer: "Yes — custom storefronts with payments, GST, and shipping for India and international markets." }]
  ),
  pillar(
    "hospitality",
    "Hospitality",
    "Hospitality technology in coastal Karnataka: hotel websites, booking integrations, brand design, and local SEO for Mangalore and Udupi properties.",
    [
      "Hotels and resorts along Karnataka's coast depend on direct bookings, stunning visual websites, and Google visibility. OTA commissions erode margin — a strong direct channel matters.",
          "E26 Media builds hospitality websites with gallery-rich UX, booking enquiry flows, and local SEO targeting tourists searching Mangalore, Udupi, and coastal destinations. Brand identity and social campaigns reinforce premium positioning across properties.",
    ],
    [
      {
        heading: "Hospitality digital priorities",
        paragraphs: [
          "Mobile-first galleries and fast load times — tourists browse on phones. Clear booking CTAs and WhatsApp for instant enquiries. Multi-property content management for groups.",
          "Seasonal rate updates and festival campaigns require flexible CMS or managed updates.",
        ],
      },
      {
        heading: "Solutions for hotels and resorts",
        paragraphs: [
          "Hotel and resort websites with room types, amenities, and location content. Booking engine integration or enquiry workflows. Local SEO and Google Ads for high-intent travel searches.",
          "Branding and social creatives for consistent visual identity.",
        ],
      },
    ],
    ["Booking confirmation emails", "Review request automation after checkout", "Seasonal rate update reminders", "Multi-property content workflows", "WhatsApp enquiry routing", "Festival campaign landing pages"],
    ["lamiya-alkhaleej"],
    ["website-development", "branding", "digital-marketing"],
    [{ question: "Can you integrate channel managers?", answer: "We work with your existing channel manager or recommend integrations to avoid double bookings." }]
  ),
  pillar(
    "restaurants",
    "Restaurants",
    "Restaurant website and marketing in Mangalore: menus, catering enquiries, local SEO, and branding. Portfolio: Abrar Caterers.",
    [
      "Restaurants and caterers win on local discovery — Google Maps, reviews, and mouth-watering mobile websites that convert hunger into calls and bookings.",
      "Abrar Caterers trusted E26 Media for website and marketing that increased catering enquiries. We understand event seasonality, menu updates, and WhatsApp-first customer behaviour in Karnataka.",
      "From fine dining to catering businesses, we deliver websites, GBP optimisation, and social campaigns.",
    ],
    [
      {
        heading: "Restaurant digital challenges",
        paragraphs: [
          "Competing for 'caterers in Mangalore' and 'restaurant near me' searches. Menu changes that must publish quickly. Repeat customer engagement beyond walk-ins.",
          "Catering businesses need enquiry forms that capture event date, guest count, and venue — routed instantly to sales staff.",
        ],
      },
      {
        heading: "How we help food and beverage brands",
        paragraphs: [
          "Restaurant websites with menus, galleries, and reservation or catering forms. Google Business Profile optimisation and review strategy. Meta and Google Ads for events and seasons.",
          "Brand identity for new restaurant launches — logo, menu design direction, social templates.",
        ],
      },
    ],
    ["Online catering enquiry forms routed to WhatsApp", "Google review request workflows", "Social post scheduling", "Menu PDF and QR code generation", "Festival promotion automations", "Daily enquiry summary to managers"],
    ["abrar-caterers"],
    ["website-development", "branding", "digital-marketing"],
    [{ question: "Can you help us rank on Google Maps?", answer: "Yes — local SEO, GBP optimisation, citations, and review strategy are core services." }]
  ),
  pillar(
    "real-estate",
    "Real Estate",
    "Real estate websites and CRM in Karnataka: property listings, lead capture, and Google Ads for developers and agents.",
    [
      "Real estate buyers research on mobile — gallery quality, floor plans, location maps, and instant agent contact determine whether you capture the lead or lose it to competitors.",
      "E26 Media builds property websites, listing portals, and CRM integrations for Karnataka developers and agencies. High-intent Google Ads and local SEO drive qualified enquiries.",
      "WhatsApp handoff is critical — we optimise for tap-to-chat from property pages.",
    ],
    [
      {
        heading: "Real estate marketing in Karnataka",
        paragraphs: [
          "Lead quality beats lead volume — forms must qualify budget and timeline. Project launches need campaign landing pages fast. Trust signals — RERA references, testimonials, construction progress galleries.",
          "Agents need CRM assignment so no enquiry sits unanswered.",
        ],
      },
      {
        heading: "Real estate technology we build",
        paragraphs: [
          "Developer and project showcase websites. Searchable listing portals with map views. CRM integration for lead assignment and follow-up. Paid search campaigns with dedicated landing pages.",
        ],
      },
    ],
    ["Lead assignment to agents", "Automated brochure PDF delivery", "Site visit scheduling", "Drip email campaigns for warm leads", "WhatsApp alerts on new enquiries", "Weekly pipeline reports"],
    ["lamiya-alkhaleej", "brightleaf"],
    ["website-development", "software-development", "digital-marketing"],
    [{ question: "Can you build a property listing portal?", answer: "Yes — searchable listings with filters, maps, and admin panels for sales teams." }]
  ),
  pillar(
    "construction",
    "Construction",
    "Construction company websites and project software in Karnataka: portfolios, tender support, and workflow automation for builders.",
    [
      "Construction firms need credible project galleries, tender documentation support, and tools that coordinate site, office, and clients — without drowning in paper and WhatsApp threads.",
      "E26 Media delivers construction corporate websites, project showcase galleries, and workflow automation for approvals, vendor coordination, and client updates.",
      "Branding that communicates stability and scale for infrastructure and residential builders across Karnataka.",
    ],
    [
      {
        heading: "Construction industry digital needs",
        paragraphs: [
          "Project documentation scattered across drives and messages. Clients demanding photo updates and milestone visibility. Vendor coordination and payment tracking on spreadsheets.",
          "Tender submissions require professional company profiles and structured capability statements online.",
        ],
      },
      {
        heading: "Technology for builders",
        paragraphs: [
          "Corporate websites with project portfolios and certification displays. Photo-rich progress galleries. Custom software for project tracking, vendor management, and client portals.",
          "Brand identity for proposals and site signage consistency.",
        ],
      },
    ],
    ["Client progress photo update workflows", "Vendor payment reminder automation", "Tender document checklist alerts", "Site inspection report templates", "Approval chain notifications", "Weekly project summary emails"],
    ["lamiya-alkhaleej"],
    ["website-development", "software-development", "branding"],
    [{ question: "Can you showcase ongoing projects on our website?", answer: "Yes — gallery and case study templates updated as milestones complete." }]
  ),
  pillar(
    "finance",
    "Finance",
    "Financial services technology in Karnataka: corporate websites, client portals, compliance-aware software, and cloud infrastructure.",
    [
      "Financial services firms must project trust online — professional design, clear compliance language, secure client portals, and reliable uptime. Legacy processes slow client reporting and internal operations.",
      "E26 Media builds corporate websites, client reporting portals, and automation connecting spreadsheets, CRM, and accounting tools — with security appropriate to your regulatory context.",
      "IT consulting helps finance firms choose build-vs-buy before large software investments.",
    ],
    [
      {
        heading: "Finance sector technology priorities",
        paragraphs: [
          "Trust and compliance in every public-facing page. Client portals for statements, documents, and secure messaging. Automation reducing manual report compilation.",
          "Cloud migration for reliability and remote access without on-premise server risk.",
        ],
      },
      {
        heading: "Solutions we provide",
        paragraphs: [
          "Corporate and professional services websites. Custom client portals with role-based access. Workflow automation and API integrations. Cloud architecture and migration support.",
        ],
      },
    ],
    ["Monthly client report generation", "Document upload notification workflows", "KYC reminder sequences", "Secure form routing to compliance teams", "Audit log exports", "Backup verification alerts"],
    ["brightleaf"],
    ["software-development", "it-consulting", "cloud-solutions"],
    [{ question: "Do you handle financial compliance requirements?", answer: "We implement security and access controls appropriate to your regulatory guidance — detailed compliance is scoped per project with your advisors." }]
  ),
  pillar(
    "ngos",
    "NGOs",
    "NGO website development in Karnataka: donation flows, impact storytelling, and cost-effective digital presence for nonprofits.",
    [
      "NGOs and social enterprises must tell impact stories clearly, engage donors, and coordinate volunteers — often on limited budgets. A professional website builds donor confidence and grant credibility.",
      "E26 Media builds NGO websites with donation flows, volunteer registration, program pages, and annual report storytelling. Branding that communicates mission authentically.",
      "We scope honestly for nonprofit budgets — phased launches and maintainable CMS over expensive custom builds when appropriate.",
    ],
    [
      {
        heading: "NGO digital challenges",
        paragraphs: [
          "Donor engagement across website, social, and email without dedicated marketing teams. Volunteer coordination on WhatsApp groups. Limited budget for technology but high need for trust signals.",
          "Impact data and stories must update regularly to support fundraising cycles.",
        ],
      },
      {
        heading: "NGO solutions from E26 Media",
        paragraphs: [
          "Mission-driven websites with program architecture, team pages, and transparency reports. Donation integration via Razorpay or partner gateways. Volunteer sign-up and event registration forms.",
          "Low-cost digital marketing — local SEO, social templates, and Google Ad Grants guidance where eligible.",
        ],
      },
    ],
    ["Donation receipt email automation", "Volunteer onboarding sequences", "Event reminder workflows", "Impact newsletter templates", "Grant deadline internal alerts", "Social content calendars"],
    ["lamiya-alkhaleej"],
    ["website-development", "branding", "digital-marketing"],
    [{ question: "Can you integrate online donations?", answer: "Yes — Razorpay and other gateways with receipt emails and donor records." }]
  ),
  pillar(
    "corporate",
    "Corporate",
    "Corporate digital solutions in Karnataka: enterprise websites, ERP/CRM, cloud migration, and IT consulting from E26 Media.",
    [
      "Corporates need brand-consistent digital presence across locations, integrated ERP and CRM systems, and cloud infrastructure that scales without Sunday-night outages.",
      "E26 Media partners with B2B corporates for website redesigns, custom software, cloud migration, and technology roadmaps — from Mangalore to Bengaluru headquarters.",
      "We align engineering with business KPIs, not feature lists disconnected from outcomes.",
    ],
    [
      {
        heading: "Corporate technology challenges",
        paragraphs: [
          "Brand inconsistency across regions and subsidiaries. Multi-location operations on disconnected tools. Integration complexity between legacy and modern systems.",
          "Intranet and client portal needs growing post-pandemic hybrid work patterns.",
        ],
      },
      {
        heading: "Corporate services from E26 Media",
        paragraphs: [
          "Corporate websites and redesigns with multi-language support. ERP and CRM implementation or custom development. Cloud migration and managed infrastructure. Digital transformation consulting.",
        ],
      },
    ],
    ["Cross-department approval workflows", "Executive KPI dashboard emails", "Employee onboarding portals", "Vendor onboarding automation", "Document version control alerts", "Multi-branch reporting consolidation"],
    ["lamiya-alkhaleej", "brightleaf"],
    ["software-development", "it-consulting", "cloud-solutions"],
    [{ question: "Do you work with enterprise procurement processes?", answer: "Yes — we provide SRS documents, milestone billing, and references for vendor evaluation." }]
  ),
  pillar(
    "startups",
    "Startups",
    "Startup technology partner in Mangalore and Bengaluru: MVP development, mobile apps, AI, product strategy, and growth marketing.",
    [
      "Startups need speed, capital efficiency, and a technology partner who advises honestly — MVP scope, stack choices, and when not to over-build before product-market fit.",
      "E26 Media helps founders from Mangalore, Bengaluru, and beyond launch MVPs — web apps, mobile apps, AI features, and growth marketing with milestone funding alignment.",
      "Tawakkal Muslim App and internal AI tools in our portfolio demonstrate shipping ability, not slideware.",
    ],
    [
      {
        heading: "Startup technology priorities",
        paragraphs: [
          "Limited runway demands phased MVPs. Speed to market beats perfect architecture in early stages — but foundations must allow scale without full rewrite.",
          "Founders need one accountable team for product, design, and engineering — not fragmented freelancers.",
        ],
      },
      {
        heading: "How we support founders",
        paragraphs: [
          "MVP web and mobile apps with 8–16 week delivery targets. AI features where they differentiate — chatbots, automation, document processing. Product strategy and startup consulting before code.",
          "Growth marketing once core product validates — landing pages, ads, analytics.",
        ],
      },
    ],
    ["MVP analytics dashboards", "Waitlist and beta signup flows", "App store deployment pipelines", "Growth experiment tracking", "Investor deck data exports", "User onboarding email sequences"],
    ["tawakkal-muslim-app", "floriva-flower-chatbot", "e26-website-chatbot"],
    ["mobile-app-development", "ai-solutions", "it-consulting"],
    [{ question: "Can you work for equity?", answer: "We primarily work on fixed-fee or milestone cash projects; selective partnerships discussed case-by-case." }]
  ),
];

const PILLAR_MAP = new Map(INDUSTRY_PILLARS.map((p) => [p.slug, p]));

export function getIndustryPillar(slug: string): IndustryPillar | null {
  return PILLAR_MAP.get(slug) ?? null;
}
