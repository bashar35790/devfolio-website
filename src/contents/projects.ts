import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "SportNest — Sports Facility Booking Platform",
    slug: "sportnest",
    description:
      "A full-stack sports facility booking platform that streamlines venue discovery, online reservations, and secure authentication. It empowers administrators with comprehensive tools to efficiently manage facilities, schedules, and bookings.",
    overview: [
      "SportNest is a full-stack sports facility booking platform that streamlines venue discovery, online reservations, and secure authentication. Facility owners can publish their courts and grounds, while players search, filter, and book available time slots for a chosen date.",
      "The frontend is a Next.js 16 App Router application with a marketing-style landing page, a searchable and paginated facility directory, richer facility detail pages with live per-date availability, and an account dashboard for managing bookings and owned facilities.",
      "The backend is a dedicated Express 5 REST API that owns facilities, bookings, and email notifications. Authentication is handled by better-auth running inside the Next.js app; the API verifies the frontend-issued JWTs against the app's JWKS endpoint, so no extra auth round-trip is needed.",
    ],
    features: [
      "Facility discovery with search, sport filters, and pagination",
      "Date-aware time-slot booking with server-side price calculation",
      "Email/password and Google OAuth authentication via better-auth",
      "Personal dashboard to view and cancel bookings",
      "Owner tools to add, edit, and delete facilities",
      "Idempotency keys to prevent double bookings on retry",
      "Booking confirmation and cancellation emails",
      "Dark mode, skeleton states, and SEO (robots.txt / sitemap.xml)",
    ],
    frontendTech: [
      "Next.js 16 (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "HeroUI",
      "better-auth",
      "next-themes",
      "react-hot-toast",
    ],
    backendTech: [
      "Node.js",
      "Express 5",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Zod",
      "better-auth JWT / JWKS",
      "helmet",
      "express-rate-limit",
      "nodemailer",
      "Vitest",
    ],
    buildSteps: [
      {
        title: "Scaffold the frontend",
        description:
          "Start a Next.js 16 App Router project with TypeScript and Tailwind CSS v4, then wire HeroUI's theme provider, next-themes for dark mode, and react-hot-toast for feedback.",
      },
      {
        title: "Build the Express API",
        description:
          "Create an Express 5 + TypeScript server with Mongoose models for Facility and Booking. Add Zod validators, controllers, and routers, then secure it with helmet, rate limiting, HTTPS enforcement, and CSRF protection.",
      },
      {
        title: "Connect authentication",
        description:
          "Run better-auth inside the Next.js app and verify its Ed25519 JWTs on the backend against the frontend's JWKS endpoint. Mutating calls attach the token as a Bearer header; a signed session-cookie fallback keeps things resilient.",
      },
      {
        title: "Implement the booking flow",
        description:
          "Build the date picker to availability request to price preview to booking creation flow. Compute totals server-side and pass an idempotency key so retries never create duplicate reservations.",
      },
      {
        title: "Add dashboards and notifications",
        description:
          "Create the my-bookings, add-facility, and manage-facilities dashboards, then hook booking confirmation and cancellation events into nodemailer (falling back to console logs when SMTP is unset).",
      },
      {
        title: "Deploy",
        description:
          "Ship the frontend and the API to Vercel, sharing the same BETTER_AUTH_SECRET and pointing the API at the deployed frontend so JWT verification reaches /api/auth/jwks.",
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HeroUI",
      "Better Auth",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
    ],
    githubLink: "https://github.com/bashar35790/SportNest",
    demoLink: "https://sportnext-frontend.vercel.app/",
    clientLink: "https://github.com/bashar35790/SportNest",
    serverLink: "https://github.com/bashar35790/SportNest-Backend",
    liveLink: "https://sportnext-frontend.vercel.app/",
    image: "/projects/sportnest.png",
    category: "Full Stack",
  },
  {
    title: "Estately — Modern Real Estate Rental Platform",
    slug: "estately",
    description:
      "A full-stack real estate rental platform that enables users to browse properties, manage bookings and favorites, and process secure Stripe payments, with role-based dashboards for tenants, property owners, and administrators.",
    overview: [
      "Estately is a modern real estate rental platform where tenants discover and book properties, property owners list and manage rentals, and administrators oversee the whole marketplace. It ships with three tailored dashboards and secure Stripe payments.",
      "The frontend uses the Next.js 16 App Router with Tailwind CSS 4 and HeroUI 3, featuring advanced property filtering, image galleries, reviews, favorites, and Recharts-powered earning analytics.",
      "The backend is an Express 5 API backed by MongoDB that handles property management, booking processing, payments, reviews, favorites, and scoped statistics for each user role. Every protected route is scoped to the authenticated user, and a whitelist-based response layer keeps data access safe.",
    ],
    features: [
      "Secure email/password authentication via Better Auth with a MongoDB adapter",
      "Property browsing with location, type, and price-range filtering",
      "Property detail pages with galleries, amenities, owner profiles, and reviews",
      "Modal-based booking flow with Stripe payment integration",
      "Favorites system to save and manage properties",
      "Tenant, Owner, and Admin dashboards with role-specific tooling",
      "Monthly earning analytics with Recharts",
      "Paginated listing with badge-style navigation",
    ],
    frontendTech: [
      "Next.js 16 (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "HeroUI 3",
      "better-auth",
      "Stripe",
      "Framer Motion",
      "Recharts",
    ],
    backendTech: [
      "Node.js",
      "Express 5",
      "TypeScript",
      "MongoDB",
      "Stripe",
      "Zod",
      "helmet",
      "express-rate-limit",
      "Jest",
      "Supertest",
    ],
    buildSteps: [
      {
        title: "Set up the Next.js frontend",
        description:
          "Create a Next.js 16 App Router app with TypeScript, Tailwind CSS 4, and HeroUI 3, then configure better-auth with the MongoDB adapter for login and signup.",
      },
      {
        title: "Build the Express + MongoDB API",
        description:
          "Stand up an Express 5 server with native MongoDB collections for properties, bookings, reviews, favorites, and users, validating every body with Zod and returning a consistent error format.",
      },
      {
        title: "Model the three roles",
        description:
          "Implement tenant, owner, and admin permissions on both ends. Backend middleware verifies the x-session-token, attaches the user, and controllers enforce ownership scoping on every query.",
      },
      {
        title: "Integrate Stripe payments",
        description:
          "Add Stripe checkout for property bookings and record paid transactions so owners and admins can track earnings and platform revenue.",
      },
      {
        title: "Build dashboards and analytics",
        description:
          "Assemble tenant, owner, and admin dashboards with bookings, listings, user management, and Recharts analytics for monthly earnings.",
      },
      {
        title: "Test and deploy",
        description:
          "Cover auth, properties, and bookings with Jest + Supertest integration tests, then deploy the frontend to Vercel and the API to a Node host with Stripe and MongoDB environment variables.",
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HeroUI",
      "Better Auth",
      "MongoDB",
      "Stripe",
      "Framer Motion",
      "Recharts",
    ],
    githubLink: "https://github.com/bashar35790/Estately-Frontend",
    demoLink: "https://estately-frontend.vercel.app",
    clientLink: "https://github.com/bashar35790/Estately-Frontend",
    serverLink: "https://github.com/bashar35790/Estately-Backend",
    liveLink: "https://estately-frontend.vercel.app",
    image: "/projects/estately.png",
    category: "Full Stack",
  },
  {
    title: "Weather App",
    slug: "weather-app",
    description:
      "A responsive weather application that delivers real-time weather updates, forecasts, and current conditions powered by the OpenWeatherMap API.",
    overview: [
      "A premium, fully responsive weather dashboard built with Next.js. It shows current conditions, an hourly breakdown, and a 5-day forecast for any city, wrapped in a glassmorphic UI with an animated aurora background.",
      "Users can search any city with debounced autocomplete, use their current location, toggle Celsius/Fahrenheit, and switch between light and dark themes. Day/night icons and daily grouping are computed from the city's local timezone rather than the visitor's clock.",
      "Because it is a single Next.js application, the backend is a server-side API route that proxies OpenWeatherMap so the API key is never exposed to the browser.",
    ],
    features: [
      "Debounced city search with geocoding autocomplete",
      "Current location weather via the browser Geolocation API",
      "Hourly forecast with city-local day/night icons",
      "5-day forecast with feels-like, wind, humidity, and more",
      "Celsius / Fahrenheit toggle that persists across sessions",
      "Dark mode defaulting to system preference",
      "Glassmorphic UI with an animated aurora background",
      "API key kept secret behind a server route",
    ],
    frontendTech: [
      "Next.js 16 (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "TanStack React Query v5",
      "Jotai",
      "Axios",
      "date-fns",
      "react-icons",
    ],
    backendTech: [
      "Next.js API Route (server proxy)",
      "OpenWeatherMap API",
    ],
    buildSteps: [
      {
        title: "Create the Next.js app",
        description:
          "Scaffold a Next.js 16 project with TypeScript and Tailwind CSS v4, then add class-based dark mode with a custom @custom-variant and persisted theme.",
      },
      {
        title: "Add a server-side weather proxy",
        description:
          "Build /api/weather as a server route that calls OpenWeatherMap geocoding and forecast endpoints, keeping the API key server-only.",
      },
      {
        title: "Manage data and state",
        description:
          "Use TanStack Query for fetching, caching, retries, and refetching, and Jotai atoms with atomWithStorage to persist the selected place, temperature unit, and theme.",
      },
      {
        title: "Handle city-local time",
        description:
          "Compute days and hours from each city's timezone offset so icons and daily grouping match the city's local time, not the browser clock.",
      },
      {
        title: "Polish the UI",
        description:
          "Design frosted-glass cards over the aurora backdrop, tune text contrast for both themes, and add reveal-on-scroll animations and responsive stacking.",
      },
      {
        title: "Deploy",
        description:
          "Deploy to Netlify with the WEATHER_KEY environment variable configured in the host dashboard.",
      },
    ],
    technologies: ["React", "OpenWeatherMap API"],
    githubLink: "https://github.com/bashar35790/weather-app",
    demoLink: "https://weather-app-six-olive-34.vercel.app",
    image: "/projects/weather-app.png",
    category: "Frontend",
  },
  {
    title: "HireFlow — Job & Recruitment Platform",
    slug: "hireflow",
    description:
      "A full-stack job and recruitment platform connecting job seekers with employers through job discovery, applications, saved jobs, company reviews, and role-based dashboards for seekers, employers, and administrators.",
    overview: [
      "HireFlow is a full-stack job and recruitment platform that connects job seekers with employers. Visitors can browse and filter jobs, view company directories and reviews, while registered users get role-specific dashboards for seekers, employers, and admins.",
      "The frontend is a Next.js 16 App Router client that uses TanStack Query for server state, Axios with cookie-based auth, and React Hook Form + Zod for validated forms.",
      "The backend is an Express 5 + TypeScript API backed by PostgreSQL through Prisma 7. Authentication uses JWT stored in HTTP-only cookies with bcrypt password hashing, and every response follows a consistent { success, message, data, meta? } shape.",
    ],
    features: [
      "Browse, search, and filter job listings",
      "Job detail pages and a company directory with reviews",
      "Seeker dashboard to apply, track applications, and save jobs",
      "Employer tools to post, edit, and delete jobs and manage applicants",
      "Admin dashboard for users, companies, jobs, applications, and reviews",
      "JWT authentication in HTTP-only cookies with bcrypt hashing",
      "Role-based access control (seeker / employer / admin)",
      "Prisma migrations and a demo-data seed script",
    ],
    frontendTech: [
      "Next.js 16 (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "HeroUI",
      "TanStack Query",
      "Axios",
      "React Hook Form",
      "Zod",
      "Framer Motion",
    ],
    backendTech: [
      "Node.js",
      "Express 5",
      "TypeScript",
      "Prisma 7",
      "PostgreSQL",
      "Zod",
      "JWT",
      "bcrypt",
    ],
    buildSteps: [
      {
        title: "Model the domain in Prisma",
        description:
          "Define User, Company, Category, Job, Application, Review, and SavedJob models, generate migrations, and write a seed script with demo users, companies, and jobs.",
      },
      {
        title: "Build the Express API",
        description:
          "Create per-module routers with schema + service + controller structure, Zod request validation, centralized error handling, and a consistent response envelope.",
      },
      {
        title: "Add cookie-based auth",
        description:
          "Implement JWT authentication stored in HTTP-only cookies, bcrypt password hashing, and auth/role middleware that guards protected routes by user role.",
      },
      {
        title: "Develop the Next.js client",
        description:
          "Build public job browsing plus seeker, employer, and admin dashboards, using TanStack Query hooks for server state and React Hook Form with Zod for forms.",
      },
      {
        title: "Wire up applications and reviews",
        description:
          "Connect applying, saved jobs, applicant tracking, status updates, and company reviews end-to-end between the client services and the API.",
      },
      {
        title: "Deploy",
        description:
          "Deploy the API to Render with a provisioned Postgres instance and the frontend to Vercel, pointing NEXT_PUBLIC_API_URL at the live API.",
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HeroUI",
      "TanStack Query",
      "Axios",
      "React Hook Form",
      "Zod",
      "Framer Motion",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "bcrypt",
    ],
    githubLink: "https://github.com/bashar35790/HireFlow-Client",
    demoLink: "https://hireflow-client-nu.vercel.app",
    clientLink: "https://github.com/bashar35790/HireFlow-Client",
    serverLink: "https://github.com/bashar35790/HireFlow-API",
    liveLink: "https://hireflow-client-nu.vercel.app",
    image: "/projects/hireflow.png",
    category: "Full Stack",
  },
  {
    title: "Kanban Task Management - Project & Task Management Platform",
    slug: "kanban-task-management",
    description:
      "A full-stack Kanban task management platform that helps teams organize projects, manage tasks, track progress, and collaborate efficiently through an intuitive drag-and-drop workflow.",
    overview: [
      "A full-stack drag-and-drop Kanban board where users register, create boards, share them with other users, and manage columns and tasks. Boards support OWNER / EDITOR / VIEWER roles so teams can collaborate safely.",
      "The frontend is a Next.js 16 App Router app with httpOnly session cookies, optimistic UI, and drag-and-drop reordering. Tasks move within and across columns, backed by server-verified fractional indexing.",
      "The backend is an Express 5 + Prisma 7 API on PostgreSQL using better-auth for sessions. Fractional indexing keeps reorders to an O(1) single-row update, and the whole stack can be spun up with one Docker Compose command.",
    ],
    features: [
      "Email + password auth with httpOnly session cookies",
      "Create, update, delete, and share boards",
      "Role-based access: VIEWER, EDITOR, and OWNER",
      "Full column and task CRUD with cascading deletes",
      "Drag-and-drop reordering with fractional indexing",
      "Cross-column task moves with optimistic UI",
      "Invite existing users by email",
      "One-command Docker Compose spin-up",
    ],
    frontendTech: [
      "Next.js 16 (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS v4",
      "better-auth",
    ],
    backendTech: [
      "Node.js",
      "Express 5",
      "TypeScript",
      "PostgreSQL",
      "Prisma 7",
      "better-auth",
      "Docker Compose",
    ],
    buildSteps: [
      {
        title: "Set up the monorepo",
        description:
          "Create a frontend (Next.js 16) and backend (Express + Prisma) workspace with a docker-compose.yml that runs Postgres, the API on :5000, and the app on :3000.",
      },
      {
        title: "Model boards, columns, and tasks",
        description:
          "Define the Prisma schema with membership roles and a float position field on columns and tasks, then commit migrations and a seed script.",
      },
      {
        title: "Implement fractional indexing",
        description:
          "Order items by a position float (first = 1000, append = +1000, insert = midpoint) and re-index the column in a transaction when the gap shrinks below 1e-6.",
      },
      {
        title: "Add auth and board access",
        description:
          "Use better-auth for httpOnly sessions and add authenticate + boardAccess middleware that enforces VIEWER / EDITOR / OWNER permissions per route.",
      },
      {
        title: "Build the drag-and-drop UI",
        description:
          "Create boards, columns, and task UI with optimistic updates that call the atomic /move endpoint and reconcile the fresh task row after any rebalance.",
      },
      {
        title: "Deploy with Supabase",
        description:
          "Point DATABASE_URL (transaction pooler) and DIRECT_URL (session pooler) at Supabase, proxy /api/* from the frontend via rewrites, and deploy the API to Render.",
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "JWT",
    ],
    githubLink: "https://github.com/bashar35790/Kanban-Task-Management",
    demoLink: "https://abulbashar-kanban-task-management.vercel.app/",
    clientLink:
      "https://github.com/bashar35790/Kanban-Task-Management/tree/main/frontend",
    serverLink:
      "https://github.com/bashar35790/Kanban-Task-Management/tree/main/backend",
    liveLink: "https://abulbashar-kanban-task-management.vercel.app/",
    image: "/projects/kanban-task-management.png",
    category: "Full Stack",
  },
  {
    title: "Tiles Gallery",
    slug: "tiles-gallery",
    description:
      "A modern e-commerce platform for browsing and purchasing premium tile collections, featuring a responsive storefront and secure Stripe checkout.",
    overview: [
      "Tiles Gallery is a premium digital showroom for a curated collection of professional tiles. Architects, designers, and homeowners can search, filter, and examine tile collections with a focus on high-quality visuals and responsive performance.",
      "Built with the Next.js 16 App Router and React 19, it uses better-auth for secure authentication and MongoDB for user and session data, with Tailwind CSS 4, HeroUI, and DaisyUI shaping a sophisticated storefront.",
      "Performance comes from Incremental Static Regeneration with smart revalidation and a proxy server that resizes high-resolution images for fast loads without quality loss.",
    ],
    features: [
      "Real-time search and category-based filtering",
      "Secure authentication via better-auth with MongoDB sessions",
      "Personalized user profiles for account details and preferences",
      "Premium typography with Playfair Display and DM Sans",
      "ISR-based data fetching with smart revalidation",
      "Image optimization through a resize proxy",
      "Fully responsive across mobile and high-resolution displays",
    ],
    frontendTech: [
      "Next.js 16 (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "HeroUI",
      "DaisyUI",
      "better-auth",
      "Lucide / Gravity UI Icons",
      "React Fast Marquee",
    ],
    backendTech: [
      "better-auth (authentication)",
      "MongoDB",
      "@better-auth/mongo-adapter",
    ],
    buildSteps: [
      {
        title: "Scaffold the storefront",
        description:
          "Create a Next.js 16 App Router project with React 19, Tailwind CSS 4, HeroUI, and DaisyUI, then set the Playfair Display + DM Sans typography.",
      },
      {
        title: "Set up authentication",
        description:
          "Configure better-auth with the MongoDB adapter for email/password sign-in, registration, and secure sessions, plus a profile area for account management.",
      },
      {
        title: "Build search and filtering",
        description:
          "Implement real-time search and category filtering (Ceramic, Porcelain, Marble) across the tile catalog with a responsive grid.",
      },
      {
        title: "Optimize delivery",
        description:
          "Use Next.js ISR with smart revalidation for data and a resize proxy for high-resolution images so pages load fast without losing quality.",
      },
      {
        title: "Polish and deploy",
        description:
          "Add marquee animations and responsive layouts, then deploy with the BETTER_AUTH_* and MongoDB environment variables configured.",
      },
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    githubLink: "https://github.com/bashar35790/Tiles-Gallery",
    demoLink: "https://tiles-gallery-gilt.vercel.app/",
    image: "/projects/e-commerce-website.png",
    category: "Frontend",
  },

  {
    title: "Student Management Dashboard",
    slug: "student-management-dashboard",
    description:
      "A full-stack student management dashboard that enables administrators to efficiently manage student records with advanced search, filtering, sorting, pagination, and complete CRUD operations backed by a PostgreSQL database.",
    overview: [
      "A full-stack Student Management Dashboard where an administrator can view, search, filter, add, edit, and delete student records. It is built as a monorepo with a REST API and a Next.js dashboard.",
      "The backend is an Express 5 + TypeScript API on PostgreSQL through Prisma 7 with Zod validation, supporting server-side search, filtering, sorting, and pagination in a single Prisma query.",
      "The frontend is a Next.js App Router app using Redux Toolkit and RTK Query to manage all server state (caching, invalidation, loading/error states) while a small slice holds list filters and React Hook Form handles inputs.",
    ],
    features: [
      "Full CRUD for student records",
      "Server-side pagination, sorting, and debounced search",
      "Filtering by status and class",
      "Dedicated student details page",
      "RTK Query caching and automatic invalidation",
      "Zod-validated API requests with consistent responses",
      "Seed script with demo students",
      "Monorepo with independently deployable client and server",
    ],
    frontendTech: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "React Hook Form",
      "Tailwind CSS",
    ],
    backendTech: [
      "Node.js",
      "Express 5",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Zod",
    ],
    buildSteps: [
      {
        title: "Design the API",
        description:
          "Create an Express 5 + Prisma API with a Student model, Zod schemas, and a consistent { success, message, data, meta? } response shape, mirroring proven patterns.",
      },
      {
        title: "Compose the list query",
        description:
          "Combine search, status/class filters, sorting, and pagination into a single Prisma where/orderBy/skip/take query and return pagination metadata.",
      },
      {
        title: "Set up RTK Query",
        description:
          "Configure the Redux store and RTK Query API so the dashboard gets caching, invalidation, and isLoading/isError states for free.",
      },
      {
        title: "Keep filter state in sync",
        description:
          "Hold search, status, class, page, and sort in a dedicated slice and feed them into the query so refetches stay consistent across interactions.",
      },
      {
        title: "Build the dashboard UI",
        description:
          "Assemble the list page with React Hook Form inputs, the student details page, and CRUD actions wired to RTK Query mutations.",
      },
      {
        title: "Seed and deploy",
        description:
          "Seed 20 demo students, deploy the API to Render with auto-applied migrations and the client to Vercel with NEXT_PUBLIC_API_URL set.",
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "RTK Query",
      "React Hook Form",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Zod",
    ],
    githubLink: "https://github.com/bashar35790/Student-Management-Dashboard",
    demoLink: "https://student-management-dashboard-iota.vercel.app",
    clientLink:
      "https://github.com/bashar35790/Student-Management-Dashboard/tree/main/client",
    serverLink:
      "https://github.com/bashar35790/Student-Management-Dashboard/tree/main/server",
    liveLink: "https://student-management-dashboard-iota.vercel.app",
    image: "/projects/student-management.png",
    category: "Full Stack",
  },

  {
    title: "Databox — Modern BI & Analytics Platform",
    slug: "databox",
    description:
      "A business intelligence and analytics platform offering AI-powered analytics, KPI dashboards, forecasting, automated reporting, and interactive data visualization for data-driven decision making.",
    overview: [
      "A Data Box website clone built as a client project. It presents a modern business intelligence and analytics platform with AI-powered analytics, KPI dashboards, forecasting, and automated reporting.",
      "The site is a fast single-page experience built with React and Vite, using Tailwind CSS with DaisyUI and Flowbite components, Framer Motion for animation, and Swiper for interactive carousels.",
      "Content is modular and editable through Sanity CMS, so marketing sections, feature highlights, and testimonials can be updated without touching the code.",
    ],
    features: [
      "Modern marketing landing experience",
      "AI-powered analytics and KPI dashboard sections",
      "Forecasting and automated reporting highlights",
      "Interactive data visualization sections",
      "Animated carousels with Swiper.js",
      "Editable content via Sanity CMS",
      "Fully responsive layout",
    ],
    frontendTech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "DaisyUI",
      "Flowbite",
      "Framer Motion",
      "Swiper.js",
      "Sanity CMS",
    ],
    buildSteps: [
      {
        title: "Scaffold with Vite",
        description:
          "Create a fast React + Vite project and set up Tailwind CSS with DaisyUI and Flowbite for the component layer.",
      },
      {
        title: "Shape the sections",
        description:
          "Build the hero, feature, analytics, forecasting, and reporting sections that mirror the Data Box marketing structure.",
      },
      {
        title: "Add motion and carousels",
        description:
          "Use Framer Motion for reveal and scroll animations and Swiper.js for interactive carousels.",
      },
      {
        title: "Connect Sanity CMS",
        description:
          "Wire content schemas through Sanity so copy and assets are editable by the client without code changes.",
      },
      {
        title: "Deploy",
        description:
          "Build and deploy the static site to Vercel for fast global delivery.",
      },
    ],
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "DaisyUI",
      "Flowbite",
      "Framer Motion",
      "Swiper.js",
      "Sanity CMS",
    ],
    githubLink: "https://github.com/bashar35790/Data-Box-Site-Copy",
    demoLink: "https://data-box-site-copy.vercel.app/",
    image: "/projects/databox.png",
    category: "Frontend",
  },

  {
    title: "AI Career Coach — AI-Powered Career Development Platform",
    slug: "ai-career-coach",
    description:
      "An AI-powered career development platform that helps professionals refine resumes, craft compelling cover letters, practice interviews, and build personalized career roadmaps through an interactive AI assistant.",
    overview: [
      "AI Career Coach is an AI-powered career development platform. It helps professionals refine their resumes, generate tailored cover letters, practice interviews, and build personalized career roadmaps through an interactive AI assistant.",
      "The frontend is a Next.js 14 App Router app with TypeScript, Tailwind CSS, TanStack Query, and Recharts for the dashboard's activity and skill analytics.",
      "The backend is an Express + TypeScript API using Mongoose and Zod, with JWT and Google OAuth authentication and a Google Gemini AI integration that includes a fallback strategy for reliability. The chat assistant streams responses over SSE.",
    ],
    features: [
      "AI resume improver with actionable suggestions",
      "Tailored cover letter generator",
      "Interview question and answer practice",
      "AI chat assistant with SSE streaming and history",
      "Personalized career roadmap generator",
      "Course catalog with filters, sorting, and pagination",
      "Dashboard with activity trends and skill tracking",
      "Resume upload with AI scoring",
    ],
    frontendTech: [
      "Next.js 14 (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Recharts",
    ],
    backendTech: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "Mongoose",
      "MongoDB",
      "Zod",
      "JWT",
      "Google OAuth",
      "Google Gemini AI",
    ],
    buildSteps: [
      {
        title: "Set up the API and models",
        description:
          "Create an Express + TypeScript backend with Mongoose models for users, skills, courses, and conversations, validating requests with Zod.",
      },
      {
        title: "Add auth",
        description:
          "Implement JWT authentication with Google OAuth support so users can register, log in, and persist sessions securely.",
      },
      {
        title: "Integrate Google Gemini",
        description:
          "Wire the Gemini API for resume analysis, cover letters, interview questions, roadmaps, and chat, adding a fallback strategy when the primary call fails.",
      },
      {
        title: "Stream the AI assistant",
        description:
          "Implement SSE streaming for the chat assistant with conversation history and suggested follow-ups.",
      },
      {
        title: "Build the frontend",
        description:
          "Develop the Next.js dashboard with TanStack Query data fetching and Recharts visualizations for activity trends and skill overview.",
      },
      {
        title: "Deploy",
        description:
          "Deploy the API to Render and the frontend to Vercel with the Gemini and OAuth environment variables configured.",
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Express.js",
      "MongoDB",
      "JWT",
      "Google OAuth",
      "Google Gemini AI",
      "Recharts",
    ],
    githubLink: "https://github.com/bashar35790/AI-Career-Coach",
    demoLink: "https://ai-career-coach-bashar.vercel.app",
    clientLink:
      "https://github.com/bashar35790/AI-Career-Coach/tree/main/frontend",
    serverLink:
      "https://github.com/bashar35790/AI-Career-Coach/tree/main/backend",
    liveLink: "https://ai-career-coach-bashar.vercel.app",
    image: "/projects/ai-career-coach.png",
    category: "Full Stack",
  },
  {
    title: "MiniCommerce — Modern E-Commerce Website",
    slug: "mini-commerce",
    description:
      "A sleek and responsive e-commerce application built with Next.js and Redux Toolkit, featuring product browsing, shopping cart management, dynamic sliders, and a smooth shopping experience.",
    overview: [
      "MiniCommerce is a modern e-commerce website that showcases products, categories, and new arrivals with a clean, responsive interface and smooth interactions.",
      "Built with Next.js and React, it uses Redux Toolkit for global cart and favorites state and react-slick carousels for sliders. Notifications are handled with react-hot-toast.",
      "Product and category data is served from a static data.json, making the storefront lightweight and easy to extend.",
    ],
    features: [
      "Product listing with categories",
      "New arrivals carousel",
      "Cart and favorites state with Redux Toolkit",
      "Smooth hover interactions",
      "Toast notifications",
      "Fully responsive across devices",
      "Static JSON-driven product data",
    ],
    frontendTech: [
      "Next.js 16",
      "React",
      "Redux Toolkit",
      "React Redux",
      "Tailwind CSS",
      "react-slick",
      "react-hot-toast",
    ],
    buildSteps: [
      {
        title: "Scaffold the app",
        description:
          "Create a Next.js project with React and Tailwind CSS, and configure the root layout with a Redux provider.",
      },
      {
        title: "Model the data",
        description:
          "Add a static data.json for products and categories, then render the Categories and NewArrivals components from it.",
      },
      {
        title: "Manage state",
        description:
          "Use Redux Toolkit slices to manage cart and favorites globally across the storefront.",
      },
      {
        title: "Build the storefront UI",
        description:
          "Assemble the navbar, footer, categories, top sellers, and new arrivals carousel with react-slick and toast notifications.",
      },
      {
        title: "Deploy",
        description:
          "Run a production build and deploy to Vercel.",
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "Redux Toolkit",
      "React Redux",
      "Tailwind CSS",
      "React Slick",
      "Slick Carousel",
    ],
    githubLink: "https://github.com/bashar35790/mini-ecomarce",
    demoLink: "https://mini-ecomarce-svtg.vercel.app/",
    image: "/projects/miniEcomarce.png",
    category: "Frontend",
  },
  {
    title: "Natours — Adventure & Travel Landing Page",
    slug: "natours",
    description:
      "A visually immersive travel landing page crafted for adventure enthusiasts, featuring elegant animations, responsive layouts, and storytelling-driven design inspired by real-world outdoor experiences.",
    overview: [
      "Natours is a visually immersive travel landing page crafted for adventure enthusiasts. It combines elegant animations, responsive layouts, and storytelling-driven design inspired by real-world outdoor experiences.",
      "The project is built with semantic HTML5 and modern CSS. Styling is authored in SCSS/Sass and processed with PostCSS and Autoprefixer for broad browser support.",
      "Interactive touches and smooth transitions are handled with vanilla JavaScript, with no framework overhead — a focused demonstration of strong layout and animation fundamentals.",
    ],
    features: [
      "Immersive hero with layered visuals",
      "SCSS architecture with reusable partials",
      "Smooth CSS animations and transitions",
      "Responsive layouts with flexbox",
      "Interactive navigation and hover effects",
      "Storytelling-driven section design",
    ],
    frontendTech: [
      "HTML5",
      "SCSS",
      "Sass",
      "CSS3",
      "PostCSS",
      "Autoprefixer",
      "JavaScript",
    ],
    buildSteps: [
      {
        title: "Set up the toolchain",
        description:
          "Configure an SCSS/Sass build pipeline with PostCSS and Autoprefixer to compile and vendor-prefix styles.",
      },
      {
        title: "Architect the styles",
        description:
          "Split styles into maintainable partials for base, layout, components, and utilities following a 7-1-style structure.",
      },
      {
        title: "Build the sections",
        description:
          "Create the hero, feature, tour, story, and booking sections with semantic HTML5 and flexbox layouts.",
      },
      {
        title: "Add motion",
        description:
          "Layer CSS animations, transitions, and vanilla JavaScript interactions for a polished, narrative feel.",
      },
      {
        title: "Deploy",
        description:
          "Compile the production build and deploy the static site.",
      },
    ],
    technologies: [
      "HTML5",
      "SCSS",
      "Sass",
      "CSS3",
      "Autoprefixer",
      "PostCSS",
      "JavaScript",
    ],
    githubLink: "https://github.com/bashar35790/Nature-project",
    demoLink: "https://nature-project-lake.vercel.app",
    image: "/projects/nature.png",
    category: "Frontend",
  },
  {
    title: "KeenKeeper — Smart Friendship Management Platform",
    slug: "keenkeeper",
    description:
      "A full-stack relationship management application that helps users organize friendships, track interactions, and nurture meaningful connections through a clean and intuitive digital experience.",
    overview: [
      "KeenKeeper is a relationship management application that helps users organize friendships, track interactions, and nurture meaningful connections through a clean and intuitive experience.",
      "The app is built with React 19 and Vite, using React Router 7 for nested and dynamic routing, and styled with Tailwind CSS and DaisyUI for a modern, responsive interface.",
      "Data visualization is handled with Recharts and interactions with Axios, while react-hot-toast provides friendly feedback throughout the app.",
    ],
    features: [
      "Dynamic routing with React Router 7",
      "Nested routes and dynamic segments",
      "Interactive charts and analytics with Recharts",
      "Responsive UI with Tailwind CSS and DaisyUI",
      "Toast feedback for user actions",
      "API communication with Axios",
    ],
    frontendTech: [
      "React 19",
      "React Router 7",
      "Tailwind CSS v4",
      "DaisyUI",
      "Recharts",
      "React Toastify",
      "Axios",
      "Vite",
    ],
    backendTech: ["Node.js", "Express.js", "MongoDB", "Socket.io"],
    buildSteps: [
      {
        title: "Scaffold with Vite",
        description:
          "Create a fast React 19 + Vite project and set up Tailwind CSS with DaisyUI for the design system.",
      },
      {
        title: "Set up routing",
        description:
          "Configure React Router 7 with nested routes and dynamic segments for the app's pages.",
      },
      {
        title: "Add data fetching",
        description:
          "Use Axios to communicate with the API and react-hot-toast for user feedback on actions.",
      },
      {
        title: "Visualize the data",
        description:
          "Integrate Recharts to display charts and analytics that help users understand their relationships.",
      },
      {
        title: "Deploy",
        description:
          "Build and deploy the frontend to Vercel.",
      },
    ],
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "DaisyUI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
    ],
    githubLink: "https://github.com/bashar35790/KeenKeeper",
    demoLink: "https://keen-keeper-bashar.vercel.app/",
    image: "/projects/keenKeeper.png",
    category: "Frontend",
  },
];
