import { Restaurant } from '@/types';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import bookmark from '@/public/img/book-mark.svg';
import CardType from './ui/card-type';
import CardTitle from './ui/card-title';
import WaitAndRating from './ui/wait-and-rating';

interface RestaurantCardProps {
  className?: string;
  item: Restaurant;
}

const RestaurantCard: FunctionComponent<RestaurantCardProps> = ({ className, item }) => {
  return (
    <div
      className={`${className ? className : ''} overflow-hidden rounded-[30px] border border-eatly-gray-50 bg-white shadow-eatly-3xl`}
    >
      <Image
        src={item.image}
        alt={item.name}
        width={400}
        height={180}
        className="w-full object-cover xl:h-44"
      />
      <div className="px-6 pb-4 pt-1 lg:pl-[33px] lg:pr-7 lg:pt-[10px]">
        <CardType type={item.type} className={`-mb-1 h-[25px] lg:mb-1`} />
        <CardTitle text={item.name} className="-mb-0.5 lg:mb-1" />
        <div className="flex items-center justify-between">
          <WaitAndRating
            rating={item.rating}
            wait={item.time_wait}
            className="!text-[13px] lg:text-lg"
          />
          <button className="flex h-7 w-7 items-center justify-center rounded-full bg-eatly-violet-100 lg:h-10 lg:w-10">
            <Image src={bookmark} alt="bookmark" className="h-[14px] lg:h-auto" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
