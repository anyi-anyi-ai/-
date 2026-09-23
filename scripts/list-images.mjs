import fs from "node:fs";
import path from "node:path";

const base = "H:/VCP/博客/portfolio-site-v2/public/projects";
const dirs = fs.readdirSync(base).sort();

for (const dirName of dirs) {
  const fullPath = path.join(base, dirName);
  if (!fs.statSync(fullPath).isDirectory()) continue;

  const files = fs.readdirSync(fullPath).sort((left, right) => {
    if (left.startsWith("cover")) return -1;
    if (right.startsWith("cover")) return 1;
    const leftNum = Number.parseInt((left.match(/\d+/) || ["0"])[0], 10);
    const rightNum = Number.parseInt((right.match(/\d+/) || ["0"])[0], 10);
    return leftNum - rightNum;
  });

  console.log(`${dirName}: ${files.join(", ")}`);
}
