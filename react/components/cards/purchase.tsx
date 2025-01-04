import { PurchaseView } from '@/types';
import Image from 'next/image';
import { FunctionComponent } from 'react';

interface PurchaseProps {
  purcharse: PurchaseView;
  className?: string;
}

const Purchase: FunctionComponent<PurchaseProps> = ({ className, purcharse }) => {
  return (
    <div
      className={`flex items-end ${className ? className : ''} rounded-xl bg-white py-0.5 pl-[14px] pr-3 md:pb-1 md:pt-1 lg:pb-2 lg:pl-5 lg:pr-4`}
    >
      <Image
        src={purcharse.dishe.image}
        alt={purcharse.dishe.name}
        height={75}
        width={75}
        className="mr-4 h-[52px] w-[52px] lg:h-auto lg:w-auto"
      />
      <div className="flex-grow">
        <p className="-mb-2 font-popins text-[13px] font-semibold text-eatly-black-600 lg:mb-1 lg:text-2lg">
          {purcharse.dishe.name}
        </p>
        <p
          className={`font-popins text-[8px] font-medium lg:text-xs ${purcharse.status === 'Cancelled' ? 'text-eatly-red-200' : 'text-eatly-black-600'} `}
        >
          {purcharse.status}
        </p>
        <p className="-mt-5 text-right text-[9px] text-eatly-gray-700 lg:-mt-2 lg:text-[13px]">
          {purcharse.dateTime}
        </p>
      </div>
    </div>
  );
};

export default Purchase;
