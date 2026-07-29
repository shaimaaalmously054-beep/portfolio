# Shaimaa Almously — AI Engineer Portfolio

A fast, fully static portfolio built from Shaimaa Almously's CV. It has no backend, database, authentication, serverless functions, paid APIs, or runtime data fetching.

The site is plain HTML, CSS, and a small JavaScript file, with Vite used only as an optional local development and production build tool. This keeps the site portable across GitHub Pages, Cloudflare Pages, Netlify, Vercel, or any static file host.

## Project structure

```text
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Free GitHub Pages deployment
├── public/
│   └── cv.pdf                # Downloadable CV, bundled with the site
├── src/
│   ├── main.js               # Mobile navigation and small UI behaviors
│   └── styles.css            # Complete responsive design
├── tests/
│   └── site.test.mjs         # Essential content and link checks
├── index.html                # All portfolio content and SEO metadata
├── package.json
└── vite.config.js
```

## Run locally

### Simplest option

Open `index.html` directly in a browser. The core site works without installing anything.

Some browsers restrict local PDF downloads when a page is opened with a `file://` URL. If that happens, use the development server below.

### Development server

Install [Node.js](https://nodejs.org/) 20.19 or newer, then run:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Production build

```bash
npm run build
```

The complete static site is written to `dist/`. Preview that exact build with:

```bash
npm run preview
```

Run the build and automated content checks together:

```bash
npm test
```

## Update portfolio content

- **Name, summary, experience, education, project copy, or contact links:** edit `index.html`.
- **Colors, spacing, typography, or responsive layout:** edit `src/styles.css`.
- **Small interactions:** edit `src/main.js`.
- **CV:** replace `public/cv.pdf` with the new PDF and keep the same filename.
- **New project:** copy one existing `<article class="project">...</article>` block in `index.html`, update its text, and add only verified links.
- **SEO description:** update the description and social metadata near the top of `index.html`.

After any update, run `npm test` before publishing.

# Deploy for $0

GitHub Pages is the simplest path because the project already includes an automatic deployment workflow. You do not need a domain, server, database, or credit card.

## First deployment

1. Create a free account at [github.com](https://github.com/) if you do not already have one.
2. On GitHub, click **New repository**.
3. Name it `portfolio`, set it to **Public**, and click **Create repository**.
4. Open a terminal in this project folder and run:

   ```bash
   git add .
   git commit -m "Launch AI engineer portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   ```

5. On the GitHub repository page, open **Settings → Pages**.
6. Under **Build and deployment**, set **Source** to **GitHub Actions**.
7. Open the repository's **Actions** tab. The `Deploy portfolio to GitHub Pages` workflow will build and publish the site.
8. When the workflow finishes, your free public URL will be:

   ```text
   https://YOUR-USERNAME.github.io/portfolio/
   ```

GitHub supplies the URL and HTTPS certificate. A custom domain is optional and is not needed.

## Publish future updates

1. Edit `index.html`, `src/styles.css`, or replace `public/cv.pdf`.
2. Test locally with `npm test`.
3. Commit and push:

   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```

GitHub Pages rebuilds the portfolio automatically. The public URL stays the same.

## Other free static hosts

The project is not tied to GitHub Pages:

- **Cloudflare Pages:** connect the repository, set the build command to `npm run build`, and the output directory to `dist`.
- **Netlify:** import the repository with build command `npm run build` and publish directory `dist`.
- **Vercel:** import the repository, choose Vite, and keep the output directory as `dist`.

Each provider supplies a free hosted URL. No provider-specific code, backend service, environment variable, or custom domain is required.

## Zero-cost architecture

- Hosting: free static hosting
- Domain: free provider subdomain
- Database: none
- Backend/server: none
- APIs required at runtime: none
- Contact form service: none; contact uses `mailto:`
- Essential content: bundled in the repository
- CV: bundled as `public/cv.pdf`

The portfolio remains fully useful at **$0 infrastructure cost**.
