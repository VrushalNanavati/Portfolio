import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/** Infinite horizontal scroller. Children are duplicated once for a seamless loop; pauses on hover. */
export function Marquee({ children, className, speed }: { children: ReactNode; className?: string; speed?: string }) {
  return (
    <div className={cn('mask-fade-x overflow-hidden', className)} style={speed ? ({ '--marquee-duration': speed } as React.CSSProperties) : undefined}>
      <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
        <div className="flex shrink-0 gap-3">{children}</div>
        <div className="flex shrink-0 gap-3" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
