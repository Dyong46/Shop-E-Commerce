import { createContext } from 'react';
import { useState } from 'react';

const DefaultAddressContext = createContext();
const DefaultAddressProvider = ({ children }) => {
  const [addresDefault, setAdresDefault] = useState([]);

  return (
    <DefaultAddressContext.Provider value={[addresDefault, setAdresDefault]}>{children}</DefaultAddressContext.Provider>
  );
};
export { DefaultAddressContext, DefaultAddressProvider };
