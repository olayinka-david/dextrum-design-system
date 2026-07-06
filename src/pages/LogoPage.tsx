import { SectionHead, DocCard, DoDont } from "../components/docs/DocPrimitives";

export function LogoPage() {
  return (
    <div>
      <SectionHead
        num="Guidelines"
        title="Logo usage"
        description="The Dextrum logotype anchors verification surfaces. Use teal on light backgrounds, grey on dark or photographic contexts."
      />

      <div className="grid grid-cols-2 gap-6 mb-8">
        <DocCard>
          <div className="flex items-center justify-center py-16 bg-[var(--surface-1)] rounded-[var(--radius-lg)] mb-4">
            <img src="/dextrum-logo-teal.svg" alt="Dextrum teal" className="h-14" />
          </div>
          <p className="mono text-[10px] text-[var(--fg-subtle)]">dextrum-logo-teal.svg · Light surfaces</p>
        </DocCard>
        <DocCard>
          <div className="flex items-center justify-center py-16 bg-[var(--dark-blue)] rounded-[var(--radius-lg)] mb-4">
            <img src="/dextrum-logo-grey.svg" alt="Dextrum grey" className="h-14" />
          </div>
          <p className="mono text-[10px] text-[var(--fg-subtle)]">dextrum-logo-grey.svg · Dark surfaces</p>
        </DocCard>
      </div>

      <DocCard title="Clear space and placement" className="mb-8">
        <p className="text-sm text-[var(--fg-muted)] mb-4">
          Maintain clear space equal to the cap height of the logotype on all sides.
          In verification dashboards, place the logo in the top-left of the chrome bar.
          In audit exports and certificates, place bottom-left as a trust anchor.
        </p>
        <div className="p-6 rounded-[var(--radius-lg)] border border-dashed border-[var(--border-accent)] bg-[var(--accent-muted)] flex items-center justify-center">
          <div className="relative p-8 border border-[var(--accent)]">
            <img src="/dextrum-logo-teal.svg" alt="" className="h-8" />
            <span className="absolute -top-3 left-0 mono text-[8px] text-[var(--accent)]">clear space</span>
          </div>
        </div>
      </DocCard>

      <DocCard title="Rules">
        <DoDont
          doItems={[
            "Use teal variant on canvas and white surfaces",
            "Use grey variant on dark blue and photographic backgrounds",
            "Keep logo at readable minimum 20px height in UI chrome",
            "Pair with mono context label: TCOT Terminal · PSC Malaysia",
          ]}
          dontItems={[
            "Stretch, rotate, or recolor the logotype",
            "Place on busy imagery without a solid backing",
            "Use as a decorative watermark at low opacity",
            "Combine with third-party marks without clear separation",
          ]}
        />
      </DocCard>
    </div>
  );
}

