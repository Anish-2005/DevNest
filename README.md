# 🕸️ DevNest — The Upside Down of Full‑Stack Learning

<p align="center">
	<img alt="DevNest Logo" src="/public/assets/logo-hero.png" width="220" />
</p>

> "In the world of code, there's always another layer... Welcome to the Upside Down." — DevNest

[![Platform](https://img.shields.io/badge/platform-Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Tailwind](https://img.shields.io/badge/tailwind-css-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![Three.js](https://img.shields.io/badge/three.js-000000?style=for-the-badge&logo=three.js)](https://threejs.org)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

DevNest is an immersive, Stranger‑Things‑inspired learning experience for developers. It blends narrative-driven quests with hands-on dev exercises, interactive visualizations (Three.js), and curated roadmaps to accelerate learning.

---

## 🔭 Table of Contents

- [Quick Preview](#-quick-preview)
- [Highlights](#-highlights)
- [Tech Stack](#-tech-stack)
- [Architecture & Code Map](#-architecture--code-map)
- [Installation & Local Dev](#-installation--local-dev)
- [Firebase / Auth Setup](#-firebase--auth-setup)
- [Design & UX Notes](#-design--ux-notes)
- [Screenshots & Media](#-screenshots--media)
- [Contributing](#-contributing)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)
- [License & Contacts](#-license--contacts)

---

## 🔐 Quick Preview

Open the local dev server after setup to explore:

```bash
npm install
npm run dev
```

The landing page contains an animated Three.js background, neon styling, and a protected app experience where every page except the landing route is guarded by Firebase auth.

---

## ✨ Highlights

- Immersive Stranger‑Things styling: neon reds, scanlines, and retro typography.
- Componentized architecture: components live under `src/components`, page routes under `src/app`.
- Three.js background scene in `src/components/three/ThreeScene.tsx` with home‑only effects.
- Firebase auth (email & Google) with `src/lib/firebase.ts` exports.
- AuthGuard in `src/components/auth/AuthGuard.tsx` protects routes client‑side.

---

## 💡 Tech Stack

- Next.js (App Router)
- React 19 (server/client components)
- Tailwind CSS + global CSS for theme
- Framer Motion for micro‑interactions
- Three.js for 3D background visuals
- Firebase (Auth, optional DB/Storage)
- TypeScript

---

## 🏗️ Architecture & Code Map

Project top-level structure (important files/folders):

```
src/
 ├─ app/                # Next.js App Router pages
 │   ├─ layout.tsx
 │   ├─ page.tsx        # Landing page
 │   ├─ login/page.tsx  # Auth UI
 │   └─ ...
 ├─ components/         # Reusable UI pieces
 │   ├─ three/          # ThreeScene and helpers
 │   ├─ background/     # Background client wrapper
 │   ├─ auth/           # AuthGuard and helpers
 │   └─ shared/         # Header, Footer
 ├─ data/               # Centralized arrays / fixtures
 ├─ lib/                # firebase.ts, utils
 └─ styles/             # global CSS
```

Key implementation notes:

- Client vs Server: heavy UI and hooks are in client components (use "use client").
- Three.js canvas uses reduced alpha and z-index adjustments for layering under UI.
- AuthGuard performs client‑side redirects to `/login` when not authenticated.

---

## 🧭 Installation & Local Dev

1. Clone the repo

```bash
git clone https://github.com/<your-org>/devnest.git
cd devnest
```

2. Install dependencies

```bash
npm install
```

3. Add environment variables (see next section)

4. Start development server

```bash
npm run dev
```

5. Build for production

```bash
npm run build
npm run start
```

---

## 🔑 Firebase / Auth Setup

DevNest uses Firebase for client authentication. Create a Firebase project and add a Web App. Then set these variables in a `.env.local` file at project root:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=app_id
```

Notes:
- The repo contains `src/lib/firebase.ts` which reads the `NEXT_PUBLIC_*` vars and exports `auth`, `db`, and a `signOutUser()` helper.
- For Google sign-in, enable the Google provider in your Firebase Console.

---

## 🎨 Design & UX Notes (Stranger Things Theme)

- Color system: deep near‑black backgrounds with neon red accents and subtle gradients.
- Typography: retro display for headings + accessible UI type for body text (Inter fallback).
- Motion: gentle parallax and pulsing elements to evoke atmospheric tension without distraction.
- Accessibility: contrast is tuned, focus outlines preserved, and forms have clear labels.

Tips for extending style:
- Use `st-retro`, `st-title`, and `neon-glow-red` utility classes to reuse the theme styles from global CSS.
- Keep Three.js interactions in `src/components/three/ThreeScene.tsx` and toggle heavy animations behind feature flags for performance.

---

## 🖼️ Screenshots & Media

Replace these placeholders with real screenshots useful for the repo's README.

| Landing (Hero) | Login / Auth |
|---|---|
| ![hero](/public/assets/screenshots/hero.png) | ![login](/public/assets/screenshots/login.png) |

Add short animated GIFs showing the Three.js background and the portal flow to increase conversion.

---

## 🧪 Testing & Linting

Commands:

```bash
npm run lint
npm run format
npm run test
```

Add unit tests and integration tests as the codebase matures. Prefer Playwright for end‑to‑end flows (auth, routing, protected pages).

---

## 🚀 Deployment

Recommended: Vercel (Next.js native). Typical steps:

1. Connect GitHub repo to Vercel.
2. Set environment variables in Vercel Dashboard (same `NEXT_PUBLIC_*` vars).
3. Configure project as a Next.js build; Vercel will run `npm run build`.

Alternative: Netlify / Render with appropriate build commands.

---

## 🛠️ Troubleshooting

- If Three.js canvas is hidden: ensure `canvas` z-index is below UI and `alpha`/clearColor settings are correct in `src/components/three/ThreeScene.tsx`.
- If auth redirects loop: check your Firebase config and ensure `AuthGuard` is not wrapping the login page.
- Build errors about client/server: move hooks or browser-only APIs into `"use client"` components.

---

## 🤝 Contributing

We welcome contributions. Please follow these steps:

1. Fork the repo and create a feature branch.
2. Run lint and tests locally.
3. Open a PR with a clear description and screenshots for UI changes.

Checklist for PRs:
- [ ] Descriptive title & summary
- [ ] Tested on mobile and desktop
- [ ] Accessibility checks (keyboard nav + contrast)
- [ ] Update README/screenshots if UI changed

---

## 🧭 Roadmap (short)

- [ ] Interactive code editor + autosave
- [ ] Team challenges + matchmaking
- [ ] In‑app purchases for premium quests
- [ ] Internationalization

---

## 📞 Contact & Support

Developer: Anish — open issues on GitHub or reach out via email: devnest@example.com

---

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
