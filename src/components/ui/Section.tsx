import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Adds the elevated band background. */
  band?: boolean;
  /** Tighter vertical padding. */
  compact?: boolean;
}

/** Consistent vertical rhythm + horizontal container for every page section. */
export function Section({ id, children, className, band, compact }: SectionProps) {
  return (
    <section id={id} className={cn(band && 'bg-bg-elevated/60 border-y border-border/60', compact ? 'py-12 sm:py-16' : 'py-16 sm:py-24', className)}>
      <div className="container">{children}</div>
    </section>
  );
}

interface HeadingProps {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: 'left' | 'center';
  className?: string;
  /** Optional element rendered to the right of the heading on wide screens (e.g. a "view all" link). */
  aside?: ReactNode;
}

export function SectionHeading({ eyebrow, title, text, align = 'left', className, aside }: HeadingProps) {
  return (
    <div className={cn('mb-10 sm:mb-14', align === 'center' && 'text-center', aside ? 'sm:flex sm:items-end sm:justify-between sm:gap-8' : undefined, className)}>
      <div className={cn(align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl')}>
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h2 className="text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-[2.75rem]">{title}</h2>
        {text && <p className="prose-muted mt-4 text-base sm:text-lg">{text}</p>}
      </div>
      {aside && <div className="mt-6 shrink-0 sm:mt-0">{aside}</div>}
    </div>
  );
}
