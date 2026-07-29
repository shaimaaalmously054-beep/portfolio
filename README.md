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

## Deployment

The portfolio is published automatically from the `main` branch through the included GitHub Pages workflow.

**Live portfolio:** [shaimaaalmously054-beep.github.io/portfolio](https://shaimaaalmously054-beep.github.io/portfolio/)

To publish future updates:

```bash
npm test
git add .
git commit -m "Update portfolio"
git push
```
