/** BÐ-Studio home: the entertainment editorial index that routes readers to every independent media page. */
import { ArrowRight } from "lucide-react";
import { SiteFooter, SiteHeader, assetBase, assets } from "@/components/SiteShell";

const releases = [
  { type: "ORIGINAL NOVEL", title: "第九次出生", date: "第四部・連載中", image: assets.original, href: `${assetBase}original/`, position: "center" },
  { type: "TELL PODCAST", title: "讓故事被說出來", date: "錄製籌備", image: assets.podcast, href: `${assetBase}podcast/`, position: "65% center" },
];

export default function Home() { return <div className="entertainment-site" id="top"><SiteHeader current="home" /><main>
  <section className="media-hero"><img src={assets.hero} alt="人影站在觀測平台，望向深紅星雲裡的破碎圓環" /><div className="hero-tint" /><div className="hero-copy"><p className="eyebrow">BÐ-STUDIO PRESENTS</p><h1>第九次出生</h1><p className="hero-description">在可以選擇記得或遺忘的世界裡，決定你是誰的，從來不只是記憶。</p><a className="hero-cta" href={`${assetBase}original/`}>進入原作宇宙 <ArrowRight size={18} /></a></div></section>
  <section className="catalog-section" id="catalog"><div className="catalog-heading"><p className="eyebrow eyebrow-dark">EXPLORE THE STUDIO</p><h2>正在開展的<br /><em>世界。</em></h2><p>從原作開始，讓故事抵達聲音、實體與更多可能。</p></div><div className="poster-grid">{releases.map((release, index) => <article className="poster-card" key={release.title}><a className="poster-image" href={release.href}><img src={release.image} style={{ objectPosition: release.position }} alt="" /><span className="poster-index">0{index + 1}</span><span className="poster-arrow"><ArrowRight size={19} /></span></a><p>{release.type}</p><h3>{release.title}</h3><strong>{release.date}</strong></article>)}</div></section>
  <section className="signal-band"><div><p className="eyebrow">STUDIO SIGNAL / 04</p><h2>故事不會停在一種形式。</h2></div><p>每一次轉譯，都讓同一個世界以更精準的語言被重新看見。</p><a href={`${assetBase}journal/`}>閱讀製作日誌 <ArrowRight size={17} /></a></section>
</main><SiteFooter /></div>; }
