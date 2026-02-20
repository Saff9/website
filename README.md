# John Dn Portfolio

A premium, production-ready personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Prisma. Designed for senior software developers who want to showcase their expertise with an enterprise-grade online presence.

![Portfolio Preview](https://via.placeholder.com/1200x630/0f0f13/ffffff?text=John+Dn+Portfolio)

## Features

- **Modern Tech Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS, Prisma
- **Premium Design**: Dark/light theme, glassmorphism effects, smooth animations
- **Blog System**: MDX support with syntax highlighting, SEO-optimized
- **Project Showcase**: Dynamic project listings with detailed pages
- **Admin Dashboard**: Secure content management with authentication
- **Contact Form**: Email integration with validation and spam protection
- **Performance Optimized**: Lighthouse 95+ scores, image optimization, lazy loading
- **SEO Ready**: Meta tags, Open Graph, structured data, sitemap
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Accessibility**: WCAG AA compliant with keyboard navigation
- **Type Safe**: Full TypeScript coverage with strict mode

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Database**: [PostgreSQL](https://www.postgresql.org/) with [Prisma ORM](https://www.prisma.io/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Deployment**: [Vercel](https://vercel.com/) (primary) + Docker

## Quick Start

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/johndn/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/johndn_portfolio"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key"
   ```

4. **Set up the database**
   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)**

## Project Structure

```
johndn-portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Auth routes (login)
│   │   ├── admin/             # Admin dashboard
│   │   ├── api/               # API routes
│   │   ├── about/             # About page
│   │   ├── blog/              # Blog pages
│   │   ├── contact/           # Contact page
│   │   ├── projects/          # Project pages
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── not-found.tsx      # 404 page
│   ├── components/
│   │   ├── ui/                # UI components (shadcn)
│   │   ├── sections/          # Page sections
│   │   ├── navigation.tsx     # Navigation component
│   │   ├── footer.tsx         # Footer component
│   │   └── theme-provider.tsx # Theme provider
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility functions
│   ├── styles/                # Global styles
│   └── types/                 # TypeScript types
├── content/                   # MDX content (optional)
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── seed.ts                # Seed data
├── public/                    # Static assets
├── Dockerfile                 # Docker configuration
├── docker-compose.yml         # Docker Compose setup
└── package.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed database with sample data
- `npm run db:studio` - Open Prisma Studio
- `npm run docker:build` - Build Docker image
- `npm run docker:run` - Run Docker container

## Adding Content

### Adding a Blog Post

1. **Via Admin Dashboard** (recommended):
   - Log in to `/admin`
   - Navigate to Blog Posts
   - Click "New Post"
   - Fill in the form and publish

2. **Via Database**:
   ```bash
   npx prisma studio
   ```
   Add a new record to the `BlogPost` table.

### Adding a Project

1. **Via Admin Dashboard**:
   - Log in to `/admin`
   - Navigate to Projects
   - Click "New Project"
   - Fill in project details and save

2. **Via Code**:
   Edit `src/app/projects/page.tsx` and add to the projects array.

### Customizing About Section

Edit `src/app/about/page.tsx` to update:
- Personal bio
- Work experience
- Education
- Skills
- Philosophy

## Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** - Vercel will automatically build and deploy

```bash
# Using Vercel CLI
vercel --prod
```

### Docker

```bash
# Build and run with Docker Compose
docker-compose up -d

# Or build manually
docker build -t johndn-portfolio .
docker run -p 3000:3000 johndn-portfolio
```

### Other Platforms

The application can be deployed to any platform that supports Node.js:
- Railway
- Render
- DigitalOcean App Platform
- AWS Elastic Beanstalk
- Google Cloud Run

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `NEXTAUTH_URL` | Your app URL | Yes |
| `NEXTAUTH_SECRET` | Random secret for JWT | Yes |
| `GITHUB_CLIENT_ID` | GitHub OAuth ID | No |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth Secret | No |
| `RESEND_API_KEY` | Resend API key for emails | No |
| `CONTACT_EMAIL` | Email to receive contact forms | No |

## Admin Access

Default admin credentials (change in production):
- **Email**: `admin@johndn.dev`
- **Password**: `admin123`

Access the admin panel at `/admin` after logging in at `/login`.

## Performance

This portfolio is optimized for performance:
- **Lighthouse Score**: 95+ in all categories
- **Core Web Vitals**: All metrics in green
- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Code Splitting**: Automatic route-based splitting
- **Prefetching**: Intelligent link prefetching

## SEO

Built-in SEO features:
- Dynamic meta tags for each page
- Open Graph and Twitter Cards
- Structured data (JSON-LD)
- XML sitemap generation
- robots.txt configuration
- Canonical URLs

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  primary: {
    DEFAULT: 'hsl(var(--primary))',
    foreground: 'hsl(var(--primary-foreground))',
  },
  // Add custom colors
}
```

### Fonts

Update `src/app/layout.tsx`:
```typescript
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
```

### Content

Update site metadata in `src/lib/utils.ts`:
```typescript
export const siteConfig = {
  name: 'Your Name',
  description: 'Your description',
  url: 'https://yourdomain.com',
};
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email hello@johndn.dev or open an issue on GitHub.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Vercel](https://vercel.com/) for the amazing deployment platform
- [Prisma](https://www.prisma.io/) for the excellent ORM

---

Built with ❤️ by John Dn
