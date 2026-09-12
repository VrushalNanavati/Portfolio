import { Award, BookOpen, Mic, Presentation, Users, Video } from 'lucide-react';
import { talks } from '@/content/talks';
import type { Talk } from '@/content/types';
import { Section, SectionHeading } from '@/components/ui/Section';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';

const icons: Record<Talk['type'], typeof Mic> = {
  Speaking: Mic,
  Conference: Presentation,
  Webinar: Video,
  Writing: BookOpen,
  Certification: Award,
  Community: Users,
};

export function SpeakingStrip({ limit = 4 }: { limit?: number }) {
  const items = talks.slice(0, limit);
  return (
    <Section id="speaking" band compact>
      <SectionHeading eyebrow="Speaking & writing" title="Sharing what works in AI for AEC." className="mb-8" />
      <RevealGroup className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((t) => {
          const Icon = icons[t.type];
          const inner = (
            <>
              <div className="flex items-center gap-2 text-xs text-text-subtle">
                <Icon className="h-4 w-4 text-accent" />
                <span>{t.type}</span>
                <span aria-hidden="true">·</span>
                <span>{t.date}</span>
              </div>
              <h3 className="mt-3 text-base font-semibold leading-snug">{t.title}</h3>
              <p className="mt-1 text-sm text-text-muted">{t.venue}</p>
            </>
          );
          return (
            <RevealItem key={t.id}>
              {t.href ? (
                <a href={t.href} target="_blank" rel="noreferrer" className="card card-hover block h-full p-5">
                  {inner}
                </a>
              ) : (
                <div className="card h-full p-5">{inner}</div>
              )}
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
