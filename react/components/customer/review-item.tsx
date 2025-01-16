import { Review } from '@/types';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import apostrophe from '@/public/img/apostrophe.png';
import Stars from '../stars/stars';
import './reviews-style.scss';

interface ReviewItemProps {
  item: Review;
  className?: string;
}

const ReviewItem: FunctionComponent<ReviewItemProps> = ({ className, item }) => {
  return (
    <div
      className={`sm;mr-[22px] flex flex-col justify-between rounded-xl bg-white px-6 py-7 sm:px-8 lg:mr-9 lg:py-9 lg:pl-12 ${className ? className : ''}`}
    >
      <div>
        <div className="review-header mb-5 flex items-center justify-between sm:mb-7">
          <div className="flex items-center">
            <div className="mr-5 h-[42px] w-[42px] shrink-0 overflow-hidden rounded-full sm:h-[50px] sm:w-[50px] lg:h-[72px] lg:w-[72px]">
              <Image
                alt={item.photo}
                src={item.photo}
                width={72}
                height={72}
                className="h-full w-full"
              />
            </div>
            <div>
              <p className="lg:ext-xl font-popins text-sm font-medium text-eatly-black-100">
                {item.name}
              </p>
              <p className="font-quicksand text-xs text-eatly-gray-400 lg:text-base">
                {item.position}
              </p>
            </div>
          </div>
          <Image src={apostrophe} alt="apostrophe" className="w-10 lg:w-auto" />
        </div>
        <div className="text-[13px] italic leading-[18px] text-eatly-gray-400 lg:text-lg">
          &quot;{item.sayText}&quot;
        </div>
      </div>

      <Stars size={23} className="size-4 lg:size-[23px]" />
    </div>
  );
};
export default ReviewItem;
