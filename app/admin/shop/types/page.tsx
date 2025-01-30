'use client';

import { ProductTypeController } from '@/controllers/prisma/product_type_controller';
import BtnPrimary from '@/react/components/buttons/btn-primary';
import ColorBox from '@/react/components/fields/color-box';
import TextBox from '@/react/components/fields/text-box';
import { TypeDTO } from '@/types';
import { FunctionComponent } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const TypesProductPage: FunctionComponent = () => {
  const { register, handleSubmit } = useForm<TypeDTO>({
    defaultValues: {
      title: '',
    },
  });
  const onSubmitData: SubmitHandler<TypeDTO> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h2 className="text-center">Types</h2>
      <form onSubmit={handleSubmit(onSubmitData)}>
        <TextBox {...register('title')} label="Type" />
        <ColorBox {...register('bgColor')} label="Background color" />
        <BtnPrimary type="submit" className="w-40">
          Add
        </BtnPrimary>
      </form>
    </div>
  );
};

export default TypesProductPage;
