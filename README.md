# AI Verse 🔮

A curated, multi-page directory of the best AI tools across writing, image, code, video, and audio — built as a frontend development project for **DecodeLabs Batch 2026**.

🔗 **Live site:** _add your Vercel link here after deploying_

---

## 📖 About

AI Verse is a hand-picked directory of 50+ AI tools for designers, developers, writers, and builders. The site is fully static (HTML, CSS, and vanilla JavaScript — no frameworks, no build step) and is organized as a multi-page website with a working search and filter system.

## ✨ Features

- **4 pages** — Home, Tools, About, and Contact, with a shared header and footer
- **Live search & category filter** on the Tools page (vanilla JS, no page reload)
- **Responsive hamburger menu** for mobile navigation
- **Contact form** with client-side validation (name, email, message)
- **Accessible by design** — skip-to-content link, semantic landmarks, `aria-current` for active nav links, visible focus states, and `prefers-reduced-motion` support
- **Fully responsive** — works down to small mobile screens
- **CSS variables** for theming — colors, radii, and shadows are all controlled from one place in `style.css`

## 🗂️ Project Structure

```
aiverse/
├── index.html        # Home page — hero, trending tools, about preview
├── tools.html         # Full tools directory with search + category filters
├── about.html         # About the project and curation process
├── contact.html       # Contact form with validation
├── style.css          # All styling (CSS variables, layout, responsive rules)
├── script.js          # Mobile nav toggle, search/filter logic, form validation
└── vercel.json        # Deployment config (clean URLs)
```

## 🛠️ Built With

- HTML5 (semantic markup, ARIA labels)
- CSS3 (custom properties, Flexbox, Grid, media queries)
- Vanilla JavaScript (no libraries or frameworks)
- [Google Fonts](https://fonts.google.com/) — Outfit (display) & Space Grotesk (body)

## 🚀 Running Locally

No build tools or dependencies needed — it's plain HTML/CSS/JS.

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/aiverse.git
   cd aiverse
   ```
2. Open `index.html` directly in your browser, **or** serve it locally:
   ```bash
   python3 -m http.server 8000
   ```
3. Visit `http://localhost:8000` in your browser.

## ☁️ Deployment

This project is deployed on **Vercel**.

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New → Project**.
3. Import this repository.
4. Framework preset: **Other** (it's a static site, no build step required).
5. Click **Deploy**.

`vercel.json` is already included to enable clean URLs (e.g. `/about` instead of `/about.html`).

## 📌 Categories Covered

| Category | Examples |
|---|---|
| ✍️ Writing & Content | Claude, Jasper, Copy.ai, Grammarly |
| 🎨 Image Generation | DALL-E 3, Stable Diffusion, Adobe Firefly, Leonardo AI |
| 💻 Code & Development | Cursor, Tabnine, Replit AI, v0 by Vercel |
| 🎬 Video & Audio | Runway Gen-3, ElevenLabs, Sora, Udio |

## 📄 License

This is a student/internship project built for educational purposes. Tool names, logos, and descriptions belong to their respective owners.

## 🙌 Acknowledgements
self build project  for learning and developing
