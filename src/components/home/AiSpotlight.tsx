import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Sparkles } from 'lucide-react';
import { aiInitiatives, aiIntro } from '@/content/ai';
import { Section } from '@/components/ui/Section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { Tag, TagList } from '@/components/ui/Tag';
import { Button } from '@/components/ui/Button';

export function AiSpotlight() {
  return (
    <Section id="ai" band className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-info/10 blur-3xl" aria-hidden="true" />
      <div className="relative grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow mb-3 inline-flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5" /> {aiIntro.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-[2.75rem]">{aiIntro.title}</h2>
          <p className="prose-muted mt-5">{aiIntro.text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/ai" icon={<ArrowRight className="h-4 w-4" />}>
              Explore the AI work
            </Button>
            <Button to="/work/acc-mcp-server" variant="secondary">
              ACC MCP case study
            </Button>
          </div>
        </Reveal>

        <RevealGroup className="grid gap-3 sm:grid-cols-2">
          {aiInitiatives.map((a) => (
            <RevealItem key={a.id}>
              <Link to={`/ai#${a.id}`} className="card card-hover group flex h-full flex-col p-5">
                <div className="flex items-center justify-between gap-3">
                  <Bot className="h-5 w-5 text-accent" />
                  <Tag tone={a.status === 'Production' || a.status === 'Rolled out' ? 'accent' : 'outline'}>{a.status}</Tag>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug">{a.title}</h3>
                <p className="prose-muted mt-2 flex-1 text-sm">{a.summary}</p>
                <TagList items={a.tech} max={3} className="mt-4" />
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
