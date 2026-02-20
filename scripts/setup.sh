#!/bin/bash

# Setup script for John Dn Portfolio
# Run this script after cloning the repository

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo "========================================"
echo "  John Dn Portfolio Setup"
echo "========================================"
echo

# Check Node.js version
check_node() {
    echo "📋 Checking Node.js version..."
    
    if ! command -v node &> /dev/null; then
        echo -e "${RED}❌ Node.js is not installed${NC}"
        echo "Please install Node.js 18 or higher: https://nodejs.org/"
        exit 1
    fi
    
    NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 18 ]; then
        echo -e "${RED}❌ Node.js version 18 or higher is required${NC}"
        echo "Current version: $(node -v)"
        exit 1
    fi
    
    echo -e "${GREEN}✅ Node.js $(node -v) is installed${NC}"
}

# Check if npm is installed
check_npm() {
    echo "📋 Checking npm..."
    
    if ! command -v npm &> /dev/null; then
        echo -e "${RED}❌ npm is not installed${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}✅ npm $(npm -v) is installed${NC}"
}

# Install dependencies
install_deps() {
    echo
    echo "📦 Installing dependencies..."
    npm install
    echo -e "${GREEN}✅ Dependencies installed${NC}"
}

# Setup environment variables
setup_env() {
    echo
    echo "⚙️ Setting up environment variables..."
    
    if [ ! -f ".env" ]; then
        if [ -f ".env.example" ]; then
            cp .env.example .env
            echo -e "${YELLOW}⚠️ Created .env from .env.example${NC}"
            echo -e "${YELLOW}⚠️ Please edit .env with your configuration${NC}"
        else
            echo -e "${RED}❌ .env.example not found${NC}"
            exit 1
        fi
    else
        echo -e "${GREEN}✅ .env already exists${NC}"
    fi
}

# Setup database
setup_db() {
    echo
    echo "🗄️ Setting up database..."
    
    # Check if DATABASE_URL is set
    if [ -z "$DATABASE_URL" ]; then
        if grep -q "DATABASE_URL=" .env; then
            export $(grep -v '^#' .env | xargs)
        fi
    fi
    
    if [ -z "$DATABASE_URL" ]; then
        echo -e "${YELLOW}⚠️ DATABASE_URL not set. Skipping database setup.${NC}"
        echo "Please set DATABASE_URL in .env and run:"
        echo "  npx prisma migrate dev"
        echo "  npx prisma db seed"
        return
    fi
    
    echo "Generating Prisma Client..."
    npx prisma generate
    
    echo "Running migrations..."
    npx prisma migrate dev --name init
    
    echo "Seeding database..."
    npx prisma db seed
    
    echo -e "${GREEN}✅ Database setup completed${NC}"
}

# Build the application
build_app() {
    echo
    echo "🏗️ Building application..."
    npm run build
    echo -e "${GREEN}✅ Build completed${NC}"
}

# Print next steps
print_next_steps() {
    echo
    echo "========================================"
    echo -e "${GREEN}✅ Setup completed successfully!${NC}"
    echo "========================================"
    echo
    echo -e "${BLUE}Next steps:${NC}"
    echo
    echo "1. Edit .env with your configuration:"
    echo "   - DATABASE_URL"
    echo "   - NEXTAUTH_SECRET"
    echo "   - Other optional settings"
    echo
    echo "2. Start the development server:"
    echo "   npm run dev"
    echo
    echo "3. Open http://localhost:3000 in your browser"
    echo
    echo "4. Access the admin panel:"
    echo "   - URL: http://localhost:3000/login"
    echo "   - Email: admin@johndn.dev"
    echo "   - Password: admin123"
    echo
    echo "5. Customize your content:"
    echo "   - Edit src/app/about/page.tsx for your bio"
    echo "   - Edit src/app/projects/page.tsx for your projects"
    echo "   - Edit src/app/blog/page.tsx for your blog posts"
    echo
    echo "For more information, see README.md"
    echo
}

# Main setup flow
main() {
    check_node
    check_npm
    install_deps
    setup_env
    setup_db
    print_next_steps
}

# Run main function
main
