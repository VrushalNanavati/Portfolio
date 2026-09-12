import { ArrowRight, Mail } from 'lucide-react';
import { site } from '@/config/site';
import { contact } from '@/content/profile';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';

export function ContactCta() {
  return (
    <Section id="contact-cta">
      <Reveal className="card relative overflow-hidden p-8 text-center sm:p-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(var(--c-accent)/0.14),transparent_60%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-2xl">
          <p className="eyebrow mb-4">{contact.eyebrow}</p>
          <h2 className="text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-5xl">{contact.title}</h2>
          <p className="prose-muted mt-5 sm:text-lg">{contact.text}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button to="/contact" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
              {site.cta.primary.label}
            </Button>
            <Button to={`mailto:${site.email}`} variant="secondary" size="lg" icon={<Mail className="h-4 w-4" />}>
              Email directly
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
