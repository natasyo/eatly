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
  searchData?: Search;
  onChangeSearchData?: (data: Search) => void;
}

const CategorySearch: FunctionComponent<CategorySearchProps> = ({
  className,
  searchData,
  onChangeSearchData,
}) => {
  const categoriesdata = getCategories();

  const [searchDataState, setSearchDataState] = useState<Search>(searchData as Search);
  const [categories, setCategories] = useState<Category[]>(categoriesdata);
  useEffect(() => {
    setCategories(categoriesdata);
  }, [categoriesdata]);

  function selectCategory(category: Category) {
    setSearchDataState({ ...searchDataState, category });
  }
  useEffect(() => {
    onChangeSearchData && onChangeSearchData(searchDataState);
  }, [searchDataState]);
  const sortedBy = ['Recomended', 'Fast Delivery', 'Most Popular'];

  return (
    <div
      className={`${className ? className : ''} pb-8 pt-7 shadow-eatly-xl md:pt-5 lg:px-8 lg:pt-[29px] xl:pb-9`}
    >
      <p className="mb-4 font-popins text-lg font-semibold md:text-[15px] xl:text-[22px]">
        Category
      </p>
      <div className="mb-6 grid grid-cols-4 gap-[10px] md:mb-4 xl:mb-8">
        {categories ? (
          categories.map((item) => (
            <CategoryItem
              key={item.id}
              item={item}
              onSelectCategory={selectCategory}
              isSelect={searchData && item.id === searchDataState.category?.id}
              className="max-h-20 md:max-h-full"
            />
          ))
        ) : (
          <Loading />
        )}
      </div>
      <p className="mb-3 font-popins text-lg font-semibold md:mb-2 md:text-[15px] xl:mb-4 xl:text-[22px]">
        Sort By
      </p>
      <div className="mb-3 flex flex-wrap justify-between md:mb-1 xl:mb-6">
        {sortedBy.map((item) => (
          <SortBy
            item={item}
            key={item}
            isChecked={!!(searchData && item === searchDataState.sortBy)}
            onChecked={(sortBy: string) => {
              setSearchDataState({ ...searchDataState, sortBy });
            }}
            className="mx-1 mb-3"
          />
        ))}
      </div>
      <p className="mb-[22px] font-popins text-lg font-semibold md:mb-4 md:text-[15px] xl:mb-7 xl:text-[22px]">
        Prices
      </p>
      <Range
        valueData={{ max: 670, min: 100 }}
        valueMinMax={{ min: 0, max: 700 }}
        onChange={(price) => {
          setSearchDataState({ ...searchDataState, price });
        }}
        className="mb-[30px] md:mb-[18px] xl:mb-11"
      />
      <BtnPrimary className="w-full rounded-xl font-popins text-sm md:text-xxs xl:py-5 xl:text-sm">
        Apply
      </BtnPrimary>
    </div>
  );
};

export default CategorySearch;
