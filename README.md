# Vrushal Nanavati — Portfolio Website

Personal consulting website for Vrushal Nanavati: independent technical consultant for
AEC / BIM / Digital Twin / manufacturing software and AI in AEC.

Static site built with **React 18 + TypeScript + Vite + Tailwind CSS**, deployable to
**GitHub Pages** with zero backend.

## Quick start

```bash
npm install        # once
npm run dev        # http://localhost:5173 with hot reload
npm run build      # typecheck + production build into dist/
npm run preview    # serve dist/ locally
```

Node 18+ required (Node 20 recommended).

## Project layout

```
.
├── index.html                  # HTML shell, fonts, meta tags, theme pre-paint script
├── vite.config.ts              # base path, @ alias, chunking
├── tailwind.config.js          # maps Tailwind colours to CSS variables (do not hard-code colours)
├── scripts/postbuild.mjs       # writes dist/404.html + .nojekyll for GitHub Pages
├── .github/workflows/deploy.yml# CI: build + deploy to Pages on push to main
├── public/
│   ├── favicon.svg
│   ├── images/                 # profile.jpg, og-cover.png (see README inside)
│   └── downloads/              # optional PDFs linked from About
└── src/
    ├── config/site.ts          # name, contact, socials, nav, CTAs        ← edit often
    ├── content/                # ALL page copy and data, strictly typed   ← edit often
    │   ├── types.ts            # shared interfaces
    │   ├── profile.ts          # hero, positioning, about, contact copy
    │   ├── stats.ts            # headline numbers (count-up)
    │   ├── lenses.ts           # "which hat" role switcher
    │   ├── services.ts         # consulting offerings
    │   ├── accounts.ts         # key accounts → /clients/:slug
    │   ├── projects.ts         # case studies → /work/:slug
    │   ├── experience.ts       # career timeline → /journey
    │   ├── skills.ts           # skill groups with 1–5 levels
    │   ├── talks.ts            # speaking, writing, certifications
    │   └── ai.ts               # AI-in-AEC initiatives and principles
    ├── styles/
    │   ├── theme.css           # CENTRAL THEME: colours, fonts, radii (dark + light)
    │   └── globals.css         # Tailwind layers + small component classes
    ├── components/
    │   ├── layout/             # Header, Footer, Layout, PageHero
    │   ├── ui/                 # Button, Section, Tag, Reveal, StatCard, Cards, ...
    │   └── home/               # one component per home-page section
    ├── pages/                  # route components (lazy loaded)
    ├── hooks/                  # useTheme, useCountUp, useDocumentTitle
    └── lib/utils.ts            # cn(), asset(), isExternal(), initials()
```

## Editing content

Everything a visitor reads lives in `src/config/site.ts` and `src/content/*.ts`.
Components never contain copy. See [docs/CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md) for
how to add a project, an account, a role or a talk.

## Changing the look

All colours, fonts and radii are CSS variables in `src/styles/theme.css`. Tailwind reads
them through `tailwind.config.js`, so `bg-accent`, `text-text-muted`, etc. update
everywhere. Dark is default; light mode overrides only colour tokens. See
[docs/THEMING.md](docs/THEMING.md).

## Deploying to GitHub Pages

1. Push this repository to GitHub.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and deploys.

The workflow derives the base path automatically: `/` for a `<user>.github.io` repo,
`/<repo>/` for any other repo. For manual deploys see
[docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

## Routes

| Path | Page |
| --- | --- |
| `/` | Home: hero, stats, role lenses, positioning, services, work, clients, AI, journey, speaking, CTA |
| `/services` | Consulting offerings and engagement models |
| `/work`, `/work/:slug` | Filterable case studies and detail pages |
| `/clients`, `/clients/:slug` | Accounts and account stories |
| `/ai` | AI in AEC initiatives, architecture and principles |
| `/journey` | Career timeline, skills, speaking |
| `/about` | Bio, current focus, education, downloads |
| `/contact` | Pre-filled mailto form, direct contact |

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with HMR |
| `npm run build` | `tsc --noEmit` + `vite build` + postbuild (404.html, .nojekyll) |
| `npm run preview` | Serve the built site |
| `npm run lint` | Typecheck only |
| `npm run deploy` | Build and push `dist/` to the `gh-pages` branch (alternative to Actions) |

## Licence

Content © Vrushal Nanavati. Code may be reused for personal portfolios with attribution.
