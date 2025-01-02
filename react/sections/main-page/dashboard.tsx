'use client';
import { getPurchases } from '@/backend/api';
import Purchase from '@/react/components/cards/purchase';
import PurchaseInfo from '@/react/components/purchases/purchases-info';

import { FunctionComponent } from 'react';

const Dashboard: FunctionComponent = () => {
  const purcharses = getPurchases(3);

  return (
    <div>
      <div className="container flex justify-between border-b border-eatly-gray pb-[85px] pt-[70px] lg:pb-[120px] lg:pt-[104px]">
        <div className="max-w-[416px] lg:max-w-[514px]">
          <h2 className="mb-9 font-popins leading-[116%] tracking-[0.01em] lg:mb-12 lg:pl-3">
            Control <span className="text-eatly-violet">Purchases</span> Via Dashboard
          </h2>
          {purcharses.map((item) => (
            <Purchase
              purcharse={item}
              key={item.id}
              className="mb-[10px] w-[245px] lg:mb-[15px] lg:w-[345px]"
            />
          ))}
        </div>
        <PurchaseInfo className="max-w-[380px] flex-grow px-7 py-7 lg:max-w-[534px] lg:px-10 lg:py-8" />
      </div>
    </div>
  );
};

export default Dashboard;
