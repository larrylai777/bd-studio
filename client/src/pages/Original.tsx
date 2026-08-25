/** BÐ-Studio original page: four-volume story index, not the legacy BÐ-novel visual system. */
import { ArrowRight, BookOpen } from "lucide-react";
import { SiteFooter, SiteHeader, assetBase, assets } from "@/components/SiteShell";
import { novelParts } from "@/data/ninthBirthIndex";

const partNames = ["第一", "第二", "第三", "第四"];

export default function Original() {
  const readerHref = (chapter: number) => `${assetBase}read/?chapter=${chapter}`;
  return <div className="page-shell original-page" id="top">
    <SiteHeader current="original" />
    <main>
      <section className="original-hero"><img src={assets.original} alt="《第九次出生》原創小說主視覺" /><div className="original-hero-shade" /><div className="original-hero-copy"><p className="eyebrow">ORIGINAL NOVEL / COMPLETE ARCHIVE</p><h1>第九次出生</h1><p>記憶能被清除的未來，唯一保有八世記憶的男孩，必須在第九次人生裡追問：自己究竟是誰。</p><a href="#novel-catalog">查看四部章節 <ArrowRight size={18} /></a></div><div className="original-hero-status"><span>VOLUMES</span><strong>04</strong><span>PUBLIC CHAPTERS</span><strong>30</strong></div></section>

      <section className="novel-catalog" id="novel-catalog"><div className="novel-catalog-intro"><p className="eyebrow eyebrow-dark">THE NINTH BIRTH / FULL TEXT</p><h2>四部小說，<br /><em>一個完整人生。</em></h2><p>第一部至第四部的所有公開章節已整合至 BÐ-Studio。選擇一部開始閱讀，或從章節清單直接進入故事。</p></div><div className="novel-part-grid">{novelParts.map((part) => <article className="novel-part-card" key={part.id}><span>VOL. 0{part.number}</span><p>{part.status}</p><h3>{partNames[part.number - 1]}部<br />{part.title}</h3><strong>CH.{String(part.start).padStart(3, "0")} — {String(part.end).padStart(3, "0")}</strong><p className="novel-part-description">{part.description}</p><a href={readerHref(part.start)}>閱讀本部 <ArrowRight size={17} /></a></article>)}</div></section>

      <section className="chapter-archive"><div><p className="eyebrow">CHAPTER ARCHIVE</p><h2>所有章節，<br /><em>都在這裡。</em></h2><p>完整保留 BÐ-novel 的公開正文與章節順序，並以 BÐ-Studio 的站內閱讀器重新編排。</p></div><div className="chapter-archive-list">{novelParts.map((part) => <section key={part.id}><header><span>0{part.number}</span><h3>{partNames[part.number - 1]}部・{part.title}</h3><em>{part.status}</em></header><ol>{part.chapters.map((chapter) => <li key={chapter.id}><a href={readerHref(chapter.number)}><span>CH.{String(chapter.number).padStart(3, "0")}</span><strong>{chapter.title}</strong><ArrowRight size={16} /></a></li>)}</ol></section>)}</div></section>

      <section className="original-reading-callout"><div><BookOpen size={25} /><p className="eyebrow">START FROM THE BEGINNING</p><h2>從出生警報，<br />走進第九次人生。</h2></div><a href={readerHref(1)}>開始閱讀 <ArrowRight size={20} /></a></section>
    </main>
    <SiteFooter />
  </div>;
}
