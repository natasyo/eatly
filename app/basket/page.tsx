'use client';
import { useAppselector } from '@/hooks/reduxhooks';
import BasketItem from '@/react/components/basket/basket-item';
import { FunctionComponent } from 'react';

interface BasketPageProps {}

const BasketPage: FunctionComponent<BasketPageProps> = () => {
  const basket = useAppselector((state) => state.basket);

  return (
    <div>
      <div className="container">
        <div className="max-w-[500px]">
          {basket && basket.items.length > 0 ? (
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
