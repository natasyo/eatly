import { Category } from '@/types';
import Image from 'next/image';
import { FunctionComponent } from 'react';

interface CategoryItemProps {
  className?: string;
  item: Category;
  isSelect?: boolean;
  onSelectCategory?: () => void;
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({
  className,
  item,
  onSelectCategory,
}) => {
  return (
    <div
      className={`${className ? className : ''} flex flex-col items-center rounded-xl pb-3 pt-2`}
      style={{ background: item.colorBg }}
    >
      <div className="mb-3 flex h-[37px] w-full items-center justify-center">
        <Image src={item.image} alt={item.title} width={32} height={37} className="max-h-[37px]" />
      </div>

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
