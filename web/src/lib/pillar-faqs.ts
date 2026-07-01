import type { FAQ } from "@/types";

type FaqContext = {
  service: string;
  serviceLower: string;
  city: string;
  region: string;
};

const CITIES = ["Mangalore", "Bengaluru", "Udupi", "Mysuru", "Hubballi", "Mangaluru"];

function pricingFaqs(ctx: FaqContext): FAQ[] {
  return [
    {
      question: `How much does ${ctx.serviceLower} cost in ${ctx.city}?`,
      answer: `Investment depends on scope — features, integrations, timeline, and content volume. After a free consultation at our Kanakanady office or via video call, we provide a fixed quote with milestone payments. No hidden line items.`,
    },
    {
      question: `What is the starting price for ${ctx.serviceLower} in Karnataka?`,
      answer: `Entry-level projects start lower; enterprise-grade builds require larger investment. We share transparent pricing bands during discovery so you can budget realistically before committing.`,
    },
    {
      question: `Do you offer EMI or milestone-based payments?`,
      answer: `Yes. Typical structure: 40% at project kickoff, 30% at design or mid-build approval, 30% at launch. Larger software and app projects can be split across more milestones.`,
    },
    {
      question: `Is a very low quote a red flag for ${ctx.serviceLower}?`,
      answer: `Often yes. Extremely low quotes usually mean templates, no SEO, no support, or junior outsourcing. For business-critical work, invest in quality delivery, documentation, and post-launch support.`,
    },
    {
      question: `Do you charge separately for maintenance after launch?`,
      answer: `We offer optional maintenance retainers covering security updates, backups, content changes, and monitoring. Marketing retainers include monthly reporting and optimisation.`,
    },
    {
      question: `Can I get a ballpark quote before a full discovery call?`,
      answer: `Share your goals, page count or feature list, timeline, and budget range via our contact form or WhatsApp. We respond within 24 business hours with a realistic range and recommended approach.`,
    },
  ];
}

function timelineFaqs(ctx: FaqContext): FAQ[] {
  return [
    {
      question: `How long does a typical ${ctx.serviceLower} project take?`,
      answer: `Focused projects often complete in 3–8 weeks. Complex software, apps, or multi-integration builds typically run 8–16+ weeks. You receive a milestone timeline before development starts.`,
    },
    {
      question: `Can you deliver ${ctx.serviceLower} on an urgent deadline?`,
      answer: `Rush delivery is possible when scope is clear and content is ready. We will flag trade-offs — reduced custom design, phased launches, or additional resources — so you decide with full visibility.`,
    },
    {
      question: `What slows down ${ctx.serviceLower} projects most often?`,
      answer: `Delayed content, unclear approvals, and scope changes mid-build are the top causes. We use weekly demos and written sign-offs to keep momentum.`,
    },
    {
      question: `When can we start after signing?`,
      answer: `Most projects kick off within 5–10 business days after agreement and initial payment, once discovery inputs are scheduled.`,
    },
  ];
}

function processFaqs(ctx: FaqContext): FAQ[] {
  return [
    {
      question: `What is your ${ctx.serviceLower} process from first call to launch?`,
      answer: `Discover → Plan → Design → Build → Launch → Grow. You see staging progress weekly, approve designs before code, and receive training plus documentation at handover.`,
    },
    {
      question: `Will I have a dedicated project manager?`,
      answer: `Yes. Every engagement includes a single point of contact for updates, blockers, and scheduling — plus direct access to designers and engineers during demos.`,
    },
    {
      question: `Do you provide weekly progress updates?`,
      answer: `Yes. Weekly written updates and live staging demos are standard. You always know what was completed, what is next, and what we need from you.`,
    },
    {
      question: `Can we review work before it goes live?`,
      answer: `Absolutely. Staging environments, design approvals, and UAT sign-off are built into our process. Nothing launches without your approval.`,
    },
  ];
}

function localFaqs(ctx: FaqContext): FAQ[] {
  return CITIES.map((city) => ({
    question: `Do you provide ${ctx.serviceLower} in ${city}?`,
    answer: `Yes. We serve ${city} and all of ${ctx.region} via on-site meetings (where practical), video calls, and collaborative tools. Our head office is in Kanakanady, Mangalore.`,
  }));
}

function ownershipFaqs(ctx: FaqContext): FAQ[] {
  return [
    {
      question: `Who owns the source code and assets after ${ctx.serviceLower} delivery?`,
      answer: `You do. Contracts include source code ownership, deployment access, and handover documentation for websites, software, and apps we build for you.`,
    },
    {
      question: `Can another agency take over maintenance later?`,
      answer: `Yes. We document architecture, credentials, and deployment steps so any competent team can maintain the system — though many clients stay with us for continuity.`,
    },
    {
      question: `Do you sign NDAs for ${ctx.serviceLower} projects?`,
      answer: `Yes. NDAs and confidentiality terms are available for sensitive business, healthcare, and proprietary software work.`,
    },
  ];
}

function supportFaqs(ctx: FaqContext): FAQ[] {
  return [
    {
      question: `What support do you offer after ${ctx.serviceLower} goes live?`,
      answer: `30-day post-launch support is included on every project. Ongoing plans cover security patches, uptime monitoring, content updates, and feature enhancements.`,
    },
    {
      question: `How fast do you respond to support requests?`,
      answer: `Critical production issues are prioritised same business day. Standard requests are handled within agreed SLA windows on active maintenance plans.`,
    },
    {
      question: `Can you train our internal team?`,
      answer: `Yes. Handover includes a training session, admin documentation, and recorded walkthroughs where helpful.`,
    },
  ];
}

function contactFaqs(ctx: FaqContext): FAQ[] {
  return [
    {
      question: `How do I book a free consultation for ${ctx.serviceLower}?`,
      answer: `Call +91 8495901407, WhatsApp us, or submit the contact form on this page. Mention '${ctx.service}' and we will prepare relevant case studies before the call.`,
    },
    {
      question: `Can we meet at your Mangalore office?`,
      answer: `Yes. Visit E26 Media at 5th Floor Shalimar Complex, Kanakanady, Mangalore – 575002. Appointments are recommended.`,
    },
    {
      question: `Do you work with international clients?`,
      answer: `Yes. We have delivered for clients in the UAE, Australia, and other markets — with video collaboration and timezone-friendly scheduling.`,
    },
  ];
}

export function buildPillarFaqs(service: string, extras: FAQ[] = []): FAQ[] {
  const ctx: FaqContext = {
    service,
    serviceLower: service.toLowerCase(),
    city: "Mangalore",
    region: "Karnataka",
  };

  const base = [
    ...pricingFaqs(ctx),
    ...timelineFaqs(ctx),
    ...processFaqs(ctx),
    ...localFaqs(ctx),
    ...ownershipFaqs(ctx),
    ...supportFaqs(ctx),
    ...contactFaqs(ctx),
    ...extras,
  ];

  const seen = new Set<string>();
  return base.filter((f) => {
    if (seen.has(f.question)) return false;
    seen.add(f.question);
    return true;
  });
}
