# ~/privacy

A privacy and security reference site, written and maintained by one person.
It exists to answer one question honestly: "okay but what should I actually
use?" No sponsors, no affiliate links, no tracking, no organization behind it.

Live at [guides.willbara.dev](https://guides.willbara.dev).

## What's here

- **`index.html`** — landing page
- **`threat-modeling.html`** — start here if you're not sure where to start:
  what you're protecting, from whom, and at what cost
- **`tools/`** — tool categories grouped by theme (communication, credentials
  & identity, network & browsing, data & files, platforms, money &
  connectivity, and more), each with its own criteria, picks with verdict
  tags, a comparison table, and practical advice
- **`setups/`** — three complete setups (beginner / standard / hardened),
  each mapped to a threat model with step-by-step instructions and a
  checklist
- **`icons/`** — service icon assets, referenced as `[service-name].svg`
- **`changelog.html`** — every recommendation change, dated and explained
- **`about.html`** — who runs this and the rules it runs by

## Conventions

- **Verdict tags, not rankings.** Tags like "the default pick" or "the
  anonymity pick" say who a tool is for, not which tool is "best." A pick
  further down a page isn't worse, it's for someone else.
- **Attribute pills are a controlled vocabulary**, not free text. Every pill
  across the site draws from one shared, canonical list (`PILL-VOCABULARY.md`),
  capped at five per entry so a card stays scannable at a glance.
- **Good / Mind the** instead of pros/cons.
- **Price always shown**, even when free.
- **Dates everywhere.** The changelog is the credibility mechanism: when the
  facts change, the page changes, and you can watch it happen.

## Tech

Pure static HTML and CSS, no build step, no backend. All shared styling
lives in one `style.css`, loaded by every page — Gruvbox dark palette,
Bitter / IBM Plex Sans / IBM Plex Mono via Google Fonts. Site-wide search
lives in `site-search/`, matching against service names, categories, and
pills, with results dropping down from the header on every page.

Hosted on Cloudflare Pages from this GitHub repo.

Open `index.html` in a browser, or run:

```sh
python3 -m http.server
```

Responsive down to phone widths (sidebar collapses to pill chips, then a
hamburger nav), keyboard accessible, and respects
`prefers-reduced-motion`.
