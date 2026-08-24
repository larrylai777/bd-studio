/** BÐ-Studio visual reminder: a precise studio navigation that gives equal weight to the source story and every future medium. */
import { Menu, X } from "lucide-react";
import { useState } from "react";

const assetBase = import.meta.env.BASE_URL;
const markUrl = `${assetBase}assets/mark-dark.webp`;

const navigation = [
  ["工作室", assetBase, "studio"],
  ["原作", `${assetBase}original/`, "original"],
  ["播客", `${assetBase}podcast/`, "podcast"],
  ["影集", `${assetBase}series/`, "series"],
  ["電影", `${assetBase}film/`, "film"],
  ["周邊", `${assetBase}merch/`, "merch"],
] as const;

export default function StageHeader({ current }: { current: "studio" | "original" | "podcast" | "series" | "film" | "merch" | "other" }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="studio-header">
      <a className="brand-lockup" href={assetBase} aria-label="回到比爸工作室首頁">
        <img src={markUrl} alt="BÐ-Studio 交叉鐵鎚工作室符號" className="brand-mark" />
        <span className="brand-wordmark">BÐ / STUDIO</span>
      </a>
      <nav className="studio-nav" aria-label="比爸工作室主導覽">
        {navigation.map(([label, href, key]) => <a key={key} href={href} className={current === key ? "active" : ""}>{label}</a>)}
      </nav>
      <div className="studio-header-actions">
        <a className="header-journal" href={`${assetBase}#journal`}>開發日誌</a>
        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label="開啟主導覽" aria-expanded={open}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && <div className="studio-mobile-nav">
        {navigation.map(([label, href, key]) => <a key={key} href={href} className={current === key ? "active" : ""}>{label}</a>)}
        <a href={`${assetBase}#journal`}>開發日誌</a>
      </div>}
    </header>
  );
}
