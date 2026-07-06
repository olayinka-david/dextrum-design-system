import { type ReactNode } from "react";

export function SectionHead({
  num,
  title,
  description,
}: {
  num: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="mb-10">
      <p className="eyebrow mb-2">{num}</p>
      <h2 className="h2 text-[var(--fg)] mb-3">{title}</h2>
      {description && (
        <p className="body-lg text-[var(--fg-muted)] max-w-2xl">{description}</p>
      )}
    </header>
  );
}

export function DocCard({
  children,
  title,
  className = "",
}: {
  children: ReactNode;
  title?: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface-2)] p-6 ${className}`}
    >
      {title && (
        <p className="eyebrow text-[var(--fg-subtle)] mb-4">{title}</p>
      )}
      {children}
    </div>
  );
}

export function TokenSwatch({
  name,
  value,
  hex,
  description,
}: {
  name: string;
  value: string;
  hex?: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="h-16 w-full rounded-[var(--radius-lg)] border border-[var(--border)]"
        style={{ background: value }}
      />
      <div>
        <p className="text-sm font-semibold text-[var(--fg)]">{name}</p>
        <p className="mono text-[10px] text-[var(--fg-subtle)]">{hex ?? value}</p>
        {description && (
          <p className="text-xs text-[var(--fg-faint)] mt-1">{description}</p>
        )}
      </div>
    </div>
  );
}

export function SpecRow({
  label,
  value,
  sample,
}: {
  label: string;
  value: string;
  sample?: ReactNode;
}) {
  return (
    <div className="flex items-center gap-6 py-4 border-b border-[var(--border)] last:border-0">
      <div className="w-40 shrink-0">
        <p className="mono text-[11px] text-[var(--fg)]">{label}</p>
        <p className="mono text-[10px] text-[var(--fg-faint)]">{value}</p>
      </div>
      <div className="flex-1 min-w-0">{sample}</div>
    </div>
  );
}

export function DoDont({
  doItems,
  dontItems,
}: {
  doItems: string[];
  dontItems: string[];
}) {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div>
        <p className="mono text-[11px] font-semibold text-[var(--status-pass)] mb-4 uppercase tracking-wider">
          Do
        </p>
        <ul className="space-y-2">
          {doItems.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-[var(--fg-muted)]">
              <span className="text-[var(--status-pass)]">+</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="mono text-[11px] font-semibold text-[var(--status-fail)] mb-4 uppercase tracking-wider">
          Do not
        </p>
        <ul className="space-y-2">
          {dontItems.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-[var(--fg-faint)]">
              <span className="text-[var(--status-fail)]">-</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
