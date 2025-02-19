import { FunctionComponent, MouseEventHandler, ReactNode } from 'react';

interface PaginationBtnProps {
  children: ReactNode;
  isCurrent?: boolean;
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const PaginationBtn: FunctionComponent<PaginationBtnProps> = ({
  className,
  isCurrent,
  children,
  onClick,
}) => {
  return (
    <button
      className={`${className ? className : ''} ${isCurrent ? 'bg-eatly-violet text-white' : 'bg-transparent text-eatly-violet'} size-16 rounded-md border-eatly-violet text-base font-bold transition-all`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PaginationBtn;
