/** BÐ-Studio visual reminder: film is the concentrated, cinematic expression of a world already earned across prior forms. */
import MediaStage from "./MediaStage";

export default function Film() {
  return <MediaStage data={{
    slug: "film", index: "04", label: "電影", english: "FILM", status: "世界觀開發", statusNote: "CINEMATIC ADAPTATION · LONG-TERM VISION",
    title: "最後，讓世界走進銀幕。", lead: "電影不是 IP 的終點，而是將一個已被讀者與觀眾共同見證的命題，凝聚成一次不可替代的觀看。",
    description: "比爸工作室以原作為根，以漫畫與影集累積角色和世界的重量；當故事走向電影，將以最精準的視聽語言，留下它在時代裡應有的篇幅。",
    image: "assets/footer-archive.webp", imageAlt: "無限絲帶與檔案紙組成的電影世界觀抽象視覺", focal: "FEATURE FILM · A WORLD WORTH RETURNING TO", progress: "長期電影改編與世界觀資產整理", next: "查看周邊商品", nextHref: `${import.meta.env.BASE_URL}merch/`, icon: null as never,
    steps: [
      { label: "電影命題", detail: "提煉足以在有限片長中完成的主角選擇與情感核心。", state: "done" },
      { label: "視聽探索", detail: "以場景、聲音和鏡頭測試，尋找世界在大銀幕上的呼吸方式。", state: "active" },
      { label: "長片開發", detail: "在故事成熟、夥伴齊備時，進入完整劇本與製作規劃。", state: "next" },
    ],
  }} />;
}
