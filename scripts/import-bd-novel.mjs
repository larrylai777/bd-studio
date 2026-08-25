import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const sourceDir = "/home/ubuntu/bd-novel";
const targetDir = resolve("client/src/data");
const sourceFiles = ["reading.html", ...Array.from({ length: 29 }, (_, index) => `reading-ch${index + 2}.html`)];

const partSpecs = [
  { number: 1, title: "第九門", start: 1, end: 9, status: "已完結", description: "從出生警報開始，林澈在第九次人生裡重新遇見母親、記憶署與那扇不該存在的門。" },
  { number: 2, title: "黑河低語", start: 10, end: 18, status: "已完結", description: "門後的世界把記憶推進黑市、圖書館與名字法院，所有被保留或被刪除的事都開始索取代價。" },
  { number: 3, title: "十八歲倒數", start: 19, end: 27, status: "已完結", description: "名字庫的真相逐步浮現；林澈必須在十八分鐘與十八年之間，找回被系統奪走的自我。" },
  { number: 4, title: "第一次出生", start: 28, end: 30, status: "連載中", description: "黎明之後，第一張名單與自願整理站帶來新的選擇；第九次出生仍在持續展開。" },
];

function decodeEntities(value) {
  return value
    .replace(/<br\s*\/?\s*>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function extractMatch(html, expression, fallback) {
  return html.match(expression)?.[1] ? decodeEntities(html.match(expression)[1]) : fallback;
}

function extractChapter(fileName, number) {
  const html = readFileSync(resolve(sourceDir, fileName), "utf8");
  const title = extractMatch(html, /<h1 class="reading-chapter-title">([\s\S]*?)<\/h1>/, `第${number}章`);
  const partLabel = extractMatch(html, /<span class="part-badge">([\s\S]*?)<\/span>/, "");
  const content = html.match(/<div class="reading-content"[^>]*>([\s\S]*?)<\/div>\s*<div class="reading-nav"/i)?.[1] ?? "";
  const paragraphs = Array.from(content.matchAll(/<p(?:\s[^>]*)?>([\s\S]*?)<\/p>/gi))
    .map((match) => decodeEntities(match[1]))
    .filter((paragraph) => paragraph && !/^—\s*第.+章完\s*—$/.test(paragraph));
  if (!paragraphs.length) throw new Error(`Unable to extract readable paragraphs from ${fileName}`);
  return { id: `chapter-${number}`, number, title, partLabel, paragraphs };
}

mkdirSync(targetDir, { recursive: true });
const chapters = sourceFiles.map((fileName, index) => extractChapter(fileName, index + 1));
const parts = partSpecs.map((spec) => ({
  id: `part-${spec.number}`,
  ...spec,
  chapters: chapters.filter((chapter) => chapter.number >= spec.start && chapter.number <= spec.end),
}));

for (const part of parts) {
  const output = `import type { NovelPart } from "./ninthBirthIndex";\n\nexport const novelPart: NovelPart = ${JSON.stringify(part, null, 2)};\n`;
  writeFileSync(resolve(targetDir, `ninthBirthPart${part.number}.ts`), output);
}

const indexParts = parts.map(({ chapters: partChapters, ...part }) => ({
  ...part,
  chapters: partChapters.map(({ paragraphs, ...chapter }) => chapter),
}));

const indexOutput = `export type NovelChapter = {\n  id: string;\n  number: number;\n  title: string;\n  partLabel: string;\n  paragraphs: string[];\n};\n\nexport type NovelPart = {\n  id: string;\n  number: number;\n  title: string;\n  start: number;\n  end: number;\n  status: string;\n  description: string;\n  chapters: NovelChapter[];\n};\n\nexport const novelParts = ${JSON.stringify(indexParts, null, 2)};\n\nconst partModules = import.meta.glob<{ novelPart: NovelPart }>("./ninthBirthPart*.ts");\n\nexport async function loadNovelPart(partNumber: number) {\n  const modulePath = \`./ninthBirthPart\${partNumber}.ts\`;\n  const loader = partModules[modulePath];\n  if (!loader) throw new Error(\`Missing novel part: \${partNumber}\`);\n  return (await loader()).novelPart;\n}\n\nexport function getPartForChapter(chapterNumber: number) {\n  return novelParts.find((part) => chapterNumber >= part.start && chapterNumber <= part.end) ?? novelParts[0];\n}\n`;
writeFileSync(resolve(targetDir, "ninthBirthIndex.ts"), indexOutput);

console.log(`Imported ${chapters.length} chapters across ${parts.length} parts into ${targetDir}`);
