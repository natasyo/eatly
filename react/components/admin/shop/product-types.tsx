import { FunctionComponent } from 'react';
import { TypeDTO } from '../../../../types/index';
import CardType from '../../cards/ui/card-type';
import BtnRemove from '../../buttons/btn-remove';

interface ProductTypesProps {
  onSelectType?: (type: TypeDTO) => void;
  types: TypeDTO[];
  onDeleteType: (type: TypeDTO) => void;
}

const ProductTypes: FunctionComponent<ProductTypesProps> = ({
  onSelectType,
  types,
  onDeleteType,
}) => {
  if (types)
    return (
      <div className="grid grid-cols-4 gap-2">
        {types.map((type) => (
          <div key={type.id} className="relative h-full">
            <CardType
              type={type.title!}
              color={type.bgColor}
              className="!h-full w-full text-wrap break-all !rounded-xl !py-3 !pl-3 !pr-4 !text-2xl"
              onClick={() => {
                onSelectType && onSelectType(type);
              }}
            />
            <BtnRemove
              className="absolute right-1.5 top-1.5"
              onClick={() => {
                onDeleteType && onDeleteType(type);
              }}
            />
          </div>
        ))}
      </div>
    );
  return <div className=""></div>;
};

export default ProductTypes;
