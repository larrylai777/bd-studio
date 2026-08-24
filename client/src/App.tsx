/** BÐ-Studio route map: all public GitHub Pages paths resolve to their independent editorial page. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Film from "./pages/Film";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Merch from "./pages/Merch";
import More from "./pages/More";
import Original from "./pages/Original";
import Podcast from "./pages/Podcast";
import Series from "./pages/Series";
import Studio from "./pages/Studio";
import Support from "./pages/Support";

function Router() {
  const path = window.location.pathname.replace(/^\/bd-studio\/?/, "/").replace(/\/+$/, "") || "/";
  const routes: Record<string, React.ComponentType> = { "/": Home, "/original": Original, "/podcast": Podcast, "/series": Series, "/film": Film, "/merch": Merch, "/journal": Journal, "/studio": Studio, "/support": Support, "/more": More };
  const Page = routes[path] ?? Home;
  return <Page />;
}

export default function App() { return <ErrorBoundary><ThemeProvider defaultTheme="dark"><TooltipProvider><Toaster theme="dark" position="bottom-right" /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>; }
