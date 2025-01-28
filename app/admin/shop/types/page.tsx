'use client';
import { Type } from '@prisma/client';
import { ChangeEvent, FunctionComponent, useState } from 'react';

interface TypesProductPageProps {}

const TypesProductPage: FunctionComponent<TypesProductPageProps> = () => {
  const [type, setType] = useState<Type>();
  return (
    <div>
      <h2 className="text-center">Types</h2>
      <input
        type="text"
        value={type?.title}
        onChange={(e: ChangeEvent) => {
          const title = (e.target as HTMLInputElement).value;
          setType({ ...type, title });
        }}
      />
      <input type="color" value={type?.bgColor} />
      <button>Add type</button>
    </div>
  );
};

export default TypesProductPage;
