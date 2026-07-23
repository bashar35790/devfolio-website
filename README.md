# Devfolio — Abul Bashar | Premium Developer Portfolio

A premium, interactive developer portfolio built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. Features smooth-scroll animations, dynamic cursor effects, a contact form with email integration, and a fully responsive dark/light theme.

## Key Features

### 🎨 Visual & Animation
- **Fluid Cursor Effects** — Custom canvas-based cosmic fire particle cursor and a soft gradient pulse orb that follows mouse movement
- **Smooth Scrolling** — Lenis-powered smooth scroll engine synchronized with GSAP ScrollTrigger
- **Scroll-Triggered Animations** — Framer Motion + GSAP reveal animations on scroll (parallax, scale, blur, directional fades)
- **Magnetic Hover** — Interactive elements gently follow the cursor within a configurable magnetic range
- **Morphing Blobs** — Organic CSS blob morph animations for decorative background elements
- **Infinite Marquee** — Tech stack strip and blog carousel with seamless infinite scroll

### 🧭 Pages & Routing
- **Hero** — Typing animation cycling through roles (Full Stack Developer, MERN Specialist, etc.), profile image with GSAP reveal, tech stack marquee
- **About** — Personal info card, skills grid (Frontend, Backend, DevOps), experience timeline, education section
- **Projects** — Filterable project gallery (category tabs with AnimatePresence transitions), live demo / GitHub links, empty state
- **Blogs** — Infinite horizontal ticker carousel of blog cards with hover-pause and edge fade masks
- **Contact** — Form with real email delivery via Resend, zod validation, success/error feedback
- **404** — Animated custom not-found page

### 🎭 Theme & Styling
- **Dark/Light Mode** — Full theme toggle with system preference detection, persisted to localStorage
- **Glassmorphism** — Consistent frosted-glass card components with backdrop blur
- **CSS Custom Properties** — Centralized theme tokens for colors, borders, shadows
- **Responsive** — Fully responsive design across mobile, tablet, and desktop

### ⚙️ Architecture
- **App Router** — Next.js 16 App Router with layout, loading, and error boundaries
- **TypeScript** — Strict mode with typed content schemas and component props
- **Component Primitives** — Reusable animation wrappers (`ScrollReveal`, `TextReveal`, `Magnetic`)
- **Static Content** — Blog and project data as typed TypeScript arrays in `src/contents/`
- **Centralized Config** — All personal info (name, email, social links) in `src/config/site.ts`
- **API Route** — Server-side contact form handler with zod validation + Resend email transport

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 16, React 19 |
| **Language** | TypeScript (strict) |
| **Styling** | Tailwind CSS v4, PostCSS, CSS custom properties |
| **Animation** | Framer Motion, GSAP (ScrollTrigger), Lenis |
| **Icons** | react-icons, @heroicons/react |
| **Email** | Resend |
| **Validation** | Zod |
| **Deployment** | Netlify |

## Getting Started

```bash
git clone https://github.com/bashar35790/devfolio-website.git
cd devfolio-website
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file:

```env
RESEND_API_KEY=your_resend_api_key
```

The contact form will still work in simulation mode without this key.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

## Project Structure

```
src/
├── app/            # App Router pages, API routes, context
│   ├── about/
│   ├── blogs/
│   ├── contact/
│   ├── projects/
│   └── api/contact/
├── components/     # React components (Hero, Navbar, Projects, etc.)
├── config/         # Centralized site configuration
├── contents/       # Static data (blogs, projects)
├── lib/            # Utility modules (email, etc.)
└── types/          # TypeScript type definitions
```
