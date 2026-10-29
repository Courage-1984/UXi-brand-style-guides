# -*- coding: utf-8 -*-
from pathlib import Path

path = Path(__file__).with_name("index.html")
text = path.read_text(encoding="utf-8")

marker = "    /* ─── AMC LIGHT THEME — white page, dark-green sidebar ─── */"
count = text.count(marker)
if count > 1:
    first = text.find(marker)
    last_end = text.find("  </style>", first)
    block = text[first:last_end]
    # keep a single copy of the first block only
    one = block.split(marker)[1] if False else None
    parts = block.split(marker)
    # split gives ['', rules, rules, rules] when marker starts the block
    kept = marker + parts[1]
    text = text[:first] + kept + text[last_end:]
    print("deduped AMC CSS copies:", count, "-> 1")

repls = [
    ("Learn More About ACCS About ACCS About ACCS About ACCS", "Learn More About ACCS"),
    ("Learn More About ACCS About ACCS About ACCS", "Learn More About ACCS"),
    ("Learn More About ACCS About ACCS", "Learn More About ACCS"),
    ("            Inter</div>", "            Open Sans</div>"),
    ("Primary brand / CI typeface (Inter)", "Primary brand typeface (Open Sans)"),
    (
        "The template ships with <strong>Open Sans</strong> as a neutral, brand-agnostic default across all three type roles. Replace the <code>Open Sans</code>, <code>Open Sans</code>, and <code>Open Sans</code> placeholders (and the matching <code>--brand-font-*</code> tokens + the Google Fonts <code>&lt;link&gt;</code> in the head) with this brand's approved typefaces.",
        "AMC digital type is <strong>Open Sans</strong> only. Headings 700/800, body 400, buttons 700. Recap sizes: H1 56/44/34, H2 40/32/28, body 17/16/16.",
    ),
    ('            <div class="color-name">Accent</div>', '            <div class="color-name">Yellow</div>'),
    ('            <div class="color-name">Primary</div>', '            <div class="color-name">Dark Green</div>'),
    ('            <div class="color-name">Secondary</div>', '            <div class="color-name">Green</div>'),
    ('            <div class="color-name">Accent 2</div>', '            <div class="color-name">Grey</div>'),
    ('            <div class="color-name">Accent 3</div>', '            <div class="color-name">Green — decoration</div>'),
    ('          <div class="color-info" style="background: #2A2A2A;">', '          <div class="color-info">'),
    ("      let fg = '#EDEDED';\n      let bg = '#232323';", "      let fg = '#114835';\n      let bg = '#FFFFFF';"),
    ("      const EMAIL_CANVAS = { light: '#FFFFFF', dark: '#1A1A1A' };", "      const EMAIL_CANVAS = { light: '#FFFFFF', dark: '#114835' };"),
    ("      const WEB_CANVAS = '#1A1A1A';", "      const WEB_CANVAS = '#FFFFFF';"),
    ("          metaEl.innerHTML = 'Canvas: <strong>Web (#1A1A1A)</strong>", "          metaEl.innerHTML = 'Canvas: <strong>Web (#FFFFFF)</strong>"),
    ("(#232323) and light (#EDEDED) backgrounds", "(#114835) and light (#FFFFFF) backgrounds"),
    ("These standards apply to example.com, the community", "These standards apply to africanmarketingconfederation.org and conference microsites"),
    (
        "          <!-- AMC --> [Regulatory footer — licences, registrations, compliance text if applicable.] <a href=\"https://africanmarketingconfederation.org\"",
        "          Live site: <a href=\"https://africanmarketingconfederation.org/\"",
    ),
    (
        """                style="width:22px;height:22px;border-radius:4px;background:#232323;border:1px solid #444;flex-shrink:0;">
              </div>
              <div>
                <div
                  style="font-size:13px;font-weight:600;color:var(--brand-color-light);font-family:var(--brand-font-primary);">
                  Background</div>
                <div
                  style="font-family:'Courier New',monospace;font-size:12px;font-weight:600;color:#FFFFFF;letter-spacing:0.03em;">
                  #232323 · --brand-color-dark</div>""",
        """                style="width:22px;height:22px;border-radius:4px;background:#FFFFFF;border:1px solid #DCE5DE;flex-shrink:0;">
              </div>
              <div>
                <div
                  style="font-size:13px;font-weight:600;color:var(--brand-color-light);font-family:var(--brand-font-primary);">
                  Page background</div>
                <div
                  style="font-family:'Courier New',monospace;font-size:12px;font-weight:600;color:#114835;letter-spacing:0.03em;">
                  #FFFFFF · --brand-color-dark</div>""",
    ),
    (
        """                <div
                  style="font-size:13px;font-weight:600;color:var(--brand-color-light);font-family:var(--brand-font-primary);">
                  Text</div>
                <div
                  style="font-family:'Courier New',monospace;font-size:12px;font-weight:600;color:#FFFFFF;letter-spacing:0.03em;">
                  #EDEDED · --brand-color-light</div>""",
        """                <div
                  style="font-size:13px;font-weight:600;color:var(--brand-color-light);font-family:var(--brand-font-primary);">
                  Headings</div>
                <div
                  style="font-family:'Courier New',monospace;font-size:12px;font-weight:600;color:#114835;letter-spacing:0.03em;">
                  #114835 · --brand-color-light</div>""",
    ),
    ('style="width:22px;height:22px;border-radius:4px;background:#EDEDED;flex-shrink:0;"',
     'style="width:22px;height:22px;border-radius:4px;background:#114835;flex-shrink:0;"'),
    ("family=Open+Sans:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700;14..32,800",
     "family=Open+Sans:ital,wght@0,400;0,600;0,700;0,800;1,400"),
    ("Padding 11 / 26px · 12px Open Sans · 700 (Bold) · UPPERCASE",
     "Padding 16 / 28px · 15px Open Sans · 700 · Title Case · radius 6px"),
    ("Border 2px · 12px Open Sans · 700 (Bold) · UPPERCASE · Invert to white on hover",
     "Border 2px · 15px Open Sans · 700 · Title Case · hover fills yellow"),
    ("      border-top: 1px solid #2A2A2A;", "      border-top: 1px solid rgba(255,255,255,0.12);"),
    ("      border-left: 1px solid #2A2A2A;", "      border-left: 1px solid #DCE5DE;"),
    ("      border-right: 1px solid #222;", "      border-right: 1px solid rgba(255, 209, 12, 0.18);"),
    ("      border-bottom: 1px solid #1A1A1A;", "      border-bottom: 1px solid rgba(255, 255, 255, 0.12);"),
    ("      background: #1A1A1A;", "      background: #114835;"),
    ("Use unapproved typefaces when Inter", "Use unapproved typefaces when Open Sans"),
    ("Optional supporting body typeface (not currently used in UI)", "Same family as headings — Open Sans 400 for body copy"),
    ("style=\"padding: 28px; opacity: 0.65; border: 1px dashed rgba(255,255,255,0.14); background: rgba(17,17,17,0.8);\"",
     "style=\"padding: 28px; border: 1px solid var(--brand-color-border); background: var(--brand-color-card);\""),
    ("font-size: 13px; color: #CDCDCD;", "font-size: 13px; color: #474948;"),
    ("font-size: 13px; color: #DCDCDC;", "font-size: 13px; color: #474948;"),
    ("color: #EDEDED; background: rgba(255,255,255,0.04);", "color: #114835; background: rgba(17,72,53,0.06);"),
    ("{ hex: n.light, name: 'Light' }", "{ hex: n.light, name: 'Dark Green' }"),
    ("{ hex: n.dark, name: 'Dark' }", "{ hex: n.dark, name: 'Page' }"),
    ("{ hex: n.darker, name: 'Deeper' }", "{ hex: n.darker, name: 'Dark band' }"),
    ("{ hex: n.muted, name: 'Muted' }", "{ hex: n.muted, name: 'Grey' }"),
    ("Open Sans · Muted colour", "Open Sans · Grey #474948"),
    ("20px / 600 / Inter", "20px / 700 / Open Sans"),
    ("13px / 400 / Inter", "13px / 400 / Open Sans"),
    ("lh: 1.15</div>", "lh: 1.1 · 56/44/34</div>"),
]
for a, b in repls:
    n = text.count(a)
    if n:
        text = text.replace(a, b)
        print("ok", n, a[:60].replace("\n", " "))
    else:
        print("miss", a[:70].replace("\n", " "))

# Collapse remaining doubled ACCS
while "About ACCS About ACCS" in text:
    text = text.replace("About ACCS About ACCS", "About ACCS")

path.write_text(text, encoding="utf-8")
print("done", len(text))
