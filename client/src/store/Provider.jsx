import PropTypes from 'prop-types';
import { useReducer } from 'react';
import Context from './Context';
import reducer, { initState } from './reducer';
import logger from './logger';

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: PropTypes.element,
};

export default Provider;
