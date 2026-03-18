# SUNO PROMPT HUB — AI REFERENCE DOCUMENT (v2.0 — 2026 Futuristic Edition)

**PURPOSE**  
This is the COMPLETE self-contained bible. Any AI (Grok, Claude, ChatGPT, etc.) can read this and build the exact system forever. No prior context needed.

## WHAT CHANGED IN v2.0
- New fields for variety (variation_guidance + hook_focus) so you get fresh songs every reuse  
- Artist-level & Album-level copyable style/lyric prompts  
- Full Prompt Mixer + saved templates inside the web app  
- Favorites at every level  
- Full Library accordion browser  
- Duplicate protection  
- Matrix/futuristic UI (green neon, crisp cards, digital scanlines)  
- Recommended mixes & YouTube/Spotify links  
- Hit DNA score (0–10) for radio-ready prioritization  

## NEW FILE SCHEMA (artist_[id].json)

```json
{
  "id": "russell_dickerson",
  "name": "Russell Dickerson",
  "genres": ["Country", "Country-Pop"],
  "era": "2017–2026",
  "color": "#e8943a",
  "bio": "...",
  "producer_notes": "...",
  "style_prompt": "OVERALL ARTIST STYLE PROMPT (copy button on artist card)",
  "lyric_prompt": "OVERALL ARTIST LYRIC PROMPT (copy button on artist card)",
  "recommended_mixes": ["Pair with Thomas Rhett for upbeat family anthems"],
  "songs": [ /* new fields below */ ],
  "albums": [ /* new enhanced album objects */ ]
}
