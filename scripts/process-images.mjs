import sharp from 'sharp';
import fs from 'fs/promises';
import fsSync from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const TARGET_DIRS = [
  path.join(ROOT_DIR, 'public', 'awards'),
  path.join(ROOT_DIR, 'public', 'projects'),
];

const DATA_FILE = path.join(ROOT_DIR, 'src', 'data', 'portfolio-data.ts');

const MAX_DIMENSION = 2400;
const QUALITY = 82;

/**
 * 递归查找目录下所有 PNG 文件
 */
async function findPNGFiles(dir) {
  const results = [];
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch (err) {
    console.warn(`Warning: Cannot read directory ${dir}: ${err.message}`);
    return results;
  }

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const subResults = await findPNGFiles(fullPath);
      results.push(...subResults);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
        results.push(fullPath);
      }
    }
  }
  return results;
}

/**
 * 处理单个 PNG 文件：转换为 WebP 并删除原文件
 */
async function processPNG(filePath) {
  try {
    const metadata = await sharp(filePath).metadata();
    let pipeline = sharp(filePath);

    const w = metadata.width || 0;
    const h = metadata.height || 0;

    if (w > MAX_DIMENSION || h > MAX_DIMENSION) {
      pipeline = pipeline.resize(MAX_DIMENSION, MAX_DIMENSION, {
        fit: 'inside',
        withoutEnlargement: true,
      });
    }

    const webpPath = filePath.replace(/\.(png|jpe?g)$/i, '.webp');
    await pipeline.webp({ quality: QUALITY }).toFile(webpPath);

    const srcStats = await fs.stat(filePath);
    const destStats = await fs.stat(webpPath);
    const srcSize = srcStats.size;
    const destSize = destStats.size;
    const ratio = ((1 - destSize / srcSize) * 100).toFixed(1);

    // 删除原 PNG 文件
    await fs.unlink(filePath);

    const relativePath = path.relative(ROOT_DIR, filePath);
    console.log(`  ✓ ${relativePath}`);
    console.log(`    ${(srcSize / 1024).toFixed(0)}KB → ${(destSize / 1024).toFixed(0)}KB (-${ratio}%)`);

    return { srcSize, destSize, success: true };
  } catch (err) {
    const relativePath = path.relative(ROOT_DIR, filePath);
    console.error(`  ✗ ${relativePath}: ${err.message}`);
    return { srcSize: 0, destSize: 0, success: false };
  }
}

/**
 * 更新 portfolio-data.ts 中的 .png 引用为 .webp
 */
async function updateDataFile() {
  try {
    let content = await fs.readFile(DATA_FILE, 'utf-8');
    const originalContent = content;

    // 替换所有 .png/.jpg/.jpeg 扩展名为 .webp（在字符串中）
    // 匹配模式：'/xxx.png'、'/xxx.jpg' 或 '/xxx.jpeg'
    const imagePattern = /(['"])([^'"]*?)\.(png|jpe?g)\1/gi;
    let matchCount = 0;

    content = content.replace(imagePattern, (match, quote, imagePath, ext) => {
      matchCount++;
      return `${quote}${imagePath}.webp${quote}`;
    });

    if (matchCount > 0) {
      await fs.writeFile(DATA_FILE, content, 'utf-8');
      console.log(`\n✓ Updated ${matchCount} .png references in portfolio-data.ts to .webp`);
    } else {
      console.log('\nℹ No .png references found in portfolio-data.ts');
    }
  } catch (err) {
    console.error(`Error updating portfolio-data.ts: ${err.message}`);
  }
}

/**
 * 主函数
 */
async function main() {
  console.log('=== PNG to WebP Batch Converter ===\n');
  console.log(`Root directory: ${ROOT_DIR}`);
  console.log(`Max dimension: ${MAX_DIMENSION}px`);
  console.log(`Quality: ${QUALITY}\n`);

  let totalSrc = 0;
  let totalDest = 0;
  let successCount = 0;
  let failCount = 0;

  for (const dir of TARGET_DIRS) {
    const dirName = path.relative(ROOT_DIR, dir);
    console.log(`Scanning: ${dirName}/`);

    const pngFiles = await findPNGFiles(dir);

    if (pngFiles.length === 0) {
      console.log('  No PNG files found\n');
      continue;
    }

    console.log(`  Found ${pngFiles.length} PNG file(s)\n`);

    for (const file of pngFiles) {
      const result = await processPNG(file);
      if (result.success) {
        totalSrc += result.srcSize;
        totalDest += result.destSize;
        successCount++;
      } else {
        failCount++;
      }
    }
    console.log('');
  }

  // 更新数据文件中的引用
  await updateDataFile();

  // 总结
  console.log('=== Summary ===');
  console.log(`Successfully converted: ${successCount} files`);
  if (failCount > 0) {
    console.log(`Failed: ${failCount} files`);
  }
  console.log(`Total source size: ${(totalSrc / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total output size: ${(totalDest / 1024 / 1024).toFixed(2)} MB`);
  if (totalSrc > 0) {
    const savings = ((1 - totalDest / totalSrc) * 100).toFixed(1);
    console.log(`Space saved: ${savings}% (${((totalSrc - totalDest) / 1024 / 1024).toFixed(2)} MB)`);
  }
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
