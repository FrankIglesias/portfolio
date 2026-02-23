import type { Metadata } from 'next';
import { Bebas_Neue, Open_Sans } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open',
});

export const metadata: Metadata = {
  title: 'Francisco Janin Iglesias',
  description: 'Frontend developer portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${openSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
