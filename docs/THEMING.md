# Theming

The whole look is controlled from **one file**: `src/styles/theme.css`.

## Colour tokens

Tokens are RGB channel triplets so Tailwind opacity modifiers work:

```css
--c-accent: 201 169 97;   /* #c9a961 gold */
```

| Token | Used for | Tailwind class |
| --- | --- | --- |
| `--c-bg` | page background | `bg-bg` |
| `--c-bg-elevated` | header / footer / banded sections | `bg-bg-elevated` |
| `--c-surface` | cards | `bg-surface` |
| `--c-surface-2` | nested cards, hover | `bg-surface-2` |
| `--c-border` | hairlines | `border-border` |
| `--c-border-strong` | emphasised borders | `border-border-strong` |
| `--c-text` | primary text | `text-text` |
| `--c-text-muted` | secondary text | `text-text-muted` |
| `--c-text-subtle` | captions, labels | `text-text-subtle` |
| `--c-accent` | brand colour | `text-accent`, `bg-accent`, `border-accent` |
| `--c-accent-2` | lighter brand for gradients | `bg-accent-2` |
| `--c-on-accent` | text placed on accent | `text-on-accent` |
| `--c-success`, `--c-info` | status colours | `text-success`, `bg-info/10` |

Dark values live under `:root`; light values under `:root[data-theme='light']`. The toggle
in the header switches the attribute and persists to `localStorage` (`vn-theme`).

### Change the brand colour
1. Pick the colour, convert to RGB channels (e.g. `#2563eb` → `37 99 235`).
2. Set `--c-accent` in both the dark and light blocks (light usually needs a darker shade for
   contrast on white).
3. Set `--c-accent-2` to a lighter tint for gradients and `--c-on-accent` to a readable text
   colour on the new accent.

### Add a new token
1. Add `--c-name: r g b;` to both blocks in `theme.css`.
2. Add `name: c('name')` under `theme.extend.colors` in `tailwind.config.js`.
3. Use `bg-name` / `text-name` in components.

## Typography

```css
--font-display: 'Cormorant Garamond', Georgia, serif;   /* headings */
--font-sans: 'DM Sans', Inter, system-ui, sans-serif;    /* body */
--font-mono: 'JetBrains Mono', Menlo, monospace;         /* eyebrows, dates */
```

To switch fonts, update the variables **and** the Google Fonts `<link>` in `index.html`.
Tailwind exposes them as `font-display`, `font-sans`, `font-mono`.

## Shape and layout

```css
--radius: 0.5rem;        /* rounded */
--radius-lg: 0.875rem;   /* rounded-lg (cards) */
--radius-xl: 1.25rem;    /* rounded-xl */
--content-width: 72rem;  /* max-w-content */
--marquee-duration: 45s; /* hero ticker speed */
```

## Shadows

`--shadow-card` and `--shadow-glow` map to `shadow-card` and `shadow-glow`.

## Reusable component classes (globals.css)

- `.eyebrow` — small uppercase mono label in accent colour
- `.card` — surface + border + shadow
- `.card-hover` — lift + glow on hover
- `.prose-muted` — muted body text with relaxed leading
- `.grid-bg` — faint blueprint grid used behind heroes
- `.gold-text` — gradient text using accent tokens

## Motion

Scroll reveals use `Reveal` / `RevealGroup` / `RevealItem` (framer-motion). Count-ups use
`useCountUp`. Everything respects `prefers-reduced-motion`.
