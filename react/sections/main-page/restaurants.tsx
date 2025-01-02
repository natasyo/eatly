import { FunctionComponent } from 'react';
import { getTopRestaurants } from '@/backend/api';
import RestaurantCard from '@/react/components/cards/restaurant';
import BtnMore from '@/react/components/buttons/btn-more';

const Restaurants: FunctionComponent = () => {
  const restaurants = getTopRestaurants(3);
  return (
    <div>
      <div className="container border-b border-eatly-gray pb-[75px] pt-[85px] sm:pb-[88px] sm:pt-15 lg:pb-28 lg:pt-20 xl:pb-[129px] xl:pt-[86px]">
        <h3 className="mx-auto mb-[56px] max-w-[300px] text-center sm:mx-0 sm:mb-12 sm:max-w-full lg:mb-[70px]">
          Our Top <span className="text-eatly-violet">Restaurants</span>
        </h3>
        <div className="grid-cols-3 gap-4 px-3 sm:grid sm:px-0 md:gap-[22px] lg:gap-[30px]">
          {restaurants.map((item) => (
            <RestaurantCard key={item.id} item={item} className="xs:mb-0 mb-9" />
          ))}
        </div>
        <div className="mt-[66px] flex justify-end sm:mt-11 lg:mt-[68px]">
          <BtnMore href="/" text="View All" className="mr-3" />
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
