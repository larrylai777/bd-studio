/**
 * BÐ-Studio visual reminder: mobile-first entertainment editorial layout.
 * Keep the centered original b/D hammer logo, black utility header, full-bleed media hero, and poster grid.
 */
import { useState } from "react";
import { ArrowRight, CircleUserRound, Menu, Search, X } from "lucide-react";
import { toast } from "sonner";

const assetBase = import.meta.env.BASE_URL;
const assets = {
  logo: `${assetBase}assets/bd-original-hammer-logo-transparent.png`,
  hero: `${assetBase}assets/bd-hero-ninth-birth.jpg`,
  original: `${assetBase}assets/bd-original-cover.jpg`,
  podcast: `${assetBase}assets/bd-podcast-stage.jpg`,
  film: `${assetBase}assets/bd-film-stage.jpg`,
};

const releases = [
  { type: "ORIGINAL NOVEL", title: "第九次出生", date: "第四部・連載中", image: assets.original, position: "center" },
  { type: "CALMCAT FILM", title: "最後走進銀幕", date: "世界觀開發", image: assets.film, position: "center" },
  { type: "TELL PODCAST", title: "讓故事被說出來", date: "錄製籌備", image: assets.podcast, position: "65% center" },
  { type: "SERIES BIBLE", title: "一季又一季", date: "企劃開發", image: assets.hero, position: "74% center" },
];

const menuItems = ["首頁", "原作宇宙", "製作日誌", "工作室", "合作洽談"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const notify = (label: string) => toast(`${label} 即將推出`, { description: "BÐ-Studio 會在製作日誌中公布下一道訊號。" });

  return (
    <div className="entertainment-site" id="top">
      <header className="entertainment-header">
        <div className="mobile-header-row">
          <button className="header-icon" onClick={() => { setMenuOpen((value) => !value); setSearchOpen(false); }} aria-label="開啟網站選單" aria-expanded={menuOpen}>
            {menuOpen ? <X size={29} /> : <Menu size={31} />}
          </button>
          <a className="center-logo" href="#top" aria-label="回到 BÐ-Studio 首頁">
            <img src={assets.logo} alt="BÐ-Studio b／D 交叉鐵鎚標誌" />
          </a>
          <button className="header-icon" onClick={() => { setSearchOpen((value) => !value); setMenuOpen(false); }} aria-label="開啟搜尋" aria-expanded={searchOpen}>
            <Search size={29} />
          </button>
        </div>
        <div className="desktop-utility">
          <div className="utility-group utility-left">
            <button onClick={() => notify("登入") }><CircleUserRound size={20} />登入</button>
            <button onClick={() => notify("訂閱訊號")}>訂閱訊號</button>
          </div>
          <a className="desktop-brand-logo" href="#top" aria-label="回到 BÐ-Studio 首頁"><img src={assets.logo} alt="BÐ-Studio b／D 交叉鐵鎚標誌" /></a>
          <div className="utility-group utility-right">
            <button className="support-link" onClick={() => notify("支持連載")}>支持連載</button>
            <button className="desktop-search" onClick={() => setSearchOpen((value) => !value)} aria-label="開啟搜尋"><Search size={24} /></button>
          </div>
        </div>
        <nav className="desktop-primary" aria-label="桌面主要導覽">
          {["原作", "播客", "影集", "電影", "周邊", "製作日誌", "關於工作室", "更多"].map((item) => <a href="#catalog" key={item}>{item}</a>)}
        </nav>
        {menuOpen && <nav className="header-panel menu-panel" aria-label="主要導覽">
          {menuItems.map((item, index) => <a href={index === 0 ? "#top" : "#catalog"} onClick={() => setMenuOpen(false)} key={item}><span>0{index + 1}</span>{item}<ArrowRight size={17} /></a>)}
        </nav>}
        {searchOpen && <div className="header-panel search-panel">
          <label htmlFor="site-search">SEARCH THE BÐ UNIVERSE</label>
          <div><input id="site-search" autoFocus placeholder="搜尋作品、角色或製作日誌" /><button onClick={() => notify("搜尋")}>搜尋</button></div>
        </div>}
      </header>

      <main>
        <section className="media-hero" aria-labelledby="media-hero-title">
          <img src={assets.hero} alt="人影站在觀測平台，望向深紅星雲裡的破碎圓環" />
          <div className="hero-tint" />
          <div className="hero-copy">
            <p className="eyebrow">BÐ-STUDIO PRESENTS</p>
            <h1 id="media-hero-title">第九次出生</h1>
            <p className="hero-description">在可以選擇記得或遺忘的世界裡，決定你是誰的，從來不只是記憶。</p>
            <button className="hero-cta" onClick={() => document.querySelector("#catalog")?.scrollIntoView({ behavior: "smooth" })}>探索媒介宇宙 <ArrowRight size={18} /></button>
          </div>
        </section>

        <section className="catalog-section" id="catalog" aria-labelledby="catalog-title">
          <div className="catalog-heading"><p className="eyebrow eyebrow-dark">EXPLORE THE STUDIO</p><h2 id="catalog-title">正在開展的<br /><em>世界。</em></h2><p>從原作開始，讓故事抵達聲音、影像與更多可能。</p></div>
          <div className="poster-grid">
            {releases.map((release, index) => <article className="poster-card" key={release.title}>
              <button className="poster-image" onClick={() => notify(release.title)} aria-label={`查看 ${release.title}`}>
                <img src={release.image} style={{ objectPosition: release.position }} alt="" />
                <span className="poster-index">0{index + 1}</span>
                <span className="poster-arrow"><ArrowRight size={19} /></span>
              </button>
              <p>{release.type}</p><h3>{release.title}</h3><strong>{release.date}</strong>
            </article>)}
          </div>
          <button className="catalog-more" onClick={() => notify("完整作品檔案")}>查看所有作品 <ArrowRight size={17} /></button>
        </section>

        <section className="signal-band" aria-label="製作訊號">
          <div><p className="eyebrow">STUDIO SIGNAL / 04</p><h2>故事不會停在一種形式。</h2></div>
          <p>每一次轉譯，都讓同一個世界以更精準的語言被重新看見。</p>
          <button onClick={() => notify("製作日誌")}>閱讀製作日誌 <ArrowRight size={17} /></button>
        </section>

        <section className="studio-intro" aria-labelledby="studio-title">
          <p className="eyebrow eyebrow-dark">THE BÐ-STUDIO</p>
          <h2 id="studio-title">從一部小說，<br /><em>走向每一座銀幕。</em></h2>
          <p>比爸工作室以原創小說為核心，讓角色、制度與未命名的可能，在不同媒介裡持續生長。</p>
          <a href="mailto:hello@bd-studio.tw">和工作室說說話 <ArrowRight size={16} /></a>
        </section>
      </main>

      <footer className="entertainment-footer">
        <img src={assets.logo} alt="BÐ-Studio b／D 交叉鐵鎚標誌" />
        <div><strong>BÐ-STUDIO</strong><span>ORIGINAL IP / FROM PAGE TO EVERYWHERE</span></div>
        <a href="#top">BACK TO TOP</a>
      </footer>
    </div>
  );
}
