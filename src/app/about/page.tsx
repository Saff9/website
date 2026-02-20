import { Metadata } from 'next';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Mail, 
  Calendar, 
  Briefcase, 
  GraduationCap,
  Award,
  Heart,
  Coffee,
  Code2,
  Globe
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { constructMetadata } from '@/lib/utils';

export const metadata: Metadata = constructMetadata({
  title: 'About',
  description: 'Learn more about John Dn - Senior Software Developer with 10+ years of experience building scalable applications.',
});

const stats = [
  { label: 'Years Experience', value: '10+' },
  { label: 'Projects Completed', value: '50+' },
  { label: 'Happy Clients', value: '30+' },
  { label: 'Lines of Code', value: '1M+' },
];

const experiences = [
  {
    company: 'TechCorp Inc.',
    position: 'Senior Software Architect',
    location: 'San Francisco, CA',
    startDate: '2021',
    endDate: 'Present',
    current: true,
    description: 'Leading architecture decisions for a platform serving 10M+ users. Managing a team of 12 engineers and driving technical excellence across the organization.',
    achievements: [
      'Reduced infrastructure costs by 40% through optimization',
      'Improved system reliability to 99.99% uptime',
      'Mentored 5 engineers to senior positions',
    ],
    technologies: ['AWS', 'Kubernetes', 'TypeScript', 'PostgreSQL'],
  },
  {
    company: 'StartupXYZ',
    position: 'Lead Full-Stack Developer',
    location: 'New York, NY',
    startDate: '2018',
    endDate: '2021',
    current: false,
    description: 'Built the core product from scratch, scaled to 100K users. Implemented CI/CD pipelines and established engineering best practices.',
    achievements: [
      'Built MVP to product-market fit in 6 months',
      'Scaled application to handle 10K concurrent users',
      'Established code review and testing culture',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
  },
  {
    company: 'Digital Agency Pro',
    position: 'Software Developer',
    location: 'Austin, TX',
    startDate: '2016',
    endDate: '2018',
    current: false,
    description: 'Developed web applications for Fortune 500 clients. Worked with diverse tech stacks and delivered 20+ successful projects.',
    achievements: [
      'Delivered projects with 100% on-time record',
      'Received "Developer of the Year" award',
      'Led migration to modern JavaScript frameworks',
    ],
    technologies: ['JavaScript', 'PHP', 'MySQL', 'WordPress'],
  },
  {
    company: 'Web Solutions LLC',
    position: 'Junior Developer',
    location: 'Remote',
    startDate: '2014',
    endDate: '2016',
    current: false,
    description: 'Started my professional journey building websites and small applications. Learned fundamentals of software engineering and client communication.',
    achievements: [
      'Promoted to mid-level in 12 months',
      'Built 50+ websites for small businesses',
    ],
    technologies: ['HTML/CSS', 'JavaScript', 'jQuery', 'PHP'],
  },
];

const education = [
  {
    institution: 'University of Technology',
    degree: 'Master of Science',
    field: 'Computer Science',
    startDate: '2012',
    endDate: '2014',
    current: false,
    description: 'Specialized in Distributed Systems and Machine Learning. GPA: 3.9/4.0',
  },
  {
    institution: 'State University',
    degree: 'Bachelor of Science',
    field: 'Software Engineering',
    startDate: '2008',
    endDate: '2012',
    current: false,
    description: 'Dean\'s List, Graduated with Honors. President of Computer Science Club.',
  },
];

const philosophies = [
  {
    icon: Code2,
    title: 'Clean Code First',
    description: 'I believe that readable, maintainable code is more valuable than clever code. Every line should serve a purpose.',
  },
  {
    icon: Heart,
    title: 'User-Centric Design',
    description: 'Technology should solve real problems for real people. I always start with the user and work backwards.',
  },
  {
    icon: Globe,
    title: 'Continuous Learning',
    description: 'The tech landscape evolves rapidly. I dedicate time every week to learn new technologies and improve my skills.',
  },
  {
    icon: Coffee,
    title: 'Work-Life Balance',
    description: 'Sustainable productivity comes from balance. I believe in working hard and resting well.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Avatar */}
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-background shadow-xl">
                <div className="w-full h-full bg-gradient-to-br from-electric-blue to-electric-violet flex items-center justify-center">
                  <span className="text-5xl md:text-6xl font-bold text-white">JD</span>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                Open to Work
              </div>
            </div>

            {/* Info */}
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">John Dn</h1>
              <p className="text-lg text-muted-foreground mb-4">
                Senior Software Developer & Architecture Consultant
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  San Francisco, CA
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  hello@johndn.dev
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  10+ Years Exp.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-muted/50 border border-border/50"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bio */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-2xl font-bold mb-6">About Me</h2>
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              I&apos;m a passionate software developer with over a decade of experience building 
              scalable, high-performance applications. My journey began with simple HTML websites 
              and has evolved into architecting complex distributed systems serving millions of users.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Throughout my career, I&apos;ve had the privilege of working with startups, agencies, 
              and enterprise companies. This diverse experience has taught me to adapt quickly, 
              communicate effectively, and always keep the end user in mind.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to 
              open-source projects, mentoring aspiring developers, or enjoying the great outdoors. 
              I believe in continuous learning and giving back to the community that has given me so much.
            </p>
          </div>
        </div>

        <Separator className="my-16" />

        {/* Experience */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Work Experience</h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 md:pl-0"
              >
                <div className="md:grid md:grid-cols-[200px_1fr] md:gap-8">
                  {/* Timeline */}
                  <div className="hidden md:block text-right">
                    <div className="text-sm font-medium text-foreground">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </div>
                    <div className="text-sm text-muted-foreground">{exp.location}</div>
                  </div>

                  {/* Content */}
                  <div className="relative pb-8 border-l border-border md:border-l-0 md:pb-0">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background md:hidden" />
                    
                    <div className="md:hidden mb-2">
                      <div className="text-sm font-medium">
                        {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                      </div>
                      <div className="text-sm text-muted-foreground">{exp.location}</div>
                    </div>

                    <h3 className="text-lg font-semibold">{exp.position}</h3>
                    <div className="text-primary font-medium mb-2">{exp.company}</div>
                    <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <ul className="space-y-1 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-16" />

        {/* Education */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="md:grid md:grid-cols-[200px_1fr] md:gap-8">
                <div className="text-sm font-medium text-muted-foreground md:text-right">
                  {edu.startDate} - {edu.endDate}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <div className="text-primary font-medium">{edu.field}</div>
                  <div className="text-muted-foreground text-sm mb-2">{edu.institution}</div>
                  <p className="text-sm text-muted-foreground">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-16" />

        {/* Philosophy */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Engineering Philosophy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {philosophies.map((philosophy, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-muted/50 border border-border/50"
              >
                <div className="inline-flex p-2 rounded-lg bg-primary/10 mb-4">
                  <philosophy.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{philosophy.title}</h3>
                <p className="text-sm text-muted-foreground">{philosophy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
