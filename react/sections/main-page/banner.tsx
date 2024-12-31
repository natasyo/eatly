import { FunctionComponent } from 'react';
import enjImg from '@/public/img/enjoy.png';
import starGreen from '@/public/img/star-green.png';
import Image from 'next/image';
import BtnPrimary from '@/react/components/buttons/btn-primary';
import BtnOutline from '@/react/components/buttons/btn-outline';
import Stars from '@/react/components/stars/stars';

const Banner: FunctionComponent = () => {
  return (
    <div className="overflow-hidden md:pb-10 md:pt-9 lg:pb-15 lg:pt-11 xl:pb-16 xl:pt-12">
      <div className="container mx-auto flex items-center justify-between">
        <div className="max-w-[50%] md:w-[515px] xl:w-[567px]">
          <p className="mb-3 flex items-center md:mb-5">
            <span className="mr-5 block h-[1px] w-[38px] bg-eatly-black-300 opacity-20 lg:w-[54px]"></span>
            <span className="font-popins text-[11px] font-semibold uppercase tracking-[2px] text-eatly-black-300 text-opacity-20 lg:text-[15px]">
              OVER 1000 USERS
            </span>
          </p>
          <h1 className="mb-3lg:mb-4">
            Enjoy Foods All Over The <span className="text-eatly-violet">World</span>
          </h1>
          <p className="pr-16 text-eatly-gray-500 opacity-70 md:text-[12.68px] md:leading-[146%] lg:text-base xl:text-lg">
            EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more
            details and get paychecks up to two days early. Get a{' '}
            <span className="text-eatly-violet">$20 bonus</span>.
          </p>
          <div className="mt-9 flex lg:mt-[53px]">
            <BtnPrimary
              className={`mr-[18px] h-[42px] w-[110px] rounded-xl !p-0 text-xs font-medium lg:h-[60px] lg:w-[156px] lg:px-8 lg:text-base`}
            >
              Get Started
            </BtnPrimary>
            <BtnOutline classname="w-[78px] h-[42px] lg:text-base text-xs rounded-xl lg:w-[110px] lg:h-[60px] !p-0">
              Go Pro
            </BtnOutline>
          </div>
          <div className="mt-6 flex lg:mt-8">
            <Image
              src={starGreen.src}
              width={starGreen.width}
              height={starGreen.height}
              alt="star green"
              className="mr-5 h-[21px] w-auto lg:h-auto"
            />
            <Stars showNumber={true} />
          </div>
        </div>
        <div className="md:-mr-7 md:max-w-[486px] lg:max-w-[680px] xl:-mr-10">
          <Image src={enjImg.src} height={enjImg.height} width={enjImg.width} alt="Enjoy Foods" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
