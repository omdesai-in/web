export type EvidenceItem = {
  title: string;
  image: string;
  caption: string;
};

export type MetricItem = {
  value: string;
  descriptor: string;
  linkTarget: string;
};

export type ExperienceSectionContent = {
  id: string;
  label: string;
  headline: string;
  context: string;
  disclosure?: string;
  videoKey: string;
  mediaPosition: "left" | "right";
  evidence: [EvidenceItem, EvidenceItem, EvidenceItem];
  referenceMetrics: string[];
};

export const identity = {
  name: "Om Desai",
  roleLabel: "FOUNDER'S ASSOCIATE CANDIDATE",
  email: "myperom@gmail.com",
  linkedin: "https://www.linkedin.com/in/omdesai-in/",
};

export const navigation = {
  home: "OM DESAI",
  links: [
    { label: "Work", href: "#proven-results", kind: "anchor" as const },
    { label: "Resume", href: "documents/om-desai-lexi-resume.pdf", kind: "asset" as const },
    { label: "Contact", href: "#contact", kind: "anchor" as const },
  ],
};

export const hero = {
  eyebrow: "FOUNDER'S ASSOCIATE CANDIDATE",
  headline: "Give me the unclear problem. I'll find the next move.",
  supporting:
    "I research unfamiliar problems, make complex ideas easier to act on, and keep the follow-through moving until the work is useful.",
  primaryAction: { label: "VIEW PROOF OF WORK", href: "#proven-results" },
  secondaryAction: { label: "WATCH MY INTRODUCTION", videoKey: "introduction" },
  image: "hero/om-desai-hero.webp",
};

export const strengths = {
  marker: "HOW I WORK",
  headline: "Three habits behind the work.",
  supporting: "The projects differ, but the way I approach them stays consistent.",
  items: [
    {
      id: "taking-initiative",
      title: "Taking Initiative",
      copy: "I do not wait for a perfect brief. I identify the useful first move, create something concrete, and use it to improve the direction.",
      vector: "vectors/taking-initiative.svg",
    },
    {
      id: "ownership",
      title: "Ownership",
      copy: "I stay with the work beyond the visible deliverable, including coordination, follow-ups, fixes, and the less glamorous steps needed to close the loop.",
      vector: "vectors/ownership.svg",
    },
    {
      id: "curiosity",
      title: "Curiosity",
      copy: "I ask questions until I understand the user, the system, and the constraint well enough to make a better decision.",
      vector: "vectors/curiosity.svg",
    },
  ],
};

export const provenResults = {
  marker: "PROVEN RESULTS",
  headline: "Work that reached people, not just a final folder.",
  supporting: "Selected outcomes from projects I built, operated, demonstrated, or improved.",
  metrics: [
    { value: "255", descriptor: "students used the placement platform", linkTarget: "#cyfj" },
    {
      value: "70+",
      descriptor: "applications managed across three cohorts",
      linkTarget: "#ancient-intelligence-lab",
    },
    {
      value: "60+",
      descriptor: "people coordinated during one placement event",
      linkTarget: "#iste-placement-leadership",
    },
    {
      value: "3 to 15",
      descriptor: "students reached after expanding a placement learning module",
      linkTarget: "#iste-placement-leadership",
    },
  ] satisfies MetricItem[],
};

export type EmailContentBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "orderedList"; items: string[] }
  | { kind: "unorderedList"; items: string[] }
  | { kind: "signature" };

export type LexiEmailArtifact = {
  heading: string;
  purpose: string;
  prospectContext: string;
  subject: string;
  body: EmailContentBlock[];
  nextAction: string;
  researchRationale: string;
};

export const khaitanDisclosure =
  "This is an independent candidate exercise created by Om Desai. It was not commissioned, reviewed, or approved by Lexi or Khaitan & Co. No outreach was sent, no demo took place, and no commercial result is claimed.";

export const khaitanArtifactStatus = {
  company: "Khaitan & Co",
  hypotheticalProspect: "Sanjay Khan Nagra",
  roleContext: "Partner working across Venture Capital, Tech M&A, and Fintech",
  exercisePurpose:
    "Show how research can lead to relevant outreach, a controlled next step, and a concise founder update",
  informationBasis: "Publicly available information from Khaitan & Co and Lexi",
  scenarioBoundary: "Every message below is a writing simulation. Any post-demo context is hypothetical.",
};

export const khaitanProspectResearch = {
  whyKhaitan:
    "Khaitan & Co is a credible prospect for this exercise because its M&A practice covers domestic and international transactions across the M&A spectrum. Its work creates a relevant environment for document review, issue extraction, comparison, due diligence, and drafting workflows.",
  whySanjay:
    "Khaitan & Co publicly describes Sanjay Khan Nagra as a Partner in its Venture Capital, Tech M&A, and Fintech practice groups. His work with emerging technology sectors makes him a relevant hypothetical recipient for a practical conversation about legal AI adoption.",
  whyNotGenericIntro:
    "The outreach does not claim that Lexi can transform the entire firm immediately. It connects the prospect's Tech M&A context to one controlled matter where the team could test a connected workflow:",
  whyNotGenericItems: [
    "Review transaction documents",
    "Extract and compare key issues in a table",
    "Draft from lawyer-approved positions",
    "Keep a lawyer responsible for review and final judgment",
  ],
  sources: [
    {
      label: "Khaitan & Co Mergers and Acquisitions practice",
      href: "https://www.khaitanco.com/expertise/mergersandacquisitions",
    },
    {
      label: "Sanjay Khan Nagra profile",
      href: "https://www.khaitanco.com/people/sanjay-khan-nagra",
    },
    { label: "Lexi for law firms", href: "https://www.getlexi.io/solutions/law-firms" },
    { label: "Lexi website", href: "https://www.getlexi.io/" },
  ],
};

export const khaitanEmails: LexiEmailArtifact[] = [
  {
    heading: "1. Cold outreach email",
    purpose:
      "Earn a short discovery conversation by connecting Lexi to one specific Tech M&A workflow rather than presenting a broad list of AI features.",
    prospectContext:
      "Sanjay Khan Nagra is the hypothetical recipient because his publicly stated practice includes Tech M&A, Venture Capital, Fintech, and emerging technology sectors. The email assumes no prior relationship.",
    subject: "One practical Lexi pilot for a Tech M&A matter",
    body: [
      { kind: "paragraph", text: "Hi Sanjay," },
      {
        kind: "paragraph",
        text: "I came across your work across Tech M&A, venture capital, fintech, and emerging technology sectors at Khaitan & Co.",
      },
      {
        kind: "paragraph",
        text: "Matters like these can require a team to move repeatedly between document review, issue extraction, comparison tables, and drafting, while the context remains spread across multiple files.",
      },
      {
        kind: "paragraph",
        text: "Lexi is designed as an AI legal associate for work such as document review, contract analysis, due diligence, and drafting. Instead of suggesting a broad firm-wide rollout, I would propose testing one controlled workflow on a sanitised Tech M&A matter:",
      },
      {
        kind: "orderedList",
        items: [
          "Review a defined set of transaction documents",
          "Extract key issues into a structured comparison table",
          "Draft from positions approved by the lawyer",
          "Keep lawyer review and final judgment at every stage",
        ],
      },
      {
        kind: "paragraph",
        text: "Would a 20-minute conversation next week be useful to see whether this is relevant to the way your team currently works?",
      },
      { kind: "signature" },
    ],
    nextAction:
      "Secure a 20-minute discovery conversation. The goal is to understand the current workflow before proposing a demo or pilot.",
    researchRationale:
      "The message uses the prospect's public Tech M&A and emerging technology focus to choose a relevant workflow. It avoids an unsupported time-saving promise, does not suggest replacement of legal judgment, and proposes a narrow test rather than a firm-wide adoption decision.",
  },
  {
    heading: "2. Hypothetical post-demo follow-up email",
    purpose:
      "Convert a hypothetical demo into a controlled pilot with a clear scope, safety boundaries, and measurable decision criteria.",
    prospectContext:
      "For this writing simulation only, assume the prospect has seen a short Lexi walkthrough connecting review, tabular analysis, and drafting within one legal matter. No real demo occurred.",
    subject: "Proposed next step: one controlled Tech M&A workflow",
    body: [
      { kind: "paragraph", text: "Hi Sanjay," },
      { kind: "paragraph", text: "Thank you for taking the time to explore the workflow in this hypothetical scenario." },
      {
        kind: "paragraph",
        text: "The most useful next step would not be another broad product presentation. It would be a controlled test on one sanitised matter, with the team deciding what enters the system and a lawyer reviewing every output.",
      },
      { kind: "paragraph", text: "I would suggest the following pilot structure:" },
      {
        kind: "orderedList",
        items: [
          "One defined Tech M&A matter using sanitised or approved documents",
          "One connected workflow from first-pass review to issue table to draft",
          "Agreed review points before any output moves to the next stage",
          "A short evaluation against the team's existing process",
        ],
      },
      { kind: "paragraph", text: "The evaluation can focus on practical questions:" },
      {
        kind: "unorderedList",
        items: [
          "Did the first pass surface the issues the lawyer expected?",
          "What required correction or was missed?",
          "Did the comparison table reduce repetitive manual work?",
          "Was the draft useful as a starting point?",
          "Did the workflow save effort without adding another layer of coordination?",
        ],
      },
      {
        kind: "paragraph",
        text: "If this scope is sensible, I can send a one-page pilot outline for your team to adjust before any documents are selected.",
      },
      { kind: "signature" },
    ],
    nextAction:
      "Obtain permission to send a one-page pilot outline and identify the person who should help define the matter, document set, and review criteria.",
    researchRationale:
      "The follow-up reduces adoption risk by narrowing the scope and making lawyer control explicit. It treats accuracy, confidentiality, correction effort, and workflow fit as questions to test rather than claiming that the product has already solved them.",
  },
  {
    heading: "3. Lower-friction re-engagement email",
    purpose: "Make it easy for a busy prospect to respond without requiring another meeting or a large commitment.",
    prospectContext:
      "For this writing simulation only, assume the post-demo follow-up received no reply. No real outreach or silence occurred.",
    subject: "Should I close this, or send the one-page pilot outline?",
    body: [
      { kind: "paragraph", text: "Hi Sanjay," },
      {
        kind: "paragraph",
        text: "I know this may not be a priority right now, so I wanted to make the next step easier.",
      },
      { kind: "paragraph", text: "Would you prefer that I:" },
      {
        kind: "orderedList",
        items: [
          "Send the one-page outline for a controlled Tech M&A pilot",
          "Revisit this at a later time",
          "Close the conversation for now",
        ],
      },
      {
        kind: "paragraph",
        text: "A one-line reply is enough. If someone else is better placed to assess the workflow, I would also be grateful for the right direction.",
      },
      { kind: "signature" },
    ],
    nextAction:
      "Receive a low-effort directional reply: send the outline, follow up later, close the conversation, or speak with a more relevant person.",
    researchRationale:
      "The message removes the pressure to book another call and gives the prospect control over the next step. It also creates a respectful exit instead of sending repeated reminders with no new value.",
  },
];

export const khaitanFounderUpdate = {
  title: "Khaitan & Co prospect exercise: from research to a controlled pilot hypothesis",
  status: "Independent candidate simulation. No contact was made, no demo occurred, and no customer signal was received.",
  objective:
    "Test whether a research-led approach can turn Lexi's broad capabilities into a relevant conversation for a Tech M&A team and, if interest exists, move that conversation towards one controlled pilot.",
  workCompleted: [
    "Selected Khaitan & Co as a relevant hypothetical law-firm prospect based on its M&A practice.",
    "Selected Sanjay Khan Nagra as the hypothetical recipient based on his publicly stated Tech M&A, Venture Capital, Fintech, and emerging technology work.",
    "Connected Lexi's review, analysis, due diligence, and drafting capabilities to one matter-level workflow.",
    "Drafted cold outreach focused on discovery rather than a generic product pitch.",
    "Drafted a hypothetical post-demo follow-up that proposes a narrow, lawyer-controlled pilot.",
    "Drafted a lower-friction re-engagement message with a clear option to pause or close.",
  ],
  publiclyObserved: [
    "Khaitan & Co describes an M&A practice covering domestic and international transactions across the M&A spectrum.",
    "Sanjay Khan Nagra's public profile connects his practice to Tech M&A, Venture Capital, Fintech, and emerging technology sectors.",
    "Lexi publicly positions its product around legal research, document review, contract analysis, due diligence, and drafting.",
  ],
  hypothesisToValidate:
    "A Tech M&A team may find value in moving from first-pass review to structured issue comparison and drafting within one connected workflow. Likely adoption questions include confidentiality, accuracy, correction effort, lawyer control, and whether the tool removes work instead of adding another coordination step.",
  hypothesisNote: "These are hypotheses, not customer feedback.",
  currentStatus:
    "The prospect logic and message sequence are ready for internal review. Nothing should be sent until Lexi confirms the product claims, approved representation language, target persona, pilot boundaries, and data-handling position.",
  risksAndLimitations: [
    "The exercise relies only on public information and does not reveal the prospect's actual internal workflow.",
    "The selected recipient may not own legal technology evaluation or procurement.",
    "The proposed use case may not reflect the team's most painful or frequent task.",
    "Product, security, confidentiality, and deployment claims require confirmation from Lexi.",
    "A polished demo can create interest without proving day-to-day adoption or output quality.",
    "No response, conversion, time-saving, accuracy, or commercial outcome can be claimed.",
  ],
  recommendedExperiment: [
    "Select one sanitised or otherwise approved matter.",
    "Limit the pilot to one connected workflow: review, issue table, and first draft.",
    "Agree the expected output and lawyer review points before starting.",
    "Keep a qualified lawyer responsible for validation and final judgment.",
    "Compare the pilot with the existing process using agreed measures.",
  ],
  measures: [
    "Time required to reach a usable first pass",
    "Important issues correctly surfaced",
    "Important issues missed",
    "Corrections required before the output is useful",
    "Usefulness of the comparison table",
    "Usefulness of the draft as a starting point",
    "Manual steps removed or added",
    "Lawyer confidence in continuing, changing, or stopping the workflow",
  ],
  immediateNextAction:
    "Ask Lexi's founders to review the prospect choice, product wording, security boundaries, pilot scope, success measures, and sender identity. If approved, use the cold email only as the start of discovery. Adapt the pilot after learning how the prospect's team actually works.",
};

export const experiences: ExperienceSectionContent[] = [
  {
    id: "lexi-exercise",
    label: "LEXI COMMERCIAL EXERCISE",
    headline: "From a memorable product pitch to a clear next step.",
    context:
      "An independent exercise exploring how I would introduce Lexi to a legal team, build momentum after the conversation, and convert customer signals into a useful founder action.",
    disclosure:
      "Independent candidate exercise. No outreach was sent. This work was not commissioned by Lexi or Khaitan & Co.",
    videoKey: "lexiPitch",
    mediaPosition: "right",
    evidence: [
      {
        title: "Product pitch",
        image: "lexi/lexi-product-pitch.webp",
        caption:
          "A Suits-inspired story connecting contract review, tabular analysis, and drafting within one legal matter.",
      },
      {
        title: "Customer communication",
        image: "lexi/lexi-customer-communication.webp",
        caption:
          "Research-led cold outreach, post-demo follow-up, and lower-friction re-engagement for a hypothetical Tech M&A prospect.",
      },
      {
        title: "Founder update",
        image: "lexi/lexi-founder-update.webp",
        caption:
          "A compact internal memo turning customer signals into a concern, experiment, measure, and immediate next action.",
      },
    ],
    referenceMetrics: [],
  },
  {
    id: "ancient-intelligence-lab",
    label: "ANCIENT INTELLIGENCE LAB",
    headline: "I built the program, ran the cohorts, and changed the model when reality demanded it.",
    context:
      "A student-development program built across three cohorts, from more than 70 applications to practical sessions, participant communication, convocation, and completion.",
    videoKey: "ancientIntelligenceLab",
    mediaPosition: "left",
    evidence: [
      {
        title: "Facilitating the sessions",
        image: "ancient-intelligence-lab/ancient-intelligence-lab-session.webp",
        caption: "Direct delivery, communication, and facilitation during a live cohort session.",
      },
      {
        title: "Closing the participant journey",
        image: "ancient-intelligence-lab/ancient-intelligence-lab-convocation.webp",
        caption: "A real cohort reaching completion at convocation.",
      },
      {
        title: "Designing for the people around the participant",
        image: "ancient-intelligence-lab/ancient-intelligence-lab-parent-certificate.webp",
        caption: "Thoughtful communication extended beyond the core session, to parents.",
      },
    ],
    referenceMetrics: ["3 cohorts", "70+ applications", "14 offers", "10 participants", "7 graduates"],
  },
  {
    id: "cyfj",
    label: "CRACK YOUR FIRST JOB",
    headline: "I turned scattered placement information into a product students could actually use.",
    context:
      "A placement-information platform built and operated across three colleges, combining opportunity tracking, deadlines, company context, preparation resources, analytics, and issue resolution.",
    videoKey: "cyfj",
    mediaPosition: "right",
    evidence: [
      {
        title: "Opportunity tracker",
        image: "cyfj/cyfj-opportunity-tracker.webp",
        caption: "A concrete response to scattered opportunities and deadlines.",
      },
      {
        title: "Usage evidence",
        image: "cyfj/cyfj-analytics-overview.webp",
        caption: "Real student reach and observed use.",
      },
      {
        title: "Boarding pass experience",
        image: "cyfj/cyfj-boarding-pass.webp",
        caption: "Attention to the end-user experience and presentation of information.",
      },
    ],
    referenceMetrics: ["255 students", "3 colleges", "2,600 tracked events"],
  },
  {
    id: "iste-placement-leadership",
    label: "ISTE AND PLACEMENT LEADERSHIP",
    headline: "I converted repeated coordination into systems other people could run.",
    context:
      "Research, facilitation, operating documents, event coordination, and learning support designed to help student teams and participants act with less dependence on individual guidance.",
    videoKey: "istePlacement",
    mediaPosition: "left",
    evidence: [
      {
        title: "Facilitation SOP",
        image: "iste-placement-leadership/iste-facilitation-sop.webp",
        caption: "Repeated work converted into a reusable operating system.",
      },
      {
        title: "Coordinating at scale",
        image: "iste-placement-leadership/iste-placement-60-person-event.webp",
        caption: "On-ground execution involving more than 60 people.",
      },
      {
        title: "Operational management",
        image: "iste-placement-leadership/iste-operations-google-sheet.webp",
        caption: "Responsibilities, planning, and follow-through made visible.",
      },
    ],
    referenceMetrics: [
      "30+ student conversations",
      "5 events",
      "60+ people",
      "learning module expanded from 3 to 15 students",
    ],
  },
];

export const closing = {
  headline:
    "If Lexi needs someone who can pick up an unclear priority, create structure, and keep it moving, I would like to talk.",
  actions: [
    { label: "EMAIL OM", href: `mailto:${identity.email}`, kind: "external" as const },
    { label: "VIEW LINKEDIN", href: identity.linkedin, kind: "external" as const },
    {
      label: "DOWNLOAD RESUME",
      href: "documents/om-desai-lexi-resume.pdf",
      kind: "asset" as const,
    },
  ],
};

export const footer = {
  text: "Om Desai · Founder's Associate Candidate · Gujarat, India",
};
