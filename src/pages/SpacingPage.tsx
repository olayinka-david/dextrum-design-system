import { SectionHead, DocCard } from "../components/docs/DocPrimitives";
import { spacingTokens, radiusTokens, shadowTokens } from "../lib/tokens";

export function SpacingPage() {
  return (
    <div>
      <SectionHead
        num="Tokens"
        title="Spacing, radius, and elevation"
        description="A 4-based spacing scale with 8px grid alignment. Radius is functional, not decorative. Elevation uses borders and subtle shadows, not heavy drop shadows."
      />

      <DocCard title="Spacing scale" className="mb-8">
        <div className="space-y-3">
          {Object.entries(spacingTokens).map(([key, val]) => (
            <div key={key} className="flex items-center gap-4">
              <span className="mono text-[10px] text-[var(--fg-faint)] w-8">--space-{key}</span>
              <div
                className="h-4 bg-[var(--accent)] rounded-[var(--radius-xs)]"
                style={{ width: val as string }}
              />
              <span className="mono text-[10px] text-[var(--fg-subtle)]">{val as string}</span>
            </div>
          ))}
        </div>
      </DocCard>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <DocCard title="Border radius">
          <div className="flex gap-4 flex-wrap">
            {Object.entries(radiusTokens).map(([name, val]) => (
              <div key={name} className="text-center">
                <div
                  className="w-16 h-16 bg-[var(--accent-muted)] border border-[var(--border-accent)] mb-2"
                  style={{ borderRadius: val as string }}
                />
                <p className="mono text-[9px] text-[var(--fg-faint)]">{name}</p>
                <p className="mono text-[9px] text-[var(--fg-subtle)]">{val as string}</p>
              </div>
            ))}
          </div>
        </DocCard>

        <DocCard title="Elevation">
          <div className="space-y-4">
            {Object.entries(shadowTokens).map(([name, val]) => (
              <div
                key={name}
                className="p-4 rounded-[var(--radius-lg)] bg-[var(--surface-2)] border border-[var(--border)]"
                style={{ boxShadow: val as string }}
              >
                <p className="mono text-[10px] text-[var(--fg-muted)]">--shadow-{name}</p>
              </div>
            ))}
          </div>
        </DocCard>
      </div>

      <DocCard title="Layout grid">
        <div className="grid grid-cols-3 gap-6 text-sm text-[var(--fg-muted)]">
          <div>
            <p className="mono text-[10px] text-[var(--fg-accent)] mb-2">Gutter</p>
            <p>32px standard, 20px compact</p>
          </div>
          <div>
            <p className="mono text-[10px] text-[var(--fg-accent)] mb-2">Max content</p>
            <p>1280px for documentation, 1440px for dashboards</p>
          </div>
          <div>
            <p className="mono text-[10px] text-[var(--fg-accent)] mb-2">Grid unit</p>
            <p>8px base for register tables and control panels</p>
          </div>
        </div>
      </DocCard>
    </div>
  );
}

