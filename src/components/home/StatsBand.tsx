import { stats } from '@/content/stats';
import { StatCard } from '@/components/ui/StatCard';
import { Section, SectionHeading } from '@/components/ui/Section';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';

export function StatsBand() {
  return (
    <Section id="impact" compact>
      <SectionHeading eyebrow="Impact at a glance" title="Numbers from running a business, not just writing code." className="mb-8 sm:mb-10" />
      <RevealGroup className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-6">
        {stats.map((s) => (
          <RevealItem key={s.label}>
            <StatCard stat={s} className="h-full" />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
