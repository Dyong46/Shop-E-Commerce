import { createContext } from 'react';
import { useState } from 'react';

const DiscountContext = createContext();
const DiscountProvider = ({ children }) => {
  const [discounts, setDiscounts] = useState([]);

  return <DiscountContext.Provider value={[discounts, setDiscounts]}>{children}</DiscountContext.Provider>;
};
export { DiscountContext, DiscountProvider };
