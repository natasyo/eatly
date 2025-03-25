'use client';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import Nav from '@/react/components/nav/Nav';
import BtnPrimary from '@/react/components/buttons/btn-primary';
import Btn from '@/react/components/buttons/btn';
import BtnMenu from '@/react/components/buttons/btn-menu';
import Logo from '@/react/components/logo/logo';
import MobileNav from '@/react/components/nav/mobile-nav';
import { useOutSideClick } from '@/hooks/outsideClick';
import Link from 'next/link';
import Basket from '@/react/components/basket/basket';
import { useBasketContext } from '@/react/components/basket/basket-provider';
import BtnLink from '@/react/components/buttons/btn-link';
import { signOut, useSession } from 'next-auth/react';

const Header: FunctionComponent = () => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const refMenu = useRef<HTMLDivElement>(null);
  useOutSideClick(refMenu, () => {
    setIsShowMobileMenu(false);
  });

  const { setRect } = useBasketContext();
  const basketRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    if (basketRef.current) setRect(basketRef.current?.getBoundingClientRect());
  }, [setRect]);
  const [isShowBasket, setIsShowBasket] = useState(false);
  const  {data:session, status}=useSession();
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
          setIsShowMobileMenu(false);
        }}
      />
      <header className="sticky top-0 z-50 border-b border-eatly-gray bg-eatly-gray-10 pb-[30px] pt-8 md:pb-3 lg:pb-[25px] lg:pt-[47px]">
        <div className="container relative">
          <div className="flex items-center justify-between">
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
            <div
              className="relative hidden items-center md:flex"
              onMouseLeave={() => {
                setIsShowBasket(false);
              }}
            >
              <Link
                ref={basketRef}
                href="/basket"
                className="block size-6 fill-eatly-violet hover:opacity-85"
                onMouseEnter={() => {
                  setIsShowBasket(true);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>
              </Link>
              <Basket
                className={`absolute right-0 top-full w-[350px] rounded-lg ${isShowBasket ? 'block' : 'hidden'}`}
              />

              {
                session?<BtnPrimary onClick={()=>signOut({ redirect: false })}>Sgn out</BtnPrimary>:<><BtnLink href='/auth' className="ml-4 text-[12.68px] xl:mr-3 xl:text-lg">Login</BtnLink>
                  <BtnPrimary href='/register' className="w-[86px] !px-0 text-[12.68px] lg:w-[120px] xl:text-lg">
                    Sign up
                  </BtnPrimary></>
              }

            </div>
            <BtnMenu
              isOpen={isShowMobileMenu}
              className="absolute right-0 top-1 z-40 md:hidden"
              onShowMenu={() => {
                setIsShowMobileMenu(!isShowMobileMenu);
              }}
            ></BtnMenu>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
