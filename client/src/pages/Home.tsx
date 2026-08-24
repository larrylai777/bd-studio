/**
 * BÐ-Studio visual reminder: Signal Cut is a cinematic broadcast homepage.
 * Use asymmetry, red signal markers, dense story imagery, and clear escape routes.
 */
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  Clapperboard,
  Menu,
  Mic2,
  Play,
  Radio,
  Send,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";
import { toast } from "sonner";

const assets = {
  hero: `${import.meta.env.BASE_URL}assets/bd-hero-ninth-birth.jpg`,
  original: `${import.meta.env.BASE_URL}assets/bd-original-cover.jpg`,
  podcast: `${import.meta.env.BASE_URL}assets/bd-podcast-stage.jpg`,
  film: `${import.meta.env.BASE_URL}assets/bd-film-stage.jpg`,
  logo: `${import.meta.env.BASE_URL}assets/bd-signal-logo.png`,
};

const navItems = [
  ["作品", "#universe"],
  ["製作日誌", "#signals"],
  ["關於工作室", "#studio"],
  ["支持我們", "#join"],
];

const mediaRail = [
  {
    index: "01",
    label: "ORIGINAL NOVEL",
    title: "第九次出生",
    status: "連載中",
    text: "所有媒介的第一個座標。第四部《第一次出生》正在展開。",
    image: assets.original,
    icon: BookOpen,
    type: "image",
  },
  {
    index: "02",
    label: "TELL PODCAST",
    title: "讓故事被說出來",
    status: "錄製籌備",
    text: "把角色、世界觀與每次改編的選擇，放進聲音的縫隙。",
    image: assets.podcast,
    icon: Mic2,
    type: "image",
  },
  {
    index: "03",
    label: "SERIES BIBLE",
    title: "一季又一季",
    status: "企劃開發",
    text: "讓角色擁有足夠長的時間，走過制度與命運的壓力。",
    icon: Clapperboard,
    type: "series",
  },
  {
    index: "04",
    label: "CALMCAT FILM",
    title: "最後走進銀幕",
    status: "世界觀開發",
    text: "當一個命題值得共同見證，它會被濃縮成不可替代的觀看。",
    image: assets.film,
    icon: Play,
    type: "image",
  },
  {
    index: "05",
    label: "L&F OBJECTS",
    title: "把世界帶著走",
    status: "商品開發",
    text: "從印刷、衣著到小型物件，讓記憶留在日常的手邊。",
    icon: ShoppingBag,
    type: "merch",
  },
];

const signals = [
  {
    category: "FIELD NOTE 04",
    date: "2026.08.24",
    title: "第四部《第一次出生》：一個人如何決定自己要留下什麼",
    body: "新的卷冊從黎明後開始。這一次，記憶不再只是被找回，而是被重新命名。",
  },
  {
    category: "AUDIO NOTE 01",
    date: "IN PRODUCTION",
    title: "Tell Podcast 的第一道訊號，正在收音",
    body: "我們把小說中無法直接聽見的選擇，留給聲音與停頓完成。",
  },
  {
    category: "STUDIO NOTE 01",
    date: "NOW LIVE",
    title: "原創 IP 不只是一條路，而是一座不斷擴張的世界",
    body: "我們公開製作節點，讓每一位讀者都能看見故事如何前進。",
  },
];

function jumpTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleUpcoming = (label: string) => {
    toast(`${label} 正在製作中`, {
      description: "下一道公開訊號將先發布於 BÐ-Studio 製作日誌。",
    });
  };

  return (
    <div className="signal-site" id="top">
      <div className="broadcast-strip" role="status">
        <div className="broadcast-track">
          <span><Radio size={13} fill="currentColor" /> BÐ-STUDIO SIGNAL IS LIVE</span>
          <span>第九次出生・第四部《第一次出生》連載中</span>
          <span>ORIGINAL IP / FROM PAGE TO EVERYWHERE</span>
          <span><Radio size={13} fill="currentColor" /> BÐ-STUDIO SIGNAL IS LIVE</span>
          <span>第九次出生・第四部《第一次出生》連載中</span>
        </div>
      </div>

      <header className="main-header">
        <a className="wordmark" href="#top" aria-label="BÐ-Studio 首頁">
          <img src={assets.logo} alt="" aria-hidden="true" />
          <span>BÐ<br />STUDIO</span>
        </a>
        <nav className="desktop-nav" aria-label="主要導覽">
          {navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="signal-button signal-button-small" onClick={() => jumpTo("#join")}>
            <span>接收訊號</span><ArrowDownRight size={15} />
          </button>
          <button className="menu-trigger" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label="切換主選單">
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
        {menuOpen && <nav className="mobile-nav" aria-label="行動版主要導覽">
          {navItems.map(([label, href], index) => <a key={label} href={href} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{label}<ChevronRight size={17} /></a>)}
        </nav>}
      </header>

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <img className="hero-art" src={assets.hero} alt="一名人影站在觀測平台，望向深紅星雲中的裂縫圓環" />
          <div className="hero-vignette" />
          <div className="hero-noise" />
          <div className="hero-content">
            <p className="signal-kicker"><span /> FLAGSHIP TRANSMISSION <b>01 / 05</b></p>
            <h1 id="hero-title">第九次<br /><em>出生</em></h1>
            <p className="hero-subtitle">如果你可以決定忘記什麼，<br />你還會成為同一個人嗎？</p>
            <p className="hero-copy">當十七萬人重新擁有記得或遺忘的權利，林澈發現：真正困難的不是醒來，而是活在黎明之後。</p>
            <div className="hero-ctas">
              <a className="signal-button" href="#universe"><span>進入原作宇宙</span><ArrowRight size={18} /></a>
              <button className="watch-link" onClick={() => jumpTo("#signals")}><span className="play-disc"><Play size={13} fill="currentColor" /></span> 查看最新訊號</button>
            </div>
          </div>
          <aside className="hero-meta" aria-label="作品資訊">
            <div><span>FORM</span><strong>科幻懸疑長篇</strong></div>
            <div><span>STATUS</span><strong><i />第四部連載中</strong></div>
            <div><span>TRANSMISSION</span><strong>2026 / NOW</strong></div>
          </aside>
          <a className="scroll-prompt" href="#now" aria-label="向下瀏覽正在播送內容"><span>SCROLL TO ENTER</span><ArrowDownRight size={17} /></a>
        </section>

        <section className="now-section" id="now" aria-labelledby="now-title">
          <div className="section-heading heading-dark">
            <div><p className="signal-kicker"><span /> NOW ON SIGNAL</p><h2 id="now-title">故事正在<br /><em>擴張。</em></h2></div>
            <p>從一段文字開始，BÐ-Studio 正把同一座宇宙推向不同的語言、聲音與觀看方式。</p>
          </div>
          <div className="feature-grid">
            <article className="feature-card feature-card-primary">
              <img src={assets.original} alt="黑色巨碑被紅色光縫切開的科幻原作視覺" />
              <div className="card-shade" />
              <div className="card-copy"><p>THE ORIGINAL / NOW</p><h3>第四部<br />《第一次出生》</h3><a href="#universe">開始閱讀 <ArrowRight size={16} /></a></div>
            </article>
            <article className="feature-card feature-card-audio">
              <img src={assets.podcast} alt="懸浮於紅霧裡的錄音麥克風" />
              <div className="card-shade" />
              <div className="card-copy"><p>TELL / IN PRODUCTION</p><h3>讓故事<br />被說出來</h3><button onClick={() => handleUpcoming("Tell Podcast")}>取得通知 <ArrowRight size={16} /></button></div>
            </article>
            <article className="feature-card feature-card-signal">
              <div className="signal-pattern" />
              <div className="card-copy"><p>STUDIO SIGNAL / 04</p><h3>每一次轉譯，<br />都回到故事。</h3><a href="#signals">閱讀製作日誌 <ArrowRight size={16} /></a></div>
            </article>
          </div>
        </section>

        <section className="universe-section" id="universe" aria-labelledby="universe-title">
          <div className="universe-topline">
            <p className="signal-kicker"><span /> ONE STORY. FIVE FORMS.</p>
            <div><h2 id="universe-title">進入<br /><em>媒介宇宙</em></h2><p>不是把一個故事複製到不同平台；而是讓每種媒介，用自己最精準的方式，打開同一個世界。</p></div>
            <div className="rail-hint"><span>DRAG / SCROLL</span><ArrowRight size={18} /></div>
          </div>
          <div className="media-rail" role="list" aria-label="BÐ-Studio 媒介宇宙">
            {mediaRail.map((item) => {
              const Icon = item.icon;
              return <article className={`media-card media-${item.type}`} key={item.index} role="listitem">
                {item.image && <img src={item.image} alt="" />}
                <div className="media-card-overlay" />
                <div className="media-card-top"><span>{item.index} / {item.label}</span><span className="status-pill"><i />{item.status}</span></div>
                <div className="media-card-bottom"><div className="media-icon"><Icon size={22} strokeWidth={1.7} /></div><h3>{item.title}</h3><p>{item.text}</p><button onClick={() => item.index === "01" ? jumpTo("#signals") : handleUpcoming(item.title)}>探索這一站 <ArrowRight size={16} /></button></div>
              </article>;
            })}
          </div>
        </section>

        <section className="signal-notes" id="signals" aria-labelledby="signals-title">
          <div className="notes-intro"><p className="signal-kicker"><span /> TRANSMISSION LOG</p><h2 id="signals-title">創作的每一個<br /><em>訊號節點。</em></h2><p>沒有預告之外的黑箱。這裡記錄作品在各種媒介之間移動時，正在發生的選擇。</p><a className="outline-link" href="#join">取得下一道訊號 <Send size={15} /></a></div>
          <div className="note-list">
            {signals.map((signal, index) => <article className="note-item" key={signal.category}>
              <div className="note-index">0{index + 1}</div>
              <div><p>{signal.category} <span>— {signal.date}</span></p><h3>{signal.title}</h3><p className="note-body">{signal.body}</p></div>
              <button onClick={() => toast("完整文章即將公開", { description: "你可以先訂閱 BÐ-Studio 的下一道訊號。" })} aria-label={`閱讀 ${signal.title}`}><ArrowRight size={22} /></button>
            </article>)}
          </div>
        </section>

        <section className="studio-manifesto" id="studio" aria-labelledby="studio-title">
          <div className="manifesto-grid" aria-hidden="true" />
          <div className="manifesto-copy"><p className="signal-kicker"><span /> THE STUDIO</p><h2 id="studio-title">我們不追趕宇宙。<br /><em>我們讓它誕生。</em></h2><p>比爸工作室從一部原創小說開始，建立可長期生長的角色、制度與世界觀。從原作到播客、影集、電影與實體物件，每一步都先回到故事最初的問題。</p></div>
          <div className="principle-stack"><article><span>01</span><strong>原作優先</strong><p>所有轉譯，先從人物與世界的根開始。</p></article><article><span>02</span><strong>媒介有自己的語言</strong><p>每一站都不是重複，而是新的抵達。</p></article><article><span>03</span><strong>長期，而非一次性</strong><p>讓讀者永遠有回到世界的入口。</p></article></div>
        </section>

        <section className="join-section" id="join" aria-labelledby="join-title">
          <div className="join-orbit" aria-hidden="true" /><div className="join-core" aria-hidden="true"><Sparkles size={30} /></div>
          <p className="signal-kicker"><span /> JOIN THE TRANSMISSION</p>
          <h2 id="join-title">下一個世界，<br /><em>由你先收到。</em></h2>
          <p>追蹤《第九次出生》的連載、媒介開發的最新狀態，或和我們談談下一次合作。</p>
          <div className="join-actions"><button className="signal-button" onClick={() => toast("訂閱功能即將開放", { description: "目前可先透過 hello@bd-studio.tw 聯絡工作室。" })}><span>接收製作日誌</span><ArrowRight size={18} /></button><a className="outline-link" href="mailto:hello@bd-studio.tw">hello@bd-studio.tw <ArrowRight size={15} /></a></div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark footer-mark" href="#top"><img src={assets.logo} alt="" aria-hidden="true" /><span>BÐ<br />STUDIO</span></a>
        <div><p>ORIGINAL IP / FROM PAGE TO EVERYWHERE</p><span>© 2026 BÐ-STUDIO. ALL SIGNALS RESERVED.</span></div>
        <a className="back-top" href="#top">BACK TO TOP <ArrowDownRight size={15} /></a>
      </footer>
    </div>
  );
}
