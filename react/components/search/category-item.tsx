'use client';
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
  const image = `${imageUrl}/categories/${item.image}`;
  const [isValidImage, setIsValidImage] = useState(false);
  useEffect(() => {
    checkImageUrl(image).then((data) => {
      setIsValidImage(data);
    });
    console.log(isValidImage, image);
  }, []);
  return (
    <div
      className={`${className ? className : ''} flex flex-col items-center rounded-xl bg-opacity-[0.35] pb-3 pt-2 md:pt-0.5 ${isSelect && 'shadow-eatly-2xl'} xl:pt-3`}
      style={{
        background: item.colorBg && nexToRGB(item.colorBg, 0.35),
        border: `${isSelect ? '3px solid ' + item.colorBg : 'none'}`,
      }}
      onClick={() => {
        onSelectCategory && onSelectCategory(item);
      }}
    >
      <div className="mb-3 flex h-[37px] w-full items-center justify-center md:mb-2 md:pb-0 xl:mb-[14px] xl:h-[50px]">
        <Image
          src={isValidImage ? image : '/img/no-image.svg'}
          alt={item.title || ''}
          width={40}
          height={50}
          className="xl::size-full h-auto max-h-full w-auto xl:object-contain"
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
