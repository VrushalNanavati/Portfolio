import { Globe2 } from 'lucide-react';
import { accounts } from '@/content/accounts';
import { about } from '@/content/profile';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { AccountCard } from '@/components/ui/Cards';

export default function Clients() {
  useDocumentTitle('Clients', 'Accounts engaged and grown: Autodesk, Procore, Clark Construction, Barton Malow, ASC Engineering, Asite, Invicara and more.');
  return (
    <>
      <PageHero
        eyebrow="Clients & accounts"
        title="Relationships built on delivering, then proposing the next step."
        text="Accounts I have personally managed and grown, from platform vendors to ENR Top-10 general contractors and European SaaS companies."
      />
      <Section>
        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {accounts.map((a) => (
            <RevealItem key={a.slug}>
              <AccountCard account={a} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>
      <Section band compact>
        <SectionHeading eyebrow="Global reach" title="On-site with clients across three continents." className="mb-8" />
        <div className="flex flex-wrap gap-2">
          {about.globalReach.map((g) => (
            <span key={g.code} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm">
              <Globe2 className="h-4 w-4 text-accent" />
              <span className="font-mono text-xs text-text-subtle">{g.code}</span>
              {g.label}
            </span>
          ))}
        </div>
      </Section>
    </>
  );
}
