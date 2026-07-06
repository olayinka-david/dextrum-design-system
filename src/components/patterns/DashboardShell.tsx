import { StatCard } from "../primitives/Card";
import { DataTable } from "./DataTable";
import { ExceptionQueue } from "./ExceptionQueue";
import { Pill } from "../primitives/Badge";
import { SearchInput } from "../primitives/Input";

export function VerificationTopbar() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between h-[var(--topbar-height)] px-6 border-b border-[var(--border)] bg-[var(--surface-1)]/90 backdrop-blur-md">
      <div className="flex items-center gap-4">
        <img src="/dextrum-logo-teal.svg" alt="Dextrum" className="h-5" />
        <span className="mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-faint)]">
          TCOT Terminal · PSC Malaysia
        </span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-64">
          <SearchInput placeholder="Search C-001..." />
        </div>
        <span className="mono text-[10px] px-2 py-1 rounded-[var(--radius-sm)] bg-[var(--status-pass-bg)] text-[var(--status-pass)] border border-[var(--status-pass-border)]">
          LIVE
        </span>
      </div>
    </header>
  );
}

export function DashboardShell() {
  return (
    <div className="rounded-[var(--radius-xl)] border border-[var(--border)] overflow-hidden bg-[var(--surface-1)]">
      <VerificationTopbar />
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="eyebrow">Continuous verification</p>
            <h3 className="h3 text-[var(--dark-blue)]">Allocation controls · Q2 2026</h3>
          </div>
          <div className="flex gap-1">
            <Pill active>All zones</Pill>
            <Pill>TCOT</Pill>
            <Pill>Offshore</Pill>
            <Pill>JV Treasury</Pill>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <StatCard label="Controls verified" value="38" delta="6 pending review" />
          <StatCard label="Pass rate" value="84.2%" delta="+2.1% vs last period" tone="pass" />
          <StatCard label="Open exceptions" value="4" delta="2 critical" tone="fail" />
          <StatCard label="Provenance score" value="99.1%" delta="SHA-256 chain intact" tone="pass" />
        </div>

        <div className="grid grid-cols-5 gap-6">
          <div className="col-span-3">
            <DataTable />
          </div>
          <div className="col-span-2">
            <ExceptionQueue />
          </div>
        </div>
      </div>
    </div>
  );
}
