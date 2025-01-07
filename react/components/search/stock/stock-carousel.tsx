'use client';
import { FunctionComponent } from 'react';
import Slider, { Settings } from 'react-slick';
import Stock from './stock1';
import './stock.scss';

interface StocksCarouselProps {
  className: string;
}

const StocksCarousel: FunctionComponent<StocksCarouselProps> = ({ className }) => {
  const settings: Settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    appendDots: (dots) => {
      console.log(dots);
      return (
        <div>
          <ul className={`dots flex justify-center`}>{dots}</ul>
        </div>
      );
    },
  };
  return (
    <div className={`${className ? className : ''} stock`}>
      <Slider {...settings}>
        <Stock></Stock>
        <Stock></Stock>
      </Slider>
    </div>
  );
};

export default StocksCarousel;
