import { FunctionComponent, ReactElement } from 'react';
import Btn from './btn';

interface BtnOutlineProps {
  children: ReactElement | String;
  classname?: string;
}

const BtnOutline: FunctionComponent<BtnOutlineProps> = ({ children, classname }) => {
  return (
    <Btn className={`${classname} text-eatly-violet border-2 border-eatly-violet`}>{children}</Btn>
  );
};

export default BtnOutline;
