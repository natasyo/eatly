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
        <div className="ml-6 flex h-[200px] items-start justify-between rounded-[30px] bg-[url('../public/img/discont-bg.png')] pl-11 pr-[52px] pt-[34px] lg:ml-9 lg:h-[280px] lg:pl-16 lg:pr-18 lg:pt-12">
          <div>
            <p className="mb-3 font-popins text-5xl font-extrabold uppercase text-white lg:mb-5 lg:text-7xl">
              GET 50%
            </p>
            <ContactForm
              className="w-[314px] rounded-[14px] lg:w-[440px]"
              placeholder=" Enter Your Email Address"
            />
          </div>
          <Image src={discontImage} alt="discont" className="mt-4 max-w-[195px] lg:max-w-full" />
        </div>
      </div>
    </div>
  );
};

export default Discont;
