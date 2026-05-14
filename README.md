# Modern Portfolio

A personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features a dark theme, animated hero section with spotlight effects, bento-grid about section with an interactive 3D globe, and clean sections for skills, projects, education, and contact.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **3D:** React Three Fiber + `@react-three/drei`
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm

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

### Type Check

```bash
npm run type-check
```

---

## Customising Your Content

All portfolio content lives in a **single file**: [`src/data/index.ts`](src/data/index.ts).

Search for `[REPLACE` in that file to find every placeholder you need to update. Here's what to fill in:

### Personal Info

```ts
// src/data/index.ts
export const personalInfo = {
  name: "Your Name",
  role: "Data Scientist & ML Engineer",
  tagline: "A short, punchy headline.",
  bio: "2–3 sentence personal summary.",
  email: "you@example.com",
};
```

### Projects

Each project card needs:
- `title` — project name
- `description` — 1–2 sentences covering what it does and any notable results
- `techStack` — array of technology names
- `githubUrl` — link to your GitHub repo
- `liveUrl` *(optional)* — link to live demo
- `featured` *(optional)* — shows a "Featured" badge

### Education & Certifications

Set `type: "education"` for degrees and `type: "certification"` for certificates.  
Use `credentialUrl` to link to a Credly badge or course certificate.

### Social Links

Update the `link` values in `socialLinks` with your GitHub profile, LinkedIn profile, and email.

### Site Metadata

Update the `<title>` and `<description>` in [`src/app/layout.tsx`](src/app/layout.tsx).

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout, fonts, metadata
│   ├── page.tsx         # Assembles all sections
│   └── globals.css      # Tailwind directives, custom keyframes
├── components/
│   ├── ui/
│   │   ├── BentoGrid.tsx        # Bento grid container + items
│   │   ├── FloatingNavbar.tsx   # Scroll-aware fixed nav
│   │   ├── GlobeCard.tsx        # R3F 3D globe (SSR-safe)
│   │   ├── MagicButton.tsx      # CTA with animated border
│   │   ├── SkillBadge.tsx       # Pill badge for skills
│   │   ├── Spotlight.tsx        # SVG spotlight for hero
│   │   └── TextGenerateEffect.tsx  # Word-reveal animation
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   └── index.ts         # ← Edit this file to update all content
├── lib/
│   └── utils.ts         # cn() utility
└── types/
    └── index.ts         # Shared TypeScript interfaces
```
