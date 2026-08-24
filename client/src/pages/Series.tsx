/** BÐ-Studio visual reminder: series development makes the original universe episodic while preserving its long-form suspense. */
import MediaStage from "./MediaStage";

export default function Series() {
  return <MediaStage data={{
    slug: "series", index: "03", label: "影集", english: "SERIES", status: "企劃開發", statusNote: "SERIES BIBLE · SEASONAL STORYTELLING",
    title: "把宇宙，交給一季又一季。", lead: "影集讓角色有時間改變，也讓一個制度如何慢慢吞沒人，成為觀眾願意長期追看的敘事張力。",
    description: "從小說與漫畫累積的世界觀出發，比爸工作室將建構影集聖經、季節主線與單集節奏，讓每一次停播都保留回到故事的理由。",
    image: "assets/reading-dawn.webp", imageAlt: "霧中門框與黎明組成的影集企劃抽象視覺", focal: "SEASON ONE · THE CITY AFTER DAWN", progress: "系列聖經與第一季主線規劃", next: "查看電影計畫", nextHref: `${import.meta.env.BASE_URL}film/`, icon: null as never,
    steps: [
      { label: "系列主軸", detail: "將原作的核心問題收束為可跨季延展的衝突與角色關係。", state: "done" },
      { label: "第一季藍圖", detail: "規劃集數節點、懸念回收與主角在黎明後的完整弧線。", state: "active" },
      { label: "製作開發", detail: "進一步展開劇本、合作製作與影像風格測試。", state: "next" },
    ],
  }} />;
}
