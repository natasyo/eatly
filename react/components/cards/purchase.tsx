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
      className={`flex items-end ${className ? className : ''} rounded-xl bg-white pb-2 pl-5 pr-4 pt-1`}
    >
      <Image
        src={purcharse.dishe.image}
        alt={purcharse.dishe.name}
        height={75}
        width={75}
        className="mr-5"
      />
      <div className="flex-grow">
        <p className="text-2lg mb-1 font-popins font-semibold text-eatly-black-600">
          {purcharse.dishe.name}
        </p>
        <p
          className={`font-popins text-xs font-medium ${purcharse.status === 'Cancelled' ? 'text-eatly-red-200' : 'text-eatly-black-600'} `}
        >
          {purcharse.status}
        </p>
        <p className="-mt-2 text-right text-[13px] text-eatly-gray-700">{purcharse.dateTime}</p>
      </div>
    </div>
  );
};

export default Purchase;
