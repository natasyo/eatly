import { FunctionComponent } from 'react';
import enjImg from '@/public/img/enjoy.png';
import starGreen from '@/public/img/star-green.png';
import Image from 'next/image';
import BtnPrimary from '@/react/components/buttons/btn-primary';
import BtnOutline from '@/react/components/buttons/btn-outline';
import Stars from '@/react/components/stars/stars';

const Banner: FunctionComponent = () => {
  return (
    <div className="overflow-hidden pt-[50px] sm:pb-8 md:pb-10 md:pt-9 lg:pb-15 lg:pt-11 xl:pb-16 xl:pt-12">
      <div className="container mx-auto items-center justify-between sm:flex">
        <div className="mb-12 sm:mb-0 sm:max-w-[50%] md:w-[515px] xl:w-[567px]">
          <p className="mb-0 flex items-center justify-center sm:mb-5 sm:justify-start">
            <span className="mr-3 block h-[1px] w-[38px] bg-eatly-black-300 sm:mr-5 md:opacity-20 lg:w-[54px]"></span>
            <span className="font-popins text-[9px] font-semibold uppercase tracking-[1.25px] text-eatly-black-300 sm:text-[11px] sm:tracking-[2px] md:text-opacity-20 lg:text-[15px]">
              OVER 1000 USERS
            </span>
          </p>
          <h1 className="mb-3 text-center tracking-[-1.85px] sm:text-left sm:tracking-normal lg:mb-4">
            Enjoy Foods <span className="hidden md:inline">All</span> Over{' '}
            <span className="hidden md:inline">The</span>
            <span className="text-eatly-violet">World</span>
          </h1>
          <p className="text-center text-[11px] leading-[154%] text-eatly-gray-500 opacity-70 sm:pr-16 sm:text-left md:text-[12.68px] md:leading-[146%] lg:text-base xl:text-lg">
            EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more
            details and get paychecks up to two days early. Get a{' '}
            <span className="text-eatly-violet">$20 bonus</span>.
          </p>
          <div className="mt-10 flex justify-center sm:mt-9 sm:justify-start lg:mt-[53px]">
            <BtnPrimary
              className={`mr-[14px] h-12 w-[124px] rounded-xl !p-0 text-xs font-medium sm:mr-[18px] sm:h-[42px] sm:w-[110px] lg:h-[60px] lg:w-[156px] lg:px-8 lg:text-base`}
            >
              Get Started
            </BtnPrimary>
            <BtnOutline classname="w-[88px] sm:w-[78px] h-12 sm:h-[42px] lg:text-base text-xs rounded-xl lg:w-[110px] lg:h-[60px] !p-0">
              Go Pro
            </BtnOutline>
          </div>
          <div className="mt-6 flex justify-center sm:justify-start lg:mt-8">
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
        <div className="mb-[73px] px-3 sm:mb-0 sm:p-0 md:-mr-7 md:max-w-[486px] lg:max-w-[680px] xl:-mr-10">
          <Image src={enjImg.src} height={enjImg.height} width={enjImg.width} alt="Enjoy Foods" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
