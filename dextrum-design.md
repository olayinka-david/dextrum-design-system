---
version: "1.0"
name: Dextrum
description: The Dextrum brand design system for verification dashboards, exception queues, and audit-ready surfaces in multi-party petroleum operations.
colors:
  ocean-blue: "#3E8ECC"
  ocean-deep: "#26689A"
  dark-blue: "#192B39"
  deep-teal: "#063946"
  charcoal: "#2F3F4C"
  matte-black: "#141414"
  timid-white: "#EAEAEA"
  canvas: "#D9DCDE"
  surface-0: "{colors.canvas}"
  surface-1: "{colors.timid-white}"
  surface-2: "#FFFFFF"
  surface-provenance: "#F0F7FC"
  surface-exception: "#FDF8F0"
  accent: "{colors.ocean-blue}"
  provenance: "{colors.deep-teal}"
  status-pass: "#0D7A4E"
  status-fail: "#C42B2B"
  status-unknown: "#6B5B95"
  status-bound: "#B8860B"
typography:
  display:
    fontFamily: Clash Grotesk
    fontSize: 72px
    fontWeight: 700
    lineHeight: 75.6px
    letterSpacing: -0.03em
  h1:
    fontFamily: Clash Grotesk
    fontSize: 48px
    fontWeight: 700
    lineHeight: 50.4px
    letterSpacing: -0.02em
  h2:
    fontFamily: Clash Grotesk
    fontSize: 36px
    fontWeight: 700
    lineHeight: 43.2px
    letterSpacing: -0.02em
  h3:
    fontFamily: Clash Grotesk
    fontSize: 28px
    fontWeight: 600
    lineHeight: 33.6px
  body:
    fontFamily: Clash Grotesk
    fontSize: 15px
    fontWeight: 400
    lineHeight: 23.25px
  eyebrow:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: 500
    lineHeight: 11px
    letterSpacing: 0.14em
    textTransform: uppercase
  mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: 400
    lineHeight: 17.4px
spacing:
  1: 4px
  2: 8px
  4: 16px
  8: 32px
  16: 64px
  24: 96px
  32: 128px
  base: 4px
rounded:
  none: 0
  xs: 2px
  sm: 4px
  md: 6px
  lg: 10px
  xl: 14px
  pill: 999px
shadows:
  none: none
  sm: "0 1px 2px rgba(25, 43, 57, 0.06)"
  md: "0 4px 12px rgba(25, 43, 57, 0.08)"
  menu: "0 2px 8px rgba(25, 43, 57, 0.08), 0 16px 40px rgba(25, 43, 57, 0.10)"
  focus: "0 0 0 2px #FFFFFF, 0 0 0 4px #3E8ECC"
motion:
  ease-standard: "cubic-bezier(0.2, 0, 0, 1)"
  ease-exit: "cubic-bezier(0.4, 0, 1, 1)"
  fast: 140ms
  medium: 240ms
  slow: 400ms
layout:
  gutter: 32px
  max-content: 1280px
  sidebar-width: 260px
  topbar-height: 48px
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.timid-white}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.sm}"
    padding: "10px 16px"
  button-provenance:
    backgroundColor: "{colors.provenance}"
    textColor: "{colors.timid-white}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.sm}"
    padding: "10px 16px"
  status-pass:
    backgroundColor: "#E6F5EE"
    textColor: "{colors.status-pass}"
    border: "1px solid #9DD4B8"
  status-fail:
    backgroundColor: "#FDEAEA"
    textColor: "{colors.status-fail}"
    border: "1px solid #F0A8A8"
  card:
    backgroundColor: "{colors.surface-2}"
    border: "1px solid rgba(20, 20, 20, 0.08)"
    rounded: "{rounded.xl}"
    padding: 24px
---

# Dextrum Design System

## Overview

The Dextrum design system is the working brand system for neutral verification intelligence in multi-party petroleum operations. The aesthetic is precise, calm, and audit-register: a trusted record that every party can verify independently. It should never feel like a vendor pitch, a dark ops console, or a generic SaaS dashboard.

This file follows the token-first structure adapted from the Utopia Studio reference: concrete values live in the YAML front matter, while the sections below explain how to use them.

## Colors

The palette extends the brand book baseline with semantic layers. Ocean Blue `#3E8ECC` drives attention at 8-15% of any composition. Dark Blue `#192B39` carries structure. Deep Teal `#063946` marks provenance surfaces. Canvas `#D9DCDE` is the default light baseline.

Status semantics are fixed: PASS, FAIL, UNKNOWN, BOUND. Never substitute with synonyms. Each status has foreground, background, and border tokens.

Surface tokens create depth without heavy shadows: surface-0 (canvas), surface-1 (elevated), surface-2 (card white), surface-provenance, surface-exception, surface-control.

Subtle ocean and teal gradients are permitted for hero sections and provenance cards. They should feel like light refracting through water, not decorative atmosphere.

## Typography

Clash Grotesk is the canonical UI and display face. JetBrains Mono handles control IDs, SHA-256 hashes, timestamps, and status labels.

Headlines use tight tracking (-0.02 to -0.03em) and weights 600-700. Body copy is sentence case at 400 weight with 1.55 line height. Eyebrows are uppercase mono at 11px with wide tracking.

Stats, coverage percentages, and control counts use tabular numerals in mono.

## Layout

Spacing follows a 4-based scale: 4, 8, 16, 32, 64, 96, 128px. Verification registers use an 8px grid unit for row alignment.

Dashboards are denser than marketing surfaces but maintain calm whitespace. Use 32px as the standard gutter and 1280px as maximum content width.

## Elevation and Depth

Cards use hairline borders and surface shifts, not heavy drop shadows. Shadow tokens exist for menus, tooltips, and provenance cards only.

Rule system: 1px hairline for dividers, 2px ocean for focus, 3px teal for provenance accent.

## Motion

Motion is functional and restrained. Use `cubic-bezier(0.2, 0, 0, 1)` for entrances. Durations are 140ms for hover, 240ms for panel reveal, 400ms for page transition.

Status changes are instant. Never animate PASS to FAIL transitions. Respect `prefers-reduced-motion`.

## Components

The component tokens describe the verification UI vocabulary:

- Primary button: Ocean Blue fill, white uppercase mono label.
- Provenance button: Deep Teal fill for chain-of-custody actions.
- Status badges: PASS, FAIL, UNKNOWN, BOUND with semantic color triplets.
- Cards: white or provenance wash with hairline border and 14px radius.
- Register tables: mono IDs, sans control names, status badges in last column.

## Logo and Marks

Use `dextrum-logo-teal.svg` on light surfaces and `dextrum-logo-grey.svg` on dark. In dashboard chrome, place top-left. In audit exports, place bottom-left as trust anchor.

The DX monogram serves as compact mark in favicons and provenance stamps.

## Iconography

Icons are constructed from solid geometric primitives: rectangles, circles, and triangles. They mark CEEP sections: Controls, Evidence, Exceptions, Provenance.

No icon fonts. No Lucide, Heroicons, or Feather. No emoji.

## Voice and Content

The voice is neutral, precise, calm, and defensible. Preferred terms: audit-defensible, tamper-evident, neutral record, continuous verification.

Avoid: AI-powered platform, immutable, compliant, revolutionary. No em dashes or en dashes in copy.

## Do's and Don'ts

- Use status semantics exactly: PASS, FAIL, UNKNOWN, BOUND.
- Set identifiers in JetBrains Mono with tabular numerals.
- Keep Ocean Blue for accent, not canvas fill.
- Use provenance teal for chain-of-custody surfaces.
- Do not introduce colors outside the token palette.
- Do not make exceptions visually louder than the register.
- Do not use hype language or vendor pitch tone.
