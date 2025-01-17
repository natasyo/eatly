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
  const { rect } = useBasketContext();
  useEffect(() => {
    // console.log(rect);
  }, [rect]);

  useEffect(() => {
    console.log(animateRef.current?.getBoundingClientRect());
  }, [animateRef]);
  return (
    <div
      ref={animateRef}
      className={`${className ? className : ''} absolute top-0`}
      onClick={(event) => {
        event.preventDefault();
        const position = animateRef.current?.getBoundingClientRect();
      }}
    >
      <div>{children}</div>
    </div>
  );
};

export default Animate;
