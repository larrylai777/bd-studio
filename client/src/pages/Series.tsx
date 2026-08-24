import MediaPage from "@/components/MediaPage";
import { assetBase, assets } from "@/components/SiteShell";
export default function Series() { return <MediaPage kind="series" eyebrow="SERIES BIBLE / 03" title="一季又一季" lead="把宇宙交給角色慢慢改變。" description="影集讓角色有足夠時間走過每一季的選擇與代價，也讓一個制度如何吞沒人，成為長期追看的張力。" image={assets.hero} status="企劃開發" focus="世界觀與季節主線" next="CALMCAT 電影" nextHref={`${assetBase}film/`} steps={[["系列聖經","收攏制度、角色線與世界的長期規則。","done"],["第一季主線","整理能讓觀眾停留的角色弧線與節點。","now"],["單集語言","將故事拆成每一集都有必要存在的篇幅。","next"]]} />; }
