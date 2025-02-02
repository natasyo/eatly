'use client';
import { ProductTypeController } from '@/controllers/product_type_controller';
import TypesAll from '@/react/sections/admin/types-page/all-types';
import TypeForm from '@/react/sections/admin/types-page/type-form';
import { TypeDTO } from '@/types';
import { FunctionComponent, useEffect, useState } from 'react';

interface AdminTypesPageProps {}

const AdminTypesPage: FunctionComponent<AdminTypesPageProps> = () => {
  const typeController = ProductTypeController.instance;
  const [typesData, setTypesData] = useState<{ types: TypeDTO[]; status: number }>();
  const [selectType, setSelectType] = useState<TypeDTO>();
  const getTypes = () => {
    typeController.getAll().then((resp) => {
      setTypesData({ status: resp.status, types: resp.data });
    });
  };

  useEffect(() => {
    getTypes();
  }, []);
  return (
    <div className="">
      <TypeForm
        className="mb-6"
        type={selectType}
        onSave={(type) => {
          console.log(type);
          if (type.id) {
            console.log('edit');
            typeController.update(type).then((data) => {
              console.log(data);
              if (data.status === 200) {
                getTypes();
              }
            });
          } else {
            typeController.create(type).then((data) => {
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
          typeController.remove(type.id!).then((data) => {
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
