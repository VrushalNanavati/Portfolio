import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  text?: string;
  children?: ReactNode;
}

/** Compact hero used at the top of every inner page. */
export function PageHero({ eyebrow, title, text, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container relative py-14 sm:py-20">
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="eyebrow mb-4">
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {text && (
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="prose-muted mt-5 max-w-2xl text-base sm:text-lg">
            {text}
          </motion.p>
        )}
        {children && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-8">
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
