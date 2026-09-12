import type { AiInitiative } from './types';

export const aiIntro = {
  eyebrow: 'AI in AEC',
  title: 'Agents that read, reason over and act on construction data.',
  text:
    'AEC has decades of structured data locked behind vendor APIs and UIs. I build the connective tissue that lets AI agents use it safely: Model Context Protocol servers, orchestrated multi-agent workflows and AI checks inside the engineering pipeline. Everything below has run on real project data.',
};

/** Initiatives shown on the AI page and summarised on Home. */
export const aiInitiatives: AiInitiative[] = [
  {
    id: 'acc-mcp',
    title: 'MCP server for Autodesk Construction Cloud',
    status: 'Production',
    summary:
      'Connects Claude to ACC so teams ask natural-language questions about RFIs and issues and get re-prioritised lists based on comments, delays, dependencies and cost or schedule impact.',
    details: [
      'Typed tools over ACC Issues and RFIs with scoped OAuth',
      'Configurable prioritisation skills per organisation or project',
      'Autonomous scheduled mode with explainable outputs',
      'Cross-project querying without UI navigation',
    ],
    tech: ['MCP', 'Claude', 'APS', 'ACC APIs', 'TypeScript'],
  },
  {
    id: 'forma-mcp',
    title: 'MCP server for Autodesk Forma',
    status: 'Pilot',
    summary:
      'Automatic issue re-prioritisation for Forma that adapts to evolving project conditions and runs fully autonomously across many projects.',
    details: [
      'Instruction-driven prioritisation tuned to business rules',
      'Scheduled, human-optional operation',
      'Designed for teams already using AI assistants with meeting transcripts and governance frameworks',
    ],
    tech: ['MCP', 'Autodesk Forma', 'Claude', 'Node.js'],
    href: 'https://www.linkedin.com/posts/vrushal-nanavati_aiinconstructiontech-ai-aec-activity-7449172595402461184-6hxT',
  },
  {
    id: 'multi-agent',
    title: 'Multi-agent AEC data workflows',
    status: 'Prototype',
    summary:
      'Specialised retrieval, reasoning, validation and reporting agents that automate construction data extraction and analysis with checks against source data.',
    details: [
      'Explicit hand-offs and shared context between agents',
      'Domain tools: model queries, quantities, issues, documents',
      'Validation layer before outputs reach users',
    ],
    tech: ['LLM orchestration', 'MCP', 'Python', 'APS Model Derivative'],
  },
  {
    id: 'ai-cicd',
    title: 'AI in the engineering pipeline',
    status: 'Rolled out',
    summary:
      'Unit-wide GitHub Copilot rollout plus AI-powered code review, test generation and quality gates in CI/CD, and Claude-based agents and skills for developer productivity across 70 engineers.',
    details: [
      'Usage guidelines and training for a 70-person unit',
      'AI review and test generation on every pull request',
      'Reusable agent skills for repetitive engineering tasks',
    ],
    tech: ['GitHub Copilot', 'GitHub Actions', 'Claude', 'Agent skills'],
  },
];

export const aiPrinciples = [
  {
    title: 'Data access before model choice',
    text: 'Most AEC AI projects fail on plumbing, not intelligence. Solve authentication, pagination and permissions first, then pick the model.',
  },
  {
    title: 'Guardrails are a feature',
    text: 'Scoped tokens, read-only defaults, explainable outputs and audit trails make agents deployable in regulated project environments.',
  },
  {
    title: 'Measure hours, not demos',
    text: 'Every initiative gets a baseline: time to answer, time to triage, review turnaround. If the number does not move, the agent does not ship.',
  },
  {
    title: 'Keep humans in the loop until trust is earned',
    text: 'Autonomous modes are opt-in and scheduled, with clear rollback. Teams graduate to automation as confidence grows.',
  },
];
