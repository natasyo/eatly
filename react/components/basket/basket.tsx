'use client';
import { useAppselector } from '@/hooks/reduxhooks';
import { FunctionComponent } from 'react';
import BasketItem from './basket-item';

interface BasketProps {
  className?: string;
}

const Basket: FunctionComponent<BasketProps> = ({ className }) => {
  const basket = useAppselector((state) => state.basket);
  return (
    <div className={`${className ? className : ''} bg-white p-4 shadow-eatly-2xl`}>
      {basket && basket.items.length > 0 ? (
        basket.items.map((item) => <BasketItem className="mb-2" item={item} key={item.dishe.id} />)
      ) : (
        <p>Basket is empty.</p>
      )}
    </div>
  );
};

export default Basket;
