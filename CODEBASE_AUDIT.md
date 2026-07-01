# UXi Brand Style Guides - Codebase Audit

## Overview
This repository contains a collection of static digital style guides for various UXi education brands. It is designed to be lightweight, easy to maintain, and hosted directly via GitHub Pages without the need for a complex build system.

## Architecture
- **Tech Stack:** Plain HTML, CSS, and Vanilla JavaScript.
- **Build System:** None. The repository is served as static files. No pre-processors (like Sass or PostCSS) or bundlers (like Webpack or Vite) are used.
- **Hosting:** Configured to be served via GitHub Pages directly from the `main` branch. The `.nojekyll` file at the root ensures GitHub Pages serves the files exactly as they are without Jekyll processing.

## File & Folder Structure
```text
├── index.html              # Internal portal/directory linking to all brand guides.
├── .nojekyll               # Bypasses GitHub Pages default Jekyll processing.
├── shared/                 # Cross-guide navigation components (CSS and JS).
│   ├── guide-switcher.css  
│   └── guide-switcher.js
├── ASCON-style-guide/      # Single-brand style guide folder
│   └── index.html          # Standalone style guide (contains all specific CSS/HTML)
├── BCi-style-guide/        
├── IMM-GS-style-guide/     
├── OWI-style-guide/        
├── SAICTA-style-guide/     
├── TICON-Africa-style-guide/
└── mPowered-style-guide/   
```

## Styling Approach
- **Design Tokens (CSS Variables):** Each brand's `index.html` uses its own set of CSS custom properties (variables) defined in `:root`. This allows each file to manage its own brand colors, typography, sizing, and spacing independently.
- **Inline Styles:** The CSS for each individual style guide is completely contained within a `<style>` block in the `<head>` of its respective `index.html` file. This means there are no external stylesheets per brand, making each guide a self-contained document (often exceeding 100KB of HTML/CSS).
- **Global Chrome:** The only shared styling is found in the `shared/` directory, which handles a universal "guide switcher" overlay that allows users to navigate between the different brand style guides.
- **Fonts:** Fonts are loaded externally via Google Fonts (e.g., Inter, Montserrat) and occasionally local/custom web fonts via `@font-face`.

## Component Strategy
- Components (buttons, cards, inputs, typography scales) are constructed using pure HTML and CSS utility classes or component classes defined inside each file.
- There are no JavaScript frameworks (React, Vue) or component libraries. Any interactive elements (like the guide switcher) use Vanilla JavaScript.

## Specific Brand Highlights
- **mPowered AI Co-Pilot:** The `mPowered-style-guide/index.html` includes an optional Gemini-powered component generator which requires an API key to function.

## Recommendations for Future Maintenance
1. **CSS Modularization:** If the inline CSS in `index.html` files becomes too large or difficult to maintain, consider extracting it into brand-specific `.css` files (e.g., `ASCON-style-guide/style.css`).
2. **Shared Base Styles:** Since many guides likely share structural CSS (e.g., reset, grid layouts, basic typography rules), abstracting these into a `shared/base.css` could reduce duplication across the 7+ guides.
3. **API Key Safety:** The `mPowered-style-guide` requires manual insertion of an API key for its Gemini features. Ensure processes are strictly followed to never commit active API keys to version control.
