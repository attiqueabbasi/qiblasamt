import type { Metadata, Viewport } from 'next';
import { Tajawal } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import './globals.css';
import { defaultLocale, dirByLocale, messagesByLocale } from '@/i18n/config';
import ServiceWorkerRegister from '@/components/ServiceWorkerRegister';

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700', '800', '900'],
  variable: '--font-arabic',
  display: 'swap',
});

const SITE_URL = 'https://qiblasamt.com';
const messages = messagesByLocale[defaultLocale];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: messages.meta.title,
    template: `%s | ${messages.meta.siteName}`,
  },
  description: messages.meta.description,
  keywords: messages.meta.keywords,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ar_AR',
    url: SITE_URL,
    siteName: messages.meta.siteName,
    title: messages.meta.ogTitle,
    description: messages.meta.ogDescription,
    images: [{ url: '/images/qibla-finder-og.webp', width: 1672, height: 941, alt: messages.meta.siteName }],
  },
  twitter: {
    card: 'summary_large_image',
    title: messages.meta.ogTitle,
    description: messages.meta.ogDescription,
    images: ['/images/qibla-finder-og.webp'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.webmanifest',
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1512' },
  ],
};

const themeInitScript = `
(function () {
  try {
    var stored = window.localStorage.getItem('qiblasamt-theme');
    if (stored === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang={defaultLocale}
      dir={dirByLocale[defaultLocale]}
      className={tajawal.variable}
      translate="no"
      suppressHydrationWarning
    >
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-73NDHRJL66" />
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-73NDHRJL66');",
          }}
        />
        {/* eslint-disable-next-line react/no-danger */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <meta name="google" content="notranslate" />
      </head>
      <body className="notranslate font-arabic antialiased" suppressHydrationWarning>
        <NextIntlClientProvider locale={defaultLocale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
