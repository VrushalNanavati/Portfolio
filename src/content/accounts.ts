import type { Account } from './types';

/** Key accounts. Detail pages render at /clients/:slug. */
export const accounts: Account[] = [
  {
    slug: 'autodesk',
    name: 'Autodesk',
    industry: 'AEC / CAD platform',
    location: 'San Francisco, US',
    region: 'US',
    engagementType: 'R&D · Long-term',
    period: 'Multiple engagement cycles',
    featured: true,
    summary:
      'Managed senior stakeholder relationships at Autodesk San Francisco and delivered an internal R&D Inventor plugin for BIM assembly publishing.',
    story: [
      'The relationship with Autodesk began with an internal R&D initiative: publishing BIM-ready assemblies out of Inventor using pre-configured recipes. The technical challenge was unusual. Multiple third-party DLL versions collided inside the Inventor process, and the plugin needed to keep working across Inventor releases.',
      'We solved it by isolating dependencies in a separate AppDomain and marshalling objects across the boundary through serialization. That pattern later became a reference approach for other plugin work in the unit.',
      'Beyond the code, the account was about trust. Working directly with senior Autodesk stakeholders through several cycles positioned nCircle Tech as a partner rather than a vendor, and led to a presence at Autodesk University in 2024 and 2025 where I presented on AI and construction data.',
    ],
    outcomes: [
      'Delivered internal R&D Inventor plugin for BIM assembly publishing',
      'Resolved cross-version DLL conflicts with an isolated AppDomain architecture',
      'Maintained the engagement across multiple cycles',
      'Speaker at Autodesk University 2024 (San Diego) and 2025 (Nashville)',
    ],
    projects: ['autodesk-inventor-plugin', 'acc-mcp-server'],
  },
  {
    slug: 'procore',
    name: 'Procore',
    industry: 'Construction tech SaaS',
    location: 'US',
    region: 'US',
    engagementType: 'Account growth',
    period: 'Multi-year',
    featured: true,
    summary:
      'Engaged senior leadership to identify and scope integration opportunities within the Procore platform, driving a multi-year expansion of the engagement.',
    story: [
      'Procore is one of the most widely used construction management platforms in North America, and its ecosystem thrives on integrations. My role was to sit with senior leadership, understand where their customers hit friction between design data and field operations, and shape integration scopes that engineering could deliver predictably.',
      'The engagement expanded over several years because each delivered scope surfaced the next opportunity. That is the account-growth pattern I bring to consulting: deliver, listen, and propose the next valuable step before the client has to ask.',
    ],
    outcomes: [
      'Scoped and delivered integration opportunities within the Procore platform',
      'Grew the engagement over multiple years',
      'Established a repeatable discovery-to-delivery cadence with senior stakeholders',
    ],
  },
  {
    slug: 'clark-construction',
    name: 'Clark Construction',
    industry: 'ENR Top-10 general contractor',
    location: 'US',
    region: 'US',
    engagementType: 'Multi-year · BIM',
    period: 'Multi-year',
    featured: true,
    summary:
      'Worked directly with senior digital and technology leadership at one of the largest US general contractors, aligning solutions with active construction workflows and their BIM adoption roadmap.',
    story: [
      'Large general contractors have a hard problem: technology has to earn its place on live job sites where every hour matters. With Clark, the work was to align software solutions with real construction workflows and a BIM adoption roadmap that spanned many projects and teams.',
      'That meant frequent conversations with digital and technology leadership, translating their priorities into deliverable scopes, and making sure what we built fit how superintendents and VDC teams actually work.',
    ],
    outcomes: [
      'Direct relationship with senior digital and technology leadership',
      'Solutions aligned to live construction workflows and the BIM adoption roadmap',
      'Sustained multi-year engagement',
    ],
  },
  {
    slug: 'barton-malow',
    name: 'Barton Malow',
    industry: 'General contractor',
    location: 'US',
    region: 'US',
    engagementType: 'Retained · BIM',
    period: 'Long-term',
    featured: true,
    summary:
      'Sustained a long-term account through proactive opportunity identification within BIM and project delivery operations, expanding scope year over year.',
    story: [
      'Barton Malow is an example of what retention looks like when it is done proactively. Rather than waiting for requests, I kept a running view of their BIM and project-delivery operations and proposed improvements that fit their roadmap and budget cycles.',
      'The result was a scope that grew year over year and a relationship built on being useful before being asked.',
    ],
    outcomes: [
      'Retained account across multiple years',
      'Scope expanded year over year through proactive proposals',
      'Deep familiarity with GC-side BIM and project delivery operations',
    ],
  },
  {
    slug: 'asc-engineering',
    name: 'ASC Engineering',
    industry: 'Engineering services',
    location: 'US',
    region: 'US',
    engagementType: 'Long-term · CAD/BIM',
    period: 'One of the longest-running accounts',
    featured: true,
    summary:
      'One of the longest-running accounts: a deep relationship with engineering leadership spanning multiple engagement cycles and a continuously growing service scope.',
    story: [
      'ASC Engineering has been a partner through multiple engagement cycles. The work spans CAD and BIM tooling for engineering services, with a service scope that has grown steadily as their needs evolved.',
      'Accounts like this are where I learned that the most valuable thing a technical partner offers is continuity: remembering why decisions were made, and carrying that context into every new scope.',
    ],
    outcomes: [
      'Multi-cycle relationship with engineering leadership',
      'Continuously growing service scope',
      'Long-term continuity of technical context and delivery',
    ],
  },
  {
    slug: 'asite',
    name: 'Asite Solutions',
    industry: 'BIM SaaS',
    location: 'London, UK',
    region: 'UK',
    engagementType: 'ODC · 24 people',
    period: 'Multi-year ODC',
    featured: true,
    summary:
      'Led full offshore development centre delivery for the Addodle BIM platform: 3D viewer, quantity takeoff, BCF integration and a Flutter mobile app, with a C-level relationship throughout.',
    story: [
      'Asite is a London-based construction collaboration and BIM SaaS company. I led a 24-person offshore development centre building the cBIM module of their Addodle platform, covering the 3D web viewer, model comparison, quantity takeoff, BCF issue integration, 2D–3D synchronisation, redline markups and the launch of a Flutter mobile app.',
      'The C-level relationship mattered as much as the delivery. Regular roadmap conversations surfaced new features that became expansion opportunities, and the team grew alongside the platform.',
    ],
    outcomes: [
      'Led a 24-person ODC through multiple release cycles',
      'Shipped viewer, takeoff, BCF, 2D–3D sync and mobile capabilities',
      'Maintained a C-level relationship and grew scope through feature discovery',
    ],
    projects: ['addodle-cbim'],
  },
  {
    slug: 'invicara',
    name: 'Invicara',
    industry: 'Digital twin platform',
    location: 'Dublin, Ireland',
    region: 'IE',
    engagementType: 'Grown · Digital twin',
    period: 'Scoping to 9-person ODC',
    featured: true,
    summary:
      'Grew the engagement from initial scoping to a 9-person ODC, delivering an IoT-integrated digital twin platform with BIM camera navigation and synchronised 2D–3D views.',
    story: [
      'Invicara builds digital twin software for building owners and operators. The engagement began as a scoping conversation and grew into a nine-person offshore development centre as we proved value release by release.',
      'The technical work centred on the 3D viewer: BIM-aware camera navigation, IoT-driven element theming so live sensor data colours the model, and synchronised 2D–3D side-by-side views for facilities teams.',
    ],
    outcomes: [
      'Grew from scoping to a 9-person dedicated team',
      'Delivered IoT-integrated 3D viewer features in production',
      'Synchronised 2D–3D navigation for facilities workflows',
    ],
    projects: ['invicara-digital-twin'],
  },
  {
    slug: 'nextlimit',
    name: 'NextLimit Technologies',
    industry: 'Simulation & rendering software',
    location: 'Madrid, Spain',
    region: 'ES',
    engagementType: 'Plugin development',
    summary:
      'Sole developer on the RealFlow fluid-simulation plugin for 3ds Max and enhancements to the Maxwell renderer plugins for 3ds Max and Maya.',
    story: [
      'NextLimit makes RealFlow and Maxwell Render. As the sole developer on their 3ds Max integration, I owned everything from timeline playback and particle/mesh manipulators to licensing, installer and the render interface, including performance-critical meshing pipelines.',
      'On Maxwell, the work was navigating a complex legacy codebase to add viewport manipulators, interactive rendering and network render support across 3ds Max and Maya.',
    ],
    outcomes: [
      'End-to-end RealFlow plugin for 3ds Max',
      'Maxwell renderer enhancements across 3ds Max and Maya',
      'Resolved multi-threaded memory issues in a legacy codebase',
    ],
    projects: ['realflow-3dsmax', 'maxwell-renderer'],
  },
  {
    slug: 'contact-software',
    name: 'Contact Software',
    industry: 'PLM software',
    location: 'Bremen, Germany',
    region: 'DE',
    engagementType: 'Solo developer · 3D web viewer',
    summary:
      'Implemented advanced 3D web viewer features from scratch on Hoops Communicator: measurement, comparison, PMI, BCF, cutting planes and quantity takeoff.',
    story: [
      'For Contact Software, a German PLM vendor, I was the solo developer implementing a full set of 3D web viewer capabilities on Hoops Communicator, from camera navigation and measurement to model comparison, PMI display, BCF issues, cutting planes and 2D/3D quantity takeoff.',
    ],
    outcomes: [
      'Complete advanced viewer feature set delivered solo',
      'Foundation for later BIM viewer work on Addodle and Invicara',
    ],
    projects: ['hoops-web-viewer'],
  },
];

export const featuredAccounts = accounts.filter((a) => a.featured);
export const getAccount = (slug: string) => accounts.find((a) => a.slug === slug);
