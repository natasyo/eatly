import { FunctionComponent } from 'react';
import { getTopRestaurants } from '@/backend/api';
import RestaurantCard from '@/react/components/cards/restaurant';
import BtnMore from '@/react/components/buttons/btn-more';

const Restaurants: FunctionComponent = () => {
  const restaurants = getTopRestaurants(3);
  return (
    <div>
      <div className="container border-b border-eatly-gray pb-[88px] pt-15 lg:pb-28 lg:pt-20 xl:pb-[129px] xl:pt-[86px]">
        <h3 className="mb-12 text-center lg:mb-[70px]">
          Our Top <span className="text-eatly-violet">Restaurants</span>
        </h3>
        <div className="grid grid-cols-3 gap-4 md:gap-[22px] lg:gap-[30px]">
          {restaurants.map((item) => (
            <RestaurantCard key={item.id} item={item} />
          ))}
        </div>
        <div className="mt-11 flex justify-end lg:mt-[68px]">
          <BtnMore href="/" text="View All" className="mr-3" />
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
