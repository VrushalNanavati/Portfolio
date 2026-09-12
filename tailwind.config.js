/** @type {import('tailwindcss').Config} */

/**
 * THEME WIRING
 * ------------
 * Every colour below points at a CSS custom property defined in `src/styles/theme.css`.
 * Change the palette there (one place) and the whole site, including dark/light modes,
 * follows. Tailwind opacity modifiers (e.g. `bg-accent/20`) keep working because the
 * variables hold raw RGB channels.
 */
const c = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', sm: '1.5rem', lg: '2rem' },
      screens: { '2xl': '1200px' },
    },
    extend: {
      colors: {
        bg: c('bg'),
        'bg-elevated': c('bg-elevated'),
        surface: c('surface'),
        'surface-2': c('surface-2'),
        border: c('border'),
        'border-strong': c('border-strong'),
        text: c('text'),
        'text-muted': c('text-muted'),
        'text-subtle': c('text-subtle'),
        accent: c('accent'),
        'accent-2': c('accent-2'),
        'on-accent': c('on-accent'),
        success: c('success'),
        info: c('info'),
      },
      fontFamily: {
        display: ['var(--font-display)'],
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        glow: 'var(--shadow-glow)',
      },
      maxWidth: { content: 'var(--content-width)' },
      transitionTimingFunction: { swift: 'cubic-bezier(0.22, 1, 0.36, 1)' },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        'fade-up': {
          from: { opacity: 0, transform: 'translateY(12px)' },
          to: { opacity: 1, transform: 'none' },
        },
        pulseSoft: { '0%,100%': { opacity: 0.6 }, '50%': { opacity: 1 } },
      },
      animation: {
        marquee: 'marquee var(--marquee-duration, 40s) linear infinite',
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both',
        'pulse-soft': 'pulseSoft 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
