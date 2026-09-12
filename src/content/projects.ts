import type { Project, ProjectDomain } from './types';

/** Case studies. Detail pages render at /work/:slug. */
export const projects: Project[] = [
  {
    slug: 'acc-mcp-server',
    title: 'MCP Servers for Autodesk Construction Cloud & Forma',
    client: 'Internal R&D · used as pre-sales differentiator',
    accountSlug: 'autodesk',
    location: 'Pune, India · North American clients',
    period: '2025 – present',
    domain: 'AI & Agents',
    role: 'Architect & lead developer',
    featured: true,
    summary:
      'Model Context Protocol servers that let Claude and other AI agents query, triage and re-prioritise construction issues and RFIs on ACC and Forma. One of the early AEC implementations of the pattern.',
    challenge:
      'Project managers spend hours navigating issue and RFI lists across projects. The data lives behind Autodesk Platform Services APIs with OAuth, pagination and rate limits, and no AI tool could reach it safely.',
    approach: [
      'Designed MCP servers exposing ACC and Forma issues, RFIs and project context as typed tools with scoped OAuth and guardrails.',
      'Built configurable "skills": organisation- or project-specific prioritisation instructions the agent applies when re-ranking issues based on comments, delays, dependencies and schedule or cost impact.',
      'Added a fully autonomous scheduled mode so re-prioritisation runs without a human in the loop, plus natural-language querying across many projects at once.',
      'Wrapped the same servers into live demos for client conversations about AI in AEC.',
    ],
    outcomes: [
      'Natural-language questions over RFIs and issues in seconds instead of UI navigation',
      'Automated, explainable re-prioritisation that adapts to changing project conditions',
      'Scales across projects; runs autonomously on a schedule',
      'Shortened pre-sales evaluation timelines by demonstrating value live',
    ],
    tech: ['Model Context Protocol', 'Claude', 'Autodesk Platform Services', 'ACC Issues & RFIs API', 'Autodesk Forma', 'TypeScript', 'Node.js', 'OAuth 2.0'],
  },
  {
    slug: 'multi-agent-aec',
    title: 'Multi-Agent Systems for AEC Data Workflows',
    client: 'Internal R&D',
    location: 'Pune, India',
    period: '2025 – present',
    domain: 'AI & Agents',
    role: 'Designer & prototyper',
    featured: true,
    summary:
      'Orchestrated LLM agents with domain-specific tooling to automate construction data extraction and analysis tasks that previously needed a BIM specialist.',
    challenge:
      'Construction data extraction is repetitive but judgment-heavy: which model elements matter, how to reconcile schedules with issues, what counts as a risk. Single-prompt LLM calls were not reliable enough.',
    approach: [
      'Split work into specialised agents (retrieval, domain reasoning, validation, reporting) with explicit hand-offs and shared context.',
      'Gave agents domain tools: model queries, quantity extraction, issue APIs and document search.',
      'Added validation agents that check outputs against source data before anything reaches a user.',
    ],
    outcomes: [
      'Reliable automation of extraction and analysis tasks across sample projects',
      'Reusable orchestration patterns adopted in client POCs',
      'Foundation for AI features now discussed with several accounts',
    ],
    tech: ['LLM orchestration', 'Claude', 'MCP', 'Python', 'TypeScript', 'APS Model Derivative'],
  },
  {
    slug: 'ai-cicd',
    title: 'AI-Powered Engineering Productivity & CI/CD',
    client: 'nCircle Tech AEC business unit',
    location: 'Pune, India',
    period: '2024 – 2025',
    domain: 'AI & Agents',
    role: 'Sponsor & implementation lead',
    summary:
      'Rolled out GitHub Copilot unit-wide, wired AI checks into CI/CD pipelines, and deployed Claude-based agents and skills for developer productivity across a 70-person team.',
    challenge:
      'A 70-person unit across many client codebases needed consistent quality and faster throughput without adding review headcount.',
    approach: [
      'Unit-wide GitHub Copilot rollout with usage guidelines and training.',
      'AI-powered CI/CD stages: automated code review, test generation and quality gates.',
      'Claude-based agents and reusable skills for repetitive engineering tasks.',
      'Measured adoption and outcomes; iterated on guidelines with team leads.',
    ],
    outcomes: [
      'AI checks running on every pull request across the unit',
      'Faster review cycles and broader test coverage',
      'Playbook reused as a consulting offering for client engineering teams',
    ],
    tech: ['GitHub Copilot', 'GitHub Actions', 'Claude', 'Agent skills', 'Azure DevOps'],
  },
  {
    slug: 'addodle-cbim',
    title: 'cBIM Module for the Addodle BIM Platform',
    client: 'Asite Solutions',
    accountSlug: 'asite',
    location: 'London, UK',
    period: '2020 – 2024',
    domain: 'BIM Platform',
    role: 'Delivery lead · ODC head',
    teamSize: '24-person ODC',
    featured: true,
    summary:
      'Led delivery of 3D web viewer enhancements for a major BIM SaaS: model comparison, quantity takeoff, BCF integration, 2D–3D sync, redline markups and a Flutter mobile app launch.',
    challenge:
      'Asite needed its BIM module to compete with best-in-class viewers while serving large federated models to construction teams on desktop and mobile.',
    approach: [
      'Built and led a 24-person offshore development centre with clear architecture ownership per sub-system.',
      'Delivered viewer capabilities on Hoops Communicator: model comparison, quantity takeoff, BCF issue workflows, 2D–3D synchronisation, redline markups.',
      'Backend on Java Spring Boot; Angular front end; launched a Flutter mobile app for field access.',
      'Maintained a C-level relationship, turning roadmap conversations into funded features.',
    ],
    outcomes: [
      'Multiple releases of viewer, takeoff and collaboration features in production',
      'Mobile app launched for on-site users',
      'Scope and team grew over the engagement through feature discovery',
    ],
    tech: ['Hoops Communicator', 'Angular', 'Java Spring Boot', 'Flutter', 'BCF', 'IFC'],
  },
  {
    slug: 'invicara-digital-twin',
    title: 'IoT-Integrated Digital Twin Platform',
    client: 'Invicara',
    accountSlug: 'invicara',
    location: 'Dublin, Ireland',
    period: '2021 – 2024',
    domain: 'Digital Twin',
    role: 'Delivery lead · ODC head',
    teamSize: '9-person ODC',
    featured: true,
    summary:
      'Developed and enhanced the 3D viewer for a digital twin platform: BIM camera navigation, IoT-driven element theming and synchronised 2D–3D side-by-side views.',
    challenge:
      'Facilities teams needed to see live sensor data in the context of the building model and move between plans and 3D without losing their place.',
    approach: [
      'Grew the engagement from scoping to a nine-person dedicated team.',
      'Implemented BIM-aware camera navigation and element theming driven by IoT streams.',
      'Built synchronised 2D–3D side-by-side views with shared selection and camera state.',
    ],
    outcomes: [
      'Live IoT data visualised on the model in production',
      '2D–3D synchronisation shipped for operations workflows',
      'Engagement expanded release by release',
    ],
    tech: ['Hoops Communicator', 'React', 'Redux', 'IoT integration', 'WebGL'],
  },
  {
    slug: 'autodesk-inventor-plugin',
    title: 'Autodesk Inventor BIM Publishing Plugin',
    client: 'Autodesk (internal R&D)',
    accountSlug: 'autodesk',
    location: 'San Francisco, US',
    period: '2020',
    domain: 'CAD Plugin',
    role: 'Tech lead & developer',
    summary:
      'A BIM assembly publishing plugin processing pre-configured recipes inside Inventor. Solved DLL dependency conflicts using an isolated AppDomain with object serialization.',
    challenge:
      'Publishing BIM-ready assemblies from Inventor required third-party libraries whose versions conflicted with those loaded by Inventor itself.',
    approach: [
      'Isolated conflicting dependencies in a separate AppDomain.',
      'Marshalled data across the boundary via object serialization.',
      'Delivered recipe-driven publishing with a WPF UI and Forge Data Management integration.',
    ],
    outcomes: [
      'Stable plugin across Inventor versions',
      'Reference pattern for dependency isolation reused in later plugin work',
    ],
    tech: ['C#', 'WPF', 'Inventor API', 'Forge Data Management API', 'ObjectARX'],
  },
  {
    slug: 'rocket-visualizer',
    title: 'Real-Time Rocket Flight Simulation Visualizer',
    client: 'Apogee Components Inc',
    location: 'Colorado, US',
    period: '2019 – 2020',
    domain: 'GIS & Simulation',
    role: 'Tech lead & developer',
    summary:
      'A JavaScript 3D GIS visualizer for real-time rocket flight simulation with DEM terrain, trajectory rendering and stage/pod animation, backed by a self-hosted tile and elevation server.',
    challenge:
      'Hobby and educational rocketry customers wanted to see simulated flights over real terrain, in the browser, with accurate elevation.',
    approach: [
      'Built on the VTS geospatial stack with DEM terrain and custom trajectory rendering.',
      'Animated stage separation and pod deployment along the simulated flight path.',
      'Set up a self-hosted tile and elevation model server to control cost and latency.',
    ],
    outcomes: [
      'Interactive 3D flight playback over real terrain in the browser',
      'Independent of third-party map service quotas',
    ],
    tech: ['VTS', 'GIS / DEM', 'C++', 'Angular', 'Node.js'],
  },
  {
    slug: 'realflow-3dsmax',
    title: 'RealFlow Plugin for 3ds Max',
    client: 'NextLimit Technologies',
    accountSlug: 'nextlimit',
    location: 'Madrid, Spain',
    period: '2018 – 2019',
    domain: 'Rendering & VFX',
    role: 'Sole developer',
    summary:
      'Integrated RealFlow fluid simulation into 3ds Max: timeline playback, particle and mesh manipulators, licensing, installer and render interface, with performance-critical meshing pipelines.',
    challenge:
      'Bring a standalone fluid simulator into the 3ds Max workflow without compromising performance on large particle sets.',
    approach: [
      'Owned the full plugin lifecycle as sole developer.',
      'Implemented timeline playback, particle and mesh manipulators and the render interface.',
      'Optimised meshing pipelines; built licensing and installer.',
    ],
    outcomes: ['Production plugin shipped to RealFlow customers', 'Performance-critical meshing within interactive budgets'],
    tech: ['C++', '3ds Max SDK', 'MFC / Win32'],
  },
  {
    slug: 'maxwell-renderer',
    title: 'Maxwell Renderer Plugins for 3ds Max & Maya',
    client: 'NextLimit Technologies',
    accountSlug: 'nextlimit',
    location: 'Madrid, Spain',
    period: '2018 – 2019',
    domain: 'Rendering & VFX',
    role: 'Developer',
    summary:
      'Enhanced the Maxwell render plugins with viewport manipulators, interactive rendering and cloud/network render support, navigating a complex legacy codebase and multi-threaded memory issues.',
    challenge: 'A mature codebase with subtle multi-threading bugs needed new interactive features without regressions.',
    approach: [
      'Added viewport manipulators and interactive rendering.',
      'Implemented cloud and network render support.',
      'Diagnosed and fixed multi-threaded memory issues.',
    ],
    outcomes: ['New interactive workflows shipped across 3ds Max and Maya', 'Improved stability of the legacy plugin'],
    tech: ['C++', 'Maya SDK', 'Qt', 'Python / MEL'],
  },
  {
    slug: 'hoops-web-viewer',
    title: 'Advanced 3D Web Viewer Features',
    client: 'Contact Software',
    accountSlug: 'contact-software',
    location: 'Bremen, Germany',
    period: '2016 – 2018',
    domain: 'BIM Platform',
    role: 'Solo developer',
    summary:
      'Implemented advanced 3D web viewer features from scratch: camera navigation, measurement, model comparison, PMI, BCF, cutting planes and 2D/3D quantity takeoff.',
    challenge: 'A PLM vendor needed enterprise-grade 3D viewing in the browser without a large in-house graphics team.',
    approach: [
      'Built the full feature set on Hoops Communicator and WebGL as the sole developer.',
      'Designed measurement, comparison and takeoff tools that later informed BIM platform work.',
    ],
    outcomes: ['Complete viewer feature set delivered solo', 'Patterns reused in Addodle and Invicara viewers'],
    tech: ['WebGL', 'Hoops Communicator', 'JavaScript'],
  },
  {
    slug: 'part-serializing-autocad',
    title: 'Part Serialising & AutoCAD Profile Tagging',
    client: 'Authentise (US) · CCC (Greece)',
    location: 'Philadelphia, US · Athens, Greece',
    period: '2016 – 2018',
    domain: 'Computational Geometry',
    role: 'Developer',
    summary:
      '3D serial-number imprinting via Boolean mesh operations with CGAL and VTK, and an AutoCAD plugin using graph-based closed-profile detection over 10M+ elements.',
    challenge:
      'Two geometry-heavy problems: robust Boolean operations on arbitrary meshes for additive manufacturing, and detecting closed profiles in enormous AutoCAD drawings fast enough to be usable.',
    approach: [
      'Implemented mesh Boolean pipelines with CGAL and VTK, containerised with Docker for the Authentise platform.',
      'Designed a graph-based closed-profile detection algorithm for an ObjectARX plugin handling 10M+ elements.',
    ],
    outcomes: ['Reliable serial-number imprinting for manufacturing workflows', 'Profile detection at scale inside AutoCAD'],
    tech: ['C++', 'CGAL', 'VTK', 'ObjectARX', 'Docker'],
  },
  {
    slug: 'opengl-viewer',
    title: 'OpenGL 3D Viewer & Animation Tool',
    client: 'Independent project',
    location: 'Personal',
    period: 'Ongoing',
    domain: 'Independent',
    role: 'Creator',
    summary:
      'A cross-platform 3D application built from scratch: multi-format loading, keyframe and skeletal animation, PBR and IBL, post-processing and a custom OpenGL UI.',
    challenge: 'Stay hands-on with graphics engineering while leading teams.',
    approach: [
      'Multi-format model loading (OBJ, STL, glTF, DAE).',
      'Keyframe and skeletal animation with a timeline UI.',
      'PBR and Blinn-Phong shading, image-based lighting, anti-aliasing, ambient occlusion and bloom.',
      'Trackball, orbit and FPS cameras; axis gizmo; object tree; themed OpenGL UI.',
    ],
    outcomes: ['Full rendering pipeline owned end to end', 'Reference codebase for shader and engine discussions with clients'],
    tech: ['OpenGL', 'C++', 'GLSL', 'PBR', 'Cross-platform'],
  },
];

export const domains: ProjectDomain[] = [
  'AI & Agents',
  'BIM Platform',
  'Digital Twin',
  'CAD Plugin',
  'GIS & Simulation',
  'Rendering & VFX',
  'Computational Geometry',
  'Independent',
];

export const featuredProjects = projects.filter((p) => p.featured);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const projectsForAccount = (accountSlug: string) => projects.filter((p) => p.accountSlug === accountSlug);
