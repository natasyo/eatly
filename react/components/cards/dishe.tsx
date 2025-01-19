import { Dishe } from '@/types';
import Image from 'next/image';
import { FunctionComponent, useEffect, useState } from 'react';
import CardType from './ui/card-type';
import CardTitle from './ui/card-title';
import WaitAndRating from './ui/wait-and-rating';
import CardPrice from './ui/card-price';
import CardLike from './ui/card-like';
import CardAddBtn from './ui/card-add-btn';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addInBasket } from '@/store/basketSlice';
import Animate from '../basket/animate';

interface DisheCardProps {
  className?: string;
  item: Dishe;
}

const DisheCard: FunctionComponent<DisheCardProps> = ({ className, item }) => {
  const dispatch = useDispatch();
  const [isAnimate, setIsAnimate] = useState(false);
  return (
    <Link
      href={`/menu/dishes/${item.id}`}
      className={`${className ? className : ''} hover:shadow-eatly-4xl relative flex flex-col items-center rounded-[34px] border border-eatly-gray-50 bg-white pb-4 shadow-eatly-3xl transition-all md:pb-7`}
    >
      <div className="px-2 pt-5 sm:pt-6 lg:px-4 lg:pt-10">
        <div className="relative">
          <Image
            src={item.image}
            alt={item.name}
            width={201}
            height={208}
            className="h-[131px] w-[131px] xl:h-[185px] xl:w-[185px]"
          />
          <Animate className="" dishe={item} isAnimate={isAnimate}>
            <Image
              src={item.image}
              alt={item.name}
              width={201}
              height={208}
              className="h-[131px] w-[131px] xl:h-[185px] xl:w-[185px]"
            />
          </Animate>
        </div>
      </div>
      <div className="-mt-3 flex h-full w-[180px] max-w-full flex-col justify-between px-[10px] sm:-mt-1">
        <div>
          <CardType type={item.type} className={`-mb-1 h-[11px] md:h-[22px] xl:mb-1`} />
          <CardTitle
            className="mb-[-2px] overflow-clip text-wrap !text-base sm:mb-1 xl:!text-[23px]"
            text={item.name}
          />
          <WaitAndRating
            wait={item.time_wait}
            rating={item.rating}
            className="!xl:text-[17px] mb-2 !text-xs md:mb-3"
          />
        </div>
        <div className="flex items-center justify-between">
          <CardPrice price={item.price} />
          <CardAddBtn
            className="ml-2"
            onClick={(e) => {
              e.preventDefault();
              dispatch(addInBasket({ dishe: item }));
              setIsAnimate(true);
              setTimeout(() => {
                setIsAnimate(false);
              }, 500);
            }}
          />
        </div>
        <CardLike className="absolute right-3 top-[14px] xl:right-4 xl:top-5" />
      </div>
    </Link>
  );
};

export default DisheCard;
