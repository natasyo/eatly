import downImg from '@/public/img/Mobile-down.png';
import arrowRight from '@/public/img/arrow-r.png';
import line from '@/public/img/line.svg';
import BtnPrimary from '@/react/components/buttons/btn-primary';
import Image from 'next/image';
import { FunctionComponent } from 'react';

const DownLoad: FunctionComponent = () => {
  return (
    <div>
      <div className="container flex items-end justify-end border-b border-eatly-gray pb-[84px] pt-[76px]">
        <div className="flex w-[50%] lg:mr-[97px] lg:justify-center">
          <Image
            src={downImg.src}
            height={downImg.height}
            width={downImg.width}
            alt="Premium Quality For Your Health"
            className="md:w-[264px] lg:w-auto"
          />
        </div>
        <div className="max-w-[398px] lg:max-w-[547px]">
          <h2 className="mb-11 lg:mb-16 xl:pr-4">
            Premium <span className="text-eatly-violet">Quality</span> For Your Health
          </h2>
          <ul className="list-disc pl-8">
            <li className="mb-5 text-sm text-eatly-gray-500 lg:mb-8 lg:text-xl">
              Premium quality food is made with ingredients that are packed with essential vitamins,
              minerals.
            </li>
            <li className="mb-8 text-sm text-eatly-gray-500 lg:text-xl">
              These foods promote overall wellness by support healthy digestion and boosting
              immunity
            </li>
          </ul>
          <div className="mt-18 max-w-[240px] lg:max-w-[334px]">
            <BtnPrimary
              className={
                'flex h-[45px] w-[132px] items-center rounded-[10px] text-xs lg:px-7 xl:text-lg'
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
              className="mx-auto -mt-4 mb-8 mr-0 w-28 lg:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownLoad;
