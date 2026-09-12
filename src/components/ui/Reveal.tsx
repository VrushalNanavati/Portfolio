import type { ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

const variants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Render as a different element, e.g. 'li'. */
  as?: 'div' | 'li' | 'article' | 'span';
}

/** Fades content up when it first scrolls into view. */
export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const Comp = motion[as];
  return (
    <Comp
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ delay }}
    >
      {children}
    </Comp>
  );
}

/** Staggers children that are themselves <RevealItem>. */
export function RevealGroup({ children, className, stagger = 0.08 }: { children: ReactNode; className?: string; stagger?: number }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-8% 0px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className, as = 'div' }: { children: ReactNode; className?: string; as?: 'div' | 'li' | 'article' }) {
  const Comp = motion[as];
  return (
    <Comp className={className} variants={variants}>
      {children}
    </Comp>
  );
}
