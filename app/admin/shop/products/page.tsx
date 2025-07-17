'use client'
import React from 'react';
import ProductForm from '@/react/sections/admin/product-page/product-form';
import { ProductController } from '@/controllers/product_controller';

const Products = () => {
  return (
    <div>
      <ProductForm onSave={(data)=>{
        ProductController.create(data);
      }}/>
    </div>
  );
};

export default Products;