import { brand } from "../lib/brand";
import { SectionHead, DocCard, DoDont } from "../components/docs/DocPrimitives";
import { countTokens } from "../lib/tokens";

export function FoundationsPage() {
  const counts = countTokens();

  return (
    <div>
      <div className="relative mb-12 p-10 rounded-[var(--radius-xl)] overflow-hidden border border-[var(--border)]" style={{ background: "var(--gradient-hero)" }}>
        <p className="eyebrow mb-3">{brand.tagline}</p>
        <h1 className="display mb-4">
          Dextrum <span className="text-[var(--accent)]">Design System</span>
        </h1>
        <p className="body-lg text-[var(--fg-muted)] max-w-xl">
          {brand.product.oneLiner} This system defines the visual language for
          verification dashboards, exception queues, and audit-ready surfaces.
        </p>
        <div className="flex gap-6 mt-8">
          <div>
            <p className="mono text-2xl font-semibold text-[var(--fg)]">{counts.total}</p>
            <p className="mono text-[10px] text-[var(--fg-faint)] uppercase tracking-wider">Total tokens</p>
          </div>
          <div>
            <p className="mono text-2xl font-semibold text-[var(--fg-accent)]">{counts.colors}</p>
            <p className="mono text-[10px] text-[var(--fg-faint)] uppercase tracking-wider">Color tokens</p>
          </div>
          <div>
            <p className="mono text-2xl font-semibold text-[var(--provenance)]">CEEP</p>
            <p className="mono text-[10px] text-[var(--fg-faint)] uppercase tracking-wider">Product model</p>
          </div>
        </div>
      </div>

      <SectionHead
        num="Overview"
        title="Brand foundations"
        description="Dextrum is the neutral verification intelligence layer for multi-party petroleum operations. The design language reflects audit-register precision, calm authority, and tamper-evident provenance."
      />

      <div className="grid grid-cols-2 gap-6 mb-10">
        <DocCard title="Positioning">
          <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-4">
            {brand.positioning}
          </p>
          <p className="mono text-[11px] text-[var(--fg-accent)]">{brand.product.model}</p>
        </DocCard>
        <DocCard title="Proof point">
          <p className="text-lg font-semibold text-[var(--fg)] mb-2">{brand.product.proofPoint}</p>
          <p className="text-sm text-[var(--fg-muted)]">
            Future wedges: {brand.product.wedges.join(", ")}
          </p>
        </DocCard>
      </div>

      <SectionHead num="Audiences" title="Who this system serves" />
      <div className="grid grid-cols-2 gap-4 mb-10">
        {brand.audiences.map((a: { role: string; need: string }, i: number) => (
          <DocCard key={a.role}>
            <p className="mono text-[10px] text-[var(--fg-accent)] mb-2">0{i + 1}</p>
            <p className="font-semibold text-[var(--fg)] mb-1">{a.role}</p>
            <p className="text-sm text-[var(--fg-muted)]">{a.need}</p>
          </DocCard>
        ))}
      </div>

      <SectionHead num="Principles" title="Design principles" />
      <div className="grid grid-cols-4 gap-4 mb-10">
        {[
          { name: "Neutral", desc: "No party bias in layout, color, or copy. The record speaks." },
          { name: "Precise", desc: "Tabular numerals, mono identifiers, grid-aligned surfaces." },
          { name: "Calm", desc: "Restrained motion, muted exceptions, no alarmist UI." },
          { name: "Defensible", desc: "Every state maps to audit vocabulary: PASS, FAIL, UNKNOWN, BOUND." },
        ].map((p) => (
          <DocCard key={p.name}>
            <div className="w-8 h-0.5 bg-[var(--accent)] mb-4" />
            <p className="font-semibold text-[var(--fg)] mb-2">{p.name}</p>
            <p className="text-sm text-[var(--fg-muted)]">{p.desc}</p>
          </DocCard>
        ))}
      </div>

      <DocCard title="Do and do not">
        <DoDont
          doItems={[
            "Use status semantics: PASS, FAIL, UNKNOWN, BOUND",
            "Set identifiers in JetBrains Mono with tabular numerals",
            "Keep Ocean Blue for accent, not canvas fill",
            "Use provenance teal for chain-of-custody surfaces",
            "Write in neutral, precise, calm voice",
          ]}
          dontItems={[
            "Use hype words: revolutionary, AI-powered, immutable",
            "Introduce colors outside the token palette",
            "Use em dashes or en dashes in copy",
            "Make exceptions visually louder than the register",
            "Replace custom icons with generic icon fonts",
          ]}
        />
      </DocCard>
    </div>
  );
}

