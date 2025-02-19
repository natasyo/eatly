'use client';
import { getReviews } from '@/controllers/api';
import ReviewItem from '@/react/components/customer/review-item';
import { FunctionComponent } from 'react';
import Slider, { Settings } from 'react-slick';

const CustomerSay: FunctionComponent = () => {
  const reviews = getReviews();
  const settings: Settings = {
    appendDots: (dots) => (
      <div>
        <ul className="ml-auto mr-0 flex h-2 rounded-full bg-eatly-violet-100 bg-opacity-20 sm:bottom-6 sm:mt-[-46px] sm:w-[calc(100%_-_380px)] lg:h-[11px] lg:w-[calc(100%_-_580px)]">
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
    responsive: [
      {
        breakpoint: 1055,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 672,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        },
      },
    ],
  };
  return (
    <div className="pb-[34px] pt-[84px] sm:pt-[71px] lg:pt-[104px]">
      <div className="container px-8 sm:px-6">
        <h3 className="mx-auto mb-[50px] max-w-[200px] text-center sm:mx-0 sm:mb-6 sm:mb-[66px] sm:max-w-full">
          <span className="text-eatly-violet">Customer</span> Say
        </h3>
      </div>
      <div className="overflow-hidden">
        <div className="container mb-[97px] px-8 sm:px-4 lg:mb-[180px]">
          <Slider {...settings}>
            {reviews.map((item) => (
              <ReviewItem item={item} key={item.id} className="h-full sm:w-[375px] lg:w-[528px]" />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CustomerSay;
