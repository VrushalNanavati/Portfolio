/**
 * Post-build step for GitHub Pages.
 *  1. Copies dist/index.html to dist/404.html so client-side routes (e.g. /work/addodle)
 *     resolve when a visitor lands on them directly. GitHub Pages serves 404.html for
 *     unknown paths, and the SPA router then renders the right page.
 *  2. Writes .nojekyll so Pages does not ignore files/folders starting with "_".
 */
import { copyFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const dist = resolve(process.cwd(), 'dist');
const index = resolve(dist, 'index.html');

if (!existsSync(index)) {
  console.error('[postbuild] dist/index.html not found. Did vite build run?');
  process.exit(1);
}

copyFileSync(index, resolve(dist, '404.html'));
writeFileSync(resolve(dist, '.nojekyll'), '');
console.log('[postbuild] wrote dist/404.html and dist/.nojekyll');
