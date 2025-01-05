import { nexToRGB } from '@/functions/nexToRgb';
import { Category } from '@/types';
import Image from 'next/image';
import { FunctionComponent } from 'react';

interface CategoryItemProps {
  className?: string;
  item: Category;
  isSelect?: boolean;
  onSelectCategory?: (category: Category) => void;
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({
  className,
  item,
  isSelect,
  onSelectCategory,
}) => {
  return (
    <div
      className={`${className ? className : ''} flex flex-col items-center rounded-xl bg-opacity-[0.35] pb-3 pt-2 ${isSelect && 'shadow-eatly-2xl'}`}
      style={{
        background: nexToRGB(item.colorBg, 0.35),
        border: `${isSelect ? '3px solid ' + item.colorBg : 'none'}`,
      }}
      onClick={() => {
        onSelectCategory && onSelectCategory(item);
      }}
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
