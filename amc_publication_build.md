# Strategic Marketing for Africa — Elementor Pro Rebuild (click by click, no globals)

Source copy: `AMC Publication Page Copy.docx`. Paste copy **exactly** from the code blocks. Square-bracket notes in the brief (e.g. `[PDF Embed]`) are build instructions — never put them on the page.

**Rebuild the existing page** at  
`https://africanmarketingconfederation.org/strategic-marketing-for-africa/`  
Do not create a new page. Keep the current URL, header and footer.

**No Site Settings / globals are used.** Every widget below has its font, size, colour and spacing set directly on the widget.

---

# HOW TO READ THIS DOC

## Responsive values
Values are written **Desktop / Tablet / Mobile**, e.g. `40 / 32 / 28`.

To set them:
1. Set the Desktop value first
2. Click the small **monitor icon** next to the control → **Tablet** → type the tablet value
3. Click the icon again → **Mobile** → type the mobile value

If only one value is given, it applies to all devices.

## Typography
**Style tab → Typography → click the pencil icon**, then set:
- Family → type `Open Sans` and select it
- Size (px) → per device
- Weight
- Transform
- Line-Height (em)
- Letter Spacing (px)

Written as: `Open Sans · 40/32/28px · 700 · LH 1.2em · LS 0`

## Padding / Margin
Written as **Top Right Bottom Left**. Unlink the chain icon before typing different values.

## Colours
| Hex | Use |
|---|---|
| `#114835` | Dark green — headings, dark backgrounds, primary buttons |
| `#27B259` | Green — lines, borders, icons only (too low-contrast for text) |
| `#474948` | Grey — body text |
| `#FFD10C` | Yellow — accent on dark green, highlight words |
| `#FFFFFF` | White |
| `#FFFFFFD9` | White 85% — body on dark green |
| `#27B2590F` | Green 6% — tint section backgrounds |
| `#11483526` | Dark green 15% — thin borders |
| `#11483514` | Dark green 8% — card shadows |

## Shortcut
Style one widget, **right-click → Copy**, then **Paste Style** onto the next widget of the same type. Change only the text.

## Kill default spacing
Elementor gives new containers `10px` padding. **Always type padding, including `0`.**

---

# PHASE 0 — Before you start

## What this rebuild keeps from the current page
- Site header and footer
- URL `/strategic-marketing-for-africa/`
- Existing **Download Publication** popup (Elementor popup ID `20770`)
- Existing AnyFlip readers for previous issues
- Existing cover images in the archive grid
- The two testimonials already on the page (Dr Tabani Moyo, Professor Lilac Nachum)

## What this rebuild adds
- Hero with a working “Read the Latest Issue” scroll button
- Latest Release block (reader + download + “Inside This Issue”)
- Contributor accordions (no headshots)
- FAQ accordion with FAQ schema + JSON-LD

## Issue number (confirm before you type)
The copy document says **Issue 3, 2026**. The live page today still features **Issue 2, 2026** (`https://online.anyflip.com/xzpaq/aclr/index.html`).

- If Issue 3 is ready: use the Issue 3 Flipbook URL, cover, PDF and “Inside This Issue” bullets the client supplies.
- If Issue 3 is **not** ready: build with Issue 2 using the fallback copy in Phase 4, then swap the heading, embed, PDF and bullets when Issue 3 lands.

Tick one:
- [ ] Building with **Issue 3, 2026**
- [ ] Building with **Issue 2, 2026** until Issue 3 is supplied

## Assets to gather
- [ ] Latest issue cover (high-res JPEG/WebP, min 1200px on the long edge)
- [ ] Latest issue AnyFlip / FlipHTML5 embed URL
- [ ] Latest issue PDF (for the download popup after form submit)
- [ ] Cover images for every previous issue already on the page (reuse)
- [ ] Optional: the wavy green hero graphic from the current page, or a Livingstone / magazine still

## Links
| Item | Link |
|---|---|
| Read the Latest Issue | `#latest-release` (same-page anchor) |
| Download | Existing popup `20770` — **Open Popup** |
| Previous issue readers | Existing AnyFlip URLs (copied from the current page) |

**Do not** put Gravity Form 42 (or any other form) on this page as well as inside popup `20770`. Buttons open the popup. One copy of the form only.

---

# PHASE 1 — Open the existing page + SEO

1. WP Dashboard → **Pages** → find **Strategic Marketing for Africa** (slug `strategic-marketing-for-africa`)
2. **Edit with Elementor**
3. Bottom-left **gear (Page Settings)**
   - Hide Title: **On**
   - Page Layout: **Elementor Full Width**
4. SEO plugin (Yoast / Rank Math):
   - SEO Title: `Strategic Marketing for Africa Magazine | AMC`
   - Meta Description:
```text
Explore the latest industry trends with Strategic Marketing for Africa, the premier digital magazine by the African Marketing Confederation.
```
   - Focus keyword: `Strategic Marketing for Africa`
5. **Do not delete the whole canvas yet.** First copy anything you will reuse:
   - Right-click the current AnyFlip HTML/iframe widget → **Copy** (you will paste it into Latest Release)
   - Right-click the previous-issues grid/carousel → **Copy**
   - Confirm the Download button still points to popup `20770`
6. Now delete the old sections **except** the ones you copied, or empty the canvas and rebuild from Phase 3 using the copied widgets.
7. **Save Draft**

---

# PHASE 2 — Keep the existing download popup

Do **not** rebuild popup `20770` unless it is broken.

1. WP Dashboard → **Templates → Popups**
2. Open the popup that the current **Download Publication** button uses (ID `20770`)
3. Confirm it still has the Gravity Form and that after submit it offers / emails the PDF
4. If the Gravity Form inside this popup stays hidden, add the same HTML snippet used on the recap page (**inside this popup only**, not as a second form on the publications page):

```html
<script>
jQuery(document).on('elementor/popup/show', function (event, popupId) {
  jQuery('#elementor-popup-modal-' + popupId).find('form[id^="gform_"]').each(function () {
    var formId = this.id.replace('gform_', '');
    var $wrapper = jQuery('#gform_wrapper_' + formId);
    if ($wrapper.data('popupRendered')) return;
    $wrapper.data('popupRendered', true).show();
    jQuery(document).trigger('gform_post_render', [formId, 1]);
  });
});
</script>
```

5. Publish the popup. Conditions stay as they are (opened by buttons only — no auto-open).

## How every Download button on this page must be linked
Button → **Content → Link** → Dynamic Tags (stacked discs) → **Actions → Popup** → wrench → Action **Open Popup** → choose the existing Download popup (`20770`).

---

# PHASE 3 — Hero

## 3.1 Outer hero container
Click **+** → single Flexbox container.

**Layout**
- Content Width: **Full Width**
- Min Height: `520px` / `460px` / `auto`
- Direction: **Row** / **Column** / **Column**
- Justify Content: **Center**
- Align Items: **Center**
- Gaps: `48px` / `32px` / `24px`

**Style → Background**
- Type **Classic** → Color `#114835`
- Optional Image: the existing wavy green hero graphic · Position **Center Center** · Size **Cover**
- If you added the image: Overlay Classic `#114835` · Opacity `0.55`

**Advanced**
- Padding: `96px 24px 96px 24px` / `72px 24px 72px 24px` / `56px 20px 56px 20px`
- Margin: `0 0 0 0`

## 3.2 Inner rail
Drag a **Container** into the hero.

**Layout**
- Content Width: **Boxed**
- Width: `1140px` / `100%` / `100%`
- Direction: **Row** / **Column** / **Column**
- Justify Content: **Space Between**
- Align Items: **Center**
- Gaps: `48px` / `32px` / `24px`

**Advanced:** Padding `0 0 0 0`

## 3.3 Left copy column
Drag a **Container** into the inner rail.

**Layout:** Width `58%` / `100%` / `100%` · Direction **Column** · Align Items **Flex Start** · Gaps `16px` / `14px` / `12px`
**Advanced:** Padding `0 0 0 0`

### Divider
- Style **Solid** · Width `56px` · Alignment **Left** · Gap `2px`
- Color `#FFD10C` · Weight `4px`

### H1
Drag **Heading**.
- **Content:** Title `Strategic Marketing for Africa` · HTML Tag `H1`
- **Style:** Alignment Left · Text Color `#FFFFFF` · Typography `Open Sans · 52/40/32px · 800 · LH 1.1em · LS 0`

### Sub-headline
Drag **Heading**.
- **Content:** Title `Explore the Latest in African Marketing Now` · HTML Tag `p`
- **Style:** Alignment Left · Text Color `#FFD10C` · Typography `Open Sans · 24/21/18px · 600 · LH 1.4em`

### Body
Drag **Text Editor**.
- **Content:**
```text
Strategic Marketing for Africa is the flagship thought-leadership magazine of the African Marketing Confederation. Serving as the definitive platform for marketing professionals, business executives, and academic researchers, the publication's mandate is to inform, educate, share knowledge, and foster debate about marketing and its related professions.
```
- **Style:** Text Color `#FFFFFFD9` · Typography `Open Sans · 17/16/16px · 400 · LH 1.7em`
- **Advanced → Layout:** Width Custom `640px` / `100%` / `100%`

### Button — Read the Latest Issue
Drag **Button**.
- **Content:**
  - Text `Read the Latest Issue`
  - Link: Custom URL `#latest-release`
  - Icon `fas fa-arrow-down` · Position **After** · Spacing `10px`
- **Style:**
  - Alignment: **Left** / **Left** / **Justified**
  - Typography `Open Sans · 15/15/14px · 700 · Transform None · LH 1.2em`
  - Normal: Text `#114835` · Background `#FFD10C`
  - Hover: Text `#114835` · Background `#FFFFFF`
  - Border Radius `6px`
  - Padding `16px 28px 16px 28px` / `15px 24px 15px 24px` / `14px 20px 14px 20px`
- **Advanced:** Margin `8px 0 0 0`

## 3.4 Right cover column
Drag a **Container** into the inner rail (after the copy column).

**Layout:** Width `42%` / `100%` / `100%` · Direction **Column** · Align Items **Center** · Gaps `0`
**Advanced:** Padding `0 0 0 0`

Drag **Image**.
- **Content:** Latest issue cover · Resolution **Full** · Caption None · Link **Custom URL** `#latest-release`
- **Style:** Alignment Center · Width `420px` / `320px` / `260px` · Height Auto · Object Fit **Contain**
- **Advanced → Border:** Radius `8px`
- **Advanced → Background / Border → Box Shadow:** H `0` · V `18` · Blur `40` · Spread `0` · Color `#00000059`

On tablet/mobile the cover sits under the copy. That is expected.

**Save Draft.**

---

# PHASE 4 — Latest Release

## 4.1 Section container
**+** → single container.

**Layout:** Flexbox · Content Width **Boxed** · Width `1140px` / `100%` / `100%` · Direction **Column** · Align Items **Stretch** · Gaps `24px` / `20px` / `16px`
**Style:** Background Classic `#FFFFFF`
**Advanced:**
- CSS ID: `latest-release`  ← this is what the hero button scrolls to
- Padding: `96px 24px 96px 24px` / `72px 24px 72px 24px` / `56px 20px 56px 20px`

## 4.2 Intro
**Divider** → Solid · Width `56px` · Alignment **Center** · Gap `2px` · Color `#27B259` · Weight `4px`

**Heading**
- **Content:** Title `Latest Release: Issue 3, 2026` · HTML Tag `H2`
  - If building with Issue 2 until Issue 3 is ready, use `Latest Release: Issue 2, 2026`
- **Style:** Alignment Center · Text Color `#114835` · Typography `Open Sans · 40/32/28px · 700 · LH 1.2em`

**Text Editor** (cover-story summary)
- **If Issue 3 copy is supplied, paste it here.** Until then, use this Issue 2 fallback:
```text
Online search is fragmenting. In Issue 2 2026, Fiona Zerbst examines how credibility and trust have become the new visibility for African brands as AI-powered search replaces the old race for first-page rankings.
```
- **Style:** Alignment Center · Text Color `#474948` · Typography `Open Sans · 17/16/16px · 400 · LH 1.7em`
- **Advanced → Layout:** Width Custom `760px` / `100%` / `100%` · Align Self **Center**

## 4.3 Flipbook row
Drag **Container**.
- **Layout:** Width `100%` · Direction **Column** · Align Items **Center** · Gaps `20px`
- **Advanced:** Padding `0 0 0 0` · Margin `8px 0 0 0`

### HTML widget — AnyFlip embed
Drag **HTML**. Paste **one** of these (keep the current live URL if you are still on Issue 2):

**Issue 2 2026 (current live reader):**
```html
<div style="position:relative;padding-top:141.4%;max-width:900px;margin:0 auto;">
  <iframe
    src="https://online.anyflip.com/xzpaq/aclr/index.html"
    style="position:absolute;inset:0;width:100%;height:100%;border:0;"
    allowfullscreen
    title="Strategic Marketing for Africa — latest issue">
  </iframe>
</div>
```

**Issue 3 2026 (when the new Flipbook is ready):**
replace `xzpaq/aclr` with the new AnyFlip path. Copy it from AnyFlip → Share → Embed.

**Style / Advanced:** Width `100%`

On mobile the 141.4% padding keeps an A4-ish portrait reader. If it feels too tall, change `padding-top` to `120%` on Mobile only via custom CSS class `amc-flipbook` + this in the HTML widget below the iframe:

```html
<style>
@media (max-width: 767px) {
  .amc-flipbook { padding-top: 160% !important; }
}
</style>
```
Then add class `amc-flipbook` on the wrapping `div`.

If the current page already has a working HTML/iframe widget, **Paste** it here instead of rebuilding, then restyle the wrapper width to `900px` max.

### Download button
Drag **Button** under the embed.
- **Content:** Text `Download` · Link → Dynamic → **Actions → Popup** → Open Popup `20770` · Icon `fas fa-download` · Position **Before** · Spacing `10px`
- **Style:**
  - Alignment: **Center** / **Center** / **Justified**
  - Typography `Open Sans · 15/15/14px · 700 · Transform None`
  - Normal: Text `#FFFFFF` · Background `#114835`
  - Hover: Text `#114835` · Background `#FFD10C`
  - Border Radius `6px`
  - Padding `16px 28px 16px 28px` / `15px 24px 15px 24px` / `14px 20px 14px 20px`

## 4.4 Inside This Issue
Drag **Container**.
- **Layout:** Width `100%` · Direction **Column** · Align Items **Flex Start** · Gaps `16px`
- **Style:** Background `#27B2590F` · Border Radius `12px`
- **Advanced:** Padding `32px 32px 32px 32px` / `28px 24px 28px 24px` / `24px 20px 24px 20px` · Margin `16px 0 0 0`

**Heading**
- **Content:** Title `Inside This Issue` · HTML Tag `H3`
- **Style:** Text Color `#114835` · Typography `Open Sans · 24/22/20px · 700 · LH 1.3em`

**Icon List**
- **Content:** Layout **Traditional**
- **Style → List:** Space Between `12px` · Divider **Off**
- **Style → Icon:** Color `#27B259` · Size `14px` · Gap `12px`
- **Style → Text:** Text Color `#474948` · Typography `Open Sans · 16/16/15px · 400 · LH 1.6em`

Each item: icon `fas fa-circle` (or `fas fa-check`).

**If Issue 3 bullets are supplied, use those.** Until then, Issue 2 fallback:

| Item text |
|---|
| `Online Search — Fiona Zerbst on why credibility and trust now create visibility in an AI-driven search landscape.` |
| `AMC Interview — New President Matongo Matamwandi on exploiting Africa’s “magic of difference”.` |
| `AMC Conference 2026 — All systems go for Livingstone and the Africa Commerce Convergence Summit.` |
| `Artificial Intelligence — Rahwa Gebremeskel on AI adoption and the human intelligence imperative.` |
| `Commercial Capability — Dr Helena van Wyk on the tech-hype trap, and why judgement still beats tools.` |
| `Market Research — Soyinka Witness (Ipsos Strategy3) on why AI will expose weak strategy faster than it replaces researchers.` |
| `Retail Evolution — Riad Laher on how retailers are quietly re-engineering the checkout.` |

**Save Draft.**

---

# PHASE 5 — Testimonials

The brief only marks `[Testimonials]`. Reuse the two already on the live page.

## 5.1 Section container
**+** → single container.

**Layout:** Flexbox · Content Width **Boxed** · Width `1140px` / `100%` / `100%` · Direction **Column** · Align Items **Center** · Gaps `24px` / `20px` / `16px`
**Style:** Background Classic `#27B2590F`
**Advanced:** Padding `80px 24px 80px 24px` / `64px 24px 64px 24px` / `48px 20px 48px 20px`

Wait — a tint section on a white page needs the **outer** container Full Width so the colour bleeds to the edges:

**Layout of this section:** Content Width **Full Width**
Then add an **inner** container Boxed `1140px`, Direction Column, Align Items Center, Gaps as above, Padding as above. Background `#27B2590F` sits on the **outer** container.

## 5.2 Cards row
Inner container:
- Direction **Row** / **Column** / **Column**
- Align Items **Stretch**
- Gaps `24px` / `20px` / `16px`
- Padding `0 0 0 0`

## 5.3 Testimonial card (build one, duplicate)
Drag **Container**.

**Layout:** Width `50%` / `100%` / `100%` · Direction **Column** · Gaps `16px`
**Style:** Background `#FFFFFF` · Border Type Solid · Width `4px 0 0 0` · Color `#27B259` · Radius `12px` · Box Shadow H `0` V `8` Blur `24` Spread `0` Color `#11483514`
**Advanced:** Padding `32px 28px 32px 28px` / `28px 24px 28px 24px` / `24px 20px 24px 20px`

**Icon**
- Icon `fas fa-quote-left` · Primary Color `#27B259` · Size `28px`

**Text Editor** (quote)
- **Style:** Text Color `#474948` · Typography `Open Sans · 17/16/16px · 400 · Style Italic · LH 1.7em`

**Heading** (name)
- HTML Tag `p`
- **Style:** Text Color `#114835` · Typography `Open Sans · 16/16/15px · 700 · LH 1.3em`

**Text Editor** (role)
- **Style:** Text Color `#474948` · Typography `Open Sans · 14px · 400 · LH 1.5em`

### Card 1
Quote:
```text
Glad to have contributed to one of the most competitive marketing platforms on the African continent… Please keep up the good work!
```
Name: `Dr Tabani Moyo`  
Role: `Marketing Consultant`

### Card 2
Quote:
```text
Thank you for sharing. A wonderful outlet that you have. I am very impressed.
```
Name: `Professor Lilac Nachum`  
Role: `Visiting Professor at Strathmore Business School in Nairobi and Professor of International Business at City University in New York`

**Save Draft.**

---

# PHASE 6 — Expert Contributors (accordions, no images)

The brief: *No images. The introduction sits above a stack of three expandable accordions.*

## 6.1 Section container
**+** → single container.

**Layout:** Flexbox · Content Width **Boxed** · Width `860px` / `100%` / `100%` · Direction **Column** · Align Items **Stretch** · Gaps `20px`
**Style:** Background `#FFFFFF`
**Advanced:** Padding `96px 24px 96px 24px` / `72px 24px 72px 24px` / `56px 20px 56px 20px`

**Divider** → Solid · Width `56px` · Alignment Center · Gap `2px` · Color `#27B259` · Weight `4px`

**Heading**
- **Content:** Title `A Marketing Journal Driven by World-Class Leaders` · HTML Tag `H2`
- **Style:** Alignment Center · Text Color `#114835` · Typography `Open Sans · 40/32/28px · 700 · LH 1.2em`

**Text Editor**
- **Content:**
```text
We don’t just report on the market - we feature the minds that move it. As the continent's definitive marketing journal, Strategic Marketing for Africa is authored by a prestigious network of global business journalists, academic researchers, and C-suite executives shaping the commercial future of Africa.
```
- **Style:** Alignment Center · Text Color `#474948` · Typography `Open Sans · 17/16/16px · 400 · LH 1.7em`
- **Advanced:** Margin `0 0 16px 0`

## 6.2 Accordion
Drag **Accordion** (nested Accordion — each item has its own container).

**Content → Layout**
- 3 items
- Expand Icon `fas fa-plus` · Collapse Icon `fas fa-minus`
- Title HTML Tag `H3`
- FAQ Schema: **No** (this is not the FAQ)

**Content → Interactions**
- Default State: **All Collapsed**
- Max Items Expanded: **One**
- Animation Duration: `400ms`

**Style → Accordion**
- Space Between Items `0px`
- Background Normal/Hover/Active `#FFFFFF`
- Border Type Solid · Width `0 0 1px 0` · Color `#11483526`
- Radius `0`
- Padding `20px 0 20px 0` / `18px 0 18px 0` / `16px 0 16px 0`

**Style → Header**
- Title Typography `Open Sans · 18/17/16px · 700 · LH 1.4em`
- Title Color Normal/Hover/Active `#114835`
- Icon Size `16px` · Spacing `16px`
- Icon Color Normal `#27B259` · Hover/Active `#114835`
- Icon Position **End**

**Style → Content**
- Background `#FFFFFF`
- Padding `0 8px 20px 0` / `0 0 18px 0` / `0 0 16px 0`

Inside each item, drag an **Icon List** (same style as Phase 4.4, text `16/16/15px`).

### Item 1 — title
```text
Direct Editorial Contributors & Strategists
```
Icon List:
- `Deepankar Rustagi: CEO of OmniRetail (Fastest-Growing African Company 2024).`
- `Helen McIntee-Carlisle: First Vice President of the World Marketing Council.`
- `Rui Matata Manuel: Head of Marketing at Fundo Soberano de Angola.`
- `Fiona Zerbst & Cara Bouwer: Award-winning global business journalists.`

### Item 2 — title
```text
Featured Executives, Keynotes & Institutional Correspondents
```
Icon List:
- `Professor Douglas Boateng: Featured keynote subject, Professor in Supply Chain, and chartered director (FCIPS, CDir).`
- `Odilon Gbaguidi: Featured interview subject, President of Avis+, and Francophone African market specialist.`
- `Clarence Pappoe & Danny Kwizera: Institutional correspondents providing regional insights for the Chartered Institute of Marketing Ghana (CIMG) and the Uganda Marketers Society (UMS).`

### Item 3 — title
```text
Adapted Research & Academic Excellence
```
Icon List:
- `Catherine Burton & Kim Larsen: Adapted research from the Global Equity Lead and Head of Research (South Africa) at Ipsos.`
- `Rhulani Baloyi: Adapted research from the Senior Manager of Brand Insights at MTN Group and Esomar Award Winner.`
- `Prof Nicola Kleyn & Prof Russell Abratt: Adapted academic research from leading marketing professors at the University of Pretoria and George Mason University.`
- `Dr Emmanuel Silva Quaye: Adapted research from the corporate social responsibility marketing academic at the University of the Witwatersrand.`

**Save Draft.**

---

# PHASE 7 — Previous Issues

## 7.1 Section container
**+** → single container.

**Layout:** Flexbox · Content Width **Boxed** · Width `1140px` / `100%` / `100%` · Direction **Column** · Align Items **Center** · Gaps `24px`
**Style:** Background `#27B2590F` on a **Full Width** outer container, inner boxed `1140px` (same pattern as Phase 5)
**Advanced:** Padding `96px 24px 96px 24px` / `72px 24px 72px 24px` / `56px 20px 56px 20px`

**Divider** → Solid · Width `56px` · Alignment Center · Color `#27B259` · Weight `4px`

**Heading**
- **Content:** Title `Previous Issues` · HTML Tag `H2`
- **Style:** Alignment Center · Text Color `#114835` · Typography `Open Sans · 40/32/28px · 700 · LH 1.2em`

**Text Editor**
- **Content:**
```text
Catch up on previous thought-leadership articles, industry news, and expert analyses from across the African continent.
```
- **Style:** Alignment Center · Text Color `#474948` · Typography `Open Sans · 17/16/16px · 400 · LH 1.7em`
- **Advanced → Layout:** Width Custom `760px` / `100%` / `100%`

## 7.2 Archive grid — reuse, don’t rebuild
1. Open a second Elementor tab on the **current** live version of this page (or a revision / the copied widget from Phase 1)
2. Right-click the previous-issues grid (the cover thumbnails) → **Copy**
3. Recap/rebuild tab → right-click this section → **Paste**
4. Restyle:
   - Columns `5` / `3` / `2`
   - Gap `20px` / `16px` / `12px`
   - Each cover: Border Radius `8px` · Box Shadow H `0` V `8` Blur `20` Color `#11483514`
   - Image Object Fit **Cover** · aspect roughly `3:4`
5. Each cover still opens its existing AnyFlip reader (lightbox or new tab — keep whatever the current page does)
6. **Do not** include the latest issue in this grid. If it currently appears twice (hero/embed + grid), remove it from the archive so it only lives in Latest Release.

If the current page uses a **Loop Grid / Gallery / Image Carousel** of covers, keep that widget type. Only restyle it.

Optional extra: a small caption under each cover (`Issue 1, 2026` etc.) — Heading tag `p`, `13px`, weight `600`, color `#114835`, alignment center. Skip if the current covers already have labels.

**Save Draft.**

---

# PHASE 8 — FAQs + schema

## 8.1 Section container
**+** → single container.

**Layout:** Flexbox · Content Width **Boxed** · Width `860px` / `100%` / `100%` · Direction **Column** · Align Items **Stretch** · Gaps `20px`
**Style:** Background `#FFFFFF`
**Advanced:** Padding `96px 24px 96px 24px` / `72px 24px 72px 24px` / `56px 20px 56px 20px`

**Divider** → Solid · Width `56px` · Alignment Center · Color `#27B259` · Weight `4px`

**Heading**
- **Content:** Title `Frequently Asked Questions` · HTML Tag `H2`
- **Style:** Alignment Center · Text Color `#114835` · Typography `Open Sans · 40/32/28px · 700 · LH 1.2em`

## 8.2 Accordion
Drag **Accordion**.

**Content → Layout**
- 5 items
- Expand Icon `fas fa-plus` · Collapse Icon `fas fa-minus`
- Title HTML Tag `H3`
- FAQ Schema: **Yes**

**Content → Interactions**
- Default State: **All Collapsed**
- Max Items Expanded: **One**

Style exactly like Phase 6.2 (same header, border, icon colours).

Inside each item, one **Text Editor**: Text Color `#474948` · Typography `Open Sans · 16/16/15px · 400 · LH 1.7em`

| # | Title | Answer |
|---|---|---|
| 1 | `What topics are covered in Strategic Marketing for Africa?` | `Strategic Marketing for Africa provides credible, coherent, and courageous editorial coverage on all matters related to marketing and its associated professions. The publication explores macro-economic shifts, digital transformation, retail evolution, and market research, evaluating global and regional commercial strategies from an unapologetically African perspective.` |
| 2 | `Who writes the articles for the Strategic Marketing for Africa magazine?` | `The magazine features a diverse array of high-calibre contributors rather than relying on a single author or in-house team. The editorial content is carefully curated and edited together, drawing on the expertise of industry leaders, strategic consultants, academic researchers, and experienced practitioners to provide authoritative insights across the continent.` |
| 3 | `How much does it cost to read Strategic Marketing for Africa?` | `Strategic Marketing for Africa is entirely free to access. Readers can choose to read the interactive digital edition online or download the full publication as a PDF directly from the African Marketing Confederation website without a paywall or subscription fee.` |
| 4 | `When was the Strategic Marketing for Africa journal first published?` | `The journal has been published in various formats since 2008. Over more than 15 years, it has continuously evolved to serve as the definitive thought-leadership platform for Africa’s marketing and business communities.` |
| 5 | `Is Strategic Marketing for Africa only for marketing professionals?` | `The publication is designed for marketing professionals, business executives, brand strategists, supply chain leaders, and academic researchers. It delivers the high-level market intelligence and commercial capability required by decision-makers operating within Africa's dynamic business environments.` |

## 8.3 JSON-LD (the “Schema Note” items in the brief)
Elementor’s Accordion FAQ Schema covers the Q&A. The extra `about`, `author`, `offers`, `datePublished` notes need a Custom HTML block.

Drag **HTML** **below** the accordion (it will not show on the page). Paste:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What topics are covered in Strategic Marketing for Africa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Strategic Marketing for Africa provides credible, coherent, and courageous editorial coverage on all matters related to marketing and its associated professions. The publication explores macro-economic shifts, digital transformation, retail evolution, and market research, evaluating global and regional commercial strategies from an unapologetically African perspective."
      }
    },
    {
      "@type": "Question",
      "name": "Who writes the articles for the Strategic Marketing for Africa magazine?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The magazine features a diverse array of high-calibre contributors rather than relying on a single author or in-house team. The editorial content is carefully curated and edited together, drawing on the expertise of industry leaders, strategic consultants, academic researchers, and experienced practitioners to provide authoritative insights across the continent."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to read Strategic Marketing for Africa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Strategic Marketing for Africa is entirely free to access. Readers can choose to read the interactive digital edition online or download the full publication as a PDF directly from the African Marketing Confederation website without a paywall or subscription fee."
      }
    },
    {
      "@type": "Question",
      "name": "When was the Strategic Marketing for Africa journal first published?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The journal has been published in various formats since 2008. Over more than 15 years, it has continuously evolved to serve as the definitive thought-leadership platform for Africa’s marketing and business communities."
      }
    },
    {
      "@type": "Question",
      "name": "Is Strategic Marketing for Africa only for marketing professionals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The publication is designed for marketing professionals, business executives, brand strategists, supply chain leaders, and academic researchers. It delivers the high-level market intelligence and commercial capability required by decision-makers operating within Africa's dynamic business environments."
      }
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Periodical",
  "name": "Strategic Marketing for Africa",
  "alternateName": "Strategic Marketing for Africa Magazine",
  "url": "https://africanmarketingconfederation.org/strategic-marketing-for-africa/",
  "inLanguage": "en",
  "datePublished": "2008",
  "temporalCoverage": "2008/..",
  "isAccessibleForFree": true,
  "issn": "",
  "about": [
    { "@type": "Thing", "name": "marketing" },
    { "@type": "Thing", "name": "digital transformation" },
    { "@type": "Thing", "name": "African economics" }
  ],
  "mentions": [
    { "@type": "Thing", "name": "marketing" },
    { "@type": "Thing", "name": "digital transformation" },
    { "@type": "Thing", "name": "African economics" }
  ],
  "audience": [
    { "@type": "Audience", "audienceType": "Business Professionals" },
    { "@type": "Audience", "audienceType": "Marketing Executives" },
    { "@type": "Audience", "audienceType": "Academic Researchers" }
  ],
  "author": [
    { "@type": "Person", "name": "Deepankar Rustagi" },
    { "@type": "Person", "name": "Helen McIntee-Carlisle" },
    { "@type": "Person", "name": "Rui Matata Manuel" },
    { "@type": "Person", "name": "Fiona Zerbst" },
    { "@type": "Person", "name": "Cara Bouwer" }
  ],
  "publisher": {
    "@type": "Organization",
    "name": "African Marketing Confederation",
    "url": "https://africanmarketingconfederation.org/"
  },
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}
</script>
```

If Rank Math / Yoast already outputs FAQ schema from the Accordion, **delete the first `<script type="application/ld+json">` block** (the FAQPage one) and keep only the Periodical block, so Google does not see two FAQ schemas.

Leave `"issn": ""` empty unless the client supplies an ISSN.

Footer: nothing to build.

**Save Draft.**

---

# PHASE 9 — Responsive check + publish

Open **Responsive Mode** (device icon, top bar).

## Desktop (1440 and 1280)
- [ ] Hero copy left, cover right, both on the 1140px rail
- [ ] Flipbook is readable and not cropped
- [ ] Two testimonial cards side by side
- [ ] Archive grid is 5 across, latest issue is **not** duplicated there

## Tablet (1024 and 768)
- [ ] Hero stacks (copy then cover)
- [ ] Testimonials stack
- [ ] Archive grid is 3 across
- [ ] Accordions open/close

## Mobile (390 and 360)
- [ ] Every button is full width
- [ ] Flipbook is tall enough to use (not a thin strip)
- [ ] Archive grid is 2 across
- [ ] No sideways scroll
- [ ] `#latest-release` scroll from the hero button lands on the Latest Release heading, not under the sticky header. If it hides under the header, add **Advanced → Padding Top** `24px` extra on that section, or this CSS in Site Settings → Custom CSS / the HTML widget:

```css
#latest-release { scroll-margin-top: 96px; }
```

## Function
- [ ] Hero **Read the Latest Issue** scrolls to `#latest-release`
- [ ] **Download** opens popup `20770` and the Gravity Form is visible
- [ ] Submit the download form in incognito and confirm the PDF arrives / downloads
- [ ] Previous-issue covers still open their Flipbooks
- [ ] Only **one** Gravity Form with that ID exists on the published page (popup only)

## Content
- [ ] Heading says the correct issue (3 or 2)
- [ ] Cover, Flipbook and “Inside This Issue” bullets match that issue
- [ ] No `[bracket]` notes on the page
- [ ] One H1 only
- [ ] Cover image has alt text, e.g. `Strategic Marketing for Africa Issue 3, 2026 cover`

## Publish
1. **Update**
2. View in incognito on desktop and a real phone
3. Clear cache if styles look old
4. Confirm the News & Publications menu still points at this URL

---

# Final page order

| # | Section | Background |
|---|---|---|
| — | Site header (existing) | — |
| 1 | Hero | `#114835` |
| 2 | Latest Release (embed + download + Inside This Issue) | `#FFFFFF` |
| 3 | Testimonials | `#27B2590F` |
| 4 | Expert Contributors (3 accordions, no images) | `#FFFFFF` |
| 5 | Previous Issues grid | `#27B2590F` |
| 6 | FAQs | `#FFFFFF` |
| — | Site footer (existing) | — |

---

# Swapping to Issue 3 later

When Issue 3 2026 is ready, change only these four things — do not rebuild the page:

1. Hero cover image
2. Phase 4 H2 → `Latest Release: Issue 3, 2026`
3. Cover-story paragraph + Inside This Issue bullets (client copy)
4. HTML iframe `src` → the new AnyFlip URL, and the PDF attached to popup `20770`

Then move the Issue 2 cover into the Previous Issues grid.
