import { FunctionComponent } from 'react';

const Info: FunctionComponent = () => {
  return (
    <div className={`py-15 bg-[url('../public/img/info-bg.png')]`}>
      <div className="flex justify-center">
        <div className="w-[395px] border-r-2 border-eatly-gray-300 border-opacity-15 text-center">
          <p className="text-4.3xl mb-[10px] font-bold text-white">10K+</p>
          <p className="m-0 text-sm text-white">Satisfied Costumers</p>
          <p className="m-0 text-sm text-white"> All Great Over The World </p>
        </div>
        <div className="w-[338px] border-r-2 border-eatly-gray-300 border-opacity-15 text-center">
          <p className="text-4.3xl mb-[10px] font-bold text-white">4M</p>
          <p className="m-0 text-sm text-white">Healthy Dishes Sold</p>
          <p className="m-0 text-sm text-white">Including Milk Shakes Smooth</p>
        </div>
        <div className="w-[338px] border-eatly-gray-300 border-opacity-15 text-center">
          <p className="text-4.3xl mb-[10px] font-bold text-white">99.99%</p>
          <p className="m-0 text-sm text-white">Reliable Customer Support</p>
          <p className="m-0 text-sm text-white">We Provide Great Experiences</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
