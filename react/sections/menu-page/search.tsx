import Stock from '@/react/components/search/stock';
import { FunctionComponent } from 'react';

interface SearchProps {}

const Search: FunctionComponent<SearchProps> = () => {
  return (
    <div className={`container`}>
      <Stock />
    </div>
  );
};

export default Search;
