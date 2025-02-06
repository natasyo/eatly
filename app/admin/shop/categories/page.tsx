'use client';
import { productCategoryController } from '@/controllers';
import CategoryItem from '@/react/components/search/category-item';
import CategoryForm from '@/react/sections/admin/category-page/category-form';
import { Category } from '@/types';
import { FunctionComponent, useEffect, useState } from 'react';

const CategoriesAdmin: FunctionComponent = () => {
  const [fakeUrlImg, setFakeUrlImg] = useState<string>('');
  const [category, setCategory] = useState<Category>();
  useEffect(() => {
    setCategory({ ...category, image: fakeUrlImg });
  }, [fakeUrlImg]);
  return (
    <div>
      <CategoryForm
        imgFakeUrl={fakeUrlImg}
        onSave={async (data) => {
          console.log(data);
          const result = await productCategoryController.create(data);
          console.log(result);
        }}
        onChange={(data) => {
          data && setCategory({ ...data, image: fakeUrlImg });
        }}
        onChangeFakeImgUrl={(url) => {
          setFakeUrlImg(url);
        }}
      />
      {category && (
        <>
          <p className="mb-2 mt-10 text-xl font-bold text-eatly-black-100">Preview</p>
          <CategoryItem item={category} isSelect={true} className="max-w-28" />
        </>
      )}
    </div>
  );
};

export default CategoriesAdmin;
