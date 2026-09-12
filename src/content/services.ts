import type { Service } from './types';

/** Consulting offerings shown on the Services page and summarised on Home. */
export const services: Service[] = [
  {
    id: 'ai-in-aec',
    icon: 'cpu',
    title: 'AI & Agentic Workflows for AEC',
    hook: 'From "we should do something with AI" to agents working on real project data.',
    description:
      'I design and build Model Context Protocol servers, multi-agent systems and AI-assisted pipelines on Autodesk Platform Services, Autodesk Construction Cloud, Forma, Procore and your own data. The focus is on measurable outcomes: fewer hours on triage, faster answers, safer automation.',
    deliverables: [
      'AI opportunity assessment mapped to your workflows and data',
      'MCP server design and implementation with auth, guardrails and observability',
      'Agent skills and prompts specific to your organisation',
      'AI-in-CI/CD: code review, test generation and quality gates',
    ],
    idealFor: 'ConTech SaaS, general contractors, owners and AEC software vendors.',
  },
  {
    id: 'product-architecture',
    icon: 'boxes',
    title: '3D / BIM Product Architecture',
    hook: 'Choose the right viewer, formats and kernels before they choose you.',
    description:
      'Viewer selection (Hoops, APS Viewer, Three.js, custom WebGL), file-format strategy (IFC, DWG, DGN, glTF, RVT), geometry and point-cloud pipelines, and performance budgets for web, desktop and mobile.',
    deliverables: [
      'Architecture review and target architecture',
      'Technology evaluation with working spikes',
      'Performance and scalability plan for large models',
      'Build vs buy recommendations with cost models',
    ],
    idealFor: 'Product teams building BIM platforms, digital twins or CAD-adjacent tools.',
  },
  {
    id: 'discovery',
    icon: 'compass',
    title: 'Discovery & Feasibility Sprints',
    hook: 'Two to four weeks to a prototype, a plan and a number.',
    description:
      'I have converted more than 20 technical POCs into funded engagements. The pattern is simple: scope with stakeholders, prototype the riskiest slice, estimate honestly, present to leadership.',
    deliverables: [
      'Stakeholder discovery workshops',
      'Working prototype of the highest-risk capability',
      'Effort, staffing and cost estimate',
      'Executive-ready presentation and roadmap',
    ],
    idealFor: 'Leaders who need to decide whether to fund a product bet.',
  },
  {
    id: 'fractional-leadership',
    icon: 'users',
    title: 'Fractional Technical & Delivery Leadership',
    hook: 'A head of engineering, product or delivery who has done it in your domain.',
    description:
      'Interim or part-time leadership for AEC/BIM software teams: hiring plans, delivery governance, margin management, architecture sign-off and client communication. Especially suited to offshore development centre models.',
    deliverables: [
      'Team structure, hiring and onboarding plans',
      'Sprint, milestone and quality governance',
      'Client and board reporting cadence',
      'Knowledge-transfer programs ("replace yourself" culture)',
    ],
    idealFor: 'Growing product companies and service firms scaling AEC practices.',
  },
  {
    id: 'plugins-integrations',
    icon: 'rocket',
    title: 'CAD/BIM Plugins & Platform Integrations',
    hook: 'Revit, AutoCAD, Inventor, 3ds Max, Maya, Rhino, SketchUp and the cloud APIs around them.',
    description:
      'Hands-on delivery or technical oversight for desktop plugins, ACC/Procore integrations, data-exchange pipelines and GIS/digital-twin connectors. I have shipped in every one of these SDKs.',
    deliverables: [
      'Plugin and integration architecture',
      'Prototype or production implementation',
      'Code review and hardening of existing plugins',
      'Licensing, installer and update strategy',
    ],
    idealFor: 'Vendors extending their reach into the Autodesk, Bentley or Trimble ecosystems.',
  },
  {
    id: 'advisory',
    icon: 'handshake',
    title: 'Advisory & Pre-Sales Partnership',
    hook: 'A domain expert on call for your leadership and sales teams.',
    description:
      'Monthly retainers for executive sounding-board, RFP and proposal support, technical due diligence and conference or client presentations across North America and Europe.',
    deliverables: [
      'Monthly strategy sessions',
      'RFP response and estimation support',
      'Technical due diligence for partnerships or acquisitions',
      'Client-facing presentations and demos',
    ],
    idealFor: 'Founders, BU heads and sales leaders in AEC and manufacturing software.',
  },
];
