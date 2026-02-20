import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { constructMetadata, formatDate, readingTime } from '@/lib/utils';

export const metadata: Metadata = constructMetadata({
  title: 'Blog',
  description: 'Articles on software engineering, architecture patterns, and lessons learned from building production applications.',
});

const blogPosts = [
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
    author: 'John Dn',
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
    author: 'John Dn',
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
    featured: false,
    author: 'John Dn',
  },
  {
    slug: 'database-optimization-postgresql',
    title: 'Database Optimization Techniques for PostgreSQL',
    excerpt: 'Advanced techniques for optimizing PostgreSQL queries, indexing strategies, and performance tuning for high-traffic applications.',
    coverImage: '/images/blog/postgresql.jpg',
    date: '2023-12-20',
    content: '',
    tags: ['PostgreSQL', 'Database', 'Performance'],
    published: true,
    featured: false,
    author: 'John Dn',
  },
  {
    slug: 'react-performance-optimization',
    title: 'React Performance Optimization: A Complete Guide',
    excerpt: 'Learn how to identify and fix performance bottlenecks in React applications using profiling tools and optimization techniques.',
    coverImage: '/images/blog/react-performance.jpg',
    date: '2023-12-15',
    content: '',
    tags: ['React', 'Performance', 'Frontend'],
    published: true,
    featured: false,
    author: 'John Dn',
  },
  {
    slug: 'aws-serverless-architecture',
    title: 'Building Serverless Applications with AWS',
    excerpt: 'A practical guide to designing and deploying serverless architectures using Lambda, API Gateway, and DynamoDB.',
    coverImage: '/images/blog/aws.jpg',
    date: '2023-12-08',
    content: '',
    tags: ['AWS', 'Serverless', 'Cloud'],
    published: true,
    featured: false,
    author: 'John Dn',
  },
];

const allTags = Array.from(
  new Set(blogPosts.flatMap((post) => post.tags))
).sort();

function BlogCard({ post, featured = false }: { post: typeof blogPosts[0]; featured?: boolean }) {
  const readTime = readingTime(post.excerpt + post.content);

  if (featured) {
    return (
      <Card className="group overflow-hidden hover-lift border-border/50">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
            <div className="absolute inset-0 bg-muted flex items-center justify-center">
              <span className="text-5xl">📝</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
          </div>

          {/* Content */}
          <CardContent className="p-6 md:p-8 flex flex-col justify-center">
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

            <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="text-muted-foreground mb-4">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              Read Article
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </CardContent>
        </div>
      </Card>
    );
  }

  return (
    <Card className="group overflow-hidden hover-lift border-border/50 h-full flex flex-col">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <span className="text-4xl">📝</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
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
  );
}

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Blog</h1>
          <p className="text-muted-foreground">
            Thoughts on software engineering, architecture patterns, and lessons learned 
            from building production applications. I write about what I learn and share 
            insights from real-world projects.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              className="pl-10"
            />
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <Button variant="default" size="sm">All</Button>
          {allTags.map((tag) => (
            <Button key={tag} variant="outline" size="sm">
              {tag}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <h2 className="text-sm font-medium text-muted-foreground mb-4">Featured</h2>
            <BlogCard post={featuredPost} featured />
          </div>
        )}

        {/* Regular Posts */}
        <div>
          <h2 className="text-sm font-medium text-muted-foreground mb-4">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
