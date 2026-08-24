/** BÐ-Studio visual reminder: comic adaptation turns literary rhythm into intentional frames, contrast and visual pauses. */
import MediaStage from "./MediaStage";

export default function Comic() {
  return <MediaStage data={{
    slug: "comic", index: "02", label: "漫畫", english: "COMICS", status: "開發中", statusNote: "VISUAL DEVELOPMENT · STARTING FROM THE ORIGINAL",
    title: "讓文字，第一次擁有畫格。", lead: "漫畫不是把小說縮短，而是讓角色的沉默、速度與世界的壓力，在一格之內被讀者親眼看見。",
    description: "我們將原作轉譯為可辨識的視覺敘事：角色設計、場景秩序、分鏡節奏與留白，都要忠實服務於故事的情緒與命題。",
    image: "assets/volume-orbit.webp", imageAlt: "檔案紙與軌道組成的漫畫開發抽象視覺", focal: "VISUAL BIBLE · FROM PROSE TO PANELS", progress: "改編企劃與視覺設定開發", next: "查看影集企劃", nextHref: `${import.meta.env.BASE_URL}series/`, icon: null as never,
    steps: [
      { label: "改編取樣", detail: "辨識適合畫格敘事的事件、情緒轉折與角色關係。", state: "done" },
      { label: "視覺聖經", detail: "定義角色輪廓、世界材質、色彩秩序與分鏡語法。", state: "active" },
      { label: "連載頁面", detail: "形成能夠持續更新，也能回收至完整單行本的漫畫結構。", state: "next" },
    ],
  }} />;
}
