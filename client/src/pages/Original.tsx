/** BÐ-Studio visual reminder: original writing is the source archive—calm, considered and immediately readable. */
import MediaStage from "./MediaStage";

export default function Original() {
  return <MediaStage data={{
    slug: "original", index: "01", label: "原作", english: "ORIGINALS", status: "連載中", statusNote: "THE NINTH BIRTH · VOLUME 04",
    title: "故事，從一個名字開始。", lead: "小說不是所有媒介的前言，而是每一個世界觀、角色弧線與影像選擇的原始座標。",
    description: "比爸工作室以長篇小說建立可持續生長的原創宇宙。從《第九次出生》開始，人物、制度與未命名的可能，都先在文字中被完整地看見。",
    image: "assets/hero-cosmos.webp", imageAlt: "淡紫宇宙軌道構成的第九次出生原作視覺", focal: "第九次出生 · 科幻懸疑長篇", progress: "第四部《第一次出生》連載中", next: "查看漫畫開發", nextHref: `${import.meta.env.BASE_URL}comic/`, icon: null as never, signatureMark: "assets/original-mark.webp",
    steps: [
      { label: "世界觀檔案", detail: "建立規則、時間線與角色命題，讓故事能夠跨媒介生長。", state: "done" },
      { label: "小說連載", detail: "以卷冊和章節累積讀者關係，持續打磨角色的核心選擇。", state: "active" },
      { label: "改編藍圖", detail: "將敘事節點整理為畫格、場次與鏡頭語言的共同依據。", state: "next" },
    ],
  }} />;
}
