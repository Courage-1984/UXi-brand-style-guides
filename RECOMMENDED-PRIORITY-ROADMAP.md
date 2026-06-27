# Recommended Priority Roadmap

Action plan for improving the UXi brand style guides monorepo. Priorities are ordered by impact and risk — address P0 before sharing guides externally, especially IMM-GS.

---

## P0 — Before sharing IMM-GS externally

These items block external publication or create legal/brand accuracy risk.

| # | Task | Brand(s) | Why |
|---|------|----------|-----|
| 1 | Fix Marketing colour inconsistency (`#004987` vs `#FFE500`) | IMM-GS | Swatch, hex label, RGB, copy handler, rainbow bar, and CSS variable disagree |
| 2 | Replace OWI-placeholder copy (film/DIFF/creative arts in business context) | IMM-GS | Fork artifacts undermine credibility |
| 3 | Resolve all `[TBD]` legal and accreditation text | IMM-GS | Footer, company registration, accreditation body, campus list |
| 4 | Align rainbow bar colours with programme tokens | IMM-GS | Bar uses `#FFE500`; `--imm-color-visual` is `#004987` |

---

## P1 — Quality parity across brands

Close gaps so all four guides meet a consistent UXi baseline.

| # | Task | Brand(s) | Why |
|---|------|----------|-----|
| 5 | Add dedicated WCAG section | OWI, IMM-GS | BCi and mPowered already document accessibility explicitly |
| 6 | Add mobile nav (hamburger + overlay or top collapse) | BCi | Fixed 240px sidebar has no mobile breakpoint |
| 7 | Add logo usage, voice & tone, and spacing scale sections | mPowered | Thinnest guide vs OWI/IMM/BCi |
| 8 | Add `<meta name="description">` and Open Graph tags | All | Better link previews when URLs are shared |

---

## P2 — Maintainability

Reduce duplication and long-term drift.

| # | Task | Brand(s) | Why |
|---|------|----------|-----|
| 9 | Extract OWI/IMM shared template into config-driven generator | OWI, IMM-GS | ~90% duplicate HTML; fixes must be applied twice today |
| 10 | Export `tokens/<brand>.json` per guide | All | Machine-readable tokens for Figma, Elementor, other repos |
| 11 | Pin Tailwind CDN to a specific version | OWI, IMM-GS, mPowered | Unpinned CDN can change behaviour over time |
| 12 | Remove redundant `logo_base64.txt` | IMM-GS | Duplicates `logo.png` / `logo_cropped.png` |
| 13 | Update OWI footer copyright (© 2019 → current year) | OWI | Stale legal line in navigation demo footer |
| 14 | Standardise on `navigator.clipboard` with fallback | OWI, IMM-GS, mPowered | Replace deprecated `document.execCommand('copy')` |

---

## P3 — Enhancements

Valuable improvements after core quality and maintainability are in place.

| # | Task | Brand(s) | Why |
|---|------|----------|-----|
| 15 | Add BCi-style UX recommendations (tailored per site) | OWI, IMM-GS, mPowered | BCi’s audit notes are a strong differentiator |
| 16 | Secure mPowered AI via serverless proxy + output sanitization | mPowered | API key in static HTML and `innerHTML` injection are risky |
| 17 | Add per-brand favicons | All | No favicons today; weak tab/bookmark identity |
| 18 | Add print styles globally | All | OWI has `@media print`; others do not |
| 19 | Add `<link rel="canonical">` per guide | All | Stable URLs for SEO and bookmarking |
| 20 | Add root `404.html` for GitHub Pages | Repo | Better experience for broken links |
| 21 | Rename IMM CSS tokens (`film`/`anim` → programme names) | IMM-GS | Semantic names still reflect OWI creative-arts fork |
| 22 | Document or replace ITC Avant Garde / Avenir web font strategy | BCi, OWI | Licensed fonts referenced but not consistently loaded |
| 23 | Replace `bg-white` with `bg-porcelain` in mPowered guide UI | mPowered | Guide should model its own design rules |

---

## Suggested execution order

1. **Sprint 1 (IMM-GS launch blockers):** P0 items 1–4  
2. **Sprint 2 (Parity):** P1 items 5–8  
3. **Sprint 3 (Platform):** P2 items 9–14  
4. **Backlog:** P3 as capacity allows  

---

## Minimum section checklist (UXi baseline)

Use this when judging whether a guide is “complete enough” to share with stakeholders.

### Tier 1 — Must have

- Colour palette with usage and pairing rules  
- Typography (families, scale, weights)  
- Buttons, forms, and cards  
- Voice & tone (or brand personality)  
- Accessibility (WCAG 2.1 AA minimum)  
- Mobile-friendly navigation  

### Tier 2 — Should have

- Logo usage and clear space  
- Spacing / layout grid  
- Navigation patterns  
- Developer token export (CSS variables or JSON)  
- Elementor integration (where WordPress is the target CMS)  

### Tier 3 — Nice to have

- UX / site audit recommendations  
- AI component generator (mPowered-style)  
- Imagery and iconography guidelines  
- Motion / animation rules  

---

## Current guide maturity (reference)

| Guide | Version | Best for | Main gap |
|-------|---------|----------|----------|
| OWI | v1.9 | Elementor developers | No dedicated WCAG section; stale copyright |
| IMM-GS | v1.0 | Elementor developers | Content/token accuracy (P0) |
| BCi | v1.0 | Brand & UX governance | Mobile nav; no Elementor export |
| mPowered | v1.0 | Product dev + AI prototyping | Logo, voice, spacing; AI security |

---

*Last updated: June 2026*
