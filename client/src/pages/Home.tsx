/** BÐ-Studio visual reminder: studio-first, product-clear, literary at its core—one original world travelling across four intentional formats. */
import OrbitalCanvas from "@/components/OrbitalCanvas";
import FilmMark from "@/components/FilmMark";
import MerchMark from "@/components/MerchMark";
import OriginalMark from "@/components/OriginalMark";
import PodcastMark from "@/components/PodcastMark";
import SeriesMark from "@/components/SeriesMark";
import StageHeader from "@/components/StageHeader";
import { ArrowDown, ArrowUpRight, BookOpenText, Handshake, Mail, Sparkles } from "lucide-react";

const assetBase = import.meta.env.BASE_URL;

const mediaStages = [
  { number: "01", title: "原作", english: "ORIGINAL", description: "小說是世界觀、角色弧線與每一次改編選擇的起點。", status: "連載中", href: `${assetBase}original/`, icon: OriginalMark },
  { number: "02", title: "播客", english: "PODCAST", description: "Tell 用聲音談創作選擇，讓世界觀在文字之外被重新說一次。", status: "節目籌備中", href: `${assetBase}podcast/`, icon: PodcastMark },
  { number: "03", title: "影集", english: "SERIES", description: "讓角色有足夠時間，走過每一季的選擇與代價。", status: "企劃開發", href: `${assetBase}series/`, icon: SeriesMark },
  { number: "04", title: "電影", english: "FILM", description: "寧靜喵 CALMCAT 把被共同見證的命題，濃縮成一次不可替代的銀幕觀看。", status: "長期開發", href: `${assetBase}film/`, icon: FilmMark },
  { number: "05", title: "周邊", english: "MERCH", description: "拉力一方 L&F 把世界觀與角色記憶，做成可以帶著走的實體物件。", status: "商品開發中", href: `${assetBase}merch/`, icon: MerchMark },
];

const journal = [
  ["FIELD NOTE 04", "第四部《第一次出生》持續連載", "原作", `${assetBase}original/`],
  ["AUDIO NOTE 01", "《第九次出生》Podcast「Tell」節目企劃啟動", "播客", `${assetBase}podcast/`],
  ["STUDIO NOTE 01", "一條龍原創 IP 製作架構正式公開", "工作室", `${assetBase}#ip-journey`],
] as const;

const engagements = [
  { icon: BookOpenText, label: "追蹤旗艦 IP", detail: "跟著《第九次出生》，從連載章節開始認識這個世界。", cta: "前往原作", href: `${assetBase}original/` },
  { icon: Mail, label: "訂閱開發日誌", detail: "每一個媒介轉譯的節點，都會先公開在這裡。", cta: "查看日誌", href: `${assetBase}#journal` },
  { icon: Handshake, label: "洽談改編合作", detail: "無論是出版、製作或發行，我們樂於討論下一步。", cta: "hello@bd-studio.tw", href: "mailto:hello@bd-studio.tw" },
];

export default function Home() {
  return (
    <div className="site-shell studio-home">
      <StageHeader current="studio" />
      <main id="top">
        <section className="studio-hero" aria-labelledby="studio-hero-title">
          <div className="hero-grid-line hero-grid-one" />
          <div className="hero-grid-line hero-grid-two" />
          <div className="studio-hero-copy">
            <div className="eyebrow"><span />BÐ-STUDIO · ORIGINAL IP ENGINE</div>
            <h1 id="studio-hero-title">從一部小說，<br /><em>開始一座宇宙。</em></h1>
            <p>比爸工作室以創辦人的原創小說為起點，依序發展成播客、影集與電影。每一次轉譯，都讓故事被更完整地看見。</p>
            <div className="hero-actions">
              <a className="primary-cta" href="#ip-journey">探索 IP 路徑 <ArrowDown size={17} /></a>
              <a className="quiet-link" href={`${assetBase}original/`}>從《第九次出生》開始 <ArrowUpRight size={15} /></a>
            </div>
            <div className="hero-footnote"><Sparkles size={14} /><span>旗艦 IP：<b>《第九次出生》</b> · 科幻懸疑長篇</span></div>
          </div>
          <div className="hero-orbit-stage" aria-label="可互動的 BÐ-Studio IP 軌道圖">
            <img src={`${assetBase}assets/hero-cosmos.webp`} alt="抽象宇宙軌道構成的比爸工作室原創世界" />
            <OrbitalCanvas />
            <div className="orbit-caption"><span className="status-dot" />INTERACTIVE IP MAP · DRAG TO EXPLORE</div>
            <div className="orbit-legend"><span>ORIGINAL</span><i /><span>PODCAST</span><i /><span>SERIES</span><i /><span>FILM</span><i /><span>MERCH</span></div>
          </div>
        </section>

        <section className="studio-intro" aria-label="比爸工作室定位">
          <p className="intro-kicker">ONE STORY · MANY WAYS TO BE SEEN</p>
          <h2>不只是把小說改編成別的形式。<br />而是讓同一個世界，<em>找到每一種最適合的語言。</em></h2>
          <div className="intro-aside"><span>比爸工作室</span><p>一間由創辦人主導、從原作開始建立長期 IP 價值的一條龍內容工作室。</p></div>
        </section>

        <section className="journey-section" id="ip-journey" aria-labelledby="journey-title">
          <div className="section-topline"><div><p className="eyebrow"><span />THE BÐ IP JOURNEY</p><h2 id="journey-title">一個世界，<br /><em>五個抵達方式。</em></h2></div><p>你可以從任何一站走進這個宇宙；每一頁都會告訴你它此刻正在被如何製作，以及故事接下來要往哪裡去。</p></div>
          <div className="journey-rail">
            <div className="rail-line" />
            {mediaStages.map((stage, index) => {
              const Icon = stage.icon;
              return <a key={stage.title} className={`journey-card card-${index + 1}`} href={stage.href}>
                <div className="journey-number">{stage.number}<span>/{stage.english}</span></div>
                <div className="journey-icon"><Icon size={22} strokeWidth={1.45} /></div>
                <div className="journey-main"><h3>{stage.title}</h3><p>{stage.description}</p></div>
                <div className="journey-bottom"><span className="stage-status-dot" />{stage.status}<ArrowUpRight size={16} /></div>
              </a>;
            })}
          </div>
        </section>

        <section className="flagship-section" aria-labelledby="flagship-title">
          <div className="flagship-visual"><img src={`${assetBase}assets/reading-dawn.webp`} alt="霧中門扉構成的第九次出生旗艦 IP 視覺" /><span>FLAGSHIP IP<br />01 / 01</span></div>
          <div className="flagship-copy"><p className="eyebrow"><span />FLAGSHIP IP · THE NINTH BIRTH</p><h2 id="flagship-title">《第九次出生》<br /><em>一個關於記憶、名字與再次成為自己的故事。</em></h2><p className="flagship-description">當十七萬人重新擁有選擇記得或忘記的權利，林澈才發現：真正困難的不是醒來，而是如何活在黎明之後。這是比爸工作室正在擴張的第一個原創宇宙。</p><div className="flagship-meta"><div><strong>04</strong><span>故事部數</span></div><div><strong>30</strong><span>已上線章節</span></div><div><strong>NOW</strong><span>第四部連載中</span></div></div><a className="primary-cta" href={`${assetBase}original/`}>進入原作宇宙 <ArrowUpRight size={17} /></a></div>
        </section>

        <section className="studio-principles" aria-labelledby="principles-title">
          <div><p className="eyebrow"><span />HOW WE BUILD</p><h2 id="principles-title">一條龍，不代表匆忙。<br /><em>代表每一步都能回到故事。</em></h2></div>
          <div className="principle-list">
            <article><span>01</span><h3>原作優先</h3><p>先讓人物、制度與世界觀在文字中長出完整的根，再開始決定它要如何被看見。</p></article>
            <article><span>02</span><h3>媒介有自己的語言</h3><p>播客、影集與電影不是重複內容；它們各自承擔最適合的節奏、距離與情感張力。</p></article>
            <article><span>03</span><h3>長期，而非一次性</h3><p>以能持續發展的 IP 思維累積作品資產，也替每次回到這個世界的讀者保留入口。</p></article>
          </div>
        </section>

        <section className="journal-section" id="journal" aria-labelledby="journal-title">
          <div className="journal-heading"><div><p className="eyebrow"><span />STUDIO JOURNAL</p><h2 id="journal-title">開發，正在發生。</h2></div><p>這裡記錄故事在不同媒介之間移動的每一個節點。</p></div>
          <div className="journal-list">{journal.map(([code, title, category, href]) => <a href={href} key={code}><span>{code}</span><strong>{title}</strong><small>{category}</small><ArrowUpRight size={17} /></a>)}</div>
        </section>

        <section className="engage-section" aria-labelledby="engage-title">
          <div className="section-topline"><div><p className="eyebrow"><span />JOIN THE STUDIO</p><h2 id="engage-title">你可以，<br /><em>從這裡開始參與。</em></h2></div><p>無論是讀者、創作夥伴或發行方，都有一條清楚的入口。</p></div>
          <div className="engage-list">{engagements.map(({ icon: Icon, label, detail, cta, href }) => <a className="engage-card" href={href} key={label}><Icon size={20} strokeWidth={1.5} /><h3>{label}</h3><p>{detail}</p><span>{cta} <ArrowUpRight size={14} /></span></a>)}</div>
        </section>
      </main>
      <footer className="studio-footer"><div><span>© 2026 BÐ-STUDIO · 比爸工作室</span><span className="footer-tagline">FROM PAGE TO SCREEN</span><a href={`${assetBase}privacy/`}>隱私權政策</a><a href={`${assetBase}terms/`}>服務條款</a></div><a href="#top">回到頂端 <ArrowUpRight size={14} /></a></footer>
    </div>
  );
}
