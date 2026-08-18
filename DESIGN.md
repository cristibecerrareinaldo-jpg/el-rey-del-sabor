# Design Brief

## Direction

El Rey del Sabor — fast-food landing page for a fried chicken (pollo broaster) restaurant, mascot-driven and high-contrast.

## Tone

Bold commercial fast-food maximalism: black canvas, vibrant red, golden yellow, thick 3px borders, chunky offset pop shadows — energetic, friendly, appetizing, never timid.

## Differentiation

A crowned-chicken mascot anchors every section; thick yellow-on-black borders and offset red/yellow pop shadows give every card and button a tangible, sticker-like 3D presence.

## Color Palette

| Token      | OKLCH          | Role                                       |
| ---------- | -------------- | ------------------------------------------ |
| background | 0.16 0.02 25   | Warm near-black canvas (matches logo bg)   |
| foreground | 0.97 0.005 90  | Warm white text / outlines                 |
| card       | 0.21 0.02 25   | Elevated dark surface for menu cards       |
| primary    | 0.58 0.24 27   | Vibrant red #E30613 — buttons, ribbons     |
| accent     | 0.85 0.17 90   | Golden yellow #FFD700 — borders, prices    |
| secondary  | 0.30 0.10 27   | Deep red surface for alt sections          |
| muted      | 0.24 0.015 25  | Subtle dark surface for footer/zebra rows  |

## Typography

- Display: Bricolage Grotesque (800) — headings, hero, buttons, badges
- Body: Nunito (400/600/700) — paragraphs, UI labels, prices
- Mono: Geist Mono — small technical labels only
- Scale: hero `text-5xl md:text-7xl font-extrabold tracking-tight`, h2 `text-3xl md:text-5xl`, label `text-sm font-extrabold uppercase tracking-widest`, body `text-base md:text-lg`

## Elevation & Depth

Card surfaces sit on the black canvas with thick 3px foreground borders and offset pop shadows (4-8px, yellow or red); hover lifts the card and grows the shadow for a tactile sticker feel.

## Structural Zones

| Zone    | Background              | Border                          | Notes                                  |
| ------- | ----------------------- | ------------------------------- | -------------------------------------- |
| Header  | `bg-background` + blur  | `border-b-[3px] border-accent` | Sticky, logo + name + anchor nav        |
| Hero    | `bg-rays-king` overlay  | —                               | Mascot + slogan + dual CTAs            |
| Content | `bg-background` / `bg-secondary` alternating | — | Menu cards on `bg-card`, zebra rows   |
| Footer  | `bg-muted`              | `border-t-[3px] border-accent`  | Mascot + WhatsApp + hours              |

## Spacing & Rhythm

Section gaps `py-16 md:py-24`; content grouped in `container` with `gap-6 md:gap-8`; micro-spacing `gap-2` for badges/prices; generous breathing room around mascot.

## Component Patterns

- Buttons: pill `rounded-full`, 3px foreground border, offset pop shadow (`.btn-king`, `.btn-king-accent`, `.btn-king-ghost`)
- Cards: `rounded-2xl`, 3px border, red pop shadow, hover lift (`.card-king`)
- Badges: pill `rounded-full`, yellow bg, 2px border (`.badge-king`)
- Ribbons: red gradient pill with uppercase tracking (`.ribbon-king`)

## Motion

- Entrance: `animate-pop-in` staggered on hero + cards (0.5s spring)
- Hover: card lift + shadow grow, button translate + shadow grow (200ms)
- Decorative: mascot `animate-float-soft` 4s, marquee ribbon `animate-marquee` 24s

## Constraints

- Dark mode is primary; no light mode shipped
- Only red, yellow, white, black — no extra hues
- Thick borders (3px) and pop shadows are mandatory on every elevated surface
- WhatsApp floating button is the only contact path (no forms)

## Signature Detail

Offset yellow/red pop shadows on every card and button create a die-cut sticker aesthetic — the brand feels physical, collectible, and unmistakably fast-food.
