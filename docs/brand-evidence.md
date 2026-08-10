# Brand evidence

Every brand value in `tokens/` traces to a source file, not to taste. This is
the audit trail — if a token here disagrees with something you remember, this
page is the tiebreaker.

## Sources

| Source | What it settled |
| --- | --- |
| `EN - NinjaOne for Enterprise IT Teams Sales Deck.pptx` → `ppt/theme/theme1.xml` | The official color scheme and deck typefaces |
| `NinjaOne Patch Manager Datasheet - EN.pdf` | Navy hero band, spec table, platform diagram, footer |
| `Vulnerability Management and Autonomous Patching datasheet.pdf` | Light hero variant, callout rail, stat cards, blue wordmark |
| `Patch Caching datasheet.pdf` | Confirms navy + green + medium blue as the working trio |
| `NinjaOne Agent-Based Patch Management for macOS One Sheet - EN.pdf` | Same system at one-sheet length |
| `EN - Essential Guide to Autonomous Patch Management.pdf` | Long-form treatment; orange highlight accent |

## Theme file — the authority on brand color

`theme1.xml` declares theme `NinjaOne_2025 1.0`, color scheme `ninjaOne-2024`:

| Slot | Hex | Token |
| --- | --- | --- |
| `dk1`, `dk2`, `accent1` | `#004668` | `--ninja-navy` |
| `lt2` | `#DFE3E3` | `--mist-4` |
| `accent2`, `hlink` | `#00A6CE` | `--ninja-cyan` |
| `accent3` | `#066C6C` | `--ninja-teal-deep` |
| `accent4` | `#31DDD8` | `--ninja-teal-bright` |
| `accent5` | `#068947` | `--ninja-green-deep` |
| `accent6` | `#04FF88` | `--ninja-green` |

Fonts: `majorFont` = **Montserrat SemiBold**, `minorFont` = **Montserrat**.

## PDF fill colors — the authority on how the system is used

Fill operators were decompressed from each PDF's content streams and counted.
Colors present across all five documents:

| Hex | Frequency | Role | Token |
| --- | --- | --- | --- |
| `#004668` | dominant in every file | Hero bands, headings, body ink | `--ninja-navy` |
| `#007DA5` | every file | Subheads, stat figures, overlines, wordmark on light | `--ninja-blue-medium` |
| `#04FF88` | every file | Wordmark on navy, rules, accents | `--ninja-green` |
| `#70C173` | 3 files | "Included" checkmarks | `--ninja-green-check` |
| `#DFF7EA` | 3 files | Mint strip in platform diagram | `--wash-mint` |
| `#F2FAF6` | 4 files | Callout + stat card ground | `--wash-mint-pale` |
| `#E1F3F4` | 3 files | Cool tint panels | `--wash-cyan` |
| `#C4DBDF` | 3 files | Chevron motif, diagram tiles | `--mist-3` |
| `#B6CACC` | 3 files | Hairline rules | `--mist-2` |
| `#5099AD` | 3 files | Muted secondary text | `--mist-1` |
| `#E3665E`, `#A82121` | vuln datasheet | Risk states in print | `--status-danger-print`, `--status-critical-print` |
| `#FF6027` | guide | Highlight accent | `--ninja-orange` |

Embedded font: **Geologica** in all five PDFs. That is the collateral face; the
deck template is Montserrat.

## What this corrected

The v1 kit was built by eye and got three things wrong:

1. **Primary navy.** v1 used `#053856`. The system navy is `#004668`. `#053856`
   is kept as `--ninja-blue-deep`, marked legacy.
2. **Typeface.** v1 used Inter as a stand-in. The real faces are Geologica
   (collateral/product) and Montserrat (deck template). Inter remains in the
   font stack as a fallback.
3. **Cyan.** v1's `--ninja-cyan` was `#55EBFF`, which is the gradient endpoint,
   not the brand cyan. `--ninja-cyan` is now `#00A6CE` (theme accent2), and the
   gradient endpoint moved to `--ninja-cyan-light`.

## Still unverified

- **Icon set.** Lucide stands in for NinjaOne's real icons.
- **Logo lockups.** `assets/` has the green wordmark (for dark grounds) and a
  `#007DA5` wordmark cropped at 600 dpi from the vulnerability datasheet. Both
  are raster; the vector originals should replace them.
- **Product UI components.** They are plausible RMM recreations, not screenshots
  of the shipping console. The marketing components, by contrast, are rebuilt
  directly from the datasheets above.
