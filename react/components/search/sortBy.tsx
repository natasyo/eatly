import { FunctionComponent } from 'react';

interface SortByProps {
  className?: string;
  item: string;
  isChecked: boolean;
  onChecked?: (item: string) => void;
}

const SortBy: FunctionComponent<SortByProps> = ({ item, className, isChecked, onChecked }) => {
  return (
    <label
      className={`block font-popins text-[13px] md:text-[11px] ${className ? className : ''} ${isChecked ? 'text-eatly-violet' : 'text-eatly-gray-700'} xl:text-[15px]`}
      onClick={() => {
        onChecked && onChecked(item);
      }}
    >
      {item}
    </label>
  );
};

export default SortBy;
