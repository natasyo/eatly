import { Dishe } from '@/types';
import { FunctionComponent } from 'react';

interface TopDishesProps {
  className?: string;
  dishe: Dishe;
}

const TopDishes: FunctionComponent<TopDishesProps> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div className="container pt-24">
        <h3 className="text-center">
          Our Top <span className="text-eatly-violet">Restaurants</span>
        </h3>
      </div>
    </div>
  );
};

export default TopDishes;
