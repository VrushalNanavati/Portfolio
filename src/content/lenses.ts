import type { Lens } from './types';

/**
 * "See my profile through the lens of..." switcher on the home page.
 * Each lens reframes the same career for a different kind of reader.
 */
export const lenses: Lens[] = [
  {
    id: 'consultant',
    label: 'Technical Consultant',
    headline: 'Domain expert who de-risks product bets with working prototypes.',
    description:
      'I run discovery, feasibility and architecture for AEC/BIM and manufacturing software, then stay close enough to the code to make sure the plan survives contact with reality.',
    bullets: [
      'Discovery sessions and feasibility analyses directly with client C-suite',
      '50+ POCs turned into products from a one-line requirement, over ten years',
      'Fluent in viewer SDKs, CAD formats, geometry kernels and cloud APIs (APS/ACC, Procore)',
      'Currently advising three organizations across AEC, BIM and manufacturing software',
    ],
  },
  {
    id: 'product',
    label: 'Product Manager / Owner',
    headline: 'Roadmaps grounded in how architects, engineers and contractors actually work.',
    description:
      'I have owned scope, priorities and outcomes for BIM platforms, digital twins and plugin suites, translating field workflows into features engineering teams can build and clients will pay for.',
    bullets: [
      'Owned feature roadmaps for the Addodle BIM platform (24-person ODC) and an IoT digital twin',
      'Identified new scope inside existing accounts, growing them year over year',
      'Certified Professional Scrum Master (PSM I); ran structured sprint and milestone governance',
      'Board-level reporting on strategy, performance and technology direction',
    ],
  },
  {
    id: 'delivery',
    label: 'Delivery / Program Manager',
    headline: 'Predictable delivery across concurrent global engagements.',
    description:
      'From staffing plans to margins, I have run the full delivery lifecycle for offshore development centres and project-based work with clients across five time zones.',
    bullets: [
      'Scaled a unit to 70 people delivering $2.5M annually at ~60% gross margin',
      'Managed concurrent ODC projects with team sizes up to 25 per project',
      'Owned all five support functions: recruitment, training, execution, pre-sales, finance',
      '"Replace yourself" learning culture that cut ramp-up time and attrition impact',
    ],
  },
  {
    id: 'engineering',
    label: 'Technical Lead / Architect',
    headline: 'Hands-on architect for 3D, BIM and AI-native systems.',
    description:
      'C++, C#, JavaScript and Python across desktop plugins, WebGL viewers, GIS and now agentic AI. I still write code and review architecture every week.',
    bullets: [
      'Built MCP servers on Autodesk Construction Cloud and Forma for AI-agent access to project data',
      'Solo developer on Hoops-based 3D viewer features, 3ds Max/Maya plugins and CGAL mesh ops',
      'AutoCAD plugin with graph-based profile detection handling 10M+ elements',
      'Personal OpenGL engine: PBR, IBL, skeletal animation, post-processing',
    ],
  },
  {
    id: 'sales',
    label: 'Technical Sales / Pre-Sales',
    headline: 'The engineer in the room who turns a one-line requirement into a solution.',
    description:
      'Customers tell me I connect with their business need on the first call and understand the requirement end to end. I then architect the solution, prototype it and present it to their engineering team, which removes iteration rounds and shortens the sales cycle. Over ten years that has turned 50+ POCs into products, and made me the go-to person for our VPs of Sales whenever a customer call needed someone who could hear the pain point and shape the answer live.',
    bullets: [
      '50+ POCs converted into products, often starting from a one-line customer brief',
      'Go-to technical partner for VPs of Sales on discovery and requirement calls',
      'Owned the North American portfolio: discovery, scoping, proposals, on-site visits',
      'Grew Autodesk, Procore, Clark Construction, Barton Malow and ASC Engineering accounts',
      'Used live MCP and multi-agent demos as pre-sales differentiators',
      'Conference networking at Autodesk University and BIM World Paris brought net-new pipeline',
    ],
  },
];
