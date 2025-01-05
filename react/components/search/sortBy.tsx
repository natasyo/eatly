import { FunctionComponent } from 'react';

interface SortByProps {
  className?: string;
  item: string;
  isChecked: boolean;
}

const SortBy: FunctionComponent<SortByProps> = ({ item, className }) => {
  return (
    <label
      className={`block ${className ? className : 'font-popins text-[13px] text-eatly-gray-700'}`}
    >
      {item}
    </label>
  );
};

export default SortBy;
