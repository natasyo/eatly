import { RefObject, useEffect } from 'react';

export const useOutSideClick = (
  ref: RefObject<HTMLElement | undefined | null>,
  callback: () => void,
) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref && ref.current && !ref.current.contains(event.target as HTMLElement)) {
        callback();
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [ref, callback]);
};
