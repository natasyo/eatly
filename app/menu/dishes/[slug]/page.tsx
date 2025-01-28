'use client';
import { getDishe } from '@/controllers/api';
import BtnPrimary from '@/react/components/buttons/btn-primary';
import CardPrice from '@/react/components/cards/ui/card-price';
import CardTitle from '@/react/components/cards/ui/card-title';
import CardType from '@/react/components/cards/ui/card-type';
import WaitAndRating from '@/react/components/cards/ui/wait-and-rating';
import Loading from '@/react/components/loading';
import TopDishes from '@/react/sections/main-page/top-dishes';
import { Dishe } from '@/types';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { FunctionComponent, useEffect, useState } from 'react';

const Product: FunctionComponent = () => {
  const { slug } = useParams();
  const [dishe, setDishe] = useState<Dishe | undefined>();

  useEffect(() => {
    if (slug) {
      setDishe(getDishe(slug as string));
    }
  }, [slug]);
  return (
    <>
      <div className="container py-20">
        {dishe ? (
          <div className="flex flex-col md:flex-row">
            <div className="mb-12 mr-4 flex items-center justify-center rounded-2xl border border-eatly-gray-50 p-4 shadow-eatly-3xl md:mb-0 md:mr-6 md:p-8 lg:mr-10 lg:p-10">
              <Image src={dishe.image} alt={dishe.name} width={300} height={400} />
            </div>
            <div className="">
              <CardType type={dishe.type} />
              <CardTitle text={dishe.name} className="!text-3xl md:!text-4xl lg:!text-5xl" />
              <WaitAndRating
                wait={dishe.time_wait}
                rating={dishe.rating}
                className="mb-2 !text-base md:mb-3 lg:!text-lg"
              />
              <CardPrice price={dishe.price} className="!mb-10" />
              <BtnPrimary className="w-full">Add</BtnPrimary>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
      <TopDishes />
    </>
  );
};

export default Product;
