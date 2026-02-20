#!/bin/bash

# Deployment script for John Dn Portfolio
# Usage: ./scripts/deploy.sh [environment]
# Environments: development, staging, production

set -e

ENVIRONMENT=${1:-production}
echo "🚀 Deploying to $ENVIRONMENT..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if required tools are installed
check_requirements() {
    echo "📋 Checking requirements..."
    
    if ! command -v node &> /dev/null; then
        echo -e "${RED}❌ Node.js is not installed${NC}"
        exit 1
    fi
    
    if ! command -v npm &> /dev/null; then
        echo -e "${RED}❌ npm is not installed${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}✅ All requirements met${NC}"
}

# Install dependencies
install_dependencies() {
    echo "📦 Installing dependencies..."
    npm ci
    echo -e "${GREEN}✅ Dependencies installed${NC}"
}

# Run database migrations
run_migrations() {
    echo "🗄️ Running database migrations..."
    npx prisma migrate deploy
    echo -e "${GREEN}✅ Migrations completed${NC}"
}

# Generate Prisma Client
generate_prisma() {
    echo "🔧 Generating Prisma Client..."
    npx prisma generate
    echo -e "${GREEN}✅ Prisma Client generated${NC}"
}

# Build the application
build_app() {
    echo "🏗️ Building application..."
    npm run build
    echo -e "${GREEN}✅ Build completed${NC}"
}

# Run tests
run_tests() {
    echo "🧪 Running tests..."
    npm run type-check
    npm run lint
    echo -e "${GREEN}✅ Tests passed${NC}"
}

# Deploy to Vercel
deploy_vercel() {
    echo "🌐 Deploying to Vercel..."
    if ! command -v vercel &> /dev/null; then
        echo -e "${YELLOW}⚠️ Vercel CLI not found. Installing...${NC}"
        npm i -g vercel
    fi
    
    if [ "$ENVIRONMENT" == "production" ]; then
        vercel --prod
    else
        vercel
    fi
    echo -e "${GREEN}✅ Deployed to Vercel${NC}"
}

# Deploy with Docker
deploy_docker() {
    echo "🐳 Deploying with Docker..."
    
    if ! command -v docker &> /dev/null; then
        echo -e "${RED}❌ Docker is not installed${NC}"
        exit 1
    fi
    
    if ! command -v docker-compose &> /dev/null; then
        echo -e "${RED}❌ Docker Compose is not installed${NC}"
        exit 1
    fi
    
    docker-compose -f docker-compose.yml up -d --build
    echo -e "${GREEN}✅ Docker deployment completed${NC}"
}

# Main deployment flow
main() {
    echo "========================================"
    echo "  John Dn Portfolio Deployment"
    echo "  Environment: $ENVIRONMENT"
    echo "========================================"
    echo
    
    check_requirements
    install_dependencies
    generate_prisma
    
    if [ "$ENVIRONMENT" != "development" ]; then
        run_tests
    fi
    
    if [ "$ENVIRONMENT" == "production" ] || [ "$ENVIRONMENT" == "staging" ]; then
        run_migrations
    fi
    
    build_app
    
    # Check deployment method
    if [ -f "vercel.json" ] || [ "$DEPLOY_METHOD" == "vercel" ]; then
        deploy_vercel
    elif [ "$DEPLOY_METHOD" == "docker" ]; then
        deploy_docker
    else
        echo -e "${YELLOW}⚠️ No deployment method specified${NC}"
        echo "Build completed. Deploy manually or set DEPLOY_METHOD:"
        echo "  - DEPLOY_METHOD=vercel ./scripts/deploy.sh"
        echo "  - DEPLOY_METHOD=docker ./scripts/deploy.sh"
    fi
    
    echo
    echo "========================================"
    echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
    echo "========================================"
}

# Run main function
main
