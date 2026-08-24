/** BÐ-Studio media template: use a single cinematic hero, production status and transparent stage-by-stage information. */
import { ArrowRight, Check, CircleDot } from "lucide-react";
import { SiteFooter, SiteHeader } from "./SiteShell";

type PageKind = "original" | "podcast" | "series" | "film" | "merch";
type Props = { kind: PageKind; eyebrow: string; title: string; lead: string; description: string; image: string; status: string; focus: string; currentCover?: string; steps: Array<[string, string, "done" | "now" | "next"]>; next: string; nextHref: string };

export default function MediaPage({ kind, eyebrow, title, lead, description, image, status, focus, currentCover, steps, next, nextHref }: Props) {
  return <div className="page-shell" id="top"><SiteHeader current={kind} /><main>
    <section className="page-hero"><img src={image} alt="" /><div className="page-hero-shade" /><div className="page-hero-copy"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-lead">{lead}</p><p className="page-description">{description}</p><a className="page-cta" href="#current">查看目前製作 <ArrowRight size={18} /></a></div><div className="hero-status"><span>STATUS</span><strong><i />{status}</strong><span>FOCUS</span><strong>{focus}</strong></div></section>
    <section className="current-section" id="current"><div><p className="eyebrow eyebrow-dark">THE WORK NOW</p><h2>這一站，<br /><em>正在發生。</em></h2><p>每一個階段都有自己的節奏。我們把作品如何往下一站前進，清楚留在這裡。</p></div>{currentCover ? <article className="status-card status-card-cover"><img src={currentCover} alt="《第九次出生》封面" /></article> : <article className="status-card"><p><CircleDot size={14} /> {status}</p><strong>{focus}</strong><span>這次累積的內容，會成為下一種媒介可以承接的故事素材。</span></article>}</section>
    <section className="process-section"><div><p className="eyebrow">WORKING PROCESS</p><h2>製作路徑，<br /><em>保持透明。</em></h2></div><ol>{steps.map(([label, detail, state], index) => <li className={state} key={label}><span>0{index + 1}</span><div><h3>{label}</h3><p>{detail}</p></div>{state === "done" ? <Check size={19} /> : <b>{state === "now" ? "NOW" : "NEXT"}</b>}</li>)}</ol></section>
    <section className="next-stage"><div><p className="eyebrow">NEXT MEDIUM</p><h2>故事接下來，<br />會在哪裡被看見？</h2></div><a href={nextHref}><span>下一站</span><strong>{next}</strong><ArrowRight size={24} /></a></section>
  </main><SiteFooter /></div>;
}
