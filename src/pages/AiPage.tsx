import { ArrowRight, Bot, ExternalLink } from 'lucide-react';
import { aiInitiatives, aiIntro, aiPrinciples } from '@/content/ai';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { Tag, TagList } from '@/components/ui/Tag';
import { Button } from '@/components/ui/Button';
import { ContactCta } from '@/components/home/ContactCta';

/** Simple architecture diagram rendered with CSS so it inherits the theme. */
function ArchitectureDiagram() {
  const cols = [
    { title: 'People & agents', items: ['Project managers', 'Claude / AI assistants', 'Scheduled agents'] },
    { title: 'MCP layer', items: ['Typed tools', 'Scoped OAuth', 'Prioritisation skills', 'Audit & guardrails'] },
    { title: 'Construction data', items: ['ACC Issues & RFIs', 'Autodesk Forma', 'Procore', 'Model Derivative'] },
  ];
  return (
    <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
      {cols.map((c, i) => (
        <div key={c.title} className="contents">
          <div className="card p-5">
            <p className="eyebrow mb-3">{c.title}</p>
            <ul className="space-y-2">
              {c.items.map((it) => (
                <li key={it} className="rounded border border-border bg-bg/40 px-3 py-2 text-sm">
                  {it}
                </li>
              ))}
            </ul>
          </div>
          {i < cols.length - 1 && (
            <div className="hidden items-center md:flex" aria-hidden="true">
              <ArrowRight className="h-5 w-5 text-accent" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function AiPage() {
  useDocumentTitle('AI in AEC', aiIntro.text);
  return (
    <>
      <PageHero eyebrow={aiIntro.eyebrow} title={aiIntro.title} text={aiIntro.text}>
        <div className="flex flex-wrap gap-3">
          <Button to="/work/acc-mcp-server" icon={<ArrowRight className="h-4 w-4" />}>
            Read the ACC MCP case study
          </Button>
          <Button to="/services#ai-in-aec" variant="secondary">
            AI consulting services
          </Button>
        </div>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="How it fits together" title="A thin, well-guarded layer between AI and your project data." />
        <Reveal>
          <ArchitectureDiagram />
        </Reveal>
      </Section>

      <Section band>
        <SectionHeading eyebrow="Initiatives" title="What has actually been built." />
        <div className="space-y-4">
          {aiInitiatives.map((a) => (
            <Reveal key={a.id}>
              <article id={a.id} className="card scroll-mt-24 grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.3fr_1fr]">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Bot className="h-5 w-5 text-accent" />
                    <Tag tone={a.status === 'Production' || a.status === 'Rolled out' ? 'accent' : 'outline'}>{a.status}</Tag>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold leading-snug">{a.title}</h3>
                  <p className="prose-muted mt-3">{a.summary}</p>
                  <TagList items={a.tech} className="mt-5" />
                  {a.href && (
                    <a href={a.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-sm text-accent hover:underline">
                      Read the announcement <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
                <ul className="space-y-2 rounded-lg border border-border bg-bg/40 p-5 text-sm">
                  {a.details.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Principles" title="How I keep AI projects out of the demo graveyard." />
        <RevealGroup className="grid gap-4 sm:grid-cols-2">
          {aiPrinciples.map((p, i) => (
            <RevealItem key={p.title} className="card card-hover flex gap-5 p-6">
              <span className="font-display text-3xl font-semibold text-accent/70">0{i + 1}</span>
              <div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="prose-muted mt-2 text-sm">{p.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <ContactCta />
    </>
  );
}
