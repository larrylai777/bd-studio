import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const outputDir = resolve("dist/public");
const indexFile = resolve(outputDir, "index.html");
const staticRoutes = ["original", "comic", "series", "film", "merch", "privacy", "terms"];

if (!existsSync(indexFile)) {
  throw new Error("GitHub Pages build output is missing dist/public/index.html");
}

for (const route of staticRoutes) {
  const routeDir = resolve(outputDir, route);
  mkdirSync(routeDir, { recursive: true });
  copyFileSync(indexFile, resolve(routeDir, "index.html"));
}

copyFileSync(indexFile, resolve(outputDir, "404.html"));
console.log(`Prepared static page entries: ${staticRoutes.join(", ")}`);
