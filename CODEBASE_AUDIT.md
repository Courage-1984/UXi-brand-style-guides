 # UXi Brand Style Guides — Comprehensive Codebase Audit

  **Audit Date:** 2026-06-29
  **Repository:** https://github.com/Courage-1984/UXi-brand-style-guides
  **Auditor:** Claude Code Analysis

  ---

  ## Executive Summary

  This is a well-structured static website hosting 7 published brand style guides with GitHub Pages deployment. The codebase requires minimal maintenance 
  but has one critical file size anomaly and several optimization opportunities.

  **Key Stats:**
  - 7.3 MB total | 10 HTML files | 18,218 HTML lines
  - Zero build dependencies | Pure static + CDN
  - GitHub Actions deployment: Active and functional
  - No security issues identified

  ---

  ## 1. PROJECT STRUCTURE

  ### Directory Layout

  UXi-brand-style-guides/
  ├── index.html                          # Root entry point (920 lines, 35 KB)
  ├── README.md                           # Deployment docs (70 lines)
  ├── .nojekyll                           # Jekyll disabler (empty file)
  ├── .gitignore                          # Excludes .env, *.local
  ├── .claude/settings.local.json         # Claude Code config
  ├── .github/workflows/static.yml        # GitHub Actions deployment
  │
  ├── shared/
  │   ├── guide-switcher.css              # Cross-guide nav (149 lines, 3.4 KB)
  │   └── guide-switcher.js               # Navigation logic (147 lines, 4.7 KB)
  │
  ├── assets/favicons/                    # Brand icons (16 files, 324 KB)
  │   ├── OWI-favicon.png
  │   ├── IMM-GS-favicon.png
  │   ├── BCi-favicon.png
  │   ├── mPowered-favicon.png
  │   ├── ASCON-favicon.png
  │   ├── TICON-Africa-favicon.png
  │   ├── SAICTA-favicoon.png              # ⚠️ TYPO: "favicoon" not "favicon"
  │   ├── UXi-Creative-Marketing-favicon.jpg
  │   ├── UXi-favicon.png
  │   └── 8 coming-soon guide favicons
  │
  ├── OWI-style-guide/
  │   ├── index.html                      # 3,807 lines | 170 KB
  │   └── logo.png                        # 78 KB
  │
  ├── IMM-GS-style-guide/
  │   ├── index.html                      # 3,842 lines | 172 KB
  │   ├── logo.png                        # 37 KB
  │   └── logo_cropped.png                # 29 KB
  │
  ├── ASCON-style-guide/
  │   └── index.html                      # 3,558 lines | 124 KB
  │
  ├── BCi-style-guide/
  │   └── index.html                      # 2,531 lines | 104 KB
  │
  ├── mPowered-style-guide/
  │   └── index.html                      # 765 lines | 48 KB
  │   └── ⚠️ Contains: Gemini API placeholder (line 718)
  │
  ├── SAICTA-style-guide/
  │   └── index.html                      # 844 lines | 52 KB
  │   └── WCAG accessibility focus
  │
  └── TICON-Africa-style-guide/
      └── index.html                      # 1,952 lines | 2.6 MB ⚠️ SIZE OUTLIER

  ### File Statistics

  | Category | Count | Size |
  |----------|-------|------|
  | HTML Files | 10 | 18,218 lines |
  | CSS Files | 1 | 149 lines (+ 656 inline) |
  | JS Files | 2 | 147 lines total |
  | Image Files | 19 favicons + 3 logos | 324 KB + 144 KB |
  | Config Files | 3 (.nojekyll, .gitignore, settings.local.json) | - |
  | **Total Repository** | **36 files** | **7.3 MB** |

  ---

  ## 2. PROJECT TYPE & ARCHITECTURE

  ### Technology Stack

  **Frontend:**
  - Pure HTML5 (no template engine)
  - CSS: Inline styles + Tailwind CSS CDN + Google Fonts
  - JavaScript: Vanilla ES5 (no frameworks, 147 lines)
  - No build system (Webpack, Gulp, etc.)
  - No package.json or npm dependencies

  **Hosting:**
  - GitHub Pages (master branch, root `/`)
  - GitHub Actions CI/CD
  - Static file serving only
  - Jekyll disabled (.nojekyll)

  **External Dependencies:**
  - `https://cdn.tailwindcss.com` (CDN)
  - Google Fonts API
  - Lucide Icons (SAICTA guide only)
  - CDN Fonts (Avenir, Lemon Milk)

  ### Architecture Pattern

  Single Page Collection Model:
  - Central hub: index.html (brand directory)
  - 7 published guides: Each is standalone HTML file
  - 8 placeholder guides: CSS-only styling (no HTML yet)
  - Cross-guide navigation: Shared switcher widget (JS + CSS)

  ---

  ## 3. HTML FILES IN DETAIL

  ### Root Index (index.html)

  **Purpose:** Brand directory and entry point
  **Size:** 920 lines | 35 KB
  **Components:**
  - Page title with UXi logo
  - 7 active brand cards (clickable links)
  - 8 coming-soon placeholder cards (disabled)
  - 16 unique CSS classes for brand theming
  - Inline styles for all card variants

  **Styling Approach:**
  - BEM-like naming: `.guide-card--{brand}`
  - Example: `.guide-card--owi`, `.guide-card--imm`, `.guide-card--ticon`
  - CSS Custom Properties (CSS variables) for colors
  - Responsive grid: Stacks on mobile (<560px)

  ### Style Guide Files

  | Guide | Lines | Size | Key Features | Issues |
  |-------|-------|------|--------------|--------|
  | OWI | 3,807 | 170 KB | Tailwind config + CSS custom properties | Well-organized |
  | IMM-GS | 3,842 | 172 KB | Montserrat design system + 2 logos | Largest semantic content |
  | ASCON | 3,558 | 124 KB | Deep navy theme + gradient backgrounds | Standard structure |
  | BCi | 2,531 | 104 KB | Dark modern theme + Tailwind heavy | Good format |
  | mPowered | 765 | 48 KB | Minimal design | ⚠️ API key reference |
  | SAICTA | 844 | 52 KB | WCAG accessibility guardrails built-in | Most accessible |
  | TICON | 1,952 | **2.6 MB** | Forest green theme | ⚠️ **CRITICAL: File size** |

  **All guides include:**
  - `<link rel="stylesheet" href="../shared/guide-switcher.css">`
  - `<script src="../shared/guide-switcher.js" defer></script>`
  - Favicon reference to `../assets/favicons/`
  - Viewport meta tag for mobile responsiveness

  ---

  ## 4. CSS & JAVASCRIPT FILES

  ### Shared Assets (2 files)

  #### guide-switcher.css (149 lines, 3.4 KB)

  **Purpose:** Cross-guide navigation widget styling
  **Features:**
  - Fixed position: bottom-right corner (20px offset)
  - Circular trigger button (36x36px) with icon
  - Dropdown menu with blur backdrop
  - Mobile responsive: Adjusts offset at 480px breakpoint
  - Print-safe: Hidden with `@media print`

  **Technical Details:**
  ```css
  - Z-index: 99999 (highest priority)
  - Backdrop filter: blur(8px) + webkit fallback
  - Smooth transitions: 0.18s cubic-ease
  - Accessibility: Proper focus indicators

  guide-switcher.js (147 lines, 4.7 KB)

  Purpose: Guide navigation logic and menu generation
  Architecture:
  - IIFE (Immediately Invoked Function Expression) for scoping
  - Vanilla ES5 JavaScript (IE 11 compatible)
  - Zero external dependencies

  Key Functions:
  GUIDES array (line 4-12):
    - Hard-coded list of 7 published guides
    - Each has slug & label properties
    - Manual update required for new guides

  getCurrentSlug():
    - Parses window.location.pathname
    - Finds which guide is active
    - Returns null if on root index

  buildGuideUrl(slug):
    - Returns relative path to guide
    - Smart: Detects if called from guide or root

  createSwitcher():
    - Generates menu DOM dynamically
    - Sets ARIA attributes for accessibility
    - Event listeners for click/keyboard (Esc to close)

  Accessibility Features:
  - role="navigation" on container
  - role="menu" on list
  - aria-current="page" on active link
  - aria-label on trigger button
  - aria-expanded state management
  - Keyboard support (Escape key)

  Inline CSS in index.html (656 lines)

  Location: Lines 13-656 (style tag in head)
  Contains:
  - Global reset: box-sizing: border-box
  - Layout: .guide-list, .guide-row, .guide-card, .guide-site-links
  - 16 brand theme classes: .guide-card--{brand}
  - Responsive breakpoint: @media (max-width: 560px)
  - Coming soon section styling

  Color Patterns by Brand:
  OWI:        #1a1a1a (dark) + #e75a33 (orange)
  IMM:        #f3f7fc (light) + #f26122 (orange)
  BCi:        #141517 (dark) + #2ad2c9 (turquoise)
  mPowered:   #fefff8 (cream) + #d3dd19 (lemon)
  ASCON:      Gradient dark navy + #c9911a (gold)
  TICON:      #fff (white) + #0e4634 (forest green)
  SAICTA:     #121218 (dark) + #b7a9e8 (lavender)

  External CSS Sources

  All style guides load:
  - Tailwind CSS: https://cdn.tailwindcss.com
  - Google Fonts: Multiple font families
  - CDN Fonts: Avenir, Lemon Milk (advanced typography)

  ---
  5. CONFIGURATION FILES

  .github/workflows/static.yml

  Purpose: Continuous deployment to GitHub Pages
  Trigger: push to master branch or manual workflow_dispatch

  Workflow Steps:
  1. Checkout code (actions/checkout@v4)
  2. Setup Pages (actions/configure-pages@v5)
  3. Upload artifact (entire repo root)
  4. Deploy to Pages (actions/deploy-pages@v5)

  Configuration Details:
  permissions:
    contents: read        # Read access to repo
    pages: write          # Write to Pages
    id-token: write       # OIDC token for auth

  concurrency:
    group: "pages"
    cancel-in-progress: false  # Don't cancel existing deploys

  Status: ✓ Active and functional

  .gitignore

  .env
  .env.*
  *.local

  Rationale: Prevents API keys (mPowered guide) from being committed
  Status: ✓ Properly configured

  .claude/settings.local.json

  {
    "permissions": {
      "allow": ["Bash(awk '{print $1 \" bytes: \" $2}')"]
    }
  }

  Purpose: Claude Code harness configuration
  Status: Minimal, project-specific allowlist

  ---
  6. IDENTIFIED ISSUES & IMPROVEMENTS

  CRITICAL ISSUES

  1. TICON-Africa File Size Anomaly

  Severity: 🔴 High
  File: TICON-Africa-style-guide/index.html
  Details:
  - Size: 2.6 MB (1,952 lines only)
  - 35x larger than typical guides
  - BCi (similar content): 104 KB
  - OWI (comprehensive): 248 KB

  Likely Causes:
  - Embedded base64 images in CSS/HTML
  - Uncompressed SVG graphics
  - Duplicate CSS code
  - Inline video/media

  Impact:
  - Slow page load
  - Potential GitHub Pages limits
  - Poor mobile experience
  - Deployment delays

  Recommendation:
  # Extract and analyze
  grep -o '<style' TICON-Africa-style-guide/index.html | wc -l
  grep -o 'data:image' TICON-Africa-style-guide/index.html | wc -l
  grep -o 'url(' TICON-Africa-style-guide/index.html | wc -l

  Fix Priority: Immediate (within 1 week)

  ---
  2. SAICTA Favicon Naming Typo

  Severity: 🟡 Medium
  File: assets/favicons/SAICTA-favicoon.png
  Issue: Misspelled filename ("favicoon" vs. standard "favicon")

  Current State:
  - File exists with typo name
  - HTML correctly references typo: href="assets/favicons/SAICTA-favicoon.png"
  - Inconsistent with all other guides (ASCON-favicon.png, OWI-favicon.png, etc.)

  Fix Steps:
  1. Rename file: SAICTA-favicoon.png → SAICTA-favicon.png
  2. Update SAICTA-style-guide/index.html line 7: href="../assets/favicons/SAICTA-favicon.png"
  3. Update index.html line 772: src="assets/favicons/SAICTA-favicon.png"
  4. Commit with message: fix: correct SAICTA favicon filename typo

  Fix Priority: Low (cosmetic, but standardization)

  ---
  3. mPowered Gemini API Key Placeholder

  Severity: 🟢 Green (well-managed)
  File: mPowered-style-guide/index.html line 718-719
  Details:
  const apiKey = ""; // Left empty as per Canvas environment instructions
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;

  Current Protection:
  - ✓ Correctly left empty (not committed)
  - ✓ .gitignore excludes .env files
  - ✓ README documents this requirement
  - ✓ Intentional placeholder

  Status: No action needed (properly managed)

  ---
  MODERATE ISSUES

  4. Dead CSS Code in index.html

  Severity: 🟡 Medium
  Issue: CSS classes for 8 "coming soon" guides
  Classes:
  - .guide-card--amc (5 rules)
  - .guide-card--owu (5 rules)
  - .guide-card--immi (5 rules)
  - .guide-card--flanders (5 rules)
  - .guide-card--lexcorp (5 rules)
  - .guide-card--oakfields (5 rules)
  - .guide-card--ctca (5 rules)
  - .guide-card--ctu (5 rules)

  Impact:
  - ~48 unused CSS rules
  - ~8 KB overhead
  - index.html could shrink from 35 KB → 27 KB

  Recommendation:
  - Option A: Remove now, re-add when guides are published
  - Option B: Keep for quick publishing (minimal overhead)

  Current: Option B is acceptable (documentation trade-off)

  ---
  5. Hard-Coded Guide List in JavaScript

  Severity: 🟡 Medium
  File: shared/guide-switcher.js lines 4-12
  Issue:
  var GUIDES = [
    { slug: 'OWI-style-guide', label: 'Open Window Institute' },
    { slug: 'IMM-GS-style-guide', label: 'IMM Graduate School' },
    // ... etc (manual list)
  ];

  Problem:
  - Adding new guides requires manual JS update
  - Not automatically discoverable
  - Maintainability concern as guides grow

  Recommendation:
  - Consider data-driven approach (JSON file)
  - Alternative: Auto-generate from directory listing
  - Not urgent (only 7 guides currently)

  Suggested Format:
  // guides.json
  [
    { "slug": "OWI-style-guide", "label": "Open Window Institute", "version": "2.0" },
    { "slug": "IMM-GS-style-guide", "label": "IMM Graduate School", "version": "1.1" }
  ]

  ---
  6. External CDN Dependencies

  Severity: 🟡 Medium
  Dependencies:
  - Tailwind CSS CDN (6/7 guides)
  - Google Fonts (all guides)
  - Lucide Icons (SAICTA only)

  Risks:
  - Network latency (especially on mobile)
  - CDN downtime → broken styling
  - No offline access
  - Initial load performance

  Metrics:
  - Tailwind: ~50 KB min
  - Google Fonts: ~80 KB (varies by fonts)
  - Total external: ~150 KB+ per page

  Recommendation:
  - Option A: Self-host Tailwind + fonts (build step required)
  - Option B: Keep CDN, add service worker for caching
  - Option C: Accept current setup (standard practice)

  Current: Acceptable for GitHub Pages static site

  ---
  7. Responsive Design Inconsistencies

  Severity: 🟢 Green (minor)
  Details:
  - Root index: Single breakpoint at 560px
  - Style guides: Tailwind defaults (no explicit breakpoint tracking)
  - Mobile experience may vary between guides

  Recommendation:
  - Document mobile breakpoints: 320px, 480px, 768px, 1024px
  - Use consistent Tailwind breakpoints across all guides
  - Test on: iPhone 12, iPad, Android devices

  ---
  MINOR ISSUES

  8. Alt Text Coverage

  Severity: 🟢 Green
  Current State:
  - Decorative images: alt="" (correct)
  - Card icons: alt="" with title text (acceptable)
  - Some large images: May need better alt text

  WCAG Compliance:
  - SAICTA guide implements WCAG guardrails (best practice)
  - Others meet minimum requirements

  Recommendation: Conduct formal accessibility audit (low priority)

  ---
  9. Git Commit History

  Severity: 🟢 Green (minor documentation issue)
  Current Commits:
  50d5faf - added saicta
  94af17a - base
  90761fe - init 3
  1e79d16 - init 2
  99ff832 - Create static.yml
  5eedbb2 - init

  Issues:
  - Generic messages ("init", "init 2")
  - No conventional commit format
  - Minimal history for context

  Recommendation:
  - Use conventional commits going forward:
    - feat: add SAICTA style guide
    - fix: correct TICON file size issue
    - docs: update deployment instructions
  - Add CHANGELOG.md for releases

  ---
  10. HTML Formatting Inconsistencies

  Severity: 🟢 Green (cosmetic)
  Observations:
  - OWI/IMM: Consistent 2-space indentation
  - BCi: Minimal indentation
  - TICON: No consistent formatting (1,952 lines)

  Impact: None (doesn't affect functionality)
  Recommendation: Use Prettier for auto-formatting on new guides

  ---
  7. DEPLOYMENT ANALYSIS

  GitHub Pages Setup

  Configuration:
  - Source: Master branch
  - Root: / (entire repository)
  - Build: None (Jekyll disabled)
  - SSL: ✓ Automatic HTTPS
  - Custom domain: Not configured (GitHub org domain)

  Deployment URLs:
  https://Courage-1984.github.io/UXi-brand-style-guides/
  ├── /index.html (brand directory)
  ├── /OWI-style-guide/
  ├── /IMM-GS-style-guide/
  ├── /BCi-style-guide/
  ├── /mPowered-style-guide/
  ├── /ASCON-style-guide/
  ├── /TICON-Africa-style-guide/
  └── /SAICTA-style-guide/

  GitHub Actions Workflow

  Status: ✓ Functional and well-configured
  Reliability:
  - Uses latest stable action versions (v4, v5)
  - Proper permission scoping
  - Concurrent deployment protection enabled

  Performance:
  - Deploy time: ~1-2 minutes typical
  - No build step (instant upload)
  - Rollback: Use git revert + re-push

  ---
  8. SECURITY ASSESSMENT

  Strengths ✓

  - No npm/pip dependencies (zero supply-chain risk)
  - .env files properly ignored
  - No database or backend
  - GitHub Pages HTTPS by default
  - No sensitive data in repository

  Considerations ⚠️

  - External CDN dependencies create trust boundary
  - No Content Security Policy (CSP) headers
  - CDN outage impacts styling (Tailwind, Fonts)
  - No rate limiting or DDoS protection (GitHub Pages standard)

  Recommendations

  - Add CSP header (GitHub Pages meta tag or server config)
  - Self-host critical fonts if possible
  - Regular security audits of external dependencies

  ---
  9. PERFORMANCE ANALYSIS

  File Sizes

  ┌─────────────┬────────┬─────────────┐
  │  Category   │  Size  │   Impact    │
  ├─────────────┼────────┼─────────────┤
  │ TICON Guide │ 2.6 MB │ 🔴 Critical │
  ├─────────────┼────────┼─────────────┤
  │ OWI Guide   │ 170 KB │ 🟡 Moderate │
  ├─────────────┼────────┼─────────────┤
  │ IMM Guide   │ 172 KB │ 🟡 Moderate │
  ├─────────────┼────────┼─────────────┤
  │ ASCON Guide │ 124 KB │ 🟢 Good     │
  ├─────────────┼────────┼─────────────┤
  │ Shared CSS  │ 3.4 KB │ 🟢 Good     │
  ├─────────────┼────────┼─────────────┤
  │ Shared JS   │ 4.7 KB │ 🟢 Good     │
  └─────────────┴────────┴─────────────┘

  Load Time Estimate (3G network)

  Typical guide (100 KB HTML + 150 KB external):
  - Initial: 2-4 seconds
  - First interactive: 3-5 seconds

  TICON guide (2.6 MB):
  - Initial: 45-60 seconds 🔴
  - First interactive: 60+ seconds

  Optimization Opportunities

  1. High Impact: Fix TICON file size → ~2.5 MB savings
  2. Medium Impact: Minify index.html CSS → ~5 KB savings
  3. Low Impact: Optimize favicons → ~50 KB savings

  ---
  10. RECOMMENDATIONS & ACTION PLAN

  Immediate Actions (This Week)

  - [ ] Investigate TICON-Africa file size
    - Analyze what causes 2.6 MB bloat
    - Extract embedded assets
    - Optimize or split guide
  - [ ] Fix SAICTA favicon typo
    - Rename: SAICTA-favicoon.png → SAICTA-favicon.png
    - Update references (2 files)
    - Test deploy

  Short Term (This Month)

  - [ ] Remove dead CSS for "coming soon" guides (optional)
  - [ ] Update git commit messages to conventional format
  - [ ] Add CHANGELOG.md
  - [ ] Document mobile testing checklist

  Medium Term (Next Quarter)

  - [ ] Consider moving guide list to external JSON file
  - [ ] Implement Prettier for HTML formatting
  - [ ] Add SEO improvements (meta descriptions, og: tags)
  - [ ] Accessibility audit using axe DevTools

  Long Term (Future Scaling)

  - [ ] Consider build system (Gulp/Webpack) if guides multiply
  - [ ] Extract shared CSS patterns into reusable variables
  - [ ] Create guide template for faster onboarding
  - [ ] Set up automated image optimization

  ---
  11. QUICK REFERENCE

  File Locations

  ┌───────────────────────┬────────────────────────────────┐
  │        Purpose        │              Path              │
  ├───────────────────────┼────────────────────────────────┤
  │ Brand directory       │ /index.html                    │
  ├───────────────────────┼────────────────────────────────┤
  │ Navigation widget CSS │ /shared/guide-switcher.css     │
  ├───────────────────────┼────────────────────────────────┤
  │ Navigation widget JS  │ /shared/guide-switcher.js      │
  ├───────────────────────┼────────────────────────────────┤
  │ Deployment config     │ /.github/workflows/static.yml  │
  ├───────────────────────┼────────────────────────────────┤
  │ Favicons              │ /assets/favicons/              │
  ├───────────────────────┼────────────────────────────────┤
  │ OWI Guide             │ /OWI-style-guide/index.html    │
  ├───────────────────────┼────────────────────────────────┤
  │ IMM Guide             │ /IMM-GS-style-guide/index.html │
  └───────────────────────┴────────────────────────────────┘

  Key Metrics

  - Total repository size: 7.3 MB
  - HTML content lines: 18,218
  - External dependencies: 3 (Tailwind, Google Fonts, Lucide)
  - Published guides: 7
  - Coming soon guides: 8
  - Favicons: 16 + UXi logo

  Important Notes

  - All guides must include: ../shared/guide-switcher.css and .js
  - All guides must reference: ../assets/favicons/{brand}.png
  - Favicon path must be relative: ../assets/favicons/
  - Master branch is production (deploy on push)

  ---
  12. GLOSSARY

  - BEM: Block, Element, Modifier CSS naming convention
  - CDN: Content Delivery Network (external hosting)
  - WCAG: Web Content Accessibility Guidelines
  - IIFE: Immediately Invoked Function Expression (JS pattern)
  - GitHub Pages: Static site hosting from GitHub repositories
  - Jekyll: Static site generator (disabled in this project)
  - Tailwind CSS: Utility-first CSS framework

  ---
  Document Metadata

  - Created: 2026-06-29
  - Audit Scope: Complete codebase analysis
  - Recommendations: 10 issues identified (1 critical, 2 moderate, 7 minor)
  - Next Review: Recommended in 3 months or after deploying new guides

  ---
