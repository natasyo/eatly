'use client';
import { getPurchasesPeriod, getPurchasesInfo } from '@/backend/api';
import { FunctionComponent, useEffect, useState } from 'react';
import DropDown, { Option } from '@/react/components/drop-down/drop-down';
import expenseImg from '@/public/img/expense.png';
import Image from 'next/image';
import vocherImg from '@/public/img/vocher.png';
import { PurchasesInfo } from '@/types';
import Diagram from './diagram';
interface PurchaseInfoProps {
  className?: string;
}

const PurchaseInfo: FunctionComponent<PurchaseInfoProps> = ({ className }) => {
  const periods = getPurchasesPeriod();
  const periodOptions = periods.map((item) => {
    const option: Option = { key: item, value: item };
    return option;
  });

  const [data, setData] = useState<PurchasesInfo>();

  useEffect(() => {
    console.log(periods[0]);
    if (periods) {
      setData(getPurchasesInfo(periods[0]));
    }
  }, [periods]);

  function changePeriod(opt?: Option) {
    const dataPur = opt && getPurchasesInfo(opt?.key);
    dataPur && setData(dataPur);
  }

  return (
    <div className={`rounded-[25px] bg-white ${className} shadow-eatly-3xl`}>
      <div className="mb-6 flex items-center justify-between lg:mb-10">
        <p className="font-manrope text-xl font-extrabold lg:text-2.9xl">Purchases</p>
        <DropDown
          options={periodOptions}
          placeholder="select period"
          current={periodOptions[0]}
          className="sm:ml-4 sm:w-[160px] md:ml-0 md:w-[175px]"
          onSelectValue={changePeriod}
        />
      </div>
      {data ? (
        <>
          <div className="-ml-1 mb-4 rounded-xl border-2 border-eatly-gray-350 px-5 pb-4 pt-3 lg:mb-[22px] lg:p-6">
            <div className="mb-2 flex items-center justify-between lg:mb-[18px]">
              <div className="flex">
                <div className="mr-3 flex h-9 w-9 items-center justify-center rounded-full bg-eatly-violet-200 lg:mr-[18px] lg:h-[50px] lg:w-[50px]">
                  <Image alt="expense" src={expenseImg} className="h-4 w-4 lg:h-auto lg:w-auto" />
                </div>
                <div>
                  <p className="mb-[-6px] font-manrope text-[13px] font-extrabold text-eatly-black-200 lg:mb-2 lg:text-2lg">
                    Expense
                  </p>
                  <p className="font-manrope text-[11px] font-medium tracking-[0.63px] text-eatly-gray-800 lg:text-base">
                    Increased By {data.expense.increased}%
                  </p>
                </div>
              </div>
              <p className="items-end font-manrope text-base font-extrabold lg:text-2.5xl">
                ${data.expense.value}
              </p>
            </div>
            <Diagram
              increased={data.expense.increased}
              className="rounded-full bg-eatly-violet bg-opacity-20"
              classNameInner="bg-eatly-violet"
            />
          </div>
          <div className="-ml-1 rounded-xl border-2 border-eatly-gray-350 px-5 pb-4 pt-3 lg:p-6">
            <div className="mb-2 flex items-center justify-between lg:mb-[18px]">
              <div className="flex">
                <div className="mr-3 flex h-9 w-9 items-center justify-center rounded-full bg-eatly-violet-200 lg:mr-[18px] lg:h-[50px] lg:w-[50px]">
                  <Image alt="expense" src={vocherImg} className="h-4 w-4 lg:h-auto lg:w-auto" />
                </div>
                <div>
                  <p className="mb-[-6px] font-manrope text-[13px] font-extrabold text-eatly-black-200 lg:mb-2 lg:text-2lg">
                    Vocher Usage
                  </p>
                  <p className="font-manrope text-[11px] font-medium tracking-[0.63px] text-eatly-gray-800 lg:text-base">
                    Increased By {data.vocher.increased}%
                  </p>
                </div>
              </div>
              <p className="items-end font-manrope text-base font-extrabold lg:text-2.5xl">
                ${data.vocher.value}
              </p>
            </div>
            <Diagram
              increased={data.vocher.increased}
              className="rounded-full bg-eatly-orange-100 bg-opacity-20"
              classNameInner="bg-eatly-orange-100"
            />
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PurchaseInfo;
