import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { site } from '@/config/site';
import { useTheme } from '@/hooks/useTheme';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled ? 'border-b border-border/70 bg-bg/80 backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <Link to="/" className="group flex items-center gap-3" aria-label={`${site.name} — home`}>
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent/40 bg-surface font-display text-lg font-bold text-accent transition group-hover:shadow-glow">
            {site.shortName}
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold tracking-wide">{site.name}</span>
            <span className="text-[0.68rem] uppercase tracking-[0.18em] text-text-subtle">AEC · BIM · AI Consultant</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                cn(
                  'relative rounded-full px-3.5 py-2 text-sm transition',
                  isActive ? 'text-accent' : 'text-text-muted hover:text-text',
                )
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-accent/10" transition={{ type: 'spring', stiffness: 400, damping: 30 }} />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-text-muted transition hover:border-accent hover:text-accent"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Button to={site.cta.primary.to} size="sm" className="hidden sm:inline-flex">
            {site.cta.primary.label}
          </Button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-text lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-border bg-bg/95 backdrop-blur-lg lg:hidden"
          >
            <nav className="container flex flex-col gap-1 py-6" aria-label="Mobile">
              {site.nav.map((item, i) => (
                <motion.div key={item.to} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * i }}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      cn(
                        'block rounded-lg px-4 py-3 font-display text-2xl font-semibold',
                        isActive ? 'bg-accent/10 text-accent' : 'text-text hover:bg-surface',
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <div className="mt-6 flex flex-col gap-3 px-4">
                <Button to={site.cta.primary.to} size="lg">
                  {site.cta.primary.label}
                </Button>
                <a href={`mailto:${site.email}`} className="text-center text-sm text-text-muted hover:text-accent">
                  {site.email}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
