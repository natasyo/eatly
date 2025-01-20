'use client';
import { useAppselector } from '@/hooks/reduxhooks';
import BasketItem from '@/react/components/basket/basket-item';
import { FunctionComponent, useEffect, useState } from 'react';

const BasketPage: FunctionComponent = () => {
  const basket = useAppselector((state) => state.basket);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div>
      <div className="container py-20">
        <div className="max-w-[500px]">
          {isClient && basket && basket.items.length > 0 ? (
            basket.items.map((item) => (
              <BasketItem item={item} key={item.dishe.id} className="my-4" />
            ))
          ) : (
            <p>Basket is empty</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
