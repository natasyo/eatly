import Link from 'next/link';
import { FunctionComponent } from 'react';
import arrow from '@/public/img/arrow-more.svg';
import Image from 'next/image';

interface BtnMoreProps {
  text: string;
  href: string;
  className?: string;
}

const BtnMore: FunctionComponent<BtnMoreProps> = ({ text, href, className }) => {
  return (
    <Link href={href} className={`${className} flex items-center`}>
      <span className="text-xl font-medium text-eatly-gray-700 sm:text-sm lg:text-lg xl:text-xl">
        {text}
      </span>
      <Image src={arrow} alt="arrow" className="ml-[14px] w-3 lg:ml-5 lg:w-auto" />
    </Link>
  );
};

export default BtnMore;
