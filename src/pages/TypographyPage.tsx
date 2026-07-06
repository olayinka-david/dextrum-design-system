import { SectionHead, DocCard, SpecRow } from "../components/docs/DocPrimitives";
import { typographyTokens } from "../lib/tokens";

export function TypographyPage() {
  return (
    <div>
      <SectionHead
        num="Tokens"
        title="Typography"
        description="Clash Grotesk carries display and UI text. JetBrains Mono handles identifiers, hashes, control IDs, and audit metadata."
      />

      <div className="grid grid-cols-2 gap-6 mb-10">
        <DocCard title="Clash Grotesk">
          <p className="text-4xl font-bold tracking-tight text-[var(--dark-blue)] mb-2">Dextrum</p>
          <p className="text-xl font-medium text-[var(--accent)] mb-4">From Insight to Impact</p>
          <p className="text-sm text-[var(--fg-muted)] leading-relaxed">
            Weights 300, 400, 500, 600, 700. Headlines use tight tracking (-0.02 to -0.03em).
            Body stays calm at 1.55 line height.
          </p>
        </DocCard>
        <DocCard title="JetBrains Mono">
          <p className="mono text-lg text-[var(--fg)] mb-2">C-001 · a3f8c291e4b7d0c9</p>
          <p className="mono text-sm text-[var(--fg-accent)] mb-4">SHA-256 · TCOT · PASS</p>
          <p className="text-sm text-[var(--fg-muted)]">
            All control IDs, hashes, timestamps, and status labels use mono with tabular numerals.
          </p>
        </DocCard>
      </div>

      <DocCard title="Type scale">
        {Object.entries(typographyTokens).map(([name, spec]) => {
          const s = spec as { size: string; weight: number; lh: number; tracking?: string; transform?: string; family?: string };
          return (
          <SpecRow
            key={name}
            label={name}
            value={`${s.size} / ${s.weight}${s.tracking ? ` / ${s.tracking}` : ""}`}
            sample={
              <span
                style={{
                  fontSize: s.size,
                  fontWeight: s.weight,
                  lineHeight: s.lh,
                  letterSpacing: s.tracking,
                  fontFamily: s.family,
                  textTransform: s.transform as React.CSSProperties["textTransform"],
                }}
                className="text-[var(--fg)] truncate"
              >
                {name === "mono" || name === "mono-sm"
                  ? "C-001 · 94.2% · PASS"
                  : "Verification intelligence"}
              </span>
            }
          />
        );})}
      </DocCard>
    </div>
  );
}

