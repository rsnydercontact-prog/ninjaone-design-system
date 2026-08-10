# NinjaOne Design System

Design tokens and React components for NinjaOne **collateral** — datasheets,
one-sheets, guides, briefs. The light document surface: navy ink on white,
tinted panels, hairline rules, green used sparingly.

Every color and typeface traces to official 2025 collateral rather than to
eyeballing. The audit trail is in [`docs/brand-evidence.md`](docs/brand-evidence.md).

```bash
npm install
npm run dev      # two worked documents; toggle at the bottom of the page
```

---

## Using it

Load the tokens once, globally, then import components:

```jsx
import 'ninjaone-design-system/tokens/tokens.css';
import { DocHero, SpecTable, Callout, DocFooter } from 'ninjaone-design-system';

export function ProductBrief() {
  return (
    <div className="no-surface-doc">
      <DocHero variant="band" title="Patch Manager" subtitle="Autonomous patching at scale" />
      <SpecTable rows={[{ label: 'Cross-OS patching' }, { label: 'Policy management', note: 'Patching modules only' }]} />
      <DocFooter />
    </div>
  );
}
```

Components ship as `.jsx` source with `.d.ts` signatures next to them — no build
artifact, no bundled CSS. They run through Vite, Next, or any bundler that
handles JSX and asset imports. React 18+ and `lucide-react` are the only
dependencies.

Not on npm? Copy `tokens/`, `assets/`, and `src/` into your project — the
imports are relative and still resolve.

For plain HTML with no build step, take `tokens/tokens.css` alone:

```html
<link rel="stylesheet" href="tokens/tokens.css">

<div class="no-surface-doc">
  <h1 class="no-h1">Patch Manager</h1>
  <p class="no-body">Simplified, autonomous patching.</p>
</div>
```

---

## What's here

| Path | What it is |
| --- | --- |
| `tokens/tokens.css` | Every token as a CSS custom property, plus `.no-*` type classes and the surface scopes. The one file to take if you take only one. |
| `tokens/tokens.json` | The same tokens in W3C DTCG format — for Figma (Tokens Studio), Style Dictionary, or a Tailwind theme. |
| `src/` | Components, flat. `Datasheet.jsx` and `Guide.jsx` are full documents built from the rest. |
| `docs/brand-guidelines.html` | Visual spec — palette, type scale, spacing, radii, do/don't. Open in a browser. |
| `docs/brand-evidence.md` | Which source file every brand value came from, and what it corrected. |
| `assets/` | Wordmarks. |
| `demo/` | The demo app wired in `index.html`. Not part of the published surface. |

Keep `tokens.css` and `tokens.json` in sync if you edit either — same token set,
two formats.

---

## Components

### Page furniture

- **`DocHero`** — the datasheet masthead, both treatments: `variant="band"`
  (navy band, green wordmark) and `variant="light"` (white ground, blue
  wordmark). Carries the chevron motif.
- **`DocFooter`** — the regional contact line that closes every page.
- **`GuideCover`** — navy cover panel with the dot-grid motif, a two-tone
  headline, and a format tag.
- **`GuidePage`** — interior guide page: running header, green rules, running
  title and page number at the foot.

### Blocks

- **`SectionHeading`** — blue heading over the short green underline accent.
- **`Overline`** — the uppercase, letterspaced section label.
- **`FeatureGrid`** — bold title over short body, tiled. The workhorse of body copy.
- **`SpecTable`** — feature/included table with green checks and qualifying notes.
- **`Callout`** — the mint sidebar rail.
- **`StatCard`** — oversized proof-point figure with a customer quote.
- **`PullQuote`** — italic quote with uppercase attribution.
- **`PlatformDiagram`** — the Manage / Protect / Support figure.
- **`LogoWall`** — integrations panel. Partner marks are yours to supply.
- **`Tag`** — the format chip: GUIDE, REPORT, DATASHEET.

### Motifs and icons

`Chevrons` (the `>>>` behind hero headlines) and `DotGrid` (the cover lattice)
are decorative and `aria-hidden`.

`Icon` takes kebab-case Lucide names (`<Icon name="shield-check" />`) per the
brand spec: 2px stroke, 14–18px, inheriting text color. Only the icons the kit
uses are registered, so bundles stay small. To add more:

```jsx
import { Rocket } from 'lucide-react';
import { registerIcons } from 'ninjaone-design-system';

registerIcons({ 'rocket': Rocket });
```

### Worked examples

`Datasheet` rebuilds the Patch Manager datasheet page for page. `Guide` rebuilds
the Essential Guide cover and interior spread. Both are the reference for how
the parts compose — read them before assembling a new document.

Read the `.d.ts` beside each component for exact props.

---

## Brand

### Color

| Token | Hex | Use |
| --- | --- | --- |
| `--ninja-navy` | `#004668` | **Primary.** Hero bands, covers, headings, body ink |
| `--ninja-blue-medium` | `#007DA5` | Subheads, stat figures, overlines, wordmark on light |
| `--ninja-green` | `#04FF88` | Wordmark on dark, rules, accents |
| `--ninja-cyan` | `#00A6CE` | Links |
| `--ninja-teal-deep` / `--ninja-teal-bright` | `#066C6C` / `#31DDD8` | Supporting accents |
| `--ninja-green-deep` | `#068947` | Supporting accent |
| `--ninja-green-check` | `#70C173` | "Included" checkmarks |
| `--ninja-purple` | `#6F346F` | Secondary accent |

Status: success `#00AA5F` · info `#007DA5` · warning `#F39500` · danger `#E5484D`.
Print uses a softer red (`--status-danger-print`).

**Gradient** `--ninja-gradient` (`#04FF88 → #55EBFF`) is a precious resource:
a hero headline, one key chart stroke, one feature button. Never a broad fill.

Body ink on light is navy, not black. Tinted grounds come from `--wash-*`;
rules and dividers from `--mist-*`.

### Type

**Geologica** is the collateral face; **Montserrat** is the corporate deck face
(`--font-deck`). Hierarchy comes from weight and size, never from switching
family. Numerics are tabular.

Scale: display 56 / h1 40 / h2 30 / h3 22 / h4 18 / body 14 / small 13 /
caption 12 / overline 11. Semantic classes: `.no-display` `.no-h1` `.no-h2`
`.no-h3` `.no-h4` `.no-body` `.no-small` `.no-caption` `.no-overline` `.no-mono`
`.no-kpi`.

### Space, radii, shadows

4px spacing base (`--space-1…12`). Radii stay tight: 4 inputs and tags, 6
buttons, 8 cards, 12 large, 16 for document panels, hero bands, and covers.
`--radius-pill` is for status badges only — no pill CTAs. The document surface
uses hairline rules and tinted grounds instead of shadows.

---

## Voice

- **Sentence case** everywhere except product proper nouns and overlines
  (uppercase, sparingly).
- Informative over enthusiastic. Imperative verbs on buttons ("Patch now"). No
  exclamation points.
- **No emoji.** Tabular numerals in tables and stats. Relative time for recency.

---

## Caveats

- **Fonts** load from Google Fonts. Swap in licensed files for production.
- **Icons** are Lucide standing in for NinjaOne's real set.
- **Logos** are raster crops; the vector originals should replace them. Only the
  green (on dark) and `#007DA5` (on light) wordmarks are here.
- **Partner logos** for `LogoWall` are not included.

## License

Code is MIT (see `LICENSE`). The NinjaOne name, wordmark, and brand assets in
`assets/` are property of NinjaOne and are not covered by that license.
