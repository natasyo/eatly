import { FunctionComponent } from 'react';
import sparks from '@/public/img/sparks.png';
import Image from 'next/image';
import stockImg from '@/public/img/swe-dish.png';

interface StockProps {
  className?: string;
}

const Stock: FunctionComponent<StockProps> = ({ className }) => {
  return (
    <div className={`-mr-4 mt-[60px] flex items-start ${className ? className : ''}`}>
      <div
        className={`flex h-[104px] grow rounded-xl bg-[url('../public/img/discont-bg.png')] pl-6 pr-7 pt-[18px]`}
      >
        <div>
          <p className="first-letter: mb-[-2px] font-popins text-3xl font-extrabold text-white">
            50% OFF
          </p>
          <p className="font-popins text-3.5xl font-extrabold uppercase text-eaatly-violet-400">
            WEEKENDS
          </p>
        </div>
        <Image src={stockImg} alt="discont" className="m-[-26px] mt-1 size-[102px] flex-shrink-0" />
      </div>
      <Image src={sparks} alt="sparks" className="-mt-4" />
    </div>
  );
};

export default Stock;
