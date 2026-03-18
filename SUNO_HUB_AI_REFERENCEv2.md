# SUNO PROMPT HUB — AI REFERENCE DOCUMENT (v2.0 — 2026 Matrix Edition)

**PURPOSE**  
Any AI reading this can rebuild the entire system forever. Complete self-contained instructions.

## KEY UPDATES IN v2.0
- variation_guidance + hook_focus fields for infinite fresh generations  
- Artist-level + Album-level + Song-level copyable style/lyric prompts  
- Built-in Prompt Mixer + saved templates  
- Favorites at every level (localStorage)  
- Full Library accordion browser  
- Duplicate song-title protection  
- Matrix/futuristic UI (neon green, scanlines)  
- YouTube/Spotify links + Hit DNA score  
- Daily Hit Study on load  

## FILE STRUCTURE (root only)
- index.html (main app)
- sw.js
- app.webmanifest
- manifest.json
- artist_[id].json files
- SUNO_HUB_AI_REFERENCE.md

## NEW SONG SCHEMA (required fields)
Add these to every song:
"variation_guidance", "hook_focus", "youtube_ref", "spotify_uri", "hit_dna_score"

## HOW TO ADD NEW ARTIST (AI RULE)
1. Research full discography.  
2. Reply first with checklist of albums/tracks.  
3. Build file with looser thematic lyric prompts + variation_guidance.  
4. Update manifest.json.  
5. Never include duplicate song titles (app auto-skips).

All other rules from original document still apply (no artist names in style prompts, etc.).

This document is everything you need.
