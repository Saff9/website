'use client';

import Link from 'next/link';
import { Code2, Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const footerLinks = {
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Resume', href: '/resume.pdf', external: true },
    { label: 'GitHub', href: 'https://github.com/johndn', external: true },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/johndn', external: true },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/johndn', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/johndn', icon: Linkedin },
  { label: 'Twitter', href: 'https://twitter.com/johndn', icon: Twitter },
  { label: 'Email', href: 'mailto:hello@johndn.dev', icon: Mail },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link 
                href="/" 
                className="flex items-center gap-2 font-bold text-xl tracking-tight mb-4"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-electric-blue to-electric-violet">
                  <Code2 className="h-5 w-5 text-white" />
                </div>
                <span>John Dn</span>
              </Link>
              <p className="text-muted-foreground text-sm max-w-sm mb-6">
                Senior Software Developer & Architecture Consultant. 
                Building scalable, performant, and user-centric applications 
                with modern technologies.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-background border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
                    aria-label={link.label}
                  >
                    <link.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-semibold text-sm mb-4">Navigation</h3>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-sm mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                    >
                      {link.label}
                      {link.external && <ArrowUpRight className="h-3 w-3" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-sm mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} John Dn. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with{' '}
            <span className="text-electric-blue">Next.js</span>,{' '}
            <span className="text-electric-violet">TypeScript</span>, and{' '}
            <span className="text-electric-emerald">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
