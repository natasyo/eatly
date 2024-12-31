import { FunctionComponent } from 'react';

const Info: FunctionComponent = () => {
  return (
    <div className={`bg-[url('../public/img/info-bg.png')] pb-12 pt-10 lg:py-15`}>
      <div className="flex justify-center">
        <div className="w-[240px] border-r-2 border-eatly-gray-300 border-opacity-15 text-center lg:w-[395px]">
          <p className="mb-[10px] text-3xl font-bold text-white lg:text-4.3xl">10K+</p>
          <p className="text-eatly-violet-300 text-xxs m-0 lg:text-sm">Satisfied Costumers</p>
          <p className="text-eatly-violet-300 text-xxs m-0 lg:text-sm">
            {' '}
            All Great Over The World{' '}
          </p>
        </div>
        <div className="w-[240px] border-r-2 border-eatly-gray-300 border-opacity-15 text-center lg:w-[338px]">
          <p className="mb-[10px] text-3xl font-bold text-white lg:text-4.3xl">4M</p>
          <p className="text-eatly-violet-300 text-xxs m-0 lg:text-sm">Healthy Dishes Sold</p>
          <p className="text-eatly-violet-300 text-xxs m-0 lg:text-sm">
            Including Milk Shakes Smooth
          </p>
        </div>
        <div className="w-240px border-eatly-gray-300 border-opacity-15 text-center lg:w-[338px]">
          <p className="mb-[10px] text-3xl font-bold text-white lg:text-4.3xl">99.99%</p>
          <p className="text-eatly-violet-300 text-xxs m-0 lg:text-sm">Reliable Customer Support</p>
          <p className="text-eatly-violet-300 text-xxs m-0 lg:text-sm">
            We Provide Great Experiences
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
