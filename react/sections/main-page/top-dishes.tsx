import { FunctionComponent } from 'react';

interface TopDishesProps {
  className: string;
}

const TopDishes: FunctionComponent<TopDishesProps> = ({ className }) => {
  return <div className={`${className}`}></div>;
};

export default TopDishes;
