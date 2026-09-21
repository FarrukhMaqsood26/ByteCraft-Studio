import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import '@/styles/animations.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-primary',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ByteCraft Studio — Modern Digital Products, Web Apps & AI Solutions',
  description:
    'ByteCraft Studio designs and builds fast web applications, intuitive mobile apps, and practical AI tools that help ambitious businesses grow.',
  keywords: [
    'ByteCraft Studio',
    'Software House',
    'AI Solutions',
    'Web Development',
    'Mobile Applications',
    'Next.js Studio',
    'Machine Learning',
  ],
  authors: [{ name: 'ByteCraft Studio Team' }],
  openGraph: {
    title: 'ByteCraft Studio — Modern Digital Products & AI Solutions',
    description:
      'We design and build high-speed web apps, intuitive mobile apps, and practical AI tools that turn your ideas into measurable growth.',
    url: 'https://bytecraftstudio.com',
    siteName: 'ByteCraft Studio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ByteCraft Studio — Modern Digital Products & AI Solutions',
    description:
      'We design and build high-speed web apps, intuitive mobile apps, and practical AI tools that turn your ideas into measurable growth.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body>{children}</body>
    </html>
  );
}
