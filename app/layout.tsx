import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CamiDevAI | Inteligencia artificial, creatividad y tecnología',
  description: 'Aprende a aplicar la IA con CamiDevAI. Servicios para negocios, colaboraciones y tecnología recomendada.',
  openGraph: {
    title: 'CamiDevAI',
    description: 'Inteligencia artificial, creatividad y tecnología aplicada',
    images: [{ url: '/og.png', width: 1680, height: 945, alt: 'Camidevai elige: ofertas tech que valen la pena' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CamiDevAI',
    description: 'Inteligencia artificial, creatividad y tecnología aplicada',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
