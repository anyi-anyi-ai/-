import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const SOURCE_BASE = 'H:/VCP/博客/作品集';
const AWARDS_BASE = 'H:/VCP/博客/简历和获奖';
const PUBLIC_BASE = 'H:/VCP/博客/portfolio-site/public/projects';
const AWARDS_PUBLIC = 'H:/VCP/博客/portfolio-site/public/awards';

const PROJECT_MAP = {
  '娱乐空间': 'yu-le-kong-jian',
  '家具设计': 'jia-ju-she-ji',
  '尘埃之上': 'chen-ai-zhi-shang',
  '岐黄养生轩': 'qi-huang-yang-sheng-xuan',
  '燃梦立方': 'ran-meng-li-fang',
  '秦土旧腔': 'qin-tu-jiu-qiang',
  '觅踪': 'mi-zong',
  '道隐无名': 'dao-yin-wu-ming',
};

const SKIP_FILES = ['001.tif'];
const MAX_DIMENSION = 2400;
const QUALITY = 82;

async function processImage(srcPath, destPath) {
  try {
    const metadata = await sharp(srcPath).metadata();
    let pipeline = sharp(srcPath);
    const w = metadata.width || 0;
    const h = metadata.height || 0;
    if (w > MAX_DIMENSION || h > MAX_DIMENSION) {
      pipeline = pipeline.resize(MAX_DIMENSION, MAX_DIMENSION, {
        fit: 'inside',
        withoutEnlargement: true,
      });
    }
    await pipeline.webp({ quality: QUALITY }).toFile(destPath);
    const srcSize = fs.statSync(srcPath).size;
    const destSize = fs.statSync(destPath).size;
    const ratio = ((1 - destSize / srcSize) * 100).toFixed(1);
    console.log(`  ${path.basename(srcPath)} -> ${path.basename(destPath)} (${(srcSize / 1024).toFixed(0)}KB -> ${(destSize / 1024).toFixed(0)}KB, -${ratio}%)`);
    return { srcSize, destSize };
  } catch (err) {
    console.error(`  ERROR: ${path.basename(srcPath)}: ${err.message}`);
    return null;
  }
}

function findImages(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findImages(fullPath));
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp', '.bmp', '.gif'].includes(ext)) {
        if (!SKIP_FILES.includes(entry.name)) {
          results.push(fullPath);
        }
      }
    }
  }
  return results;
}

async function processProject(srcFolder, slug) {
  console.log(`\n[${srcFolder}] -> ${slug}/`);
  const destDir = path.join(PUBLIC_BASE, slug);

  // Clean destination directory
  if (fs.existsSync(destDir)) {
    const old = fs.readdirSync(destDir);
    for (const f of old) {
      fs.unlinkSync(path.join(destDir, f));
    }
  } else {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const srcDir = path.join(SOURCE_BASE, srcFolder);
  const imageFiles = findImages(srcDir);
  console.log(`  Source images: ${imageFiles.length}`);

  let totalSrc = 0, totalDest = 0;

  // First image becomes cover.webp
  if (imageFiles.length > 0) {
    const r = await processImage(imageFiles[0], path.join(destDir, 'cover.webp'));
    if (r) { totalSrc += r.srcSize; totalDest += r.destSize; }
  }

  // Remaining become detail-1.webp, detail-2.webp, ...
  for (let i = 1; i < imageFiles.length; i++) {
    const r = await processImage(imageFiles[i], path.join(destDir, `detail-${i}.webp`));
    if (r) { totalSrc += r.srcSize; totalDest += r.destSize; }
  }

  // List final files
  const finalFiles = fs.readdirSync(destDir).sort();
  console.log(`  Output: ${finalFiles.length} files`);

  return { totalSrc, totalDest, count: finalFiles.length };
}

async function processAwards() {
  console.log('\n[证书图片] -> awards/');
  fs.mkdirSync(AWARDS_PUBLIC, { recursive: true });

  const awardFiles = [
    { src: '90220国赛三等奖.jpg', dest: 'national-third-prize.webp' },
    { src: 'cer.jpg', dest: 'certificate-1.webp' },
    { src: '获奖证书（2201-2400）(180).jpg', dest: 'certificate-2.webp' },
  ];

  let totalSrc = 0, totalDest = 0;
  for (const file of awardFiles) {
    const srcPath = path.join(AWARDS_BASE, file.src);
    const destPath = path.join(AWARDS_PUBLIC, file.dest);
    if (fs.existsSync(srcPath)) {
      const r = await processImage(srcPath, destPath);
      if (r) { totalSrc += r.srcSize; totalDest += r.destSize; }
    }
  }
  return { totalSrc, totalDest };
}

async function main() {
  console.log('=== Processing ALL source images to WebP ===\n');

  let grandSrc = 0, grandDest = 0, grandCount = 0;

  for (const [folder, slug] of Object.entries(PROJECT_MAP)) {
    const r = await processProject(folder, slug);
    grandSrc += r.totalSrc;
    grandDest += r.totalDest;
    grandCount += r.count;
  }

  const awardResult = await processAwards();
  grandSrc += awardResult.totalSrc;
  grandDest += awardResult.totalDest;

  console.log('\n=== FINAL SUMMARY ===');
  console.log(`Total images processed: ${grandCount} project + 3 awards`);
  console.log(`Source total: ${(grandSrc / 1024 / 1024).toFixed(1)} MB`);
  console.log(`Output total: ${(grandDest / 1024 / 1024).toFixed(1)} MB`);
  if (grandSrc > 0) {
    console.log(`Savings: ${((1 - grandDest / grandSrc) * 100).toFixed(1)}%`);
  }

  // Print final inventory
  console.log('\n=== FINAL INVENTORY ===');
  for (const slug of Object.values(PROJECT_MAP)) {
    const dir = path.join(PUBLIC_BASE, slug);
    const files = fs.readdirSync(dir).sort();
    console.log(`\n${slug}/ (${files.length} files):`);
    for (const f of files) {
      const size = fs.statSync(path.join(dir, f)).size;
      console.log(`  ${f} - ${(size / 1024).toFixed(0)} KB`);
    }
  }
  if (fs.existsSync(AWARDS_PUBLIC)) {
    const files = fs.readdirSync(AWARDS_PUBLIC).sort();
    console.log(`\nawards/ (${files.length} files):`);
    for (const f of files) {
      const size = fs.statSync(path.join(AWARDS_PUBLIC, f)).size;
      console.log(`  ${f} - ${(size / 1024).toFixed(0)} KB`);
    }
  }
}

main().catch(console.error);
