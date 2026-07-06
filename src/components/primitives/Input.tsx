import { type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  mono?: boolean;
}

export function Input({ label, hint, mono, className = "", ...props }: InputProps) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="mono text-[10px] uppercase tracking-[0.12em] text-[var(--fg-muted)]">
        {label}
      </span>
      <input
        className={`
          w-full px-3 py-2.5 rounded-[var(--radius-md)]
          bg-[var(--surface-control)] border border-[var(--border)]
          text-[var(--fg)] text-sm
          focus:border-[var(--accent)] focus:shadow-[var(--shadow-focus)]
          transition-all duration-[var(--dur-fast)]
          ${mono ? "font-[family-name:var(--font-mono)] text-[12px]" : ""}
          ${className}
        `}
        {...props}
      />
      {hint && (
        <span className="mono text-[10px] text-[var(--fg-faint)]">{hint}</span>
      )}
    </label>
  );
}

export function SearchInput({ placeholder = "Search controls..." }: { placeholder?: string }) {
  return (
    <div className="relative">
      <input
        type="search"
        placeholder={placeholder}
        className="w-full pl-9 pr-4 py-2 rounded-[var(--radius-md)] bg-[var(--surface-control)] border border-[var(--border)] text-sm text-[var(--fg)] focus:border-[var(--accent)] focus:shadow-[var(--shadow-focus)] transition-all"
      />
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--fg-faint)]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    </div>
  );
}
