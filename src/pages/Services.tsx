import { ArrowRight, Check } from 'lucide-react';
import { services } from '@/content/services';
import { contact } from '@/content/profile';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import { Button } from '@/components/ui/Button';
import { ContactCta } from '@/components/home/ContactCta';

export default function Services() {
  useDocumentTitle('Services', 'Consulting services for AEC, BIM, digital twin and manufacturing software: AI and MCP, product architecture, feasibility sprints, fractional leadership.');
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Consulting for teams building 3D, BIM and AI products."
        text="Every engagement combines domain depth, hands-on prototyping and the commercial judgment that comes from having owned a P&L. Pick the shape that fits your problem."
      >
        <div className="flex flex-wrap gap-2">
          {services.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm text-text-muted transition hover:border-accent hover:text-accent">
              {s.title}
            </a>
          ))}
        </div>
      </PageHero>

      <Section>
        <div className="space-y-6">
          {services.map((s, i) => (
            <Reveal key={s.id}>
              <article id={s.id} className="card scroll-mt-24 grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
                <div>
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                      <ServiceIcon icon={s.icon} className="h-6 w-6" />
                    </span>
                    <span className="font-mono text-xs text-text-subtle">0{i + 1}</span>
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold leading-snug sm:text-3xl">{s.title}</h2>
                  <p className="mt-2 text-lg text-accent/90">{s.hook}</p>
                  <p className="prose-muted mt-4">{s.description}</p>
                  <p className="mt-5 text-sm text-text-subtle">
                    <span className="font-medium text-text">Ideal for:</span> {s.idealFor}
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-bg/40 p-5">
                  <p className="eyebrow mb-4">What you get</p>
                  <ul className="space-y-3">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  <Button to="/contact" variant="secondary" size="sm" className="mt-6" icon={<ArrowRight className="h-4 w-4" />}>
                    Discuss this
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section band>
        <SectionHeading eyebrow="Engagement models" title="Flexible ways to work together." />
        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contact.engagementModels.map((m) => (
            <RevealItem key={m.title} className="card p-6">
              <h3 className="text-lg font-semibold">{m.title}</h3>
              <p className="prose-muted mt-2 text-sm">{m.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <ContactCta />
    </>
  );
}
