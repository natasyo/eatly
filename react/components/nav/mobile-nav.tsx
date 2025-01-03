'use client';
import Link from 'next/link';
import { forwardRef, FunctionComponent } from 'react';

interface MobileNavProps {
  navItems: { label: string; link: string }[];
  className?: string;
  onChangePage?: () => void;
}

const MobileNav: FunctionComponent<MobileNavProps> = forwardRef<HTMLDivElement, MobileNavProps>(
  ({ navItems, className, onChangePage }, ref) => {
    return (
      <div
        className={`fixed top-0 z-30 h-full w-full max-w-[500px] bg-eatly-violet px-10 pb-5 pt-24 ${className}`}
        ref={ref}
      >
        <ul>
          {navItems.map((item) => (
            <li
              key={item.link}
              className="mb-6 font-manrope text-3xl font-bold uppercase text-white"
            >
              <Link
                href={item.link}
                onClick={() => {
                  onChangePage && onChangePage();
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  },
);

export default MobileNav;
