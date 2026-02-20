import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Github, ExternalLink, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { constructMetadata } from '@/lib/utils';

export const metadata: Metadata = constructMetadata({
  title: 'Projects',
  description: 'Explore my portfolio of web applications, APIs, and software solutions built with modern technologies.',
});

const projects = [
  {
    id: '1',
    slug: 'enterprise-saas-platform',
    title: 'Enterprise SaaS Platform',
    description: 'A comprehensive SaaS platform serving 50,000+ users with real-time analytics, team collaboration, and automated reporting. Features include role-based access control, custom dashboards, and API integrations.',
    thumbnail: '/images/projects/saas-platform.jpg',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'AWS', 'Stripe'],
    githubUrl: 'https://github.com/johndn/enterprise-saas',
    liveUrl: 'https://saas-demo.johndn.dev',
    featured: true,
    category: 'Full Stack',
  },
  {
    id: '2',
    slug: 'ai-powered-analytics',
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time data visualization platform with machine learning insights and predictive analytics capabilities. Processes millions of data points daily.',
    thumbnail: '/images/projects/analytics-dashboard.jpg',
    tags: ['React', 'Python', 'TensorFlow', 'D3.js', 'FastAPI', 'WebSocket'],
    githubUrl: 'https://github.com/johndn/ai-analytics',
    liveUrl: 'https://analytics-demo.johndn.dev',
    featured: true,
    category: 'Data & AI',
  },
  {
    id: '3',
    slug: 'ecommerce-microservices',
    title: 'E-Commerce Microservices',
    description: 'Scalable e-commerce platform built with microservices architecture, handling 10,000+ orders daily. Includes inventory management, payment processing, and order fulfillment.',
    thumbnail: '/images/projects/ecommerce.jpg',
    tags: ['Node.js', 'Kubernetes', 'MongoDB', 'RabbitMQ', 'Docker', 'gRPC'],
    githubUrl: 'https://github.com/johndn/ecommerce-microservices',
    liveUrl: 'https://shop-demo.johndn.dev',
    featured: true,
    category: 'Backend',
  },
  {
    id: '4',
    slug: 'real-time-collaboration',
    title: 'Real-Time Collaboration Tool',
    description: 'Google Docs-like collaborative editing platform with real-time synchronization, conflict resolution, and offline support.',
    thumbnail: '/images/projects/collaboration.jpg',
    tags: ['Next.js', 'Yjs', 'WebSocket', 'PostgreSQL', 'Redis'],
    githubUrl: 'https://github.com/johndn/collab-tool',
    liveUrl: 'https://collab-demo.johndn.dev',
    featured: false,
    category: 'Full Stack',
  },
  {
    id: '5',
    slug: 'design-system',
    title: 'Component Design System',
    description: 'A comprehensive UI component library with 50+ accessible, customizable components. Used across multiple projects and teams.',
    thumbnail: '/images/projects/design-system.jpg',
    tags: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS', 'Radix UI'],
    githubUrl: 'https://github.com/johndn/design-system',
    liveUrl: 'https://design-system.johndn.dev',
    featured: false,
    category: 'Frontend',
  },
  {
    id: '6',
    slug: 'serverless-api',
    title: 'Serverless API Gateway',
    description: 'High-performance API gateway built with AWS Lambda and API Gateway. Handles authentication, rate limiting, and request transformation.',
    thumbnail: '/images/projects/api-gateway.jpg',
    tags: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Terraform', 'Node.js'],
    githubUrl: 'https://github.com/johndn/serverless-api',
    liveUrl: 'https://api-docs.johndn.dev',
    featured: false,
    category: 'Backend',
  },
];

const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Data & AI'];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <Card className="group overflow-hidden hover-lift border-border/50 h-full flex flex-col">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="w-full h-full bg-muted flex items-center justify-center">
          <span className="text-4xl">🚀</span>
        </div>
        
        {/* Overlay Links */}
        <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>

        {/* Category Badge */}
        <Badge className="absolute top-4 right-4 z-10 bg-background/90 backdrop-blur-sm">
          {project.category}
        </Badge>
      </div>

      <CardContent className="p-6 flex flex-col flex-1">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 4 && (
            <Badge variant="secondary" className="text-xs">
              +{project.tags.length - 4}
            </Badge>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
          {project.description}
        </p>

        {/* Link */}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center text-sm font-medium text-primary hover:underline mt-auto"
        >
          View Details
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h1>
          <p className="text-muted-foreground">
            A collection of my work spanning web applications, APIs, design systems, 
            and open-source contributions. Each project represents a unique challenge 
            and learning opportunity.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === 'All' ? 'default' : 'outline'}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
