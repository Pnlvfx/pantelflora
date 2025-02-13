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
  keywords: [
    'vivaio Pantelleria',
    'piante mediterranee',
    'giardinaggio pantesco',
    'piante resistenti alla siccità',
    'alberi da frutto Sicilia',
    'cactus Pantelleria',
    'palme nane mediterranee',
    'piante autoctone pantesche',
    'vivaio isola Pantelleria',
    'progettazione giardini Pantelleria',
    'piante grasse Sicilia',
    'flora locale pantesca',
    'giardinaggio sostenibile',
    'piante aromatiche mediterranee',
    'olivo Pantelleria',
    'vivaio biologico Sicilia',
    'attrezzatura giardinaggio',
    'cura del verde Pantelleria',
    'piante resistenti al vento',
    'zagara piante',
    'giardino pantesco tipico',
    'piante per terrazzo mare',
    'vivaio specializzato isole',
    'punteruolo rosso Pantelleria',
    'giardiniere Pantelleria',
    'piante Pantelleria',
    'irrigazione piante',
    'cura delle piante',
    'vivaio Sicilia',
    'progettazione esterni',
  ],
  applicationName: 'Pantelflora',
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
  openGraph: {
    title: 'Vivaio Pantelleria',
    description: 'Esperti nella flora pantesca, offriamo piante resistenti e servizi professionali per giardini nel clima unico di Pantelleria',
    url: clientUrl,
    siteName: 'Pantelflora',
    locale: 'it_IT',
    type: 'website',
  },
  formatDetection: {
    address: false,
    date: false,
    email: false,
    telephone: false,
  },
};

const RootLayout = ({ children }: { readonly children: ReactNode }) => {
  return (
    <html lang="it">
      <body className="bg-white text-black">
        <div className="max-w-7xl md:mx-auto mb-[25px]">
          <div className="min-h-screen">
            <Header />
            {children}
          </div>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
