import { nexToRGB } from '@/functions/nexToRgb';
import { FunctionComponent, MouseEvent, ReactNode } from 'react';

interface CardTypeProps {
  type: string;
  className?: string;
  color?: string;
  onClick?: (event: MouseEvent) => void;
}

const CardType: FunctionComponent<CardTypeProps> = ({ type, className, color, onClick }) => {
  if (color) {
    return (
      <p
        onClick={(event: MouseEvent) => {
          onClick && onClick(event);
        }}
        style={{ color, backgroundColor: nexToRGB(color, 0.3) }}
        className={`inline-flex h-[18px] items-center rounded-[5px] px-[6px] font-popins text-[9px] lg:h-auto lg:px-2 lg:text-xs ${className}`}
      >
        {type}
      </p>
    );
  }
  return (
    <p
      className={`${type == 'Healthy' ? 'bg-eatly-yellow-100 text-eatly-yellow-700' : type == 'Supreme' ? 'text-eatly-green-00 bg-eatly-green-100' : 'bg-eatly-red-100 text-eatly-red-700'} inline-flex h-[18px] items-center rounded-[5px] px-[6px] font-popins text-[9px] lg:h-auto lg:px-2 lg:text-xs ${className}`}
    >
      {type}
    </p>
  );
};

export default CardType;
