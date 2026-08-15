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

> [!IMPORTANT]
> Pages currently publishes from **`master`**, not `main`. `main` is only the
> default branch, and the two have been diverging for years — `master` holds
> commits `main` never received. **Merging into `main` does not deploy anything
> until the Pages source is switched.**

To make `main` the deploy branch:

1. Merge into `main` **first** — switching the source while `main` still holds
   the old site would publish that older version.
2. **Settings → Pages → Build and deployment → Branch**: change `master` to
   `main`, folder `/ (root)`, then Save.
3. Pages rebuilds automatically in about a minute.

No GitHub Actions workflow is involved. The source is *Deploy from a branch*,
so Pages builds and publishes on its own; a push to the deploy branch is the
deploy. `.nojekyll` disables Jekyll processing, making the publish a plain
static file copy.

Once `main` is the deploy branch, `master` can be retired — but check what only
exists there first (it still holds `CV-DiegoGongora.pdf` and
`CVen-DiegoGongora.pdf`).
