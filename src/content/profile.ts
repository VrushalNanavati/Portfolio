/**
 * PROFILE COPY: hero, positioning, bio and personal facts.
 * Tone: independent industry expert, not a job applicant.
 */

export const hero = {
  eyebrow: 'AEC · BIM · Digital Twin · Manufacturing Software · AI',
  /** Rendered as the H1. Keep short; line breaks are handled by the layout. */
  headline: 'I help AEC and manufacturing software teams turn domain complexity into shipped products.',
  /** Supporting paragraph under the H1. */
  intro:
    'Ten-plus years at the intersection of CAD/BIM engineering, delivery leadership and AI. I have written computational-geometry code, headed a 70-person business unit with a $2.5M P&L, turned 50+ one-line customer requirements into shipped POCs and products, and built some of the first MCP servers on Autodesk Construction Cloud. Today I advise a small number of organizations as an independent consultant.',
  /** Three small numbers shown on the hero profile card. Keep values short. */
  quickFacts: [
    { value: '10+', label: 'years' },
    { value: '$2.5M', label: 'P&L led' },
    { value: '50+', label: 'POCs won' },
  ],
  /** Short proof points shown as a ticker under the intro. */
  proofPoints: [
    'MCP servers on Autodesk Construction Cloud & Forma',
    'Speaker · Autodesk University 2024 & 2025',
    'Advised Autodesk, Procore, Clark Construction, Barton Malow',
    'Led 70-person AEC business unit · $2.5M revenue · ~60% GM',
    '50+ technical POCs converted into engagements',
  ],
};

export const positioning = {
  eyebrow: 'Why work with me',
  title: 'One person who can architect it, prototype it, and sell it to your board.',
  paragraphs: [
    'Most consultants sit on one side of the table. They either understand the geometry kernels, viewer SDKs and 3D technology, or they understand P&L, staffing and executive buy-in. I have spent my career doing both, often in the same week.',
    'That combination compresses timelines. Discovery, feasibility, prototype and roadmap can happen in one engagement rather than three hand-offs. Engineering teams get someone who has shipped in their stack. Leadership gets someone who has owned revenue and presented to boards.',
  ],
  pillars: [
    {
      title: 'Deep domain fluency',
      text: 'BIM platforms, digital twins, CAD plugins, GIS, point clouds and rendering pipelines. I know the file formats, the SDKs and where the bodies are buried.',
    },
    {
      title: 'Hands-on technical credibility',
      text: 'Still writing code. Recent work includes MCP servers, multi-agent systems and AI-assisted CI/CD pipelines for construction data.',
    },
    {
      title: 'Requirement to solution, fast',
      text: 'Customers say I connect with their business need on the first call. Over ten years that instinct has turned 50+ one-line requirements into POCs, and POCs into products.',
    },
    {
      title: 'Business acumen',
      text: 'Owned a $2.5M business unit end to end: staffing, margins, account growth, pre-sales and board reporting.',
    },
  ],
};

export const about = {
  eyebrow: 'About',
  title: 'From geometry algorithms to the boardroom, and back again.',
  paragraphs: [
    'I started as a C++ developer building 3D viewer features, 3ds Max and Maya plugins and CGAL-based mesh operations for clients in Germany, Spain, Greece and the United States. Being the sole developer on those projects taught me to own outcomes rather than tasks.',
    'At nCircle Tech I moved from Tech Lead to Associate Technical Manager to heading the flagship AEC business unit. I scaled it to 70 people and $2.5M in annual revenue at roughly 60% gross margin, while acting as the primary contact for North American clients and travelling to Europe and South Korea for engagements. Along the way I became the person our VPs of Sales brought onto customer calls: I connect with the business problem quickly, understand the requirement end to end, and can turn a one-line brief into a proof of concept. More than 50 of those POCs became products.',
    'Since 2024 I have been focused on AI in AEC: rolling out GitHub Copilot across the unit, wiring AI checks into CI/CD pipelines, and building MCP servers that let AI agents read and act on Autodesk Construction Cloud and Forma data. I have spoken about this work at Autodesk University in San Diego and Nashville.',
    'Today I consult independently for a handful of organizations building software for the AEC, BIM and manufacturing domains. I also keep a personal OpenGL rendering engine alive because I never want to stop being able to build the thing myself.',
  ],
  currentFocus: {
    title: 'Currently',
    items: [
      'Advising three organizations on AEC, BIM and manufacturing software strategy and delivery',
      'Building agentic workflows on Autodesk Platform Services, ACC and Forma',
      'Speaking and writing on practical AI adoption in construction technology',
    ],
  },
  personal: [
    { label: 'Based in', value: 'Pune, Maharashtra, India' },
    { label: 'Working hours', value: 'Overlaps US East mornings and all of Europe' },
    { label: 'Languages', value: 'English, Hindi, Marathi, Gujarati' },
    { label: 'Nationality', value: 'Indian' },
  ],
  education: [
    {
      degree: 'Bachelor of Technology, Computer Engineering',
      school: 'Tatyasaheb Kore Institute of Engineering & Technology, Warananagar',
      board: 'Shivaji University, Kolhapur',
      year: '2012 – 2016',
    },
  ],
  certifications: [
    { name: 'Professional Scrum Master I (PSM I)', issuer: 'Scrum.org', year: '2022' },
  ],
  globalReach: [
    { code: 'US', label: 'North America (primary region)' },
    { code: 'GB', label: 'United Kingdom' },
    { code: 'IE', label: 'Ireland' },
    { code: 'DE', label: 'Germany' },
    { code: 'ES', label: 'Spain' },
    { code: 'GR', label: 'Greece' },
    { code: 'FR', label: 'France' },
    { code: 'KR', label: 'South Korea' },
  ],
};

export const contact = {
  eyebrow: 'Contact',
  title: 'Have a product, platform or team that needs an AEC-fluent technical partner?',
  text: 'I take on a limited number of advisory and hands-on engagements at a time. The fastest way to start is a short email describing what you are building and where it is stuck. I reply within two working days.',
  engagementModels: [
    { title: 'Advisory retainer', text: 'Monthly hours for architecture reviews, roadmap input and executive sounding board.' },
    { title: 'Discovery & feasibility sprint', text: 'Two to four weeks to de-risk a product bet with a working prototype and a costed plan.' },
    { title: 'Fractional technical leadership', text: 'Interim head of engineering, product or delivery for AEC/BIM teams.' },
    { title: 'Workshops & talks', text: 'AI in AEC, MCP for construction data, building 3D web products.' },
  ],
};
