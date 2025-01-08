import { FunctionComponent } from 'react';
import sparks from '@/public/img/sparks.png';
import Image from 'next/image';
import stockImg from '@/public/img/swe-dish.png';

interface StockProps {
  className?: string;
}

const Stock: FunctionComponent<StockProps> = ({ className }) => {
  return (
    <div className={`${className ? className : ''} md:pt-3`}>
      <div className={`flex items-start md:pb-9`}>
        <div
          className={`flex h-[104px] grow rounded-xl bg-[url('../public/img/discont-bg.png')] pl-6 pr-7 pt-[18px] sm:h-[178px] sm:pt-[30px] md:pl-10`}
        >
          <div>
            <p className="mb-[-2px] font-popins text-3xl font-extrabold text-white sm:text-5.3xl md:mb-1">
              50% OFF
            </p>
            <p className="font-popins text-3.5xl text-[62px] font-extrabold uppercase text-eaatly-violet-400">
              WEEKENDS
            </p>
          </div>
          <Image
            src={stockImg}
            alt="discont"
            className="m-[-26px] mt-1 size-[102px] flex-shrink-0 sm:ml-5 sm:size-[180px] md:m-[-26px] md:-ml-12 md:mt-2"
          />
        </div>
        <Image src={sparks} alt="sparks" className="-mt-4 md:-mr-3 md:w-12" />
      </div>
    </div>
  );
};

export default Stock;
