import Banner from '@/react/sections/main-page/banner';
import CustomerSay from '@/react/sections/main-page/customer-say';
import Dashboard from '@/react/sections/main-page/dashboard';
import Discont from '@/react/sections/main-page/discont';
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
      <Dashboard />
      <CustomerSay />
      <Discont className="mb-[154px] lg:mb-[214px]" />
    </div>
  );
}
