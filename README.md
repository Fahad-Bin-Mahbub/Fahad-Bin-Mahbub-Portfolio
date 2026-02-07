# Fahad Portfolio (Next.js + TypeScript + Tailwind + Framer Motion)

A modern, animation-forward portfolio site built for **GitHub Pages** via **static export**.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Edit your content

All portfolio content lives in:

- `lib/data.ts` (projects, experience, skills, social links, etc.)
- `public/cv.pdf` (your CV PDF)

> Tip: Replace placeholder `href: "#"` links with your real project URLs.

## Build (static export)

```bash
npm run build
```

This generates a static site into `./out`.

## Deploy to GitHub Pages (recommended: included GitHub Actions workflow)

This repo includes: `.github/workflows/deploy.yml`

### 1) Create a GitHub repo

Create a new repository (for example) **`fahad-portfolio`**.

### 2) Push this code to `main`

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git
git push -u origin main
```

### 3) Enable GitHub Pages

In your repo:

- **Settings → Pages**
- Under **Build and deployment**, select **GitHub Actions**

Then push to `main` (or run the workflow manually). GitHub Actions will:

- install dependencies
- build a static export
- deploy the `out` folder to Pages

### 4) Visit your site

Your portfolio will be hosted at:

`https://<YOUR_USERNAME>.github.io/<YOUR_REPO>/`

## Base path notes

For GitHub Pages project sites, Next.js must be built with a `basePath` (`/<repo>`).
This project auto-detects the repo name **in GitHub Actions**, so you usually don't need to change anything.

If you are hosting at a custom domain (root), you can set:

- `NEXT_PUBLIC_BASE_PATH=""`

(Or remove `basePath`/`assetPrefix` in `next.config.ts`.)

---

Made with ❤️ using Next.js, Tailwind CSS, and Framer Motion.
