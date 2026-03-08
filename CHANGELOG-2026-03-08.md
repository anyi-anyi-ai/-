# Portfolio Site 改造记录 (2026-03-08)

## 项目概况

- **技术栈**: Next.js 16.1.6 + React 19.2.3 + Tailwind CSS v4 + TypeScript 5
- **页面总数**: 24 个静态页面（首页 + 总作品集 + 项目总览 + 荣誉页 + 简历页 + 8 个作品集详情 + 8 个项目详情 + 404）
- **设计语言**: 暖色羊皮纸基调（`#f5f0e7`），金铜色点缀（`#d0af76`），editorial 排版风格

---

## 一、图片资源全面压缩与统一

### 问题
原始作品集素材分散在 `H:/VCP/博客/作品集/` 下 8 个文件夹中，格式混杂（JPG/PNG/BMP/WebP/TIF），总计 229MB。网站 public 目录下仅部署了 24 张图片（约 25%），大量作品未接入前端展示。

### 执行结果

| 项目 | 封面 | 详情图 | 合计 |
|---|---|---|---|
| 尘埃之上 | 1 | 11 | 12 |
| 道隐无名 | 1 | 20 | 21 |
| 觅踪 | 1 | 10 | 11 |
| 燃梦立方 | 1 | 6 | 7 |
| 秦土旧腔 | 1 | 20 | 21 |
| 岐黄养生轩 | 1 | 8 | 9 |
| 娱乐空间 | 1 | 5 | 6 |
| 家具设计 | 1 | 6 | 7 |
| **合计** | **8** | **86** | **94** |

- 全部转为 WebP 格式，最大边 2400px，质量 82
- 源文件 229MB → 输出 31.3MB（压缩率 86.3%）
- 命名规范: `cover.webp` + `detail-1.webp` ~ `detail-N.webp`
- 跳过 1 个 75MB 生产级 TIF 文件（001.tif）

### 证书图片

在 `public/awards/` 下新增 3 张证书图片：
- `national-third-prize.webp`（204 KB）
- `certificate-1.webp`（113 KB）
- `certificate-2.webp`（283 KB）

### 工具
创建了 `scripts/process-images.mjs`（Sharp 库），可重复执行完整的源图 → WebP 压缩流程。

---

## 二、数据源统一

### 问题
首页、项目详情页、项目总览页各自维护独立的内联数据定义，8 个项目的信息被重复书写 3 次，字段不一致且难以同步维护。

### 执行结果

**单一数据源**: `src/data/portfolio-data.ts`

```
导出内容:
├── PortfolioItem 类型定义（19 个字段）
├── portfolioItems[] — 全部 8 个项目完整数据
├── portfolioMap — slug → item 映射
├── featuredItems — featured: true 的子集（4 项）
└── awardItems[] — 3 项荣誉数据（含 certificateImage）
```

辅助函数 `buildGallery(slug, detailCount)` 自动生成画廊路径数组，确保图片数量与 public 目录一致。

### 受影响页面
- `src/app/page.tsx` — 删除 3 处内联数据，改为 import
- `src/app/projects/page.tsx` — 删除 projectGroups 内联数据
- `src/app/projects/[slug]/page.tsx` — 删除 8 个项目内联定义（~210 行）
- `src/app/awards/page.tsx` — 使用 awardItems import
- `src/app/resume/page.tsx` — 使用 featuredItems import

---

## 三、总览页缩略图接入

### 问题
`/portfolio` 和 `/projects` 总览页的项目卡片只有纯文字，没有图片预览，浏览体验缺乏视觉引导。

### 执行结果
- `/portfolio` 页每个作品集卡片增加 `heroImage` 缩略图（Next.js Image, fill 模式, object-contain）
- `/projects` 页每个项目卡片增加缩略图
- 使用 `project-preview-frame` 样式类保持统一高度和悬浮渐变效果
- 硬编码数量（"8 个"）替换为 `{portfolioItems.length} 个` 动态值

---

## 四、荣誉页与简历页图片补全

### 荣誉页 (`/awards`)
- 每张荣誉卡片底部接入对应证书图片
- 通过 `awardItems[].certificateImage` 字段驱动

### 简历页 (`/resume`)
- "代表项目"模块增加 2x2 缩略图网格
- 数据来源于 `featuredItems`，展示 4 个精选项目封面

---

## 五、共用组件提取

### 问题
6 个子页面各自复制了几乎相同的顶部导航栏和底部 CTA 区域代码，每处 15-25 行重复 JSX。

### 执行结果

**新建 `src/components/` 目录**，提取 2 个组件：

#### SubpageNav
```tsx
// Props: backLabel, backHref, links[]
// 自动区分内部 Link 和锚点 <a href="#...">
// 已应用: /portfolio, /portfolio/[slug], /projects, /projects/[slug], /awards, /resume
```

#### SubpageFooter
```tsx
// Props: heading, links[]（支持 primary 高亮按钮）
// 已应用: /portfolio, /projects, /awards
// /resume 和详情页保留各自特殊 footer 结构
```

---

## 六、构建问题修复

### 中文引号转义
中文双引号 `\u201c...\u201d` 嵌套在 JavaScript 双引号字符串 `"..."` 中导致解析错误。

修复方式：全部替换为中文方头括号 `「...」`

涉及文件：
- `portfolio-data.ts` — 4 处（道隐无名、觅踪、丝路新生次元织梦、华夏奖）
- `page.tsx` — 1 处
- `awards/page.tsx` — 3 处
- `resume/page.tsx` — 2 处

---

## 最终构建验证

```
Next.js 16.1.6 (Turbopack)
✓ Compiled successfully in 1411.8ms
✓ Generating static pages (24/24) in 754.3ms

Route (app)
├ ○ /                    (首页)
├ ○ /awards              (荣誉页)
├ ○ /portfolio           (总作品集)
├ ● /portfolio/[slug]    (8 个作品集详情)
├ ○ /projects            (项目总览)
├ ● /projects/[slug]     (8 个项目详情)
└ ○ /resume              (简历页)
```

全部 24 个静态页面生成成功，零错误。

---

## 文件结构概览

```
portfolio-site/
├── public/
│   ├── projects/          # 8 个项目文件夹，共 94 张 WebP
│   └── awards/            # 3 张证书 WebP
├── scripts/
│   ├── process-images.mjs # 图片批量压缩工具
│   └── list-images.cjs    # 图片清单查看工具
├── src/
│   ├── app/
│   │   ├── page.tsx           # 首页
│   │   ├── globals.css        # 设计系统
│   │   ├── awards/page.tsx
│   │   ├── resume/page.tsx
│   │   ├── portfolio/page.tsx
│   │   ├── portfolio/[slug]/page.tsx
│   │   ├── projects/page.tsx
│   │   └── projects/[slug]/page.tsx
│   ├── components/
│   │   ├── SubpageNav.tsx     # 共用导航栏
│   │   └── SubpageFooter.tsx  # 共用页脚 CTA
│   └── data/
│       └── portfolio-data.ts  # 唯一数据源
└── package.json
```
