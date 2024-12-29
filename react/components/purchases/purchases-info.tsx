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
  }, []);

  function changePeriod(opt?: Option) {
    const data = opt && getPurchasesInfo(opt?.key);
    data && setData(data);
  }

  return (
    <div className={`rounded-[25px] bg-white ${className} shadow-eatly-3xl`}>
      <div className="mb-10 flex items-center justify-between">
        <p className="text-2.9xl font-manrope font-extrabold">Purchases</p>
        <DropDown
          options={periodOptions}
          placeholder="select period"
          current={periodOptions[0]}
          className="w-[175px]"
          onSelectValue={changePeriod}
        />
      </div>
      {data ? (
        <>
          <div className="border-eatly-gray-350 -ml-1 mb-[22px] rounded-xl border-2 p-6">
            <div className="mb-[18px] flex items-center justify-between">
              <div className="flex">
                <div className="bg-eatly-violet-200 mr-[18px] flex h-[50px] w-[50px] items-center justify-center rounded-full">
                  <Image alt="expense" src={expenseImg} />
                </div>
                <div>
                  <p className="mb-2 font-manrope text-2lg font-extrabold text-eatly-black-200">
                    Expense
                  </p>
                  <p className="text-eatly-gray-800 font-manrope text-base font-medium tracking-[0.63px]">
                    Increased By {data.expense.increased}%
                  </p>
                </div>
              </div>
              <p className="items-end font-manrope text-2.5xl font-extrabold">
                ${data.expense.value}
              </p>
            </div>
            <Diagram
              increased={data.expense.increased}
              className="rounded-full bg-eatly-violet bg-opacity-20"
              classNameInner="bg-eatly-violet"
            />
          </div>
          <div className="border-eatly-gray-350 -ml-1 rounded-xl border-2 p-6">
            <div className="mb-[18px] flex items-center justify-between">
              <div className="flex">
                <div className="bg-eatly-violet-200 mr-[18px] flex h-[50px] w-[50px] items-center justify-center rounded-full">
                  <Image alt="expense" src={vocherImg} />
                </div>
                <div>
                  <p className="mb-2 font-manrope text-2lg font-extrabold text-eatly-black-200">
                    Vocher Usage
                  </p>
                  <p className="text-eatly-gray-800 font-manrope text-base font-medium tracking-[0.63px]">
                    Increased By {data.vocher.increased}%
                  </p>
                </div>
              </div>
              <p className="items-end font-manrope text-2.5xl font-extrabold">
                ${data.vocher.value}
              </p>
            </div>
            <Diagram
              increased={data.vocher.increased}
              className="bg-eatly-orange-100 rounded-full bg-opacity-20"
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
