import { FunctionComponent } from 'react';

interface BtnMenuProps {
  className?: String;
  isOpen: boolean;
  onShowMenu?: () => void;
}
const BtnMenu: FunctionComponent<BtnMenuProps> = ({ className, onShowMenu, isOpen }) => {
  function menuClick() {
    onShowMenu && onShowMenu();
  }
  return (
    <button className={`${className} relative h-[24px] w-[29px]`} onClick={menuClick}>
      <span
        className={`${isOpen ? 't-[10px] rotate-45 bg-white' : 'top-0 bg-eatly-black'} absolute block h-[2px] w-[31px] rounded transition-all`}
      ></span>
      <span
        className={`${isOpen && 'opacity-0'} absolute top-[10px] block h-[2px] w-[31px] rounded bg-eatly-black transition-all`}
      ></span>
      <span
        className={`${isOpen ? 't-[10px] -rotate-45 bg-white' : 'top-[20px] bg-eatly-black'} absolute block h-[2px] w-[31px] rounded transition-all`}
      ></span>
    </button>
  );
};

export default BtnMenu;
