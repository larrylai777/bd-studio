import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Film from "./pages/Film";
import Home from "./pages/Home";
import Merch from "./pages/Merch";
import Original from "./pages/Original";
import Podcast from "./pages/Podcast";
import Privacy from "./pages/Privacy";
import Series from "./pages/Series";
import Terms from "./pages/Terms";

/** BÐ-Studio visual reminder: a calm editorial archive that gives narrative and reading actions clear precedence. */

function Router() {
  // make sure to consider if you need authentication for certain routes
  const normalizedPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const routes: Record<string, React.ComponentType> = {
    "/": Home,
    "/bd-studio": Home,
    "/original": Original,
    "/bd-studio/original": Original,
    "/podcast": Podcast,
    "/bd-studio/podcast": Podcast,
    "/series": Series,
    "/bd-studio/series": Series,
    "/film": Film,
    "/bd-studio/film": Film,
    "/merch": Merch,
    "/bd-studio/merch": Merch,
    "/privacy": Privacy,
    "/bd-studio/privacy": Privacy,
    "/terms": Terms,
    "/bd-studio/terms": Terms,
  };
  const Page = routes[normalizedPath] ?? NotFound;
  return <Page />;
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
