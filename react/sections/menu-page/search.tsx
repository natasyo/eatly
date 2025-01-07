'use client';
import CategorySearch from '@/react/components/search/category-search';
import SearchInput from '@/react/components/search/search-input';
import SearchType from '@/react/components/search/search-type';
import StocksCarousel from '@/react/components/search/stock/stock-carousel';

import { FunctionComponent } from 'react';

interface SearchProps {
  className?: string;
}

const Search: FunctionComponent<SearchProps> = ({ className }) => {
  return (
    <div
      className={`container ${className ? className : ''} md:grid md:grid-cols-[578px_268px] md:gap-x-10 md:pt-20`}
    >
      <StocksCarousel className="-mr-4 mb-[73px] mt-[60px] max-w-full md:-mt-2" />
      <CategorySearch className="row-span-2 mb-[82px] rounded-[20px] bg-white p-[26px]" />
      <div className="pr-10">
        <SearchInput className="mb-3" />
        <SearchType
          types={['Food', 'Resturent']}
          current="Food"
          onChange={(type) => {
            console.log(type);
          }}
        />
      </div>
    </div>
  );
};

export default Search;
