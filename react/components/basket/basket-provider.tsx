import { createContext, FunctionComponent, ReactNode, useContext, useState } from 'react';

interface BasketProviderProps {
  children: ReactNode;
}
type BasketContextType = {
  rect?: DOMRect;
  setRect: (rect: DOMRect) => void;
};
export const BasketContext = createContext<BasketContextType | undefined>(undefined);
const BasketProvider: FunctionComponent<BasketProviderProps> = ({ children }) => {
  const [rect, setRect] = useState<DOMRect | undefined>();
  return <BasketContext.Provider value={{ rect, setRect }}>{children}</BasketContext.Provider>;
};

export const useBasketContext = () => {
  const context = useContext(BasketContext);
  if (!context) throw new Error('useBasketContext must be used within a BasketProvider');
  return context;
};

export default BasketProvider;
