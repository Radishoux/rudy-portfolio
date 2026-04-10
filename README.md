# Rudy Quinternet — Portfolio

Personal portfolio site for **Rudy Quinternet**, Senior Software Engineer based in Paris.

Live at: [radishoux.github.io/rudy-portfolio](https://radishoux.github.io/rudy-portfolio)

---

## About

Six years of experience across AI, defense (NATO), and logistics. Stack: React, Next.js, Node.js, Angular, Flutter, AWS, GCP. Holds a NATO Secret clearance.

Sections: Hero · About · Skills · Experience · Education · Contact

---

## Stack

- **Next.js 16** — App Router, static export
- **TypeScript**
- **Tailwind CSS v4**
- **Bun** — package manager
- **GitHub Actions** — auto-deploy on push to `master`

---

## Local dev

```bash
bun install
bun run dev
```

Open [http://localhost:3000/rudy-portfolio](http://localhost:3000/rudy-portfolio)

## Build

```bash
bun run build   # outputs to /out
```

---

## Customize

All content is in one file: `src/data/profile.ts`  
Edit it to update any text, tech, experience or contact info — no need to touch the components.

To add a photo, drop it in `public/` and reference it in `src/components/Hero.tsx` or `src/components/About.tsx`.
