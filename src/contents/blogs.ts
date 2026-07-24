import { BlogPost } from "@/types";

export const blogs: BlogPost[] = [
  {
    title: "React Server Components: The Future of Rendering",
    excerpt: "Understanding RSC architecture, benefits, and how to adopt it in Next.js 15+.",
    date: "2026-07-15",
    readTime: "9 min read",
    slug: "react-server-components-deep-dive",
    description:
      "React Server Components represent a paradigm shift in how we think about rendering React applications. Unlike traditional CSR or SSR approaches, RSCs allow components to run exclusively on the server, sending zero JavaScript to the client.\n\nThis means libraries for date formatting, markdown parsing, or database queries can execute entirely server-side, drastically reducing bundle size. The client receives only the pre-rendered HTML and a minimal hydration payload for interactive pieces.\n\nIn practice, adopting RSCs in Next.js 15+ is straightforward — any component without `\"use client\"` is a Server Component by default. The key is designing your component tree so that interactive leaves (client components) are wrapped by server-rendered shells.\n\nOne common pitfall is trying to fetch data in client components when a server fetch would suffice. Moving data fetching to the nearest server boundary improves performance, SEO, and reduces client-side waterfalls.",
  },
  {
    title: "TypeScript 5.x Advanced Patterns for React",
    excerpt: "Master conditional types, template literals, and inference in real-world React codebases.",
    date: "2026-07-08",
    readTime: "11 min read",
    slug: "typescript-advanced-patterns-react",
    description:
      "TypeScript 5.x brings powerful type-level programming features that can make your React code safer and more expressive. Three patterns I use daily: discriminated unions for state machines, template literal types for event handlers, and conditional types for prop inference.\n\nDiscriminated unions are ideal for modeling complex component states. Instead of boolean flags, define a union type like `{ status: 'loading' } | { status: 'success'; data: T } | { status: 'error'; error: Error }`. TypeScript narrows the type in each branch automatically.\n\nTemplate literal types let you derive event handler props from a string union. For example, `\`on\${Capitalize<EventType>}\`` can generate `onClick`, `onChange`, etc., ensuring your generic component exposes only valid handlers.\n\nConditional types with `infer` enable extracting return types from async functions or component props without manual annotations. This reduces boilerplate and keeps your types in sync with runtime code.\n\nThe real win comes when combining these: a form component that infers its validation schema from initial values, autocompletes field names as literal types, and surfaces errors at compile time for missing handlers.",
  },
  {
    title: "Building Performant Apps with Next.js App Router",
    excerpt: "Streaming, partial prerendering, and caching strategies for production-grade applications.",
    date: "2026-06-28",
    readTime: "10 min read",
    slug: "nextjs-app-router-performance",
    description:
      "The Next.js App Router introduced fundamental changes to routing, layout nesting, and data fetching. The most impactful performance features are streaming Suspense boundaries, Partial Prerendering (PPR), and granular caching controls.\n\nStreaming lets you render parts of a page as data becomes available. Wrap slow data-fetching sections in `<Suspense>` with a fallback loader — the rest of the page renders instantly. Combined with the new `loading.tsx` convention, this eliminates full-page spinners.\n\nPartial Prerendering (PPR) is the killer feature for content-heavy sites. PPR statically prerenders the shell of a page while leaving dynamic slots unresolved. When a request comes in, the static shell is served immediately, and dynamic content streams in. This gives you SSG-like TTFB with live data.\n\nFor caching, the App Router uses a four-layer model: full route cache, data cache, full route cache (revalidate), and router cache. Understanding which layer controls what is essential. Use `fetch` options like `next: { revalidate: 3600 }` for time-based invalidation, or `next: { tags: [...] }` for on-demand revalidation.\n\nOne mistake I see often is over-caching. Profile with `next dev --turbo` and the React DevTools Profiler before adding cache directives.",
  },
  {
    title: "Tailwind CSS v4: What Changed and Why It Matters",
    excerpt: "The CSS-first configuration model, new utilities, and migration strategies.",
    date: "2026-06-18",
    readTime: "7 min read",
    slug: "tailwind-css-v4-guide",
    description:
      "Tailwind CSS v4 moves from a JavaScript config file to a CSS-first configuration approach using `@theme`, `@utility`, and `@variant` directives. This shift makes Tailwind feel more native to the CSS ecosystem.\n\nThe `@theme` directive replaces `tailwind.config.js` for design tokens. Define your color palette, spacing scale, and breakpoints directly in CSS with `@theme { --color-primary: #00A8FF; }`. These tokens are then available as both utility classes and CSS custom properties.\n\n`@utility` lets you define custom utilities inline. Need a `scrollbar-hide` class? Just write `@utility scrollbar-hide { scrollbar-width: none; }`. No plugin boilerplate needed.\n\n`@variant` replaces the complex `variant` config for custom states. You can define `@variant dark { ... }` or `@variant portrait { ... }` with standard CSS.\n\nMigration from v3 is mostly additive — your existing classes still work. Start by upgrading the package, then incrementally move tokens from config to `@theme`. The Tailwind CLI also includes a codemod for automatic migration.\n\nThe performance improvements in v4 are substantial too: the new engine produces smaller CSS in most real-world codebases, often 30-50% smaller.",
  },
  {
    title: "Full-Stack Authentication: From Sessions to JWTs",
    excerpt: "Comparing session-based auth, JWTs, and NextAuth v5 patterns for modern web apps.",
    date: "2026-06-10",
    readTime: "12 min read",
    slug: "full-stack-authentication-patterns",
    description:
      "Authentication is one of those problems every developer solves differently — and often wrong. The two dominant approaches are session-based (server-stored state) and JWT (client-stored tokens). Each has tradeoffs.\n\nSession-based auth stores a session ID in an HttpOnly cookie and the actual session data in a database or Redis. It's simple to invalidate (just delete the session row), but requires a database lookup on every request. Great for apps where immediate revocation matters.\n\nJWTs encode user claims in a signed token. No database lookup needed for verification, making them ideal for distributed systems and API-first architectures. The downside: revoking a JWT before it expires requires a blocklist, adding complexity.\n\nNextAuth v5 (now Auth.js) abstracts this choice with adapters. You define your database schema once, and NextAuth handles sessions, OAuth providers, and CSRF protection. The `auth()` helper in Server Components gives you the session without touching the client.\n\nA practical pattern I recommend: use NextAuth with database sessions for the main web app, and issue short-lived JWTs (15 min) for API tokens consumed by mobile clients or third parties. Combine with refresh tokens rotated on each use.\n\nAlways store tokens in HttpOnly cookies, not localStorage, to mitigate XSS token theft. And implement CSRF protection for cookie-based auth — NextAuth does this by default.",
  },
  {
    title: "Web Performance Optimization in 2026",
    excerpt: "Core Web Vitals, INP optimization, asset delivery strategies, and real-user monitoring.",
    date: "2026-06-01",
    readTime: "8 min read",
    slug: "web-performance-optimization",
    description:
      "Google's INP (Interaction to Next Paint) replaced FID as a Core Web Vital in 2024, and optimization techniques have evolved significantly. INP measures the delay between a user interaction and the next visual update — essentially how responsive your app feels.\n\nTo optimize INP, focus on three areas: input delay (long tasks blocking the main thread), processing time (event handler complexity), and presentation delay (layout thrash). Use `setTimeout` or `requestIdleCallback` to break up long tasks, and prefer `content-visibility: auto` over manual lazy-loading.\n\nFor LCP, the biggest wins still come from optimizing the largest contentful element. In 2026, that's often a hero image or a heading with custom fonts. Preload your hero image with `<link rel=\"preload\">` and use `font-display: swap` to prevent invisible text during font load.\n\nCLS improvements center around reserving space for dynamic content. Always set explicit `width` and `height` on images and iframes, and avoid injecting content above existing content after paint.\n\nReal-user monitoring (RUM) with tools like Web Vitals library or Vercel Analytics gives you field data — what real users experience. Lab data (Lighthouse) is useful for debugging, but field data is what search engines measure. Set up RUM early and alert on regressions.\n\nFinally, use the new Priority Hints API (`fetchpriority=\"high\"`) to tell the browser which resources matter most, and Resource Hints (`preconnect`, `dns-prefetch`) to warm up connections to critical origins.",
  },
];
