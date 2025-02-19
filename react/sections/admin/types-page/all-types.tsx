import BtnRemove from '@/react/components/buttons/btn-remove';
import CardType from '@/react/components/cards/ui/card-type';
import Loading from '@/react/components/loading';
import { TypeDTO } from '@/types';
import { FunctionComponent } from 'react';

interface AllTypesProps {
  types?: TypeDTO[];
  status?: number;
  removeType?: (item: TypeDTO) => void;
  selectType?: (item: TypeDTO) => void;
}

const AllTypes: FunctionComponent<AllTypesProps> = ({ types, status, removeType, selectType }) => {
  if (!status || !types) {
    return <Loading />;
  }
  if (types.length < 1) {
    return <p>Not fount</p>;
  }
  if (status !== 200) return <p>Request error</p>;
  return (
    <div className="flex flex-wrap">
      {types.map((item) => (
        <div key={item.id} className="relative m-2">
          <CardType
            type={item.title!}
            color={item.bgColor!}
            className="cursor-pointer !py-2 !pl-2 !pr-6 !text-lg font-medium"
            onClick={() => {
              selectType && selectType(item);
            }}
          />
          <BtnRemove
            className="absolute right-0 top-0 p-1"
            onClick={() => {
              removeType && removeType(item);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default AllTypes;
