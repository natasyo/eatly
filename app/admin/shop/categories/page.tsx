'use client';
import { productCategoryController } from '@/controllers';
import BtnRemove from '@/react/components/buttons/btn-remove';
import CategoryItem from '@/react/components/search/category-item';
import CategoryForm from '@/react/sections/admin/category-page/category-form';
import { Category } from '@/types';
import { FunctionComponent, useEffect, useState } from 'react';

const CategoriesAdmin: FunctionComponent = () => {
  const [fakeUrlImg, setFakeUrlImg] = useState<string>('');
  const [category, setCategory] = useState<Category>();
  const [categories, setCategories] = useState<Category[]>();
  useEffect(() => {
    productCategoryController.getAll().then((data) => {
      setCategories(data);
      console.log(data);
    });
  }, []);
  useEffect(() => {
    if (category) setCategory({ ...category, image: fakeUrlImg });
  }, [fakeUrlImg]);
  return (
    <div>
      <CategoryForm
        imgFakeUrl={fakeUrlImg}
        onSave={async (data) => {
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
      {categories && categories.length > 0 ? (
        <div className="flex flex-wrap">
          {categories.map((category) => (
            <div key={category.id} className="relative">
              <BtnRemove
                className="absolute right-3 top-3 hover:scale-110"
                onClick={() => {
                  category.id && productCategoryController.remove(category.id);
                }}
              />
              {/* <CategoryItem className="m-2 w-[108px]" item={{ ...category, image: undefined }} /> */}
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CategoriesAdmin;
