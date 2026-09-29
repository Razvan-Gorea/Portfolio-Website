# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — production build to `dist/`
- `npm run lint` — run ESLint over the project
- `npm run preview` — preview the production build locally

There is no test suite configured.

## Architecture

Single-page React 19 + Vite portfolio site, no router, no backend, no state management library. Tailwind CSS v4 is wired in via the `@tailwindcss/vite` plugin (no `tailwind.config.js` — theme tokens live in CSS).

- `src/App.jsx` composes the whole page by stacking section components in order (NavigationBar, MainHeader, About, Education, Technologies, Projects, Footer), all anchored under a single `#top` div with in-page `id` anchors (`#about`, `#projects`) used for scroll navigation.
- `src/components/*.jsx` — one component per page section. Content (project list, education entries, etc.) is hardcoded inline in each component as JS objects/arrays rather than pulled from a CMS or data file — e.g. edit the `projects` array directly in `src/components/Projects.jsx` to add/update a project.
- `src/hooks/useInViewAnimation.jsx` — shared `IntersectionObserver`-based hook that drives the fade/slide-in-on-scroll effect used across nearly every section component. Any new section that should animate in on scroll should reuse this hook rather than reimplementing observer logic.
- `src/index.css` defines the design system as Tailwind v4 `@theme` tokens (`--color-canvas`, `--color-terracotta`, `--color-ink*`, `--color-edge*`, etc.) plus custom utility classes (e.g. `.section-num`, `.section-label`, `.accent-link`, `.tech-tag`, `.sep`, `.grain-overlay`). Prefer these existing tokens/classes over introducing new colors or one-off styles.
- `src/App.css` holds a handful of additional global/animation styles alongside `index.css`.

The visual identity is a warm, textured "paper" palette (canvas/terracotta/ink tones) with a subtle grain overlay (`App.jsx`) and scroll-triggered fade-ins — keep new UI consistent with this rather than introducing a different look.
