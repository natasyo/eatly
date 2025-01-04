import CategorySearch from '@/react/components/search/category-search';
import Stock from '@/react/components/search/stock';
import { FunctionComponent } from 'react';

interface SearchProps {
  className?: string;
}

const Search: FunctionComponent<SearchProps> = ({ className }) => {
  return (
    <div className={`container ${className ? className : ''}`}>
      <Stock className="mb-[73px]" />
      <CategorySearch className="rounded-[20px] bg-white p-[26px]" />
    </div>
  );
};

export default Search;
