import { StatusBadge, type StatusType } from "../primitives/Badge";
import { Button } from "../primitives/Button";

interface Exception {
  id: string;
  control: string;
  severity: StatusType;
  delta: string;
  age: string;
  assignee: string;
}

const exceptions: Exception[] = [
  { id: "EXC-1042", control: "C-014 Lifting entitlement", severity: "BOUND", delta: "+2.3% vs JV record", age: "2h 14m", assignee: "Commercial" },
  { id: "EXC-1038", control: "C-022 FX settlement", severity: "FAIL", delta: "RM 1.2M outside tolerance", age: "6h 42m", assignee: "Finance" },
  { id: "EXC-1031", control: "C-031 Cost recovery", severity: "UNKNOWN", delta: "Source data unavailable", age: "1d 3h", assignee: "Unassigned" },
  { id: "EXC-1027", control: "C-045 Metering variance", severity: "BOUND", delta: "0.8% above threshold", age: "4h 08m", assignee: "Operations" },
];

export function ExceptionQueue() {
  return (
    <div className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface-2)] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border)]">
        <div>
          <p className="mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-subtle)]">
            Exception queue
          </p>
          <p className="text-lg font-semibold text-[var(--fg)] mt-0.5">
            {exceptions.length} open items
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Export</Button>
          <Button variant="primary" size="sm">Assign all</Button>
        </div>
      </div>
      <div className="divide-y divide-[var(--border)]">
        {exceptions.map((ex) => (
          <div
            key={ex.id}
            className="flex items-start gap-4 px-5 py-4 hover:bg-[var(--surface-exception)] transition-colors cursor-pointer"
          >
            <div className="w-1 self-stretch rounded-full bg-[var(--exception)] shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <span className="mono text-[11px] text-[var(--fg-accent)]">{ex.id}</span>
                <StatusBadge status={ex.severity} />
              </div>
              <p className="text-sm font-medium text-[var(--fg)]">{ex.control}</p>
              <p className="mono text-[11px] text-[var(--fg-subtle)] mt-1">{ex.delta}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="mono text-[10px] text-[var(--fg-faint)]">{ex.age}</p>
              <p className="mono text-[10px] text-[var(--fg-muted)] mt-1">{ex.assignee}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
