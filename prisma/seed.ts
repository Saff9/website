import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@johndn.dev' },
    update: {},
    create: {
      email: 'admin@johndn.dev',
      name: 'John Dn',
      password: adminPassword,
      role: 'ADMIN',
    },
  });
  console.log('Created admin user:', admin.email);

  // Create tags
  const tags = await Promise.all([
    prisma.tag.upsert({
      where: { slug: 'typescript' },
      update: {},
      create: { name: 'TypeScript', slug: 'typescript' },
    }),
    prisma.tag.upsert({
      where: { slug: 'react' },
      update: {},
      create: { name: 'React', slug: 'react' },
    }),
    prisma.tag.upsert({
      where: { slug: 'nextjs' },
      update: {},
      create: { name: 'Next.js', slug: 'nextjs' },
    }),
    prisma.tag.upsert({
      where: { slug: 'nodejs' },
      update: {},
      create: { name: 'Node.js', slug: 'nodejs' },
    }),
    prisma.tag.upsert({
      where: { slug: 'kubernetes' },
      update: {},
      create: { name: 'Kubernetes', slug: 'kubernetes' },
    }),
    prisma.tag.upsert({
      where: { slug: 'aws' },
      update: {},
      create: { name: 'AWS', slug: 'aws' },
    }),
    prisma.tag.upsert({
      where: { slug: 'database' },
      update: {},
      create: { name: 'Database', slug: 'database' },
    }),
    prisma.tag.upsert({
      where: { slug: 'architecture' },
      update: {},
      create: { name: 'Architecture', slug: 'architecture' },
    }),
  ]);
  console.log(`Created ${tags.length} tags`);

  // Create sample blog posts
  const posts = await Promise.all([
    prisma.blogPost.upsert({
      where: { slug: 'building-scalable-microservices' },
      update: {},
      create: {
        slug: 'building-scalable-microservices',
        title: 'Building Scalable Microservices with Node.js and Kubernetes',
        excerpt: 'Learn how to design, build, and deploy microservices that can handle millions of requests with proper service discovery, load balancing, and fault tolerance.',
        content: `# Building Scalable Microservices

## Introduction

Microservices architecture has become the de facto standard for building large-scale applications...

## Why Microservices?

- **Scalability**: Scale individual services independently
- **Technology Diversity**: Use the best tool for each job
- **Resilience**: Failures are isolated to individual services

## Conclusion

Building microservices requires careful planning and the right tools.`,
        coverImage: '/images/blog/microservices.jpg',
        published: true,
        featured: true,
        publishedAt: new Date('2024-01-15'),
        authorId: admin.id,
      },
    }),
    prisma.blogPost.upsert({
      where: { slug: 'typescript-best-practices-2024' },
      update: {},
      create: {
        slug: 'typescript-best-practices-2024',
        title: 'TypeScript Best Practices for Large-Scale Applications',
        excerpt: 'A comprehensive guide to writing maintainable TypeScript code with strict typing, proper error handling, and effective design patterns.',
        content: `# TypeScript Best Practices

## Enable Strict Mode

Always enable strict mode in your tsconfig.json...

## Use Explicit Types

Avoid implicit any and always define types...`,
        coverImage: '/images/blog/typescript.jpg',
        published: true,
        featured: true,
        publishedAt: new Date('2024-01-08'),
        authorId: admin.id,
      },
    }),
    prisma.blogPost.upsert({
      where: { slug: 'nextjs-14-app-router' },
      update: {},
      create: {
        slug: 'nextjs-14-app-router',
        title: 'Deep Dive into Next.js 14 App Router and Server Components',
        excerpt: 'Exploring the new App Router architecture, Server Components, and how they revolutionize React application development.',
        content: `# Next.js 14 App Router

## Introduction

The App Router is a new paradigm for building React applications...`,
        coverImage: '/images/blog/nextjs.jpg',
        published: true,
        featured: false,
        publishedAt: new Date('2024-01-02'),
        authorId: admin.id,
      },
    }),
  ]);
  console.log(`Created ${posts.length} blog posts`);

  // Create sample projects
  const projects = await Promise.all([
    prisma.project.upsert({
      where: { slug: 'enterprise-saas-platform' },
      update: {},
      create: {
        slug: 'enterprise-saas-platform',
        title: 'Enterprise SaaS Platform',
        description: 'A comprehensive SaaS platform serving 50,000+ users with real-time analytics, team collaboration, and automated reporting.',
        content: `# Enterprise SaaS Platform

## Overview

This enterprise-grade SaaS platform was built from the ground up...`,
        thumbnail: '/images/projects/saas-platform.jpg',
        images: [],
        githubUrl: 'https://github.com/johndn/enterprise-saas',
        liveUrl: 'https://saas-demo.johndn.dev',
        featured: true,
        published: true,
        order: 1,
        authorId: admin.id,
      },
    }),
    prisma.project.upsert({
      where: { slug: 'ai-powered-analytics' },
      update: {},
      create: {
        slug: 'ai-powered-analytics',
        title: 'AI-Powered Analytics Dashboard',
        description: 'Real-time data visualization platform with machine learning insights and predictive analytics capabilities.',
        content: `# AI Analytics Dashboard

## Overview

This analytics platform leverages machine learning...`,
        thumbnail: '/images/projects/analytics-dashboard.jpg',
        images: [],
        githubUrl: 'https://github.com/johndn/ai-analytics',
        liveUrl: 'https://analytics-demo.johndn.dev',
        featured: true,
        published: true,
        order: 2,
        authorId: admin.id,
      },
    }),
    prisma.project.upsert({
      where: { slug: 'ecommerce-microservices' },
      update: {},
      create: {
        slug: 'ecommerce-microservices',
        title: 'E-Commerce Microservices',
        description: 'Scalable e-commerce platform built with microservices architecture, handling 10,000+ orders daily.',
        content: `# E-Commerce Microservices

## Overview

A modern e-commerce platform built using microservices...`,
        thumbnail: '/images/projects/ecommerce.jpg',
        images: [],
        githubUrl: 'https://github.com/johndn/ecommerce-microservices',
        liveUrl: 'https://shop-demo.johndn.dev',
        featured: true,
        published: true,
        order: 3,
        authorId: admin.id,
      },
    }),
  ]);
  console.log(`Created ${projects.length} projects`);

  // Create site config
  const siteConfigs = await Promise.all([
    prisma.siteConfig.upsert({
      where: { key: 'site_name' },
      update: {},
      create: {
        key: 'site_name',
        value: 'John Dn',
        description: 'Website name',
      },
    }),
    prisma.siteConfig.upsert({
      where: { key: 'site_description' },
      update: {},
      create: {
        key: 'site_description',
        value: 'Senior Software Developer & Architecture Consultant',
        description: 'Website description for SEO',
      },
    }),
    prisma.siteConfig.upsert({
      where: { key: 'contact_email' },
      update: {},
      create: {
        key: 'contact_email',
        value: 'hello@johndn.dev',
        description: 'Primary contact email',
      },
    }),
  ]);
  console.log(`Created ${siteConfigs.length} site configs`);

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
