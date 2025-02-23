'use client';
import { productCategoryController } from '@/controllers';
import Loading from '@/react/components/loading';
import CategoryItem from '@/react/components/search/category-item';
import CategoryForm from '@/react/sections/admin/category-page/category-form';
import CategoryItemsAdmin from '@/react/sections/admin/category-page/category-items-admin';
import { Category } from '@/types';
import { FunctionComponent, useEffect, useState } from 'react';

const CategoriesAdmin: FunctionComponent = () => {
  const [fakeUrlImg, setFakeUrlImg] = useState<string>('');
  const [category, setCategory] = useState<Category | undefined>(undefined);
  const [categories, setCategories] = useState<Category[]>();
  const [errorRequest, setErrorRequest] = useState<string>();
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);

  function getCtegories() {
    if (!categories)
      setIsLoadingCategories(true);
    productCategoryController.getAll().then(
      (data) => {
        setCategories(data.data);
        setIsLoadingCategories(false);
      },
      (data) => {
        setIsLoadingCategories(false);
      },
    );
  }
  useEffect(() => {
    getCtegories()
  }, []);


  useEffect(() => {
    if (category) setCategory({ ...category, image: fakeUrlImg });
  }, [fakeUrlImg]);
  useEffect(() => {
    if (errorRequest) {
      setTimeout(() => { setErrorRequest('') }, 4000)
    }
  }, [errorRequest])
  return (
    <div>
      <CategoryForm
        imgFakeUrl={fakeUrlImg}
        onSave={(data) => {
          productCategoryController.create(data).then(() => {
            getCtegories();
            setCategory(undefined);
          }, (data) => {
            console.log(data)
            setErrorRequest(data.message)
          })

        }}
        onChange={(data) => {
          if (data) setCategory({ ...data, image: fakeUrlImg });
        }}
        onChangeFakeImgUrl={(url) => {
          setFakeUrlImg(url);
        }}
      />
      {
        errorRequest && <p className='text-red-400'>{errorRequest}</p>
      }
      {(category?.image || category?.title)
        && (
          <div className='mb-9'>
            <p className="mb-2 mt-10 text-xl font-bold text-eatly-black-100">Preview</p>
            <CategoryItem item={category} isSelect={true} className="max-w-28" />
          </div>
        )}

      {
        isLoadingCategories ? <Loading className='mt-9' /> :
          categories && <CategoryItemsAdmin categories={categories} onRemove={(category) => {
            productCategoryController.remove(category.id!);
            getCtegories();
          }} />
      }


    </div>
  );
};

export default CategoriesAdmin;
