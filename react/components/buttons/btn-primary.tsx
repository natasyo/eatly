import { ButtonHTMLAttributes, DetailedHTMLProps, FunctionComponent } from 'react';
import Btn from './btn';

interface BtnPrimaryProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

const BtnPrimary: FunctionComponent<BtnPrimaryProps> = (props) => {
  return (
    <Btn {...props} className={`bg-eatly-violet !text-white ${props.className}`}>
      {props.children}
    </Btn>
  );
};

export default BtnPrimary;
