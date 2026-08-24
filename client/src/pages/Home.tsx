/**
 * BÐ-Studio visual reminder: calm archival sci-fi. Oversized serif story title, mono metadata, mist-white space, and restrained violet/gold coordinates.
 */
import OrbitalCanvas from "@/components/OrbitalCanvas";
import { useTheme } from "@/contexts/ThemeContext";
import { ArrowDownRight, ArrowUpRight, BookOpen, ChevronRight, Menu, Moon, Sparkles, Sun, X } from "lucide-react";
import { useMemo, useState } from "react";

const assetBase = import.meta.env.BASE_URL;
const markUrl = `${assetBase}assets/mark.webp`;
const stageLinks = [
  ["原作", "original"],
  ["漫畫", "comic"],
  ["影集", "series"],
  ["電影", "film"],
] as const;
const visualAssets = {
  hero: `${assetBase}assets/hero-cosmos.webp`,
  volume: `${assetBase}assets/volume-orbit.webp`,
  dawn: `${assetBase}assets/reading-dawn.webp`,
  archive: `${assetBase}assets/footer-archive.webp`,
};

const volumes = [
  { number: "01", title: "第九門", chapters: "Ch.001–009", note: "在每一道門後，重新確認名字的歸屬。" },
  { number: "02", title: "黑河低語", chapters: "Ch.010–018", note: "記憶開始辨認自己不願留下的回聲。" },
  { number: "03", title: "十八歲倒數", chapters: "Ch.019–027", note: "當未來被提前命名，選擇還能屬於誰？" },
  { number: "04", title: "第一次出生", chapters: "Ch.028–030 · 連載中", note: "黎明之後，每個人都得決定如何再次出現。", current: true },
];

const chapters = [
  { code: "CH.027", title: "第一次出生", volume: "第三部", excerpt: "他們以為越過城門就能留下過去，卻在黎明前看見第一張被塗改的名單。" },
  { code: "CH.028", title: "黎明後", volume: "第四部", excerpt: "最早醒來的人，發現世界先替他們安排了新的身份。" },
  { code: "CH.029", title: "第一張名單", volume: "第四部", excerpt: "白司禮將那張名單攤在光裡，而沒有人願意先讀出自己的名字。" },
  { code: "CH.030", title: "自願整理站", volume: "第四部 · 最新", excerpt: "這一次，整理不再是一項命令，而是一個足以改寫每段記憶的邀請。", latest: true },
];

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeVolume, setActiveVolume] = useState(3);
  const [activeChapter, setActiveChapter] = useState(3);
  const selectedChapter = useMemo(() => chapters[activeChapter], [activeChapter]);

  const navigateTo = (target: string) => {
    setMobileMenuOpen(false);
    scrollTo(target);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <button className="brand-lockup" onClick={() => navigateTo("top")} aria-label="回到 BÐ-Studio 首頁">
          <img src={markUrl} alt="BÐ-Studio 幾何門與軌道符號" className="brand-mark" />
          <span className="brand-wordmark">BÐ / STUDIO</span>
        </button>

        <nav className="desktop-nav" aria-label="主要導覽">
          {stageLinks.map(([label, slug]) => <a key={slug} href={`${assetBase}${slug}/`}>{label}</a>)}
          <button onClick={() => navigateTo("about")}>工作室</button>
        </nav>

        <div className="header-actions">
          <button className="theme-button" onClick={toggleTheme} aria-label="切換日夜主題" title="切換日夜主題">
            {theme === "dark" ? <Sun size={16} strokeWidth={1.5} /> : <Moon size={16} strokeWidth={1.5} />}
          </button>
          <button className="menu-button" onClick={() => setMobileMenuOpen((open) => !open)} aria-label="開啟導覽選單" aria-expanded={mobileMenuOpen}>
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu" aria-label="行動版導覽">
            {stageLinks.map(([label, slug]) => <a key={slug} href={`${assetBase}${slug}/`}>{label}<ArrowDownRight size={17} /></a>)}
            <button onClick={() => navigateTo("about")}>工作室<ArrowDownRight size={17} /></button>
          </div>
        )}
      </header>

      <main id="top">
        <section className="announcement" aria-label="最新公告">
          <div><span className="announcement-dot" />最新動態　第四部《第一次出生》第三章〈自願整理站〉現已上線。</div>
          <button onClick={() => navigateTo("chapters")}>立即閱讀 <ArrowDownRight size={15} /></button>
        </section>

        <section className="hero-section">
          <div className="hero-noise" />
          <img src={visualAssets.hero} alt="淡紫色宇宙軌道與光點的抽象背景" className="hero-art" />
          <OrbitalCanvas />
          <div className="orbit-hint" aria-hidden="true"><span className="orbit-hint-dot" />DRAG TO ROTATE · 3D STAR MAP</div>
          <div className="hero-copy">
            <div className="hero-eyebrow"><span />比爸 BD · 科幻懸疑長篇</div>
            <h1><span>第九次</span><span>出生</span></h1>
            <div className="hero-english">THE<br />NINTH<br />BIRTH</div>
            <p>當十七萬人重新擁有選擇記得或忘記的權利，林澈才發現：真正困難的不是醒來，而是怎麼活在黎明之後。</p>
            <div className="hero-links">
              <button onClick={() => navigateTo("chapters")} className="solid-link">閱讀最新章 <ArrowDownRight size={17} /></button>
              <button onClick={() => navigateTo("volumes")} className="text-link">探索全部章節 <ArrowUpRight size={15} /></button>
            </div>
          </div>

          <article className="transmission-card">
            <div className="card-topline"><span className="signal-pulse" />CURRENT TRANSMISSION · 04 / 03</div>
            <div className="card-volume">第四部</div>
            <h2>第一次出生</h2>
            <p>城門打開後，中央校準局以溫和的詞彙重新定義自由。林澈收到一個邀請，而它剛好帶著他自己的筆跡。</p>
            <button onClick={() => { setActiveChapter(3); navigateTo("chapters"); }} className="transmission-link">進入章節 <ArrowDownRight size={16} /></button>
            <span className="card-corner">04</span>
          </article>
        </section>

        <section className="volume-section" id="volumes">
          <div className="section-heading split-heading">
            <div><div className="section-kicker">VOLUME INDEX · 故事檔案</div><h2>每一部，都是一次<br /><em>重新命名自己。</em></h2></div>
            <p>從第一道門開始，故事不斷回到同一個問題：如果名字可以被歸還，人是否也能重新屬於自己？</p>
          </div>
          <div className="volume-layout">
            <img src={visualAssets.volume} alt="半透明檔案紙與軌道構成的抽象視覺" className="volume-art" />
            <div className="volume-list">
              {volumes.map((volume, index) => (
                <button className={`volume-row ${activeVolume === index ? "active" : ""}`} key={volume.number} onClick={() => setActiveVolume(index)} aria-pressed={activeVolume === index}>
                  <span className="volume-number">{volume.number}</span>
                  <span className="volume-name"><small>{volume.current ? "VOLUME 04 · NOW" : `VOLUME ${volume.number}`}</small><strong>{volume.title}</strong></span>
                  <span className="volume-chapters">{volume.chapters}</span>
                  <ChevronRight size={18} className="row-arrow" />
                  <span className="volume-note">{volume.note}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="reading-section" id="reading-log">
          <div className="reading-grid">
            <div className="reading-copy">
              <div className="section-kicker">READING LOG · 閱讀紀錄</div>
              <h2>從黑河的盡頭，<br />走向<strong>黎明。</strong></h2>
              <p>最新四章連續記錄林澈、祈安與白司禮踏出城門之後的選擇。每一個名字被交還給原本的人，也同時喚醒另一種風險。</p>
              <button className="outline-link" onClick={() => navigateTo("chapters")}>前往第四部目錄 <ArrowDownRight size={17} /></button>
            </div>
            <figure className="reading-figure">
              <img src={visualAssets.dawn} alt="黎明霧氣中一道細窄門框的抽象視覺" />
              <figcaption><span>FIELD NOTE</span><span>黎明前，仍有名字尚未被叫出。</span></figcaption>
            </figure>
          </div>
        </section>

        <section className="chapter-section" id="chapters">
          <div className="section-heading chapter-heading">
            <div><div className="section-kicker">SERIAL INDEX · 已上線章節</div><h2>讀取下一個<br /><em>座標。</em></h2></div>
            <div className="selected-chapter-note"><BookOpen size={17} /><span>目前選擇：<b>{selectedChapter.code} · {selectedChapter.title}</b></span></div>
          </div>
          <div className="chapter-list">
            {chapters.map((chapter, index) => (
              <button key={chapter.code} onClick={() => setActiveChapter(index)} className={`chapter-row ${activeChapter === index ? "selected" : ""}`} aria-pressed={activeChapter === index}>
                <span className="chapter-code">{chapter.code}</span>
                <span className="chapter-title"><strong>{chapter.title}</strong><small>{chapter.excerpt}</small></span>
                <span className="chapter-volume">{chapter.latest && <Sparkles size={13} />} {chapter.volume}</span>
                <ArrowDownRight className="chapter-arrow" size={19} />
              </button>
            ))}
          </div>
          <div className="reader-surface" aria-live="polite">
            <div><span className="section-kicker">READER PREVIEW · {selectedChapter.code}</span><h3>{selectedChapter.title}</h3><p>{selectedChapter.excerpt}</p></div>
            <button className="solid-link" onClick={() => navigateTo("top")}>回到故事起點 <ArrowUpRight size={17} /></button>
          </div>
        </section>

        <section className="stats-section" aria-label="連載統計">
          {[['30', '已上線章節'], ['04', '故事部數'], ['∞', '未命名的可能']].map(([value, label], index) => <div className="stat" key={label}><span className="stat-index">0{index + 1}</span><strong>{value}</strong><span>{label}</span></div>)}
        </section>

        <section className="about-section" id="about">
          <img src={visualAssets.archive} alt="無限迴圈般的紙質檔案絲帶抽象視覺" className="about-art" />
          <div className="about-content">
            <div className="section-kicker">BÐ-STUDIO · 關於創作</div>
            <h2>在宇宙的尺度裡，<br />寫下那些仍然選擇<br /><em>成為自己的人。</em></h2>
            <p>BÐ-Studio 是一座給科幻連載與慢讀者的檔案室。故事在這裡不急著給出答案，而是替仍在辨認自己的人，留下一段能夠返回的文字。</p>
            <div className="about-actions"><button className="solid-link" onClick={() => navigateTo("volumes")}>認識故事 <ArrowDownRight size={17} /></button><a className="text-link" href="https://www.threads.net" target="_blank" rel="noreferrer">追蹤創作動態 <ArrowUpRight size={15} /></a></div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><span>© 2026 BÐ-STUDIO</span><span>ARCHIVE V.01 · TAIPEI</span><button onClick={() => navigateTo("top")}>RETURN TO ORIGIN <ArrowUpRight size={14} /></button></footer>
    </div>
  );
}
