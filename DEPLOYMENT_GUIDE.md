# Deployment Guide

This guide covers deploying the John Dn Portfolio to various platforms.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Environment Variables](#environment-variables)
- [Vercel Deployment](#vercel-deployment)
- [Docker Deployment](#docker-deployment)
- [Railway Deployment](#railway-deployment)
- [Manual Server Deployment](#manual-server-deployment)
- [Post-Deployment Checklist](#post-deployment-checklist)

## Prerequisites

Before deploying, ensure you have:

1. **Node.js 18+** installed locally
2. **PostgreSQL database** (can be hosted on Supabase, Railway, AWS RDS, etc.)
3. **Git repository** with your code pushed

## Environment Variables

Create a `.env` file with the following variables:

```env
# Required
DATABASE_URL="postgresql://user:password@host:port/database"
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="your-random-secret-key-min-32-chars"

# Optional - OAuth Providers
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

# Optional - Email
RESEND_API_KEY=""
CONTACT_EMAIL="your@email.com"

# Optional - Analytics
NEXT_PUBLIC_GA_ID=""
NEXT_PUBLIC_GTM_ID=""
```

Generate a secure `NEXTAUTH_SECRET`:
```bash
openssl rand -base64 32
```

## Vercel Deployment

### Method 1: Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Import project in Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Select "Next.js" framework preset

3. **Configure environment variables**
   - Add all variables from your `.env` file
   - Click "Deploy"

4. **Add database integration**
   - Go to project settings → Integrations
   - Add your database (or use Vercel Postgres)

5. **Run migrations**
   - Go to project settings → Functions
   - Add build command: `npx prisma migrate deploy && npm run build`

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod

# Set environment variables
vercel env add DATABASE_URL
vercel env add NEXTAUTH_SECRET
# ... add other variables

# Redeploy with new env vars
vercel --prod
```

## Docker Deployment

### Local Development with Docker

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f app

# Stop services
docker-compose down

# Rebuild after changes
docker-compose up -d --build
```

### Production Docker Deployment

1. **Build the image**
   ```bash
   docker build -t johndn-portfolio .
   ```

2. **Run the container**
   ```bash
   docker run -d \
     --name portfolio \
     -p 3000:3000 \
     -e DATABASE_URL="your-db-url" \
     -e NEXTAUTH_SECRET="your-secret" \
     -e NEXTAUTH_URL="https://yourdomain.com" \
     johndn-portfolio
   ```

3. **With docker-compose in production**
   ```yaml
   version: '3.8'
   services:
     app:
       build: .
       ports:
         - "3000:3000"
       environment:
         - DATABASE_URL=${DATABASE_URL}
         - NEXTAUTH_URL=${NEXTAUTH_URL}
         - NEXTAUTH_SECRET=${NEXTAUTH_SECRET}
       restart: unless-stopped
       networks:
         - app-network
   
   networks:
     app-network:
       driver: bridge
   ```

### Deploy to VPS/Cloud Server

```bash
# On your server
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Create .env file
cp .env.example .env
nano .env  # Edit with your values

# Start with Docker Compose
docker-compose -f docker-compose.yml up -d

# Run migrations
docker-compose exec app npx prisma migrate deploy
```

## Railway Deployment

1. **Create Railway account** at [railway.app](https://railway.app)

2. **Create new project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Add PostgreSQL database**
   - Click "New" → Database → Add PostgreSQL
   - Railway will automatically set `DATABASE_URL`

4. **Configure environment variables**
   - Go to Variables tab
   - Add:
     - `NEXTAUTH_SECRET`
     - `NEXTAUTH_URL` (your Railway domain)

5. **Configure build settings**
   - Build Command: `npm install && npx prisma generate && npx prisma migrate deploy && npm run build`
   - Start Command: `npm start`

6. **Deploy**
   - Railway will auto-deploy on push
   - Or click "Deploy" to manually trigger

## Manual Server Deployment

### Prerequisites on Server

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 for process management
sudo npm install -g pm2

# Install PostgreSQL
sudo apt install postgresql postgresql-contrib -y
```

### Deploy Application

```bash
# Clone repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm ci

# Setup environment
cp .env.example .env
nano .env  # Edit with production values

# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate deploy

# Build application
npm run build

# Start with PM2
pm2 start npm --name "portfolio" -- start

# Save PM2 config
pm2 save
pm2 startup
```

### Configure Nginx (Reverse Proxy)

```bash
sudo apt install nginx -y

# Create config
sudo nano /etc/nginx/sites-available/portfolio
```

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# Setup SSL with Certbot
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## Post-Deployment Checklist

### Immediate Checks

- [ ] Website loads without errors
- [ ] All pages accessible (Home, About, Projects, Blog, Contact)
- [ ] Navigation works correctly
- [ ] Dark/light theme toggle works
- [ ] Mobile responsiveness verified

### Functionality Checks

- [ ] Contact form submits successfully
- [ ] Admin login works (default: admin@johndn.dev / admin123)
- [ ] Blog posts display correctly
- [ ] Project pages load properly
- [ ] Images load correctly

### SEO & Performance

- [ ] Meta tags present on all pages
- [ ] Open Graph tags working (test with Facebook Debugger)
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] robots.txt accessible at `/robots.txt`
- [ ] Run Lighthouse audit (aim for 90+ scores)

### Security

- [ ] HTTPS enabled
- [ ] Security headers present (check with securityheaders.com)
- [ ] Environment variables not exposed
- [ ] Admin route protected

### Analytics (Optional)

- [ ] Google Analytics connected
- [ ] Google Search Console verified
- [ ] Sitemap submitted to Google

## Troubleshooting

### Build Failures

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Database Connection Issues

```bash
# Test database connection
npx prisma db pull

# Check migrations status
npx prisma migrate status
```

### Environment Variables Not Loading

- Check variable names match exactly
- Verify no extra spaces
- Redeploy after adding variables

### 500 Errors

```bash
# Check logs
# Vercel: vercel logs --all
# Docker: docker-compose logs app
# PM2: pm2 logs portfolio
```

## Continuous Deployment

### GitHub Actions (Vercel)

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to Vercel
        uses: vercel/action-deploy@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

### GitHub Actions (Docker)

```yaml
# .github/workflows/docker-deploy.yml
name: Docker Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to server
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          key: ${{ secrets.SSH_KEY }}
          script: |
            cd /path/to/portfolio
            git pull
            docker-compose up -d --build
            docker-compose exec app npx prisma migrate deploy
```

## Support

For deployment issues:
1. Check the [Next.js deployment docs](https://nextjs.org/docs/deployment)
2. Review [Vercel documentation](https://vercel.com/docs)
3. Open an issue on GitHub
