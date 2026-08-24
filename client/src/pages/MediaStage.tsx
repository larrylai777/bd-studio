/** BÐ-Studio visual reminder: this page frames one medium as a tangible next stage in the same original-IP pipeline. */
import StageHeader from "@/components/StageHeader";
import { ArrowLeft, ArrowUpRight, Check, CircleDot, Clapperboard, Layers3, PenTool, Play } from "lucide-react";
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
  steps: { label: string; detail: string; state: "done" | "active" | "next" }[];
};

const stageIcon = (slug: MediaStageData["slug"]) => ({ original: PenTool, comic: Layers3, series: Play, film: Clapperboard }[slug]);

export default function MediaStage({ data }: { data: MediaStageData }) {
  const Icon = stageIcon(data.slug);
  return (
    <div className={`site-shell stage-page stage-${data.slug}`}>
      <StageHeader current={data.slug} />
      <main>
        <section className="stage-hero">
          <div className="stage-hero-line" />
          <div className="stage-hero-copy">
            <div className="stage-meta"><span>{data.index}</span>{data.label} · {data.english}</div>
            <div className="stage-status"><CircleDot size={13} />{data.status}<span>{data.statusNote}</span></div>
            <h1>{data.title}</h1>
            <p className="stage-lead">{data.lead}</p>
            <p className="stage-description">{data.description}</p>
            <div className="stage-actions">
              <a className="solid-link" href={data.nextHref}>{data.next} <ArrowUpRight size={17} /></a>
              <a className="text-link" href={assetBase}><ArrowLeft size={15} />回到工作室首頁</a>
            </div>
          </div>
          <figure className="stage-hero-figure">
            <img src={`${assetBase}${data.image}`} alt={data.imageAlt} />
            <figcaption><span>{data.english} / BÐ-STUDIO</span><span>{data.focal}</span></figcaption>
          </figure>
          <div className="stage-index">{data.index}</div>
        </section>

        <section className="stage-framework">
          <div className="stage-framework-heading">
            <div className="section-kicker">IP PRODUCTION · {data.english}</div>
            <h2>讓故事進入<br /><em>下一種語言。</em></h2>
          </div>
          <div className="stage-progress-card">
            <Icon size={28} strokeWidth={1.25} />
            <div><span>目前進度</span><strong>{data.progress}</strong></div>
            <p>每個階段都保留原作的核心命題，同時為下一個媒介準備可被延展的敘事節點。</p>
          </div>
          <ol className="stage-steps">
            {data.steps.map((step, index) => <li key={step.label} className={step.state}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{step.label}</strong><p>{step.detail}</p></div>{step.state === "done" ? <Check size={17} /> : <span className="step-state">{step.state === "active" ? "NOW" : "NEXT"}</span>}</li>)}
          </ol>
        </section>

        <section className="stage-bridge">
          <span>THE BÐ IP PIPELINE</span>
          {[
            ["01", "原作", "original"], ["02", "漫畫", "comic"], ["03", "影集", "series"], ["04", "電影", "film"],
          ].map(([index, label, slug]) => <a key={slug} className={slug === data.slug ? "current" : ""} href={`${assetBase}${slug}/`}><small>{index}</small><strong>{label}</strong><ArrowUpRight size={15} /></a>)}
        </section>
      </main>
      <footer className="site-footer"><span>© 2026 BÐ-STUDIO · 比爸工作室</span><span>ORIGINAL IP, FROM PAGE TO SCREEN</span><a href={assetBase}>RETURN TO ORIGIN <ArrowUpRight size={14} /></a></footer>
    </div>
  );
}
