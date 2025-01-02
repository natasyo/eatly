'use client';
import { getReviews } from '@/backend/api';
import ReviewItem from '@/react/components/customer/review-item';
import { FunctionComponent } from 'react';
import Slider, { Settings } from 'react-slick';

const CustomerSay: FunctionComponent = () => {
  const reviews = getReviews();
  const settings: Settings = {
    appendDots: (dots) => (
      <div>
        <ul className="ml-auto mr-0 mt-[-46px] flex h-2 w-[calc(100%_-_380px)] rounded-full bg-eatly-violet-100 bg-opacity-20 lg:h-[11px] lg:w-[calc(100%_-_580px)]">
          {dots}
        </ul>
      </div>
    ),
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    variableWidth: true,
    className: 'reviews',
    swipe: true,
  };
  return (
    <div className="pb-[34px] pt-[71px] lg:pt-[104px]">
      <div className="container px-6">
        <h3 className="mb-[66px] text-center">
          <span className="text-eatly-violet">Customer</span> Say
        </h3>
      </div>
      <div className="overflow-hidden">
        <div className="container mb-[99px] lg:mb-[180px]">
          <Slider {...settings}>
            {reviews.map((item) => (
              <ReviewItem item={item} key={item.id} className="h-full w-[375px] lg:w-[528px]" />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CustomerSay;
