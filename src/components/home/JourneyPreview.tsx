import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { experience } from '@/content/experience';
import { Section, SectionHeading } from '@/components/ui/Section';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { Tag } from '@/components/ui/Tag';

/** Horizontal, scroll-snapping career strip. Full timeline lives at /journey. */
export function JourneyPreview() {
  return (
    <Section id="journey">
      <SectionHeading
        eyebrow="The journey"
        title="Developer to business unit head to independent consultant."
        text="Every step added a layer: geometry, then teams, then revenue, then AI. Scroll the strip or open the full timeline."
        aside={
          <Button to="/journey" variant="secondary" icon={<ArrowRight className="h-4 w-4" />}>
            Full timeline
          </Button>
        }
      />
      <RevealGroup className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0">
        {experience.slice(0, 6).map((e, i) => (
          <RevealItem key={e.id} className="w-[18rem] shrink-0 snap-start sm:w-[20rem] lg:w-auto">
            <Link to={`/journey#${e.id}`} className="card card-hover group relative flex h-full flex-col p-6">
              <span className="font-mono text-xs text-text-subtle">
                {e.start} — {e.end}
              </span>
              <h3 className="mt-3 text-lg font-semibold leading-snug">{e.title}</h3>
              <p className="mt-1 text-sm text-text-muted">{e.company}</p>
              {e.tag && (
                <Tag tone="accent" className="mt-4 self-start">
                  {e.tag}
                </Tag>
              )}
              <p className="prose-muted mt-4 line-clamp-3 flex-1 text-sm">{e.summary}</p>
              {i === 0 && <span className="absolute right-4 top-4 h-2 w-2 animate-pulse rounded-full bg-success" aria-hidden="true" />}
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
