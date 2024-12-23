import type { Metadata } from 'next';
import { Inter, Poppins, Manrope } from 'next/font/google';
import './globals.scss';
import Header from '@/react/sections/header/header';

const inter = Inter({
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});
const poppins = Poppins({
  variable: '--font-popins',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});
const manrope = Manrope({
  variable: '--font-manrope',
  weight: ['400'],
  subsets: ['latin'],
});
export const metadata: Metadata = {
  title: 'Eatly',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} ${manrope.variable} antialiased`}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
