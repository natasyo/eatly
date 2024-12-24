import { Restaurant } from '@/types';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import star from '@/public/img/star-violet.svg';
import bookmark from '@/public/img/book-mark.svg';
import CardType from './ui/card-type';

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
        {/* <p
          className={`${item.type == 'Healthy' ? 'text-eatly-yellow-700 bg-eatly-yellow-100' : 'text-eatly-red-700 bg-eatly-red-100'} inline-block rounded-[5px] px-2 font-popins text-[12.78px]`}
        >
          {item.type}
        </p> */}
        <CardType type={item.type} />
        <p className="mb-1 text-ellipsis whitespace-nowrap font-popins text-[25.79px] font-semibold text-eatly-black-500">
          {item.name}
        </p>
        <div className="flex items-center justify-between">
          <p className="flex items-center font-manrope text-xl text-eatly-gray-600">
            <span>{item.time_wait}min •</span>
            <span className="ml-[10px] flex items-center">
              <Image src={star} alt="star" className="mr-2" />
              <span>{item.rating}</span>
            </span>
          </p>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-eatly-violet-100">
            <Image src={bookmark} alt="bookmark" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
