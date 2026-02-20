import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  Calendar, 
  Clock,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { constructMetadata } from '@/lib/utils';

// This would typically come from a database or CMS
const projects = [
  {
    slug: 'enterprise-saas-platform',
    title: 'Enterprise SaaS Platform',
    description: 'A comprehensive SaaS platform serving 50,000+ users with real-time analytics, team collaboration, and automated reporting.',
    longDescription: `
      This enterprise-grade SaaS platform was built from the ground up to serve the needs of mid-to-large 
      organizations requiring robust analytics, team collaboration, and automated reporting capabilities.
      
      The platform handles over 50,000 active users daily, processing millions of data points in real-time 
      while maintaining sub-100ms response times for critical operations.
      
      Key architectural decisions included implementing a microservices architecture for scalability, 
      using PostgreSQL for transactional data with read replicas for analytics queries, and Redis for 
      caching and session management.
    `,
    thumbnail: '/images/projects/saas-platform.jpg',
    images: [
      '/images/projects/saas-1.jpg',
      '/images/projects/saas-2.jpg',
      '/images/projects/saas-3.jpg',
    ],
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'AWS', 'Stripe', 'Docker', 'Kubernetes'],
    githubUrl: 'https://github.com/johndn/enterprise-saas',
    liveUrl: 'https://saas-demo.johndn.dev',
    featured: true,
    category: 'Full Stack',
    duration: '8 months',
    completedDate: '2023-12',
    client: 'Enterprise Client',
    role: 'Lead Architect & Developer',
    team: '8 developers',
    challenges: [
      'Scaling to handle 50,000+ concurrent users',
      'Implementing real-time collaboration features',
      'Ensuring data security and compliance (SOC 2, GDPR)',
      'Optimizing database queries for complex analytics',
    ],
    solutions: [
      'Implemented horizontal scaling with Kubernetes',
      'Used WebSockets with Redis pub/sub for real-time features',
      'Built comprehensive audit logging and encryption',
      'Created materialized views and query optimization',
    ],
    results: [
      '99.99% uptime achieved',
      '40% reduction in infrastructure costs',
      'Sub-100ms average response time',
      '50,000+ active daily users',
    ],
    technologies: {
      frontend: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Query'],
      backend: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Prisma ORM'],
      infrastructure: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
      tools: ['Figma', 'Jest', 'Cypress', 'Storybook', 'Sentry'],
    },
  },
  {
    slug: 'ai-powered-analytics',
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time data visualization platform with machine learning insights and predictive analytics capabilities.',
    longDescription: `
      This analytics platform leverages machine learning to provide actionable insights from complex datasets. 
      It processes millions of data points daily and presents them through intuitive, interactive visualizations.
      
      The platform includes predictive analytics capabilities that help businesses forecast trends and make 
      data-driven decisions.
    `,
    thumbnail: '/images/projects/analytics-dashboard.jpg',
    images: [],
    tags: ['React', 'Python', 'TensorFlow', 'D3.js', 'FastAPI', 'WebSocket'],
    githubUrl: 'https://github.com/johndn/ai-analytics',
    liveUrl: 'https://analytics-demo.johndn.dev',
    featured: true,
    category: 'Data & AI',
    duration: '6 months',
    completedDate: '2023-08',
    client: 'Data Analytics Startup',
    role: 'Full-Stack Developer',
    team: '4 developers',
    challenges: [
      'Processing large datasets in real-time',
      'Creating performant data visualizations',
      'Implementing ML models for predictions',
    ],
    solutions: [
      'Built efficient data pipelines with Apache Kafka',
      'Used D3.js with canvas rendering for performance',
      'Deployed TensorFlow models with FastAPI endpoints',
    ],
    results: [
      '10x faster data processing',
      'Real-time visualization of 1M+ data points',
      '85% prediction accuracy',
    ],
    technologies: {
      frontend: ['React', 'TypeScript', 'D3.js', 'Material-UI'],
      backend: ['Python', 'FastAPI', 'TensorFlow', 'PostgreSQL'],
      infrastructure: ['AWS', 'Docker', 'Apache Kafka'],
      tools: ['Jupyter', 'Pandas', 'NumPy', 'Scikit-learn'],
    },
  },
  {
    slug: 'ecommerce-microservices',
    title: 'E-Commerce Microservices',
    description: 'Scalable e-commerce platform built with microservices architecture, handling 10,000+ orders daily.',
    longDescription: `
      A modern e-commerce platform built using microservices architecture to ensure scalability, 
      maintainability, and fault tolerance. The system handles everything from product catalog 
      management to order processing and payment handling.
    `,
    thumbnail: '/images/projects/ecommerce.jpg',
    images: [],
    tags: ['Node.js', 'Kubernetes', 'MongoDB', 'RabbitMQ', 'Docker', 'gRPC'],
    githubUrl: 'https://github.com/johndn/ecommerce-microservices',
    liveUrl: 'https://shop-demo.johndn.dev',
    featured: true,
    category: 'Backend',
    duration: '10 months',
    completedDate: '2023-05',
    client: 'E-Commerce Company',
    role: 'Backend Lead',
    team: '6 developers',
    challenges: [
      'Managing distributed transactions',
      'Ensuring data consistency across services',
      'Handling high traffic during sales events',
    ],
    solutions: [
      'Implemented Saga pattern for distributed transactions',
      'Used event sourcing for audit trails',
      'Built auto-scaling with Kubernetes HPA',
    ],
    results: [
      '10,000+ orders processed daily',
      '99.9% order processing success rate',
      '3x faster checkout process',
    ],
    technologies: {
      frontend: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js', 'Express', 'MongoDB', 'RabbitMQ', 'gRPC'],
      infrastructure: ['Kubernetes', 'Docker', 'Nginx', 'Prometheus'],
      tools: ['Postman', 'k6', 'Grafana', 'ELK Stack'],
    },
  },
];

interface ProjectPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) {
    return constructMetadata({
      title: 'Project Not Found',
    });
  }

  return constructMetadata({
    title: project.title,
    description: project.description,
  });
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="max-w-4xl mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge>{project.category}</Badge>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {project.completedDate}
            </span>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {project.duration}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {project.description}
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-12 bg-muted">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl">🚀</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          <Button asChild>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              View Code
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <div className="prose prose-zinc dark:prose-invert max-w-none">
                {project.longDescription.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </section>

            {/* Challenges & Solutions */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Layers className="h-5 w-5 text-primary" />
                    Key Challenges
                  </h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Solutions Implemented
                  </h3>
                  <ul className="space-y-2">
                    {project.solutions.map((solution, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Results */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Results & Impact</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.results.map((result, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg bg-muted/50 border border-border/50"
                  >
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <p className="text-sm">{result}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Technologies */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="space-y-4">
                {Object.entries(project.technologies).map(([category, techs]) => (
                  <div key={category}>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2 capitalize">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <div className="p-6 rounded-xl bg-muted/50 border border-border/50">
              <h3 className="font-semibold mb-4">Project Details</h3>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm text-muted-foreground">Client</dt>
                  <dd className="font-medium">{project.client}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">My Role</dt>
                  <dd className="font-medium">{project.role}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Team Size</dt>
                  <dd className="font-medium">{project.team}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Duration</dt>
                  <dd className="font-medium">{project.duration}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Completed</dt>
                  <dd className="font-medium">{project.completedDate}</dd>
                </div>
              </dl>
            </div>

            {/* Tags */}
            <div className="p-6 rounded-xl bg-muted/50 border border-border/50">
              <h3 className="font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
