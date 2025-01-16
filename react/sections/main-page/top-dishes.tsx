'use client';
import { getTopDishes } from '@/backend/api';
import { useResizeWindow } from '@/hooks/resizeWindow';
import BtnMore from '@/react/components/buttons/btn-more';
import DisheCard from '@/react/components/cards/dishe';
import { Dishe } from '@/types';
import { FunctionComponent, useEffect, useState } from 'react';

interface TopDishesProps {
  className?: string;
  classNameHeader?: string;
}

const TopDishes: FunctionComponent<TopDishesProps> = ({ className, classNameHeader }) => {
  const getCount = () => {
    let count = 5;
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1600) {
        count = 6;
      }
      if (window.innerWidth < 949) {
        count = 4;
      }
    }
    return count;
  };
  const [items, setItems] = useState<Dishe[]>();
  useEffect(() => {
    setItems(getTopDishes(getCount()));
  }, []);
  useResizeWindow(() => {
    setItems(getTopDishes(getCount()));
  });
  return (
    <div className={`${className ? className : ''}`}>
      <div className="container border-b border-eatly-gray pb-[76px] pt-[85px] sm:pb-[91px] sm:pt-16 lg:pb-[132px] lg:pt-21">
        <h3
          className={`mx-auto mb-[60px] max-w-[225px] text-center sm:mx-0 sm:mb-10 sm:max-w-full lg:mb-15 ${classNameHeader ? classNameHeader : ''}`}
        >
          Our Top <span className="text-eatly-violet">Dishes</span>
        </h3>
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-4 sm:gap-4 sm:px-0 md:grid-cols-5 md:gap-[21px] xl:gap-[31px] 2xl:grid-cols-6">
          {items ? (
            items.map((item) => (
              <DisheCard item={item} key={item.id} className="mx-auto w-[250px] max-w-full" />
            ))
          ) : (
            <p>Loading</p>
          )}
        </div>
        <div className="container mt-[70px] flex justify-end sm:mt-11 lg:mt-18">
          <BtnMore href="/" text="View All" className="ml-2" />
        </div>
      </div>
    </div>
  );
};

export default TopDishes;
