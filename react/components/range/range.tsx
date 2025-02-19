'use client';
import { ChangeEvent, FunctionComponent, useEffect, useState, TouchEvent, useRef } from 'react';
import style from './range.module.scss';
import { RangeType } from '@/types';
import { getCoordinate } from '@/functions/get-coordinate';

interface RangeProps {
  valueMinMax: RangeType;
  valueData: RangeType;
  onChange?: (value: RangeType) => void;
  className?: string;
}

const Range: FunctionComponent<RangeProps> = ({ valueMinMax, valueData, onChange, className }) => {
  const [value, setValue] = useState<RangeType>(valueData);
  const coordinate = getCoordinate(valueMinMax, 5);
  const rangeRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  function setLeft(value: number) {
    if (width > 0) {
      const left = (width / (valueMinMax.max - valueMinMax.min)) * value - 12;

      return left;
    }
    return 0;
  }
  useEffect(() => {
    rangeRef.current && setWidth(rangeRef.current.clientWidth);
  });
  useEffect(() => {
    onChange && onChange(value);
  }, [value]);
  return (
    <div className={`${className}`}>
      <div className="relative h-5" ref={rangeRef}>
        <input
          type="range"
          className={`${style.range} absolute`}
          min={valueMinMax.min}
          max={valueMinMax.max}
          value={value.min}
          step={1}
          onChange={(event: ChangeEvent) => {
            const val = +(event.target as HTMLInputElement).value;
            if (val <= value.max) {
              setValue({ ...value, min: val });
            }
          }}
          onTouchStart={(event: TouchEvent) => {
            console.log(event.target);
          }}
        />
        <input
          type="range"
          className={`${style.range} absolute`}
          min={valueMinMax.min}
          max={valueMinMax.max}
          value={value.max}
          step={1}
          onChange={(event: ChangeEvent) => {
            const val = +(event.target as HTMLInputElement).value;
            if (val >= value.min) {
              setValue({ ...value, max: val });
            }
          }}
        />
      </div>
      <div className="relative h-6">
        {coordinate.map((item) => (
          <span
            className={`absolute inline-block w-6 text-center text-[9px] text-eatly-gray xl:text-[10px]`}
            key={`coord${item}`}
            style={{ left: `${setLeft(item)}px` }}
          >
            ${item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Range;
