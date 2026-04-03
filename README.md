# Tarun Chakravarthy Duggempudi — Portfolio

A dark, technical portfolio site built with **Next.js 14**, **TypeScript**, and **CSS Modules**.

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx / .module.css
│   ├── Hero.tsx / .module.css
│   ├── Skills.tsx / .module.css
│   ├── Experience.tsx / .module.css
│   ├── Education.tsx / .module.css
│   ├── Contact.tsx / .module.css
│   └── Footer.tsx / .module.css
├── data/
│   └── resume.ts         # ← All your content lives here
└── styles/
    └── globals.css       # CSS variables + resets
```

---

## Customising Content

**All content is in one file: `src/data/resume.ts`**

- Update your GitHub and LinkedIn URLs
- Add/edit jobs under `experience`
- Add projects to a new `projects` array (then create a `Projects` component)
- Adjust skill tags under `skills`

## Customising Design

- **Colors & fonts** → `src/styles/globals.css` (CSS variables at `:root`)
- **Section layout** → each component's `.module.css` file
- **Accent color** → change `--accent` in `globals.css`

---

## Deployment

### Vercel (recommended — zero config)

```bash
npm i -g vercel
vercel
```

### Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments on every push.

---

## Adding a Projects Section

1. Add a `projects` array to `src/data/resume.ts`
2. Create `src/components/Projects.tsx` and `Projects.module.css`
3. Import and add `<Projects />` in `src/app/page.tsx`
