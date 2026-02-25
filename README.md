# Portfolio (Next.js App Router)

Production-ready personal portfolio for Kunal Mehla with data-driven content, MDX blog, typed content, and light/dark/system theming.

## Stack
- Next.js 14 (App Router) + React 18, TypeScript
- Styling: CSS Modules + global tokens (`src/styles/theme.css`, `globals.css`, `reset.css`)
- Theme: `next-themes` (light/dark/system, persisted, SSR-safe)
- Animations: Framer Motion (subtle)
- Icons: lucide-react, helpers: clsx
- MDX blog: `@next/mdx`, `gray-matter`, `reading-time`
- Tooling: ESLint (`next/core-web-vitals`), Prettier + organize-imports

## Local Setup
1) Install deps: `npm install` (or `pnpm install`).  
2) Dev server: `npm run dev` → http://localhost:3000  
3) Lint / format: `npm run lint`, `npm run format`  
4) Build / start: `npm run build`, `npm start`

## Content model (editable data)
- Site meta / contact: `src/content/site.ts`
- Projects: `src/content/projects.ts` (typed `Project`, slug → `/projects/[slug]`)
- Experience + Education/Certs: `src/content/experience.ts`
- Skills: `src/content/skills.ts`
- Blog posts: add `.mdx` under `src/content/blog/` with frontmatter `title`, `date`, `summary`, `tags?`

## Theming
- Tokens in `src/styles/theme.css` (`:root` + `[data-theme="dark"]`).
- Provider in `src/app/providers.tsx`; toggle in `src/components/ThemeToggle`.
- Globals reference only CSS variables.

## Deployment
- **Vercel**: push repo → import; commands auto-detected (`npm run build`). Node 18+.  
- **Netlify**: build command `npm run build`, publish `.next`; enable Next.js Runtime.  
- Set canonical base URL in `src/content/site.ts` (`url` field) to match your domain for metadata/sitemap/OG.

## Structure (key paths)
- `src/app` — pages (home, projects, experience, skills, blog, contact, 404, sitemap, robots)
- `src/components` — Navbar, Footer, ThemeToggle, Section, Cards, Timeline, Blog/Project cards, etc.
- `src/content` — typed data + MDX posts
- `src/lib` — `mdx.ts` (loader) and `seo.ts` (metadata helper)
- `src/styles` — reset, theme tokens, globals
- `public/og` — default OG image, `public/favicon.ico`
