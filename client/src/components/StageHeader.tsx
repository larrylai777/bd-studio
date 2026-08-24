/** BÐ-Studio visual reminder: every medium is one station in a cohesive, quiet editorial IP journey. */
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const assetBase = import.meta.env.BASE_URL;
const markUrl = `${assetBase}assets/mark.webp`;

const stages = [
  ["原作", "original"],
  ["漫畫", "comic"],
  ["影集", "series"],
  ["電影", "film"],
] as const;

export default function StageHeader({ current }: { current: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="stage-header">
      <a className="brand-lockup" href={assetBase} aria-label="回到 BÐ-Studio 首頁">
        <img src={markUrl} alt="BÐ-Studio 幾何門與軌道符號" className="brand-mark" />
        <span className="brand-wordmark">BÐ / STUDIO</span>
      </a>
      <nav className="stage-nav" aria-label="IP 製作流程">
        {stages.map(([label, slug]) => <a key={slug} className={current === slug ? "active" : ""} href={`${assetBase}${slug}/`}>{label}</a>)}
      </nav>
      <div className="stage-header-actions">
        <a href={assetBase}>工作室</a>
        <button className="theme-button" onClick={toggleTheme} aria-label="切換日夜主題">
          {theme === "dark" ? <Sun size={16} strokeWidth={1.5} /> : <Moon size={16} strokeWidth={1.5} />}
        </button>
      </div>
    </header>
  );
}
