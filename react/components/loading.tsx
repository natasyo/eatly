import { FunctionComponent } from 'react';

interface LoadingProps {
  className?: string;
}

const Loading: FunctionComponent<LoadingProps> = ({ className }) => {
  return <div className={`${className ? className : 'flex justify-center h-full items-center'}`}>Loading....</div>;
};

export default Loading;
