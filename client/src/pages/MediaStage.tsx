/** BÐ-Studio visual reminder: every page is a clear, calm production station—not a marketing promise, but an honest view of work in progress. */
import OriginalMark from "@/components/OriginalMark";
import SeriesMark from "@/components/SeriesMark";
import StageHeader from "@/components/StageHeader";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, CircleDot, Clapperboard, Layers3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const assetBase = import.meta.env.BASE_URL;

export type MediaStageData = {
  slug: "original" | "comic" | "series" | "film";
  index: string;
  label: string;
  english: string;
  status: string;
  statusNote: string;
  title: string;
  lead: string;
  description: string;
  image: string;
  imageAlt: string;
  focal: string;
  progress: string;
  next: string;
  nextHref: string;
  icon: LucideIcon;
  signatureMark?: string;
  steps: { label: string; detail: string; state: "done" | "active" | "next" }[];
};

const icons = { original: OriginalMark, comic: Layers3, series: SeriesMark, film: Clapperboard };
const pipeline = [
  ["01", "原作", "original"], ["02", "漫畫", "comic"], ["03", "影集", "series"], ["04", "電影", "film"],
] as const;

export default function MediaStage({ data }: { data: MediaStageData }) {
  const Icon = icons[data.slug];
  const currentIndex = pipeline.findIndex(([, , slug]) => slug === data.slug);
  const previous = pipeline[(currentIndex + pipeline.length - 1) % pipeline.length];

  return <div className={`site-shell stage-page stage-${data.slug}`}>
    <StageHeader current={data.slug} />
    <main>
      <section className="media-hero" aria-labelledby="media-hero-title">
        <div className="media-hero-main">
          <div className="media-breadcrumb"><a href={assetBase}>比爸工作室</a><span>/</span><b>{data.label}</b><span className="media-index">{data.index}</span></div>
          <div className="media-status"><CircleDot size={13} /><span>{data.status}</span><small>{data.statusNote}</small></div>
          <h1 id="media-hero-title">{data.title}</h1>
          <p className="media-lead">{data.lead}</p>
          <p className="media-description">{data.description}</p>
          <div className="media-actions"><a className="primary-cta" href="#work">查看目前工作 <ArrowRight size={17} /></a><a className="quiet-link" href={assetBase}><ArrowLeft size={15} />回到工作室</a></div>
        </div>
        <figure className="media-hero-visual"><img src={`${assetBase}${data.image}`} alt={data.imageAlt} /><figcaption><span>{data.english} / BÐ-STUDIO</span><span>{data.focal}</span></figcaption><div className="visual-index">{data.index}</div>{data.signatureMark && <img className="media-signature" src={`${assetBase}${data.signatureMark}`} alt="" aria-hidden="true" />}</figure>
      </section>

      <section className="media-now" id="work" aria-label={`${data.label}目前工作`}>
        <div className="media-now-intro"><p className="eyebrow"><span />THE WORK NOW</p><h2>目前，我們正在把<br /><em>故事推向下一站。</em></h2><p>每一個階段都有自己的製作語言；目前的目標與節點會公開在這裡，讓你清楚看見作品如何前進。</p></div>
        <aside className="now-card"><div className="now-card-top"><span>目前重點</span><Icon size={23} strokeWidth={1.4} /></div><strong>{data.progress}</strong><p>這一站完成的工作，會成為下一種媒介可以承接的敘事素材。</p><div className="now-card-status"><CircleDot size={12} />{data.status}</div></aside>
      </section>

      <section className="media-process" aria-labelledby="process-title"><div className="process-heading"><p className="eyebrow"><span />WORKING PROCESS</p><h2 id="process-title">製作路徑，<br /><em>保持透明。</em></h2></div><ol>{data.steps.map((step, index) => <li key={step.label} className={step.state}><div className="step-order">{String(index + 1).padStart(2, "0")}</div><div className="step-copy"><h3>{step.label}</h3><p>{step.detail}</p></div>{step.state === "done" ? <Check size={18} /> : <span>{step.state === "active" ? "NOW" : "NEXT"}</span>}</li>)}</ol></section>

      <section className="media-handoff" aria-label="下一個 IP 階段"><div><p className="eyebrow"><span />THE NEXT MEDIUM</p><h2>故事接下來，<br />會以什麼方式被看見？</h2></div><a className="handoff-card" href={data.nextHref}><span>下一站</span><strong>{data.next}</strong><ArrowUpRight size={22} /></a></section>

      <nav className="pipeline-nav" aria-label="完整 IP 製作路徑"><span>THE BÐ IP JOURNEY</span>{pipeline.map(([number, label, slug]) => <a key={slug} href={`${assetBase}${slug}/`} className={slug === data.slug ? "active" : ""}><small>{number}</small><strong>{label}</strong>{slug === data.slug && <CircleDot size={12} />}</a>)}</nav>
      <div className="media-return"><a href={`${assetBase}${previous[2]}/`}><ArrowLeft size={15} />上一站：{previous[1]}</a><a href={assetBase}>回到 BÐ-Studio <ArrowUpRight size={15} /></a></div>
    </main>
    <footer className="studio-footer"><div><span>© 2026 BÐ-STUDIO · 比爸工作室</span><span className="footer-tagline">ORIGINAL IP, FROM PAGE TO SCREEN</span><a href={`${assetBase}privacy/`}>隱私權政策</a><a href={`${assetBase}terms/`}>服務條款</a></div><a href={assetBase}>回到工作室 <ArrowUpRight size={14} /></a></footer>
  </div>;
}
