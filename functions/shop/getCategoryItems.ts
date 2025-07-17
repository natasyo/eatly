import { productCategoryController } from '@/controllers';
import { Category } from '@/types';
import React from 'react';

export function getCategoryItems(setCategories:  React.Dispatch<React.SetStateAction<Category[]>>, setIsLoadingCategories:(value:boolean)=>void){
  setIsLoadingCategories(true);
  productCategoryController.getAll().then(
    (data) => {
      setCategories(data.data);
      setIsLoadingCategories(false);
    },
    () => {
      setIsLoadingCategories(false);
    },
  );
}