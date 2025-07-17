  'use client'
import React, { FunctionComponent, useEffect, useState } from 'react';
import TextBox from '@/react/components/fields/text-box';
import BtnPrimary from '@/react/components/buttons/btn-primary';
import FileBox from '@/react/components/fields/file-box';
import DropDown, { Option } from '@/react/components/drop-down/drop-down';
import { getCategoryItems } from '@/functions/shop';
import { Category, ProductDTO, TypeDTO } from '@/types';
import { getTypeItems } from '@/functions/shop/getTypeItems';
import { imageUrl } from '@/config';
import { useForm } from 'react-hook-form';


interface ProductFormProps{
  onSave?: (Product: ProductDTO) => void;
  }

const ProductForm: FunctionComponent<ProductFormProps> = ({onSave}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [types, setTypes] = useState<TypeDTO[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const [isLoadingTypes, setIsLoadingTypes] = useState(false);
  useEffect(() => {
    getCategoryItems(setCategories,setIsLoadingCategories);
    getTypeItems(setTypes,setIsLoadingTypes)
  }, []);

  const {register, handleSubmit, setValue, reset}=useForm<ProductDTO>()
  return (
    <div>
      <form onSubmit={handleSubmit((data)=>{
    if(onSave) onSave(data);
    reset();
      })}>
        <TextBox label={'Name'}  {...register('name', {required:'This Field is required' })}/>
        <TextBox label={'Price'} type='number' {...register('price', {required:'This Field is required', valueAsNumber:true})}/>
        <TextBox label={'Time wait'}  type='number' {...register('timeWait', {required:'This Field is required', valueAsNumber:true})}/>
        <DropDown label='Category' isLoading={isLoadingCategories} {...register('categoryId')}
                                             options={categories.map<Option>(category => ({
                                               key: category.id!,
                                               value:category.title!,
                                               icon:`${imageUrl}/categories/${category.image}`
                                             }))}
                                             placeholder="select category"
                  onSelectValue={value=>{if(value) setValue('categoryId', value.key)}}

          />

            <DropDown label='Type' isLoading={isLoadingTypes} options={
            types.map<Option>(type=>({key:type.id!, value:type.title!}))
          } placeholder={`select type`} {...register('typeId', {required:'This Field is required'})} onSelectValue={value=>{if(value) setValue('typeId',value.key)}}/>

        <FileBox {...register('image')} onChange={e=>{
          if(e.target.files&&e.target.files.length>0) {
            setValue('image', e.target.files[0]);
          }
        }}/>
        <BtnPrimary type={'submit'}>Save</BtnPrimary>
      </form>
    </div>
  );
};

export default ProductForm;