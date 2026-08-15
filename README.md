# diegojoel98.github.io

Personal site and CV of **Diego Joel Gongora Gamboa** — Frontend Tech Lead, Mérida, México.

Live at **<https://diegojoel98.github.io/>**

## Stack

Deliberately none. Hand-written HTML, CSS and vanilla JavaScript — no framework, no
bundler, no CDN, no build step. GitHub Pages serves the files exactly as they are in
`main`, so a push is a deploy.

```
index.html          the whole site (single page, sectioned)
css/main.css        design tokens, layout, light/dark themes, print stylesheet
js/main.js          Spanish dictionary, theme + language toggles, scroll spy, reveal
404.html            not-found page
education.html      ┐
online-courses.html ├ redirect stubs kept so old inbound links still resolve
others.html         ┘
img/docs/           certificate PDFs (courses)
img/others/         certificate PDFs (volunteering, workshops, languages)
robots.txt          crawler policy
sitemap.xml         single-URL sitemap
```

## How the bilingual content works

English lives **in the markup**, so the page is fully readable with JavaScript disabled
and crawlers index real text. `js/main.js` holds only the Spanish dictionary, keyed by
the `data-i18n` attributes in `index.html`.

To edit copy:

- **English** — edit `index.html` directly.
- **Spanish** — edit the matching key in the `ES` object in `js/main.js`.

Adding a new translatable string means adding `data-i18n="some.key"` to the element and a
`'some.key'` entry to `ES`. A missing key falls back to English rather than rendering
blank.

Language defaults to the browser's preference (`es-*` → Spanish, anything else →
English) and the choice is remembered in `localStorage`.

## Theme

Follows `prefers-color-scheme` by default. The toggle writes `data-theme="dark"` or
`data-theme="light"` on `<html>` and persists it. Every colour is a custom property
defined on bare `:root` and redefined in both the media query and the `[data-theme]`
block, so the toggle wins in both directions.

## Running locally

No dependencies. Any static server:

```sh
python3 -m http.server 8000
# → http://localhost:8000
```

Opening `index.html` over `file://` also works, though the root-relative paths in
`404.html` and the redirect stubs won't.

## Deploying

Push to `main`. GitHub Pages publishes from the repository root.
