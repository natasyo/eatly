'use client';
import CategorySearch from '@/react/components/search/category-search';
import { useSearchContext } from '@/react/components/search/search-context';
import SearchQuery from '@/react/components/search/search-query';
import SearchType from '@/react/components/search/search-type';
import StocksCarousel from '@/react/components/search/stock/stock-carousel';

import { FunctionComponent } from 'react';

interface SearchProps {
  className?: string;
}

const Search: FunctionComponent<SearchProps> = ({ className }) => {
  const { searchData, setSearchData } = useSearchContext();
  return (
    <div
      className={`container ${className ? className : ''} :grid-cols-[minmax(578px,_1fr)_268px] md:grid md:grid-cols-[minmax(578px,_1fr)_268px] md:gap-x-10 md:pt-20 xl:grid-cols-[minmax(758px,_1fr)_377px] xl:gap-x-[60px] xl:pt-[120px] 2xl:grid-cols-[minmax(758px,_1fr)_450px] 2xl:gap-x-20`}
    >
      <StocksCarousel className="-mr-4 mb-[73px] mt-[60px] max-w-full md:-mt-2 md:mb-16 xl:mb-21" />
      <CategorySearch
        className="row-span-2 mb-[82px] rounded-[20px] bg-white p-[26px] md:mb-0 md:pb-7"
        onApplyHandler={() => {
          console.log(searchData);
        }}
      />
      <div className="pr-10 xl:pr-[57px]">
        <SearchQuery className="mb-3 md:mb-6 xl:mb-8" />

        <SearchType
          types={['Food', 'Resturent']}
          current="Food"
          onChange={(type) => {
            setSearchData && setSearchData({ ...searchData, type });
          }}
        />
      </div>
    </div>
  );
};

export default Search;
