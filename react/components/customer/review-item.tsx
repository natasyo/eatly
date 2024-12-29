import { Review } from '@/types';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import apostrophe from '@/public/img/apostrophe.png';
import Stars from '../stars/stars';

interface ReviewItemProps {
  item: Review;
  className?: string;
}

const ReviewItem: FunctionComponent<ReviewItemProps> = ({ className, item }) => {
  return (
    <div
      className={`mr-9 flex flex-col justify-between rounded-xl bg-white py-9 pl-12 pr-8 ${className ? className : ''}`}
    >
      <div>
        <div className="review-header mb-7 flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-5 h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full">
              <Image
                alt={item.photo}
                src={item.photo}
                width={72}
                height={72}
                className="h-full w-full"
              />
            </div>
            <div>
              <p className="text-eatly-black-100 font-popins text-xl font-medium">{item.name}</p>
              <p className="font-quicksand text-base text-eatly-gray-400">{item.position}</p>
            </div>
          </div>
          <Image src={apostrophe} alt="apostrophe" />
        </div>
        <div className="text-lg italic text-eatly-gray-400">"{item.sayText}"</div>
      </div>

      <Stars size={23} />
    </div>
  );
};
export default ReviewItem;
