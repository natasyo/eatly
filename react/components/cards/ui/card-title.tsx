import { FunctionComponent } from 'react';

interface CardTitleProps {
  className?: string;
  text: string;
}

const CardTitle: FunctionComponent<CardTitleProps> = ({ text, className }) => {
  return (
    <p
      className={`text-ellipsis whitespace-nowrap font-popins text-lg font-semibold text-eatly-black-500 lg:text-[25.79px] ${className}`}
    >
      {text}
    </p>
  );
};

export default CardTitle;
