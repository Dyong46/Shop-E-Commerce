import { useContext } from 'react';
import Context from './Context';

export const useStore = () => {
  const [state, dispath] = useContext(Context);

  return [state, dispath];
};
