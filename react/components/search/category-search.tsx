'use client';
import { getCategories } from '@/controllers/api';
import { FunctionComponent, MouseEventHandler, useEffect, useState } from 'react';
import CategoryItem from './category-item';
import { Category } from '@/types';
import Loading from '../loading';
import SortBy from './sortBy';
import Range from '../range/range';
import BtnPrimary from '../buttons/btn-primary';
import { useSearchContext } from './search-context';
interface CategorySearchProps {
  className?: string;
  onApplyHandler: MouseEventHandler<HTMLButtonElement>;
}

const CategorySearch: FunctionComponent<CategorySearchProps> = ({ className, onApplyHandler }) => {
  const categoriesdata = getCategories();

  const [categories, setCategories] = useState<Category[]>(categoriesdata);
  useEffect(() => {
    setCategories(categoriesdata);
  }, [categoriesdata]);

  const { searchData, setSearchData } = useSearchContext();
  function selectCategory(category: Category) {
    setSearchData && setSearchData({ ...searchData, category });
  }
  const sortedBy = ['Recomended', 'Fast Delivery', 'Most Popular'];

  return (
    <div
      className={`${className ? className : ''} pb-8 pt-7 shadow-eatly-xl md:pt-5 lg:px-8 lg:pt-[29px] xl:pb-9`}
    >
      <p className="mb-4 font-popins text-lg font-semibold text-eatly-black-500 md:text-[15px] xl:text-[22px]">
        Category
      </p>
      <div className="mb-6 grid grid-cols-4 gap-[10px] md:mb-4 xl:mb-8">
        {categories ? (
          categories.map((item) => (
            <CategoryItem
              key={item.id}
              item={item}
              onSelectCategory={selectCategory}
              isSelect={searchData && item.id === searchData.category?.id}
              className="max-h-20 md:max-h-full"
            />
          ))
        ) : (
          <Loading />
        )}
      </div>
      <p className="mb-3 font-popins text-lg font-semibold text-eatly-black-500 md:mb-2 md:text-[15px] xl:mb-4 xl:text-[22px]">
        Sort By
      </p>
      <div className="mb-3 flex flex-wrap justify-between md:mb-1 xl:mb-6">
        {sortedBy.map((item) => (
          <SortBy
            item={item}
            key={item}
            isChecked={!!(searchData && item === searchData.sortBy)}
            onChecked={(sortBy: string) => {
              setSearchData && setSearchData({ ...searchData, sortBy });
            }}
            className="mx-1 mb-3"
          />
        ))}
      </div>
      <p className="mb-[22px] font-popins text-lg font-semibold text-eatly-black-500 md:mb-4 md:text-[15px] xl:mb-7 xl:text-[22px]">
        Prices
      </p>
      <Range
        valueData={{ max: 670, min: 100 }}
        valueMinMax={{ min: 0, max: 700 }}
        onChange={(price) => {
          setSearchData && setSearchData({ ...searchData, price });
        }}
        className="mb-[30px] md:mb-[18px] xl:mb-11"
      />
      <BtnPrimary
        className="w-full rounded-xl font-popins text-sm md:text-xxs xl:py-5 xl:text-sm"
        onClick={onApplyHandler}
      >
        Apply
      </BtnPrimary>
    </div>
  );
};

export default CategorySearch;
