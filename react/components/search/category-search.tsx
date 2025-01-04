import { getCategories } from '@/backend/api';
import { FunctionComponent } from 'react';
import CategoryItem from './category-item';

interface CategorySearchProps {
  className?: string;
}

const CategorySearch: FunctionComponent<CategorySearchProps> = ({ className }) => {
  const categories = getCategories();
  return (
    <div className={`${className ? className : ''}`}>
      <p className="text-lg font-semibold">Category</p>
      <div className="grid grid-cols-4 gap-[10px]">
        {categories.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategorySearch;
