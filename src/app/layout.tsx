import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Toaster } from 'sonner';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'John Dn | Senior Software Developer',
    template: '%s | John Dn',
  },
  description: 'Senior Software Developer & Architecture Consultant. Building scalable, performant, and user-centric applications with modern technologies.',
  keywords: ['software developer', 'full stack', 'typescript', 'nextjs', 'react', 'nodejs', 'architecture'],
  authors: [{ name: 'John Dn' }],
  creator: 'John Dn',
  publisher: 'John Dn',
  metadataBase: new URL('https://johndn.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://johndn.dev',
    siteName: 'John Dn',
    title: 'John Dn | Senior Software Developer',
    description: 'Senior Software Developer & Architecture Consultant. Building scalable, performant, and user-centric applications with modern technologies.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'John Dn - Senior Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@johndn',
    creator: '@johndn',
    title: 'John Dn | Senior Software Developer',
    description: 'Senior Software Developer & Architecture Consultant. Building scalable, performant, and user-centric applications with modern technologies.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0f13' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster 
            position="bottom-right" 
            richColors 
            closeButton
            toastOptions={{
              className: 'font-sans',
            }}
          />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
