import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { site } from '@/config/site';
import { hero } from '@/content/profile';
import { Button } from '@/components/ui/Button';
import { Avatar } from '@/components/ui/Avatar';
import { Marquee } from '@/components/ui/Marquee';
import { SocialIcon } from '@/components/ui/SocialIcon';

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative grid items-center gap-12 pb-16 pt-12 sm:pt-16 lg:grid-cols-[1.35fr_1fr] lg:gap-16 lg:pb-24 lg:pt-24">
        <div>
          {site.availability.open && (
            <motion.div {...fade(0)} className="mb-6 inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1.5 text-xs font-medium text-success">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              {site.availability.label}
            </motion.div>
          )}

          <motion.p {...fade(0.05)} className="eyebrow mb-5">
            {hero.eyebrow}
          </motion.p>

          <motion.h1 {...fade(0.1)} className="text-[2.6rem] font-semibold leading-[1.02] sm:text-6xl lg:text-[4.4rem]">
            {hero.headline}
          </motion.h1>

          <motion.p {...fade(0.2)} className="prose-muted mt-7 max-w-2xl text-base sm:text-lg">
            {hero.intro}
          </motion.p>

          <motion.div {...fade(0.3)} className="mt-9 flex flex-wrap items-center gap-3">
            <Button to={site.cta.primary.to} size="lg" icon={<ArrowRight className="h-4 w-4" />}>
              {site.cta.primary.label}
            </Button>
            <Button to={site.cta.secondary.to} variant="secondary" size="lg">
              {site.cta.secondary.label}
            </Button>
          </motion.div>

          <motion.div {...fade(0.4)} className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-text-subtle">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-accent" /> {site.location.split('·')[0].trim()}
            </span>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span className="flex items-center gap-3">
              {site.socials.map((s) => (
                <a key={s.id} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="text-text-subtle transition hover:text-accent">
                  <SocialIcon id={s.id} className="h-4 w-4" />
                </a>
              ))}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex w-full max-w-sm flex-col items-center lg:max-w-none"
        >
          <div className="card relative w-full overflow-hidden p-6 sm:p-8">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
            <div className="flex flex-col items-center text-center">
              <Avatar />
              <p className="mt-6 font-display text-2xl font-semibold">{site.name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-text-subtle">Independent consultant</p>
              <div className="mt-6 grid w-full grid-cols-3 divide-x divide-border rounded-lg border border-border bg-bg/50">
                {hero.quickFacts.map((s) => (
                  <div key={s.label} className="px-2 py-3">
                    <p className="font-display text-xl font-semibold text-accent">{s.value}</p>
                    <p className="text-[0.68rem] uppercase tracking-wider text-text-subtle">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative border-y border-border/60 bg-bg-elevated/50 py-3">
        <Marquee speed="50s">
          {hero.proofPoints.map((p) => (
            <span key={p} className="inline-flex items-center gap-3 whitespace-nowrap px-3 text-sm text-text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {p}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
