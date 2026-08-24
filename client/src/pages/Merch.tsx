/** BÐ-Studio visual reminder: 拉力一方 lets the IP world be carried offline—still honest about what's in development. */
import MediaStage from "./MediaStage";

export default function Merch() {
  return <MediaStage data={{
    slug: "merch", index: "05", label: "周邊", english: "MERCH", status: "商品開發中", statusNote: "拉力一方 · OFFICIAL MERCH LINE",
    title: "讓這個世界，被帶著走。", lead: "拉力一方是比爸工作室的官方周邊品牌，把《第九次出生》的世界觀與角色記憶，轉譯成可以留在生活裡的實體物件。",
    description: "從服飾、印刷到收藏小物，拉力一方以原作、漫畫與影集累積的視覺語言為基礎，設計不喧嘩、但辨識度高的周邊商品，讓喜歡這個世界的人有方式把它帶回家。",
    image: "assets/merch-hero.webp", imageAlt: "深色霧面漸層與細座標弧線構成的周邊品牌抽象視覺", focal: "拉力一方 · CARRY THE WORLD WITH YOU", progress: "首波系列設計與打樣", next: "回到原作起點", nextHref: `${import.meta.env.BASE_URL}original/`, icon: null as never, signatureMark: "assets/merch-mark.webp",
    steps: [
      { label: "品牌識別", detail: "建立拉力一方的獨立標誌與色彩語言，並與 IP 主視覺維持可辨識的連結。", state: "done" },
      { label: "首波系列設計", detail: "從旗艦 IP 的關鍵意象出發，打樣第一批服飾與印刷品。", state: "active" },
      { label: "上架與通路", detail: "規劃線上開賣時間與實體通路，並公開首發商品清單。", state: "next" },
    ],
  }} />;
}
