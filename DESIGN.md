# Portfolio Site V2 Design

## Design Goal

Portfolio Site V2 is a quiet, static portfolio site for Anno / anyi. Its job is to present spatial design work clearly, make the creator's identity legible, and leave room for learning records and future interaction without turning the site into a heavy blog system.

The site follows the execution documents in `H:\VCP\博客\执行步骤文档`:

- Home as the first portfolio entry point
- Projects as the core work matrix
- About as identity and trust building
- Progress as a learning and growth record
- Message as a cautious first-version interaction surface

## Chosen Approach

The implementation uses Next.js static export with a small set of reusable visual primitives:

- `SiteBackground` for light and dark atmospheric backgrounds
- `Navbar` for global navigation and language switching
- `PageHero` for subpage introductions
- `GlassCard` and local card layouts for glassmorphism panels
- central data files under `src/data/` for portfolio content

The project keeps `output: "export"` because the main delivery target is Cloudflare Pages static hosting. Dynamic behavior is kept client-side unless a feature explicitly needs Cloudflare Pages Functions.

## Key Decisions

### Static First

The site is optimized as a static portfolio. This keeps deployment simple, load behavior predictable, and future Cloudflare Pages hosting straightforward.

### Visual System

Light pages use soft glass, low-contrast gradients, and enough white space for a clean design portfolio feel. Dark pages use sparse stars, cyan/blue accents, and translucent panels to give project and progress pages more depth.

### Data Organization

Project, profile, contact, progress, and navigation-adjacent content currently live mainly in `src/data/site-data.ts`. This differs from the execution documents' suggested split into `projects.ts`, `profile.ts`, and `progress.ts`, but keeps the first version easier to maintain while the information architecture is still changing.

### Project Gallery Preview

Project detail galleries use `ProjectGallery` and the shared `Lightbox` so design images can be inspected full-screen without changing the static export model. This mirrors the reference site's image-browsing behavior while keeping the richer interaction client-side.

### Message Page Boundary

The message page remains a first-version static form and message wall. `functions/api/messages.ts` is present as a Cloudflare Pages Functions placeholder, but the public site should not be treated as a real guestbook until persistence, Turnstile, rate limiting, and review flow are added.

### Local Development

The dev script uses webpack:

```bash
next dev --webpack
```

This avoids a Turbopack issue observed on this Windows workspace with a Chinese path.

## Known Limits

- The message wall does not persist real messages yet.
- `文字稿图纸` is still a process/material page and needs stronger content if it remains in the public project matrix.
- `AIGC实验` is kept as a filter category, but has no dedicated project yet.
- Some execution documents suggest more granular components and data files than the current implementation uses.
- Visual checks should still be repeated on mobile before final deployment.

## Change History

- 2026-06-05: First version established around Home, Projects, About, Progress, and Message.
- 2026-06-08: Added language toggle, webpack dev fallback, execution-document audit, and delivery documentation.
