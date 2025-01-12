import SearchContext from '@/react/components/search/search-context';
import Restaurants from '@/react/sections/main-page/restaurants';
import TopDishes from '@/react/sections/main-page/top-dishes';
import Questions from '@/react/sections/menu-page/questions';
import Search from '@/react/sections/menu-page/search';
import { FunctionComponent } from 'react';

const Menu: FunctionComponent = () => {
  return (
    <>
      <SearchContext>
        <Search />
      </SearchContext>

      <Restaurants classNameHeader="!text-left" />
      <TopDishes classNameHeader="!text-left" />
      <Questions />
    </>
  );
};

export default Menu;
