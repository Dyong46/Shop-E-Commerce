import { createContext } from 'react';
import { useState } from 'react';

const AddressContext = createContext();
const AddressProvider = ({ children }) => {
  const [addres, setAdres] = useState([]);

  return <AddressContext.Provider value={[addres, setAdres]}>{children}</AddressContext.Provider>;
};
export { AddressContext, AddressProvider };
