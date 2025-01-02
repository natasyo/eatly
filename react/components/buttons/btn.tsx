import { FunctionComponent, ReactNode } from 'react';

interface BtnProps {
  className?: string;
  children: string | ReactNode;
}

const Btn: FunctionComponent<BtnProps> = ({ children, className }) => {
  return (
    <button
      className={`rounded-2xl px-6 py-4 font-inter font-bold text-eatly-gray-400 ${className}`}
    >
      {children}
    </button>
  );
};

export default Btn;
