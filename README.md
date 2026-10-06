# appletreelabs

Company portfolio website for [appletreelabs.com](https://appletreelabs.com/).

Plain HTML, CSS and JavaScript — no build step, no dependencies.

## Structure

```
index.html        All page content: home screens and case studies
css/main.css      Site styles
css/bootstrap.css Bootstrap 3 grid/base (custom build, don't edit)
js/main.js        Section dots and case study open/close
images/           Logo and case study images
CNAME             Custom domain for GitHub Pages
```

## Editing

- **Text:** edit `index.html` directly.
- **Add a case study:** copy an existing `<section class="section">` and its
  matching `<div class="showcase">` in `index.html`. Give the showcase a new
  `id`, and set the section's `data-case` and "VIEW CASE" `href="#..."` to that
  id. The theme color is the `--blue` / `--cyan` / `--purple` / `--orange`
  suffix on `scene__outer-circle` and `showcase`.
- Case studies can be linked directly, e.g. `https://appletreelabs.com/#fiji-water`.
- **After changing CSS or JS:** bump the `?v=` number on the `<link>` and
  `<script>` tags in `index.html` (e.g. `?v=2` → `?v=3`) so returning visitors
  get the new files instead of a cached copy.

## Local preview

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

The site is served by GitHub Pages from the `master` branch. Pushing to
`master` deploys it, usually within a minute or two.

The original Gatsby source is in git history (commit `d063e96` and earlier).
