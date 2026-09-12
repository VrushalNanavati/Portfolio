import type { Talk } from './types';

/** Speaking, community and writing. Newest first. */
export const talks: Talk[] = [
  {
    id: 'au-2025',
    type: 'Speaking',
    title: 'Speaker, Autodesk University 2025',
    venue: 'Nashville, Tennessee, US',
    date: 'Sep 2025',
    description:
      'Announced speaker at Autodesk University 2025, presenting on AI agents and Model Context Protocol for construction data on Autodesk Construction Cloud.',
  },
  {
    id: 'forma-mcp-post',
    type: 'Writing',
    title: 'Autodesk Forma MCP Server for AI-Powered Issue Prioritization',
    venue: 'LinkedIn',
    date: '2025',
    description:
      'Launch write-up of an MCP server that re-prioritises Forma issues from configurable, organisation-specific instructions, runs autonomously on a schedule and scales across projects.',
    href: 'https://www.linkedin.com/posts/vrushal-nanavati_aiinconstructiontech-ai-aec-activity-7449172595402461184-6hxT',
  },
  {
    id: 'acc-claude',
    type: 'Community',
    title: 'Connecting Autodesk Construction Cloud to Claude via MCP',
    venue: 'LinkedIn',
    date: '2025',
    description:
      'Demonstrated natural-language questions over RFIs and issues with automatic re-prioritisation based on project conditions, one of the early public AEC MCP examples.',
    href: 'https://www.linkedin.com/in/vrushal-nanavati/',
  },
  {
    id: 'au-2024',
    type: 'Speaking',
    title: 'Presenter, Autodesk University 2024',
    venue: 'San Diego, California, US',
    date: 'Oct 2024',
    description: 'Presented alongside nCircle Tech leadership on connected Autodesk workflows and AI in AEC.',
    href: 'https://ncircletech.com/events/autodesk-university-2024',
  },
  {
    id: 'webinars',
    type: 'Webinar',
    title: 'Connected Autodesk Workflows: planning, design and production',
    venue: 'Online webinars',
    date: '2024',
    description:
      'Led webinars on integrating planning, design and production data across Autodesk tools with real-time visibility for distributed teams.',
  },
  {
    id: 'leadership-article',
    type: 'Writing',
    title: 'Why Leaders Need to Get into the Details',
    venue: 'LinkedIn article',
    date: 'Aug 2024',
    description:
      'An argument for leaders who understand the mechanics of their teams work, favouring lightweight processes and a culture of early risk detection over compliance overhead.',
    href: 'https://www.linkedin.com/in/vrushal-nanavati/',
  },
  {
    id: 'bim-world-paris',
    type: 'Conference',
    title: 'BIM World Paris',
    venue: 'Paris, France',
    date: '2023',
    description: 'Represented nCircle Tech as technical point of contact, meeting partners and customers across the North America and European AEC market.',
  },
  {
    id: 'psm',
    type: 'Certification',
    title: 'Professional Scrum Master I (PSM I)',
    venue: 'Scrum.org',
    date: 'Feb 2022',
    description: 'Certified Scrum practitioner; applied across ODC delivery governance.',
  },
  {
    id: 'stackoverflow',
    type: 'Community',
    title: 'Stack Overflow contributor',
    venue: 'stackoverflow.com',
    date: 'Ongoing',
    description: 'Answers on CAD SDKs, WebGL and C++ graphics.',
    href: 'https://stackoverflow.com/users/11598165/vrushal',
  },
];
