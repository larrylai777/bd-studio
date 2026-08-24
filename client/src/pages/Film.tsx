import MediaPage from "@/components/MediaPage";
import { assetBase, assets } from "@/components/SiteShell";
export default function Film() { return <MediaPage kind="film" eyebrow="CALMCAT FILM / 04" title="最後走進銀幕" lead="讓共同見證的命題，成為不可替代的觀看。" description="CALMCAT 是 BÐ-Studio 的電影品牌；當故事擁有足夠重量，就以最精準的視聽語言，留下它在時代裡的篇幅。" image={assets.film} status="世界觀開發" focus="電影敘事藍圖" next="L&F 周邊" nextHref={`${assetBase}merch/`} steps={[["影像命題","確認只能由銀幕完成的觀看理由。","done"],["視聽世界觀","建立光線、空間與聲音的敘事規則。","now"],["長片開發","將角色命題凝聚成一次完整觀看。","next"]]} />; }
