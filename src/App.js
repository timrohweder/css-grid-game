import React, { Component } from 'react';
import { GlobalStyles } from './globalCSS';
import Game from './Game/Game';
import GameStatusContext from './Game/GameStatusContext';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Settings from './Game/Settings';

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
      <Router>
        <GameStatusContext.Provider value={this.state}>
          <Route path="/" exact component={Game} />
          <Route path="/settings" component={Settings} />
          <GlobalStyles />
        </GameStatusContext.Provider>
      </Router>
    );
  }
}

export default App;
