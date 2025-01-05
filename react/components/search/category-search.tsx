'use client';
import { getCategories } from '@/backend/api';
import { FunctionComponent, useEffect, useState } from 'react';
import CategoryItem from './category-item';
import { Category, Search } from '@/types';
import Loading from '../loading';
import SortBy from './sortBy';

interface CategorySearchProps {
  className?: string;
}

const CategorySearch: FunctionComponent<CategorySearchProps> = ({ className }) => {
  const categoriesdata = getCategories();

  const [searchData, setSearchData] = useState<Search>({});
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
    <div className={`${className ? className : ''}`}>
      <p className="mb-[18px] font-popins text-lg font-semibold">Category</p>
      <div className="grid grid-cols-4 gap-[10px]">
        {categories ? (
          categories.map((item) => (
            <CategoryItem
              key={item.id}
              item={item}
              onSelectCategory={selectCategory}
              isSelect={item.id === searchData.category?.id}
            />
          ))
        ) : (
          <Loading />
        )}
      </div>
      <p className="mb-[18px] font-popins text-lg font-semibold">Sort By</p>
      {sortedBy.map((item) => (
        <SortBy item={item} key={item} isChecked={item === searchData.sortBy} />
      ))}
    </div>
  );
};

export default CategorySearch;
