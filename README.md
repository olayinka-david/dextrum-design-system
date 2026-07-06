# Dextrum Design System

**Verification UI build reference.** Every dashboard, register, and audit surface built for Dextrum must follow this system.

> **Brand:** Dextrum. Tagline: From Insight to Impact.
> **Product:** Neutral verification intelligence layer for multi-party petroleum operations.
> **Model:** CEEP: Controls, Evidence, Exceptions, Provenance.
> **Visual tone:** Precise, calm, audit-register. Not vendor pitch. Not dark ops console.

---

## Quick start

```bash
npm install
npm run dev
```

Opens at **http://localhost:5174**

---

## Index / manifest

| Path | What it is |
|---|---|
| `colors_and_type.css` | Single source of truth. CSS variables for palette, semantic surfaces, status colors, spacing, type scale, motion, layout. |
| `dextrum-design.md` | Token-first documentation with YAML front matter and usage guidelines. |
| `src/lib/tokens.ts` | TypeScript token exports for programmatic access. |
| `src/lib/brand.ts` | Brand messaging and product context from the brand book. |
| `public/dextrum-logo-teal.svg` | Primary logotype for light surfaces. |
| `public/dextrum-logo-grey.svg` | Logotype for dark surfaces. |
| `src/components/` | Primitives (Button, Input, Card, Badge) and patterns (DataTable, ExceptionQueue, DashboardShell). |
| `src/pages/` | Interactive documentation pages. |

---

## Pages

| Page | Content |
|---|---|
| Foundations | Brand overview, CEEP model, audiences, principles |
| Colors | Brand palette, tint ramps, semantic surfaces, status semantics |
| Typography | Clash Grotesk + JetBrains Mono scale with live specimens |
| Spacing & Layout | 4-based scale, radius, elevation, grid rules |
| Motion | Duration, easing, guidelines |
| Voice & Tone | Vocabulary, copy patterns, punctuation rules |
| Logo | Usage rules, clear space, do/don't |
| Iconography | CEEP icon set, construction rules |
| Components | Buttons, inputs, cards, badges with live examples |
| Patterns | Data tables, exception queue, dashboard shell mockup |

---

## Token summary

- **Colors:** 58 tokens (brand, ramps, surfaces, semantic, status, foreground)
- **Typography:** 12 scale entries
- **Spacing:** 13 values
- **Radius:** 7 values
- **Shadows:** 6 values
- **Motion:** 7 values

---

## Tech stack

- Vite + React + TypeScript
- Tailwind CSS v4
- Clash Grotesk (Fontshare) + JetBrains Mono (Google Fonts)
- Light/dark theme toggle

---

## Creative direction

- Light canvas baseline with subtle ocean/teal radial gradients
- Audit-register aesthetic: mono IDs, tabular numerals, precise grid
- Petroleum domain examples: C-001, SHA-256, TCOT, allocation controls
- Status semantics drive color meaning, not decorative alarm

---

## Founder

Jamal Kamaludin · jamal@dextrum.co · dextrum.co
