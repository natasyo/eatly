import { FunctionComponent } from 'react';
import sparks from '@/public/img/sparks.png';
import Image from 'next/image';
import stockImg from '@/public/img/swe-dish.png';

interface StockProps {
  className?: string;
}

const Stock: FunctionComponent<StockProps> = ({ className }) => {
  return (
    <div className={`${className ? className : ''} pr-2 md:pt-3`}>
      <div className={`flex items-start md:px-2 md:pb-9 xl:pb-12`}>
        <div
          className={`flex h-[104px] grow rounded-xl bg-[url('../public/img/discont-bg.png')] pl-6 pr-7 pt-[18px] sm:h-[178px] sm:pt-[30px] md:pl-10 lg:h-[200px] xl:h-[251px] xl:pl-15 xl:pt-[38px]`}
        >
          <div>
            <p className="mb-[-2px] font-popins text-3xl font-extrabold text-white sm:text-5.3xl md:mb-1 lg:-mb-4 lg:text-7xl xl:-mb-7 xl:text-8xl">
              50% OFF
            </p>
            <p className="font-popins text-3.5xl text-[62px] font-extrabold uppercase text-eaatly-violet-400 lg:text-8xl xl:text-[87px]">
              WEEKENDS
            </p>
          </div>
          <Image
            src={stockImg}
            alt="discont"
            className="m-[-26px] mt-1 size-[102px] flex-shrink-0 sm:ml-5 sm:size-[180px] md:m-[-26px] md:-ml-12 md:mt-2 lg:size-[200px] xl:ml-[-71px] xl:size-[254px]"
          />
        </div>
        <Image src={sparks} alt="sparks" className="-mt-4 md:-mr-3 md:w-12" />
      </div>
    </div>
  );
};

export default Stock;
