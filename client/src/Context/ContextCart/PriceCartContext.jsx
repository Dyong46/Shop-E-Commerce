import { createContext } from 'react';
import { useState } from 'react';

const PriceContext = createContext();
const PriceProvider = ({ children }) => {
  const [money, setMoney] = useState(0);

  return <PriceContext.Provider value={[money, setMoney]}>{children}</PriceContext.Provider>;
};
export { PriceContext, PriceProvider };
