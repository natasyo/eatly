'use client';
import { getCategories } from '@/backend/api';
import { FunctionComponent, useEffect, useState } from 'react';
import CategoryItem from './category-item';
import { Category } from '@/types';
import Loading from '../loading';

interface CategorySearchProps {
  className?: string;
}

const CategorySearch: FunctionComponent<CategorySearchProps> = ({ className }) => {
  const categoriesdata = getCategories();
  const [currentCategory, setCurrentCategory] = useState<Category>();
  const [categories, setCategories] = useState<Category[]>(categoriesdata);
  useEffect(() => {
    setCategories(categoriesdata);
  }, [categoriesdata]);
  useEffect(() => {});
  function selectCategory(item: Category) {
    console.log(item);
    setCurrentCategory(item);
  }
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
              isSelect={item.id === currentCategory?.id}
            />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default CategorySearch;
