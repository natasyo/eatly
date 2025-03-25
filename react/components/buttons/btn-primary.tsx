import { ButtonHTMLAttributes, DetailedHTMLProps, FunctionComponent } from 'react';
import Btn from './btn';
import BtnLink from './btn-link';

interface BtnPrimaryProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  href?: string
}

const BtnPrimary: FunctionComponent<BtnPrimaryProps> = (props) => {
  if (props.href) {
    return <BtnLink href={props.href} className={`bg-eatly-violet !text-white flex items-center justify-center ${props.className}`}>{props.children}</BtnLink>
  }
  return (
    <Btn {...props} className={`bg-eatly-violet !text-white ${props.className} `}>
      {props.children}
    </Btn>
  );
};

export default BtnPrimary;
