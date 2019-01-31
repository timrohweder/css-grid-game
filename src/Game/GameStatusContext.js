import React from 'react';

const GameStatusContext = React.createContext({
  triesRemaining: 3,
  decrementTries: () => {}
});

export default GameStatusContext;
