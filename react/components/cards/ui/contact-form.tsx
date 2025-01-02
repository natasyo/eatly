import { FunctionComponent } from 'react';
import BtnPrimary from '../../buttons/btn-primary';

interface ContactFormProps {
  className?: string;
  placeholder?: string;
}

const ContactForm: FunctionComponent<ContactFormProps> = ({ className, placeholder }) => {
  return (
    <div className={`flex justify-between bg-white px-[6px] py-2 ${className ? className : ''}`}>
      <input
        type="text"
        className="grow pl-[10px] font-popins text-xs tracking-[0.6px] text-eatly-black placeholder:text-eatly-gray-600 focus-visible:outline-0 lg:pl-4 lg:text-base"
        placeholder={placeholder}
      />
      <BtnPrimary
        className={`rounded-lg !px-4 !py-[10px] text-[11px] font-medium uppercase lg:rounded-[14px] lg:!px-6 lg:!py-4 lg:text-sm`}
      >
        subscribe
      </BtnPrimary>
    </div>
  );
};

export default ContactForm;
