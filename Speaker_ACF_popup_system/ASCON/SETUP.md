# ASCON — Remaining setup (Loop Grid + Popup)

Site: **asconafrica.org**  
CPT: **`2026-conference`** (2026 Conference Speakers)  
Code: [`ascon_speaker_popup.php`](ascon_speaker_popup.php) · [`ascon_speaker_popup.js`](ascon_speaker_popup.js)

CPT + ACF fields already exist. Do these remaining steps.

---

## 1. Install snippets

1. **WPCode / Code Snippets** → add PHP from `ascon_speaker_popup.php` (drop `<?php` if the plugin adds it) → front-end → Active  
2. Add JS from `ascon_speaker_popup.js` → footer / Elementor Custom Code → Active  
3. Confirm `jsonScriptId` / `$json_script_id` = `ascon-speaker-json-data`

---

## 2. Loop Grid card

1. **Templates → Theme Builder → Loop Item** (or Loop Grid item) for Speakers  
2. Query / source post type: **`2026-conference`**  
3. On the clickable widget (card container or button) → Advanced:

| Setting | Value |
|---------|--------|
| CSS Classes | `open-speaker-modal` |
| Attributes | `data-speaker-id` → Dynamic → **Post ID** |
| Link / Action | **Open Popup** → speaker popup (step 3) |
4. Place the Loop Grid on the Speakers page; query = `2026-conference`.

---

## 3. Popup template

1. **Templates → Popups → Add New**  
2. Layout: image, names, title, bio, quote, session, social icon, etc.  
3. Advanced → CSS Classes on each widget:

| Class | Content |
|-------|---------|
| `pop-speaker-image` | Photo (`img` inside) |
| `pop-speaker-full-name` | Name + surname (built in PHP) |
| `pop-speaker-name` | First name |
| `pop-speaker-surname` | Surname |
| `pop-speaker-title` | Title |
| `pop-speaker-qualification` | Qualification |
| `pop-speaker-position` | Position |
| `pop-speaker-bio` | Bio |
| `pop-speaker-linkedin` | LinkedIn button (`a` inside; hidden if empty) |
| `pop-speaker-quote` | Quote |
| `pop-speaker-session` | Session title |

Skip any widget you don’t need; comment out that key in JS `fields` (and optionally PHP `$fields`).

---

## 4. Quick verify

1. View Speakers page source → `#ascon-speaker-json-data` with post IDs and field keys  
2. Console (`debug: true`) → click card → SUCCESS + correct popup  
3. Set `debug: false` when live  

| Problem | Check |
|---------|--------|
| Empty JSON | CPT slug `2026-conference`; ACF location fixed; snippet active |
| ID not found | `data-speaker-id` = Post ID on trigger |
| Empty popup | Popup CSS classes match JS selectors |

---

## Field reference (from ACF)

| Label | ACF Name | In JSON / JS key |
|-------|----------|------------------|
| Speaker Image | `speaker_image` | `image` |
| Name | `name` | `name` |
| Surname | `surname` | `surname` |
| Title | `title` | `title` |
| Qualification | `qualification` | `qualification` |
| Position | `position` | `position` |
| Bio | `bio` | `bio` |
| Social Link | `social_link` | `linkedin` |
| Quote | `quote` | `quote` |
| Session Title | `session_title` | `session_title` |
| *(computed)* | — | `full_name` = name + surname (else post title) |
