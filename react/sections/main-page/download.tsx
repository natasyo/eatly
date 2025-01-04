import downImg from '@/public/img/Mobile-down.png';
import arrowRight from '@/public/img/arrow-r.png';
import line from '@/public/img/line.svg';
import BtnPrimary from '@/react/components/buttons/btn-primary';
import Image from 'next/image';
import { FunctionComponent } from 'react';

const DownLoad: FunctionComponent = () => {
  return (
    <div>
      <div className="container flex flex-col-reverse items-end justify-end border-b border-eatly-gray pb-[65px] pt-[66px] sm:flex-row sm:pb-[84px]">
        <div className="mt-[100px] flex w-full justify-center sm:mt-0 sm:w-[50%] sm:justify-start lg:mr-[97px] lg:justify-center">
          <Image
            src={downImg.src}
            height={downImg.height}
            width={downImg.width}
            alt="Premium Quality For Your Health"
            className="ml-8 max-h-[352px] w-auto sm:max-h-[625px] sm:w-[264px] md:w-auto"
          />
        </div>
        <div className="max-w-[398px] lg:max-w-[547px]">
          <h3 className="mx-auto mb-[38px] max-w-[300px] text-center sm:mx-0 sm:mb-11 sm:text-left lg:mb-16 lg:max-w-full xl:pr-4">
            Premium <span className="text-eatly-violet">Quality</span> For Your Health
          </h3>
          <ul className="list-disc pl-8">
            <li className="mb-5 text-xs text-eatly-gray-500 sm:text-sm lg:mb-8 lg:text-xl">
              Premium quality food is made with ingredients that are packed with essential vitamins,
              minerals.
            </li>
            <li className="mb-8 text-xs text-eatly-gray-500 sm:text-sm lg:text-xl">
              These foods promote overall wellness by support healthy digestion and boosting
              immunity
            </li>
          </ul>
          <div className="relative mt-5 sm:static sm:mt-18 sm:max-w-[240px] lg:max-w-[334px]">
            <BtnPrimary
              className={
                'mx-auto flex h-[45px] w-[121px] items-center rounded-[10px] text-xs sm:m-0 sm:w-[132px] lg:px-7 xl:text-lg'
              }
            >
              <span className="mr-[15px]">Download</span>
              <Image
                src={arrowRight.src}
                width={arrowRight.width}
                height={arrowRight.height}
                alt="arrow"
              />
            </BtnPrimary>
            <Image
              src={line.src}
              height={line.height}
              width={line.width}
              alt="line"
              className="l-[21px] t-[77px] absolute mx-auto -mt-4 mb-8 mr-0 w-28 rotate-[100deg] sm:static sm:rotate-0 lg:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownLoad;
