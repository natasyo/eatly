import { ChangeEvent, FunctionComponent } from 'react';
import Search from '@/public/img/search.svg';
import Image from 'next/image';

interface SearchInputProps {
  className?: string;
  onChangeText?: (text: string) => void;
}

const SearchInput: FunctionComponent<SearchInputProps> = ({ className, onChangeText }) => {
  return (
    <div
      className={`${className ? className : ''} flex rounded-lg bg-eatly-gray-370 p-[14px] font-popins lg:rounded-[15px] xl:p-6`}
    >
      <Image src={Search} alt="Search" className="mr-4" />
      <input
        type="text"
        placeholder="Search"
        className="grow bg-transparent text-xs font-medium text-eatly-black-600 placeholder:text-eatly-gray-810 focus-visible:outline-none md:text-sm xl:text-xl"
        onChange={(event: ChangeEvent) => {
          onChangeText && onChangeText((event.target as HTMLInputElement).value);
        }}
      />
    </div>
  );
};

export default SearchInput;
