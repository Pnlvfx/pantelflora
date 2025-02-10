import './globals.css';
import type { ReactNode } from 'react';
import type { Viewport } from 'next';
import { Header } from '@/components/header/header';
import { Footer } from '@/components/header/footer';
import { clientUrl } from '@/config/config';
import { Analytics } from '@vercel/analytics/react';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata = {
  title: 'Vivaio Pantelleria',
  description:
    'Il vivaio Pantelflora è un vivaio specializzato nella vendita di piante di alta qualità con sede a Pantelleria. Scopri la nostra vasta selezione di piante, tra cui palme, cactus e piante da frutto.',
  referrer: 'origin-when-cross-origin',
  manifest: process.env.NODE_ENV === 'production' ? `${clientUrl}/site.webmanifest` : undefined,
  keywords: 'vivaio, piante, Pantelleria, palme, cactus, frutteto, vivaio Pantelleria, piante Pantelleria, Pantelflora, vivaio Pantelflora',
  applicationName: 'pantelflora',
  appleWebApp: {
    title: 'Pantelflora',
    statusBarStyle: 'default',
    capable: true,
  },
  icons: {
    icon: `${clientUrl}/favicon-32x32.png`,
    shortcut: `${clientUrl}/favicon-16x16.png`,
    apple: `${clientUrl}/apple-touch-icon-180x180.png`,
  },
  authors: [{ name: 'Simone Gauli', url: 'https://github.com/Pnlvfx' }],
  // twitter: {
  //   card: 'summary',
  // },
  // openGraph: {
  //   title: 'Vivaio Pantelflora',
  //   description:
  //     'Pantelflora è un vivaio specializzato nella vendita di piante di alta qualità con sede a Pantelleria. Scopri la nostra vasta selezione di piante, tra cui palme, cactus e piante da frutto.',
  //   siteName: 'pantelflora',
  // },
};

const RootLayout = ({ children }: { readonly children: ReactNode }) => {
  return (
    <html lang="it">
      <body className="bg-white text-black">
        <div className="max-w-7xl md:mx-auto mb-[25px]">
          <Header />
          {children}
          <div className="mb-[200px]" />
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
