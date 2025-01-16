'use client';
import { createRef, FunctionComponent, ReactNode, useEffect } from 'react';
import { useBasketContext } from './basket-provider';

interface AnimateProps {
  className?: string;
  children: ReactNode;
  isAnimate?: boolean;
}

const Animate: FunctionComponent<AnimateProps> = ({ children, className }) => {
  const animateRef = createRef<HTMLDivElement>();
  const basketRect = useBasketContext();
  useEffect(() => {
    console.log(basketRect);
  }, [basketRect]);
  return (
    <div
      className={`${className ? className : ''}`}
      onClick={(event) => {
        event.preventDefault();
        const position = animateRef.current?.getBoundingClientRect();
      }}
    >
      <div ref={animateRef}>{children}</div>
    </div>
  );
};

export default Animate;
