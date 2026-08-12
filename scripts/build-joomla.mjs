/**
 * Собирает Joomla 6 шаблон "mangal61" из Vite-сборки.
 * Запуск: node scripts/build-joomla.mjs
 * Результат: /mnt/documents/mangal61-joomla6-template.zip
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const out = path.join(root, "joomla/build/mangal61");
const src = path.join(root, "joomla/template");

fs.rmSync(path.join(root, "joomla/build"), { recursive: true, force: true });
execSync("npx vite build --base=/templates/mangal61/", { stdio: "inherit" });

fs.cpSync(src, out, { recursive: true });
fs.cpSync(path.join(root, "dist/assets"), path.join(out, "assets"), { recursive: true });

const distIndex = fs.readFileSync(path.join(root, "dist/index.html"), "utf8");
const js = [...distIndex.matchAll(/src="[^"]*\/assets\/([^"]+\.js)"/g)].map((m) => m[1]);
const css = [...distIndex.matchAll(/href="[^"]*\/assets\/([^"]+\.css)"/g)].map((m) => m[1]);

const assetJson = {
  $schema: "https://developer.joomla.org/schemas/json-schema/web_assets.json",
  name: "template.mangal61",
  version: "1.0.0",
  description: "MANGAL61 site template assets",
  license: "GPL-2.0-or-later",
  assets: [
    ...css.map((f) => ({
      name: `template.mangal61.css.${f}`,
      type: "style",
      uri: `templates/mangal61/assets/${f}`,
    })),
    ...js.map((f) => ({
      name: `template.mangal61.js.${f}`,
      type: "script",
      uri: `templates/mangal61/assets/${f}`,
      attributes: { type: "module" },
    })),
    {
      name: "template.mangal61",
      type: "preset",
      dependencies: [
        ...css.map((f) => `template.mangal61.css.${f}#style`),
        ...js.map((f) => `template.mangal61.js.${f}#script`),
      ],
    },
  ],
};
fs.writeFileSync(path.join(out, "joomla.asset.json"), JSON.stringify(assetJson, null, 2));

const zip = "/mnt/documents/mangal61-joomla6-template.zip";
fs.mkdirSync("/mnt/documents", { recursive: true });
fs.rmSync(zip, { force: true });
execSync(`cd ${JSON.stringify(out)} && zip -qr ${JSON.stringify(zip)} .`);
console.log("Готово:", zip);
