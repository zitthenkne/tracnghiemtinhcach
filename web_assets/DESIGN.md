# Design System: Ethereal Glass Tarot DNA

## 1. Visual Theme & Atmosphere
An esoteric, heavy Occult Tarot interface fused with Ethereal Glass. The atmosphere is profoundly mystical, occultic, and deeply three-dimensional, evoking a midnight divination ritual. Generous negative space (Variance 6, Density 3, Motion 3 - static focused but fluid). It feels like a sacred, secretive mobile shrine for digital tarot readings.

## 2. Color Palette & Roles
- **Canvas Void** (#0A0505) — Deep, subtly warm spatial background (near-black with a hint of red) for the fog and 3D depth.
- **Frost Glass Surface** (rgba(255, 255, 255, 0.08)) — Primary card and container fill, striking white frosted glass effect.
- **Pure White Light** (#FFFFFF) — Primary text and the glowing Club Logo, ensuring maximum prominence.
- **Club Crimson (Red)** (#E11D48) — Primary accent for active states, vibrant focus rings, and primary CTAs.
- **Medical Cyan (Blue)** (#06B6D4) — Secondary accent for data lines, secondary buttons, and cold atmospheric highlights.
- **Whisper Border** (rgba(255, 255, 255, 0.2)) — Card borders, 1px structural lines simulating the illuminated edges of glass.

## 3. Typography Rules
- **Display:** `Instrument Serif` (or `PP Editorial New`) — Delicate, elegant modern serif for the mystical tarot titles. Track-tight, weight-driven hierarchy.
- **Body:** `Outfit` (or `Geist`) — Relaxed leading, 65ch max-width, geometric and clean sans-serif to contrast the serif headlines.
- **Mono:** `JetBrains Mono` — For numbers, progress indicators, rankings.
- **Banned:** `Inter`, `Times New Roman`, `Georgia`, generic system fonts.

## 4. Component Stylings
* **Buttons:** Glassmorphism pills. Frost glass fill with a 1px solid whisper border. Tactile -1px translate on active state. Accent color on hover via a subtle inner glow. No generic drop shadows.
* **Cards (Tarot/Questions):** Generously rounded corners (1.5rem). Heavy frost glass (`backdrop-filter: blur(24px)`). Diffused drop shadows tinted with Canvas Void to create a levitation effect. 
* **Inputs/Progress:** Thin glass tracks. Club Crimson fill for progress.
* **Loaders:** Skeletal shimmer matching exact layout dimensions. No circular spinners.

## 5. Layout Principles (Mobile-Optimized Tarot Engine)
- **Mobile-First Shrine:** The entire UI is built as a vertical, full-screen mobile experience (`min-h-[100dvh]`) mimicking a digital tarot reading table. On desktop, constrain the layout to a mobile-proportioned center column (max-width 480px) surrounded by a dark void, focusing all attention purely on the cards.
- **Thumb-Zone Architecture:** All primary CTAs, actions, and progress indicators are anchored firmly at the bottom edge (the "altar base") for effortless thumb reach on mobile devices.
- **Card-Stack Gestures:** Questions and results are presented as a physical stack of tarot cards. Use swiping or smooth stack-revealing transitions.
- **Sacred Geometry & Esoterica:** Integrate mystic motifs (zodiac wheels, crescent moons, sacred arches, third-eye symbols) rendered subtly in glowing Medical Cyan or Club Crimson as background elements or border ornaments.
- **Logo Prominence:** The Club Logo must be placed at the absolute top-center (or floating prominently above the hero card) acting as the glowing crown jewel of the layout, rendered in high-contrast Pure White Light.

## 6. Motion & Interaction
- Spring physics for all interactive elements (`stiffness: 100, damping: 20`) for a premium, weighty feel.
- Staggered cascade reveals for the tarot cards (never mount lists instantly).
- Perpetual slow floating micro-loops (translating Y-axis by 5px over 4s) on the main tarot art to simulate levitation in space.

## 7. Anti-Patterns (Banned)
- No emojis anywhere (use SVG icons if needed).
- No `Inter` font.
- No generic serif fonts (`Times New Roman`, `Georgia`, `Garamond`).
- No pure black (`#000000`).
- No neon/outer glow shadows.
- No oversaturated accents.
- No AI copywriting clichés ("Elevate", "Seamless", "Unleash").
- No 3-column equal card layouts.
- No generic AI visuals; use the generated ethereal glass tarot art.
