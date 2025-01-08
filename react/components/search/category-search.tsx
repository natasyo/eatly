'use client';
import { getCategories } from '@/backend/api';
import { FunctionComponent, useEffect, useState } from 'react';
import CategoryItem from './category-item';
import { Category, Search } from '@/types';
import Loading from '../loading';
import SortBy from './sortBy';
import Range from '../range/range';
import BtnPrimary from '../buttons/btn-primary';
interface CategorySearchProps {
  className?: string;
}

const CategorySearch: FunctionComponent<CategorySearchProps> = ({ className }) => {
  const categoriesdata = getCategories();

  const [searchData, setSearchData] = useState<Search>({} as Search);
  const [categories, setCategories] = useState<Category[]>(categoriesdata);
  useEffect(() => {
    setCategories(categoriesdata);
  }, [categoriesdata]);
  useEffect(() => {});
  function selectCategory(category: Category) {
    setSearchData({ ...searchData, category });
    console.log(searchData);
  }

  const sortedBy = ['Recomended', 'Fast Delivery', 'Most Popular'];

  return (
    <div className={`${className ? className : ''} pb-8 pt-7 shadow-eatly-xl md:pt-5`}>
      <p className="mb-4 font-popins text-lg font-semibold md:text-[15px]">Category</p>
      <div className="mb-6 grid grid-cols-4 gap-[10px] md:mb-4">
        {categories ? (
          categories.map((item) => (
            <CategoryItem
              key={item.id}
              item={item}
              onSelectCategory={selectCategory}
              isSelect={item.id === searchData.category?.id}
              className="max-h-20 md:max-h-full"
            />
          ))
        ) : (
          <Loading />
        )}
      </div>
      <p className="mb-3 font-popins text-lg font-semibold md:mb-2 md:text-[15px]">Sort By</p>
      <div className="mb-3 flex flex-wrap justify-between md:mb-1">
        {sortedBy.map((item) => (
          <SortBy
            item={item}
            key={item}
            isChecked={item === searchData.sortBy}
            onChecked={(sortBy: string) => {
              setSearchData({ ...searchData, sortBy });
            }}
            className="mx-1 mb-3"
          />
        ))}
      </div>
      <p className="mb-[22px] font-popins text-lg font-semibold md:mb-4 md:text-[15px]">Price</p>
      <Range
        valueData={{ max: 670, min: 100 }}
        valueMinMax={{ min: 0, max: 700 }}
        onChange={(value) => {
          console.log(value);
        }}
        className="mb-[30px] md:mb-[18px]"
      />
      <BtnPrimary className="w-full rounded-xl font-popins text-sm md:text-xxs">Apply</BtnPrimary>
    </div>
  );
};

export default CategorySearch;
