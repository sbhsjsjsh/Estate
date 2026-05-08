import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Estate Web | Real Estate Website Designer & Development by Sakir',
  description: 'Expert real estate website development and design services by Sakir Website Developer. We build high-converting, SEO-optimized Estate Web platforms for agents and brokerages.',
  keywords: ['real estate website designer', 'real estate website development', 'sakir Website developer', 'estate web', 'custom real estate websites', 'property website design'],
  authors: [{ name: 'Sakir' }],
  icons: {
    icon: 'https://i.ibb.co/HvPQDwg/file-00000000aa2c71fa81cffc25afa7a4cb.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-stone-50 text-stone-900" suppressHydrationWarning>{children}</body>
    </html>
  );
}
