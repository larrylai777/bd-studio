/** BÐ-Studio shared chrome: preserve the black dual-layer desktop navigation, centered original hammer logo, and social footer. */
import { useState } from "react";
import { ArrowRight, CircleUserRound, Menu, Search, X } from "lucide-react";
import { toast } from "sonner";

export const assetBase = import.meta.env.BASE_URL;
export const assets = {
  logo: `${assetBase}assets/bd-original-hammer-logo-transparent.png`,
  hero: `${assetBase}assets/bd-hero-ninth-birth.jpg`,
  original: `${assetBase}assets/bd-original-cover.jpg`,
  ninthBirthCover: `${assetBase}assets/ninth-birth-cover.png`,
  podcast: `${assetBase}assets/bd-podcast-stage.jpg`,
  film: `${assetBase}assets/bd-film-stage.jpg`,
};

const links = [
  ["原作", `${assetBase}original/`], ["播客", `${assetBase}podcast/`], ["周邊", `${assetBase}merch/`],
  ["製作日誌", `${assetBase}journal/`], ["關於工作室", `${assetBase}studio/`],
] as const;

type Current = "home" | "original" | "podcast" | "series" | "film" | "merch" | "journal" | "studio" | "support" | "more";

export function SiteHeader({ current }: { current: Current }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const notice = (label: string) => toast(`${label} 即將開放`, { description: "下一道 BÐ-Studio 訊號會先公布在製作日誌。" });

  return <header className="entertainment-header">
    <div className="mobile-header-row">
      <button className="header-icon" onClick={() => { setMenuOpen((value) => !value); setSearchOpen(false); }} aria-label="開啟網站選單" aria-expanded={menuOpen}>{menuOpen ? <X size={29} /> : <Menu size={31} />}</button>
      <a className="center-logo" href={assetBase} aria-label="回到 BÐ-Studio 首頁"><img src={assets.logo} alt="BÐ-Studio b／D 交叉鐵鎚標誌" /></a>
      <button className="header-icon" onClick={() => { setSearchOpen((value) => !value); setMenuOpen(false); }} aria-label="開啟搜尋" aria-expanded={searchOpen}><Search size={29} /></button>
    </div>
    <div className="desktop-utility">
      <div className="utility-group utility-left"><button onClick={() => notice("登入")}><CircleUserRound size={20} />登入</button><button onClick={() => notice("訂閱訊號")}>訂閱訊號</button></div>
      <a className="desktop-brand-logo" href={assetBase} aria-label="回到 BÐ-Studio 首頁"><img src={assets.logo} alt="BÐ-Studio b／D 交叉鐵鎚標誌" /></a>
      <div className="utility-group utility-right"><a className="support-link" href={`${assetBase}support/`}>支持連載</a><button className="desktop-search" onClick={() => setSearchOpen((value) => !value)} aria-label="開啟搜尋"><Search size={24} /></button></div>
    </div>
    <nav className="desktop-primary" aria-label="桌面主要導覽">{links.map(([label, href]) => <a className={current === (label === "原作" ? "original" : label === "播客" ? "podcast" : label === "周邊" ? "merch" : label === "製作日誌" ? "journal" : label === "關於工作室" ? "studio" : "more") ? "active" : ""} href={href} key={label}>{label}</a>)}</nav>
    {menuOpen && <nav className="header-panel menu-panel" aria-label="行動版主要導覽"><a href={assetBase} onClick={() => setMenuOpen(false)}><span>00</span>首頁<ArrowRight size={17} /></a>{links.map(([label, href], index) => <a href={href} onClick={() => setMenuOpen(false)} key={label}><span>{String(index + 1).padStart(2, "0")}</span>{label}<ArrowRight size={17} /></a>)}<a href={`${assetBase}support/`} onClick={() => setMenuOpen(false)}><span>09</span>支持連載<ArrowRight size={17} /></a></nav>}
    {searchOpen && <div className="header-panel search-panel"><label htmlFor="site-search">SEARCH THE BÐ UNIVERSE</label><div><input id="site-search" autoFocus placeholder="搜尋作品、角色或製作日誌" /><button onClick={() => notice("搜尋")}>搜尋</button></div></div>}
  </header>;
}

export function SiteFooter() {
  const social = [["f", "Facebook"], ["ig", "Instagram"], ["yt", "YouTube"], ["tt", "TikTok"], ["𝕏", "X"]] as const;
  const notice = (label: string) => toast(`${label} 官方帳號準備中`, { description: "帳號連結啟用後會在此公開。" });
  return <footer className="site-footer-expanded">
    <section className="footer-main">
      <div className="footer-identity"><img src={assets.logo} alt="BÐ-Studio b／D 交叉鐵鎚標誌" /><div><strong>BÐ-STUDIO</strong><span>ORIGINAL IP / FROM PAGE TO EVERYWHERE</span></div></div>
      <nav className="footer-links" aria-label="頁尾導覽"><a href={`${assetBase}studio/`}>關於工作室</a><a href={`${assetBase}journal/`}>製作日誌</a><a href={`${assetBase}support/`}>支持連載</a><a href="mailto:bbdaddy924@gmail.com">合作洽談</a></nav>
      <div className="footer-social"><p>FOLLOW BÐ-STUDIO</p><div>{social.map(([mark, label]) => <button aria-label={label} title={label} onClick={() => notice(label)} key={label}>{mark}</button>)}</div></div>
    </section>
    <div className="footer-legal"><span>© 2026 BÐ-STUDIO. ALL SIGNALS RESERVED.</span><span>隱私權政策　服務條款</span><a href="#top">BACK TO TOP ↑</a></div>
  </footer>;
}
