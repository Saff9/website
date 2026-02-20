import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Share2, 
  Twitter, 
  Linkedin,
  Facebook,
  Link as LinkIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { constructMetadata, formatDate, readingTime } from '@/lib/utils';

const blogPosts = [
  {
    slug: 'building-scalable-microservices',
    title: 'Building Scalable Microservices with Node.js and Kubernetes',
    excerpt: 'Learn how to design, build, and deploy microservices that can handle millions of requests with proper service discovery, load balancing, and fault tolerance.',
    coverImage: '/images/blog/microservices.jpg',
    date: '2024-01-15',
    content: `
## Introduction

Microservices architecture has become the de facto standard for building large-scale applications. 
In this article, we'll explore how to design, build, and deploy microservices using Node.js and Kubernetes.

## Why Microservices?

Microservices offer several advantages over monolithic architectures:

- **Scalability**: Scale individual services independently
- **Technology Diversity**: Use the best tool for each job
- **Resilience**: Failures are isolated to individual services
- **Team Autonomy**: Different teams can work on different services

## Architecture Overview

A typical microservices architecture consists of:

1. **API Gateway**: Single entry point for all clients
2. **Service Registry**: Keeps track of available services
3. **Microservices**: Individual business capabilities
4. **Message Queue**: Async communication between services
5. **Database**: Each service owns its data

## Building Your First Service

Let's start with a simple user service:

\`\`\`typescript
// user-service/src/index.ts
import express from 'express';
import { createUser, getUser } from './handlers';

const app = express();
app.use(express.json());

app.post('/users', createUser);
app.get('/users/:id', getUser);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(\`User service running on port \${PORT}\`);
});
\`\`\`

## Containerization with Docker

Each service should be containerized:

\`\`\`dockerfile
# user-service/Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3001

CMD ["node", "dist/index.js"]
\`\`\`

## Deploying to Kubernetes

Here's a basic deployment configuration:

\`\`\`yaml
# user-service-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: user-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: user-service
  template:
    metadata:
      labels:
        app: user-service
    spec:
      containers:
      - name: user-service
        image: user-service:latest
        ports:
        - containerPort: 3001
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: db-secret
              key: url
\`\`\`

## Service Discovery

Use Kubernetes DNS for service discovery:

\`\`\`typescript
// config.ts
const SERVICES = {
  user: process.env.USER_SERVICE_URL || 'http://user-service:3001',
  order: process.env.ORDER_SERVICE_URL || 'http://order-service:3002',
  payment: process.env.PAYMENT_SERVICE_URL || 'http://payment-service:3003',
};
\`\`\`

## Handling Failures

Implement circuit breakers to handle service failures:

\`\`\`typescript
import CircuitBreaker from 'opossum';

const options = {
  timeout: 3000,
  errorThresholdPercentage: 50,
  resetTimeout: 30000,
};

const breaker = new CircuitBreaker(callExternalService, options);

breaker.fire()
  .then(console.log)
  .catch(console.error);
\`\`\`

## Monitoring and Observability

Set up distributed tracing with Jaeger:

\`\`\`typescript
import { initTracer } from 'jaeger-client';

const config = {
  serviceName: 'user-service',
  sampler: { type: 'const', param: 1 },
};

const tracer = initTracer(config, {});
\`\`\`

## Best Practices

1. **Design for Failure**: Assume services will fail
2. **Use Async Communication**: Prefer message queues for decoupling
3. **Implement Health Checks**: Kubernetes needs to know if your service is healthy
4. **Centralized Logging**: Aggregate logs from all services
5. **API Versioning**: Maintain backward compatibility

## Conclusion

Building microservices requires careful planning and the right tools. With Node.js and Kubernetes, 
you have a powerful stack for creating scalable, resilient applications.

Remember: start simple, measure everything, and evolve your architecture based on real needs.
    `,
    tags: ['Node.js', 'Kubernetes', 'Microservices', 'Architecture'],
    published: true,
    featured: true,
    author: {
      name: 'John Dn',
      avatar: '/images/avatar.jpg',
      bio: 'Senior Software Developer with 10+ years of experience building scalable applications.',
    },
  },
  {
    slug: 'typescript-best-practices-2024',
    title: 'TypeScript Best Practices for Large-Scale Applications',
    excerpt: 'A comprehensive guide to writing maintainable TypeScript code with strict typing, proper error handling, and effective design patterns.',
    coverImage: '/images/blog/typescript.jpg',
    date: '2024-01-08',
    content: `
## Introduction

TypeScript has become the standard for building large-scale JavaScript applications. 
This guide covers best practices for writing maintainable, type-safe code.

## Enable Strict Mode

Always enable strict mode in your tsconfig.json:

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true
  }
}
\`\`\`

## Use Explicit Types

Avoid implicit any and always define types:

\`\`\`typescript
// Bad
function processData(data) {
  return data.map(item => item.value);
}

// Good
interface DataItem {
  value: number;
}

function processData(data: DataItem[]): number[] {
  return data.map(item => item.value);
}
\`\`\`

## Leverage Type Inference

Let TypeScript infer types when appropriate:

\`\`\`typescript
// Type is inferred as string
const name = 'John';

// Type is inferred from return value
function getUser() {
  return { id: 1, name: 'John' };
}
\`\`\`

## Use Discriminated Unions

For better type narrowing:

\`\`\`typescript
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'rectangle'; width: number; height: number }
  | { kind: 'square'; side: number };

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'rectangle':
      return shape.width * shape.height;
    case 'square':
      return shape.side ** 2;
  }
}
\`\`\`

## Implement Proper Error Handling

Use custom error classes:

\`\`\`typescript
class ValidationError extends Error {
  constructor(message: string, public field: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

class NotFoundError extends Error {
  constructor(resource: string, id: string) {
    super(\`\${resource} with id \${id} not found\`);
    this.name = 'NotFoundError';
  }
}
\`\`\`

## Use Generics Effectively

Create reusable, type-safe components:

\`\`\`typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  const response = await fetch(url);
  return response.json();
}

// Usage
const users = await fetchData<User[]>('/api/users');
\`\`\`

## Brand Types for Safety

Prevent mixing of similar types:

\`\`\`typescript
type UserId = string & { __brand: 'UserId' };
type OrderId = string & { __brand: 'OrderId' };

function createUserId(id: string): UserId {
  return id as UserId;
}

function createOrderId(id: string): OrderId {
  return id as OrderId;
}

// Now these can't be mixed up
const userId = createUserId('user-123');
const orderId = createOrderId('order-456');
\`\`\`

## Conclusion

Following these practices will help you write more maintainable, type-safe TypeScript code. 
Remember: types are documentation that never goes out of date.
    `,
    tags: ['TypeScript', 'Best Practices', 'Architecture'],
    published: true,
    featured: true,
    author: {
      name: 'John Dn',
      avatar: '/images/avatar.jpg',
      bio: 'Senior Software Developer with 10+ years of experience building scalable applications.',
    },
  },
  {
    slug: 'nextjs-14-app-router',
    title: 'Deep Dive into Next.js 14 App Router and Server Components',
    excerpt: 'Exploring the new App Router architecture, Server Components, and how they revolutionize React application development.',
    coverImage: '/images/blog/nextjs.jpg',
    date: '2024-01-02',
    content: 'Content coming soon...',
    tags: ['Next.js', 'React', 'Server Components'],
    published: true,
    featured: false,
    author: {
      name: 'John Dn',
      avatar: '/images/avatar.jpg',
      bio: 'Senior Software Developer with 10+ years of experience building scalable applications.',
    },
  },
];

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return constructMetadata({
      title: 'Article Not Found',
    });
  }

  return constructMetadata({
    title: post.title,
    description: post.excerpt,
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const readTime = readingTime(post.content);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        {/* Header */}
        <article className="max-w-3xl mx-auto">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {readTime} min read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            {post.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Cover Image */}
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-12 bg-muted">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl">📝</span>
            </div>
          </div>

          {/* Author */}
          <div className="flex items-center gap-4 mb-12 p-4 rounded-xl bg-muted/50">
            <Avatar className="h-12 w-12">
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{post.author.name}</div>
              <div className="text-sm text-muted-foreground">{post.author.bio}</div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-zinc dark:prose-invert max-w-none prose-lg">
            {post.content.split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={i}>{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('1. **')) {
                const items = paragraph.split('\n').filter(line => line.trim());
                return (
                  <ol key={i}>
                    {items.map((item, j) => (
                      <li key={j}>{item.replace(/^\d+\. \*\*|\*\*/g, '')}</li>
                    ))}
                  </ol>
                );
              }
              if (paragraph.startsWith('- **')) {
                const items = paragraph.split('\n').filter(line => line.trim());
                return (
                  <ul key={i}>
                    {items.map((item, j) => (
                      <li key={j}>{item.replace(/^- \*\*|\*\*/g, '')}</li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.startsWith('```')) {
                const code = paragraph.replace(/```\w*\n?|```$/g, '');
                return (
                  <pre key={i} className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{code}</code>
                  </pre>
                );
              }
              return <p key={i}>{paragraph}</p>;
            })}
          </div>

          <Separator className="my-12" />

          {/* Share */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Share:</span>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <LinkIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
