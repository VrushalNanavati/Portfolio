/** Join class names, skipping falsy values. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}

/** Resolve a path under /public against the configured base URL (works for GitHub project sites). */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  return `${base}${path.replace(/^\/+/, '')}`;
}

/** Returns true for http(s) links so we can render <a> instead of <Link>. */
export const isExternal = (href: string) => /^https?:\/\//i.test(href) || href.startsWith('mailto:') || href.startsWith('tel:');

/** Initials for avatar fallback: "Vrushal Nanavati" -> "VN". */
export function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase() ?? '')
    .join('');
}
