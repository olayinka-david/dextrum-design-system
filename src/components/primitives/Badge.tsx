import { brand } from "../../lib/brand";

export type StatusType = (typeof brand.status)[number];

const statusStyles: Record<StatusType, string> = {
  PASS: "status-pass",
  FAIL: "status-fail",
  UNKNOWN: "status-unknown",
  BOUND: "status-bound",
};

export function StatusBadge({ status }: { status: StatusType }) {
  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-0.5 rounded-[var(--radius-xs)]
        font-[family-name:var(--font-mono)] text-[10px] font-semibold
        uppercase tracking-[0.14em] ${statusStyles[status]}
      `}
    >
      {status}
    </span>
  );
}

export function Tag({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "ocean" | "provenance" | "muted" | "outline";
}) {
  const tones = {
    default: "bg-[var(--surface-control)] text-[var(--fg-muted)] border-[var(--border)]",
    ocean: "bg-[var(--accent-muted)] text-[var(--ocean-deep)] border-[var(--border-accent)]",
    provenance: "bg-[var(--provenance-muted)] text-[var(--provenance)] border-[var(--border-provenance)]",
    muted: "bg-transparent text-[var(--fg-faint)] border-[var(--border)]",
    outline: "bg-transparent text-[var(--fg)] border-[var(--border-strong)]",
  };

  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-1 rounded-[var(--radius-sm)]
        border font-[family-name:var(--font-mono)] text-[10px]
        uppercase tracking-[0.1em] ${tones[tone]}
      `}
    >
      {children}
    </span>
  );
}

export function Pill({
  children,
  active = false,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <button
      className={`
        px-3 py-1.5 rounded-[var(--radius-pill)] text-[11px]
        font-[family-name:var(--font-mono)] uppercase tracking-[0.08em]
        transition-colors duration-[var(--dur-fast)]
        ${active
          ? "bg-[var(--accent)] text-[var(--fg-inverse)]"
          : "bg-transparent text-[var(--fg-subtle)] hover:bg-[var(--surface-control)]"
        }
      `}
    >
      {children}
    </button>
  );
}
