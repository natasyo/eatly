'use client';
import { createRef, FunctionComponent, ReactNode, useEffect, useState } from 'react';
import { useBasketContext } from './basket-provider';
import { Product } from '@/types';

interface AnimateProps {
  className?: string;
  children: ReactNode;
  isAnimate?: boolean;
  dishe: Product;
}

const Animate: FunctionComponent<AnimateProps> = ({ children, className, dishe, isAnimate }) => {
  const animateRef = createRef<HTMLDivElement>();
  const { rect } = useBasketContext();
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    if (isAnimate) {
      const position = animateRef.current?.getBoundingClientRect();
      if (position) {
        setPosition({
          x: rect!.x - 3 * rect!.width - position.x,
          y: rect!.y - 3 * rect!.height - position.y,
        });
      }
    }
  }, [isAnimate]);
  return (
    <>
      <style>
        {`
        @keyframes animate${dishe.id} {
          10% {        
             transform: translate(${position.x / 10}px, ${position.y / 10}px);
            }
        50%{
         transform: translate(${position.x * 0.7}px, ${position.y * 0.7}px) scale(50%);
        }
        60% {   
              transform: translate(${position.x * 0.9}px, ${position.y * 0.9}px) scale(50%);
              opasity:1;
          }
        99% {   
              transform: translate(${position.x}px, ${position.y}px) scale(10%);
              opasity:0.9;
          }
        100%{
          transform: translate(${position.x}px, ${position.y}px) scale(0%);
              opacity:0;
              }
        }`}
      </style>
      <div
        ref={animateRef}
        className={`${className ? className : ''} absolute top-0 ${isAnimate ? 'z-[99999]' : 'opacity-0'}`}
      >
        <div style={{ animation: `${isAnimate ? `animate${dishe.id} .5s linear .01s` : ''}` }}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Animate;
