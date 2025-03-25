import { ButtonHTMLAttributes, DetailedHTMLProps, FunctionComponent } from 'react';

type BtnProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Btn: FunctionComponent<BtnProps> = (props) => {
  return (
    <button
      {...props}
      className={` ${props.className} rounded-2xl px-6 py-4 font-inter font-bold text-eatly-gray-400 hover:opacity-85`}
    >
      {props.children}
    </button>
  );
};

export default Btn;
