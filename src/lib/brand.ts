export const brand = {
  name: "Dextrum",
  tagline: "From Insight to Impact",
  version: "1.0",
  year: "2026",
  domain: "dextrum.co",
  positioning:
    "SWIFT for petroleum operations: a trusted verification layer above the operators, owned by none and paid by all.",
  colors: {
    darkBlue: "#192B39",
    oceanBlue: "#3E8ECC",
    charcoalBlue: "#2F3F4C",
    matteBlack: "#141414",
    timidWhite: "#EAEAEA",
    canvas: "#D9DCDE",
    deepTeal: "#063946",
  },
  fonts: {
    sans: "var(--font-clash)",
    mono: "var(--font-mono)",
  },
  product: {
    oneLiner:
      "A neutral verification intelligence layer that sits above operational systems in multi-party petroleum operations.",
    analogy:
      "SWIFT for petroleum operations: a trusted verification layer above the operators, owned by none and paid by all.",
    model: "CEEP: Controls, Evidence, Exceptions, Provenance",
    proofPoint: "Proven first on Malaysia PSC crude at the TCOT terminal",
    wedges: ["LNG governance", "CCUS"],
    vocabulary: {
      preferred: ["audit-defensible", "tamper-evident", "neutral record", "continuous verification"],
      avoid: ["AI-powered platform", "immutable", "compliant", "revolutionary"],
    },
  },
  audiences: [
    { role: "Commercial Manager", need: "Monitor allocation, lifting, and valuation reconciliation" },
    { role: "Finance Manager", need: "Cost recovery, FX, and settlement within tolerance" },
    { role: "JV Partner", need: "Independently verify the operator's numbers" },
    { role: "External Auditor", need: "Issue ISAE 3000 opinions from continuous evidence" },
  ],
  founder: {
    name: "Jamal Kamaludin",
    title: "Founder",
    email: "jamal@dextrum.co",
  },
  status: ["PASS", "FAIL", "UNKNOWN", "BOUND"] as const,
} as const;
