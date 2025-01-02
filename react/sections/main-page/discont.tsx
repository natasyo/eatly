import ContactForm from '@/react/components/cards/ui/contact-form';
import { FunctionComponent } from 'react';
import discontImage from '@/public/img/discont-image.png';
import Image from 'next/image';

interface DiscontProp {
  className?: string;
}

const Discont: FunctionComponent<DiscontProp> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div className="container">
        <div className="flex h-[264px] flex-col items-start justify-between rounded-[30px] bg-[url('../public/img/discont-bg.png')] pl-4 pr-4 pt-10 sm:ml-6 sm:h-[200px] sm:flex-row sm:pl-11 sm:pt-[34px] md:pr-[52px] lg:ml-9 lg:h-[280px] lg:pl-16 lg:pr-18 lg:pt-12">
          <div className="w-full">
            <p className="mb-3 text-center font-popins text-4.3xl font-extrabold uppercase text-white sm:text-left sm:text-5xl lg:mb-5 lg:text-7xl">
              GET 50%
            </p>
            <ContactForm
              className="mb-3 rounded-[14px] sm:mb-0 sm:w-[314px] lg:w-[440px]"
              placeholder=" Enter Your Email Address"
            />
          </div>
          <Image
            src={discontImage}
            alt="discont"
            className="mx-auto mt-4 h-[170px] w-[170px] sm:mx-0 sm:max-w-[195px] sm:lg:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Discont;
