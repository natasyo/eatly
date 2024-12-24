import Banner from '@/react/sections/main-page/banner';
import DownLoad from '@/react/sections/main-page/download';
import Info from '@/react/sections/main-page/info';
import Restaurants from '@/react/sections/main-page/restaurants';
import TopDishes from '@/react/sections/main-page/top-dishes';

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Info />
      <DownLoad />
      <Restaurants />
      <TopDishes />
    </div>
  );
}
