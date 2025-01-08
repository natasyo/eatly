import Restaurants from '@/react/sections/main-page/restaurants';
import TopDishes from '@/react/sections/main-page/top-dishes';
import Search from '@/react/sections/menu-page/search';
import { FunctionComponent } from 'react';

const Menu: FunctionComponent = () => {
  return (
    <>
      <Search />
      <Restaurants classNameHeader="!text-left" />
      <TopDishes classNameHeader="!text-left" />
    </>
  );
};

export default Menu;
