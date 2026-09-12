# Content guide

All visitor-facing text lives in `src/config/site.ts` and `src/content/*.ts`. Edit those files,
run `npm run dev`, and the site updates live. `npm run build` will refuse to build if a
required field is missing or misspelled, which is the point.

## Add a case study (`/work/:slug`)

Open `src/content/projects.ts` and add an object to the `projects` array:

```ts
{
  slug: 'my-new-project',            // URL: /work/my-new-project  (lowercase, hyphens)
  title: 'Human-readable title',
  client: 'Client name or "Internal R&D"',
  accountSlug: 'autodesk',           // optional; must match a slug in accounts.ts
  location: 'City, Country',
  period: '2025',
  domain: 'AI & Agents',             // one of the ProjectDomain values in types.ts
  role: 'Architect',
  teamSize: '6-person team',         // optional
  summary: 'One or two sentences for cards.',
  challenge: 'What problem the client had.',
  approach: ['Step one.', 'Step two.'],
  outcomes: ['Result one', 'Result two'],
  tech: ['MCP', 'TypeScript'],
  featured: true,                    // optional; featured projects appear on Home
}
```

Order in the array is the order on `/work`. The first `featured` project spans two columns
on the home page, so put the strongest one first.

## Add a client account (`/clients/:slug`)

`src/content/accounts.ts` → add to `accounts`. Required: `slug`, `name`, `industry`,
`location`, `region`, `engagementType`, `summary`, `story[]`, `outcomes[]`. Set
`featured: true` to show it on Home. Add `projects: ['slug', ...]` to link case studies.

## Add a role to the timeline (`/journey`)

`src/content/experience.ts` → add to `experience` (newest first). `id` becomes the anchor
(`/journey#id`). `projects` links to case-study slugs and renders as chips.

## Update the headline numbers

`src/content/stats.ts`. `value` is numeric; `prefix`/`suffix` are text; `decimals`
controls formatting (e.g. `2.5` with `decimals: 1`). Six stats fit the grid best.

## Change the role lenses ("Which hat…")

`src/content/lenses.ts`. Each lens has `label` (the tab), `headline`, `description` and four
`bullets`. Keep bullets to one line each; they render in a 2-column grid.

## Add a talk, article or certification

`src/content/talks.ts`. `type` drives the icon. `href` is optional; when present the card
becomes a link. The home page shows the first four; `/journey` shows the first eight.

## Add an AI initiative

`src/content/ai.ts` → `aiInitiatives`. `status` must be one of `Production | Pilot |
Prototype | Rolled out`. `id` becomes the anchor `/ai#id`.

## Add a service

`src/content/services.ts`. `icon` must be one of `compass | cpu | boxes | rocket | users |
handshake`. To add a new icon, extend the `Service['icon']` union in `types.ts` and the map in
`src/components/ui/ServiceIcon.tsx`.

## Change contact details, navigation or CTAs

`src/config/site.ts`. The `availability` object controls the green pill in the hero.

## Photos and files

- Headshot: `public/images/profile.jpg` (square, ≥ 800px).
- Social share image: `public/images/og-cover.png` (1200×630).
- PDFs: `public/downloads/*.pdf`, then list them in `site.downloads`.

## Writing tone

Position as an independent industry expert, not a job seeker. Lead with outcomes and
specifics (numbers, named platforms), use plain verbs, avoid buzzwords. One idea per sentence.
