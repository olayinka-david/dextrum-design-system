import { useState } from "react";
import { ThemeProvider } from "./lib/theme";
import { Sidebar, PageShell, type PageId } from "./components/layout/Shell";
import { FoundationsPage } from "./pages/FoundationsPage";
import { ColorsPage } from "./pages/ColorsPage";
import { TypographyPage } from "./pages/TypographyPage";
import { SpacingPage } from "./pages/SpacingPage";
import { MotionPage } from "./pages/MotionPage";
import { VoicePage } from "./pages/VoicePage";
import { LogoPage } from "./pages/LogoPage";
import { IconographyPage } from "./pages/IconographyPage";
import { ComponentsPage } from "./pages/ComponentsPage";
import { PatternsPage } from "./pages/PatternsPage";

const pages: Record<PageId, React.ComponentType> = {
  foundations: FoundationsPage,
  colors: ColorsPage,
  typography: TypographyPage,
  spacing: SpacingPage,
  motion: MotionPage,
  voice: VoicePage,
  logo: LogoPage,
  iconography: IconographyPage,
  components: ComponentsPage,
  patterns: PatternsPage,
};

function App() {
  const [active, setActive] = useState<PageId>("foundations");
  const Page = pages[active];

  return (
    <ThemeProvider>
      <div className="flex min-h-screen bg-[var(--surface-0)]">
        <Sidebar active={active} onNavigate={setActive} />
        <PageShell>
          <Page />
        </PageShell>
      </div>
    </ThemeProvider>
  );
}

export default App;
