import { Link } from 'react-router-dom';
import { ArrowUpRight, Briefcase } from 'lucide-react';
import { experience } from '@/content/experience';
import { skillGroups } from '@/content/skills';
import { getProject } from '@/content/projects';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { Tag } from '@/components/ui/Tag';
import { SpeakingStrip } from '@/components/home/SpeakingStrip';
import { cn } from '@/lib/utils';

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <li>
      <div className="flex items-baseline justify-between gap-4 text-sm">
        <span>{name}</span>
        <span className="font-mono text-xs text-text-subtle">{level}/5</span>
      </div>
      <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-border">
        <div className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2 transition-all duration-700" style={{ width: `${(level / 5) * 100}%` }} />
      </div>
    </li>
  );
}

export default function Journey() {
  useDocumentTitle('Journey', 'Career timeline from C++ developer to business unit head to independent AEC/BIM/AI consultant, plus skills.');
  return (
    <>
      <PageHero
        eyebrow="Journey"
        title="Ten years, one direction: closer to where technology meets the business."
        text="Each role added a layer of responsibility without giving up the previous one. I still write code, still lead teams and still own outcomes with clients."
      />

      <Section>
        <ol className="relative border-l border-border pl-8 sm:pl-12">
          {experience.map((e, i) => (
            <Reveal key={e.id} as="li" className="relative pb-14 last:pb-0">
              <span
                className={cn(
                  'absolute -left-[2.35rem] top-1.5 grid h-8 w-8 place-items-center rounded-full border bg-bg sm:-left-[3.35rem]',
                  i === 0 ? 'border-accent text-accent shadow-glow' : 'border-border-strong text-text-subtle',
                )}
                aria-hidden="true"
              >
                <Briefcase className="h-3.5 w-3.5" />
              </span>
              <article id={e.id} className="card scroll-mt-28 p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="font-mono text-xs text-accent">
                    {e.start} — {e.end}
                  </span>
                  {e.tag && <Tag tone="outline">{e.tag}</Tag>}
                </div>
                <h2 className="mt-3 text-2xl font-semibold leading-snug sm:text-3xl">{e.title}</h2>
                <p className="mt-1 text-text-muted">
                  {e.company} · {e.location}
                </p>
                <p className="prose-muted mt-4">{e.summary}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {e.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
                {e.projects && e.projects.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {e.projects.map((slug) => {
                      const p = getProject(slug);
                      if (!p) return null;
                      return (
                        <Link key={slug} to={`/work/${slug}`} className="inline-flex items-center gap-1 rounded-full border border-border bg-bg/50 px-3 py-1.5 text-xs text-text-muted transition hover:border-accent hover:text-accent">
                          {p.title} <ArrowUpRight className="h-3 w-3" />
                        </Link>
                      );
                    })}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section band>
        <SectionHeading eyebrow="Capabilities" title="Depth where it matters, breadth where it helps." />
        <RevealGroup className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((g) => (
            <RevealItem key={g.id} className="card p-6 sm:p-8">
              <h3 className="text-xl font-semibold">{g.title}</h3>
              <p className="prose-muted mt-1 text-sm">{g.description}</p>
              <ul className="mt-6 space-y-4">
                {g.skills.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} />
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <SpeakingStrip limit={8} />
    </>
  );
}
