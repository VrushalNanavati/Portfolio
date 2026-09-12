/** Shared content types. Keep data files strictly typed so mistakes surface at build time. */

export type Region = 'US' | 'UK' | 'IE' | 'DE' | 'ES' | 'GR' | 'KR' | 'IN' | 'FR';

export interface Stat {
  value: number;
  /** Text before the number, e.g. "$". */
  prefix?: string;
  /** Text after the number, e.g. "M", "+", "%". */
  suffix?: string;
  label: string;
  /** Short supporting line under the label. */
  note?: string;
  decimals?: number;
}

export interface Account {
  slug: string;
  name: string;
  industry: string;
  location: string;
  region: Region;
  /** Chip shown on cards, e.g. "R&D · Long-term". */
  engagementType: string;
  summary: string;
  /** Long-form narrative for the detail page. */
  story: string[];
  outcomes: string[];
  /** Slugs of related projects. */
  projects?: string[];
  /** Years or period, free text. */
  period?: string;
  featured?: boolean;
}

export type ProjectDomain =
  | 'BIM Platform'
  | 'Digital Twin'
  | 'CAD Plugin'
  | 'GIS & Simulation'
  | 'Rendering & VFX'
  | 'Computational Geometry'
  | 'AI & Agents'
  | 'Independent';

export interface Project {
  slug: string;
  title: string;
  client: string;
  /** Slug of the account this project belongs to, if any. */
  accountSlug?: string;
  location: string;
  period: string;
  domain: ProjectDomain;
  role: string;
  teamSize?: string;
  /** One-line hook for cards. */
  summary: string;
  /** The problem the client had. */
  challenge: string;
  /** What was built / how it was approached. */
  approach: string[];
  /** Concrete results. */
  outcomes: string[];
  tech: string[];
  featured?: boolean;
}

export interface ExperienceEntry {
  id: string;
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  /** Chip shown next to the title, e.g. "AEC / BIM / AI". */
  tag?: string;
  summary: string;
  highlights: string[];
  /** Slugs of projects delivered in this role. */
  projects?: string[];
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  skills: { name: string; level: 1 | 2 | 3 | 4 | 5 }[];
}

export interface Service {
  id: string;
  title: string;
  hook: string;
  description: string;
  deliverables: string[];
  /** Who typically buys this. */
  idealFor: string;
  icon: 'compass' | 'cpu' | 'boxes' | 'rocket' | 'users' | 'handshake';
}

export interface Lens {
  id: string;
  label: string;
  headline: string;
  description: string;
  bullets: string[];
}

export interface Talk {
  id: string;
  type: 'Speaking' | 'Conference' | 'Webinar' | 'Writing' | 'Certification' | 'Community';
  title: string;
  venue: string;
  date: string;
  description: string;
  href?: string;
}

export interface AiInitiative {
  id: string;
  title: string;
  status: 'Production' | 'Pilot' | 'Prototype' | 'Rolled out';
  summary: string;
  details: string[];
  tech: string[];
  href?: string;
}
