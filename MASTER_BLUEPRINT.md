# Brand Style Guide — Master Blueprint

A **brand-agnostic specification** for generating a complete, self-contained brand style guide. This document plus the forkable template are designed so that a person **or an LLM** can produce a new brand's guide by substituting values — no framework, build step, or design decisions required beyond the brand's own tokens and copy.

**Forkable template:** [`blueprint-style-guide/index.html`](blueprint-style-guide/index.html) — a neutral, ready-to-fork guide.  
**Example implementations (for reference only, not canonical):** [`OWI-style-guide/index.html`](OWI-style-guide/index.html) and the other `*-style-guide/` folders.

---

## 0. How an LLM should generate a new guide

Given the template page (or this spec), produce `{Brand}-style-guide/index.html` by doing the following. Keep the structure, components, accessibility tooling, and section order intact; change only the brand-specific values and copy.

**Step 1 — Replace placeholder values** (every occurrence in the forked HTML):

| Placeholder in template | Replace with | Example |
|-------------------------|--------------|---------|
| `Your Brand Name` | Full brand name | `Acme Robotics` |
| `YBR` (shortName) | Monogram / watermark (2–4 chars) | `ACME` |
| `1.0` (version in title/hero/footer) | Guide version | `1.0` |
| `July 2026` (date strings) | Human-readable date | `July 2026` |
| `Inter` (font display labels) | Approved typeface names | `Roboto` |
| `[Brand Name]`, `[bracketed]` prose | Real brand copy | — |
| `[Brand tagline]`, `[Footer legal…]` | Real institutional copy | — |

Also read the machine-readable manifest embedded in the template: `<script type="application/json" id="brand-manifest">`.

**Step 2 — Set the design tokens in all three synced locations:**

1. `<style> :root { --brand-color-* / --brand-font-* }` — drives the whole page.
2. `tailwind.config → theme.extend.colors.brand` — drives Tailwind utility classes.
3. `BRAND_CONFIG` (bottom `<script>`) — drives the JS tools (contrast checker, accent chips, rainbow gradient).

**Step 3 — Swap the neutral default palette** (`#4F63E6` primary, `#12B5A8` secondary, `#F2A81E` accent, `#8A63D2` accent-2, `#E0518A` accent-3) and their `rgba()` equivalents for the brand's approved colours. Swap the Inter Google-Fonts `<link>` + `--brand-font-*` tokens for the brand's typefaces.

**Step 4 — Replace ALL example copy.** Every visible sentence, card title, news headline, event, voice/tone line, nav item, and UX recommendation is placeholder copy. Do not ship the example strings.

**Step 5 — Optional prefix rename:** find-replace `brand` → your prefix (e.g. `acme`) across CSS variables/classes and `BRAND_CONFIG.prefix`.

**Step 6 — Assets & registration:** add `logo.png` + favicon, register in `shared/guide-switcher.js`, and add a card to the root `index.html` portal.

> The manifest in §1 is the machine-readable input for this process. Fill it, then apply Steps 1–6.

### Copy-paste LLM prompt

Use this when feeding the template URL or file to an agent:

```
You are generating a new UXi brand style guide from the neutral template at blueprint-style-guide/index.html
and the spec at MASTER_BLUEPRINT.md.

INPUT: Provide a filled §1 Brand configuration manifest (YAML) for the target brand, including:
- slug, name, shortName, version, prefix, theme (dark|light)
- fonts (primary, body, accent, googleFontsUrl)
- colors.neutrals + colors.accents (hex, name, role)
- regulatory.footerText (optional)
- siteLinks + resources (optional)

TASK:
1. Duplicate the blueprint folder to {slug}/.
2. Replace every placeholder: Your Brand Name, YBR, bracketed copy, and example card headlines.
3. Sync colours in THREE places: :root CSS vars, tailwind.config brand colours, BRAND_CONFIG.colors.
4. Replace the Inter Google Fonts link with the brand's approved typefaces.
5. Optionally rename CSS prefix brand → {prefix} across variables/classes/BRAND_CONFIG.prefix.
6. Add logo.png + favicon; register in shared/guide-switcher.js and root index.html.
7. Keep all 15 section IDs, accessibility tooling (contrast checker + email lab), nav spy, scroll chrome, and shared scripts intact.
8. Do NOT copy Open Window Institute (OWI) copy, colours, or regulatory text.

OUTPUT: A complete {slug}/index.html ready to preview with `npx serve .`.
Validate against §11 quality bar before finishing.
```

---

## 1. Brand configuration manifest

Copy and fill this block before forking the blueprint or scoping a migration.

```yaml
brand:
  slug: "ACME-style-guide"              # Folder name under repo root
  name: "ACME Institute"                # Full legal/marketing name
  shortName: "ACME"                     # Monogram, watermark, sidebar fallback
  version: "1.0"                        # Guide version string (hero badge, footer)
  prefix: "acme"                        # CSS variable + class prefix (replaces ow / brand)
  theme: dark                           # dark | light — drives base + alt section backgrounds
  favicon: "../assets/favicons/ACME-favicon.png"
  logo: "logo.png"                      # Landscape logo in brand folder

fonts:                                          # Template default is Inter — replace with brand typefaces
  primary: "'Inter', system-ui, Arial, sans-serif"    # Headings, labels, nav
  body: "'Inter', system-ui, Helvetica, sans-serif"   # Body copy
  accent: "'Inter', system-ui, Georgia, serif"        # Optional display/accent
  googleFontsUrl: "https://fonts.googleapis.com/css2?family=..."  # Or @font-face paths

colors:
  neutrals:
    dark: "#232323"           # Primary page background
    darker: "#1A1A1A"         # Sidebar, header
    sectionAlt: "#1F1F1F"    # Alternating section (dark theme)
    card: "#2A2A2A"
    border: "#333333"
    light: "#EDEDED"          # Primary text on dark
    muted: "#9A9A9A"
    white: "#FFFFFF"
  accents:                    # 1–N entries. Template default = neutral placeholders below; replace per brand.
    - id: primary
      name: "Primary"
      hex: "#4F63E6"            # indigo (template default)
      role: "CTA, nav active, focus ring"
    - id: secondary
      name: "Secondary"
      hex: "#12B5A8"            # teal (template default)
      role: "Links, secondary actions"
    - id: accent
      name: "Accent"
      hex: "#F2A81E"            # amber (template default)
      role: "Highlights, tags"

sections:
  vision-mission: true        # Set false to omit nav link + section
  ux-recommendations: true
  elementor: true             # WordPress/Elementor brands only

regulatory:
  footerText: "..."             # Optional legal/regulatory footer (registrations, licences, compliance)

siteLinks:                    # Register in shared/guide-switcher.js SITE_LINKS
  - href: "https://example.com/"
    label: "Live"
    title: "Open live site in new tab"

resources:                    # Optional — shared/guide-resources.js BRAND_RESOURCES
  - label: "Calendar"
    href: "Calendars/ACME/"
```

---

## 2. Information architecture (15 sections)

The template ships with these **section IDs** (anchor targets). Nav order and numbering stay consistent across guides. Optional sections can be omitted via the manifest.

| # | Section ID | Nav category | Required | Notes |
|---|------------|--------------|----------|-------|
| 01 | `colors` | Foundation | Yes | Neutrals, accents, opacity scale, hover scale |
| 02 | `typography` | Foundation | Yes | Font families, type scale table |
| 03 | `buttons` | Components | Yes | Primary, secondary, accent variants |
| 04 | `forms` | Components | Yes | Inputs, validation, full form example |
| 05 | `cards` | Components | Yes | Content card patterns (brand-specific types) |
| 06 | `vision-mission` | Brand | Optional | Approved institutional copy — verbatim |
| 07 | `voice-tone` | Brand | Yes | Voice attributes, tone table, microcopy |
| 08 | `logo-usage` | Brand | Yes | Clear space, do/don't, dark/light demos |
| 09 | `icons` | Brand | Yes | Social + UI icon guidance |
| 10 | `navigation` | Brand | Yes | Sitemap, header/footer simulation |
| 11 | `layout` | Experience | Yes | Spacing, lines, hero, container widths |
| 12 | `accessibility` | Experience | Yes | WCAG 2.2 AA + contrast tools |
| 13 | `ux-recommendations` | Experience | Recommended | Prioritized UX improvements |
| 14 | `variables` | Developer | Yes | Copyable `:root` token block |
| 15 | `elementor` | Developer | Conditional | Global colors/fonts + regulatory footer |

### Nav sidebar structure

```
Foundation     → 01 colours, 02 typography
Components     → 03 buttons, 04 forms, 05 cards
Brand          → 06–10 (vision through navigation)
Experience     → 11–13 (layout, accessibility, UX recs)
Developer      → 14–15 (variables, elementor)
```

Each nav link:

```html
<a href="#{section-id}" class="nav-link">
  <span class="nav-index">{nn}</span>
  <span class="nav-dot" style="background:{accent-hex};"></span>
  <span>{Label}</span>
</a>
```

---

## 3. Section content contracts

### 01 — `colors`

| Subsection | Classes / patterns | Brand-specific |
|------------|-------------------|----------------|
| Core & neutral colours | `.color-card`, `.color-swatch`, `.color-info`, `onclick="copyColor(...)"` | Hex values, names |
| Accent palette | Same grid; min 1 accent | Names, count |
| Opacity scale | `[data-opacity-scale]`, `[data-opacity-block]`, `.chip-button`, `setOpacityAccent()` | Accent RGB map in JS |
| Hover scale | `[data-hover-scale]`, `[data-hover-block]`, `setHoverAccent()` | Same |

### 02 — `typography`

| Subsection | Classes | Brand-specific |
|------------|---------|----------------|
| Font families | `.card` showcase blocks | Font names, licensing notes |
| Type scale | `.type-row`, `.type-tag`, `.type-spec` | Sizes, weights |

### 03 — `buttons`

| Subsection | Classes | Brand-specific |
|------------|---------|----------------|
| Core variants | `.btn`, `.btn-primary`, `.btn-outline-muted` | Primary hex, padding specs |
| Accent variants | `.btn` + inline accent styles | Per-accent colours |

### 04 — `forms`

| Subsection | Classes | Brand-specific |
|------------|---------|----------------|
| Validation | `.{prefix}-label`, `.{prefix}-input` | Error/success colours |
| Text inputs | Same | Placeholder copy |
| Select & checkboxes | `.{prefix}-select`, `.{prefix}-checkbox` | Options |
| Full form example | `.btn-primary` submit | Field labels |

### 05 — `cards`

| Subsection | Classes | Brand-specific |
|------------|---------|----------------|
| Category cards | `.dept-card`, `.dept-card-stripe`, `.dept-tag` | Stripe colours, copy |
| News/content cards | `.news-card`, `.news-img`, `.news-meta` | Sample headlines |
| Card settings specs | `.card` spec grids | Measurements |

### 06 — `vision-mission` (optional)

| Subsection | Pattern | Brand-specific |
|------------|---------|----------------|
| Vision / Mission | `.card` with left border accent | **Approved verbatim copy only** |
| Usage callout | `.{prefix}-callout` | Link to voice-tone |

### 07 — `voice-tone`

| Subsection | Classes | Brand-specific |
|------------|---------|----------------|
| Positioning statement | Inline `<strong>` accent colours | Brand voice |
| Voice attributes | `.voice-attr-grid`, `.voice-attr-card`, `.voice-do`, `.voice-dont` | 4+ attributes |
| Keywords | `.voice-tag` | Brand language |
| Tone by context | `.{prefix}-spec-table` | Rows per context |
| Microcopy examples | `.tone-example-pass`, `.tone-example-fail` | Do/don't quotes |
| Writing standards | `.{prefix}-spec-table` | Rules |

### 08 — `logo-usage`

| Subsection | Classes | Brand-specific |
|------------|---------|----------------|
| Correct/incorrect demos | `.logo-demo-surface`, `.logo-clearspace`, `[data-logo-slot]` | Logo asset |
| Do / Don't lists | Tinted `.card` columns | Rules |

### 09 — `icons`

| Subsection | Classes | Brand-specific |
|------------|---------|----------------|
| Social strip | `.{prefix}-social-strip`, `.{prefix}-social-link` | SVG set |
| Guidance note | `.card` | Sourcing status |

### 10 — `navigation`

| Subsection | Classes | Brand-specific |
|------------|---------|----------------|
| Sitemap | `.nav-sitemap-grid`, `.nav-sim-*` | Site hierarchy |
| Header simulation | `.nav-sim-main` | Menu items |
| Footer simulation | Footer demo block | Links, regulatory |

### 11 — `layout`

| Subsection | Content | Brand-specific |
|------------|---------|----------------|
| Line elements | Underline demos + spec card | Gradient if multi-accent |
| Margins & spacing | Width diagram + Elementor notes | px values |
| Hero / cover | Visual + dimensions | Heights |

### 12 — `accessibility`

| Subsection | Classes | Brand-specific |
|------------|---------|----------------|
| Four principles | `.a11y-grid`, `.a11y-card` | Boilerplate |
| WCAG criteria table | `.{prefix}-spec-table` | Boilerplate + brand targets |
| Contrast checker | `#contrast-checker`, `.contrast-swatch` | Palette from `BRAND_CONFIG` |
| Advanced contrast lab | `#contrast-advanced` | Email mode optional |

### 13 — `ux-recommendations`

| Subsection | Classes | Brand-specific |
|------------|---------|----------------|
| Priority callout | `.{prefix}-callout`, `.ux-priority-*` | — |
| Numbered recs | `.ux-rec`, `.ux-rec-num`, `.ux-tag` | Site-specific advice |
| Quick wins table | `.{prefix}-spec-table` | — |

### 14 — `variables`

| Subsection | Classes | Brand-specific |
|------------|---------|----------------|
| Token block | `.code-block`, `#vars-code`, `copyBlock()` | Full `:root` export |

### 15 — `elementor`

| Subsection | Classes | Brand-specific |
|------------|---------|----------------|
| Global colors mapping | `.card` rows | Hex ↔ CSS var |
| Global fonts mapping | `.card` samples | Font stacks |
| Custom CSS snippet | `#elementor-code` | `.{prefix}-*` classes |
| Google Fonts snippet | `#fonts-code` | URL |
| Regulatory footer | Warning callout + `.card` | Legal text |

---

## 4. CSS token taxonomy

Prefix all brand tokens with `--{prefix}-` (template uses `--brand-`; rename per brand, e.g. `--acme-`).

### Colour tokens

| Token | Purpose | Template default |
|-------|---------|------------------|
| `--{p}-logo-landscape` | `url("logo.png")` | `url("logo.png")` |
| `--{p}-color-dark` | Page background | `#232323` |
| `--{p}-color-darker` | Sidebar/header | `#1A1A1A` |
| `--{p}-color-section-alt` | Alternating sections | `#1F1F1F` |
| `--{p}-color-card` | Card surfaces | `#2A2A2A` |
| `--{p}-color-border` | Dividers | `#333333` |
| `--{p}-color-light` | Primary text | `#EDEDED` |
| `--{p}-color-muted` | Secondary text | `#9A9A9A` |
| `--{p}-color-white` | White | `#FFFFFF` |
| `--{p}-color-primary` | Primary accent | `#4F63E6` (indigo) |
| `--{p}-color-secondary` | Secondary accent | `#12B5A8` (teal) |
| `--{p}-color-accent` | Tertiary accent | `#F2A81E` (amber) |
| `--{p}-color-accent-2`, `-3` | Additional accents | `#8A63D2`, `#E0518A` |
| `--{p}-color-primary-80` | Hover opacity | `rgba(79, 99, 230, 0.80)` |

### Typography tokens

| Token | Purpose |
|-------|---------|
| `--{p}-font-primary` | Headings, UI labels |
| `--{p}-font-body` | Body copy |
| `--{p}-font-accent` | Optional display |
| `--{p}-size-h1` … `--{p}-size-label` | Type scale |
| `--{p}-weight-regular` … `--{p}-weight-extrabold` | Weights |
| `--{p}-lh-heading`, `--{p}-lh-body`, etc. | Line heights |

### Layout tokens

| Token | Purpose |
|-------|---------|
| `--{p}-space-xs` … `--{p}-space-3xl` | Spacing scale |
| `--{p}-radius-sm` … `--{p}-radius-full` | Border radius |
| `--{p}-transition`, `--{p}-transition-slow` | Motion |
| `--{p}-shadow-sm` … `--{p}-shadow-lg` | Elevation |
| `--{p}-z-base` … `--{p}-z-modal` | Stacking |

---

## 5. CSS class inventory

### Shared structural (no prefix)

`.section`, `.section-eyebrow`, `.section-heading`, `.section-desc`, `.subsection-label`, `.card`, `.nav-category`, `.nav-link`, `.nav-index`, `.nav-dot`, `.scroll-progress-track`, `.scroll-progress-fill`, `.back-to-top`, `.rainbow-bar`, `.gradient-text`, `.color-card`, `.color-swatch`, `.btn`, `.btn-primary`, `.btn-outline-muted`, `.chip-button`, `.code-block`, `.copy-btn`, `.dept-card`, `.news-card`, `.voice-attr-card`, `.a11y-card`, `.ux-rec`, `.contrast-checker`, `.logo-demo-surface`

### Brand-prefixed (replace `brand` with your prefix)

| Class family | Examples |
|--------------|----------|
| Logo | `.{p}-logo-landscape`, `.{p}-logo-sidebar`, `.{p}-logo-hero`, `.{p}-logo-hidden` |
| Forms | `.{p}-label`, `.{p}-input`, `.{p}-select`, `.{p}-checkbox` |
| Tables | `.{p}-spec-table` |
| Callouts | `.{p}-callout`, `.{p}-callout-icon` |
| Social | `.{p}-social-strip`, `.{p}-social-link`, `.{p}-social-icon` |
| Toggle | `.{p}-toggle-row`, `.{p}-toggle-track` |

---

## 6. JavaScript API

All scripts are inline at the bottom of `index.html`. Blueprint drives palette-dependent logic from `BRAND_CONFIG`.

| Function / IIFE | Purpose |
|-----------------|---------|
| `copyColor(card, hex)` | Copy swatch hex; toggles `.copied` on card |
| `copyBlock(codeId, btnId)` | Copy code block text |
| `IntersectionObserver` on `section[id]` | Active `.nav-link` on scroll |
| `toggleSidebar()` | Mobile nav drawer |
| `checkMobile()` | Show/hide `#mobile-header` at ≤768px |
| `applyBrandLogo()` | Show `[data-logo-slot]` or `[data-logo-fallback]` |
| `setOpacityAccent(key)` | Update opacity demo blocks |
| `setHoverAccent(key)` | Update hover demo blocks |
| `initContrastChecker()` | Basic WCAG ratio tool |
| `initAdvancedContrastLab()` | Opacity + email preview lab |
| Scroll listener | `#scroll-progress` width + `.back-to-top.visible` |

### Logo slot pattern

```html
<div data-logo-slot class="{prefix}-logo-landscape {prefix}-logo-hero"></div>
<div data-logo-fallback class="{prefix}-logo-hidden">Brand Name</div>
```

`applyBrandLogo()` hides slots when `--{prefix}-logo-landscape` resolves to `none`.

### BRAND_CONFIG (blueprint only)

Defined at top of `<script>`. Supplies `accents[]` for `accentMap`, contrast checker `palette`, and rainbow gradient stops.

---

## 7. Page chrome checklist

- [ ] `<title>{Brand} — Brand Style Guide & Design System v{x}</title>`
- [ ] Favicon link to `../assets/favicons/`
- [ ] Google Fonts / `@font-face` in `<head>`
- [ ] Optional Tailwind CDN + `theme.extend.colors` mirroring tokens
- [ ] `:root` block in `<style>`
- [ ] Fixed `#sidebar` (248px) + `#main-content` margin-left
- [ ] `#scroll-progress` + `#back-to-top` (bottom offset above guide-switcher)
- [ ] `#mobile-header` sticky bar ≤768px
- [ ] Hero `#top` with rainbow bar, watermark, version badge, accent chips
- [ ] Page `<footer>` with logo + version
- [ ] Shared scripts at end of `<body>`:
  - `../shared/guide-switcher.css/js`
  - `../shared/guide-resources.css/js`
  - `../shared/guide-back.css/js`

---

## 8. Shared repo integration

### guide-switcher.js

Add to `GUIDES` array (cross-guide picker):

```javascript
{ slug: 'ACME-style-guide', label: 'ACME Institute' }
```

Add to `SITE_LINKS`:

```javascript
'ACME-style-guide': [
  { href: 'https://example.com/', label: 'Live', title: '...' }
]
```

**Do not** register `blueprint-style-guide` — it is internal scaffolding only.

### guide-resources.js

Optional per-brand links (calendars, open day):

```javascript
'ACME-style-guide': [
  { label: 'Open Day', href: 'https://...', external: true, title: '...' }
]
```

### Root portal

Add a card in [`index.html`](index.html) linking to `{slug}/`.

### Assets

- Favicon: `assets/favicons/{BRAND}-favicon.png`
- Logo: `{slug}/logo.png`

---

## 9. Migration matrix (existing guides)

| Guide | Layout | Sections | Blueprint parity | Notes |
|-------|--------|----------|------------------|-------|
| **Blueprint** | Sidebar + sections | 15 | Template (neutral) | Fork source — not a live brand |
| **OWI** | Sidebar + sections | 15 | Complete | Dark theme reference implementation |
| **IMM-GS** | Sidebar + sections | 15 | Complete | Light theme; v1.3 |
| **BCi** | `sg-*` scroll + dividers | 18 | Hybrid complete | Keeps BCi layout + blueprint IDs/tools; v1.3 |
| **ASCON** | `ds-sidebar` | ~11 | Partial | Real logos added; missing full §2 section set; v1.3 |
| **TICON-Africa** | Custom sidebar | ~18 | Partial | Custom IA; audit against §2 |
| **SAICTA** | Tab panels | 4 panels | Partial | Different UX model; real logos; v1.2 |
| **mPowered** | Tailwind sidebar | 6 | Partial | AI Co-Pilot extension; real logos; v1.3 |

---

## 10. Workflows

### New brand (from blueprint)

1. Duplicate `blueprint-style-guide/` → `{Brand}-style-guide/`
2. Apply the six generation steps in §0 (tokens, palette, fonts, copy, prefix, assets)
3. Replace every placeholder value (`Your Brand Name`, `YBR`, bracketed copy) and example card headlines with real brand content
4. Fill `BRAND_CONFIG` in `index.html` (search `BRAND_CONFIG`) and mirror colours into `:root` + Tailwind config
5. Add `logo.png` and favicon
6. Register in `guide-switcher.js`, root `index.html`, optional `guide-resources.js`
7. Run quality bar checklist (§11)
8. Preview: `npx serve .` → `/{slug}/`

### Upgrade existing guide

1. **Audit** — List current section IDs vs §2 table
2. **Chrome** — Add scroll progress, back-to-top, mobile header if missing
3. **Normalize IDs** — `voice` → `voice-tone`, `color` → `colors`
4. **Port sections** — Copy HTML/CSS/JS from blueprint for missing sections
5. **Tokenize** — Move hardcoded hex to `--{prefix}-*` variables
6. **Interactivity** — Wire `copyColor`, contrast checkers, nav observer
7. **Integrate** — Shared scripts, portal, switcher registration
8. **Verify** — Quality bar

---

## 11. Quality bar (blueprint parity)

A guide meets blueprint parity when:

- [ ] All **required** sections (§2) present with correct `id` anchors
- [ ] Sidebar nav categories match Foundation → Developer order
- [ ] Every colour swatch copies hex on click
- [ ] `#variables` code block copies full token set
- [ ] Basic contrast checker works with brand palette
- [ ] Active nav highlights on scroll (IntersectionObserver)
- [ ] Mobile sidebar toggles at ≤768px
- [ ] Logo fallback works without `logo.png`
- [ ] Shared guide-switcher loads without z-index conflicts
- [ ] No template/example or other-brand copy left in placeholders (no `{{TOKEN}}`, `[bracket]`, or `BRAND: replace` left)
- [ ] Regulatory/legal footer present if the brand requires it

---

## 12. Prefix rename example

The template uses the `brand` prefix everywhere. To namespace a guide, find-replace `brand` → your prefix. Example, renaming to `acme`:

| Template (`brand`) | Renamed (`acme`) |
|--------------------|------------------|
| `--brand-color-primary` | `--acme-color-primary` |
| `--brand-color-secondary` | `--acme-color-secondary` |
| `--brand-color-accent` | `--acme-color-accent` |
| `.brand-input` | `.acme-input` |
| `.brand-spec-table` | `.acme-spec-table` |
| `BRAND_CONFIG.prefix: 'brand'` | `BRAND_CONFIG.prefix: 'acme'` |

The template ships with three accents (primary, secondary, accent) plus two extra tokens (`accent-2`, `accent-3`). Add more by extending `accents[]` in `BRAND_CONFIG` and duplicating the corresponding card/button rows.

> Existing guides in this repo use their own prefixes (e.g. OWI uses `--ow-`, IMM uses `--imm-`). Those are examples of the same pattern, not a required convention.

---

## 13. File structure per brand

```
{Brand}-style-guide/
├── index.html      # Self-contained guide (HTML + CSS + JS)
└── logo.png        # Optional landscape logo
```

No build step. GitHub Pages serves files as-is (`.nojekyll` at repo root).

---

*Brand-agnostic style-guide blueprint · Template: `blueprint-style-guide/` · Updated July 2026*
