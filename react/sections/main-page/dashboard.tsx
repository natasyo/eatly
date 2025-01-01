'use client';
import { getPurchases } from '@/backend/api';
import Purchase from '@/react/components/cards/purchase';
import PurchaseInfo from '@/react/components/purchases/purchases-info';

import { FunctionComponent } from 'react';

const Dashboard: FunctionComponent = () => {
  const purcharses = getPurchases(3);

  return (
    <div>
      <div className="container flex justify-between border-b border-eatly-gray pb-[120px] pt-[104px]">
        <div className="max-w-[514px]">
          <h2 className="mb-12 pl-3 font-popins leading-[116%] tracking-[0.01em]">
            Control <span className="text-eatly-violet">Purchases</span> Via Dashboard
          </h2>
          {purcharses.map((item) => (
            <Purchase purcharse={item} key={item.id} className="mb-[15px] w-[345px]" />
          ))}
        </div>
        <PurchaseInfo className="max-w-[534px] flex-grow px-10 py-8" />
      </div>
    </div>
  );
};

export default Dashboard;
