'use client';
import { productCategoryController } from '@/controllers';
import CategoryForm from '@/react/sections/admin/category-page/category-form';
import { FunctionComponent } from 'react';

const CategoriesAdmin: FunctionComponent = () => {
  return (
    <div>
      <CategoryForm
        onSave={(category) => {
          console.log(category);
        }}
      />
    </div>
  );
};

export default CategoriesAdmin;
