export type EvidenceFit = "cover" | "contain";

export type EvidenceDetailType = "lightbox" | "customer-communication" | "founder-update";

export type EvidenceItem = {
  id: string;
  title: string;
  image: string;
  alt: string;
  description: string;
  actionLabel?: string;
  fit: EvidenceFit;
  focalPosition?: string;
  detailType: EvidenceDetailType;
};

export type MetricItem = {
  value: string;
  descriptor: string;
  linkTarget: string;
};

export type ExperienceStory = {
  situationAndResponsibility: string;
  actions: [string, string, string];
  resultAndLesson: string;
  relevance: string;
};

export type ExperienceSectionContent = {
  id: string;
  label: string;
  headline: string;
  story: ExperienceStory;
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
  headline: "I turn unclear priorities into research, systems, and next actions.",
  supporting:
    "I learn how a problem works, make it concrete, and stay close to execution until people can use the result.",
  primaryAction: { label: "VIEW PROOF OF WORK", href: "#proven-results" },
  secondaryAction: { label: "WATCH MY INTRODUCTION", videoKey: "introduction" },
  image: "hero/om-desai-hero.webp",
};

export const strengths = {
  marker: "HOW I WORK",
  headline: "How I move unclear work forward.",
  supporting: "The four projects below are different, but the operating pattern is the same.",
  items: [
    {
      id: "taking-initiative",
      title: "Taking Initiative",
      copy: "I look for the first useful move. That has meant building a placement tracker from recurring student questions, designing a cohort from scratch, and creating a commercial exercise before being asked.",
      vector: "vectors/taking-initiative.svg",
    },
    {
      id: "ownership",
      title: "Ownership",
      copy: "I stay with the work after the visible deliverable:running sessions, coordinating people, updating information, resolving issues, and closing the loop.",
      vector: "vectors/ownership.svg",
    },
    {
      id: "curiosity",
      title: "Curiosity",
      copy: "I speak with users, study the workflow, and test my assumptions before deciding what should be built or communicated.",
      vector: "vectors/curiosity.svg",
    },
  ],
};

export const provenResults = {
  marker: "PROVEN RESULTS",
  headline: "Evidence that the work reached real people.",
  supporting: "Selected outcomes from projects I built, operated, or improved.",
  metrics: [
    { value: "255", descriptor: "students accessed the placement platform", linkTarget: "#cyfj" },
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
      value: "3 → 15",
      descriptor: "students reached after expanding one learning module",
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
    headline: "I turned a legal-AI pitch into a realistic path from first conversation to pilot.",
    story: {
      situationAndResponsibility:
        "Lexi solves several connected legal workflows, but a prospect still needs a simple reason to care and a low-risk way to begin. As an independent candidate exercise, I chose a relevant Tech M&A prospect, studied the public context, and designed the commercial journey I would want a founder to review.",
      actions: [
        "Built a concise, Suits-inspired pitch that connects contract review, structured analysis, and drafting within one legal matter.",
        "Researched Khaitan & Co and created a three-message sequence: cold outreach, lower-friction follow-up, and a hypothetical post-demo follow-up.",
        "Converted the scenario into a founder update with the key assumptions, risks, proposed pilot, measures, and immediate next action.",
      ],
      resultAndLesson:
        "The result is not a claimed sale. It is a complete, reviewable path from prospect research to a controlled pilot hypothesis. The exercise showed me that selling an unfamiliar product is less about listing features and more about choosing one credible problem, reducing the next commitment, and making the open questions visible.",
      relevance:
        "I can learn an unfamiliar product, make it relevant to a specific prospect, and turn uncertainty into a testable next step for the founders.",
    },
    disclosure:
      "Independent candidate exercise. No outreach was sent. This work was not commissioned by Lexi or Khaitan & Co.",
    videoKey: "lexiPitch",
    mediaPosition: "right",
    evidence: [
      {
        id: "lexi-product-pitch",
        title: "Product pitch",
        image: "lexi/lexi-product-pitch.webp",
        alt: "Designed frame from the Suits-inspired Lexi product pitch",
        description:
          "The pitch makes three connected Lexi capabilities understandable through one legal matter instead of presenting an abstract feature list.",
        actionLabel: "View full image",
        fit: "contain",
        detailType: "lightbox",
      },
      {
        id: "lexi-customer-communication",
        title: "Customer communication",
        image: "lexi/lexi-customer-communication.webp",
        alt: "Preview of the three-message cold outreach, follow-up, and re-engagement sequence for Khaitan & Co",
        description:
          "The three-message sequence moves from relevance, to a lower-friction response, to a controlled pilot without implying that real outreach or a demo occurred.",
        actionLabel: "Read the full sequence",
        fit: "contain",
        detailType: "customer-communication",
      },
      {
        id: "lexi-founder-update",
        title: "Founder update",
        image: "lexi/lexi-founder-update.webp",
        alt: "Preview of the founder update memo summarising the Khaitan & Co exercise",
        description:
          "The memo gives a founder the decision context: what is known, what remains an assumption, what could be tested, and what should happen next.",
        actionLabel: "Read the founder update",
        fit: "contain",
        detailType: "founder-update",
      },
    ],
    referenceMetrics: [],
  },
  {
    id: "ancient-intelligence-lab",
    label: "ANCIENT INTELLIGENCE LAB",
    headline: "I built a student program, operated three cohorts, and changed the model when participation became difficult.",
    story: {
      situationAndResponsibility:
        "First-year students wanted a space to reflect on their confidence, ambitions, and choices but conversation alone was not enough to create progress. I founded Ancient Intelligence Lab and owned the participant journey from applications and selection to sessions, communication, adaptation, and convocation.",
      actions: [
        "Managed more than 70 applications, issued 14 offers, and brought 10 participants into three small cohorts.",
        "Facilitated practical work around confidence, creativity, and courage, including reflective questions, participant demonstrations, and independently organised activities.",
        "Changed the original discussion-led format into task- and challenge-based participation when shared availability made the first model difficult to sustain.",
      ],
      resultAndLesson:
        "Seven participants completed the program. More importantly, running the cohorts taught me to separate the purpose of a program from its first delivery format: when the format stopped fitting participants’ reality, I changed the mechanism while protecting the intended outcome.",
      relevance:
        "I can build a people-focused initiative from zero, operate the unglamorous details, notice when the model is failing, and adapt without losing the objective.",
    },
    disclosure: "Selected facilitation details are intentionally omitted to protect participant privacy.",
    videoKey: "ancientIntelligenceLab",
    mediaPosition: "left",
    evidence: [
      {
        id: "ail-facilitating-sessions",
        title: "Facilitating the sessions",
        image: "ancient-intelligence-lab/ancient-intelligence-lab-session.webp",
        alt: "Om facilitating a live cohort session at a classroom whiteboard",
        description:
          "I did not only design the program; I facilitated the sessions and observed where participants engaged, hesitated, or needed a different format.",
        actionLabel: "View full image",
        fit: "cover",
        focalPosition: "50% 18%",
        detailType: "lightbox",
      },
      {
        id: "ail-closing-participant-journey",
        title: "Closing the participant journey",
        image: "ancient-intelligence-lab/ancient-intelligence-lab-convocation.webp",
        alt: "Five participants smiling together at the Ancient Intelligence Lab convocation",
        description:
          "Seven of the ten participants who began completed the program. Convocation gave that journey a deliberate point of closure and recognition.",
        actionLabel: "View full image",
        fit: "cover",
        focalPosition: "50% 32%",
        detailType: "lightbox",
      },
      {
        id: "ail-communicating-beyond-session",
        title: "Communicating beyond the session",
        image: "ancient-intelligence-lab/ancient-intelligence-lab-parent-certificate.webp",
        alt: "Certificate letter addressed to a participant's parents",
        description:
          "The parent certificate reflects an intentional participant experience that extended beyond the session itself and recognised the support around each student.",
        actionLabel: "View full image",
        fit: "contain",
        detailType: "lightbox",
      },
    ],
    referenceMetrics: ["3 cohorts", "70+ applications", "14 offers", "10 participants", "7 graduates"],
  },
  {
    id: "cyfj",
    label: "CRACK YOUR FIRST JOB",
    headline: "I turned scattered placement updates into one product and learned why access alone does not create repeat use.",
    story: {
      situationAndResponsibility:
        "Students were receiving six to seven placement emails each week, with deadlines, job descriptions, and drive dates spread across different messages. After ten informal student conversations, I found that the problem was not a lack of information; it was the effort required to organise and act on it. I took responsibility for turning that repeated confusion into a usable first product.",
      actions: [
        "Built a web platform that combined opportunity tracking, deadlines, company context, preparation resources, and a calendar in one place.",
        "Used a Google Form and Google Sheets workflow to collect information, then repaired Apps Script issues affecting how that data reached the site.",
        "Added analytics, monitored questions and behaviour, and continued managing content, deadlines, performance issues, and fixes after launch.",
      ],
      resultAndLesson:
        "The platform reached 255 students across three colleges and recorded 2,600 interactions. It also had low repeat usage. Navigation confusion, performance, and the continued demand for direct answers showed me that shipping a useful first version is not the same as building a habit. Reach proved the problem was real; retention exposed what the product still had to solve.",
      relevance:
        "I can move from user conversations to an MVP, operate it with real users, read imperfect evidence honestly, and use that evidence to define the next product problem.",
    },
    videoKey: "cyfj",
    mediaPosition: "right",
    evidence: [
      {
        id: "cyfj-opportunity-tracker",
        title: "Opportunity tracker",
        image: "cyfj/cyfj-opportunity-tracker.webp",
        alt: "Opportunity tracker interface listing placement drives with deadlines and status",
        description:
          "The tracker turns scattered emails and deadlines into one actionable view,a direct response to the problem students described.",
        actionLabel: "View full image",
        fit: "contain",
        detailType: "lightbox",
      },
      {
        id: "cyfj-usage-evidence",
        title: "Usage evidence",
        image: "cyfj/cyfj-analytics-overview.webp",
        alt: "Analytics snapshot showing active users, new users, and event count",
        description:
          "Analytics confirmed real reach,255 students and 2,600 interactions,while also revealing that repeat use and navigation still needed work.",
        actionLabel: "View full image",
        fit: "contain",
        detailType: "lightbox",
      },
      {
        id: "cyfj-boarding-pass",
        title: "Boarding-pass experience",
        image: "cyfj/cyfj-boarding-pass.webp",
        alt: "Boarding-pass styled checklist for an upcoming placement opportunity",
        description:
          "The boarding-pass format was an attempt to make an upcoming opportunity easier to scan and act on, not merely another line in a database.",
        actionLabel: "View full image",
        fit: "contain",
        detailType: "lightbox",
      },
    ],
    referenceMetrics: ["255 students", "3 colleges", "2,600 recorded interactions"],
  },
  {
    id: "iste-placement-leadership",
    label: "ISTE AND PLACEMENT LEADERSHIP",
    headline: "I turned repeated student coordination into visible systems other people could run.",
    story: {
      situationAndResponsibility:
        "Student initiatives depended heavily on individual follow-ups, verbal context, and senior members remembering what had to happen next. Across ISTE and placement work, I took responsibility for understanding students, coordinating delivery, and converting repeated guidance into reusable operating systems.",
      actions: [
        "Used insights from more than 30 student conversations to shape facilitation and learning support around actual student needs.",
        "Created a facilitation SOP that made roles, preparation, hand-offs, and follow-through clear enough for five events to run without senior involvement.",
        "Used a shared operations sheet to coordinate responsibilities, supported an event involving more than 60 people, and expanded one learning module from 3 to 15 students.",
      ],
      resultAndLesson:
        "The work became less dependent on one person carrying the full context. The SOP, shared tracking, and clearer ownership made execution more repeatable. I learned that coordination improves when expectations, decisions, and next actions are visible,not when the coordinator simply sends more reminders.",
      relevance:
        "I can listen across stakeholders, translate recurring coordination into a practical operating system, and keep people aligned through execution.",
    },
    videoKey: "istePlacement",
    mediaPosition: "left",
    evidence: [
      {
        id: "iste-facilitation-sop",
        title: "Facilitation SOP",
        image: "iste-placement-leadership/iste-facilitation-sop.webp",
        alt: "Facilitation SOP document outlining roles, preparation, and hand-offs",
        description:
          "The SOP turns preparation, roles, delivery, and hand-offs into a repeatable process; it supported five events without senior involvement.",
        actionLabel: "View full image",
        fit: "contain",
        detailType: "lightbox",
      },
      {
        id: "iste-coordinating-at-scale",
        title: "Coordinating at scale",
        image: "iste-placement-leadership/iste-placement-60-person-event.webp",
        alt: "More than sixty people gathered on stage at a coordinated placement event",
        description:
          "This event required more than 60 people to move through one coordinated plan, making ownership and on-ground follow-through visible.",
        actionLabel: "View full image",
        fit: "cover",
        focalPosition: "50% 42%",
        detailType: "lightbox",
      },
      {
        id: "iste-operational-management",
        title: "Operational management",
        image: "iste-placement-leadership/iste-operations-google-sheet.webp",
        alt: "Shared operations sheet tracking tasks, owners, and status",
        description:
          "The shared sheet made responsibilities, status, and next actions visible so coordination did not depend on private messages or one person’s memory.",
        actionLabel: "View full image",
        fit: "contain",
        detailType: "lightbox",
      },
    ],
    referenceMetrics: [
      "30+ student conversations",
      "5 events run without senior involvement",
      "60+ people coordinated during one placement event",
      "one learning module expanded from 3 to 15 students",
    ],
  },
];

export const closing = {
  headline:
    "If Lexi needs someone who can learn an unclear priority, create the first useful structure, and stay with the execution, I would like to talk.",
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
