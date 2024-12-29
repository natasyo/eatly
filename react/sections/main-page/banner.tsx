import { FunctionComponent } from 'react';
import enjImg from '@/public/img/enjoy.png';
import starGreen from '@/public/img/star-green.png';
import Image from 'next/image';
import BtnPrimary from '@/react/components/buttons/btn-primary';
import BtnOutline from '@/react/components/buttons/btn-outline';
import Stars from '@/react/components/stars/stars';

const Banner: FunctionComponent = () => {
  return (
    <div className="overflow-hidden xl:pb-16 xl:pt-12">
      <div className="container mx-auto flex items-center justify-between">
        <div className="max-w-[50%] xl:w-[567px]">
          <p className="mb-5 flex items-center">
            <span className="mr-5 block h-[1px] w-[54px] bg-eatly-black-300 opacity-20"></span>
            <span className="font-popins text-[15px] font-semibold uppercase tracking-[2px] text-eatly-black-300 text-opacity-20">
              OVER 1000 USERS
            </span>
          </p>
          <h1 className="mb-4">
            Enjoy Foods All Over The <span className="text-eatly-violet">World</span>
          </h1>
          <p className="pr-16 text-eatly-gray-500 opacity-70 lg:text-[12.68px] xl:text-lg">
            EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more
            details and get paychecks up to two days early. Get a{' '}
            <span className="text-eatly-violet">$20 bonus</span>.
          </p>
          <div className="mt-[53px] flex">
            <BtnPrimary className={`mr-[18px] rounded-xl px-8 lg:text-xs xl:text-base`}>
              Get Started
            </BtnPrimary>
            <BtnOutline classname="xl:text-base lg:text-xs rounded-xl">Go Pro</BtnOutline>
          </div>
          <div className="mt-8 flex">
            <Image
              src={starGreen.src}
              width={starGreen.width}
              height={starGreen.height}
              alt="star green"
            />
            <Stars />
          </div>
        </div>
        <div className="xl:-mr-10">
          <Image src={enjImg.src} height={enjImg.height} width={enjImg.width} alt="Enjoy Foods" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
