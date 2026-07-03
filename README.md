# Preet Nagda — Terminal Portfolio

A terminal-flavoured one-page portfolio built with React, TypeScript and Vite. Sticky `./section` nav, `❯ command` section headers, git-log-style experience timeline, One Dark palette.

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check + production build (dist/)
npm run preview  # serve the production build locally
```

## Profile config folder

All profile-related data lives in [`config/`](config/) in the codebase — currently `profile.json`, with images to follow. `config/sample.profile.json` is a placeholder template documenting the schema: copy it over `profile.json` and fill in your own details to reuse this site. `profile.json` is imported statically (type-checked against `src/types/profile.ts` at build time). Other assets placed in `config/` (e.g. images) are referenced via `configUrl('images/…')` from `src/lib/config.ts`; the Vite plugin in `vite.config.ts` serves the folder at `/config` in dev and copies it into `dist/config` on build.

## Structure

```
config/profile.json         # all portfolio content (identity, skills, projects, …)
src/types/profile.ts        # TypeScript types for the config schema
src/components/SiteNav.tsx  # sticky navigation with scroll-spy highlighting
src/components/sections/    # hero, about, skills, projects, experience, contact
src/components/Footer.tsx   # ❯ exit 0
```
