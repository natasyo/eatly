import { Category } from '@/types';
import Image from 'next/image';
import { FunctionComponent } from 'react';

interface CategoryItemProps {
  className?: string;
  item: Category;
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ className, item }) => {
  return (
    <div
      className={`${className ? className : ''} flex flex-col items-center rounded-xl`}
      style={{ background: item.colorBg }}
    >
      <Image src={item.image} alt={item.title} width={32} height={37} className="max-h-[37px]" />
      <p
        className={`text-center font-popins text-xxs font-medium`}
        style={{ color: item.colorTitle }}
      >
        {item.title}
      </p>
    </div>
  );
};

export default CategoryItem;
