/** BÐ-Studio visual reminder: legal pages stay in the same calm archive voice—precise, unembellished, easy to scan. */
import StageHeader from "@/components/StageHeader";
import { ArrowUpRight } from "lucide-react";

const assetBase = import.meta.env.BASE_URL;

export type LegalSection = { title: string; body: (string | string[])[] };

export default function LegalPage({ eyebrow, title, updated, sections }: { eyebrow: string; title: string; updated: string; sections: LegalSection[] }) {
  return <div className="site-shell legal-page">
    <StageHeader current="other" />
    <main>
      <header className="legal-hero">
        <p className="eyebrow"><span />{eyebrow}</p>
        <h1>{title}</h1>
        <p className="legal-updated">最後更新：{updated}</p>
      </header>
      <article className="legal-body">
        {sections.map((section) => <section key={section.title}>
          <h2>{section.title}</h2>
          {section.body.map((block, index) => Array.isArray(block)
            ? <ul key={index}>{block.map((item) => <li key={item}>{item}</li>)}</ul>
            : <p key={index}>{block}</p>)}
        </section>)}
      </article>
    </main>
    <footer className="studio-footer"><div><span>© 2026 BÐ-STUDIO · 比爸工作室</span><span className="footer-tagline">FROM PAGE TO SCREEN</span><a href={`${assetBase}privacy/`}>隱私權政策</a><a href={`${assetBase}terms/`}>服務條款</a></div><a href={assetBase}>回到工作室 <ArrowUpRight size={14} /></a></footer>
  </div>;
}
