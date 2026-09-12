import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn, isExternal } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  to?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
  type?: 'button' | 'submit';
  ariaLabel?: string;
}

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-on-accent hover:bg-accent-2 shadow-[0_8px_24px_-10px_rgb(var(--c-accent)/0.6)]',
  secondary:
    'border border-border-strong bg-surface/60 text-text hover:border-accent hover:text-accent backdrop-blur',
  ghost: 'text-text-muted hover:text-accent',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3.5 text-sm gap-1.5',
  md: 'h-11 px-5 text-sm gap-2',
  lg: 'h-12 px-6 text-base gap-2',
};

/** Link-aware button. Renders <a> for external URLs, <Link> for internal routes, <button> otherwise. */
export function Button({ to, onClick, variant = 'primary', size = 'md', className, children, icon, type = 'button', ariaLabel }: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-full font-medium transition duration-300 ease-swift',
    'active:scale-[0.98] disabled:opacity-50',
    variants[variant],
    sizes[size],
    className,
  );
  const content = (
    <>
      <span>{children}</span>
      {icon && <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>}
    </>
  );

  if (to && isExternal(to)) {
    return (
      <a href={to} target={to.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={cn('group', classes)} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }
  if (to) {
    return (
      <Link to={to} className={cn('group', classes)} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cn('group', classes)} aria-label={ariaLabel}>
      {content}
    </button>
  );
}
