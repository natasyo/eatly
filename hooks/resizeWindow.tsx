import { useEffect } from 'react';

export const useResizeWindow = (callback: () => void) => {
  useEffect(() => {
    const handleResize = (event: Event) => {
      callback();
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
};
