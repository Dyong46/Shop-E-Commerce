const logger = (reducer) => {
  return (prevState, actions) => {
    console.group(actions.type);
    console.log('Prev state: ', prevState);
    console.log('Action: ', actions);

    const nextState = reducer(prevState, actions);

    console.log('Next state: ', nextState);

    console.groupEnd();
    return nextState;
  };
};

export default logger;
