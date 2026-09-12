/**
 * SITE-WIDE CONFIGURATION
 * -----------------------
 * Identity, contact details, navigation and social links.
 * Everything here is safe to edit without touching components.
 */

export const site = {
  name: 'Vrushal Nanavati',
  shortName: 'VN',
  /** Shown under the name in the header and hero. */
  role: 'Independent Consultant · AEC · BIM · Digital Twin · AI',
  /** Used in <title> suffix and the footer. */
  tagline: 'Technical consulting for AEC, BIM and manufacturing software products.',
  url: 'https://vrushalnanavati.github.io/Portfolio/',
  location: 'Pune, Maharashtra, India · Working with clients in North America & Europe',
  timezone: 'IST (UTC+5:30)',
  email: 'vrushalnanavati73@gmail.com',
  phone: '+91 91561 91343',
  /** Toggle the "available for engagements" pill in the hero. */
  availability: {
    open: true,
    label: 'Open to new advisory & consulting engagements',
  },
  socials: [
    { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/vrushal-nanavati/' },
    { id: 'github', label: 'GitHub', href: 'https://github.com/VrushalNanavati' },
    { id: 'stackoverflow', label: 'Stack Overflow', href: 'https://stackoverflow.com/users/11598165/vrushal' },
    { id: 'quora', label: 'Quora', href: 'https://www.quora.com/profile/Vrushal-Nanavati-1' },
  ],
  /** Primary navigation (desktop + mobile). Order matters. */
  nav: [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Work', to: '/work' },
    { label: 'Clients', to: '/clients' },
    { label: 'AI in AEC', to: '/ai' },
    { label: 'Journey', to: '/journey' },
    { label: 'About', to: '/about' },
  ],
  cta: {
    primary: { label: 'Start a conversation', to: '/contact' },
    secondary: { label: 'See the work', to: '/work' },
  },
  /**
   * Optional links to PDFs placed in /public/downloads. The About page hides the block when empty.
   * Example:
   *   { label: 'Consultant profile (PDF)', href: 'downloads/Vrushal_Nanavati_Consultant.pdf' },
   */
  downloads: [] as { label: string; href: string }[],
} as const;

export type SocialId = (typeof site.socials)[number]['id'];
