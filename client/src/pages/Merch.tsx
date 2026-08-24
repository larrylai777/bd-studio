import MediaPage from "@/components/MediaPage";
import { assetBase, assets } from "@/components/SiteShell";
export default function Merch() { return <MediaPage kind="merch" eyebrow="L&F OBJECTS / 05" title="把世界帶著走" lead="讓故事在生活裡留下可以觸摸的座標。" description="L&F 是 BÐ-Studio 的官方物件線。從服飾、印刷到收藏小物，讓世界觀與角色記憶進入日常。" image={assets.original} status="商品開發" focus="第一批物件企劃" next="回到原作" nextHref={`${assetBase}original/`} steps={[["物件語言","把作品的視覺與情緒轉成可持有的形狀。","done"],["樣品開發","確認材質、尺寸與日常使用的細節。","now"],["首波發布","讓喜歡這個世界的人，把它帶回家。","next"]]} />; }
