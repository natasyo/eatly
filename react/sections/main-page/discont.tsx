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
        <div className="ml-9 flex h-[280px] items-start justify-between rounded-[30px] bg-[url('../public/img/discont-bg.png')] pl-16 pr-18 pt-12">
          <div>
            <p className="mb-5 font-popins text-7xl font-extrabold uppercase text-white">GET 50%</p>
            <ContactForm
              className="w-[440px] rounded-[14px]"
              placeholder=" Enter Your Email Address"
            />
          </div>
          <Image src={discontImage} alt="discont" className="mt-4" />
        </div>
      </div>
    </div>
  );
};

export default Discont;
