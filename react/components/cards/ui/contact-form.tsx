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
        className="grow pl-4 font-popins text-base tracking-[0.6px] text-eatly-black placeholder:text-eatly-gray-600 focus-visible:outline-0"
        placeholder={placeholder}
      />
      <BtnPrimary className={`rounded-[14px] text-sm font-medium uppercase`}>subscribe</BtnPrimary>
    </div>
  );
};

export default ContactForm;
