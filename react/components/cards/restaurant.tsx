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
      className={`${className} overflow-hidden rounded-[30px] border border-eatly-gray-50 bg-white shadow-eatly-3xl`}
    >
      <Image
        src={item.image}
        alt={item.name}
        width={400}
        height={180}
        className="w-full object-cover xl:h-44"
      />
      <div className="pb-4 pl-[33px] pr-7 pt-[10px]">
        <CardType type={item.type} className={`mb-1 h-[25px]`} />
        <CardTitle text={item.name} className="mb-1" />
        <div className="flex items-center justify-between">
          <WaitAndRating rating={item.rating} wait={item.time_wait} className="text-[18px]" />
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-eatly-violet-100">
            <Image src={bookmark} alt="bookmark" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
