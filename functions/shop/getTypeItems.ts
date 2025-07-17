import React from 'react';
import { TypeDTO } from '@/types';
import { productTypeController } from '@/controllers';

export function getTypeItems(setTypes:  React.Dispatch<React.SetStateAction<TypeDTO[]>>, setIsLoadingTypes:(value:boolean)=>void){
  setIsLoadingTypes(true);
  productTypeController.getAll().then(data=>{
    setTypes(data.data);
  setIsLoadingTypes(false);
  }, ()=>{setIsLoadingTypes(false)})

}