import { FunctionComponent } from 'react';

interface CardTypeProps {
  type: string;
  className?: String;
}

const CardType: FunctionComponent<CardTypeProps> = ({ type, className }) => {
  return (
    <p
      className={`${type == 'Healthy' ? 'bg-eatly-yellow-100 text-eatly-yellow-700' : type == 'Supreme' ? 'text-eatly-green-00 bg-eatly-green-100' : 'bg-eatly-red-100 text-eatly-red-700'} inline-flex items-center rounded-[5px] px-2 font-popins text-xs ${className}`}
    >
      {type}
    </p>
  );
};

export default CardType;
