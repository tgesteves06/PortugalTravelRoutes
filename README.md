# Portugal Travel Routes

Authentic road trips, scenic drives and hidden gems, created by Portuguese locals.

Static site (HTML, CSS, JavaScript). No build step: open `index.html` in a browser.

## Adding a route

All routes live in `js/routes.js`. Copy an existing route block and change:

- `id`, `title`, `tagline`, `summary`, `season`
- `stops`: one entry per stop with `day`, `name`, `region`, `lat`, `lng`,
  `km` (road km from the previous stop, `0` for the first) and `overview`
- optional per stop: `accommodations`, `activities`, `restaurants`
  (`{ name, note, url, partner }`)

The home page card, the animated map and the itinerary are built automatically.

Map outline: Natural Earth (public domain).
