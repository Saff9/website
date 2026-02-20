import { UserRole, BlogPost, Project, Tag, Comment, User } from '@prisma/client';

export type { UserRole, BlogPost, Project, Tag, Comment, User };

export interface BlogPostWithRelations extends BlogPost {
  author: Pick<User, 'id' | 'name' | 'email' | 'image'>;
  tags: Tag[];
  comments: Comment[];
}

export interface ProjectWithRelations extends Project {
  author: Pick<User, 'id' | 'name' | 'email' | 'image'>;
  tags: Tag[];
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  category: string;
  level: number;
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  content: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  author: string;
  siteUrl: string;
  language: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SearchResult {
  type: 'blog' | 'project';
  title: string;
  description: string;
  slug: string;
  tags: string[];
}

export interface ThemeColors {
  background: string;
  foreground: string;
  primary: string;
  secondary: string;
  accent: string;
  muted: string;
  border: string;
}

export interface AnimationConfig {
  duration: number;
  delay: number;
  ease: number[];
}

export interface PageSection {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface FormField {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  validation?: {
    min?: number;
    max?: number;
    pattern?: RegExp;
    message?: string;
  };
}

export interface MenuItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
  children?: MenuItem[];
  badge?: string | number;
}

export interface DashboardStats {
  totalPosts: number;
  totalProjects: number;
  totalViews: number;
  totalComments: number;
  recentPosts: BlogPost[];
  recentProjects: Project[];
  unreadMessages: number;
}

export interface FileUploadResult {
  url: string;
  key: string;
  name: string;
  size: number;
  type: string;
}

export interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
  showLineNumbers?: boolean;
  highlightLines?: number[];
}

export interface MDXFrontmatter {
  title: string;
  description: string;
  date: string;
  updatedAt?: string;
  tags: string[];
  coverImage?: string;
  published: boolean;
  featured: boolean;
  readingTime?: number;
}
