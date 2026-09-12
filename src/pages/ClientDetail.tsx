import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, MapPin } from 'lucide-react';
import { accounts, getAccount } from '@/content/accounts';
import { projectsForAccount } from '@/content/projects';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Section } from '@/components/ui/Section';
import { Tag } from '@/components/ui/Tag';
import { Reveal } from '@/components/ui/Reveal';
import { AccountCard, ProjectCard } from '@/components/ui/Cards';
import { Button } from '@/components/ui/Button';

export default function ClientDetail() {
  const { slug = '' } = useParams();
  const account = getAccount(slug);
  useDocumentTitle(account?.name, account?.summary);
  if (!account) return <Navigate to="/404" replace />;

  const related = projectsForAccount(account.slug);
  const others = accounts.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="container relative py-12 sm:py-16">
          <Link to="/clients" className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent">
            <ArrowLeft className="h-4 w-4" /> All clients
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <Tag tone="accent">{account.engagementType}</Tag>
            <span className="text-sm text-text-subtle">{account.industry}</span>
          </div>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] sm:text-6xl">{account.name}</h1>
          <p className="mt-3 flex items-center gap-1.5 text-sm text-text-muted">
            <MapPin className="h-4 w-4 text-accent" /> {account.location}
            {account.period && <span className="text-text-subtle"> · {account.period}</span>}
          </p>
          <p className="prose-muted mt-6 max-w-2xl text-base sm:text-lg">{account.summary}</p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="space-y-5">
            <p className="eyebrow">The engagement</p>
            {account.story.map((p) => (
              <p key={p} className="prose-muted text-lg">
                {p}
              </p>
            ))}
          </Reveal>
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="card p-6">
              <p className="eyebrow mb-4">Outcomes</p>
              <ul className="space-y-3">
                {account.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {o}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-6">
              <p className="eyebrow mb-3">Growing an account like this?</p>
              <p className="prose-muted text-sm">I bring the same discovery-to-delivery cadence to advisory and pre-sales partnerships.</p>
              <Button to="/contact" size="sm" className="mt-5" icon={<ArrowRight className="h-4 w-4" />}>
                Talk to me
              </Button>
            </div>
          </aside>
        </div>
      </Section>

      {related.length > 0 && (
        <Section band compact>
          <p className="eyebrow mb-6">Projects delivered</p>
          <div className="grid gap-4 md:grid-cols-2">
            {related.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Section>
      )}

      <Section compact>
        <p className="eyebrow mb-6">Other accounts</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((a) => (
            <AccountCard key={a.slug} account={a} />
          ))}
        </div>
      </Section>
    </>
  );
}
