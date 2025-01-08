import { FunctionComponent } from 'react';
import Search from '@/public/img/search.svg';
import Image from 'next/image';

interface SearchInputProps {
  className?: string;
}

const SearchInput: FunctionComponent<SearchInputProps> = ({ className }) => {
  return (
    <div
      className={`${className ? className : ''} flex rounded-lg bg-eatly-gray-370 p-[14px] font-popins`}
    >
      <Image src={Search} alt="Search" className="mr-4" />
      <input
        type="text"
        placeholder="Search"
        className="grow bg-transparent text-xs font-medium text-eatly-black-600 placeholder:text-eatly-gray-810 focus-visible:outline-none md:text-sm"
      />
    </div>
  );
};

export default SearchInput;
