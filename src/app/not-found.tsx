import Link from 'next/link';
import { ArrowLeft, Home, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <div className="max-w-md mx-auto text-center px-4">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-gradient opacity-50">404</div>
        </div>

        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. 
          It might have been moved, deleted, or never existed.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/blog">
              <Search className="mr-2 h-4 w-4" />
              Browse Articles
            </Link>
          </Button>
        </div>

        {/* Suggested Links */}
        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground mb-4">You might be looking for:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link 
              href="/projects" 
              className="text-sm text-primary hover:underline"
            >
              Projects
            </Link>
            <Link 
              href="/about" 
              className="text-sm text-primary hover:underline"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-sm text-primary hover:underline"
            >
              Contact
            </Link>
            <Link 
              href="/blog" 
              className="text-sm text-primary hover:underline"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
