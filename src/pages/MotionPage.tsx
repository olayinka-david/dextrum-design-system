import { SectionHead, DocCard } from "../components/docs/DocPrimitives";
import { motionTokens } from "../lib/tokens";

export function MotionPage() {
  return (
    <div>
      <SectionHead
        num="Tokens"
        title="Motion principles"
        description="Motion is functional and restrained. Verification UI should never feel playful or alarming. Respect prefers-reduced-motion."
      />

      <DocCard title="Duration tokens" className="mb-8">
        <div className="grid grid-cols-4 gap-4">
          {[
            { name: "instant", val: motionTokens.instant, use: "Toggle states" },
            { name: "fast", val: motionTokens.fast, use: "Hover, focus" },
            { name: "med", val: motionTokens.med, use: "Panel reveal" },
            { name: "slow", val: motionTokens.slow, use: "Page transition" },
          ].map((d) => (
            <div key={d.name} className="p-4 rounded-[var(--radius-lg)] bg-[var(--surface-control)]">
              <p className="mono text-lg font-semibold text-[var(--fg)]">{d.val}</p>
              <p className="mono text-[10px] text-[var(--fg-accent)] mt-1">--dur-{d.name}</p>
              <p className="text-xs text-[var(--fg-faint)] mt-2">{d.use}</p>
            </div>
          ))}
        </div>
      </DocCard>

      <DocCard title="Easing curves" className="mb-8">
        <div className="space-y-4">
          {[
            { name: "ease-standard", val: motionTokens.easeStandard, desc: "Default enter and state change" },
            { name: "ease-exit", val: motionTokens.easeExit, desc: "Dismiss and collapse" },
            { name: "ease-spring", val: motionTokens.easeSpring, desc: "Rare emphasis only" },
          ].map((e) => (
            <div key={e.name} className="flex items-center gap-6 p-4 rounded-[var(--radius-md)] border border-[var(--border)]">
              <div className="flex-1">
                <p className="mono text-[11px] text-[var(--fg)]">{e.name}</p>
                <p className="mono text-[10px] text-[var(--fg-faint)]">{e.val}</p>
              </div>
              <p className="text-sm text-[var(--fg-muted)]">{e.desc}</p>
              <div
                className="w-12 h-8 bg-[var(--accent)] rounded-[var(--radius-sm)] motion-demo"
                style={{
                  animation: `slideIn 1.5s ${e.val} infinite alternate`,
                }}
              />
            </div>
          ))}
        </div>
      </DocCard>

      <DocCard title="Guidelines">
        <ul className="space-y-2 text-sm text-[var(--fg-muted)]">
          <li>Use 140ms for hover and focus feedback on controls</li>
          <li>Use 240ms for exception queue item expansion</li>
          <li>Never use bounce, elastic, or looping decorative animation</li>
          <li>Status changes should be instant, not animated</li>
          <li>Respect prefers-reduced-motion by removing nonessential animation</li>
        </ul>
      </DocCard>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(0); opacity: 0.6; }
          to { transform: translateX(24px); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .motion-demo { animation: none !important; }
        }
      `}</style>
    </div>
  );
}

