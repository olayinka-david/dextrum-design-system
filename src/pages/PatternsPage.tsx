import { SectionHead, DocCard } from "../components/docs/DocPrimitives";
import { DataTable } from "../components/patterns/DataTable";
import { ExceptionQueue } from "../components/patterns/ExceptionQueue";
import { DashboardShell } from "../components/patterns/DashboardShell";

export function PatternsPage() {
  return (
    <div>
      <SectionHead
        num="Library"
        title="Patterns"
        description="Composite UI patterns for petroleum verification contexts: registers, exception queues, and dashboard shells."
      />

      <DocCard title="Verification register table" className="mb-8">
        <DataTable />
      </DocCard>

      <DocCard title="Exception queue" className="mb-8">
        <ExceptionQueue />
      </DocCard>

      <SectionHead
        num="Dashboard"
        title="Verification dashboard shell"
        description="Full dashboard mockup for TCOT Terminal allocation controls with live status, register, and exception queue."
      />
      <DashboardShell />
    </div>
  );
}

