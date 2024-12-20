import { FunctionComponent, ReactElement } from 'react';

interface BtnProps {
  className?: string;
  children: ReactElement | String;
}

const Btn: FunctionComponent<BtnProps> = ({ children, className }) => {
  return (
    <button
      className={`font-inter text-eatly-gray-400 rounded-2xl px-6 py-4 font-bold ${className}`}
    >
      {children}
    </button>
  );
};

export default Btn;
