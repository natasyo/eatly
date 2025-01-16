'use client';
import { createRef, FunctionComponent, ReactNode, Ref, useEffect, useRef } from 'react';

interface AnimateProps {
  className?: string;
  children: ReactNode;
  isAnimate?: boolean;
}

const Animate: FunctionComponent<AnimateProps> = ({ children, className }) => {
  const animateRef = createRef<HTMLDivElement>();

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
