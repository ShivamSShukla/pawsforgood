import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import CustomCursor from '@/components/CustomCursor';
import WelcomeDog from '@/components/WelcomeDog';

export const metadata: Metadata = {
  title: 'Paws For Good - Help Feed Rescued Animals Through Your Purchases',
  description: 'Shop everyday products and help feed street dogs and cats. 100% of affiliate commissions go toward purchasing food for rescued animals. No extra cost to you.',
  keywords: 'animal rescue, street dogs, street cats, affiliate shopping, ethical shopping, pet support, animal welfare',
  authors: [{ name: 'Paws For Good' }],
  openGraph: {
    title: 'Paws For Good - Help Feed Rescued Animals',
    description: 'Shop everyday products and help feed street dogs and cats at no extra cost.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paws For Good - Help Feed Rescued Animals',
    description: 'Shop everyday products and help feed street dogs and cats at no extra cost.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ef6820" />
      </head>
      <body>
        {/* Skip to main content for accessibility */}
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        
        <CustomCursor />
        <WelcomeDog />
        <Header />
        
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
