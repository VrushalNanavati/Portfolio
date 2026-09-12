import { useState } from 'react';
import { site } from '@/config/site';
import { asset, cn, initials } from '@/lib/utils';

/**
 * Profile photo with an initials fallback.
 * Drop your photo at /public/images/profile.jpg (square, >= 800px) and it appears automatically.
 */
export function Avatar({ className, size = 'lg' }: { className?: string; size?: 'sm' | 'lg' }) {
  const [failed, setFailed] = useState(false);
  const dims = size === 'lg' ? 'h-40 w-40 sm:h-56 sm:w-56 text-5xl' : 'h-10 w-10 text-sm';
  return (
    <div className={cn('relative shrink-0 overflow-hidden rounded-full border-2 border-accent/50 bg-surface-2 shadow-glow', dims, className)}>
      {!failed ? (
        <img
          src={asset('images/profile.jpg')}
          alt={site.name}
          className="h-full w-full object-cover"
          loading="eager"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center font-display font-semibold text-accent">{initials(site.name)}</div>
      )}
    </div>
  );
}
