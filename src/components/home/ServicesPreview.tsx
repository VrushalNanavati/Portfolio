import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '@/content/services';
import { Section, SectionHeading } from '@/components/ui/Section';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import { Button } from '@/components/ui/Button';

export function ServicesPreview() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="How I help"
        title="Consulting built for teams shipping 3D, BIM and AI products."
        text="Six ways to engage, from a two-week feasibility sprint to a standing advisory seat."
        aside={
          <Button to="/services" variant="secondary" icon={<ArrowRight className="h-4 w-4" />}>
            All services
          </Button>
        }
      />
      <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <RevealItem key={s.id}>
            <Link to={`/services#${s.id}`} className="card card-hover group flex h-full flex-col p-6">
              <span className="grid h-11 w-11 place-items-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                <ServiceIcon icon={s.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl font-semibold leading-snug">{s.title}</h3>
              <p className="prose-muted mt-2 flex-1 text-sm">{s.hook}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
