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
      <span className="text-eatly-gray-700 text-xl font-medium">{text}</span>
      <Image src={arrow} alt="arrow" className="ml-5" />
    </Link>
  );
};

export default BtnMore;
