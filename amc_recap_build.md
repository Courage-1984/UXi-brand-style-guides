# 2026 AMC Conference Recap — Elementor Pro Build (click by click, no globals)

Source copy: `2026  AMC Conference Recap Page.md`. Paste copy **exactly** from the code blocks. Square-bracket notes in the brief (e.g. `[Day 1 Highlights Carousel]`) are build instructions — never put them on the page.

**No Site Settings / globals are used.** Every widget below has its font, size, colour and spacing set directly on the widget.

---

# HOW TO READ THIS DOC

## Responsive values
Values are written **Desktop / Tablet / Mobile**, e.g. `40 / 32 / 28`.

To set them:
1. Set the Desktop value first
2. Click the small **monitor icon** next to the control's label → choose **Tablet** → type the tablet value
3. Click the icon again → **Mobile** → type the mobile value

If only one value is given, it applies to all devices.

## Typography
**Style tab → Typography → click the pencil icon**, then set:
- Family → type `Open Sans` and select it
- Size (px) → per device
- Weight
- Transform
- Line-Height (em) → per device
- Letter Spacing (px)

Written as: `Open Sans · 40/32/28px · 700 · LH 1.2em · LS 0`

## Padding / Margin
Written as **Top Right Bottom Left**. Click the **chain icon** to unlink sides before typing different values.

## Colours used
| Hex | Use |
|---|---|
| `#114835` | Dark green — headings on light, dark section backgrounds, primary buttons |
| `#27B259` | Green — lines, borders, icons only (too low-contrast for text) |
| `#474948` | Grey — body text |
| `#FFD10C` | Yellow — buttons + highlights on dark green |
| `#FFFFFF` | White |
| `#FFFFFFD9` | White 85% — body text on dark green |
| `#27B2590F` | Green 6% — light "tint" section background |
| `#11483526` | Dark green 15% — thin borders / dividers |
| `#11483514` | Dark green 8% — card shadows |

Type any of these into the colour picker's text field (8-digit hex includes transparency).

## Shortcut that saves time
After you style one widget, **right-click it → Copy**, then **right-click the next widget of the same type → Paste Style**. Then change only the text. The values are still listed in full on every widget so you can check.

## Kill default spacing
Elementor gives new containers `10px` padding by default. Every container below has its padding set explicitly — **always type the padding, including `0`**.

---

# PHASE 0 — Gather before you start

## Assets
- [ ] Hero image, min 2000px wide
- [ ] ZIM logo (transparent PNG/SVG)
- [ ] AMC, TICON Africa, ASCON logos (transparent)
- [ ] Day 1, Day 2, Day 3 photos (6–10 each)
- [ ] Awards Gala photo
- [ ] Masterclass & Immersion photos (6–10)
- [ ] Venue photos — reuse from the 2026 conference page
- [ ] Sponsor + travel partner logos — reuse from the 2026 conference page

Crop all carousel photos to **3:2 (1600×1067)**, WebP. Upload everything to **Media → Add New** and fill in **Alt Text** for each file there (saves doing it per widget).

## Links
| Item | Link |
|---|---|
| ZIM logo | `https://www.zimmarketing.org.zm/` |
| Learn More About ACCS | `https://accsummit.org/` |
| View the 2026 Award Winners | `[AWARD WINNERS URL]` (fallback `https://africanmarketingconfederation.org/awards-2026/`) |
| Sign Up for 2027 … Updates (×2) | Popup built in Phase 2 |
| Ask Us a Question | Dropdown form built in Phase 10 |

## Confirm with client
- Awards Gala date: brief says **24 September**, the pre-event awards booklet said **25 September**.

---

# PHASE 1 — Create the page

1. WP Dashboard → **Pages → Add New**
2. Title: `2026 AMC Conference Recap`
3. Right sidebar → **URL / Permalink** → slug `2026-amc-conference-recap`
4. SEO box (Yoast / Rank Math, below the editor or sidebar):
   - SEO Title: `2026 AMC Conference Recap`
   - Meta Description: `Highlights from the 2026 African Marketing Confederation (AMC) Conference in Livingstone, Zambia.`
   - Focus Keyword: `2026 AMC Conference`
5. Click **Save draft** → **Edit with Elementor**
6. Bottom-left **gear icon (Page Settings)**:
   - Hide Title: **On**
   - Page Layout: **Elementor Full Width**
7. Click the green **Publish** dropdown arrow → **Save Draft**

---

# PHASE 2 — "2027 Updates" popup (build first, buttons link to it)

Skip if the AMC site already has a 2027 updates popup/form — just note its name.

## 2.1 Create
1. WP Dashboard → **Templates → Popups → Add New**
2. Name: `AMC 2027 Updates` → **Create Template**
3. Library opens → close it (**X**) to start blank

## 2.2 Popup settings (bottom-left gear)
**Settings → Layout**
- Width: `560px` / `560px` / `92vw`
- Height: **Fit To Content**
- Content Position: **Center**
- Position Horizontal: **Center**, Vertical: **Center**
- Overlay: **Show**
- Close Button: **Show**
- Entrance Animation: **Fade In**

**Style tab**
- Background Type: Classic → Color `#FFFFFF`
- Border Radius: `12px`
- Padding: `40px 40px 40px 40px` / `36px 32px 36px 32px` / `32px 20px 32px 20px`
- Overlay Color: `#114835` with opacity — type `#114835CC`
- Close Button → Icon Color `#114835`, Size `20px`

## 2.3 Container (the one already on the canvas, or click **+** → single container)
**Layout:** Content Width **Full Width** · Direction **Column** · Gaps `16px`
**Advanced:** Padding `0 0 0 0`

## 2.4 Heading
Drag **Heading** in.
- **Content:** Title `Sign Up for 2027 AMC Conference Updates` · HTML Tag `H3`
- **Style:** Alignment Left · Text Color `#114835` · Typography `Open Sans · 24/22/20px · 700 · LH 1.3em · LS 0`

## 2.5 Intro text
Drag **Text Editor** in.
- **Content:** `Be the first to hear about the 2027 AMC Conference — dates, venue, speakers and early-bird registration.` (confirm copy with client)
- **Style:** Text Color `#474948` · Typography `Open Sans · 15px · 400 · LH 1.6em`

## 2.6 Form
Drag **Form** in.

**Content → Form Fields** — edit/add items:
| Type | Label | Placeholder | Required | Column Width |
|---|---|---|---|---|
| Text | First Name | First name | Yes | 50% |
| Text | Last Name | Last name | Yes | 50% |
| Email | Email | Email address | Yes | 100% |
| Text | Organisation | Organisation | No | 50% |
| Text | Country | Country | No | 50% |

- Input Size: **Medium**
- Label: **Show**

(Column widths 50% automatically go 100% on mobile.)

**Content → Buttons**
- Size: **Medium** · Column Width `100%` · Submit text `Sign Me Up`

**Content → Actions After Submit:** add **Email** (and Mailchimp / CRM if used)
- **Email section:** To `[CLIENT EMAIL]` · Subject `New 2027 AMC updates sign-up` · From Name `AMC Website`

**Content → Additional Options → Custom Messages: Yes**
- Success: `Thank you. We'll keep you updated on the 2027 AMC Conference.`

**Style → Form:** Columns Gap `12px` · Rows Gap `14px` · Label Spacing `6px` · Label Color `#114835` · Label Typography `Open Sans · 14px · 600`
**Style → Field:** Text Color `#474948` · Typography `Open Sans · 15px · 400` · Background `#FFFFFF` · Border Color `#11483526` · Border Width `1px` · Border Radius `6px`
**Style → Buttons:**
- Typography `Open Sans · 15px · 700 · Transform None`
- Normal: Background `#114835` · Text `#FFFFFF`
- Hover: Background `#FFD10C` · Text `#114835`
- Border Radius `6px` · Padding `16px 28px 16px 28px`
**Style → Messages:** Success Message Color `#27B259`

## 2.7 Publish the popup
1. Click **Publish**
2. **Conditions** screen → don't add any → **Next**
3. **Triggers** → leave all off → **Next**
4. **Advanced Rules** → leave → **Save & Close**

## 2.8 If the popup uses a Gravity Forms shortcode instead
Gravity Forms prints the form with `style="display:none"` and only reveals it when the page loads. Elementor adds popup content to the page later (when the button is clicked), so the form stays hidden — the popup opens showing only the heading and text.

Fix (site-wide, works for every Gravity Form inside any Elementor popup):
1. WP Dashboard → **Elementor → Custom Code → Add New**
2. Title: `Gravity Forms in Elementor popups`
3. Location: **`</body>` - End** · Priority `1`
4. Paste:
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
5. **Publish** → Condition: **Entire Site** → **Save & Close**
6. Clear any site cache, then test in an incognito window

**Only one copy of a Gravity Form per page.** Gravity Forms gives every form element a fixed ID (`gform_wrapper_42`, `input_42_17`, …). If the same form ID is also embedded on the page itself (e.g. in the FAQ / "Ask Us a Question" section), the snippet, reCAPTCHA and submit all target the page copy and the popup copy stays hidden. Use a different form (different ID) anywhere else on the page.

Keep `ajax="true"` on the shortcode (e.g. `[gravityform id="42" title="false" description="false" ajax="true"]`) so the popup stays open after submit and shows the confirmation message.

## How to link any button to this popup
On the Button widget → **Content → Link** → click the **Dynamic Tags icon** (stacked discs) → **Actions → Popup** → click the **wrench** on the tag → Action **Open Popup** → Popup **AMC 2027 Updates**.

---

# PHASE 3 — Section 1: Hero

Back on the recap page in Elementor.

## 3.1 Hero container
Click **+** in the canvas → choose the **single container** (Flexbox) layout.

**Layout tab**
- Container Layout: **Flexbox**
- Content Width: **Boxed**
- Width: `900px` / `100%` / `100%`
- Min Height: `640px` / `540px` / `500px`
- Direction: **Column**
- Justify Content: **Center**
- Align Items: **Center**
- Gaps: `18px` / `16px` / `14px`
- Wrap: **No Wrap**

**Style tab**
- Background → Background Type **Classic** → Image: hero image · Position **Center Center** · Attachment **Scroll** · Repeat **No-repeat** · Display Size **Cover**
- Background Overlay → Classic → Color `#114835` · Opacity `0.82`

**Advanced tab**
- Padding: `120px 24px 120px 24px` / `96px 24px 96px 24px` / `72px 20px 72px 20px`
- Margin: `0 0 0 0`

## 3.2 H1
Drag **Heading** into the hero container.
- **Content:** Title `2026 AMC Conference` · HTML Tag `H1`
- **Style:** Alignment **Center** · Text Color `#FFFFFF` · Typography `Open Sans · 56/44/34px · 800 · LH 1.1em · LS 0`

## 3.3 Theme line
Drag **Heading** in.
- **Content:** Title:
```text
Africa Rising: From Continental Strengths to Global Impact through Marketing Leadership, Brand Power and Value Creation
```
- HTML Tag `H2`
- **Style:** Alignment **Center** · Text Color `#FFD10C` · Typography `Open Sans · 24/21/18px · 600 · LH 1.4em · LS 0`
- **Advanced → Layout:** Width **Custom** `820px` / `100%` / `100%`

## 3.4 Intro paragraph
Drag **Text Editor** in.
- **Content:**
```text
The 2026 AMC Conference brought together marketing professionals, brand champions, and industry leaders from across the continent for three days of strategic insight, collaboration and connection in Livingstone, Zambia.
```
- **Style:** Alignment **Center** · Text Color `#FFFFFFD9` · Typography `Open Sans · 18/17/16px · 400 · LH 1.7em`
- **Advanced → Layout:** Width **Custom** `720px` / `100%` / `100%`

## 3.5 Date + location
Drag **Icon List** in.
- **Content:** Layout **Inline**
  - Item 1: Text `23–25 September 2026` · Icon `far fa-calendar` (search "calendar")
  - Item 2: Text `Livingstone, Zambia` · Icon `fas fa-map-marker-alt` (search "map marker")
- **Style → List:** Space Between `28px` / `24px` / `10px` · Alignment **Center** · Divider **Off**
- **Style → Icon:** Color `#FFD10C` · Size `16px` · Gap `8px`
- **Style → Text:** Text Color `#FFFFFF` · Typography `Open Sans · 16/15/15px · 700 · LH 1.4em`
- **Advanced:** Margin `6px 0 0 0`

On mobile the two items wrap onto two lines — that's expected.

## 3.6 "Proudly Hosted by" card — container
Drag a **Container** into the hero container (below the icon list).

**Layout**
- Content Width: **Full Width**
- Width: `440px` / `440px` / `100%`
- Direction: **Row** / **Row** / **Column**
- Justify Content: **Center**
- Align Items: **Center**
- Gaps: `20px` / `20px` / `10px`

**Style**
- Background: Classic → `#FFFFFF`
- Border → Border Radius `12px`
- Box Shadow: Horizontal `0` · Vertical `10` · Blur `30` · Spread `0` · Color `#00000033`

**Advanced**
- Padding: `16px 28px 16px 28px` / `16px 24px 16px 24px` / `16px 20px 16px 20px`
- Margin: `24px 0 0 0` / `20px 0 0 0` / `16px 0 0 0`

## 3.7 Card label
Drag **Heading** into the card.
- **Content:** Title `Proudly Hosted by:` · HTML Tag `H2`
- **Style:** Alignment Center · Text Color `#114835` · Typography `Open Sans · 14/14/13px · 700 · Transform Uppercase · LH 1.3em · LS 1.5px`

## 3.8 ZIM logo
Drag **Image** into the card.
- **Content:** Image: ZIM logo · Resolution **Full** · Caption **None** · Link **Custom URL** → `https://www.zimmarketing.org.zm/` → click the **gear** → **Open in new window: On**
- **Style:** Alignment Center · Width `140px` / `130px` / `120px` · Height Auto · Object Fit Default

**Save Draft.**

---

# PHASE 4 — Section 2: Intro + stat cards

## 4.1 Section container
Hover below the hero → click **+** → single container.

**Layout**
- Container Layout: **Flexbox**
- Content Width: **Boxed**
- Width: `1140px` / `100%` / `100%`
- Direction: **Row** / **Column** / **Column**
- Justify Content: **Space Between**
- Align Items: **Center** / **Stretch** / **Stretch**
- Gaps: `56px` / `40px` / `32px`
- Wrap: **No Wrap**

**Style:** Background Classic → `#FFFFFF`
**Advanced:** Padding `96px 24px 96px 24px` / `72px 24px 72px 24px` / `56px 20px 56px 20px`

## 4.2 Left column container
Drag **Container** into the section.
- **Layout:** Content Width Full Width · Width `55%` / `100%` / `100%` · Direction **Column** · Align Items **Flex Start** · Gaps `20px` / `18px` / `16px`
- **Advanced:** Padding `0 0 0 0`

### Divider (accent line)
Drag **Divider** into the left column.
- **Content:** Style **Solid** · Width `56px` · Alignment **Left** · Gap `2px`
- **Style:** Color `#27B259` · Weight `4px`

### H2
Drag **Heading** in.
- **Content:** Title `Three Days. One Continental Conversation.` · HTML Tag `H2`
- **Style:** Alignment Left · Text Color `#114835` · Typography `Open Sans · 40/32/28px · 700 · LH 1.2em · LS 0`

### Body
Drag **Text Editor** in.
- **Content:**
```text
The 2026 AMC Conference brought together marketing professionals and industry stakeholders to explore the opportunities and challenges shaping Africa's commercial future. Hosted at the Avani Victoria Falls Resort, the conference explored how Africa can translate its cultural capital, resources and talent into lasting global impact.

Under the theme “Africa Rising,” the programme addressed marketing leadership, artificial intelligence, digital trade, sustainability, youth empowerment, and the future of Africa's creative ecosystem. Across three days, delegates exchanged ideas, challenged assumptions and built connections around the strategies, policies and people shaping Africa's marketing trajectory.
```
- **Style:** Alignment Left · Text Color `#474948` · Typography `Open Sans · 17/16/16px · 400 · LH 1.7em` · Paragraph Spacing `16px`

### Button
Drag **Button** in.
- **Content:** Text `Sign Up for 2027 AMC Conference Updates` · Link → Dynamic → **Actions → Popup** → Open Popup → `AMC 2027 Updates` · Icon `fas fa-arrow-right` · Icon Position **After** · Icon Spacing `10px`
- **Style:**
  - Alignment: **Left** / **Left** / **Justified**
  - Typography `Open Sans · 15/15/14px · 700 · Transform None · LH 1.2em · LS 0`
  - Normal tab: Text Color `#FFFFFF` · Background Classic `#114835`
  - Hover tab: Text Color `#114835` · Background Classic `#FFD10C` · Hover Animation None
  - Border Type None · Border Radius `6px`
  - Padding `16px 28px 16px 28px` / `15px 24px 15px 24px` / `14px 20px 14px 20px`
- **Advanced:** Margin `8px 0 0 0`

## 4.3 Right column container (stat cards)
Drag **Container** into the section, beside the left column.
- **Layout:** Content Width Full Width · Width `45%` / `100%` / `100%` · Direction **Column** / **Row** / **Column** · Align Items **Stretch** · Gaps `16px` / `16px` / `14px`
- **Advanced:** Padding `0 0 0 0`

## 4.4 Stat card 1
Drag **Container** into the right column.

**Layout:** Content Width Full Width · Width `100%` / `33.333%` / `100%` · Direction **Column** · Gaps `8px`

**Style**
- Background Classic → `#27B2590F`
- Border → Border Type **Solid** · Width `0 0 0 5px` (Top Right Bottom Left — unlink) · Color `#27B259`
- Border Radius `0 10px 10px 0`

**Advanced:** Padding `24px 24px 24px 24px` / `22px 20px 22px 20px` / `20px 20px 20px 20px`

Inside the card:

**Icon** widget
- **Content:** Icon `far fa-calendar-check` · View **Default**
- **Style:** Alignment Left · Primary Color `#27B259` · Size `28px` / `26px` / `24px`

**Heading** widget
- **Content:** Title `3 Days of Plenaries & Immersions` · HTML Tag `H3`
- **Style:** Alignment Left · Text Color `#114835` · Typography `Open Sans · 20/18/18px · 700 · LH 1.3em`

**Text Editor** widget
- **Content:** `Participated in industry-led conversations shaping Brand Africa.`
- **Style:** Text Color `#474948` · Typography `Open Sans · 15px · 400 · LH 1.6em`

## 4.5 Stat cards 2 and 3
Right-click card 1's handle → **Duplicate** (twice). Change only:

| Card | Icon | H3 | Text |
|---|---|---|---|
| 2 | `fas fa-lightbulb` | `High-Impact Immersion Tracks` | `Featuring the Africa Rising Exchange and Solutions Studio Live.` |
| 3 | `fas fa-globe-africa` | `Cross-Continental Voices` | `Represented by marketing association leaders from Zambia, South Africa, Nigeria, Ghana, Uganda, Zimbabwe, and more.` |

**Save Draft.**

---

# PHASE 5 — Section 3: ACCS

## 5.1 Section container
**+** → single container.

**Layout:** Flexbox · Content Width **Boxed** · Width `1140px` / `100%` / `100%` · Direction **Column** · Justify **Flex Start** · Align Items **Center** · Gaps `24px` / `20px` / `16px`
**Style:** Background Classic → `#27B2590F`
**Advanced:** Padding `96px 24px 96px 24px` / `72px 24px 72px 24px` / `56px 20px 56px 20px`

## 5.2 Divider
- **Content:** Style Solid · Width `56px` · Alignment **Center** · Gap `2px`
- **Style:** Color `#27B259` · Weight `4px`

## 5.3 H2
- **Content:** Title `Three Conferences. One Shared Vision.` · HTML Tag `H2`
- **Style:** Alignment **Center** · Text Color `#114835` · Typography `Open Sans · 40/32/28px · 700 · LH 1.2em`

## 5.4 Intro
**Text Editor**
- **Content:**
```text
The 2026 AMC Conference formed one of three pillars of the African Commerce Convergence Summit (ACCS), bringing together leaders from technology, marketing and supply chain to explore the forces shaping Africa's economic future. Together, the African Marketing Confederation (AMC), TICON Africa, and the African Supply Chain Confederation (ASCON) created a cross-industry platform for collaboration, innovation and continental growth.
```
- **Style:** Alignment **Center** · Text Color `#474948` · Typography `Open Sans · 17/16/16px · 400 · LH 1.7em`
- **Advanced → Layout:** Width Custom `820px` / `100%` / `100%`

## 5.5 Cards row container
Drag **Container** into the section.
- **Layout:** Content Width Full Width · Width `100%` · Direction **Row** / **Column** / **Column** · Align Items **Stretch** · Gaps `24px` / `20px` / `16px`
- **Advanced:** Padding `0 0 0 0` · Margin `16px 0 16px 0` / `12px 0 12px 0` / `8px 0 8px 0`

## 5.6 Card 1 (AMC)
Drag **Container** into the cards row.

**Layout:** Content Width Full Width · Width `33.333%` / `100%` / `100%` · Direction **Column** · Justify **Flex Start** · Align Items **Center** · Gaps `16px`

**Style**
- Background Classic → `#FFFFFF`
- Border Type **Solid** · Width `4px 0 0 0` · Color `#27B259`
- Border Radius `12px`
- Box Shadow: H `0` · V `8` · Blur `24` · Spread `0` · Color `#11483514`

**Advanced:** Padding `32px 28px 32px 28px` / `28px 24px 28px 24px` / `24px 20px 24px 20px`

**Image** (logo)
- **Content:** AMC logo · Resolution Full · Link None
- **Style:** Alignment Center · Width `160px` / `150px` / `140px` · Height `80px` / `72px` / `64px` · Object Fit **Contain**

**Text Editor**
- **Content:** `Led by the African Marketing Confederation, AMC promotes marketing professionalism, education, standards and market effectiveness across the continent.`
- **Style:** Alignment **Center** · Text Color `#474948` · Typography `Open Sans · 15px · 400 · LH 1.6em`

## 5.7 Cards 2 and 3
Duplicate card 1 twice. Change only:

| Card | Logo | Text |
|---|---|---|
| 2 | TICON Africa | `Led by the Technology Information Confederation Africa, TICON Africa advances ICT professionalism, digital transformation and collaboration across Africa's technology ecosystem.` |
| 3 | ASCON | `Led by the African Supply Chain Confederation, ASCON works to strengthen and professionalise supply chain, procurement and logistics practices across Africa.` |

## 5.8 Button
Drag **Button** into the section (below the cards row).
- **Content:** Text `Learn More About ACCS` · Link `https://accsummit.org/` → gear → **Open in new window: On** · Icon `fas fa-arrow-right` · Position After · Spacing `10px`
- **Style:**
  - Alignment: **Center** / **Center** / **Justified**
  - Typography `Open Sans · 15/15/14px · 700 · Transform None · LH 1.2em`
  - Normal: Text `#FFFFFF` · Background `#114835`
  - Hover: Text `#114835` · Background `#FFD10C`
  - Border Radius `6px`
  - Padding `16px 28px 16px 28px` / `15px 24px 15px 24px` / `14px 20px 14px 20px`

**Save Draft.**

---

# PHASE 6 — Section 4: Recap (Day 1, 2, 3)

## 6.1 Section container
**+** → single container.

**Layout:** Flexbox · Content Width **Boxed** · Width `1140px` / `100%` / `100%` · Direction **Column** · Align Items **Stretch** · Gaps `72px` / `56px` / `48px`
**Style:** Background Classic → `#FFFFFF`
**Advanced:** Padding `96px 24px 96px 24px` / `72px 24px 72px 24px` / `56px 20px 56px 20px`

## 6.2 Intro container
Drag **Container** into the section.
- **Layout:** Content Width Full Width · Width `820px` / `100%` / `100%` · Direction Column · Align Items **Center** · Gaps `20px` / `18px` / `16px`
- **Advanced → Layout:** Align Self **Center**
- **Advanced:** Padding `0 0 0 0`

**Divider** → Style Solid · Width `56px` · Alignment Center · Gap `2px` · Color `#27B259` · Weight `4px`

**Heading**
- **Content:** Title `Looking Back at the 2026 AMC Conference` · HTML Tag `H2`
- **Style:** Alignment Center · Text Color `#114835` · Typography `Open Sans · 40/32/28px · 700 · LH 1.2em`

**Text Editor**
- **Content:**
```text
Across three days in Livingstone, the 2026 AMC Conference explored the technologies, cultural capital, skills and leadership needed to strengthen Africa's global marketing presence. The programme followed the theme “Africa Rising,” examining how Africa can use its creative ecosystem, brand power and digital infrastructure to create global competitive advantage.
```
- **Style:** Alignment Center · Text Color `#474948` · Typography `Open Sans · 17/16/16px · 400 · LH 1.7em`

## 6.3 Day 1 block container
Drag **Container** into the section (below the intro).
- **Layout:** Content Width Full Width · Width `100%` · Direction **Row** / **Column** / **Column** · Justify **Space Between** · Align Items **Center** / **Stretch** / **Stretch** · Gaps `48px` / `32px` / `24px`
- **Advanced:** Padding `0 0 0 0`

### Text column
Drag **Container** into the Day 1 block.
- **Layout:** Content Width Full Width · Width `50%` / `100%` / `100%` · Direction Column · Align Items **Flex Start** · Gaps `12px`
- **Advanced:** Padding `0 0 0 0`

**Day badge — Heading**
- **Content:** Title `DAY 1` · HTML Tag `div`
- **Style:** Alignment Left · Text Color `#114835` · Typography `Open Sans · 13px · 700 · Transform Uppercase · LH 1em · LS 2px`
- **Advanced:** Padding `7px 12px 7px 12px` · Layout → Width **Inline (auto)** · Align Self **Start**
- **Advanced → Background** (newer Elementor: **Style → Background**, older: **Advanced → Background**) → Classic `#FFD10C`
- **Advanced → Border** → Radius `4px`

**H3 — Heading**
- **Content:** Title `Day 1 - Africa Rising in a Multipolar World` · HTML Tag `H3`
- **Style:** Alignment Left · Text Color `#114835` · Typography `Open Sans · 26/23/21px · 700 · LH 1.3em`
- **Advanced:** Margin `4px 0 0 0`

**H4 — Heading**
- **Content:** Title `Emerging Markets, Cultural Capital and Brand Africa` · HTML Tag `H4`
- **Style:** Alignment Left · Text Color `#474948` · Typography `Open Sans · 18/17/16px · 600 · Style Italic · LH 1.4em`

**Body — Text Editor**
- **Content:**
```text
The conference opened with a government address and keynotes setting the tone for three days of continental dialogue. The programme explored transitioning from an emerging market to a demand architect, leveraging African culture for global shelf space, and leading marketing in complex economies. Delegates participated in the interactive 'Africa Rising Exchange' immersion session before concluding the day with a Cultural Networking Evening at the Radisson Blu.
```
- **Style:** Text Color `#474948` · Typography `Open Sans · 17/16/16px · 400 · LH 1.7em`
- **Advanced:** Margin `4px 0 0 0`

### Carousel column
Drag **Container** into the Day 1 block (after the text column).
- **Layout:** Content Width Full Width · Width `50%` / `100%` / `100%` · Direction Column · Gaps `0`
- **Advanced:** Padding `0 0 0 0`

**Image Carousel** (drag into the carousel column)

**Content → Image Carousel**
- Add Images: select all Day 1 photos → **Insert Gallery**
- Image Resolution: **Large** (or `1536x1536`)
- Slides to Show: `1` / `1` / `1`
- Slides to Scroll: `1`
- Image Stretch: **Yes**
- Navigation: **Arrows and Dots**
- Link: **Media File**
- Lightbox: **Yes**
- Caption: **None**

**Content → Additional Options**
- Autoplay: **No**
- Infinite Loop: **Yes**
- Effect: **Slide**
- Animation Speed: `500`
- Direction: **Left**

**Style → Navigation**
- Arrows: Position **Inside** · Size `28px` / `24px` / `22px` · Color `#FFFFFF`
- Dots: Position **Outside** · Size `8px` · Color `#11483526` · Active Color `#27B259`

**Style → Image**
- Spacing: Default
- Border Type None
- Border Radius `12px`

## 6.4 Day 2 block
1. Right-click the **Day 1 block** container handle → **Duplicate**
2. Select the new block → **Layout → Direction**: **Row Reverse** (Desktop) · **Column** (Tablet) · **Column** (Mobile)
   (Desktop: carousel left, text right. Tablet/mobile: text stays on top.)
3. Change the content:

Day badge: `DAY 2`

H3:
```text
Day 2 – Leadership, Trust and the AI-Enabled Economy
```
H4:
```text
Digital Trade, Sustainability and the Next Generation of Creators
```
Body:
```text
Day 2 moved deeper into the practical challenges of the AI and digital economy, focusing on governing data, trust, and leveraging marketing to drive the AfCFTA. The 'Solutions Studio Live' tackled reputation and crisis leadership in the age of AI, while the 'Host Nation Exchange' showcased Zambia's banking and creative enterprise sectors. The day concluded with the prestigious Awards Gala Evening, recognising excellence in formal evening wear.
```
Carousel: click the gallery → **Edit Gallery** → remove Day 1 photos → add Day 2 photos → **Update Gallery**

## 6.5 Day 3 block
1. Duplicate the **Day 1 block** (not Day 2) → drag it below Day 2
2. Direction stays **Row** / **Column** / **Column**
3. Change the content:

Day badge: `DAY 3`

H3:
```text
Day 3 – Commitments for an AI-Enabled Future
```
H4:
```text
Global Integration, Leadership and Africa's Digital Trajectory
```
Body:
```text
The final day brought together the ideas of the conference in a forward-looking programme examining Africa's seat at the global marketing table. Delegates were introduced to the World Marketing Council and engaged in dialogue surrounding leadership commitments for a digitally competitive future. The conference closed with a combined closing plenary alongside TICON and ASCON partners.
```
Carousel: swap gallery to Day 3 photos.

## 6.6 Copy notes for the client (do not change without approval)
- Day 1 uses a hyphen (`Day 1 - Africa`); Days 2–3 use an en dash (`–`).
- Day 2 "recognising excellence in formal evening wear" reads as if the awards recognised the clothing.

**Save Draft.**

---

# PHASE 7 — Sections 5 + 6: Awards and Masterclass

## 7.1 Awards — section container (dark)
**+** → single container.

**Layout:** Flexbox · Content Width **Boxed** · Width `1140px` / `100%` / `100%` · Direction **Row** / **Column** / **Column** · Justify **Space Between** · Align Items **Center** / **Stretch** / **Stretch** · Gaps `56px` / `36px` / `28px`
**Style:** Background Classic → `#114835`
**Advanced:** Padding `96px 24px 96px 24px` / `72px 24px 72px 24px` / `56px 20px 56px 20px`

### Image column
Drag **Container** in.
- **Layout:** Content Width Full Width · Width `45%` / `100%` / `100%` · Direction Column · Gaps `0`
- **Advanced:** Padding `0 0 0 0`

**Image** widget
- **Content:** Awards Gala photo · Resolution **Large** · Link **Media File** · Lightbox Yes
- **Style:** Alignment Center · Width `100%` · Height `420px` / `380px` / `260px` · Object Fit **Cover** · Object Position **Center Center** · Border Radius `12px`

### Text column
Drag **Container** in (after the image column).
- **Layout:** Content Width Full Width · Width `55%` / `100%` / `100%` · Direction Column · Align Items **Flex Start** · Gaps `20px` / `18px` / `16px`
- **Advanced:** Padding `0 0 0 0`

**Divider** → Style Solid · Width `56px` · Alignment Left · Gap `2px` · Color `#FFD10C` · Weight `4px`

**Heading**
- **Content:** Title `Celebrating Excellence at the 2026 AMC Awards Gala` · HTML Tag `H2`
- **Style:** Alignment Left · Text Color `#FFFFFF` · Typography `Open Sans · 40/32/28px · 700 · LH 1.2em`

**Text Editor**
- **Content:**
```text
The 2026 Awards Gala Evening on 24 September brought the second day to a fitting close, recognising individuals and organisations making meaningful contributions to Africa's marketing ecosystem. Set against the backdrop of the Radisson Blu in Livingstone, the formal evening provided an opportunity for the AMC community to celebrate the people and campaigns helping shape Africa's brand power.
```
- **Style:** Text Color `#FFFFFFD9` · Typography `Open Sans · 17/16/16px · 400 · LH 1.7em`

**Button** (yellow — on dark)
- **Content:** Text `View the 2026 Award Winners` · Link `[AWARD WINNERS URL]` · Icon `fas fa-trophy` · Position **Before** · Spacing `10px`
- **Style:**
  - Alignment: **Left** / **Left** / **Justified**
  - Typography `Open Sans · 15/15/14px · 700 · Transform None · LH 1.2em`
  - Normal: Text `#114835` · Background `#FFD10C`
  - Hover: Text `#114835` · Background `#FFFFFF`
  - Border Radius `6px`
  - Padding `16px 28px 16px 28px` / `15px 24px 15px 24px` / `14px 20px 14px 20px`
- **Advanced:** Margin `8px 0 0 0`

## 7.2 Masterclass — section container (white)
**+** → single container.

**Layout:** Flexbox · Content Width **Boxed** · Width `1140px` / `100%` / `100%` · Direction **Row** / **Column** / **Column** · Justify **Space Between** · Align Items **Center** / **Stretch** / **Stretch** · Gaps `56px` / `36px` / `28px`
**Style:** Background Classic → `#FFFFFF`
**Advanced:** Padding `96px 24px 96px 24px` / `72px 24px 72px 24px` / `56px 20px 56px 20px`

### Text column
Drag **Container** in.
- **Layout:** Width `45%` / `100%` / `100%` · Direction Column · Align Items Flex Start · Gaps `20px` / `18px` / `16px`
- **Advanced:** Padding `0 0 0 0`

**Divider** → Solid · Width `56px` · Alignment Left · Gap `2px` · Color `#27B259` · Weight `4px`

**Heading**
- **Content:** Title `Practical Strategy: Masterclasses and Immersion Sessions` · HTML Tag `H2`
- **Style:** Alignment Left · Text Color `#114835` · Typography `Open Sans · 40/32/28px · 700 · LH 1.2em`

**Text Editor**
- **Content:**
```text
2026 placed a strong emphasis on actionable strategy with the Pre-Conference Masterclass, focusing on leveraging African culture and heritage to build brands from local roots to global shelf space. This practical focus continued throughout the conference via dedicated immersion sessions, including the 'Africa Rising Exchange' and 'Solutions Studio Live', which brought dynamic, evidence-based problem-solving directly into the programme.
```
- **Style:** Text Color `#474948` · Typography `Open Sans · 17/16/16px · 400 · LH 1.7em`

### Carousel column
Drag **Container** in.
- **Layout:** Width `55%` / `100%` / `100%` · Direction Column · Gaps `0`
- **Advanced:** Padding `0 0 0 0`

**Image Carousel**
- **Content:** Add Images (Masterclass & Immersion photos) · Resolution **Large** · Slides to Show `2` / `2` / `1` · Slides to Scroll `1` · Image Stretch **Yes** · Navigation **Arrows and Dots** · Link **Media File** · Lightbox **Yes** · Caption None
- **Additional Options:** Autoplay **No** · Infinite Loop **Yes** · Effect Slide · Speed `500`
- **Style → Navigation:** Arrows Inside · Size `28px` / `24px` / `22px` · Color `#FFFFFF` · Dots Outside · Size `8px` · Color `#11483526` · Active `#27B259`
- **Style → Image:** Spacing **Custom** `16px` · Border Radius `12px`

Copy note for client: paragraph starts with the numeral "2026" — suggest "The 2026 conference placed…".

**Save Draft.**

---

# PHASE 8 — Sections 7 + 8: Speakers and Venue

## 8.1 Speakers — section container (tint)
**+** → single container.

**Layout:** Flexbox · Content Width **Boxed** · Width `1140px` / `100%` / `100%` · Direction **Column** · Align Items **Center** · Gaps `24px` / `20px` / `16px`
**Style:** Background Classic → `#27B2590F`
**Advanced:** Padding `96px 24px 96px 24px` / `72px 24px 72px 24px` / `56px 20px 56px 20px`

**Divider** → Solid · Width `56px` · Alignment Center · Gap `2px` · Color `#27B259` · Weight `4px`

**Heading**
- **Content:** Title `The Voices Shaping Brand Africa` · HTML Tag `H2`
- **Style:** Alignment Center · Text Color `#114835` · Typography `Open Sans · 40/32/28px · 700 · LH 1.2em`

**Text Editor**
- **Content:**
```text
The 2026 AMC programme brought together Chief Marketing Officers, agency founders, business consultants, academics, policymakers and association presidents from across Africa and beyond. Together, these voices explored the major forces shaping Africa's marketing future, from artificial intelligence and digital trade to youth empowerment, sustainability, and competitive strategy.
```
- **Style:** Alignment Center · Text Color `#474948` · Typography `Open Sans · 17/16/16px · 400 · LH 1.7em`
- **Advanced → Layout:** Width Custom `820px` / `100%` / `100%`

### Speaker grid — Option A (recommended): reuse the existing speakers grid
1. In a new browser tab open the speakers page (`/amc-conference-speakers-2026/`) → **Edit with Elementor**
2. Right-click the speaker grid's container handle → **Copy**
3. Back on the recap tab → right-click the Speakers section container → **Paste**
4. If it's a **Loop Grid**: **Content → Query** → Posts Per Page `8` · Include By **Manual Selection** → pick the headline speakers
5. Set **Content → Layout** → Columns `4` / `3` / `2` (Mobile `1` if the cards are wide)
6. **Style → Layout** → Gap Between Columns `24px` / `20px` / `16px` · Gap Between Rows `24px` / `20px` / `16px`
7. **Advanced:** Margin `16px 0 0 0`
8. The speaker popup (if the site uses one) keeps working because it's site-wide

### Speaker grid — Option B: build a speaker card manually (only if no grid exists)
Drag **Container** into the section:
- **Layout:** Width `100%` · Direction **Row** · Wrap **Wrap** · Justify **Center** · Gaps `24px` / `20px` / `16px`
- **Advanced:** Padding `0 0 0 0` · Margin `16px 0 0 0`

For each speaker, drag **Image Box** into it:
- **Content:** Image (headshot) · Resolution Medium · Title `[Speaker Name]` · Description `[Role, Organisation]` · Image Position **Top** · Title HTML Tag `H3`
- **Style → Image:** Width `100%` · Border Radius `12px` · Spacing `14px`
- **Style → Content:** Alignment Center · Title Color `#114835` · Title Typography `Open Sans · 18/17/16px · 700 · LH 1.3em` · Description Color `#474948` · Description Typography `Open Sans · 14px · 400 · LH 1.5em`
- **Advanced → Layout:** Width Custom `calc(25% - 18px)` / `calc(33.333% - 14px)` / `calc(50% - 8px)`
- **Advanced → Background:** `#FFFFFF` · **Border:** Radius `12px` · **Padding** `16px 16px 20px 16px`

Optional button under the grid (not in brief): `Meet All 2026 Speakers` → `/amc-conference-speakers-2026/` — same style as the ACCS button (Phase 5.8).

## 8.2 Venue — section container (white)
**+** → single container.

**Layout:** Flexbox · Content Width **Boxed** · Width `1140px` / `100%` / `100%` · Direction **Row** / **Column Reverse** / **Column Reverse** · Justify **Space Between** · Align Items **Center** / **Stretch** / **Stretch** · Gaps `56px` / `36px` / `28px`
**Style:** Background Classic → `#FFFFFF`
**Advanced:** Padding `96px 24px 96px 24px` / `72px 24px 72px 24px` / `56px 20px 56px 20px`

(Column Reverse on tablet/mobile puts the text above the carousel, matching the other sections.)

### Carousel column (first)
Drag **Container** in.
- **Layout:** Width `55%` / `100%` / `100%` · Direction Column · Gaps `0`
- **Advanced:** Padding `0 0 0 0`

**Retain the existing venue images:**
1. Open the 2026 conference page in Elementor (other tab) → right-click the venue carousel/gallery widget → **Copy**
2. Recap tab → right-click the carousel column → **Paste**
3. If it's an **Image Carousel**, restyle it to match: Slides to Show `1` / `1` / `1` · Image Stretch Yes · Navigation Arrows and Dots · Link Media File · Lightbox Yes · Autoplay No · Loop Yes · Arrows Inside `28/24/22px` `#FFFFFF` · Dots Outside `8px` `#11483526` / Active `#27B259` · Image Border Radius `12px`
4. If it's a different widget (Gallery / Media Carousel), just set Border Radius `12px` and keep it

### Text column (second)
Drag **Container** in.
- **Layout:** Width `45%` / `100%` / `100%` · Direction Column · Align Items Flex Start · Gaps `20px` / `18px` / `16px`
- **Advanced:** Padding `0 0 0 0`

**Divider** → Solid · Width `56px` · Alignment Left · Gap `2px` · Color `#27B259` · Weight `4px`

**Heading**
- **Content:** Title `A World-Class Host Venue: Avani Victoria Falls Resort` · HTML Tag `H2`
- **Style:** Alignment Left · Text Color `#114835` · Typography `Open Sans · 40/32/28px · 700 · LH 1.2em`

**Text Editor**
- **Content:**
```text
Located in Livingstone, Zambia, the Avani Victoria Falls Resort provided the primary setting for the 2026 AMC Conference, bringing delegates together in one of Africa’s most recognisable destinations. With optional river cruises, sunset walks, and networking extending to the nearby Radisson Blu, the venue provided an unparalleled environment for three days of professional engagement and continental collaboration.
```
- **Style:** Text Color `#474948` · Typography `Open Sans · 17/16/16px · 400 · LH 1.7em`

**Save Draft.**

---

# PHASE 9 — Section 9: Partners & Sponsors

## 9.1 Section container (tint)
**+** → single container.

**Layout:** Flexbox · Content Width **Boxed** · Width `1140px` / `100%` / `100%` · Direction **Column** · Align Items **Center** · Gaps `24px` / `20px` / `16px`
**Style:** Background Classic → `#27B2590F`
**Advanced:** Padding `96px 24px 96px 24px` / `72px 24px 72px 24px` / `56px 20px 56px 20px`

**Divider** → Solid · Width `56px` · Alignment Center · Gap `2px` · Color `#27B259` · Weight `4px`

**Heading**
- **Content:** Title `Partners Behind the 2026 AMC Conference` · HTML Tag `H2`
- **Style:** Alignment Center · Text Color `#114835` · Typography `Open Sans · 40/32/28px · 700 · LH 1.2em`

**Text Editor**
- **Content:**
```text
The success of the 2026 AMC Conference was made possible through the organisations, partners and industry stakeholders that invested in the development of Africa's marketing ecosystem.
```
- **Style:** Alignment Center · Text Color `#474948` · Typography `Open Sans · 17/16/16px · 400 · LH 1.7em`
- **Advanced → Layout:** Width Custom `760px` / `100%` / `100%`

## 9.2 Group 1 — Host Partner
Drag **Container** into the section.
- **Layout:** Width `100%` · Direction Column · Align Items **Center** · Gaps `16px`
- **Style → Border:** Type Solid · Width `1px 0 0 0` · Color `#11483526`
- **Advanced:** Padding `32px 0 0 0` / `28px 0 0 0` / `24px 0 0 0` · Margin `16px 0 0 0`

**Heading**
- **Content:** Title `Our Host Partner` · HTML Tag `H3`
- **Style:** Alignment Center · Text Color `#114835` · Typography `Open Sans · 16/15/15px · 700 · Transform Uppercase · LH 1.3em · LS 1.5px`

**Image**
- **Content:** ZIM logo · Resolution Full · Link Custom URL `https://www.zimmarketing.org.zm/` → gear → Open in new window **On**
- **Style:** Alignment Center · Width `180px` / `170px` / `160px` · Height Auto

## 9.3 Group 2 — Sponsors
Duplicate the Group 1 container. Change:

**Heading:** Title `Our Sponsors`

**Delete the Image**, then either:

**A) Copy the existing sponsor logos (recommended):** open the 2026 conference page in Elementor → right-click the sponsor logo container → **Copy** → recap tab → right-click Group 2 → **Paste**. Then restyle the logo container to the values in B.

**B) Build the logo grid:**
Drag **Container** into Group 2:
- **Layout:** Width `100%` · Direction **Row** · Wrap **Wrap** · Justify **Center** · Align Items **Center** · Gaps `24px` / `20px` / `16px`
- **Advanced:** Padding `0 0 0 0`

Inside, one **Image** widget per sponsor:
- **Content:** sponsor logo · Resolution Full · Link Custom URL → sponsor site → Open in new window **On**
- **Style:** Width `160px` / `140px` / `120px` · Height `72px` / `64px` / `56px` · Object Fit **Contain**
- **Advanced → Background:** `#FFFFFF` · **Border:** Radius `10px` · **Padding** `16px 20px 16px 20px` / `14px 16px 14px 16px` / `12px 14px 12px 14px`
- Style the first logo, then right-click → **Copy** → right-click each next logo → **Paste Style**

Result: about 5 per row desktop, 4 tablet, 2 mobile.

## 9.4 Group 3 — Travel Partners
Duplicate the Group 2 container. Change:
- **Heading:** Title `Our Travel Partners`
- Swap the logos for the airline + travel partners (copy from the 2026 conference page as above)

**Save Draft.**

---

# PHASE 10 — Section 10: FAQ + "Ask Us a Question"

## 10.1 Section container (white)
**+** → single container.

**Layout:** Flexbox · Content Width **Boxed** · Width `860px` / `100%` / `100%` · Direction **Column** · Align Items **Stretch** · Gaps `20px` / `18px` / `16px`
**Style:** Background Classic → `#FFFFFF`
**Advanced:** Padding `96px 24px 96px 24px` / `72px 24px 72px 24px` / `56px 20px 56px 20px`

**Divider** → Solid · Width `56px` · Alignment Center · Gap `2px` · Color `#27B259` · Weight `4px`

**Heading**
- **Content:** Title `Frequently Asked Questions` · HTML Tag `H2`
- **Style:** Alignment Center · Text Color `#114835` · Typography `Open Sans · 40/32/28px · 700 · LH 1.2em`

**Text Editor**
- **Content:** `Find answers to common questions about the 2026 AMC Conference, its programme, speakers, Immersion Tracks, Awards and future events.`
- **Style:** Alignment Center · Text Color `#474948` · Typography `Open Sans · 17/16/16px · 400 · LH 1.7em`
- **Advanced:** Margin `0 0 16px 0`

## 10.2 FAQ Accordion
Drag **Accordion** into the section (the nested Accordion — each item has its own container).

**Content → Layout**
- Items: delete extras / add until there are **4**. Click each item to set its **Title** (below)
- Expand Icon: `fas fa-plus` · Collapse Icon: `fas fa-minus`
- Title HTML Tag: `H3`
- FAQ Schema: **Yes**

**Content → Interactions**
- Default State: **All Collapsed**
- Max Items Expanded: **One**
- Animation Duration: `400ms`

**Item content:** click the item's container in the canvas (or Navigator) → drag a **Text Editor** into it → paste the answer.
Text Editor style for each answer: Text Color `#474948` · Typography `Open Sans · 16/16/15px · 400 · LH 1.7em`

| # | Title | Answer (Text Editor) |
|---|---|---|
| 1 | `What was the core theme of the 2026 AMC Conference?` | `The theme was Africa Rising — From Continental Strengths to Global Impact through Marketing Leadership, Brand Power and Value Creation.` (select the theme text → **I** to italicise) |
| 2 | `Where did the event take place?` | `The conference was hosted at the Avani Victoria Falls Resort in Livingstone, Zambia, with select evening events at the Radisson Blu.` |
| 3 | `What is the African Commerce Convergence Summit (ACCS)?` | `The ACCS is a joint summit combining the conferences of the AMC, TICON Africa, and ASCON to foster cross-industry collaboration.` |
| 4 | `How can I stay updated for 2027?` | `You can register your interest for next year's conference via our updates form below.` |

**Style → Accordion**
- Space Between Items: `0px`
- Distance From Content: `0px`
- Background — Normal `#FFFFFF` · Hover `#FFFFFF` · Active `#FFFFFF`
- Border — Normal: Type Solid · Width `0 0 1px 0` · Color `#11483526` (same for Hover + Active)
- Border Radius `0`
- Padding `20px 0 20px 0` / `18px 0 18px 0` / `16px 0 16px 0`

**Style → Header**
- Title Typography `Open Sans · 18/17/16px · 700 · LH 1.4em`
- Title Color — Normal `#114835` · Hover `#114835` · Active `#114835`
- Icon Size `16px` · Spacing `16px`
- Icon Color — Normal `#27B259` · Hover `#114835` · Active `#114835`
- Icon Position: **End** (Content → Layout, depending on version)

**Style → Content**
- Background `#FFFFFF`
- Padding `0 40px 20px 0` / `0 32px 18px 0` / `0 24px 16px 0`

## 10.3 "Ask Us a Question" dropdown
Drag a **second Accordion** below the FAQ accordion.

**Content → Layout**
- Items: delete to **1**. Title: `Ask Us a Question`
- Expand Icon `fas fa-chevron-down` · Collapse Icon `fas fa-chevron-up`
- Title HTML Tag `div`
- FAQ Schema: **No**

**Content → Interactions:** Default State **All Collapsed** · Max Items Expanded **One**

**Style → Accordion**
- Background — Normal `#114835` · Hover `#FFD10C` · Active `#FFD10C`
- Border — Type None
- Border Radius `6px`
- Padding `16px 28px 16px 28px` / `15px 24px 15px 24px` / `14px 20px 14px 20px`

**Style → Header**
- Title Typography `Open Sans · 15/15/14px · 700 · LH 1.2em`
- Title Color — Normal `#FFFFFF` · Hover `#114835` · Active `#114835`
- Icon Size `14px` · Spacing `12px` · Icon Color — Normal `#FFFFFF` · Hover `#114835` · Active `#114835`

**Style → Content**
- Background `#27B2590F`
- Border Radius `0 0 10px 10px`
- Padding `24px 24px 24px 24px` / `22px 20px 22px 20px` / `20px 16px 20px 16px`

**Advanced:** Margin `24px 0 0 0` / `20px 0 0 0` / `16px 0 0 0`

**Form inside the item:** click the item's container → drag **Form** in.
- **Form Fields:**

| Type | Label | Placeholder | Required | Column Width |
|---|---|---|---|---|
| Text | Name | Your name | Yes | 50% |
| Email | Email | Email address | Yes | 50% |
| Textarea | Your Question | Type your question | Yes | 100% (Rows `4`) |

- Input Size Medium · Label Show
- **Buttons:** Size Medium · Column Width `100%` / `100%` / `100%` · Submit text `Send Question`
- **Actions After Submit:** Email → To `info@africanmarketingconfederation.org` (confirm) · Subject `AMC Recap page – new question` · From Name `AMC Website` · Reply-To: Email field
- **Additional Options → Custom Messages Yes:** Success `Thanks — we'll get back to you soon.`
- **Style → Form:** Columns Gap `12px` · Rows Gap `14px` · Label Spacing `6px` · Label Color `#114835` · Label Typography `Open Sans · 14px · 600`
- **Style → Field:** Text Color `#474948` · Typography `Open Sans · 15px · 400` · Background `#FFFFFF` · Border Color `#11483526` · Border Width `1px` · Radius `6px`
- **Style → Buttons:** Typography `Open Sans · 15px · 700 · Transform None` · Normal Background `#114835` / Text `#FFFFFF` · Hover Background `#FFD10C` / Text `#114835` · Radius `6px` · Padding `16px 28px 16px 28px`
- **Style → Messages:** Success Color `#27B259`

**Save Draft.**

---

# PHASE 11 — Section 11: Final CTA

## 11.1 Section container (dark)
**+** → single container.

**Layout:** Flexbox · Content Width **Boxed** · Width `820px` / `100%` / `100%` · Direction **Column** · Justify **Center** · Align Items **Center** · Gaps `18px` / `16px` / `14px`
**Style**
- Background Classic → Color `#114835` (optional: also add Image = falls/Livingstone photo · Position Center Center · Size Cover)
- If you added an image: Background Overlay → Classic `#114835` · Opacity `0.88`

**Advanced:** Padding `104px 24px 104px 24px` / `80px 24px 80px 24px` / `64px 20px 64px 20px`

## 11.2 Heading
- **Content:** Title `The Journey Continues` · HTML Tag `H2`
- **Style:** Alignment Center · Text Color `#FFFFFF` · Typography `Open Sans · 44/36/30px · 800 · LH 1.15em`

## 11.3 Body
**Text Editor**
- **Content:**
```text
Following three days of discussion, collaboration and connection in Livingstone, the African Marketing Confederation now looks ahead to its next chapter.
```
- **Style:** Alignment Center · Text Color `#FFFFFFD9` · Typography `Open Sans · 18/17/16px · 400 · LH 1.7em`

## 11.4 Tagline
**Heading**
- **Content:** Title `Africa Is Rising. Be Part of the Next Chapter.` · HTML Tag `p`
- **Style:** Alignment Center · Text Color `#FFD10C` · Typography `Open Sans · 22/20/18px · 700 · LH 1.4em`

## 11.5 Button (yellow — on dark)
- **Content:** Text `Sign Up for 2027 Conference Updates` · Link → Dynamic → **Actions → Popup** → Open Popup → `AMC 2027 Updates` · Icon `fas fa-arrow-right` · Position After · Spacing `10px`
- **Style:**
  - Alignment: **Center** / **Center** / **Justified**
  - Typography `Open Sans · 15/15/14px · 700 · Transform None · LH 1.2em`
  - Normal: Text `#114835` · Background `#FFD10C`
  - Hover: Text `#114835` · Background `#FFFFFF`
  - Border Radius `6px`
  - Padding `16px 28px 16px 28px` / `15px 24px 15px 24px` / `14px 20px 14px 20px`
- **Advanced:** Margin `8px 0 0 0`

Footer: nothing to build — the site footer stays as is.

**Save Draft.**

---

# PHASE 12 — Responsive check + publish

Open **Responsive Mode** (device icon, top bar). Scroll the whole page on each device.

## Desktop (1440px and 1280px)
- [ ] All section content lines up on the 1140px rail (Hero 900, FAQ 860, Final CTA 820 are intentionally narrower)
- [ ] Day 2 is mirrored (carousel left); Days 1 + 3 text left
- [ ] ACCS cards are equal height
- [ ] Stat cards stack in the right column beside the intro text

## Tablet (1024px and 768px)
- [ ] Intro, Recap days, Awards, Masterclass, Venue are stacked (text first, image/carousel below)
- [ ] Stat cards sit 3 across under the intro text
- [ ] ACCS cards stacked
- [ ] Hero theme line wraps to max 4 lines

## Mobile (390px and 360px)
- [ ] Every button is full width
- [ ] Hero date/location wraps to two lines cleanly
- [ ] "Proudly Hosted by" card stacks (label above logo)
- [ ] Logo grids show 2 per row
- [ ] No sideways scroll (swipe left — the page must not move)
- [ ] FAQ and "Ask Us a Question" open/close; form fields go full width

## Function
- [ ] Both "Sign Up for 2027…" buttons open the popup; test-submit it
- [ ] "Ask Us a Question" form submits and the email arrives
- [ ] ZIM, ACCS and sponsor links open in a new tab
- [ ] Carousel images open in the lightbox
- [ ] Award Winners button points to the correct page

## Content
- [ ] No `[bracket]` notes on the page
- [ ] Only one H1 (hero)
- [ ] All images have alt text
- [ ] Awards date confirmed (24 vs 25 September)
- [ ] Copy notes (Phase 6.6, Phase 7.2) answered by the client

## Publish
1. Click **Publish**
2. View the live URL in an incognito window on desktop and on a real phone
3. Clear the site cache (WP Rocket / LiteSpeed / host) if styles look old
4. Link the recap page from the menu / homepage / 2026 conference page

---

# Final page order

| # | Section | Background |
|---|---|---|
| — | Site header (existing) | — |
| 1 | Hero | Image + `#114835` overlay |
| 2 | Intro + stat cards | `#FFFFFF` |
| 3 | ACCS | `#27B2590F` |
| 4 | Recap Days 1–3 | `#FFFFFF` |
| 5 | Awards | `#114835` |
| 6 | Masterclass & Immersion | `#FFFFFF` |
| 7 | Speakers | `#27B2590F` |
| 8 | Venue | `#FFFFFF` |
| 9 | Partners & Sponsors | `#27B2590F` |
| 10 | FAQ + Ask Us a Question | `#FFFFFF` |
| 11 | Final CTA | `#114835` |
| — | Site footer (existing) | — |
