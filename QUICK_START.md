# Quick Start Guide

Get your portfolio up and running in 5 minutes!

## Option 1: Local Development

```bash
# 1. Clone and setup
git clone https://github.com/yourusername/portfolio.git
cd portfolio
./scripts/setup.sh

# 2. Edit environment variables
nano .env

# 3. Start development server
npm run dev

# 4. Open http://localhost:3000
```

## Option 2: Deploy to Vercel (One-Click)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

1. Click the button above
2. Add your environment variables
3. Deploy!

## Option 3: Docker

```bash
# Start everything with Docker Compose
docker-compose up -d

# Access at http://localhost:3000
```

## Default Login

After setup, access the admin panel:

- **URL**: http://localhost:3000/login
- **Email**: `admin@johndn.dev`
- **Password**: `admin123`

⚠️ **Change the default password in production!**

## Customization Checklist

### Essential Changes

- [ ] Update `src/app/about/page.tsx` with your bio
- [ ] Update `src/app/projects/page.tsx` with your projects
- [ ] Update `src/app/blog/page.tsx` with your articles
- [ ] Update contact information in `src/app/contact/page.tsx`
- [ ] Update social links in `src/components/footer.tsx`
- [ ] Update site metadata in `src/lib/utils.ts`

### Optional Changes

- [ ] Update colors in `tailwind.config.ts`
- [ ] Update fonts in `src/app/layout.tsx`
- [ ] Add your resume to `public/resume.pdf`
- [ ] Add project images to `public/images/projects/`
- [ ] Add blog images to `public/images/blog/`

## Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server

# Database
npm run db:migrate   # Run migrations
npm run db:seed      # Seed database
npm run db:studio    # Open Prisma Studio

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check
npm run format       # Format code with Prettier

# Docker
npm run docker:build # Build Docker image
npm run docker:run   # Run Docker container
```

## Need Help?

- 📖 [Full Documentation](README.md)
- 🚀 [Deployment Guide](DEPLOYMENT_GUIDE.md)
- 📁 [Project Structure](PROJECT_STRUCTURE.md)
- 🐛 [Open an Issue](https://github.com/yourusername/portfolio/issues)

---

**Ready to showcase your work!** 🚀
