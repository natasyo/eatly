'use client';
import { FunctionComponent, useEffect, useState } from 'react';

interface SearchTypeProps {
  className?: string;
  current: string;
  types: string[];
  onChange?: (type: string) => void;
}

const SearchType: FunctionComponent<SearchTypeProps> = ({
  className,
  current,
  types,
  onChange,
}) => {
  const width = 100 / types.length;
  const [currentValue, setCurrentValue] = useState(current);
  function changeCurrent(type: string) {
    setCurrentValue(type);
  }
  useEffect(() => {
    onChange && onChange(currentValue);
  }, [currentValue]);
  return (
    <div
      className={`flex ${className ? className : ''} overflow-hidden rounded-[6px] border border-eatly-violet lg:rounded-xl xl:rounded-[15px]`}
    >
      {types.map((type) => (
        <button
          key={type}
          className={`grow py-4 text-xs xl:py-6 ${currentValue === type ? 'text-eatly-violet' : 'bg-eatly-violet text-white'} xl:text-xl`}
          style={{ width: `${width}%` }}
          onClick={() => changeCurrent(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default SearchType;
