import type { Stat } from '@/content/types';
import { useCountUp } from '@/hooks/useCountUp';
import { cn } from '@/lib/utils';

export function StatCard({ stat, className }: { stat: Stat; className?: string }) {
  const { ref, value } = useCountUp(stat.value, { decimals: stat.decimals ?? 0 });
  const display = (stat.decimals ?? 0) > 0 ? value.toFixed(stat.decimals) : Math.round(value).toString();
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={cn('card p-5 sm:p-6', className)}>
      <div className="font-display text-4xl font-semibold leading-none tracking-tight sm:text-[2.75rem]">
        <span className="gold-text">
          {stat.prefix}
          {display}
          {stat.suffix}
        </span>
      </div>
      <p className="mt-3 text-sm font-medium text-text">{stat.label}</p>
      {stat.note && <p className="mt-1 text-xs text-text-subtle">{stat.note}</p>}
    </div>
  );
}
