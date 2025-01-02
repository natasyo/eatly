import { FunctionComponent } from 'react';

interface DiagramProps {
  increased: number;
  className?: string;
  classNameInner?: string;
}

const Diagram: FunctionComponent<DiagramProps> = ({ className, classNameInner, increased }) => {
  return (
    <div className={`${className} relative h-[7px] w-full lg:h-[9px]`}>
      <div
        style={{ width: `${increased}%` }}
        className={`${classNameInner} absolute h-full rounded-full transition-all`}
      ></div>
    </div>
  );
};

export default Diagram;
