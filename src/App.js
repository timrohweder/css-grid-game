import React, { Component } from 'react';
import Layout from './Layout/Layout';
import { GlobalStyles } from './globalCSS';
import Game from './Game/Game';
import GameStatusContext from './Game/GameStatusContext';

class App extends Component {

  decrementTries = (callback) => {
    this.setState(state => ({
      triesRemaining: --state.triesRemaining
    }), callback ? callback : () => {})
  };

  state = {
    triesRemaining: 2,
    decrementTries: this.decrementTries
  };

  render() {
    return (
      <GameStatusContext.Provider value={this.state}>
        <Layout>
          <Game />
        </Layout>
        <GlobalStyles />
      </GameStatusContext.Provider>
    );
  }
}

export default App;
