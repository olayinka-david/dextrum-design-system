import { StatusBadge, type StatusType } from "../primitives/Badge";

export interface VerificationRow {
  id: string;
  control: string;
  zone: string;
  coverage: string;
  hash: string;
  status: StatusType;
}

const defaultRows: VerificationRow[] = [
  { id: "C-001", control: "Allocation reconciliation", zone: "TCOT Terminal", coverage: "94.2%", hash: "a3f8c2...9e1d", status: "PASS" },
  { id: "C-014", control: "Lifting entitlement check", zone: "PSC Block A", coverage: "87.1%", hash: "7b2e91...4c8a", status: "BOUND" },
  { id: "C-022", control: "FX settlement tolerance", zone: "JV Treasury", coverage: "62.4%", hash: "d1c5f0...2b7e", status: "FAIL" },
  { id: "C-031", control: "Cost recovery cap", zone: "PSC Block B", coverage: "—", hash: "pending", status: "UNKNOWN" },
  { id: "C-038", control: "Provenance chain integrity", zone: "TCOT Terminal", coverage: "99.8%", hash: "f9a3d7...1e4b", status: "PASS" },
  { id: "C-045", control: "Metering variance threshold", zone: "Offshore Platform", coverage: "78.3%", hash: "2e8b4c...6f9a", status: "BOUND" },
];

export function DataTable({ rows = defaultRows }: { rows?: VerificationRow[] }) {
  return (
    <div className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface-2)] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border)] bg-[var(--surface-control)]">
        <span className="mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-subtle)]">
          Verification register
        </span>
        <span className="mono text-[10px] text-[var(--fg-accent)]">
          {rows.length} controls
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[var(--border)]">
              {["ID", "Control", "Zone", "Coverage", "SHA-256", "Status"].map((h) => (
                <th
                  key={h}
                  className="mono text-[9px] uppercase tracking-[0.12em] text-[var(--fg-faint)] px-5 py-2.5 font-medium"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.id}
                className="border-b border-[var(--border)] last:border-0 hover:bg-[var(--surface-control)] transition-colors"
              >
                <td className="mono text-[11px] text-[var(--fg-accent)] px-5 py-3">{row.id}</td>
                <td className="text-sm text-[var(--fg)] px-5 py-3">{row.control}</td>
                <td className="text-sm text-[var(--fg-muted)] px-5 py-3">{row.zone}</td>
                <td className="mono text-[11px] tabular-nums text-[var(--fg-subtle)] px-5 py-3">{row.coverage}</td>
                <td className="mono text-[10px] text-[var(--fg-faint)] px-5 py-3">{row.hash}</td>
                <td className="px-5 py-3">
                  <StatusBadge status={row.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
