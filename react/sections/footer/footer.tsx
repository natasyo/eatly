import Logo from '@/react/components/logo/logo';
import Nav from '@/react/components/nav/Nav';
import { FunctionComponent } from 'react';
import instagram from '@/public/img/instagram.svg';
import linkedin from '@/public/img/linken.svg';
import facebook from '@/public/img/fb.svg';
import twitter from '@/public/img/twitter.png';
import Link from 'next/link';
import Image from 'next/image';

const Footer: FunctionComponent = () => {
  return (
    <footer className="bg-eatly-gray-360">
      <div className="container flex flex-wrap items-center justify-between border-b border-eatly-gray-400 pb-1 pt-[69px] sm:flex-nowrap sm:pb-7 lg:pt-24">
        <Logo className="w-[107px] pl-2 lg:w-[158px]" />
        <div className="flex sm:hidden">
          <Link href="https://www.instagram.com/" className="ml-5 md:ml-9 lg:ml-12">
            <Image src={instagram} alt="instagram" className="h-[15px] w-auto lg:h-[22px]" />
          </Link>
          <Link href="https://www.linkedin.com/" className="ml-5 md:ml-9 lg:ml-12">
            <Image src={linkedin} alt="linkedin" className="h-[15px] w-auto lg:h-[22px]" />
          </Link>
          <Link href="https://www.facebook.com/" className="ml-5 md:ml-9 lg:ml-12">
            <Image src={facebook} alt="facebook" className="h-[15px] w-auto lg:h-[22px]" />
          </Link>
          <Link href="https://x.com/" className="ml-5 md:ml-9 lg:ml-12">
            <Image src={twitter} alt="twitter" className="h-[15px] w-auto lg:h-[22px]" />
          </Link>
        </div>
        <Nav
          classNameWrap="!block sm:!flex"
          className="mt-[50px] w-full sm:mt-0 sm:w-auto"
          classNameItem="uppercase  mb-[25px] sm:mb-0"
          navItems={[
            { label: 'Menu', link: 'menu' },
            { label: 'Blog', link: 'blog' },
            { label: 'Pricing', link: 'pricing' },
            { label: 'Contact', link: 'contact' },
          ]}
        />
      </div>
      <div className="container flex items-center justify-center pb-9 pt-7 sm:justify-between sm:pb-[58px] sm:pt-[57px] lg:pb-20">
        <p className="font-inter text-xs text-[#999]">© 2023 EATLY All Rights Reserved.</p>
        <div className="hidden sm:flex">
          <Link href="https://www.instagram.com/" className="ml-5 md:ml-9 lg:ml-12">
            <Image src={instagram} alt="instagram" className="h-[15px] w-auto lg:h-[22px]" />
          </Link>
          <Link href="https://www.linkedin.com/" className="ml-5 md:ml-9 lg:ml-12">
            <Image src={linkedin} alt="linkedin" className="h-[15px] w-auto lg:h-[22px]" />
          </Link>
          <Link href="https://www.facebook.com/" className="ml-5 md:ml-9 lg:ml-12">
            <Image src={facebook} alt="facebook" className="h-[15px] w-auto lg:h-[22px]" />
          </Link>
          <Link href="https://x.com/" className="ml-5 md:ml-9 lg:ml-12">
            <Image src={twitter} alt="twitter" className="h-[15px] w-auto lg:h-[22px]" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
