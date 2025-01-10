'use client';
import { store } from '@/store';
import { FunctionComponent, ReactNode } from 'react';
import { Provider } from 'react-redux';

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FunctionComponent<ProvidersProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
