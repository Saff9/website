'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, 
  Database, 
  Cloud, 
  Layout, 
  Server, 
  Shield,
  Cpu,
  GitBranch,
  Terminal
} from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Building responsive, interactive user interfaces with modern frameworks',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Creating robust APIs and server-side applications',
    skills: ['Node.js', 'Express', 'NestJS', 'Python', 'GraphQL', 'REST APIs'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Database,
    title: 'Database & Storage',
    description: 'Designing efficient data models and queries',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'TypeORM', 'Elasticsearch'],
    color: 'from-purple-500 to-violet-500',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Deploying and managing scalable infrastructure',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Vercel'],
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually appealing designs',
    skills: ['Figma', 'Design Systems', 'Accessibility', 'Prototyping', 'User Research'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Shield,
    title: 'Security & Performance',
    description: 'Ensuring applications are secure and fast',
    skills: ['OAuth', 'JWT', 'HTTPS', 'Caching', 'Optimization', 'Monitoring'],
    color: 'from-red-500 to-rose-500',
  },
];

const technologies = [
  { name: 'TypeScript', level: 95 },
  { name: 'React/Next.js', level: 95 },
  { name: 'Node.js', level: 90 },
  { name: 'PostgreSQL', level: 88 },
  { name: 'AWS', level: 85 },
  { name: 'Docker', level: 82 },
  { name: 'GraphQL', level: 80 },
  { name: 'Python', level: 75 },
];

function SkillCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift overflow-hidden">
        {/* Gradient Background on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
        
        {/* Icon */}
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4`}>
          <category.icon className="h-6 w-6 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{category.description}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function TechProgress({ tech, index }: { tech: typeof technologies[0]; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium">{tech.name}</span>
        <span className="text-sm text-muted-foreground">{tech.level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${tech.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-electric-blue to-electric-violet"
        />
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding bg-muted/30" id="skills">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-primary mb-2 block">Expertise</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground">
            A comprehensive toolkit built over 10+ years of professional development experience,
            constantly evolving with industry best practices.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Technology Proficiency */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl font-bold mb-2">Technology Proficiency</h3>
            <p className="text-muted-foreground">Core technologies I work with daily</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <TechProgress key={tech.name} tech={tech} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
