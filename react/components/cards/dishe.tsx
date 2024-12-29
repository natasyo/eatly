import { Dishe } from '@/types';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import CardType from './ui/card-type';
import CardTitle from './ui/card-title';
import WaitAndRating from './ui/wait-and-rating';
import CardPrice from './ui/card-price';
import CardLike from './ui/card-like';
import CardAddBtn from './ui/card-add-btn';

interface DisheCardProps {
  className?: string;
  item: Dishe;
}

const DisheCard: FunctionComponent<DisheCardProps> = ({ className, item }) => {
  return (
    <div
      className={`${className} relative rounded-[34px] border border-eatly-gray-50 bg-white pb-7 shadow-eatly-3xl`}
    >
      <div className="px-4 pt-10">
        <Image
          src={item.image}
          alt={item.name}
          width={201}
          height={208}
          className="xl:h-[185px] xl:w-[185px]"
        />
      </div>
      <div className="-mt-1 px-6">
        <CardType type={item.type} className={`mb-1 h-[22px]`} />
        <CardTitle className="mb-1 overflow-clip text-nowrap !text-[23px]" text={item.name} />
        <WaitAndRating wait={item.time_wait} rating={item.rating} className="mb-3 text-[17px]" />
        <div className="flex items-center justify-between">
          <CardPrice price={item.price} />
          <CardAddBtn />
        </div>
        <CardLike className="absolute right-4 top-5" />
      </div>
    </div>
  );
};

export default DisheCard;
