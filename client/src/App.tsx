/** BÐ-Studio route map: all public GitHub Pages paths resolve to their independent editorial page. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Merch from "./pages/Merch";
import Original from "./pages/Original";
import Podcast from "./pages/Podcast";
import Support from "./pages/Support";

function Router() {
  const path = window.location.pathname.replace(/^\/bd-studio\/?/, "/").replace(/\/+$/, "") || "/";
  const routes: Record<string, React.ComponentType> = { "/": Home, "/original": Original, "/podcast": Podcast, "/merch": Merch, "/support": Support };
  const Page = routes[path] ?? Home;
  return <Page />;
}

export default function App() { return <ErrorBoundary><ThemeProvider defaultTheme="dark"><TooltipProvider><Toaster theme="dark" position="bottom-right" /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>; }
