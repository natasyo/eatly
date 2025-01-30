'use client';

import { ProductTypeController } from '@/controllers/prisma/product_type_controller';
import TextBox from '@/react/components/fields/text-box';
import { TypeDTO } from '@/types';
import { ChangeEvent, FunctionComponent, useState } from 'react';

const TypesProductPage: FunctionComponent = () => {
  const [type, setType] = useState<TypeDTO>();
  const typeController = new ProductTypeController();
  return (
    <div>
      <h2 className="text-center">Types</h2>
      {/* <input
        type="text"
        value={type?.title}
        onChange={(e: ChangeEvent) => {
          const title = (e.target as HTMLInputElement).value;
          setType({ ...type, title });
        }}
      /> */}
      <TextBox label="Type" />
      <input
        type="color"
        value={type?.bgColor}
        onChange={(e: ChangeEvent) => {
          const bgColor = (e.target as HTMLInputElement).value;
          setType({ ...type, bgColor });
        }}
      />
      <button
        onClick={() => {
          typeController.create(type!);
        }}
      >
        Add type
      </button>
    </div>
  );
};

export default TypesProductPage;
