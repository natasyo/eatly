import { FunctionComponent, RefObject, useEffect, useRef, useState } from 'react';
import SearchInput from './search-input';
import { useSearchContext } from './search-context';
import { searchDishes, searchRestaurants } from '@/controllers/api';
import { Product as Dishe, Restaurant } from '@/types';
import { useOutSideClick } from '@/hooks/outsideClick';

interface SearchQueryProps {
  className?: string;
}

const SearchQuery: FunctionComponent<SearchQueryProps> = () => {
  const { searchData, setSearchData } = useSearchContext();
  const [isShowResults, setisShowResults] = useState(true);
  const [results, setResults] = useState<Restaurant[] | Dishe[]>();
  function search(text: string) {
    console.log(searchData?.type);
    if (searchData?.type === 'Resturent') {
      setResults(searchRestaurants(text));
    }
    if (searchData?.type === 'Food') {
      setResults(searchDishes(text));
    }
  }
  useEffect(() => {
    console.log(results);
  }, [results]);

  const queryRef = useRef<HTMLDivElement | undefined>(undefined) as RefObject<HTMLDivElement>;
  useOutSideClick(queryRef, () => {
    setisShowResults(false);
  });
  return (
    <div className="relative">
      <SearchInput
        className="mb-3 md:mb-6 xl:mb-8"
        onChangeText={(searchText) => {
          setSearchData && setSearchData({ ...searchData, searchText });
          search(searchText);
          setisShowResults(true);
        }}
      />
      {results && searchData?.searchText && isShowResults && (
        <div
          className="absolute top-full max-h-[300px] w-full overflow-auto bg-eatly-gray-370"
          ref={queryRef}
        >
          <ul className="py-4">
            {results.map((item, index) => {
              return (
                <li className="p-2 hover:bg-eatly-violet-200" key={index}>
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchQuery;
