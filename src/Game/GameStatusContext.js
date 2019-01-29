import React from 'react';

const GameStatusContext = React.createContext({
  triesRemaining: 5,
  decrementTries: () => {}
});

export default GameStatusContext;
