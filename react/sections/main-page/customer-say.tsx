'use client';
import { getReviews } from '@/backend/api';
import ReviewItem from '@/react/components/customer/review-item';
import { FunctionComponent } from 'react';
import Slider, { Settings } from 'react-slick';

interface CustomerSayProps {}

const CustomerSay: FunctionComponent<CustomerSayProps> = () => {
  const reviews = getReviews();
  const settings: Settings = {
    appendDots: (dots) => (
      <div>
        <ul className="ml-auto mr-0 mt-[-46px] flex h-[11px] w-[calc(100%_-_580px)] rounded-full bg-eatly-violet-100 bg-opacity-20">
          {dots}
        </ul>
      </div>
    ),
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    variableWidth: true,
    className: 'reviews',
    swipe: true,
  };
  return (
    <div className="pb-56 pt-[104px]">
      <div className="container px-6">
        <h3 className="mb-[66px] text-center">
          <span className="text-eatly-violet">Customer</span> Say
        </h3>
      </div>
      <div className="overflow-hidden">
        <div className="container mb-[180px]">
          <Slider {...settings}>
            {reviews.map((item) => (
              <ReviewItem item={item} key={item.id} className="h-full w-[528px]" />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CustomerSay;
