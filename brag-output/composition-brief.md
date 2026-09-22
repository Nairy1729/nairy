# Hyperframes Composition Brief: Narendra Developer Reel

## Objective
Create a premium 16:9 cinematic personal-brand reel for Narendra's developer portfolio using modular Hyperframes sub-compositions.

## Output
- Composition directory: `brag-output/composition/`
- Rendered video: `brag-output/brag.mp4`
- Poster image: `brag-output/brag.jpg`
- Format: Landscape — 1920×1080 (16:9)
- Duration: 28.0 seconds (840 frames @ 30fps)

## Source Material
- Portfolio codebase: Next.js 16, React 19, Tailwind CSS v4, Framer Motion, Three.js
- Authentic photo: `public/narendra.jpg`
- Featured projects:
  - *What If: Another Life* (Interactive 3D WebGL simulation, custom GLSL shaders, 60fps)
  - *WordDrop* (Native Android vocabulary app, Kotlin, Room SQLite DB, 100% offline)
  - *Hexaware Technologies Enterprise Backend* (Java 17+, Spring Boot 3, JWT, PostgreSQL, Docker)

## Creative Direction
- Tone: Cinematic, polished, confident, articulate engineering professional
- Voiceover: First person ("I build", "I turn ideas", "I am Narendra")
- Music: Electronic ambient groove (`assets/music/bgm.mp3`) mixed under narration
- Sound Design: 8 tactile UI and transition SFX aligned to micro-interaction keyframes

## Architecture
- Root composition: `index.html` managing sequential mounting of 6 sub-compositions:
  - `compositions/scene1.html` (The Hook)
  - `compositions/scene2.html` (Portfolio Hero)
  - `compositions/scene3.html` (What If: Another Life)
  - `compositions/scene4.html` (WordDrop)
  - `compositions/scene5.html` (Philosophy & Bento Matrix)
  - `compositions/scene6.html` (Outro & Brand Lockup)
- All 15 audio tracks (1 BGM + 6 VO + 8 SFX) synchronized with exact millisecond bounds.
