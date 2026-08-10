# NinjaOne Design System

Design tokens and React components for two NinjaOne surfaces:

- **Product** — the dark RMM console: dashboards, device tables, patch panels.
- **Marketing** — the light document surface: datasheets, one-sheets, briefs.

One brand layer feeds both. Every color and typeface traces to official 2025
collateral rather than to eyeballing — the audit trail is in
[`docs/brand-evidence.md`](docs/brand-evidence.md).

```bash
npm install
npm run dev      # demo: toggle between the two surfaces at the bottom of the page
```

---

## Using it

Load the tokens once, globally, then import components:

```jsx
import 'ninjaone-design-system/tokens/tokens.css';
import { Button, KpiCard } from 'ninjaone-design-system';
import { DocHero, SpecTable } from 'ninjaone-design-system/marketing';
```

Components ship as `.jsx` source with `.d.ts` signatures next to them — no build
artifact, no bundled CSS. They run through Vite, Next, or any bundler that
handles JSX and asset imports. React 18+ and `lucide-react` are the only
dependencies.

Not on npm? Copy `tokens/`, `assets/`, and `src/` into your project and import
from there. The imports are relative and will still resolve.

For plain HTML with no build step, take `tokens/tokens.css` alone:

```html
<link rel="stylesheet" href="tokens/tokens.css">

<h1 class="no-h1">Endpoint overview</h1>
<button style="
  background: var(--ninja-green);
  color: var(--ink-1);
  border-radius: var(--radius-md);
  padding: var(--space-2) var(--space-4);
  font: 600 var(--fs-body)/1 var(--font-sans);
">Patch now</button>
```

---

## What's here

| Path | What it is |
| --- | --- |
| `tokens/tokens.css` | Every token as a CSS custom property, plus `.no-*` type classes and the two surface scopes. The one file to take if you take only one. |
| `tokens/tokens.json` | The same tokens in W3C DTCG format — for Figma (Tokens Studio), Style Dictionary, or a Tailwind theme. |
| `src/components/` | Product UI, dark surface. |
| `src/marketing/` | Datasheet/document components, light surface. |
| `docs/brand-guidelines.html` | Visual spec — palette, type scale, spacing, radii, do/don't. Open in a browser. |
| `docs/brand-evidence.md` | Which source file every brand value came from, and what it corrected. |
| `assets/` | Wordmarks. |
| `demo/` | The demo app wired in `index.html`. Not part of the published surface. |

Keep `tokens.css` and `tokens.json` in sync if you edit either — same token set,
two formats.

---

## Brand

### Color

| Token | Hex | Use |
| --- | --- | --- |
| `--ninja-navy` | `#004668` | **Primary.** Hero bands, headings, body ink on light |
| `--ninja-blue-medium` | `#007DA5` | Subheads, stat figures, overlines, wordmark on light |
| `--ninja-green` | `#04FF88` | Vivid green — wordmark on dark, primary accent |
| `--ninja-cyan` | `#00A6CE` | Links |
| `--ninja-teal-deep` / `--ninja-teal-bright` | `#066C6C` / `#31DDD8` | Supporting accents |
| `--ninja-green-deep` | `#068947` | Supporting accent |
| `--ninja-green-check` | `#70C173` | "Included" checkmarks in print |
| `--ninja-purple` | `#6F346F` | Secondary accent |

Status: success `#00AA5F` · info `#007DA5` · warning `#F39500` · danger `#E5484D`.
Print uses a softer red (`--status-danger-print`).

**Gradient** `--ninja-gradient` (`#04FF88 → #55EBFF`) is a precious resource:
a hero headline, one key chart stroke, one feature button. Never a broad fill.

Neutrals come in two ramps — `--ink-*` / `--slate-*` for the dark product
surface, `--mist-*` and `--wash-*` for the light marketing surface. Body ink on
light is navy, not black.

### Type

**Geologica** is the collateral and product face; **Montserrat** is the
corporate deck face (`--font-deck`). Hierarchy comes from weight and size, never
from switching family. Numerics are tabular.

Scale: display 56 / h1 40 / h2 30 / h3 22 / h4 18 / body 14 / small 13 /
caption 12 / overline 11. Semantic classes: `.no-display` `.no-h1` `.no-h2`
`.no-h3` `.no-h4` `.no-body` `.no-small` `.no-caption` `.no-overline` `.no-mono`
`.no-kpi`.

### Space, radii, shadows

4px spacing base (`--space-1…12`); product spacing lands on 8/12/16/24. Radii
stay tight: 4 inputs, 6 buttons, 8 cards, 12 large, 16 for print panels and hero
bands. `--radius-pill` is for tags only — no pill CTAs. Shadows are dark-surface
only; the print layer uses hairline rules and tinted grounds instead.

---

## Components

### Product — dark

`Button` · `Pill` · `Icon` · `KpiCard` · `AlertList` · `DeviceTable` ·
`DeviceDetail` · `PatchPanel` · `Sidebar` · `TopBar` · `App`

`App` is a full working dashboard assembled from the rest — the reference for
how they compose.

### Marketing — light

`DocHero` · `Chevrons` · `Overline` · `SpecTable` · `Callout` · `StatCard` ·
`PullQuote` · `PlatformDiagram` · `DocFooter` · `Datasheet`

`Datasheet` rebuilds the Patch Manager datasheet from these parts, page for
page. `DocHero` has both hero treatments: `variant="band"` (navy band, green
wordmark) and `variant="light"` (white ground, blue wordmark).

Read the `.d.ts` beside each component for exact props.

### Icons

`Icon` takes kebab-case Lucide names (`<Icon name="shield-check" />`) per the
brand spec: 2px stroke, 14–18px, inheriting text color. The kit registers only
the icons it uses so bundles stay small. To add more:

```jsx
import { Rocket } from 'lucide-react';
import { registerIcons } from 'ninjaone-design-system';

registerIcons({ 'rocket': Rocket });
```

---

## Voice

- **Sentence case** everywhere except product proper nouns and overlines
  (uppercase, sparingly).
- Informative over enthusiastic. Imperative verbs on buttons ("Patch now"). No
  exclamation points.
- **No emoji** in product or report deliverables. Tabular numerals in tables and
  KPIs. Relative time for recency.

---

## Caveats

- **Fonts** load from Google Fonts. Swap in licensed files for production.
- **Icons** are Lucide standing in for NinjaOne's real set.
- **Logos** are raster crops; the vector originals should replace them. Only the
  green (on dark) and `#007DA5` (on light) wordmarks are here.
- **Product components** are plausible RMM recreations — validate against the
  live console before customer-facing use. The marketing components are rebuilt
  directly from shipped datasheets.

## License

Code is MIT (see `LICENSE`). The NinjaOne name, wordmark, and brand assets in
`assets/` are property of NinjaOne and are not covered by that license.
