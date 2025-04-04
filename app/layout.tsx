import type { Metadata } from 'next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Inter, Poppins, Manrope, Quicksand } from 'next/font/google';
import './globals.scss';
import Header from '@/react/sections/header/header';
import Footer from '@/react/sections/footer/footer';
import Providers from './providers';

const inter = Inter({
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});
const poppins = Poppins({
  variable: '--font-popins',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  style: ['italic', 'normal'],
});
const manrope = Manrope({
  variable: '--font-manrope',
  weight: ['400', '700', '800'],
  subsets: ['latin'],
});
const quicksand = Quicksand({
  variable: '--font-quicksand',
  weight: ['400', '700'],
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
    <html lang="en" className="h-full">
      <body
        className={`${inter.variable} ${poppins.variable} ${quicksand.variable} ${manrope.variable} h-full bg-eatly-gray-10 antialiased`}
      >
        <Providers>
          <div className="relative flex h-full flex-col justify-between overflow-auto">
            <Header />
            <div className="grow">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
