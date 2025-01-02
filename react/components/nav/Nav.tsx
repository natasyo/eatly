import Link from 'next/link';
import { FunctionComponent } from 'react';

interface NavProps {
  navItems: { label: string; link: string }[];
  className?: string;
  classNameWrap?: string;
  classNameItem?: string;
}

const Nav: FunctionComponent<NavProps> = ({
  navItems,
  className,
  classNameWrap,
  classNameItem,
}) => {
  return (
    <nav className={`${className}`}>
      <ul className={`flex ${classNameWrap ? classNameWrap : ''}`}>
        {navItems.map((item) => (
          <li className={`mx-4 lg:mx-5 xl:mx-[26px] ${classNameItem}`} key={item.link}>
            <Link
              href={item.link}
              className="font-inter text-[12.68px] font-medium text-eatly-gray-400 lg:text-base"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
