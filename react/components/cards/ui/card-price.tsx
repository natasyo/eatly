import { FunctionComponent } from 'react';

interface CardPriceProps {
  className?: string;
  price: number;
}

const CardPrice: FunctionComponent<CardPriceProps> = ({ price }) => {
  const dollar = Math.floor(price);
  let cent = Math.round((price - Math.floor(price)) * 100);
  if (cent < 10) cent = cent * 10;
  return (
    <p className="font-manrope font-bold">
      <span className="text-lg xl:text-[26px]">${dollar}</span>
      <span className="text-sm text-eatly-gray-600 xl:text-[19px]">.{cent}</span>
    </p>
  );
};

export default CardPrice;
