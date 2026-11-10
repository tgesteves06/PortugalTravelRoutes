# Portugal Travel Routes

Authentic road trips, scenic drives and hidden gems, created by Portuguese locals.

Static site (HTML, CSS, JavaScript). No build step: open `index.html` in a browser.
Languages: English (default), Portuguese, Spanish, French.

## Files

- `js/routes.js` – all routes (one block per route)
- `js/icons.js` – illustrated stop symbols (castle, belem, pastry, wine…)
- `js/i18n.js` – interface texts in the four languages
- `js/map-data.js` – district map of mainland Portugal
- `js/main.js` – map drawing, pages and interactions

## Adding a route

Copy a route block in `js/routes.js`:

- `type`: `getaway` (2 days, one base with activities around), `medium` (5 days) or `long` (7 days)
- `stops` in travel order (north to south), each one:
  - `kind: "main"` – a base where you sleep: `dayFrom`, `dayTo`, `district`, `overview`
  - `kind: "via"` – a must-see on the way: `category`, `text`
  - getaways: first stop `kind: "base"` (the hotel), then `kind: "activity"` stops around it
- optional `photo` (path to the main photo shown on the home page card)
  - `name`, `lat`, `lng`, `icon` (key from `js/icons.js`), optional `km`
- Texts are `{ en, pt, es, fr }`

## Credits

District boundaries: Direção-Geral do Território (DGT), ODbL 1.0, via geoBoundaries.
Spain outline: Natural Earth (public domain).

Photos: Wikimedia Commons, free licences (CC BY / CC BY-SA). Author and licence
are listed in `js/photos.js` and shown next to each photo on the site.
