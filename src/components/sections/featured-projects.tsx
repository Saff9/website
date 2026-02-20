'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const featuredProjects = [
  {
    id: '1',
    slug: 'enterprise-saas-platform',
    title: 'Enterprise SaaS Platform',
    description: 'A comprehensive SaaS platform serving 50,000+ users with real-time analytics, team collaboration, and automated reporting.',
    thumbnail: '/images/projects/saas-platform.jpg',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'AWS'],
    githubUrl: 'https://github.com/johndn/enterprise-saas',
    liveUrl: 'https://saas-demo.johndn.dev',
    featured: true,
  },
  {
    id: '2',
    slug: 'ai-powered-analytics',
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time data visualization platform with machine learning insights and predictive analytics capabilities.',
    thumbnail: '/images/projects/analytics-dashboard.jpg',
    tags: ['React', 'Python', 'TensorFlow', 'D3.js', 'FastAPI'],
    githubUrl: 'https://github.com/johndn/ai-analytics',
    liveUrl: 'https://analytics-demo.johndn.dev',
    featured: true,
  },
  {
    id: '3',
    slug: 'ecommerce-microservices',
    title: 'E-Commerce Microservices',
    description: 'Scalable e-commerce platform built with microservices architecture, handling 10,000+ orders daily.',
    thumbnail: '/images/projects/ecommerce.jpg',
    tags: ['Node.js', 'Kubernetes', 'MongoDB', 'RabbitMQ', 'Docker'],
    githubUrl: 'https://github.com/johndn/ecommerce-microservices',
    liveUrl: 'https://shop-demo.johndn.dev',
    featured: true,
  },
];

function ProjectCard({ project, index }: { project: typeof featuredProjects[0]; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <Card className="group overflow-hidden hover-lift border-border/50">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
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
        </div>

        <CardContent className="p-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{project.tags.length - 3}
              </Badge>
            )}
          </div>

          {/* Title & Description */}
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
            {project.description}
          </p>

          {/* Link */}
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            View Details
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function FeaturedProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding" id="projects">
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
            <span className="text-sm font-medium text-primary mb-2 block">Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">
              A selection of my recent work, showcasing expertise in full-stack development,
              system architecture, and user experience design.
            </p>
          </div>
          <Button asChild variant="outline" className="group self-start sm:self-auto">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
