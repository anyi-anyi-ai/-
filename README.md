# Portfolio Site V2

这是 Anno / anyi 的个人空间设计作品集网站。项目以静态导出为主，面向 Cloudflare Pages 部署，重点展示作品集、个人介绍、学习进程和在线留言入口。

## 项目定位

- 简约高级的设计师个人静态网站
- 作品集优先，兼顾个人介绍与学习记录
- 视觉语言采用浅色/深色毛玻璃、柔和光斑、少量星点和克制动效
- 不采用二次元视觉风格，只参考原项目的页面结构、卡片组织和音乐播放器思路

## 页面结构

- `/`：首页，包含 Hero、快捷入口、精选作品和关于预览
- `/projects`：作品集矩阵，支持分类与搜索
- `/projects/[slug]`：作品详情页，成果图支持点击灯箱预览
- `/about`：关于我，包含身份、学校、技能、设计关注点和联系方式
- `/progress`：学习进程，包含学习分类、技能进度、时间线和目标
- `/message`：在线留言入口，当前为静态表单、留言墙示例和 Cloudflare Functions 预留
- `/portfolio`、`/awards`、`/resume`：保留的作品/履历辅助页面

## 技术栈

- Next.js 16.1.6
- React 19.2.3
- TypeScript 5
- Tailwind CSS v4
- Cloudflare Pages Functions 预留留言接口

## 本地运行

```bash
npm install
npm run dev
```

默认开发命令使用 `next dev --webpack`。这是为了规避 Next.js 16 在中文路径下 Turbopack 偶发的本地运行问题。

常用本地地址：

```text
http://localhost:3000
```

如果端口被占用，可手动指定：

```bash
npm run dev -- -p 3004
```

## 构建与检查

```bash
npm run lint
npm run build
```

项目配置为静态导出：

```ts
output: "export"
```

构建产物输出到 `out/`，可用于 Cloudflare Pages 静态部署。

## Cloudflare Pages 部署

推荐配置：

- Build command: `npm run build`
- Build output directory: `out`
- Node.js version: 20 或更新

`functions/api/messages.ts` 是留言功能的 Cloudflare Pages Functions 占位接口。当前留言页前端仍保持静态预览，不会真实写入云端；后续开放真实留言墙时，需要补 D1 或 KV、Turnstile、防刷和审核流程。

## 数据与内容维护

- 作品、分类、个人信息、学习进程等集中在 `src/data/site-data.ts`
- 留言墙示例数据在 `src/data/messages.ts`
- 音乐播放列表在 `src/data/music-data.ts`
- 作品图片位于 `public/projects/`，项目详情页图库通过 `ProjectGallery` 复用灯箱预览
- 音频文件位于 `public/audio/`

## 当前限制

- 在线留言仅完成第一版静态交互与接口预留，暂不真实保存留言
- `文字稿图纸` 仍偏过程资料页，后续可补真实封面、年份和更多图纸内容
- AIGC 实验分类暂时作为分类入口保留，后续可补具体作品
