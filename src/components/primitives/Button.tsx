import { type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "provenance" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[var(--accent)] text-[var(--fg-inverse)] hover:bg-[var(--accent-hover)] active:bg-[var(--accent-press)]",
  secondary:
    "bg-[var(--dark-blue)] text-[var(--fg-inverse)] hover:bg-[var(--charcoal-90)]",
  outline:
    "bg-transparent text-[var(--fg)] border border-[var(--border-strong)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
  ghost:
    "bg-transparent text-[var(--fg-accent)] hover:bg-[var(--accent-muted)] px-0",
  provenance:
    "bg-[var(--provenance)] text-[var(--fg-inverse)] hover:bg-[var(--teal-90)]",
  danger:
    "bg-[var(--status-fail)] text-white hover:opacity-90",
};

const sizeStyles = {
  sm: "text-[11px] px-3 py-1.5 gap-1.5",
  md: "text-[13px] px-4 py-2.5 gap-2",
  lg: "text-[14px] px-5 py-3 gap-2",
};

export function Button({
  variant = "primary",
  size = "md",
  icon,
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center font-medium
        rounded-[var(--radius-sm)] transition-colors
        duration-[var(--dur-fast)] ease-[var(--ease-standard)]
        font-[family-name:var(--font-mono)] tracking-[0.06em] uppercase
        ${variantStyles[variant]} ${sizeStyles[size]} ${className}
      `}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
