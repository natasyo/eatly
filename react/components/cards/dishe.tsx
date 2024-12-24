import { Dishe } from '@/types';
import Image from 'next/image';
import { FunctionComponent } from 'react';

interface DisheCardProps {
  className?: string;
  item: Dishe;
}

const DisheCard: FunctionComponent<DisheCardProps> = ({ className, item }) => {
  return (
    <div className={`${className}`}>
      <div>
        <Image src={item.image} alt={item.name} width={186} height={186} />
      </div>
    </div>
  );
};

export default DisheCard;
