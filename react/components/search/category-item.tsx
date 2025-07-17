'use client'
import { imageUrl } from '@/config';
import { checkImageUrl } from '@/functions/checkImageUrl';
import { nexToRGB } from '@/functions/nexToRgb';
import { Category } from '@/types';
import Image from 'next/image';
import { FunctionComponent, useEffect, useState } from 'react';

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
  const [image, setImage] = useState('/img/no-image.svg');
  useEffect(() => {
    if (typeof item.image === 'string' && item.image !== "") {
      if (item.image.startsWith('blob')) {
        setImage(item.image);
      }
      else {
        checkImageUrl(`${imageUrl}/categories/${item.image}`).then(() => {
          if (typeof item.image === 'string') setImage(`${imageUrl}/categories/${item.image}`)
        })
      }
    }
  }, [item]);


  return (
    <div
      className={`${className ? className : ''} flex flex-col items-center rounded-xl bg-opacity-[0.35] pb-3 pt-2 md:pt-0.5 ${isSelect && 'shadow-eatly-2xl'} xl:pt-3`}
      style={{
        background: item.colorBg && nexToRGB(item.colorBg, 0.35),
        border: `${isSelect ? '3px solid ' + item.colorBg : 'none'}`,
      }}
      onClick={() => {
        if (onSelectCategory) onSelectCategory(item);
      }}
    >
      <div className="mb-3 flex h-[37px] w-full items-center justify-center md:mb-2 md:pb-0 xl:mb-[14px] xl:h-[50px]  max-w-[60px]">
        <Image
          src={image}
          alt={item.title || ''}
          width={40}
          height={50}
          className="xl::size-full h-auto max-h-full max-w-full w-auto  xl:object-contain"
        />
      </div>

      <p
        className={`text-center font-popins text-xxs font-medium md:text-[8px] xl:text-xs`}
        style={{ color: item.colorTitle }}
      >
        {item.title}
      </p>
    </div>
  );
};

export default CategoryItem;
