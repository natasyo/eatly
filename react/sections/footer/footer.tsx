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
      <div className="container flex items-center justify-between border-b border-eatly-gray-400 pb-7 pt-24">
        <Logo className="w-[158px] pl-2" />
        <Nav
          navItems={[
            { label: 'Menu', link: 'menu' },
            { label: 'Blog', link: 'blog' },
            { label: 'Pricing', link: 'pricing' },
            { label: 'Contact', link: 'contact' },
          ]}
        />
      </div>
      <div className="container flex items-center justify-between pb-20 pt-[60px]">
        <p className="font-inter text-xs text-[#999]">© 2023 EATLY All Rights Reserved.</p>
        <div className="flex">
          <Link href="https://www.instagram.com/" className="ml-12">
            <Image src={instagram} alt="instagram" className="h-[22px] w-auto" />
          </Link>
          <Link href="https://www.linkedin.com/" className="ml-12">
            <Image src={linkedin} alt="linkedin" className="h-[22px] w-auto" />
          </Link>
          <Link href="https://www.facebook.com/" className="ml-12">
            <Image src={facebook} alt="facebook" className="h-[22px] w-auto" />
          </Link>
          <Link href="https://x.com/" className="ml-12">
            <Image src={twitter} alt="twitter" className="h-[22px] w-auto" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
