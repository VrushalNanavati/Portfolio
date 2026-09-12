# CLAUDE.md — working notes for AI assistants and future maintainers

This is a static portfolio/consulting website for Vrushal Nanavati. Read this before changing anything.

## Stack
- React 18 + TypeScript (strict), Vite 5, Tailwind CSS 3, react-router-dom 6, framer-motion 11, lucide-react.
- No backend. Contact form builds a `mailto:` link. Deployed to GitHub Pages via `.github/workflows/deploy.yml`.
- Path alias `@/` → `src/` (configured in both `tsconfig.json` and `vite.config.ts`).

## Golden rules
1. **Copy lives in data, not components.** All text a visitor reads is in `src/config/site.ts` or `src/content/*.ts`. If you need to change wording, edit there. If a component contains a hard-coded sentence, that is a bug to fix by moving it into content.
2. **Colours come from the theme.** Never write hex/rgb colours in components. Use semantic Tailwind classes (`bg-surface`, `text-text-muted`, `border-border`, `text-accent`, ...). To change the palette, edit `src/styles/theme.css`. Add a new token there *and* in `tailwind.config.js`.
3. **Types are the schema.** Content files import interfaces from `src/content/types.ts`. Adding a field means updating the type, then the data, then the component that renders it. `npm run build` fails on mismatches on purpose.
4. **Slugs are URLs.** `projects[].slug` → `/work/:slug`; `accounts[].slug` → `/clients/:slug`; `experience[].id` → `/journey#id`; `services[].id` → `/services#id`; `aiInitiatives[].id` → `/ai#id`. Cross-references (`accountSlug`, `projects: [...]`) must match existing slugs.
5. **Keep it static.** Anything that needs a server (form storage, analytics with secrets) must be an external service dropped in via script tag or a `mailto:`-style fallback.
6. **Responsive first.** Every new section must work at 360px. Horizontal overflow is only allowed inside `.no-scrollbar` scrollers with `-mx-5 px-5` gutters.
7. **Motion is optional.** Use `Reveal`/`RevealGroup` for scroll reveals. Respect `prefers-reduced-motion` (already handled globally in `globals.css` and in `useCountUp`).

## Where things are
| Want to... | Edit |
| --- | --- |
| Change name, email, phone, socials, nav order, CTAs | `src/config/site.ts` |
| Change hero headline / intro / positioning / about / contact copy | `src/content/profile.ts` |
| Change headline numbers | `src/content/stats.ts` |
| Add or edit a case study | `src/content/projects.ts` (see `docs/CONTENT_GUIDE.md`) |
| Add or edit a client account | `src/content/accounts.ts` |
| Add a role to the timeline | `src/content/experience.ts` |
| Add a talk / article / certification | `src/content/talks.ts` |
| Add an AI initiative | `src/content/ai.ts` |
| Add a consulting service | `src/content/services.ts` (icon must be one of the `Service['icon']` union values; map new icons in `components/ui/ServiceIcon.tsx`) |
| Add/rename a role lens | `src/content/lenses.ts` |
| Reorder home sections | `src/pages/Home.tsx` |
| Change colours / fonts / radii | `src/styles/theme.css` (+ `tailwind.config.js` for new tokens, + `index.html` Google Fonts link for new fonts) |
| Add a page | create `src/pages/X.tsx`, register lazy route in `src/App.tsx`, add to `site.nav` if it belongs in the menu |
| Change base path for a project-site deploy | `.env.production` (`VITE_BASE_PATH=/repo/`) or let CI derive it |

## Commands
```bash
npm run dev       # local dev
npm run build     # typecheck + build + postbuild; must pass before committing
npm run preview   # serve dist
```

## Conventions
- Components: PascalCase files, named exports (pages use default export for `lazy()`).
- Tailwind class order: layout → spacing → typography → colour → effects. Use `cn()` from `@/lib/utils` for conditional classes.
- Use `Button` for any link that looks like a button; it handles internal vs external vs `mailto:` automatically.
- Use `asset('images/x.jpg')` for anything under `/public` so project-site base paths work.
- Icons from `lucide-react` only. Keep icon imports specific (tree-shaken).
- Keep `Section` + `SectionHeading` for every page section for consistent rhythm.

## Things that look odd but are intentional
- `index.html` has an inline script that applies the saved theme before React mounts (avoids flash).
- `scripts/postbuild.mjs` copies `index.html` → `404.html` so deep links work on GitHub Pages with `BrowserRouter`.
- `Avatar` falls back to initials if `public/images/profile.jpg` is missing.
- `site.downloads` is an empty array until PDFs are dropped into `public/downloads/`.
- Colour tokens are RGB channel triplets (`201 169 97`) so Tailwind opacity modifiers (`bg-accent/10`) work.

## Content accuracy
Facts (revenue, team sizes, client names, dates, talks) came from the owner's resumes and public LinkedIn posts as of Sept 2026. When adding claims, prefer verifiable ones; do not invent metrics.
