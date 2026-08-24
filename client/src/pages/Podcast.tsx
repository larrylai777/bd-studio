/** BÐ-Studio visual reminder: Tell carries the world into voice—commentary and discussion between the page and the screen. */
import MediaStage from "./MediaStage";

export default function Podcast() {
  return <MediaStage data={{
    slug: "podcast", index: "02", label: "播客", english: "PODCAST", status: "節目籌備中", statusNote: "TELL · BÐ-STUDIO PODCAST",
    title: "讓故事，被說出來。", lead: "Tell 是比爸工作室的官方 podcast，用聲音談原作寫作背後的選擇，也讓角色與世界觀在文字之外被重新說一次。",
    description: "從創作意圖、角色心理到世界觀設定，Tell 邀請原作者與相關創作者對談，作為原作與影集之間、值得被聆聽的中繼站。",
    image: "assets/volume-orbit.webp", imageAlt: "檔案紙與軌道組成的播客企劃抽象視覺", focal: "TELL · LET THE STORY BE HEARD", progress: "試播集錄製與節目調性確立", next: "查看影集企劃", nextHref: `${import.meta.env.BASE_URL}series/`, icon: null as never, signatureMark: "assets/podcast-mark.webp",
    steps: [
      { label: "節目定位", detail: "建立節目調性與每集討論框架，確保與原作世界觀維持一致語氣。", state: "done" },
      { label: "試錄與剪輯", detail: "錄製試播集，確立聲音風格與後製流程。", state: "active" },
      { label: "上架與發布", detail: "規劃上架平台與更新頻率，並公開首發集數。", state: "next" },
    ],
  }} />;
}
