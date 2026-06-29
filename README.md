# UXi Brand Style Guides

Static digital style guides for UXi education brands, hosted on GitHub Pages.

## Live URLs

After enabling GitHub Pages (source: **main** branch, root `/`), each brand has its own dedicated path:

| Brand | Path |
|-------|------|
| Open Window Institute | `/OWI-style-guide/` |
| IMM Graduate School | `/IMM-GS-style-guide/` |
| Belgium Campus iTversity | `/BCi-style-guide/` |
| UXi mPowered | `/mPowered-style-guide/` |
| ASCON | `/ASCON-style-guide/` |
| TICON Africa | `/TICON-Africa-style-guide/` |

Replace `<org>` and `<repo>` with your GitHub org/user and repository name:

- `https://<org>.github.io/<repo>/OWI-style-guide/`
- `https://<org>.github.io/<repo>/IMM-GS-style-guide/`
- `https://<org>.github.io/<repo>/BCi-style-guide/`
- `https://<org>.github.io/<repo>/mPowered-style-guide/`
- `https://<org>.github.io/<repo>/ASCON-style-guide/`
- `https://<org>.github.io/<repo>/TICON-Africa-style-guide/`

## Repository structure

```
├── index.html              # Internal index (optional entry point)
├── .nojekyll               # Disables Jekyll processing on GitHub Pages
├── shared/
│   ├── guide-switcher.css  # Neutral cross-guide navigation chrome
│   └── guide-switcher.js
├── OWI-style-guide/index.html
├── IMM-GS-style-guide/index.html
├── BCi-style-guide/index.html
├── mPowered-style-guide/index.html
├── ASCON-style-guide/index.html
└── TICON-Africa-style-guide/index.html
```

## Cross-guide navigation

Each style guide includes a subtle fixed control (bottom-right) to switch between guides. It uses neutral styling and does not replace each brand’s own navigation.

## Local preview

Open any `index.html` in a browser, or serve the repo root with a static server:

```bash
npx serve .
```

Then visit `http://localhost:3000/OWI-style-guide/` (port may vary).

## GitHub Pages setup

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Set **Source** to **Deploy from a branch**.
4. Choose **main** (or **master**) and **/ (root)**.
5. Save and wait for the deployment URL.

## mPowered AI Co-Pilot

The mPowered guide includes an optional Gemini-powered component generator. Add your API key in `mPowered-style-guide/index.html` (`const apiKey = ""`) for that feature to work. Do not commit API keys to the repository.
