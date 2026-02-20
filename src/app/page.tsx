import { Metadata } from 'next';
import { HeroSection } from '@/components/sections/hero';
import { SkillsSection } from '@/components/sections/skills';
import { FeaturedProjectsSection } from '@/components/sections/featured-projects';
import { LatestPostsSection } from '@/components/sections/latest-posts';
import { CTASection } from '@/components/sections/cta';
import { constructMetadata } from '@/lib/utils';

export const metadata: Metadata = constructMetadata({
  title: 'Home',
  description: 'Senior Software Developer & Architecture Consultant. Building scalable, performant, and user-centric applications with modern technologies.',
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <LatestPostsSection />
      <CTASection />
    </>
  );
}
