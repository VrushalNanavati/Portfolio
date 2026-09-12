import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { domains, projects } from '@/content/projects';
import type { ProjectDomain } from '@/content/types';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { PageHero } from '@/components/layout/PageHero';
import { Section } from '@/components/ui/Section';
import { ProjectCard } from '@/components/ui/Cards';
import { cn } from '@/lib/utils';

type Filter = 'All' | ProjectDomain;

export default function Work() {
  useDocumentTitle('Work', 'Case studies across BIM platforms, digital twins, CAD plugins, GIS, rendering and AI agents for construction data.');
  const [filter, setFilter] = useState<Filter>('All');
  const counts = useMemo(() => {
    const c: Record<string, number> = { All: projects.length };
    for (const p of projects) c[p.domain] = (c[p.domain] ?? 0) + 1;
    return c;
  }, []);
  const visible = filter === 'All' ? projects : projects.filter((p) => p.domain === filter);

  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Case studies from a decade in AEC and manufacturing software."
        text="From solo C++ plugins to 24-person platform teams and AI agents on live construction data. Filter by domain."
      />
      <Section>
        <div role="tablist" aria-label="Filter projects by domain" className="no-scrollbar -mx-5 mb-8 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0">
          {(['All', ...domains] as Filter[])
            .filter((d) => counts[d])
            .map((d) => (
              <button
                key={d}
                role="tab"
                aria-selected={filter === d}
                onClick={() => setFilter(d)}
                className={cn(
                  'shrink-0 rounded-full border px-4 py-2 text-sm transition',
                  filter === d ? 'border-accent/60 bg-accent/10 text-accent' : 'border-border bg-surface text-text-muted hover:border-border-strong hover:text-text',
                )}
              >
                {d} <span className="ml-1 text-xs text-text-subtle">{counts[d]}</span>
              </button>
            ))}
        </div>

        <motion.div layout className="grid gap-4 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>
    </>
  );
}
