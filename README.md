# Param's Portfolio

A personal portfolio for **Param Bhavesh Bhatt** — first-semester Diploma CSE student, vibe coder, and electronics explorer.

Built with **React + Vite**, plain CSS, no login, no database. Every piece of personal content lives in **one file**, so updating the site never means touching component code.

## Quick start

```bash
npm install
npm run dev      # local dev server (auto-opens, usually http://localhost:5173)
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## ✏️ How to edit your content

Open **`src/data/profile.js`** — it is the single source of truth for the whole site. Change the text between the quotes, save, and the dev server updates instantly. You should almost never need to edit any other file.

### 1. Name, role & profile photo

```js
name: 'Param Bhavesh Bhatt',
role: 'Diploma CSE Student',
avatar: '',            // ← put a photo here
```

**To add your photo:** drop an image into the `public/` folder (create it if it doesn't exist) and set `avatar: '/me.jpg'`. A full URL (`https://...`) also works. While `avatar` is empty, a "PB" monogram placeholder is shown.

### 2. Hero headline & buttons

```js
hero: {
  headline: 'I build ideas into real things.',
  subtitle: 'Diploma CSE student, **vibe coder**, and electronics explorer.',
  ctaPrimary:   { label: 'View projects', href: '#projects' },
  ctaSecondary: { label: 'Get in touch',  href: '#contact' },
},
```

Wrap any words in `**double asterisks**` in the subtitle to make them bold/bright.

### 3. About paragraphs

`about.paragraphs` is a simple list — add or remove paragraphs freely:

```js
about: {
  paragraphs: [
    'First paragraph...',
    'Second paragraph...',
  ],
},
```

### 4. Project cards

Each item in `projects` becomes one card. To add a project, copy an existing block, paste it, and edit the values:

```js
{
  title: 'My New Project',
  status: 'In Progress',   // or 'Live' — controls the badge color
  year: '2026',
  description: 'What it is and why you built it.',
  tags: ['React', 'ESP32'],
  links: {
    github: 'https://github.com/yourname/my-new-project',
    demo:   'https://my-new-project.example.com',
  },
},
```

- **Placeholder links:** while `github`/`demo` are `'#'`, the card shows a "(soon)" hint and the link is disabled — safe to ship before your repo is public. Replace `'#'` with the real URL whenever you're ready.
- **Never invent results:** keep the description honest about what the project does *today*.

### 5. Skills ("Learning in public")

```js
{ name: 'JavaScript', level: 'Learning', learning: 'DOM, fetch & async patterns' },
```

- `level` accepts `Comfortable`, `Learning`, or `Just started` (each gets its own badge color; anything else falls back to a neutral style).
- `learning` is the small "currently learning" note under the skill name.

### 6. Build log entries

Each entry in `buildLog.entries` is one timeline item. Copy → paste → edit:

```js
{
  date: 'Week 4 · Oct 2026',
  title: 'What I worked on this week',
  body: 'One or two honest sentences about what you built, broke, or learned.',
},
```

Newest entries usually go first (top of the list).

### 7. Contact links

```js
contact: {
  email: 'your.email@example.com',  // becomes a mailto: link
  github: 'https://github.com/yourname',
  linkedin: 'https://www.linkedin.com/in/yourname',
},
```

While a link is `'#'`, the card is shown but disabled with a hint.

### 8. Footer

```js
footer: {
  builtBy: 'Built by Param Bhavesh Bhatt',
  note: 'Diploma CSE · Semester 1 · Learning in public',
},
```

## 🗂 Project structure

```
├── index.html              # page title, meta description, favicon
├── src/
│   ├── data/profile.js     # ★ EDIT THIS — all personal content
│   ├── components/         # one file per section (Nav, Hero, Projects…)
│   ├── styles.css          # design tokens at the top, then section styles
│   ├── App.jsx             # section order + scroll-spy + reveal animations
│   └── main.jsx            # React entry point
└── public/                 # put images here (create if missing)
```

- **Colors / theme:** tweak the CSS variables at the top of `src/styles.css` (`--bg`, `--blue`, `--purple`, …).
- **Section order:** rearrange the component list in `src/App.jsx`.
- **Nav links:** edit the `LINKS` list at the top of `src/components/Nav.jsx`.

## ♿ Accessibility & behavior notes

- Semantic landmarks (`header`, `main`, `section`, `footer`), one `<h1>`, labelled sections.
- Skip-to-content link, visible focus rings, `aria-current` on the active nav link.
- Mobile-first responsive layout; the nav stays sticky and readable on small screens.
- Animations are subtle and fully disabled under `prefers-reduced-motion: reduce`.
- Placeholder links are `aria-disabled` and do nothing instead of jumping the page.

## 🚀 Deploying

`npm run build` produces a static `dist/` folder — host it anywhere that serves static files: Netlify, Vercel, GitHub Pages, Cloudflare Pages. No environment variables, no backend.

For GitHub Pages, set `base` in `vite.config.js` to your repo name (e.g. `base: '/portfolio/'`) before building.
