# UI 优化前期指导：基于 Skill 的视觉提升方案

> 本文件基于 `siklls/skills-main_2/skills/frontend-design` 和 `siklls/skills-main_3/skills/frontend-designer` 两份 Skill 的核心原则，结合当前网站已有的设计语言和技术栈，给出下一阶段 UI 优化的方向判断与执行参考。

---

## 一、当前网站设计语言诊断

### 已建立的基础

| 维度 | 现状 | 评价 |
|---|---|---|
| **配色** | 暖色羊皮纸系统（`#f5f0e7` 底 + `#d0af76` 金铜点缀 + `#5a5147` 正文） | 有明确的 editorial 气质，辨识度高 |
| **字体** | Geist Sans（正文） + Georgia/宋体（标题展示） | 衬线+无衬线搭配合理，但 Georgia 过于常见 |
| **圆角** | 大量 `rounded-[1.5rem]` ~ `rounded-[2.2rem]` | 统一但偏柔和，所有卡片趋同，层级区分不够 |
| **阴影** | 两级阴影（`--shadow-soft` / `--shadow-lift`） | 层级有限，中间状态缺失 |
| **动效** | hover 上浮 + 图片缩放 + 渐变遮罩 | 入场动画完全缺失，滚动体验为静态 |
| **布局** | 标准 max-w-7xl 居中 + grid 分栏 | 安全但缺少破格设计，视觉节奏单一 |

### 核心问题（对照 frontend-design Skill）

1. **缺乏入场动效**：所有页面打开即全量渲染，没有 staggered reveal、fade-in 或 scroll-triggered 动画，与 Skill 要求的"one well-orchestrated page load with staggered reveals creates more delight"差距大
2. **背景层过于平坦**：仅用纯色 `--color-paper` + 微弱径向渐变，缺少 noise texture、gradient mesh、subtle pattern 等增加深度的手段
3. **排版缺乏张力**：所有 section 的节奏一致（kicker → title → copy → grid），没有 asymmetric layout、overlapping element、diagonal flow 等破格设计
4. **字体选择过保守**：Georgia 作为展示字体辨识度不足，中文标题缺少更具个性的字体选择

---

## 二、优化方向规划

基于两份 Skill 的指导，将优化拆解为 5 个可独立执行的方向：

### 方向 A：入场与滚动动效体系

**Skill 依据**: frontend-design 要求"Use scroll-triggering and hover states that surprise"和"high-impact moments: one well-orchestrated page load with staggered reveals"

**具体内容**:
- 首屏 Hero 区域：标题逐字/逐行 fade-up，统计数据 counter 动画
- 全局卡片 & section：基于 Intersection Observer 的 scroll-triggered fade-in + slide-up
- 项目画廊：瀑布式延迟加载，每张图片 stagger 120ms
- 实现方式选择：
  - 方案 1: 纯 CSS `@keyframes` + `animation-delay`（零依赖，适合当前轻量技术栈）
  - 方案 2: 引入 Framer Motion（功能强，但增加包体积约 30KB gzipped）
  - 建议：首页用 CSS 方案即可满足需求，若后续需要复杂交互再引入 Motion 库

### 方向 B：背景与纹理深度

**Skill 依据**: frontend-design 要求"Create atmosphere and depth rather than defaulting to solid colors"，建议使用"gradient meshes, noise textures, geometric patterns, layered transparencies"

**具体内容**:
- 全局底图叠加细腻 noise texture（SVG filter 或 CSS `background-image` 方式，不增加网络请求）
- section 之间使用 gradient mesh 过渡，替代当前单一的 `border-t` 分割
- 首页 Hero 增加动态光斑（CSS `@keyframes` 控制 glow-orb 位移），当前 glow-orb 是静态的
- 项目详情页画廊区域添加微弱的 parallax 视差滚动

### 方向 C：排版节奏与空间破格

**Skill 依据**: frontend-design 要求"Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density."

**具体内容**:
- 首页精选项目区域：4 列等宽卡片 → 改为 2+1 或 1+3 的不等宽布局，打破均匀节奏
- 项目详情页 Hero 区域：尝试图片部分出血（bleed）或与标题区域产生 overlap
- section 之间引入交错排列（左图右文 → 右图左文 交替），避免所有区块视觉重心一致
- 关键数据或引言使用 pull quote 样式（大号斜体 + 偏移 margin），打破文本流

### 方向 D：字体与排版精细化

**Skill 依据**: frontend-design 明确要求"Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts"，frontend-designer 强调 Fluid Typography 和 Design Token 体系

**具体内容**:
- 中文展示字体：评估引入思源宋体（Noto Serif SC）子集化方案，替代 Georgia 作为 `--font-serif-display`
- 英文展示字体：评估 Playfair Display、DM Serif Display 等更具辨识度的选择
- 将 `section-title` 的 `clamp(2.2rem, 4vw, 3.8rem)` 体系扩展为完整的 fluid type scale（h1-h6 + body + small + kicker）
- 字间距 & 行高微调：当前中文标题行高 `1.06` 偏紧，正文行高 `1.95` 偏松，需统一节奏

### 方向 E：响应式与可访问性补全

**Skill 依据**: frontend-designer 强调"Mobile-first responsive"、"WCAG 2.1 AA minimum"、"Keyboard navigation"、"min-height 44px touch target"

**具体内容**:
- 移动端导航：当前 SubpageNav 在窄屏下链接 flex-wrap 堆叠，评估是否需要 hamburger menu
- 触摸目标：检查所有按钮/链接最小尺寸是否达到 44x44px
- 焦点样式：当前未定义 `:focus-visible` 样式，键盘用户无法看到焦点位置
- Skip link：添加隐藏的"跳转到主要内容"链接
- 图片 alt 文本：当前使用模板式 alt（如"尘埃之上图像 1"），可补充更具描述性的文字
- 颜色对比度：验证 `--color-muted-ink`（`#7a6a57`）在 `--color-paper`（`#f5f0e7`）背景上是否满足 AA 标准（4.5:1）

---

## 三、优先级建议

| 优先级 | 方向 | 理由 |
|---|---|---|
| P0 | A 入场动效 | 视觉体验提升最显著，用户第一印象改善最大 |
| P0 | E 可访问性 | focus-visible + touch target 是基础合规，当前完全缺失 |
| P1 | B 背景纹理 | 增加深度感，与当前 editorial 气质互补 |
| P1 | D 字体升级 | 提升辨识度，但需要字体子集化工作 |
| P2 | C 排版破格 | 改动范围最大，风险最高，建议最后执行 |

---

## 四、技术约束与注意事项

1. **保持零运行时依赖**：当前项目仅依赖 Next.js + React + Tailwind，动效优先使用 CSS 方案
2. **静态生成兼容**：所有页面都是 SSG，动效必须在客户端水合后生效，需要 `"use client"` 标记
3. **图片已优化**：94 张 WebP 已完成压缩，不需要重复处理，新增的视觉元素应尽量用 CSS 而非图片
4. **Tailwind v4 语法**：使用 `@theme inline` 而非旧版 `theme.extend`，CSS 变量直接在 `:root` 中定义
5. **中文排版特殊性**：字体子集化（仅打包页面用到的汉字）对加载性能至关重要，全量中文字体可达 10MB+

---

## 五、参考 Skill 来源

| Skill 名称 | 位置 | 核心价值 |
|---|---|---|
| `frontend-design` | `siklls/skills-main_2/skills/frontend-design/SKILL.md` | 审美指导：排版选字、色彩主题、动效微交互、空间构图、反 AI 通用审美 |
| `frontend-designer` | `siklls/skills-main_3/skills/frontend-designer/SKILL.md` | 工程指导：可访问性、响应式、Design Token、组件模式、性能优化 |
| `theme-factory` | `siklls/skills-main_2/skills/theme-factory/SKILL.md` | 辅助参考：10 套预设配色方案可用于风格探索 |
| `canvas-design` | `siklls/skills-main_2/skills/canvas-design/SKILL.md` | 设计思维：设计哲学构建方法论（对视觉风格定义有启发） |
