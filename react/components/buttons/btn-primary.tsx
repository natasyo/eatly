import { FunctionComponent, ReactNode } from 'react';
import Btn from './btn';

interface BtnPrimaryProps {
  children: string | ReactNode;
  className?: string;
}

const BtnPrimary: FunctionComponent<BtnPrimaryProps> = ({ children, className }) => {
  return <Btn className={`bg-eatly-violet !text-white ${className}`} >{children}</Btn>;
};

export default BtnPrimary;
