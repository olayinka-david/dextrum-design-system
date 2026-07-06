import { SectionHead, DocCard } from "../components/docs/DocPrimitives";
import { Button } from "../components/primitives/Button";
import { Input, SearchInput } from "../components/primitives/Input";
import { Card, StatCard } from "../components/primitives/Card";
import { StatusBadge, Tag, Pill } from "../components/primitives/Badge";

export function ComponentsPage() {
  return (
    <div>
      <SectionHead
        num="Library"
        title="Components"
        description="The verification UI vocabulary. All components consume design tokens from colors_and_type.css."
      />

      <DocCard title="Buttons" className="mb-8">
        <div className="flex flex-wrap gap-3 mb-4">
          <Button variant="primary">Run verification</Button>
          <Button variant="secondary">Export register</Button>
          <Button variant="outline">View provenance</Button>
          <Button variant="ghost">Dismiss</Button>
          <Button variant="provenance">Chain audit</Button>
          <Button variant="danger">Escalate</Button>
        </div>
        <div className="flex gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </DocCard>

      <DocCard title="Inputs" className="mb-8">
        <div className="grid grid-cols-2 gap-6 max-w-xl">
          <Input label="Control ID" placeholder="C-001" mono />
          <Input label="Tolerance %" placeholder="2.5" hint="Default: 2.0%" />
        </div>
        <div className="mt-6 max-w-md">
          <SearchInput />
        </div>
      </DocCard>

      <DocCard title="Cards" className="mb-8">
        <div className="grid grid-cols-3 gap-4">
          <Card eyebrow="Default" title="Control summary">
            <p className="text-sm text-[var(--fg-muted)]">38 controls verified across 4 zones.</p>
          </Card>
          <Card variant="provenance" eyebrow="Provenance" title="Chain intact">
            <p className="text-sm text-[var(--fg-provenance)]">SHA-256 links unbroken since 2026-01-14.</p>
          </Card>
          <Card variant="exception" eyebrow="Exception" title="2 items critical">
            <p className="text-sm text-[var(--fg-exception)]">FX settlement outside tolerance.</p>
          </Card>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <StatCard label="Pass rate" value="84.2%" tone="pass" />
          <StatCard label="Exceptions" value="4" tone="fail" />
          <StatCard label="Bound items" value="2" tone="bound" />
          <StatCard label="Controls" value="38" />
        </div>
      </DocCard>

      <DocCard title="Badges and tags" className="mb-8">
        <div className="space-y-4">
          <div className="flex gap-3">
            <StatusBadge status="PASS" />
            <StatusBadge status="FAIL" />
            <StatusBadge status="UNKNOWN" />
            <StatusBadge status="BOUND" />
          </div>
          <div className="flex gap-2">
            <Tag>CEEP</Tag>
            <Tag tone="ocean">TCOT</Tag>
            <Tag tone="provenance">Provenance</Tag>
            <Tag tone="muted">Archived</Tag>
            <Tag tone="outline">PSC Block A</Tag>
          </div>
          <div className="flex gap-1">
            <Pill active>All</Pill>
            <Pill>Pass</Pill>
            <Pill>Fail</Pill>
            <Pill>Unknown</Pill>
          </div>
        </div>
      </DocCard>
    </div>
  );
}

