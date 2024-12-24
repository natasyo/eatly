import { FunctionComponent } from 'react';

interface CardTypeProps {
  type: string;
}

const CardType: FunctionComponent<CardTypeProps> = ({ type }) => {
  return (
    <p
      className={`${type == 'Healthy' ? 'bg-eatly-yellow-100 text-eatly-yellow-700' : type == 'Supreme' ? 'bg-eatly-green-100 text-eatly-green-00' : 'bg-eatly-red-100 text-eatly-red-700'} inline-block rounded-[5px] px-2 font-popins text-[12.78px]`}
    >
      {type}
    </p>
  );
};

export default CardType;
