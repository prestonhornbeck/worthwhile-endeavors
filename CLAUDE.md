# CLAUDE.md

## Project
Website for Worthwhile Endeavors.

## Stack
- Next.js App Router (TypeScript)
- Tailwind CSS
- Deployed on Vercel via GitHub

## Code Conventions
- Pages live in `app/[route]/page.tsx`
- Shared components live in `components/`
- Images live in `public/images/[category]/`
- Use Next.js `<Image>` with `fill` + `object-cover` for full-bleed photos
- Use `<Link>` from `next/link` for internal navigation

## Layout Pattern
- Fixed navbar (`h-16`, `z-50`) — hero sections need `mt-16` to clear it
- Full-bleed photo heroes: `relative min-h-screen flex items-end` with dark overlay and content pinned via `pb-20`
- Sections alternate light/dark backgrounds for visual rhythm

## Brand
- Business name: Worthwhile Endeavors
- Director: Paul Frey — 717-406-8286
- Slogan: "Achieving More, Side by Side."
- Logo: lowercase "we" in white on a blue square
- Primary blue: #4a5b9a
- Accent yellow: #f5c842
- Typography: clean, professional — no decorative fonts

## Services
1. **Supported Employment** — Enables clients with significant disabilities to enter competitive integrated employment via individualized job matching, ongoing support, and extended services.
2. **Job Placement** — Assists clients in preparing for and completing the job search process to secure a position that aligns with their goals.
3. **Job Skills Training** — Goal-focused training for clients who need more support than the employer provides; teaches skills and develops accommodations to increase independence.
4. **Environmental Work Assessment** — Assesses a client's skills across 3+ work environments to identify variables affecting their ability to perform at full potential.
5. **Work Experience** — Short-term placement at a community business to develop skills for long-term competitive employment (volunteer or paid setting).
6. **Summer Earn & Learn (SEAL)** — Statewide program for students with disabilities ages 14–22 providing work readiness training and paid work experience.
7. **Pre-Employment Transition Services (Pre-ETS)** — In-classroom work readiness program for students ages 14–22 preparing for employment after graduation.
8. **Vocational Adjustment Training (VAT)** — Work readiness service for high school students with disabilities; practical classroom instruction on work-related topics.

## Copy Approach
- StoryBrand: customer is the hero, brand is the guide
- Eyebrow labels (small uppercase text) above every headline
- Pricing woven into paragraph text, not headlines

## Git Setup
- Initialize repo and push to GitHub before starting
- Connect GitHub repo to Vercel for auto-deploys
- Main branch = production

## Images
- Always `git add [specific file]` one at a time — iCloud offloads files between cp and git add
- Use `git show HEAD:[filepath] | file -` to verify an image committed correctly
- Portrait images in wide banners always need `object-contain` or a taller section height

## SEO
- Add `app/sitemap.ts` early — easier than adding pages to it later
- Each service/offering should have its own dedicated page
- `export const metadata` on every page with unique title + description
- Add `app/not-found.tsx` for a custom 404 page

## Vercel
- Do NOT enable Cache Components during setup (causes stale page issues)
- Add `export const dynamic = 'force-dynamic'` to any page that won't update after deploy

## Working Style
- No emojis
- Push to GitHub after every change — Vercel auto-deploys from main
- Always `git add [specific files]`, never `git add .` (iCloud causes phantom deletions)
