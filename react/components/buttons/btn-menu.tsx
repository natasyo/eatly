'use client';
import { FunctionComponent, useState } from 'react';

interface BtnMenuProps {
  className?: String;
}
const BtnMenu: FunctionComponent<BtnMenuProps> = ({ className }) => {
  const [isShow, setIsShow] = useState(false);
  function menuClick() {
    setIsShow(!isShow);
  }
  return (
    <button className={`${className} relative h-[24px] w-[29px]`} onClick={menuClick}>
      <span
        className={`${isShow ? 't-[10px] rotate-45' : 'top-0'} bg-eatly-black absolute block h-[2px] w-[31px] rounded transition-all`}
      ></span>
      <span
        className={`${isShow && 'opacity-0'} bg-eatly-black absolute top-[10px] block h-[2px] w-[31px] rounded transition-all`}
      ></span>
      <span
        className={`${isShow ? 't-[10px] -rotate-45' : 'top-[20px]'} bg-eatly-black absolute block h-[2px] w-[31px] rounded transition-all`}
      ></span>
    </button>
  );
};

export default BtnMenu;
