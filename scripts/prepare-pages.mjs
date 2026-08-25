import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const outputDir = resolve("dist/public");
const indexFile = resolve(outputDir, "index.html");
const staticRoutes = ["original", "read", "podcast", "merch", "support", "privacy", "terms"];
const siteUrl = "https://larrylai777.github.io/bd-studio";
const defaultImage = `${siteUrl}/assets/bd-hero-ninth-birth.jpg`;

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BÐ-Studio",
  url: `${siteUrl}/`,
  logo: `${siteUrl}/assets/bd-original-hammer-logo-transparent.png`,
  description: "以原創故事為核心，發展小說、播客、周邊與持續展開的故事企劃之創作工作室。",
};

const pages = {
  root: {
    title: "BÐ-Studio｜第九次出生：原創小說、播客與影像 IP",
    description: "BÐ-Studio 以原創科幻小說《第九次出生》為起點，延伸至播客、周邊與持續展開的故事企劃。",
    schema: { "@context": "https://schema.org", "@type": "WebSite", name: "BÐ-Studio", url: `${siteUrl}/`, inLanguage: "zh-Hant", publisher: organization },
  },
  original: {
    title: "《第九次出生》｜原創科幻小說｜BÐ-Studio",
    description: "閱讀 BÐ-Studio 原創科幻小說《第九次出生》：在記憶能被清除的未來，唯一保有八世記憶的男孩，必須揭開橫跨九世的真相。",
    image: `${siteUrl}/assets/ninth-birth-cover.png`,
    schema: { "@context": "https://schema.org", "@type": "Book", name: "第九次出生", inLanguage: "zh-Hant", genre: ["科幻小說", "懸疑小說"], url: `${siteUrl}/original/`, image: `${siteUrl}/assets/ninth-birth-cover.png`, publisher: { "@type": "Organization", name: "BÐ-Studio" } },
  },
  read: { title: "閱讀《第九次出生》｜BÐ-Studio 原創小說", description: "閱讀 BÐ-Studio 原創科幻懸疑小說《第九次出生》第一部至第四部的完整公開章節。", image: `${siteUrl}/assets/ninth-birth-cover.png`, noindex: true },
  podcast: {
    title: "比爸說播客 BÐ Tell｜《第九次出生》聲音故事｜BÐ-Studio",
    description: "收聽比爸說播客 BÐ Tell，從《第九次出生》的故事、角色與世界觀出發，走進原創科幻與記憶輪迴的聲音宇宙。",
    image: `${siteUrl}/assets/bd-podcast-stage.jpg`,
    schema: { "@context": "https://schema.org", "@type": "PodcastEpisode", name: "第六集《地下學校》—《第九次出生》", description: "比爸說播客 BÐ Tell 的《第九次出生》單集，探索火星、記憶清除與第九次人生的真相。", url: `${siteUrl}/podcast/`, partOfSeries: { "@type": "PodcastSeries", name: "比爸說播客 BÐ Tell" }, inLanguage: "zh-Hant" },
  },
  merch: { title: "BÐ-Studio 周邊企劃｜第九次出生收藏", description: "探索 BÐ-Studio 與《第九次出生》的限量周邊、實體收藏與開發訊號。", schema: { "@context": "https://schema.org", "@type": "CollectionPage", name: "BÐ-Studio 周邊企劃", isPartOf: `${siteUrl}/` } },
  support: { title: "支持 BÐ-Studio｜陪《第九次出生》繼續連載", description: "支持 BÐ-Studio 的原創故事創作，陪《第九次出生》持續向下一種媒介前進。", schema: { "@context": "https://schema.org", "@type": "WebPage", name: "支持 BÐ-Studio" } },
  privacy: { title: "隱私權政策｜BÐ-Studio", description: "BÐ-Studio 隱私權政策。", noindex: true },
  terms: { title: "使用條款｜BÐ-Studio", description: "BÐ-Studio 使用條款。", noindex: true },
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character]);
}

function seoMarkup(route, page, noindex = false) {
  const path = route === "root" ? "/" : `/${route}/`;
  const url = `${siteUrl}${path}`;
  const image = page.image ?? defaultImage;
  const robots = page.noindex || noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large";
  const schema = page.schema ?? { "@context": "https://schema.org", "@type": "WebPage", name: page.title, url, inLanguage: "zh-Hant" };
  const enrichedSchema = schema.url ? schema : { ...schema, url };
  return `<!-- SEO:START -->\n<title>${escapeHtml(page.title)}</title>\n<meta name="description" content="${escapeHtml(page.description)}" />\n<meta name="robots" content="${robots}" />\n<link rel="canonical" href="${url}" />\n<meta property="og:type" content="website" />\n<meta property="og:locale" content="zh_TW" />\n<meta property="og:site_name" content="BÐ-Studio" />\n<meta property="og:title" content="${escapeHtml(page.title)}" />\n<meta property="og:description" content="${escapeHtml(page.description)}" />\n<meta property="og:url" content="${url}" />\n<meta property="og:image" content="${image}" />\n<meta name="twitter:card" content="summary_large_image" />\n<meta name="twitter:title" content="${escapeHtml(page.title)}" />\n<meta name="twitter:description" content="${escapeHtml(page.description)}" />\n<meta name="twitter:image" content="${image}" />\n<script type="application/ld+json">${JSON.stringify(enrichedSchema)}</script>\n<!-- SEO:END -->`;
}

function writeSeoPage(sourceHtml, route, page, targetFile, noindex = false) {
  const rendered = sourceHtml.replace(/<!-- SEO:START -->[\s\S]*?<!-- SEO:END -->/, seoMarkup(route, page, noindex));
  writeFileSync(targetFile, rendered);
}

if (!existsSync(indexFile)) {
  throw new Error("GitHub Pages build output is missing dist/public/index.html");
}

const builtIndex = readFileSync(indexFile, "utf8");
writeSeoPage(builtIndex, "root", pages.root, indexFile);

for (const route of staticRoutes) {
  const routeDir = resolve(outputDir, route);
  mkdirSync(routeDir, { recursive: true });
  writeSeoPage(builtIndex, route, pages[route], resolve(routeDir, "index.html"));
}

writeSeoPage(builtIndex, "404", { title: "找不到頁面｜BÐ-Studio", description: "此頁面不存在或已移動。" }, resolve(outputDir, "404.html"), true);
console.log(`Prepared static page entries: ${staticRoutes.join(", ")}`);
