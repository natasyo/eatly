import { FunctionComponent } from 'react';

const Info: FunctionComponent = () => {
  return (
    <div
      className={`bg-[url('../public/img/info-bg.png')] bg-cover pb-[88px] pt-[100px] sm:pb-12 sm:pt-10 lg:py-15`}
    >
      <div className="flex flex-col justify-center sm:flex-row">
        <div className="mb-[124px] border-eatly-gray-300 border-opacity-15 text-center sm:mb-0 sm:w-[220px] sm:border-r-2 md:w-[240px] lg:w-[395px]">
          <p className="mb-[10px] text-4.3xl font-bold text-eatly-violet-300 sm:text-3xl lg:text-4.3xl">
            10K+
          </p>
          <p className="m-0 text-sm text-eatly-violet-300 sm:text-xxs lg:text-sm">
            Satisfied Costumers
          </p>
          <p className="m-0 text-sm text-eatly-violet-300 sm:text-xxs lg:text-sm">
            {' '}
            All Great Over The World{' '}
          </p>
        </div>
        <div className="mb-[124px] border-eatly-gray-300 border-opacity-15 text-center sm:mb-0 sm:w-[220px] sm:border-r-2 md:w-[240px] lg:w-[338px]">
          <p className="fsm:text-3xl mb-[10px] text-4.3xl font-bold text-eatly-violet-300 lg:text-4.3xl">
            4M
          </p>
          <p className="m-0 text-sm text-eatly-violet-300 sm:text-xxs lg:text-sm">
            Healthy Dishes Sold
          </p>
          <p className="m-0 text-sm text-eatly-violet-300 sm:text-xxs lg:text-sm">
            Including Milk Shakes Smooth
          </p>
        </div>
        <div className="md:w-240px border-eatly-gray-300 border-opacity-15 text-center sm:w-[220px] lg:w-[338px]">
          <p className="fsm:text-3xl mb-[10px] text-4.3xl font-bold text-eatly-violet-300 lg:text-4.3xl">
            99.99%
          </p>
          <p className="m-0 text-sm text-eatly-violet-300 sm:text-xxs lg:text-sm">
            Reliable Customer Support
          </p>
          <p className="m-0 text-sm text-eatly-violet-300 sm:text-xxs lg:text-sm">
            We Provide Great Experiences
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
