'use client';
import BasketProvider from '@/react/components/basket/basket-provider';
import { store } from '@/store';
import { SessionProvider } from 'next-auth/react';
import { FunctionComponent, ReactNode } from 'react';
import { Provider } from 'react-redux';

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FunctionComponent<ProvidersProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <SessionProvider>
        <BasketProvider>{children}</BasketProvider>
      </SessionProvider>
    </Provider>
  );
};

export default Providers;
