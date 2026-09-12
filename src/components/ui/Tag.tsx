import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TagProps {
  children: ReactNode;
  tone?: 'neutral' | 'accent' | 'outline';
  className?: string;
}

/** Small pill for tech stacks, engagement types and statuses. */
export function Tag({ children, tone = 'neutral', className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium leading-none tracking-wide',
        tone === 'neutral' && 'bg-surface-2 text-text-muted border border-border',
        tone === 'accent' && 'bg-accent/12 text-accent border border-accent/30',
        tone === 'outline' && 'border border-border-strong text-text-muted',
        className,
      )}
    >
      {children}
    </span>
  );
}

export function TagList({ items, tone, className, max }: { items: readonly string[]; tone?: TagProps['tone']; className?: string; max?: number }) {
  const shown = max ? items.slice(0, max) : items;
  const rest = max ? items.length - shown.length : 0;
  return (
    <div className={cn('flex flex-wrap gap-1.5', className)}>
      {shown.map((t) => (
        <Tag key={t} tone={tone}>
          {t}
        </Tag>
      ))}
      {rest > 0 && <Tag tone="outline">+{rest}</Tag>}
    </div>
  );
}
