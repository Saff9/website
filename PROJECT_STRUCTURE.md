# Project Structure

```
johndn-portfolio/
├── .env.example              # Environment variables template
├── .eslintrc.json           # ESLint configuration
├── .gitignore               # Git ignore rules
├── .prettierrc              # Prettier configuration
├── docker-compose.yml       # Docker Compose configuration
├── Dockerfile               # Docker build configuration
├── LICENSE                  # MIT License
├── next-env.d.ts           # Next.js TypeScript declarations
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── PROJECT_STRUCTURE.md    # This file
├── README.md               # Project documentation
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
│
├── content/                # MDX content (optional)
│   ├── blog/              # Blog posts in MDX format
│   └── projects/          # Project content in MDX format
│
├── prisma/                 # Database configuration
│   ├── migrations/        # Database migrations
│   ├── schema.prisma      # Prisma schema definition
│   └── seed.ts            # Database seed script
│
├── public/                 # Static assets
│   ├── images/            # Image assets
│   │   ├── blog/         # Blog post images
│   │   └── projects/     # Project images
│   └── resume.pdf        # Resume download
│
└── src/                    # Source code
    ├── app/               # Next.js App Router
    │   ├── (auth)/       # Auth route group
    │   │   └── login/    # Login page
    │   │       └── page.tsx
    │   ├── admin/        # Admin dashboard
    │   │   └── dashboard/
    │   │       └── page.tsx
    │   ├── api/          # API routes
    │   │   ├── auth/
    │   │   │   └── [...nextauth]/
    │   │   │       └── route.ts
    │   │   ├── contact/
    │   │   │   └── route.ts
    │   │   └── health/
    │   │       └── route.ts
    │   ├── about/        # About page
    │   │   └── page.tsx
    │   ├── blog/         # Blog pages
    │   │   ├── [slug]/   # Dynamic blog post page
    │   │   │   └── page.tsx
    │   │   └── page.tsx  # Blog listing page
    │   ├── contact/      # Contact page
    │   │   └── page.tsx
    │   ├── projects/     # Project pages
    │   │   ├── [slug]/   # Dynamic project page
    │   │   │   └── page.tsx
    │   │   └── page.tsx  # Projects listing page
    │   ├── layout.tsx    # Root layout
    │   ├── not-found.tsx # 404 page
    │   ├── page.tsx      # Home page
    │   ├── robots.ts     # robots.txt generation
    │   └── sitemap.ts    # sitemap.xml generation
    │
    ├── components/       # React components
    │   ├── sections/    # Page sections
    │   │   ├── cta.tsx
    │   │   ├── featured-projects.tsx
    │   │   ├── hero.tsx
    │   │   ├── latest-posts.tsx
    │   │   └── skills.tsx
    │   ├── ui/          # UI components (shadcn/ui)
    │   │   ├── avatar.tsx
    │   │   ├── badge.tsx
    │   │   ├── button.tsx
    │   │   ├── card.tsx
    │   │   ├── dropdown-menu.tsx
    │   │   ├── input.tsx
    │   │   ├── separator.tsx
    │   │   ├── skeleton.tsx
    │   │   ├── textarea.tsx
    │   │   └── tooltip.tsx
    │   ├── footer.tsx
    │   ├── navigation.tsx
    │   ├── theme-provider.tsx
    │   └── theme-toggle.tsx
    │
    ├── hooks/           # Custom React hooks
    │   └── use-scroll.ts
    │
    ├── lib/             # Utility functions
    │   ├── auth.ts      # Authentication configuration
    │   ├── prisma.ts    # Prisma client
    │   └── utils.ts     # Helper functions
    │
    ├── styles/          # Global styles
    │   └── globals.css
    │
    └── types/           # TypeScript types
        └── index.ts
```

## Key Files Explained

### Configuration Files

- **next.config.js**: Next.js configuration with image optimization, headers, and redirects
- **tailwind.config.ts**: Tailwind CSS with custom colors, animations, and theme extensions
- **tsconfig.json**: TypeScript configuration with path aliases
- **package.json**: Dependencies and npm scripts

### Application Files

- **src/app/layout.tsx**: Root layout with providers (theme, analytics)
- **src/app/page.tsx**: Home page composing all sections
- **src/lib/utils.ts**: Utility functions including `cn()` for class merging
- **src/lib/prisma.ts**: Prisma client singleton

### Components

- **src/components/ui/**: Reusable UI components from shadcn/ui
- **src/components/sections/**: Page section components (Hero, Skills, etc.)
- **src/components/navigation.tsx**: Site navigation with mobile menu
- **src/components/footer.tsx**: Site footer

### Database

- **prisma/schema.prisma**: Database schema with models for Users, BlogPosts, Projects, etc.
- **prisma/seed.ts**: Seed script for initial data

### API Routes

- **src/app/api/auth/[...nextauth]/route.ts**: NextAuth.js authentication
- **src/app/api/contact/route.ts**: Contact form submission handler
- **src/app/api/health/route.ts**: Health check endpoint

## File Naming Conventions

- **Pages**: `page.tsx` for route pages
- **Layouts**: `layout.tsx` for layout components
- **Components**: PascalCase (e.g., `Button.tsx`, `HeroSection.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useScroll.ts`)
- **Utils**: camelCase (e.g., `utils.ts`, `auth.ts`)
- **Types**: camelCase (e.g., `index.ts` in types folder)

## Import Aliases

- `@/*` maps to `src/*`
- `@/components/*` maps to `src/components/*`
- `@/lib/*` maps to `src/lib/*`
- `@/hooks/*` maps to `src/hooks/*`
- `@/types/*` maps to `src/types/*`
- `@/styles/*` maps to `src/styles/*`
