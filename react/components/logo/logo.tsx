import Link from 'next/link';
import { FunctionComponent } from 'react';
import Image from 'next/image';
import logo from '@/public/img/logo.svg';

interface LogoProps {
  className?: string;
}

const Logo: FunctionComponent<LogoProps> = ({ className }) => {
  return (
    <Link href="/" className={`${className}`}>
      <Image src={logo.src} alt="df" width={logo.width} height={logo.height} className="w-full" />
    </Link>
  );
};

export default Logo;
