'use client';
import { createRef, FunctionComponent, RefObject, useRef, useState } from 'react';
import Nav from '@/react/components/nav/Nav';
import BtnPrimary from '@/react/components/buttons/btn-primary';
import Btn from '@/react/components/buttons/btn';
import BtnMenu from '@/react/components/buttons/btn-menu';
import Logo from '@/react/components/logo/logo';
import MobileNav from '@/react/components/nav/mobile-nav';
import { useOutSideClick } from '@/hooks/outsideClick';
import { useAppselector } from '@/hooks/reduxhooks';

const Header: FunctionComponent = () => {
  const [isShowMobileMenu, setisShowMobileMenu] = useState(false);
  const refMenu = useRef<HTMLDivElement>(null);
  useOutSideClick(refMenu, () => {
    setisShowMobileMenu(false);
  });
  const basket = useAppselector((state) => state.basket);
  // console.log(basket);
  return (
    <>
      <MobileNav
        ref={refMenu}
        className={`${isShowMobileMenu ? 'right-0' : '-right-full'} transition-all md:hidden`}
        navItems={[
          { label: 'Menu', link: '/menu' },
          { label: 'Blog', link: '/blog' },
          { label: 'Pricing', link: '/pricing' },
          { label: 'Contact', link: '/contact' },
        ]}
        onChangePage={() => {
          setisShowMobileMenu(false);
        }}
      />
      <header>
        <div className="container relative">
          <div className="flex items-center justify-between border-b border-eatly-gray pb-[30px] pt-8 md:pb-3 lg:pb-[25px] lg:pt-[47px]">
            <div className="flex items-center">
              <Logo className="mr-[54px] w-20 min-w-[111px] xl:mr-[77px]" />
              <Nav
                className="hidden md:block"
                navItems={[
                  { label: 'Menu', link: '/menu' },
                  { label: 'Blog', link: '/blog' },
                  { label: 'Pricing', link: '/pricing' },
                  { label: 'Contact', link: '/contact' },
                ]}
              ></Nav>
            </div>
            <div className="hidden md:flex">
              <Btn className="text-[12.68px] xl:mr-3 xl:text-lg">Login</Btn>
              <BtnPrimary className="w-[86px] !px-0 text-[12.68px] lg:w-[120px] xl:text-lg">
                Sign up
              </BtnPrimary>
            </div>
            <BtnMenu
              isOpen={isShowMobileMenu}
              className="absolute right-0 top-1 z-40 md:hidden"
              onShowMenu={() => {
                setisShowMobileMenu(!isShowMobileMenu);
              }}
            ></BtnMenu>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
