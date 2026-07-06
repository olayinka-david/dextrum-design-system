import { SectionHead, DocCard, TokenSwatch } from "../components/docs/DocPrimitives";
import { colorTokens } from "../lib/tokens";
import { StatusBadge } from "../components/primitives/Badge";

export function ColorsPage() {
  return (
    <div>
      <SectionHead
        num="Tokens"
        title="Color system"
        description="The palette extends the brand book baseline with semantic layers for surfaces, status, provenance, and exceptions. Ocean Blue drives attention at 8-15% of any composition."
      />

      <DocCard title="Brand palette" className="mb-8">
        <div className="grid grid-cols-4 gap-5">
          {Object.entries(colorTokens.brand).map(([name, hex]) => (
            <TokenSwatch key={name} name={name} value={hex} hex={hex} />
          ))}
        </div>
      </DocCard>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <DocCard title="Ocean ramp">
          <div className="grid grid-cols-3 gap-3">
            {Object.entries(colorTokens.oceanRamp).map(([name, hex]) => (
              <TokenSwatch key={name} name={name} value={hex} hex={hex} />
            ))}
          </div>
        </DocCard>
        <DocCard title="Charcoal ramp">
          <div className="grid grid-cols-3 gap-3">
            {Object.entries(colorTokens.charcoalRamp).map(([name, hex]) => (
              <TokenSwatch key={name} name={name} value={hex} hex={hex} />
            ))}
          </div>
        </DocCard>
        <DocCard title="Teal ramp">
          <div className="grid grid-cols-3 gap-3">
            {Object.entries(colorTokens.tealRamp).map(([name, hex]) => (
              <TokenSwatch key={name} name={name} value={hex} hex={hex} />
            ))}
          </div>
        </DocCard>
      </div>

      <DocCard title="Semantic surfaces" className="mb-8">
        <div className="grid grid-cols-4 gap-4">
          {[
            { name: "surface-0", desc: "Canvas base" },
            { name: "surface-1", desc: "Elevated panel" },
            { name: "surface-2", desc: "Card white" },
            { name: "surface-provenance", desc: "Chain of custody" },
            { name: "surface-exception", desc: "Exception queue" },
            { name: "surface-control", desc: "Input fields" },
            { name: "accent-muted", desc: "Subtle highlight" },
            { name: "provenance-muted", desc: "Teal wash" },
          ].map((s) => (
            <TokenSwatch
              key={s.name}
              name={s.name}
              value={`var(--${s.name})`}
              description={s.desc}
            />
          ))}
        </div>
      </DocCard>

      <DocCard title="Status semantics">
        <p className="text-sm text-[var(--fg-muted)] mb-6">
          Verification states map directly to audit vocabulary. Never use alternative labels.
        </p>
        <div className="flex gap-4 mb-6">
          {(["PASS", "FAIL", "UNKNOWN", "BOUND"] as const).map((s) => (
            <StatusBadge key={s} status={s} />
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4">
          {Object.entries(colorTokens.status).map(([name, val]) => (
            <TokenSwatch key={name} name={name} value={val} hex={typeof val === "string" && val.startsWith("#") ? val : undefined} />
          ))}
        </div>
      </DocCard>
    </div>
  );
}

