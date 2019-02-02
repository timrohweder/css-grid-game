import React from 'react';

const SettingsContext = React.createContext({
  triesRemaining: 3,
  setNumTries: () => {},
  decrementTries: () => {},
  numCols: 4,
  setNumCols: () => {},
  tiles: [],
  createTiles: () => {},
  resetGame: () => {}
});

export default SettingsContext;
