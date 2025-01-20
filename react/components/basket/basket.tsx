'use client';
import { useAppselector } from '@/hooks/reduxhooks';
import { FunctionComponent, useEffect, useState } from 'react';
import BasketItem from './basket-item';

interface BasketProps {
  className?: string;
}

const Basket: FunctionComponent<BasketProps> = ({ className }) => {
  const basket = useAppselector((state) => state.basket);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className={`${className ? className : ''} bg-white p-4 shadow-eatly-2xl`}>
      {isClient && basket && basket.items.length > 0 ? (
        basket.items.map((item) => <BasketItem className="mb-2" item={item} key={item.dishe.id} />)
      ) : (
        <p>Basket is empty.</p>
      )}
    </div>
  );
};

export default Basket;
