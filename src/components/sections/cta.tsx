'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-[0.02]" />
      
      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-[128px] -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-96 h-96 bg-electric-violet/10 rounded-full blur-[128px] -translate-y-1/2"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border border-primary/20 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-electric-blue/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-electric-violet/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
            
            {/* Sparkle Icon */}
            <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-6">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>

            {/* Content */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Let&apos;s Build Something{' '}
              <span className="text-gradient">Amazing</span> Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Whether you need a full-stack application, system architecture consultation,
              or technical leadership, I&apos;m ready to help bring your vision to life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button asChild size="lg" className="group min-w-[180px]">
                <Link href="/contact">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-w-[180px]">
                <Link href="/about">
                  Learn More About Me
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-border/50 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-foreground">50+</span>
                <span>Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-foreground">10+</span>
                <span>Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-foreground">100%</span>
                <span>Client Satisfaction</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
