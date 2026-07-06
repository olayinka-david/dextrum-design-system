export const colorTokens = {
  brand: {
    "ocean-blue": "#3E8ECC",
    "ocean-deep": "#26689A",
    "ocean-muted": "#B9D5EE",
    "dark-blue": "#192B39",
    "deep-teal": "#063946",
    charcoal: "#2F3F4C",
    "matte-black": "#141414",
    "timid-white": "#EAEAEA",
    canvas: "#D9DCDE",
    "canvas-warm": "#E4E6E8",
  },
  oceanRamp: {
    "ocean-90": "#4A9AD4",
    "ocean-70": "#6BAED9",
    "ocean-50": "#8CC2E4",
    "ocean-30": "#B9D5EE",
    "ocean-15": "#D9EAF5",
    "ocean-08": "#EBF4FA",
  },
  charcoalRamp: {
    "charcoal-90": "#445563",
    "charcoal-70": "#5A6B7A",
    "charcoal-50": "#7A8996",
    "charcoal-30": "#A3ADB7",
    "charcoal-15": "#C8CED4",
    "charcoal-08": "#E8EBED",
  },
  tealRamp: {
    "teal-90": "#0E4A58",
    "teal-70": "#1A5F6E",
    "teal-50": "#2A7A8A",
    "teal-30": "#5A9DAA",
    "teal-15": "#A8CDD4",
    "teal-08": "#D4E8EC",
  },
  surface: {
    "surface-0": "var(--surface-0)",
    "surface-1": "var(--surface-1)",
    "surface-2": "var(--surface-2)",
    "surface-3": "var(--surface-3)",
    "surface-inverse": "var(--surface-inverse)",
    "surface-provenance": "var(--surface-provenance)",
    "surface-exception": "var(--surface-exception)",
    "surface-control": "var(--surface-control)",
  },
  semantic: {
    accent: "var(--accent)",
    "accent-muted": "var(--accent-muted)",
    provenance: "var(--provenance)",
    "provenance-muted": "var(--provenance-muted)",
    exception: "var(--exception)",
    "exception-muted": "var(--exception-muted)",
    control: "var(--control)",
    evidence: "var(--evidence)",
  },
  status: {
    pass: "#0D7A4E",
    "pass-bg": "var(--status-pass-bg)",
    fail: "#C42B2B",
    "fail-bg": "var(--status-fail-bg)",
    unknown: "#6B5B95",
    "unknown-bg": "var(--status-unknown-bg)",
    bound: "#B8860B",
    "bound-bg": "var(--status-bound-bg)",
  },
  foreground: {
    fg: "var(--fg)",
    "fg-muted": "var(--fg-muted)",
    "fg-subtle": "var(--fg-subtle)",
    "fg-faint": "var(--fg-faint)",
    "fg-accent": "var(--fg-accent)",
    "fg-provenance": "var(--fg-provenance)",
  },
} as const;

export const typographyTokens = {
  display: { size: "72px", weight: 700, lh: 1.05, tracking: "-0.03em" },
  h1: { size: "48px", weight: 700, lh: 1.05, tracking: "-0.02em" },
  h2: { size: "36px", weight: 700, lh: 1.2, tracking: "-0.02em" },
  h3: { size: "28px", weight: 600, lh: 1.2, tracking: "-0.02em" },
  h4: { size: "22px", weight: 600, lh: 1.2 },
  h5: { size: "18px", weight: 500, lh: 1.2 },
  "body-lg": { size: "17px", weight: 400, lh: 1.55 },
  body: { size: "15px", weight: 400, lh: 1.55 },
  "body-sm": { size: "13px", weight: 400, lh: 1.55 },
  eyebrow: { size: "11px", weight: 500, lh: 1, tracking: "0.14em", transform: "uppercase" },
  micro: { size: "10px", weight: 400, lh: 1.4 },
  mono: { size: "12px", weight: 400, lh: 1.45, family: "JetBrains Mono" },
  "mono-sm": { size: "10px", weight: 500, lh: 1.45, family: "JetBrains Mono" },
} as const;

export const spacingTokens = {
  0: "0",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  8: "32px",
  10: "40px",
  12: "48px",
  16: "64px",
  20: "80px",
  24: "96px",
  32: "128px",
} as const;

export const radiusTokens = {
  none: "0",
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "10px",
  xl: "14px",
  pill: "999px",
} as const;

export const shadowTokens = {
  none: "none",
  sm: "0 1px 2px rgba(25, 43, 57, 0.06)",
  md: "0 4px 12px rgba(25, 43, 57, 0.08)",
  lg: "0 12px 32px rgba(25, 43, 57, 0.10)",
  menu: "0 2px 8px rgba(25, 43, 57, 0.08), 0 16px 40px rgba(25, 43, 57, 0.10)",
  focus: "0 0 0 2px var(--surface-2), 0 0 0 4px var(--ocean-blue)",
  provenance: "0 4px 16px rgba(6, 57, 70, 0.12)",
} as const;

export const motionTokens = {
  easeStandard: "cubic-bezier(0.2, 0, 0, 1)",
  easeExit: "cubic-bezier(0.4, 0, 1, 1)",
  easeSpring: "cubic-bezier(0.34, 1.2, 0.64, 1)",
  instant: "80ms",
  fast: "140ms",
  med: "240ms",
  slow: "400ms",
} as const;

export function countTokens() {
  const colors =
    Object.keys(colorTokens.brand).length +
    Object.keys(colorTokens.oceanRamp).length +
    Object.keys(colorTokens.charcoalRamp).length +
    Object.keys(colorTokens.tealRamp).length +
    Object.keys(colorTokens.surface).length +
    Object.keys(colorTokens.semantic).length +
    Object.keys(colorTokens.status).length +
    Object.keys(colorTokens.foreground).length;
  return {
    colors,
    typography: Object.keys(typographyTokens).length,
    spacing: Object.keys(spacingTokens).length,
    radius: Object.keys(radiusTokens).length,
    shadows: Object.keys(shadowTokens).length,
    motion: Object.keys(motionTokens).length,
    total:
      colors +
      Object.keys(typographyTokens).length +
      Object.keys(spacingTokens).length +
      Object.keys(radiusTokens).length +
      Object.keys(shadowTokens).length +
      Object.keys(motionTokens).length,
  };
}
