# Anjum Yaseen — Portfolio (GitHub Pages)

A fast, no-build personal portfolio hosted on **GitHub Pages**.

## What’s inside
- **Single-page** site (`index.html`) with Projects, Experience, Skills, Contact
- **Responsive** layout, dark-first design
- **Zero build** — just static HTML/CSS/JS (great for Pages)
- Basic **SEO** (meta tags + JSON-LD) and clean URLs

## Quick start

### 1) Create the repo
1. Go to GitHub and create a **public repository** named: **`anjumyaseen.github.io`** (user site).
2. Leave defaults (no template).

### 2) Add these files
- Download the ZIP from ChatGPT and extract it.
- Drag & drop all files (including the `assets/` folder) into the repo root.
  - Alternatively, via CLI:

```bash
git clone https://github.com/anjumyaseen/anjumyaseen.github.io
cd anjumyaseen.github.io
# copy files into this folder, then:
git add .
git commit -m "Initial portfolio"
git push origin main
```

### 3) Enable GitHub Pages (if needed)
For user sites named `anjumyaseen.github.io`, GitHub serves from the **root of `main`** automatically.
If nothing shows after a few minutes, check **Settings → Pages** and ensure the source is `Deploy from a branch: main / root`.

Your site will live at: **https://anjumyaseen.github.io**

## Customize
- **Text & sections:** edit `index.html` (Projects, Experience, Skills, Contact).
- **Colors & layout:** tweak `assets/css/styles.css` variables.
- **Avatar/logo:** replace `assets/img/avatar.svg` with your own.
- **Links:** update LinkedIn/GitHub/Fawzix/Cloud Hire links to your preference.

## Optional extras
- Add a custom domain (Settings → Pages → Custom domain), then add a `CNAME` file with your domain.
- Create `resume.pdf` and link it in the Contact section.
- Add `404.html` or analytics later.

## License
MIT — do what you like, attribute appreciated.
