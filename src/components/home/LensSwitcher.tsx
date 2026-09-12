import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { lenses } from '@/content/lenses';
import { Section, SectionHeading } from '@/components/ui/Section';
import { cn } from '@/lib/utils';

/** Interactive "see me as a..." switcher. Same career, reframed for different readers. */
export function LensSwitcher() {
  const [active, setActive] = useState(lenses[0].id);
  const lens = lenses.find((l) => l.id === active) ?? lenses[0];

  return (
    <Section id="lenses" band>
      <SectionHeading
        eyebrow="One career, many hats"
        title="Which hat do you need me to wear?"
        text="I have worked as an engineer, architect, product owner, delivery head and technical seller. Pick the role you are hiring for and see how the same experience applies."
      />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,18rem)_1fr]">
        <div role="tablist" aria-label="Role lens" className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0">
          {lenses.map((l) => {
            const selected = l.id === active;
            return (
              <button
                key={l.id}
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(l.id)}
                className={cn(
                  'relative shrink-0 rounded-full border px-4 py-2.5 text-left text-sm font-medium transition lg:rounded-lg lg:px-5 lg:py-4',
                  selected ? 'border-accent/60 bg-accent/10 text-accent' : 'border-border bg-surface text-text-muted hover:border-border-strong hover:text-text',
                )}
              >
                {selected && <motion.span layoutId="lens-indicator" className="absolute left-0 top-1/2 hidden h-6 w-0.5 -translate-y-1/2 rounded-r bg-accent lg:block" />}
                {l.label}
              </button>
            );
          })}
        </div>

        <div className="card relative min-h-[20rem] overflow-hidden p-6 sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={lens.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              role="tabpanel"
            >
              <p className="eyebrow">{lens.label}</p>
              <h3 className="mt-3 text-2xl font-semibold leading-snug sm:text-3xl">{lens.headline}</h3>
              <p className="prose-muted mt-4">{lens.description}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {lens.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 rounded-lg border border-border bg-bg/40 p-3.5 text-sm text-text">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
