# Speaker ACF Popup — Setup

PHP dumps all speakers as JSON in the footer. JS fills an Elementor popup when a Loop Grid card is clicked.

| File | Role |
|------|------|
| [`popup_system_php_WHITELABEL.php`](popup_system_php_WHITELABEL.php) | CPT + footer JSON |
| [`popup_system_js_WHITELABEL.js`](popup_system_js_WHITELABEL.js) | Click → inject popup |
| `*_example_01.*` | Old site-specific reference only |

**Needs:** ACF, Elementor Pro (Loop Grid + Popup), Code Snippets (or similar)

**Rule:** CPT slug in PHP must be identical for register + query (`speaker` ≠ `speaker` with different punctuation).

---

## 1. CPT

In PHP CONFIG: set `$cpt_slug` / `$cpt_label`.  
`$register_cpt = true` to create it, or `false` + existing slug.

Verify slug: edit a speaker → URL `post_type=speaker` → use that value.

---

## 2. ACF fields

**ACF → Field Groups** → Location: Post Type = Speakers.  
Use each field’s **Name** (slug), not Label. Put those Names in PHP `$acf_map`.

| Popup field | Default ACF Name | Type |
|-------------|------------------|------|
| image | `speaker_image` | Image (array or URL; falls back to Featured Image) |
| full_name | `full_name` | Text (empty → post title) |
| name | `name` | Text |
| surname | `surname` | Text |
| title | `title` | Text |
| qualification | `qualification` | Text |
| position | `position` | Text |
| bio | `bio` | WYSIWYG / Textarea |
| linkedin | `linkedin_link` | URL |
| quote | `quote` | Text / Textarea |
| session_title | `session_title` | Text |

**Remove a field:** delete/comment its line in PHP `$acf_map` and remove its JS fill line.  
**Rename a slug:** change only the field name value in PHP `$acf_map`.

---

## 3. Loop Grid card

On the clickable widget (Advanced):

| Setting | Value |
|---------|--------|
| CSS Classes | `open-speaker-modal` |
| Attributes | `data-speaker-id` = Dynamic → **Post ID** |
| Action | Open Popup → your speaker popup |

Loop Grid query = Speakers CPT.

---

## 4. Popup template

Add a CSS class per widget (Advanced → CSS Classes):

| Class | Fills |
|-------|--------|
| `pop-speaker-image` | Image (`img` inside) |
| `pop-speaker-full-name` | Full name |
| `pop-speaker-name` | First name |
| `pop-speaker-surname` | Surname |
| `pop-speaker-title` | Title |
| `pop-speaker-qualification` | Qualification |
| `pop-speaker-position` | Position |
| `pop-speaker-bio` | Bio |
| `pop-speaker-linkedin` | LinkedIn button (`a` inside; hidden if empty) |
| `pop-speaker-quote` | Quote |
| `pop-speaker-session` | Session title |

Image / LinkedIn: class on the **widget**; JS targets `img` / `a` inside.  
Unused fields can simply be removed from the popup and the matching PHP / JS mapping.

---

## 5. Install snippets

1. **PHP** — paste WHITELABEL PHP (drop `<?php` if Snippets adds it). Frontend/everywhere. Edit CONFIG.
2. **JS** — paste WHITELABEL JS in footer/Custom Code. Keep `jsonScriptId` = PHP `$json_script_id`.
3. Set `debug: false` when live.

---

## 6. Verify

1. View source → `#speaker-json-data` has post IDs as keys and your field keys.
2. Console (`debug: true`) → click card → SUCCESS + correct popup content.

| Problem | Fix |
|---------|-----|
| Empty / missing JSON | CPT slug mismatch; snippet inactive |
| ID not found | Missing/wrong `data-speaker-id` |
| Empty popup | Wrong/missing CSS classes; delay too low |
| No image / LinkedIn | Empty ACF + no featured image; class not on image/link widget |

---

## Cheat sheet

**Sync:** PHP `$json_script_id` ↔ JS `jsonScriptId`

**Triggers:** `open-speaker-modal` · `data-speaker-id` · `#speaker-json-data`
