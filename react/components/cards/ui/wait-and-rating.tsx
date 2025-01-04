import { FunctionComponent } from 'react';
import star from '@/public/img/star-violet.svg';
import Image from 'next/image';
interface WaitAndRatingProps {
  className?: string;
  wait: number;
  rating: number;
}

const WaitAndRating: FunctionComponent<WaitAndRatingProps> = ({ wait, rating, className }) => {
  return (
    <p
      className={`flex items-center font-manrope text-[13px] text-eatly-gray-600 lg:text-xl ${className}`}
    >
      <span>{wait}min •</span>
      <span className="ml-[10px] flex items-center">
        <Image src={star} alt="star" className="mr-2 h-3 w-3 lg:h-auto lg:w-auto" />
        <span>{rating}</span>
      </span>
    </p>
  );
};

export default WaitAndRating;
