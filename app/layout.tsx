import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Camidevai elige | Ofertas tech que valen la pena',
  description: 'Los mejores descuentos tech elegidos por Camidevai. Busca, filtra y encuentra tu próxima oferta en Mercado Libre.',
  openGraph: {
    title: 'Camidevai elige',
    description: 'Ofertas tech que valen la pena',
    images: [{ url: '/og.png', width: 1680, height: 945, alt: 'Camidevai elige: ofertas tech que valen la pena' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Camidevai elige',
    description: 'Ofertas tech que valen la pena',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
