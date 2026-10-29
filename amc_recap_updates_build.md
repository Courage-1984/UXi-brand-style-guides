# 2026 AMC Conference Recap — Updates (click by click, no globals)

Source copy: `UPDATES_2026  AMC Conference Recap Page.md` (dated 27/10/2026).

This is **not** a rebuild. Edit the live recap page in Elementor. Paste copy **exactly** from the code blocks. Square-bracket notes (e.g. `[Day 1 Highlights Carousel]`) are build instructions — never put them on the page.

**No Site Settings / globals.** Font, size, colour and spacing are set on each widget.

---

# WHAT CHANGES

| Section | Action |
|---|---|
| 1. Hero | Leave as is |
| 2. Intro | Replace body copy. Replace the 3 stat cards with 4 Key Takeaway cards |
| 3. ACCS | Leave as is |
| 4. Recap | Replace intro paragraph. Split each day into two rows (copy + carousel, then HTML quote overlay + remaining copy). Rename Day 3. Add the Five-Point Livingstone Declaration after Day 3 |
| 5–12. Awards through Footer | Leave as is |

Carousels, buttons, popups, speakers, partners and FAQ stay as they are.

---

# HOW TO READ THIS DOC

Values are **Desktop / Tablet / Mobile**, e.g. `40 / 32 / 28`.

1. Set Desktop first
2. Click the **monitor icon** next to the control → **Tablet** → type the tablet value
3. Click the icon again → **Mobile** → type the mobile value

**Typography:** Style → Typography → pencil → Family `Open Sans`, then size / weight / line-height.

**Padding / Margin:** Top Right Bottom Left. Unlink the chain icon before typing different sides.

| Hex | Use |
|---|---|
| `#114835` | Headings, dark backgrounds, primary buttons |
| `#27B259` | Lines, borders, icons only |
| `#474948` | Body text |
| `#FFD10C` | Pull-quote accent, badges |
| `#FFFFFF` | White |
| `#FFFFFFD9` | White 85% on dark |
| `#27B2590F` | Tint card background |
| `#11483526` | Thin borders |
| `#11483514` | Card shadows |

Elementor adds `10px` padding to new containers — **always type padding, including `0`**.

After styling one card, **right-click → Copy**, then **Paste Style** onto the duplicates.

---

# PHASE 0 — Open the page

1. WP Dashboard → **Pages** → **2026 AMC Conference Recap**
2. **Edit with Elementor**
3. Confirm you are on the published recap page (`/2026-amc-conference-recap/`), not a draft copy
4. Use **Navigator** (bottom-left layers icon) to jump between sections
5. **Save Draft** after every phase

---

# PHASE 1 — Intro: replace the body copy

Keep: the H2 `Three Days. One Continental Conversation.`, the green divider, the **Sign Up for 2027 AMC Conference Updates** button, and the two-column layout for now.

1. Click the **Text Editor** under that H2 (the two original intro paragraphs)
2. Select all → delete
3. Paste:

```text
The 2026 AMC Conference did not just reflect on the state of the industry - it set a binding mandate for its future. Culminating in the signing of a landmark five-point written declaration by the African Marketing Confederation, the Livingstone summit established concrete commitments for African brand sovereignty, ethical AI, and chartered professionalism.

Across three days, marketing leaders transitioned the conversation from seeking visibility to demonstrating measurable economic value. Delegates from across the continent established that while scale can be regional, execution must remain fiercely local. Together, the AMC community laid the groundwork to ensure that Africa's youth, women, and small enterprises actively shape the continent's brand economy, rather than merely observing it.
```

4. Confirm styles are unchanged:
   - Alignment Left
   - Text Color `#474948`
   - Typography `Open Sans · 17/16/16px · 400 · LH 1.7em`
   - Paragraph Spacing `16px`

**Save Draft.**

---

# PHASE 2 — Intro: replace the 3 stat cards with 4 Key Takeaways

The old right column (3 Days / Immersion Tracks / Cross-Continental Voices) is removed. The four takeaways sit **under** the intro copy in a 2×2 grid so they do not make the section too tall.

## 2.1 Flatten the intro to one column
1. Click the **outer Intro section** container
2. **Layout → Direction:** **Column** / **Column** / **Column**
3. **Layout → Align Items:** **Stretch**
4. **Layout → Gaps:** `32px` / `28px` / `24px`

## 2.2 Stretch the copy column
1. Click the **left** inner container (the one with H2 + body + button)
2. **Layout → Width:** `100%` / `100%` / `100%`
3. **Layout → Align Items:** **Flex Start**

## 2.3 Delete the old stat cards
1. Click the **right** inner container (the three stacked cards)
2. Right-click its handle → **Delete**
3. Confirm the three old cards (`3 Days of Plenaries…`, `High-Impact Immersion Tracks`, `Cross-Continental Voices`) are gone

## 2.4 Key Takeaways heading
Drag **Heading** into the Intro section, **below** the copy column (after the Sign Up button).

- **Content:** Title `Key Takeaways from the Summit` · HTML Tag `H3`
- **Style:** Alignment Left · Text Color `#114835` · Typography `Open Sans · 24/22/20px · 700 · LH 1.3em`
- **Advanced:** Margin `8px 0 0 0`

## 2.5 Takeaways row
Drag **Container** under that H3.

**Layout**
- Content Width Full Width
- Width `100%`
- Direction **Row** / **Row** / **Column**
- Wrap **Wrap** (Desktop + Tablet) · **No Wrap** (Mobile)
- Align Items **Stretch**
- Gaps `20px` / `16px` / `14px`

**Advanced:** Padding `0 0 0 0`

## 2.6 Card 1 — build once, then duplicate
Drag **Container** into the takeaways row.

**Layout**
- Content Width Full Width
- Width `calc(50% - 10px)` / `calc(50% - 8px)` / `100%`
- Direction **Column**
- Gaps `8px`

**Style**
- Background Classic → `#27B2590F`
- Border Type **Solid** · Width `0 0 0 5px` · Color `#27B259`
- Border Radius `0 10px 10px 0`

**Advanced:** Padding `24px 24px 24px 24px` / `22px 20px 22px 20px` / `20px 20px 20px 20px`

**Icon**
- **Content:** Icon `fas fa-user-tie` · View Default
- **Style:** Alignment Left · Primary Color `#27B259` · Size `28px` / `26px` / `24px`

**Heading**
- **Content:** Title `The Evolution of the CMO` · HTML Tag `H4`
- **Style:** Alignment Left · Text Color `#114835` · Typography `Open Sans · 18/17/16px · 700 · LH 1.3em`

**Text Editor**
- **Content:**
```text
Marketing leaders must expand their mandates, transitioning from communicators to enterprise growth and wealth creators.
```
- **Style:** Text Color `#474948` · Typography `Open Sans · 15px · 400 · LH 1.6em`

## 2.7 Cards 2–4
Right-click card 1 → **Duplicate** three times. **Paste Style** if anything drifted. Change only icon, H4 and body:

| Card | Icon | H4 | Body |
|---|---|---|---|
| 2 | `fas fa-chart-line` | `Value Over Visibility` | `The industry must shift from reporting on brand awareness to demonstrating tangible economic ROI on the balance sheet.` |
| 3 | `fas fa-landmark` | `Culture as Commercial Capital` | `African heritage is not mere folklore; it is the strategic raw material required to secure global shelf space.` |
| 4 | `fas fa-microchip` | `Context-Driven AI` | `Artificial intelligence deployed without deep local knowledge risks becoming "imported ignorance," underscoring the need for ethical, context-aware governance.` |

Keep the quotation marks around `imported ignorance`.

**Tablet:** two cards per row. **Mobile:** one column.

**Save Draft.**

---

# PHASE 3 — Recap intro paragraph

1. Navigator → Recap section (`Looking Back at the 2026 AMC Conference`)
2. Keep the H2. Click the **Text Editor** under it
3. Replace with:

```text
Across three days, the programme unpacked the practical realities of a rising Africa. Discussions moved beyond standard metrics, highlighting that the modern Chief Marketing Officer must evolve into an enterprise growth leader. Delegates explored how artificial intelligence makes local knowledge more valuable, how the creator economy has bypassed traditional media, and why consumer trust must be treated as a measurable dividend.
```

4. Confirm: Alignment Center · Color `#474948` · Typography `Open Sans · 17/16/16px · 400 · LH 1.7em`

**Save Draft.**

---

# PHASE 4 — Day blocks: split copy + quote overlay (client email 29/10)

The current day layout (heading + quote + full paragraph | carousel) is what they want to replace.

**What they asked for**
1. Split each day’s paragraph in two.
2. Row 1: first half of the copy beside the existing carousel.
3. Row 2: speaker portrait with the quote **overlaid as HTML**, beside the second half of the copy.
4. Alternate columns each day (text / image / text), so Day 2 is mirrored.
5. The quote must be live HTML — **do not** flatten the words into a JPG. Jani can later refine crop, overlay and type; you still build it in Elementor now.

**Portraits to gather before you start**
- [ ] Mohamed Salah Ben Slamia (Day 1) — reuse his Speakers-section headshot if you have one
- [ ] Humphrey Chola (Day 2)
- [ ] Lorraine Mlenga (Day 3)
Crop all three to **1:1, 800×800**, face left-of-centre so overlay text on the right still reads. Alt text: speaker name + role.

Delete the old H4s and the small green quote box under each H3. Keep the three Image Carousels — **cut and paste** them into the new Row 1.

---

## 4.1 Rebuild Day 1 as two rows (do this fully, then duplicate for Days 2 and 3)

### Outer day container
Keep the existing Day 1 block container, or make a new one:

**Layout:** Width `100%` · Direction **Column** · Align Items **Stretch** · Gaps `28px` / `24px` / `20px`  
**Advanced:** Padding `0 0 0 0`

### Row 1 — copy + carousel
Drag **Container** into the day block.

**Layout:** Width `100%` · Direction **Row** / **Column** / **Column** · Justify **Space Between** · Align Items **Center** / **Stretch** / **Stretch** · Gaps `48px` / `32px` / `24px`  
**Advanced:** Padding `0 0 0 0`

**Left — text column** (`50%` / `100%` / `100%` · Direction Column · Align Flex Start · Gaps `12px` · Padding `0`)

Keep (or paste) the existing **DAY 1** badge.

**H3**
```text
Day 1 – Africa Rising in a Multipolar World
```
Tag `H3` · Color `#114835` · Typography `Open Sans · 26/23/21px · 700 · LH 1.3em` · en dash, not a hyphen · Margin `4px 0 0 0`

**Text Editor — paragraph 1**
```text
Day 1 set an ambitious commercial tone, establishing that marketing must serve as a primary engine for continental economic growth. Opening addresses by Dr Matongo Matamwandi and Dr Lucy Nyundo framed the summit's directive, while Keynote Speaker Mamadou Bah challenged delegates to stop treating Africa as a passive emerging market and instead become demand architects.
```
Color `#474948` · Typography `Open Sans · 17/16/16px · 400 · LH 1.7em`

**Right — carousel column** (`50%` / `100%` / `100%`)  
Paste the existing Day 1 **Image Carousel** here. Do not rebuild it. Radius stays `12px`.

### Row 2 — quote overlay + paragraph 2
Drag a second **Container** under Row 1.

**Layout:** Width `100%` · Direction **Row** / **Column** / **Column** · Justify **Space Between** · Align Items **Stretch** · Gaps `48px` / `32px` / `24px`  
**Advanced:** Padding `0 0 0 0`

**Left — quote overlay** (`50%` / `100%` / `100%`)

This is the “more powerful than the mock-up” treatment: photo as background, **HTML quote on top**.

1. Drag **Container**
2. **Layout:** Width `100%` · Min Height `360px` / `320px` / `280px` · Direction **Column** · Justify Content **End** · Align Items **Flex Start** · Gaps `8px`
3. **Style → Background → Classic:** Image = Ben Slamia portrait · Position **Center Center** · Size **Cover**
4. **Style → Background Overlay → Classic:** Color `#114835` · Opacity `0.55`
5. **Advanced:** Padding `28px 28px 28px 28px` / `24px 24px 24px 24px` / `20px 20px 20px 20px` · Border Radius `12px`

**Quote — Text Editor** (not an image)
```text
“Africa’s next great brands will not be built by copying what already works, but by creating what truly matters to African consumers.”
```
- Color `#FFFFFF`
- Typography `Open Sans · 20/18/16px · 600 · Style Italic · LH 1.4em`

**Attribution — Heading**
```text
— Mohamed Salah Ben Slamia, Founder of MUSE Agency
```
- HTML Tag `p`
- Color `#FFD10C`
- Typography `Open Sans · 14/13/13px · 700 · LH 1.4em`

The overlay darkens the photo enough for WCAG contrast. If Jani later supplies a gradient, keep these two text widgets — only change the overlay colour/opacity.

**Right — paragraph 2** (`50%` / `100%` / `100%` · Direction Column · Justify **Center** · Padding `0`)

**Text Editor**
```text
Attendees gained actionable clarity on removing localised infrastructure friction, supported by strategic insights from Shaduri Umutoniwase and Oriane Abouattier Canfrin on converting cultural capital into global competitive advantage. During The Africa Rising Exchange immersion session, facilitated by Helen McIntee Carlisle, industry leaders including Agrippa Mugwagwa and Misikir Mulugeta provided evidence-based models for executing with local precision across complex pan-African markets.
```
Color `#474948` · Typography `Open Sans · 17/16/16px · 400 · LH 1.7em`

**Mobile order for Day 1:** badge → H3 → para 1 → carousel → quote overlay → para 2. That is already the DOM order with Column on tablet/mobile.

**Save Draft.**

---

## 4.2 Day 2 — mirror the columns

1. Right-click the finished **Day 1 outer container** → **Duplicate**
2. On **both** inner rows, set Direction:
   - Desktop: **Row Reverse**
   - Tablet: **Column**
   - Mobile: **Column**
3. That puts carousel left / copy right on Row 1, and para 2 left / quote overlay right on Row 2 — the “text, image, text” zigzag they asked for.

Change content only:

Badge: `DAY 2`

H3:
```text
Day 2 – Leadership, Trust and the AI-Enabled Economy
```

**Paragraph 1** (beside carousel):
```text
Day 2 confronted the digital economy, equipping delegates with strategies to govern data trust, leverage AfCFTA trade corridors, and demonstrate tangible ROI on corporate balance sheets. Following an opening address by Hermawan Kartajaya, Keynote Speaker Dr Bolajoko Bayo-Ajayi and Kwabena Agyekum tackled ethical AI governance, setting the stage for Keynote Speaker Mwewa Besa to outline marketing's role in driving continental market access.
```

Carousel: **Edit Gallery** → swap to Day 2 photos.

**Quote overlay:** background = Humphrey Chola portrait.

Quote:
```text
“Until African balance sheets can price intangibles—trademarks, creative rights, brand equity—we will keep financing the lowest-margin end of our own economies. Marketing builds the asset; finance must learn to value it.”
```

Attribution:
```text
— Humphrey Chola, Lead: Strategic Communications at Agra
```

**Paragraph 2:**
```text
The focus then shifted to practical application during the Solutions Studio Live immersion session, where Terushka Heuvel and Tim Ekandjo demonstrated actionable methodologies for managing algorithmic reputation and proving economic impact. Rounding out the agenda, Humphrey Chola highlighted the commercial value of intangible assets before Special Feature Speaker Mpumelelo Zondi explored creator-driven discovery - proving that authentic local context remains the ultimate digital currency.
```

Because Row Reverse on mobile would put the carousel above the heading, **Tablet and Mobile must stay Column** (not Column Reverse). Heading and para 1 stay first.

**Save Draft.**

---

## 4.3 Day 3 — same structure as Day 1

Duplicate **Day 1** (not Day 2). Direction stays **Row** / **Column** / **Column**.

Badge: `DAY 3`

H3:
```text
Day 3 – Africa Rising at the Global Marketing Table
```

**Paragraph 1:**
```text
The final day turned the lens toward global competitiveness, equipping attendees to build resilient, future-ready brand equity. Keynote Speaker Lorraine Mlenga delivered a compelling case for aligning sustainability and purpose with consumer trust, establishing that true brand transformation requires anticipating long-term continental needs.
```

Carousel: swap gallery to Day 3 photos.

**Quote overlay:** background = Lorraine Mlenga portrait.

Quote:
```text
“Transformation begins when we look beyond the obvious—beyond what the market is today, beyond what customers are asking for today, and towards what they will need tomorrow.”
```

Attribution:
```text
— Keynote Speaker Lorraine Mlenga, Strategy, Digital & Data Executive at Old Mutual
```

**Paragraph 2:**
```text
This strategic momentum carried directly into the closing plenary led by Keynote Speaker Euphrem Odilon Gbaguidi, alongside David Balikuddembe, Gillian Rusike, and Kwabena Agyekum. Together, delegates defined how African marketers must actively shape global commercial narratives in an AI-enabled era, setting the stage for Dr Matongo Matamwandi to officially deliver the continental leadership roadmap and declaration.
```

**Save Draft.**

---

## 4.4 What to send Jani (optional polish, not a blocker)

You can publish the overlay as specified. If Jani is looping in, ask only for:

- A 16:9 or 4:5 crop of each portrait with the face on the **left**, so the HTML quote has a quieter right half
- Overlay recipe: `#114835` at `0.45`–`0.60`, or a left-to-right gradient if the face is too dark
- Do **not** ask for a designed quote graphic. The words stay in Elementor so they remain selectable, translatable and crawlable

---

## 4.5 Day-block map (desktop)

| | Left | Right |
|---|---|---|
| **Day 1 row 1** | Badge + H3 + para 1 | Carousel |
| **Day 1 row 2** | Quote overlay (Ben Slamia) | Para 2 |
| **Day 2 row 1** | Carousel | Badge + H3 + para 1 |
| **Day 2 row 2** | Para 2 | Quote overlay (Chola) |
| **Day 3 row 1** | Badge + H3 + para 1 | Carousel |
| **Day 3 row 2** | Quote overlay (Mlenga) | Para 2 |

---

# PHASE 5 — Five-Point Livingstone Declaration

Add this **inside the Recap section**, after the Day 3 block and **before** the Awards section.

## 5.1 Declaration container
1. Click the Recap section handle
2. Drag a **Container** to the bottom of that section (below Day 3)

**Layout**
- Content Width Full Width
- Width `100%`
- Direction **Column**
- Align Items **Stretch**
- Gaps `24px` / `20px` / `16px`

**Style**
- Background Classic `#114835`
- Border Radius `16px`

**Advanced**
- Padding `48px 40px 48px 40px` / `40px 28px 40px 28px` / `32px 20px 32px 20px`
- Margin `24px 0 0 0`

## 5.2 Heading
Drag **Heading** in.

- **Content:** Title `The Five-Point Livingstone Declaration` · HTML Tag `H2`
- **Style:** Alignment Center · Text Color `#FFFFFF` · Typography `Open Sans · 36/30/26px · 700 · LH 1.2em`

Optional divider above it: Solid · Width `56px` · Alignment Center · Color `#FFD10C` · Weight `4px`

## 5.3 Points row
Drag **Container** under the heading.

**Layout**
- Width `100%`
- Direction **Row** / **Row** / **Column**
- Wrap **Wrap** (Desktop + Tablet)
- Align Items **Stretch**
- Gaps `16px` / `14px` / `12px`

**Advanced:** Padding `0 0 0 0`

## 5.4 Point card — build once, duplicate four times
Drag **Container** into the points row.

**Layout**
- Width `calc(20% - 13px)` / `calc(50% - 7px)` / `100%`
- Direction **Column**
- Gaps `10px`

On **Desktop** five cards sit in one row. If `calc(20% - 13px)` wraps, use `19%` instead.

**Style**
- Background Classic `#FFFFFF`
- Border Type Solid · Width `4px 0 0 0` · Color `#FFD10C`
- Border Radius `10px`

**Advanced:** Padding `24px 20px 24px 20px` / `22px 18px 22px 18px` / `20px 18px 20px 18px`

**Heading** (number)
- **Content:** Title `01` · HTML Tag `div`
- **Style:** Text Color `#27B259` · Typography `Open Sans · 13px · 700 · LH 1em · LS 1.5px`

**Heading** (title)
- **Content:** Title `Voice Before Volume` · HTML Tag `H3`
- **Style:** Text Color `#114835` · Typography `Open Sans · 18/17/16px · 700 · LH 1.3em`

**Text Editor**
- **Content:**
```text
African brands must speak with a coordinated continental voice to build brand sovereignty and position the continent as a demand architect.
```
- **Style:** Text Color `#474948` · Typography `Open Sans · 14px · 400 · LH 1.6em`

## 5.5 Points 2–5
Duplicate the card four times. Change number, H3 and body:

| # | H3 | Body |
|---|---|---|
| `02` | `Trust as a Currency` | `Marketing leadership in the AI era must be grounded in transparency, consumer dignity, and ethical data practices.` |
| `03` | `Elevating the Craft` | `Raising marketing to a chartered profession across the continent through continuous development, ethical standards, and industry-academia partnerships.` |
| `04` | `Value for the Many` | `Ensuring youth, women, and small enterprises are actively resourced to shape and benefit from Africa’s growing brand economy.` |
| `05` | `Local Roots to Global Shelf Space` | `Converting Africa’s cultural heritage and creativity into global market access, brand power, and lasting economic value alongside the AfCFTA.` |

**Tablet:** 2 + 2 + 1 (the fifth card goes full width, or keep 50% and centre it). **Mobile:** one column, `01`–`05` in order.

**Save Draft.**

---

# PHASE 6 — Do not touch

Leave these exactly as they are:

- Hero
- Intro Sign Up button / 2027 popup
- ACCS
- Day 1–3 image carousels
- Awards
- Masterclass & Immersion
- Speakers
- Venue
- Partners & Sponsors
- FAQ + Ask Us a Question
- Final CTA
- Footer

---

# PHASE 7 — Responsive check + publish

## Desktop (1440 and 1280)
- [ ] Intro copy is full width; four takeaway cards sit 2×2 under it
- [ ] Each day is two rows: para 1 + carousel, then quote overlay + para 2
- [ ] Day 2 is mirrored (carousel left on row 1; quote overlay on the right of row 2)
- [ ] Quote text is HTML on top of the portrait, not part of the image
- [ ] Day 3 heading is `Day 3 – Africa Rising at the Global Marketing Table`
- [ ] Declaration band is dark green; five white cards in one row
- [ ] Awards still follows immediately after the declaration

## Tablet (1024 and 768)
- [ ] Takeaways 2 per row
- [ ] Declaration 2 per row (fifth wraps)
- [ ] Pull-quotes do not overflow

## Mobile (390 and 360)
- [ ] Takeaways, days and declaration stack in order
- [ ] No sideways scroll
- [ ] Sign Up button still full width and still opens the 2027 popup

## Content
- [ ] No `[bracket]` notes on the page
- [ ] Old stat cards gone
- [ ] Old day H4s and the small green quote boxes are gone
- [ ] `imported ignorance` still in quotes
- [ ] En dashes on all three day titles

## Publish
1. **Update**
2. View `/2026-amc-conference-recap/` in incognito
3. Clear cache if the old intro/stat cards still show

---

# Final Recap-section order (after this update)

1. H2 Looking Back at the 2026 AMC Conference + new paragraph
2. Day 1 — para 1 + carousel, then Ben Slamia overlay + para 2
3. Day 2 — mirrored: carousel + para 1, then para 2 + Chola overlay
4. Day 3 — para 1 + carousel, then Mlenga overlay + para 2
5. The Five-Point Livingstone Declaration (new)
6. Awards (unchanged)
