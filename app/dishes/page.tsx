'use client';
import { getCountDishes, getDishes } from '@/controllers/api';
import DisheCard from '@/react/components/cards/dishe';
import Pagination from '@/react/components/pagination/pagination';
import { FunctionComponent, useEffect, useState } from 'react';

const Dishes: FunctionComponent = () => {
  const countItemsInPage = 30;
  let dishesData = getDishes(countItemsInPage, 2);
  const countPages = Math.ceil(getCountDishes() / countItemsInPage);

  const [dishes, setDishes] = useState(dishesData);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const dishesData = getDishes(countItemsInPage, currentPage);
    setDishes(dishesData);
  }, [currentPage]);
  return (
    <div className="py-18">
      <div className="container">
        <h2 className="mb-4">Dishes</h2>
        {dishes && (
          <div className="md:grid-x-4 grid gap-5 md:grid-cols-5 md:gap-y-6 2xl:grid-cols-6">
            {dishes.map((item) => (
              <DisheCard item={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
      <Pagination
        count={countPages}
        current={currentPage}
        className="mt-24"
        onChangeCurrentPage={(num) => {
          setCurrentPage(num);
        }}
      />
    </div>
  );
};

export default Dishes;
