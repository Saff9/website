import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://johndn.dev';

  // Static routes
  const routes = [
    '',
    '/about',
    '/projects',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Blog posts (would typically come from database)
  const blogPosts = [
    'building-scalable-microservices',
    'typescript-best-practices-2024',
    'nextjs-14-app-router',
    'database-optimization-postgresql',
    'react-performance-optimization',
    'aws-serverless-architecture',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Projects
  const projects = [
    'enterprise-saas-platform',
    'ai-powered-analytics',
    'ecommerce-microservices',
    'real-time-collaboration',
    'design-system',
    'serverless-api',
  ].map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...blogPosts, ...projects];
}
