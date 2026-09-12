# Deployment to GitHub Pages

## Option A — GitHub Actions (recommended)

1. Create a GitHub repository and push this code to the `main` branch.
   - For a **user site** name the repo `<username>.github.io` → site at `https://<username>.github.io/`.
   - For a **project site** use any name → site at `https://<username>.github.io/<repo>/`.
2. Repo **Settings → Pages → Build and deployment → Source**: choose **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the Actions tab).

The workflow (`.github/workflows/deploy.yml`) installs, typechecks, builds and deploys `dist/`.
It sets `VITE_BASE_PATH` automatically: `/` for `*.github.io` repos, `/<repo>/` otherwise.

## Option B — `gh-pages` branch from your machine

```bash
# project site: set the base path first
echo "VITE_BASE_PATH=/<repo>/" > .env.production

npm run deploy     # builds and pushes dist/ to the gh-pages branch
```

Then in **Settings → Pages** choose **Deploy from a branch → gh-pages → / (root)**.

## Custom domain

1. Add a `CNAME` file to `public/` containing your domain (e.g. `vrushal.dev`).
2. Set `VITE_BASE_PATH=/` (custom domains serve from root).
3. Configure DNS per GitHub's docs and enable **Enforce HTTPS**.
4. Update `site.url` in `src/config/site.ts` and the `og:image` URL in `index.html`.

## How deep links work

GitHub Pages only knows `index.html`. `scripts/postbuild.mjs` copies it to `404.html`, so a
direct visit to `/work/addodle-cbim` serves the app shell (with a 404 status) and React Router
renders the right page. `.nojekyll` stops Pages from ignoring underscore-prefixed assets.

## Local checks before deploying

```bash
npm run build && npm run preview
```

Open the preview URL and click through Home → Work → a case study → Clients → a client →
AI → Journey → About → Contact. Toggle the theme. Resize to phone width.

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| Blank page, 404s for `/assets/...` | Base path mismatch. Project site needs `VITE_BASE_PATH=/<repo>/`. |
| Deep link shows GitHub 404 page | `404.html` missing; make sure `npm run build` (not plain `vite build`) ran. |
| Fonts not loading | Check the Google Fonts `<link>` in `index.html`; fallbacks are system fonts. |
| Photo not showing | Place `public/images/profile.jpg`; initials show until then. |
