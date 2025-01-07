import { FunctionComponent } from 'react';
import Search from '@/public/img/search.svg';
import Image from 'next/image';

interface SearchInputProps {
  className?: string;
}

const SearchInput: FunctionComponent<SearchInputProps> = ({ className }) => {
  return (
    <div
      className={`${className ? className : ''} bg-eatly-gray-370 flex rounded-lg p-[14px] font-popins text-xs`}
    >
      <Image src={Search} alt="Search" className="mr-4" />
      <input
        type="text"
        placeholder="Search"
        className="placeholder:text-eatly-gray-810 grow bg-transparent font-medium text-eatly-black-600 focus-visible:outline-none"
      />
    </div>
  );
};

export default SearchInput;
