import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Building2, Calendar, Check, MapPin, Users } from 'lucide-react';
import { getProject, projects } from '@/content/projects';
import { getAccount } from '@/content/accounts';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Section } from '@/components/ui/Section';
import { Tag, TagList } from '@/components/ui/Tag';
import { Reveal } from '@/components/ui/Reveal';
import { ProjectCard } from '@/components/ui/Cards';
import { Button } from '@/components/ui/Button';

export default function ProjectDetail() {
  const { slug = '' } = useParams();
  const project = getProject(slug);
  useDocumentTitle(project?.title, project?.summary);
  if (!project) return <Navigate to="/404" replace />;

  const account = project.accountSlug ? getAccount(project.accountSlug) : undefined;
  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];
  const related = projects.filter((p) => p.slug !== slug && p.domain === project.domain).slice(0, 2);

  const facts = [
    { icon: Building2, label: 'Client', value: project.client },
    { icon: MapPin, label: 'Location', value: project.location },
    { icon: Calendar, label: 'Period', value: project.period },
    { icon: Users, label: 'Role', value: project.teamSize ? `${project.role} · ${project.teamSize}` : project.role },
  ];

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="container relative py-12 sm:py-16">
          <Link to="/work" className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent">
            <ArrowLeft className="h-4 w-4" /> All work
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <Tag tone="accent">{project.domain}</Tag>
            {account && (
              <Link to={`/clients/${account.slug}`} className="text-sm text-text-muted hover:text-accent">
                Account: {account.name}
              </Link>
            )}
          </div>
          <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">{project.title}</h1>
          <p className="prose-muted mt-5 max-w-2xl text-base sm:text-lg">{project.summary}</p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="card p-4">
                <dt className="flex items-center gap-2 text-xs uppercase tracking-wider text-text-subtle">
                  <f.icon className="h-3.5 w-3.5 text-accent" /> {f.label}
                </dt>
                <dd className="mt-1.5 text-sm font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-12">
            <Reveal>
              <p className="eyebrow mb-3">The challenge</p>
              <p className="prose-muted text-lg">{project.challenge}</p>
            </Reveal>
            <Reveal>
              <p className="eyebrow mb-4">Approach</p>
              <ol className="space-y-4">
                {project.approach.map((a, i) => (
                  <li key={a} className="flex gap-4">
                    <span className="font-display text-2xl font-semibold leading-none text-accent/70">0{i + 1}</span>
                    <p className="prose-muted">{a}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal>
              <p className="eyebrow mb-4">Outcomes</p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.outcomes.map((o) => (
                  <li key={o} className="card flex items-start gap-3 p-4 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {o}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="card p-6">
              <p className="eyebrow mb-4">Technology</p>
              <TagList items={project.tech} />
            </div>
            <div className="card p-6">
              <p className="eyebrow mb-3">Need something similar?</p>
              <p className="prose-muted text-sm">I can scope, prototype and deliver this class of work, or review what your team has already built.</p>
              <Button to="/contact" size="sm" className="mt-5" icon={<ArrowRight className="h-4 w-4" />}>
                Start a conversation
              </Button>
            </div>
          </aside>
        </div>
      </Section>

      {(related.length > 0 || next) && (
        <Section band compact>
          <div className="mb-6 flex items-center justify-between">
            <p className="eyebrow">Keep exploring</p>
            <Link to={`/work/${next.slug}`} className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent">
              Next: {next.title} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {(related.length ? related : [next]).map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
