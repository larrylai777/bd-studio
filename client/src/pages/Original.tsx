import MediaPage from "@/components/MediaPage";
import { assetBase, assets } from "@/components/SiteShell";
export default function Original() { return <MediaPage kind="original" eyebrow="ORIGINAL NOVEL / 01" title="第九次出生" lead="故事，從一個名字開始。" description="長篇小說是人物、制度與每一次改編選擇的原始座標。第四部《第一次出生》正在連載。" image={assets.original} status="連載中" focus="第四部《第一次出生》" currentCover={assets.ninthBirthCover} next="Tell Podcast" nextHref={`${assetBase}podcast/`} steps={[["世界觀檔案","建立規則、時間線與角色命題，讓故事跨媒介生長。","done"],["小說連載","以卷冊與章節累積讀者關係，持續打磨人物核心。","now"],["改編藍圖","將故事拆解為聲音與影像可以承接的素材。","next"]]} />; }
