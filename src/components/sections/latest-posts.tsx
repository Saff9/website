'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { formatDate, readingTime } from '@/lib/utils';

const latestPosts = [
  {
    slug: 'building-scalable-microservices',
    title: 'Building Scalable Microservices with Node.js and Kubernetes',
    excerpt: 'Learn how to design, build, and deploy microservices that can handle millions of requests with proper service discovery, load balancing, and fault tolerance.',
    coverImage: '/images/blog/microservices.jpg',
    date: '2024-01-15',
    content: '',
    tags: ['Node.js', 'Kubernetes', 'Microservices', 'Architecture'],
    published: true,
    featured: true,
  },
  {
    slug: 'typescript-best-practices-2024',
    title: 'TypeScript Best Practices for Large-Scale Applications',
    excerpt: 'A comprehensive guide to writing maintainable TypeScript code with strict typing, proper error handling, and effective design patterns.',
    coverImage: '/images/blog/typescript.jpg',
    date: '2024-01-08',
    content: '',
    tags: ['TypeScript', 'Best Practices', 'Architecture'],
    published: true,
    featured: true,
  },
  {
    slug: 'nextjs-14-app-router',
    title: 'Deep Dive into Next.js 14 App Router and Server Components',
    excerpt: 'Exploring the new App Router architecture, Server Components, and how they revolutionize React application development.',
    coverImage: '/images/blog/nextjs.jpg',
    date: '2024-01-02',
    content: '',
    tags: ['Next.js', 'React', 'Server Components'],
    published: true,
    featured: true,
  },
];

function BlogCard({ post, index }: { post: typeof latestPosts[0]; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const readTime = readingTime(post.excerpt + post.content);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <Card className="group overflow-hidden hover-lift border-border/50 h-full flex flex-col">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          
          {/* Featured Badge */}
          {post.featured && (
            <Badge className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm">
              Featured
            </Badge>
          )}
        </div>

        <CardContent className="p-6 flex flex-col flex-1">
          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {readTime} min read
            </span>
          </div>

          {/* Title & Excerpt */}
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Link */}
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-sm font-medium text-primary hover:underline mt-auto"
          >
            Read Article
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function LatestPostsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding bg-muted/30" id="blog">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div className="max-w-xl">
            <span className="text-sm font-medium text-primary mb-2 block">Blog</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Latest Articles</h2>
            <p className="text-muted-foreground">
              Thoughts on software engineering, architecture patterns, and lessons learned
              from building production applications.
            </p>
          </div>
          <Button asChild variant="outline" className="group self-start sm:self-auto">
            <Link href="/blog">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
