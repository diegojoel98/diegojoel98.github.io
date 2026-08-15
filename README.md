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
img/logo.svg        the monogram — master artwork, also the SVG favicon
img/logo-512.png    raster export; logo-256.png alongside it
favicon.ico         16/32/48/64, fallback for browsers without SVG icons
apple-touch-icon.png  180×180 home-screen icon
img/docs/           certificate PDFs (courses)
img/others/         certificate PDFs (volunteering, workshops, languages)
robots.txt          crawler policy
sitemap.xml         single-URL sitemap
```

## The logo

`img/logo.svg` is the master: a monoline **DG** monogram on a rounded tile, with
every path hand-plotted rather than set in a typeface, so it renders identically
without depending on a font being available.

The nav repeats the same geometry inline in `index.html`, drawn in `currentColor`
over a CSS tile, so it follows the theme rather than baking in one palette.
Editing the mark means editing both — they are deliberately duplicated to keep
the nav free of an extra request.

Rasters are regenerated from the SVG, not edited by hand: Chrome headless
renders it at 1024px and the smaller sizes are downsampled from that. The 16
and 32 entries in `favicon.ico` come from a slightly bolder, tighter variant,
since the full-size padding and stroke lose too much at that pixel budget.

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

**Push to `main`.** That is the whole process — it is both the default branch
and the Pages source, so a push is a deploy and it goes live in about a minute.

No GitHub Actions workflow is involved: the Pages source is *Deploy from a
branch* (`main`, `/ (root)`), so Pages builds and publishes on its own.
`.nojekyll` disables Jekyll processing, making the publish a plain static copy.

Because a push publishes immediately, changes worth reviewing should go through
a branch and a pull request rather than straight to `main`.

### History before August 2026

Pages used to publish from a `master` branch that had drifted years apart from
`main` — which is how the live site sat on a 2021 version while `main` held
something else. Both branches were retired when the rebuilt site landed:
`master`'s 38 commits are preserved in the **`archive/master`** tag, so nothing
was lost. Recover a file from it with:

```sh
git show archive/master:public/docs/CV-DiegoGongora.pdf > cv.pdf
```

That tag is the only place the two CV PDFs (`CV-DiegoGongora.pdf`,
`CVen-DiegoGongora.pdf`) and `Habilidades_digitales.pdf` still exist.
