import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/img/logo.svg';
import { FunctionComponent } from 'react';
import Nav from '@/react/components/nav/Nav';
import BtnPrimary from '@/react/components/buttons/btn-primary';
import Btn from '@/react/components/buttons/btn';
import BtnMenu from '@/react/components/buttons/btn-menu';
interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header className="px-4">
      <div className="container mx-auto flex items-center justify-between border-b border-eatly-gray pb-[25px] pt-[47px]">
        <div className="flex items-center">
          <Link href="/" className="mr-[76px]">
            <Image src={logo.src} alt="df" width={logo.width} height={logo.height} />
          </Link>
          <Nav
            className="hidden lg:block"
            navItems={[
              { label: 'Menu', link: 'menu' },
              { label: 'Blog', link: 'blog' },
              { label: 'Pricing', link: 'pricing' },
              { label: 'Contact', link: 'contact' },
            ]}
          ></Nav>
        </div>
        <div className="hidden lg:flex">
          <Btn>Login</Btn>
          <BtnPrimary>Sign up</BtnPrimary>
        </div>
        <BtnMenu className="lg:hidden"></BtnMenu>
      </div>
    </header>
  );
};

export default Header;
