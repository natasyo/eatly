import { ProductCount } from '@/types';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import Count from './count';
import { useAppDispatch } from '@/hooks/reduxhooks';
import { addInBasket } from '@/store/basketSlice';
import { count } from 'console';
import CardPrice from '../cards/ui/card-price';

interface BasketItemProps {
  className?: string;
  item: ProductCount;
}

const BasketItem: FunctionComponent<BasketItemProps> = ({ className, item }) => {
  const dispatch = useAppDispatch();
  return (
    <div className={`${className ? className : ''} flex items-start`}>
      <Image src={item.dishe.image} alt={item.dishe.name} width={80} height={80} />
      <div className="ml-2 grow">
        <p className="mb-2 grow text-2xl font-bold text-eatly-black-500">{item.dishe.name}</p>
        <div className="flex justify-between">
          <Count
            count={item.count!}
            onChangeCount={(count) => {
              dispatch(addInBasket({ dishe: item.dishe, count }));
            }}
          />
          <CardPrice
            price={item.dishe.price * item.count!}
            classNameDollar="!text-xl"
            classNameCent="!text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
