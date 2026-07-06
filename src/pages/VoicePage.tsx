import { brand } from "../lib/brand";
import { SectionHead, DocCard } from "../components/docs/DocPrimitives";

export function VoicePage() {
  return (
    <div>
      <SectionHead
        num="Guidelines"
        title="Voice and tone"
        description="Neutral, precise, calm, defensible. The voice of a trusted record, not a vendor pitch."
      />

      <DocCard title="Core voice" className="mb-8">
        <div className="grid grid-cols-4 gap-4">
          {["Neutral", "Precise", "Calm", "Defensible"].map((trait) => (
            <div key={trait} className="p-4 rounded-[var(--radius-lg)] bg-[var(--surface-control)]">
              <div className="w-6 h-0.5 bg-[var(--provenance)] mb-3" />
              <p className="font-semibold text-[var(--fg)]">{trait}</p>
            </div>
          ))}
        </div>
      </DocCard>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <DocCard title="Preferred vocabulary">
          <ul className="space-y-2">
            {brand.product.vocabulary.preferred.map((w: string) => (
              <li key={w} className="flex gap-2 text-sm text-[var(--fg-muted)]">
                <span className="text-[var(--status-pass)]">+</span>
                {w}
              </li>
            ))}
          </ul>
        </DocCard>
        <DocCard title="Avoid">
          <ul className="space-y-2">
            {brand.product.vocabulary.avoid.map((w: string) => (
              <li key={w} className="flex gap-2 text-sm text-[var(--fg-faint)]">
                <span className="text-[var(--status-fail)]">-</span>
                {w}
              </li>
            ))}
          </ul>
        </DocCard>
      </div>

      <DocCard title="Copy patterns">
        <div className="space-y-6">
          <div>
            <p className="mono text-[10px] text-[var(--fg-accent)] mb-2">EYEBROW / HEADLINE / META</p>
            <p className="eyebrow">Continuous verification</p>
            <p className="h3 text-[var(--dark-blue)]">Allocation controls · Q2 2026</p>
            <p className="mono text-[11px] text-[var(--fg-subtle)] mt-1">TCOT Terminal · 38 controls · Updated 14:32 UTC</p>
          </div>
          <div className="border-t border-[var(--border)] pt-6">
            <p className="mono text-[10px] text-[var(--fg-accent)] mb-2">STATUS LABELS</p>
            <p className="text-sm text-[var(--fg-muted)]">
              Always uppercase: PASS, FAIL, UNKNOWN, BOUND. Never substitute with synonyms like "OK", "Error", or "Warning".
            </p>
          </div>
          <div className="border-t border-[var(--border)] pt-6">
            <p className="mono text-[10px] text-[var(--fg-accent)] mb-2">PUNCTUATION</p>
            <p className="text-sm text-[var(--fg-muted)]">
              No em dashes or en dashes. Use periods, commas, or middle dots for separation.
            </p>
          </div>
        </div>
      </DocCard>
    </div>
  );
}

