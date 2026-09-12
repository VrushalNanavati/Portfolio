import { Award, Download, GraduationCap } from 'lucide-react';
import { site } from '@/config/site';
import { about } from '@/content/profile';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { Avatar } from '@/components/ui/Avatar';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { ContactCta } from '@/components/home/ContactCta';
import { asset } from '@/lib/utils';

export default function About() {
  useDocumentTitle('About', 'About Vrushal Nanavati: from computational geometry to business unit leadership to independent AEC/BIM/AI consulting.');
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="container relative grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow mb-4">{about.eyebrow}</p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">{about.title}</h1>
            <div className="mt-6 flex items-center gap-3">
              {site.socials.map((s) => (
                <a key={s.id} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="grid h-10 w-10 place-items-center rounded-full border border-border text-text-muted transition hover:border-accent hover:text-accent">
                  <SocialIcon id={s.id} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <Avatar className="mx-auto lg:mx-0" />
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="space-y-5">
            {about.paragraphs.map((p) => (
              <p key={p} className="prose-muted text-lg">
                {p}
              </p>
            ))}
          </Reveal>
          <aside className="space-y-6">
            <div className="card p-6">
              <p className="eyebrow mb-4">{about.currentFocus.title}</p>
              <ul className="space-y-3">
                {about.currentFocus.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-success" /> {i}
                  </li>
                ))}
              </ul>
            </div>
            <dl className="card divide-y divide-border">
              {about.personal.map((p) => (
                <div key={p.label} className="flex items-start justify-between gap-4 px-6 py-3.5 text-sm">
                  <dt className="text-text-subtle">{p.label}</dt>
                  <dd className="text-right font-medium">{p.value}</dd>
                </div>
              ))}
            </dl>
            {site.downloads.length > 0 && (
              <div className="card p-6">
                <p className="eyebrow mb-4">Downloads</p>
                <ul className="space-y-2">
                  {site.downloads.map((d) => (
                    <li key={d.href}>
                      <a href={asset(d.href)} className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent" download>
                        <Download className="h-4 w-4 text-accent" /> {d.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Section>

      <Section band compact>
        <SectionHeading eyebrow="Education & credentials" title="Foundations." className="mb-8" />
        <RevealGroup className="grid gap-4 md:grid-cols-2">
          {about.education.map((e) => (
            <RevealItem key={e.degree} className="card flex gap-4 p-6">
              <GraduationCap className="h-6 w-6 shrink-0 text-accent" />
              <div>
                <h3 className="text-lg font-semibold">{e.degree}</h3>
                <p className="mt-1 text-sm text-text-muted">{e.school}</p>
                <p className="text-sm text-text-subtle">
                  {e.board} · {e.year}
                </p>
              </div>
            </RevealItem>
          ))}
          {about.certifications.map((c) => (
            <RevealItem key={c.name} className="card flex gap-4 p-6">
              <Award className="h-6 w-6 shrink-0 text-accent" />
              <div>
                <h3 className="text-lg font-semibold">{c.name}</h3>
                <p className="mt-1 text-sm text-text-muted">
                  {c.issuer} · {c.year}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <ContactCta />
    </>
  );
}
