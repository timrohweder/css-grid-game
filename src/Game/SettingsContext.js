import React from 'react';

const SettingsContext = React.createContext({
  triesToStart: 3,
  triesRemaining: null,
  setNumTries: () => {},
  decrementTries: () => {},
  numCols: 4,
  setNumCols: () => {},
  tiles: [],
  createTiles: () => {},
  resetGame: () => {},
  gameWon: false,
  checkIfGameWon: () => {}
});

export default SettingsContext;
