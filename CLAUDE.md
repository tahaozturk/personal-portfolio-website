# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production (static export to out/)
npm run lint         # Run ESLint
npm run deploy:pages # Build and copy out/ to docs/ for GitHub Pages
npm run preview:pages # Serve the docs/ directory locally
```

## Architecture

This is a **single-page portfolio website** built with Next.js (static export), deployed to GitHub Pages via the `docs/` directory.

- **`app/page.tsx`** — The entire portfolio lives here: Hero, Apps & Courses, About, Contact, and Footer sections. All content is hardcoded in this file.
- **`app/layout.tsx`** — Root layout with metadata, Google Fonts (Geist), Vercel Analytics, and the dark theme class.
- **`app/globals.css`** — Design tokens using OKLCH color system as CSS custom properties, both light and dark themes.
- **`components/ui/`** — shadcn/ui components (New York style). Add new ones via `npx shadcn@latest add <component>`.
- **`lib/utils.ts`** — Exports `cn()` (clsx + tailwind-merge) for composing Tailwind classes.

## Key Behaviors

- **Dark mode is hardcoded** — the `<html>` element has `className="dark"` in [app/layout.tsx](app/layout.tsx). There is no theme toggle.
- **Navigation is scroll-based** — nav buttons call `document.getElementById(id)?.scrollIntoView()`. No Next.js routing is used beyond the root page.
- **Static export** — `next.config.mjs` sets `output: 'export'`. Image optimization is disabled. The build outputs to `out/`, which is then copied to `docs/` for GitHub Pages.
- **TypeScript errors are ignored during build** — `ignoreBuildErrors: true` is set in `next.config.mjs`.

## Styling

Tailwind CSS v4 with PostCSS. All theme colors are CSS custom properties defined in `app/globals.css` using the OKLCH color space. Use the `cn()` utility from `lib/utils.ts` for conditional/merged class names.
