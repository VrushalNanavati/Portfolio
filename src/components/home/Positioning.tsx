import { positioning } from '@/content/profile';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';

export function Positioning() {
  return (
    <Section id="why">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow={positioning.eyebrow} title={positioning.title} className="mb-6" />
          <Reveal className="space-y-4">
            {positioning.paragraphs.map((p) => (
              <p key={p} className="prose-muted text-base sm:text-lg">
                {p}
              </p>
            ))}
          </Reveal>
        </div>
        <RevealGroup className="grid gap-4">
          {positioning.pillars.map((p, i) => (
            <RevealItem key={p.title} className="card card-hover flex gap-5 p-6">
              <span className="font-display text-3xl font-semibold text-accent/70">0{i + 1}</span>
              <div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="prose-muted mt-2 text-sm">{p.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
