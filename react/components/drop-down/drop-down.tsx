'use client';
import { useOutSideClick } from '@/hooks/outsideClick';
import { FunctionComponent, useState, MouseEvent, useRef, RefObject, useEffect } from 'react';

interface DropDownProps {
  options: Option[];
  current?: Option;
  placeholder: string;
  className?: string;
  onSelectValue?: (value?: Option) => void;
}

export interface Option {
  key: string;
  value: string;
}

const DropDown: FunctionComponent<DropDownProps> = ({
  options,
  current,
  placeholder,
  className,
  onSelectValue,
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
      onSelectValue(valueState);
    },
    [valueState],
  );
  return (
    <div className={`${className} relative font-manrope capitalize`} ref={refElement}>
      <p
        className={`flex h-[54px] w-full items-center justify-between rounded-lg bg-eatly-white-100 px-4 text-2lg font-semibold text-eatly-black-200 transition-all`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {valueState ? (
          <span data-key={valueState?.key}>{valueState?.value}</span>
        ) : (
          <span>{placeholder}</span>
        )}
        <svg
          className={`ml-[6px] ${isOpen ? '' : '-rotate-90'} transition-all`}
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
        className={`absolute w-full overflow-hidden bg-eatly-white-100 transition-all ${isOpen ? 'max-h-52' : 'max-h-0 overflow-hidden'}`}
      >
        {options.map((option) => (
          <li
            data-key={option.key}
            key={option.key}
            className="px-2 py-1 text-lg font-medium hover:bg-eatly-violet-100"
            onClick={(e) => setValue(e, option)}
          >
            {option.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
