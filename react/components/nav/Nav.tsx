import Link from 'next/link';
import { FunctionComponent } from 'react';

interface NavProps {
  navItems: { label: string; link: string }[];
  className?: String;
}

const Nav: FunctionComponent<NavProps> = ({ navItems, className }) => {
  return (
    <nav className={`${className}`}>
      <ul className="flex">
        {navItems.map((item) => (
          <li className="mx-[27px]" key={item.link}>
            <Link href={item.link} className="font-inter text-eatly-gray-400 font-medium">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
