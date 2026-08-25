/** BÐ-Studio novel reader: red-black editorial chrome with quiet, high-legibility story pages. */
import { ArrowLeft, ArrowRight, BookOpen, List, Loader2, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { SiteFooter, SiteHeader, assetBase } from "@/components/SiteShell";
import { getPartForChapter, loadNovelPart, novelParts, type NovelPart } from "@/data/ninthBirthIndex";

const MAX_CHAPTER = novelParts.at(-1)?.end ?? 1;

function readChapterFromUrl() {
  const number = Number(new URLSearchParams(window.location.search).get("chapter"));
  return Number.isInteger(number) && number >= 1 && number <= MAX_CHAPTER ? number : 1;
}

export default function Reader() {
  const [chapterNumber, setChapterNumber] = useState(readChapterFromUrl);
  const [part, setPart] = useState<NovelPart | null>(null);
  const [tocOpen, setTocOpen] = useState(false);
  const currentPart = useMemo(() => getPartForChapter(chapterNumber), [chapterNumber]);
  const chapter = part?.chapters.find((item) => item.number === chapterNumber);
  const previous = chapterNumber > 1 ? chapterNumber - 1 : null;
  const next = chapterNumber < MAX_CHAPTER ? chapterNumber + 1 : null;

  useEffect(() => {
    let active = true;
    setPart(null);
    loadNovelPart(currentPart.number).then((loaded) => {
      if (active) setPart(loaded);
    });
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    return () => { active = false; };
  }, [currentPart.number, chapterNumber]);

  useEffect(() => {
    const syncFromUrl = () => setChapterNumber(readChapterFromUrl());
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, []);

  const readerHref = (number: number) => `${assetBase}read/?chapter=${number}`;

  return <div className="reader-site" id="top">
    <SiteHeader current="original" />
    <main className="reader-layout">
      <div className="reader-toolbar">
        <a href={`${assetBase}original/`}><ArrowLeft size={17} />原作目錄</a>
        <span><BookOpen size={15} />《第九次出生》</span>
        <button onClick={() => setTocOpen((open) => !open)} aria-expanded={tocOpen}><List size={17} />章節目錄</button>
      </div>

      <div className="reader-frame">
        <aside className={`reader-toc ${tocOpen ? "is-open" : ""}`} aria-label="小說章節目錄">
          <div className="reader-toc-heading"><div><p>FULL TEXT ARCHIVE</p><strong>四部 · {MAX_CHAPTER}章</strong></div><button onClick={() => setTocOpen(false)} aria-label="關閉章節目錄"><X size={18} /></button></div>
          {novelParts.map((partMeta) => <section key={partMeta.id}>
            <div className="reader-part-heading"><span>VOL. 0{partMeta.number}</span><strong>第{["一", "二", "三", "四"][partMeta.number - 1]}部・{partMeta.title}</strong><em>{partMeta.status}</em></div>
            {partMeta.chapters.map((item) => <a className={item.number === chapterNumber ? "active" : ""} href={readerHref(item.number)} key={item.id} onClick={() => setTocOpen(false)}><span>{String(item.number).padStart(2, "0")}</span>{item.title.replace(/^第[一二三四五六七八九十]+章：/, "")}</a>)}
          </section>)}
        </aside>

        <article className="reader-article">
          {!chapter ? <div className="reader-loading"><Loader2 size={22} />載入章節內容</div> : <>
            <header><p className="eyebrow">{chapter.partLabel} / CH.{String(chapter.number).padStart(3, "0")}</p><h1>{chapter.title}</h1><div><span>BÐ-STUDIO ORIGINAL</span><span>《第九次出生》</span></div></header>
            <div className="reader-copy">{chapter.paragraphs.map((paragraph, index) => <p key={`${chapter.id}-${index}`}>{paragraph}</p>)}</div>
            <nav className="reader-pagination" aria-label="章節導覽">
              {previous ? <a href={readerHref(previous)}><small>PREVIOUS</small><strong>← 上一章</strong></a> : <span />}
              <a href={`${assetBase}original/#novel-catalog`}><small>INDEX</small><strong>返回目錄</strong></a>
              {next ? <a href={readerHref(next)}><small>NEXT</small><strong>下一章 →</strong></a> : <span />}
            </nav>
          </>}
        </article>
      </div>
    </main>
    <SiteFooter />
  </div>;
}
