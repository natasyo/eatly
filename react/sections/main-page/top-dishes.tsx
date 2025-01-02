'use client';
import { getTopDishes } from '@/backend/api';
import BtnMore from '@/react/components/buttons/btn-more';
import DisheCard from '@/react/components/cards/dishe';
import { Dishe } from '@/types';
import { FunctionComponent, useEffect, useState } from 'react';

interface TopDishesProps {
  className?: string;
}

const TopDishes: FunctionComponent<TopDishesProps> = ({ className }) => {
  const [items, setItems] = useState<Dishe[]>();
  useEffect(() => {
    let count = 5;
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1536) {
        count = 6;
      }
      if (window.innerWidth < 917) {
        count = 4;
      }
    }
    setItems(getTopDishes(count));
  }, []);
  return (
    <div className={`${className ? className : ''}`}>
      <div className="container border-b border-eatly-gray pb-[91px] pt-16 lg:pb-[132px] lg:pt-21">
        <h3 className="mb-10 text-center lg:mb-15">
          Our Top <span className="text-eatly-violet">Dishes</span>
        </h3>
        <div className="grid sm:grid-cols-4 sm:gap-4 md:grid-cols-5 md:gap-[21px] xl:gap-[31px] 2xl:grid-cols-6">
          {items ? items.map((item) => <DisheCard item={item} key={item.id} />) : <p>Loading</p>}
        </div>
        <div className="container mt-11 flex justify-end lg:mt-18">
          <BtnMore href="/" text="View All" />
        </div>
      </div>
    </div>
  );
};

export default TopDishes;
