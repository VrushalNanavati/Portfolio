import { ArrowRight } from 'lucide-react';
import { featuredProjects } from '@/content/projects';
import { Section, SectionHeading } from '@/components/ui/Section';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { ProjectCard } from '@/components/ui/Cards';
import { Button } from '@/components/ui/Button';

export function FeaturedWork() {
  return (
    <Section id="work" band>
      <SectionHeading
        eyebrow="Selected work"
        title="Platforms, plugins and agents that shipped."
        text="A few engagements that show the range: BIM SaaS at scale, IoT digital twins, and AI agents on construction data."
        aside={
          <Button to="/work" variant="secondary" icon={<ArrowRight className="h-4 w-4" />}>
            All case studies
          </Button>
        }
      />
      <RevealGroup className="grid gap-4 md:grid-cols-2">
        {featuredProjects.map((p, i) => (
          <RevealItem key={p.slug} className={i === 0 ? 'md:col-span-2' : undefined}>
            <ProjectCard project={p} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
