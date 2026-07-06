import { SectionHead, DocCard } from "../components/docs/DocPrimitives";

function AuditIcon({ type }: { type: "control" | "evidence" | "exception" | "provenance" | "chain" }) {
  const icons = {
    control: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <rect x="4" y="4" width="16" height="4" rx="1" />
        <rect x="4" y="10" width="10" height="3" rx="1" />
        <rect x="4" y="15" width="14" height="3" rx="1" />
      </svg>
    ),
    evidence: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <rect x="6" y="3" width="12" height="18" rx="1" />
        <rect x="9" y="7" width="6" height="2" fill="var(--surface-2)" />
        <rect x="9" y="11" width="6" height="2" fill="var(--surface-2)" />
        <rect x="9" y="15" width="4" height="2" fill="var(--surface-2)" />
      </svg>
    ),
    exception: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <polygon points="12,3 22,21 2,21" />
        <rect x="11" y="9" width="2" height="6" fill="var(--surface-2)" />
        <rect x="11" y="17" width="2" height="2" fill="var(--surface-2)" />
      </svg>
    ),
    provenance: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <rect x="8" y="11" width="8" height="2" />
        <rect x="14" y="8" width="2" height="6" transform="rotate(30 15 11)" />
        <rect x="14" y="14" width="2" height="6" transform="rotate(-30 15 13)" />
      </svg>
    ),
    chain: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <rect x="3" y="8" width="8" height="8" rx="1" />
        <rect x="13" y="8" width="8" height="8" rx="1" />
        <rect x="10" y="10" width="4" height="4" />
      </svg>
    ),
  };
  return icons[type];
}

export function IconographyPage() {
  const icons = [
    { type: "control" as const, name: "Control", desc: "Allocation and reconciliation checks" },
    { type: "evidence" as const, name: "Evidence", desc: "Documented proof artifacts" },
    { type: "exception" as const, name: "Exception", desc: "Out-of-tolerance items" },
    { type: "provenance" as const, name: "Provenance", desc: "Chain of custody nodes" },
    { type: "chain" as const, name: "Chain link", desc: "SHA-256 integrity links" },
  ];

  return (
    <div>
      <SectionHead
        num="Guidelines"
        title="Iconography"
        description="Icons are constructed from solid geometric primitives: rectangles, circles, and triangles. They mark CEEP model sections, not decorate."
      />

      <DocCard title="CEEP icon set" className="mb-8">
        <div className="grid grid-cols-5 gap-6">
          {icons.map((icon) => (
            <div key={icon.name} className="text-center">
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-3 rounded-[var(--radius-lg)] bg-[var(--surface-control)] text-[var(--charcoal)]">
                <AuditIcon type={icon.type} />
              </div>
              <p className="font-medium text-sm text-[var(--fg)]">{icon.name}</p>
              <p className="text-xs text-[var(--fg-faint)] mt-1">{icon.desc}</p>
            </div>
          ))}
        </div>
      </DocCard>

      <DocCard title="Construction rules" className="mb-8">
        <ul className="space-y-3 text-sm text-[var(--fg-muted)]">
          <li>Build from solid fills only. No outlines, no thin strokes.</li>
          <li>Use Charcoal #2F3F4C on light surfaces, Timid White on dark.</li>
          <li>Accent with Ocean Blue or Deep Teal only for active states.</li>
          <li>Keep icons at 24px grid with 2px internal padding.</li>
          <li>Do not use Lucide, Heroicons, Feather, or icon fonts.</li>
          <li>No emoji or Unicode pictographs in product UI.</li>
        </ul>
      </DocCard>

      <DocCard title="DX mark">
        <p className="text-sm text-[var(--fg-muted)] mb-4">
          The DX monogram serves as a compact mark in favicons, status bars, and provenance stamps.
          Use only in contexts where the full logotype does not fit.
        </p>
        <div className="flex gap-6">
          <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--accent)] flex items-center justify-center">
            <span className="mono text-sm font-bold text-white">DX</span>
          </div>
          <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--provenance)] flex items-center justify-center">
            <span className="mono text-sm font-bold text-white">DX</span>
          </div>
        </div>
      </DocCard>
    </div>
  );
}

