import CategorySearch from '@/react/components/search/category-search';
import Stock from '@/react/components/search/stock';
import { FunctionComponent } from 'react';

interface SearchProps {
  className: string;
}

const Search: FunctionComponent<SearchProps> = ({ className }) => {
  return (
    <div className={`container ${className}`}>
      <Stock />
      <CategorySearch className="rounded-[20px] bg-white p-7" />
    </div>
  );
};

export default Search;
