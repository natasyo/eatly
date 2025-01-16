import { FunctionComponent, useEffect, useState } from 'react';

interface CountProps {
  className?: string;
  count: number;
  onChangeCount?: (count: number) => void;
}

const Count: FunctionComponent<CountProps> = ({ className, count, onChangeCount }) => {
  return (
    <div className={`${className ? className : ''} flex`}>
      <button
        onClick={() => {
          if (count > 0) {
            onChangeCount && onChangeCount(-1);
          }
        }}
      >
        -
      </button>
      <input
        type="text"
        value={count}
        className="w-10 text-center text-lg font-medium text-eatly-gray-400"
        onChange={(event) => {
          let value = (event.target as HTMLInputElement).value;
          value = value.replaceAll(/[^0-9]/g, '');
          onChangeCount && onChangeCount(+value);
        }}
      />
      <button
        onClick={() => {
          onChangeCount && onChangeCount(1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Count;
