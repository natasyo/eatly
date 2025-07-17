'use client';
import { useOutSideClick } from '@/hooks/outsideClick';
import { FunctionComponent, useState, MouseEvent, useRef, RefObject, useEffect, ChangeEventHandler } from 'react';
import Image from 'next/image';

interface DropDownProps {
  options: Option[];
  isLoading?: boolean;
  current?: Option;
  value?:string;
  placeholder: string;
  className?: string;
  onSelectValue?: (value?: Option) => void;
  label?:string
  onChange?: ChangeEventHandler | undefined
}

export interface Option {
  key: string;
  value: string;
  icon?: string;
}

const DropDown: FunctionComponent<DropDownProps> = ({
  options,
  current,
  placeholder,
  className,
  label,
  isLoading,
  onSelectValue,
  value,
  onChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [valueState, setValueState] = useState(current);
  const setValue = (e: MouseEvent<HTMLLIElement>, value: Option) => {
    setValueState(value);
    setIsOpen(false);
  };
  const refElement = useRef<HTMLElement | undefined>(undefined) as RefObject<HTMLDivElement>;
  useOutSideClick(refElement, () => {
    setIsOpen(false);
  });
  useEffect(
    function () {

     if(onSelectValue)onSelectValue(valueState);
      console.log(value)
    },
    [onSelectValue, valueState, value],
  );
  useEffect(() => {
    if(onChange) console.log(onChange)

  }, [onChange]);
  return (
    <div className={`${className} relative font-manrope mb-5`} ref={refElement}>
      {label&&<p className={`mb-1 text-lg font-medium text-eatly-black-500`}>{label}</p>}
      <p
        className={`flex h-[38px] w-full items-center justify-between border-eatly-violet-500  rounded-lg bg-white px-4 text-[13px] font-semibold text-eatly-black-200 transition-all lg:h-[54px] lg:text-2lg`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {valueState ? (
          <span className={'flex items-center'}>
            {valueState.icon&&<Image className='w-10 me-3' src={valueState.icon} alt={valueState.value} width={100} height={100}/>}
            <span data-key={valueState?.key}>{valueState?.value}</span>
          </span>

        ) : (
          <span className={`text-gray-500 font-normal text-lg`}>{placeholder}</span>
        )}
        <svg
          className={`ml-[6px] ${isOpen ? '' : '-rotate-90'} max-w-3 transition-all lg:max-w-full`}
          width="16"
          height="9"
          viewBox="0 0 16 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.4209 1.25293L7.70325 7.53528L13.9856 1.25293"
            stroke="#1A202C"
            strokeWidth="2.35588"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </p>
          <ul
          className={`absolute z-10 w-full overflow-hidden bg-white transition-all ${isOpen ? 'max-h-52' : 'max-h-0 overflow-hidden'}z-inde`}
        >
            {isLoading?<li>Loading...</li>:  options.map((option) => (
            <li
              data-key={option.key}
              key={option.key}
              className="px-2 py-1 text-[13px] font-medium hover:bg-eatly-violet-100 md:text-lg flex items-center"
              onClick={(e) => {
                setValue(e, option);
              }}
            >
              {option.icon&&<Image src={option.icon} alt={option.value} width={100} height={100} className='me-2 w-10'/>}
              <span>{option.value}</span>

            </li>
          ))}
        </ul>

    </div>
  );
};

export default DropDown;
