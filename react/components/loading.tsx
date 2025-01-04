import { FunctionComponent } from 'react';

interface LoadingProps {
  className?: string;
}

const Loading: FunctionComponent<LoadingProps> = ({ className }) => {
  return <div className={`${className ? className : ''}`}>Loading....</div>;
};

export default Loading;
