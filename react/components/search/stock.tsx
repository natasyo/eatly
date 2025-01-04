import { FunctionComponent } from 'react';
import sparks from '@/public/img/sparks.png';
import Image from 'next/image';
import stockImg from '@/public/img/swe-dish.png';

interface StockProps {}

const Stock: FunctionComponent<StockProps> = () => {
  return (
    <div className="mt-[60px] flex items-start">
      <div className={`flex grow rounded-xl bg-[url('../public/img/discont-bg.png')] px-5 pt-3`}>
        <div>
          <p className="first-letter: font-popins text-3xl font-extrabold text-white">50% OFF</p>
          <p className="text-3.5xl text-eaatly-violet-400 font-popins font-extrabold uppercase">
            WEEKENDS
          </p>
        </div>
        <Image src={stockImg} alt="discont" className="size-[102px] flex-shrink-0" />
      </div>
      <Image src={sparks} alt="sparks" className="-mt-4" />
    </div>
  );
};

export default Stock;
