import { createContext } from 'react';
import { useState } from 'react';

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);

  return <CartContext.Provider value={[carts, setCarts]}>{children}</CartContext.Provider>;
};
export { CartContext, CartProvider };
