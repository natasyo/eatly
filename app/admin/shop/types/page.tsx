'use client';
import { productTypeController } from '@/controllers';
import TypesAll from '@/react/sections/admin/types-page/all-types';
import TypeForm from '@/react/sections/admin/types-page/type-form';
import { TypeDTO } from '@/types';
import { FunctionComponent, useEffect, useState } from 'react';

const AdminTypesPage: FunctionComponent = () => {
  const [typesData, setTypesData] = useState<{ types?: TypeDTO[]; status: number }>();
  const [selectType, setSelectType] = useState<TypeDTO>();
  const getTypes = () => {
    productTypeController.getAll().then(
      (resp) => {
        console.log('resp', resp.status);
        setTypesData({ status: resp.status, types: resp.data });
      },
      (data) => {
        setTypesData({ status: data.status });
        console.log(data.status);
      },
    );
  };

  useEffect(() => {
    getTypes();
  }, []);
  useEffect(() => {
    console.log(typesData);
  }, [typesData]);
  return (
    <div className="">
      <TypeForm
        className="mb-6"
        type={selectType}
        onSave={(type) => {
          console.log(type);
          if (type.id) {
            console.log('edit');
            productTypeController.update(type).then((data) => {
              console.log(data);
              if (data.status === 200) {
                getTypes();
              }
            });
          } else {
            productTypeController.create(type).then((data) => {
              if (data.status === 200) {
                getTypes();
              }
            });
          }
        }}
      />
      <TypesAll
        types={typesData?.types}
        status={typesData?.status}
        removeType={(type) => {
          productTypeController.remove(type.id!).then(() => {
            getTypes();
          });
        }}
        selectType={(type) => {
          setSelectType(type);
        }}
      />
    </div>
  );
};

export default AdminTypesPage;
