import downImg from '@/public/img/Mobile-down.png';
import arrowRight from '@/public/img/arrow-r.png';
import line from '@/public/img/line.svg';
import BtnPrimary from '@/react/components/buttons/btn-primary';
import Image from 'next/image';
import { FunctionComponent } from 'react';

const DownLoad: FunctionComponent = () => {
  return (
    <div className="pb-[120px] pt-[104px]">
      <div className="container flex items-end justify-end">
        <div className="mr-[97px] flex w-[50%] justify-center">
          <Image
            src={downImg.src}
            height={downImg.height}
            width={downImg.width}
            alt="Premium Quality For Your Health"
          />
        </div>
        <div className="max-w-[547px]">
          <h2 className="pb-16 xl:pr-4">
            Premium <span className="text-eatly-violet">Quality</span> For Your Health
          </h2>
          <ul className="list-disc pl-8">
            <li className="mb-8 text-xl text-eatly-gray-500">
              Premium quality food is made with ingredients that are packed with essential vitamins,
              minerals.
            </li>
            <li className="mb-8 text-xl text-eatly-gray-500">
              These foods promote overall wellness by support healthy digestion and boosting
              immunity
            </li>
          </ul>
          <div className="mt-18 max-w-[334px]">
            <BtnPrimary className={'flex px-7 xl:text-lg'}>
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
              className="mx-auto -mt-4 mb-8 mr-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownLoad;
