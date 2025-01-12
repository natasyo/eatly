'use client';
import { Search } from '@/types';
import { createContext, FunctionComponent, ReactNode, useContext, useState } from 'react';

interface SearchContextProps {
  children?: ReactNode;
}

type SearchContextType = {
  searchData?: Search;
  setSearchData?: (data: Search) => void;
};

export const Context = createContext<SearchContextType | undefined>(undefined);
const SearchContext: FunctionComponent<SearchContextProps> = ({ children }) => {
  const [searchData, setSearchData] = useState<Search>();

  return <Context.Provider value={{ searchData, setSearchData }}>{children}</Context.Provider>;
};

export const useSearchContext = () => {
  const context = useContext(Context);
  if (!context) throw new Error('useSearchContext must be used within a SearchProvider');
  return context;
};

export default SearchContext;
