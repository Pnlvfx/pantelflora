import NavBar from '@/components/nav/NavBar';
import './globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/header/Footer';
import { clientUrl } from '@/config/config';

export const metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  title: 'Vivaio Pantelflora',
  description:
    'Pantelflora è un vivaio specializzato nella vendita di piante di alta qualità con sede a Pantelleria. Scopri la nostra vasta selezione di piante, tra cui palme, cactus e piante da frutto.',
  referrer: 'origin-when-cross-origin',
  manifest: process.env.NODE_ENV === 'production' ? `${clientUrl}/site.webmanifest` : undefined,
  keywords:
    'vivaio, piante, Pantelleria, palme, cactus, frutteto, acquisto online, vivaio Pantelleria, piante Pantelleria, Pantelflora, vivaio Pantelflora',
  themeColor: '#ffffff',
  applicationName: 'pantelflora',
  appleWebApp: {
    title: 'Bbabystyle',
    statusBarStyle: 'default',
    capable: true,
  },
  icons: {
    icon: `${clientUrl}/favicon-32x32.png`,
    shortcut: `${clientUrl}/favicon-16x16.png`,
    apple: `${clientUrl}/apple-touch-icon-180x180.png`,
  },
  authors: [{ name: 'Pantelflora' }],
  twitter: {
    card: 'summary',
  },
  openGraph: {
    title: 'Vivaio Pantelflora',
    description:
      'Pantelflora è un vivaio specializzato nella vendita di piante di alta qualità con sede a Pantelleria. Scopri la nostra vasta selezione di piante, tra cui palme, cactus e piante da frutto.',
    siteName: 'pantelflora',
  },
};

const RootLayout = ({ children }: ChildrenProps) => {
  return (
    <html lang="it">
      <body>
        <div className="max-w-[1200px] md:mx-auto">
          <div className="mb-[25px]">
            <Header />
            <div>
              <div>
                <NavBar />
              </div>
            </div>
            {children}
            <div className="mb-[25px]" />
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
