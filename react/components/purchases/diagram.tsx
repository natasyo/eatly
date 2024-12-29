import { FunctionComponent } from 'react';

interface DiagramProps {
  increased: number;
  className?: string;
  classNameInner?: string;
}

const Diagram: FunctionComponent<DiagramProps> = ({ className, classNameInner, increased }) => {
  return (
    <div className={`${className} relative h-[9px] w-full`}>
      <div
        style={{ width: `${increased}%` }}
        className={`${classNameInner} absolute h-full rounded-full transition-all`}
      ></div>
    </div>
  );
};

export default Diagram;
