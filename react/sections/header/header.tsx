import { FunctionComponent } from 'react';
import Nav from '@/react/components/nav/Nav';
import BtnPrimary from '@/react/components/buttons/btn-primary';
import Btn from '@/react/components/buttons/btn';
import BtnMenu from '@/react/components/buttons/btn-menu';
import Logo from '@/react/components/logo/logo';

const Header: FunctionComponent = () => {
  return (
    <header>
      <div className="container">
        <div className="flex items-center justify-between border-b border-eatly-gray pb-3 pt-8 lg:pb-[25px] lg:pt-[47px]">
          <div className="flex items-center">
            <Logo className="mr-[54px] w-20 xl:mr-[77px]" />
            <Nav
              className="hidden md:block"
              navItems={[
                { label: 'Menu', link: 'menu' },
                { label: 'Blog', link: 'blog' },
                { label: 'Pricing', link: 'pricing' },
                { label: 'Contact', link: 'contact' },
              ]}
            ></Nav>
          </div>
          <div className="hidden md:flex">
            <Btn className="text-[12.68px] xl:mr-3 xl:text-lg">Login</Btn>
            <BtnPrimary className="w-[86px] !px-0 text-[12.68px] lg:w-[120px] xl:text-lg">
              Sign up
            </BtnPrimary>
          </div>
          <BtnMenu className="md:hidden"></BtnMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
