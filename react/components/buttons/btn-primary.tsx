import { FunctionComponent, ReactElement } from 'react';
import Btn from './btn';

interface BtnPrimaryProps {
  children: ReactElement | String;
  className?: String;
}

const BtnPrimary: FunctionComponent<BtnPrimaryProps> = ({ children, className }) => {
  return <Btn className={`bg-eatly-violet !text-white ${className}`}>{children}</Btn>;
};

export default BtnPrimary;
