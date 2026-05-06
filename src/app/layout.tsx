import type { Metadata } from 'next';
import { Cairo, Playfair_Display } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const cairo = Cairo({
  subsets:  ['arabic', 'latin'],
  weight:   ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-cairo',
  display:  'swap',
});

const playfair = Playfair_Display({
  subsets:  ['latin'],
  weight:   ['400', '500', '600', '700', '800'],
  variable: '--font-playfair',
  display:  'swap',
});

export const metadata: Metadata = {
  title: 'شركة رائد عبدالله بالطيور وأولاده العقارية | Raed A. Baltyor & Sons Real Estate Co.',
  description:
    'شركة عقارية سعودية موثوقة تقدم خدمات متكاملة من بيع وتأجير واستثمار عقاري في المملكة العربية السعودية. | A trusted Saudi real estate company offering full services — sales, leasing, and investment across the Kingdom.',
  keywords: [
    'عقارات السعودية',
    'شركة عقارية',
    'بالطيور',
    'تأجير عقارات',
    'بيع عقارات',
    'Saudi real estate',
    'Baltyor',
    'property leasing',
    'real estate investment',
    'Riyadh properties',
  ],
  openGraph: {
    title:       'شركة رائد بالطيور وأولاده العقارية',
    description: 'شريكك الموثوق في عالم العقارات بالمملكة العربية السعودية',
    locale:      'ar_SA',
    type:        'website',
    url:         'https://baltyor.com',
  },
  alternates: {
    canonical: 'https://baltyor.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${cairo.variable} ${playfair.variable}`}
    >
      <head>
        <link rel="icon" href="/logo.jpg" />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
