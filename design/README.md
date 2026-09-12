# Design sources

Editable sources for generated imagery. Nothing in this folder ships to the site.

## `og-cover.html` → `public/images/og-cover.png`

The social share / cover image (1200×630). It is plain HTML + inline SVG using the site palette
and Google Fonts, so it can be tweaked in a text editor.

To regenerate after editing:

1. Open `design/og-cover.html` in Chrome or Edge.
2. Open DevTools → toggle device toolbar → set a custom size of 1200 × 630.
3. Run "Capture screenshot" from the DevTools command menu (Ctrl+Shift+P → "Capture screenshot").
4. Save the PNG as `public/images/og-cover.png`.

Or script it with puppeteer-core pointing at the installed Edge/Chrome executable, viewport
1200×630, `deviceScaleFactor: 1`, and `page.screenshot({ clip: { x: 0, y: 0, width: 1200, height: 630 } })`.

Ideas for variants from the same file: a LinkedIn banner (1584×396, drop the chips and shrink the
tower) or a talk title slide (1920×1080, enlarge the name and add the talk title in place of the tagline).
