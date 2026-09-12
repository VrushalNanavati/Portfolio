import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { site } from '@/config/site';
import { SocialIcon } from '@/components/ui/SocialIcon';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-bg-elevated/70">
      <div className="container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <p className="font-display text-2xl font-semibold">{site.name}</p>
          <p className="prose-muted mt-2 max-w-md text-sm">{site.tagline}</p>
          <ul className="mt-6 space-y-2 text-sm text-text-muted">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${site.email}`} className="hover:text-accent">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`tel:${site.phone.replace(/\s+/g, '')}`} className="hover:text-accent">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{site.location}</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2 text-sm">
            {site.nav
              .filter((n) => n.to !== '/')
              .map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-text-muted hover:text-accent">
                    {n.label}
                  </Link>
                </li>
              ))}
            <li>
              <Link to="/contact" className="text-text-muted hover:text-accent">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Elsewhere</p>
          <ul className="space-y-2 text-sm">
            {site.socials.map((s) => (
              <li key={s.id}>
                <a href={s.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-text-muted hover:text-accent">
                  <SocialIcon id={s.id} className="h-4 w-4" />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container flex flex-col gap-2 py-5 text-xs text-text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Built with React, Tailwind and a lot of BIM data.</p>
        </div>
      </div>
    </footer>
  );
}
