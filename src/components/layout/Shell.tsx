import { type ReactNode } from "react";
import { useTheme } from "../../lib/theme";

const navItems = [
  { id: "foundations", label: "Foundations", section: "Brand" },
  { id: "colors", label: "Colors", section: "Tokens" },
  { id: "typography", label: "Typography", section: "Tokens" },
  { id: "spacing", label: "Spacing & Layout", section: "Tokens" },
  { id: "motion", label: "Motion", section: "Tokens" },
  { id: "voice", label: "Voice & Tone", section: "Guidelines" },
  { id: "logo", label: "Logo", section: "Guidelines" },
  { id: "iconography", label: "Iconography", section: "Guidelines" },
  { id: "components", label: "Components", section: "Library" },
  { id: "patterns", label: "Patterns", section: "Library" },
] as const;

export type PageId = (typeof navItems)[number]["id"];

export function Sidebar({
  active,
  onNavigate,
}: {
  active: PageId;
  onNavigate: (id: PageId) => void;
}) {
  const { theme, toggle } = useTheme();
  let currentSection = "";

  return (
    <aside className="w-[var(--sidebar-width)] shrink-0 border-r border-[var(--border)] bg-[var(--surface-1)] flex flex-col h-screen sticky top-0">
      <div className="p-5 border-b border-[var(--border)]">
        <img src="/dextrum-logo-teal.svg" alt="Dextrum" className="h-6 mb-3" />
        <p className="mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-faint)]">
          Design System v1.0
        </p>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3">
        {navItems.map((item) => {
          const showSection = item.section !== currentSection;
          if (showSection) currentSection = item.section;
          return (
            <div key={item.id}>
              {showSection && (
                <p className="mono text-[9px] uppercase tracking-[0.16em] text-[var(--fg-faint)] px-3 pt-4 pb-2 first:pt-0">
                  {item.section}
                </p>
              )}
              <button
                onClick={() => onNavigate(item.id)}
                className={`
                  w-full text-left px-3 py-2 rounded-[var(--radius-md)] text-sm
                  transition-colors duration-[var(--dur-fast)]
                  ${active === item.id
                    ? "bg-[var(--accent-muted)] text-[var(--ocean-deep)] font-medium"
                    : "text-[var(--fg-muted)] hover:bg-[var(--surface-control)] hover:text-[var(--fg)]"
                  }
                `}
              >
                {item.label}
              </button>
            </div>
          );
        })}
      </nav>

      <div className="p-4 border-t border-[var(--border)]">
        <button
          onClick={toggle}
          className="w-full flex items-center justify-between px-3 py-2 rounded-[var(--radius-md)] bg-[var(--surface-control)] text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
        >
          <span className="mono text-[10px] uppercase tracking-[0.1em]">Theme</span>
          <span className="mono text-[10px]">{theme === "light" ? "Light" : "Dark"}</span>
        </button>
      </div>
    </aside>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="flex-1 overflow-y-auto">
      <div className="max-w-[var(--max-content)] mx-auto px-8 py-10">
        {children}
      </div>
    </main>
  );
}
