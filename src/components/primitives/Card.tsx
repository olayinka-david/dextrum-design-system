import { type ReactNode } from "react";

type CardVariant = "default" | "raised" | "provenance" | "exception" | "dark";

const variants: Record<CardVariant, string> = {
  default: "bg-[var(--surface-2)] border-[var(--border)]",
  raised: "bg-[var(--surface-2)] border-[var(--border)] shadow-[var(--shadow-md)]",
  provenance:
    "bg-[var(--surface-provenance)] border-[var(--border-provenance)] shadow-[var(--shadow-provenance)]",
  exception: "bg-[var(--surface-exception)] border-[var(--status-bound-border)]",
  dark: "bg-[var(--dark-blue)] border-[var(--border)] text-[var(--fg-inverse)]",
};

export function Card({
  children,
  variant = "default",
  eyebrow,
  title,
  className = "",
}: {
  children?: ReactNode;
  variant?: CardVariant;
  eyebrow?: string;
  title?: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[var(--radius-xl)] border p-6 ${variants[variant]} ${className}`}
    >
      {eyebrow && <p className="eyebrow text-[var(--fg-subtle)] mb-3">{eyebrow}</p>}
      {title && <h3 className="h4 mb-4">{title}</h3>}
      {children}
    </div>
  );
}

export function StatCard({
  label,
  value,
  delta,
  tone = "default",
}: {
  label: string;
  value: string;
  delta?: string;
  tone?: "default" | "pass" | "fail" | "bound";
}) {
  const valueColor = {
    default: "text-[var(--fg)]",
    pass: "text-[var(--status-pass)]",
    fail: "text-[var(--status-fail)]",
    bound: "text-[var(--status-bound)]",
  }[tone];

  return (
    <Card variant="raised">
      <p className="mono text-[10px] uppercase tracking-[0.12em] text-[var(--fg-faint)] mb-2">
        {label}
      </p>
      <p className={`mono text-2xl font-semibold tabular-nums ${valueColor}`}>{value}</p>
      {delta && (
        <p className="mono text-[10px] text-[var(--fg-subtle)] mt-1">{delta}</p>
      )}
    </Card>
  );
}
