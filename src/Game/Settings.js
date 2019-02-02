import React from 'react'
import Layout from '../Layout/Layout';
import SettingsContext from './SettingsContext';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const SettingsWrapper = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  h1 {
    font-size: 4rem;
    margin-top: 2.5rem;
  }

  label {
    font-size: 2rem;
    font-weight: 700;
  }

  input, select {
    display: block;
    margin: 1rem auto 1.5rem auto;
    font-size: 2rem;
  }

  .message-container {
    margin: 1.5rem 0;
  }
`;

const BackToGameButton = styled(Link)`
  margin-top: 3rem;
  padding: 2rem 4rem;
  background: #333;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.8rem;
  font-weight: 700;
  display: inline-block;
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const SuccessMessage = styled.p`
  color: green;
  animation: 1s ${fadeOut} ease-out;
  animation-delay: 1s;
  animation-fill-mode: forwards;
`;

const ErrorMessage = styled.p`
  color: red;
`;

export default class Settings extends React.Component {
  static contextType = SettingsContext;

  state = {
    message: <p>Changing these settings will reset any current game.</p>, // placeholder prevents "jumpy" appearance when adding/removing messages
    timeout: null
  }

  displaySuccessMessage = () => {
    // prevent success message from not appearing if user changes multiple settings quickly
    const successMessage = document.querySelector('.success-message');
    if (successMessage) successMessage.style.animation = "none";

    // remove success message from DOM after delay
    const successTimeout = setTimeout(() => {
        this.setState(
          {message: <p>&nbsp;</p>
        })
      }, 2000);

    this.setState({
      message: <SuccessMessage className="success-message">Settings saved</SuccessMessage>,
      timeout: successTimeout
    });
  }

  handleSetNumCols = (e) => {
      clearTimeout(this.state.timeout);
      this.context.setNumCols(+e.target.value);
      this.context.resetGame();
      this.displaySuccessMessage();
  }

  handleSetNumTries = (e) => {
    if((e.key && e.key === "Enter") || e.type === "blur") {
      clearTimeout(this.state.timeout);
      const numTries = e.target.value || this.context.triesToStart;
      if(!isNaN(numTries) && numTries >= 1 && numTries <= 100) {
        this.context.setNumTries(+numTries);
        this.context.resetGame();
        this.displaySuccessMessage();
      } else {
        e.target.value = this.context.triesRemaining;
        this.setState({
          message: <ErrorMessage>Please enter a number ranging 1 through 100.</ErrorMessage>
        })
      }
    }
  }

  render() {
    return (
      <Layout>
        <SettingsWrapper>
          <h1>Settings</h1>
          <div className="message-container">
            {this.state.message}
          </div>
          <label>
            Game Size
            <select value={this.context.numCols} onChange={this.handleSetNumCols}>
              <option value="2">2 x 2</option>
              <option value="4">4 x 4</option>
              <option value="6">6 x 6</option>
              <option value="8">8 x 8</option>
              <option value="10">10 x 10&nbsp;</option>
              <option value="12">12 x 12&nbsp;</option>
              <option value="14">14 x 14&nbsp;</option>
              <option value="16">16 x 16&nbsp;</option>
            </select>
          </label>
          <label>
            Number of Tries
            <input placeholder={this.context.triesToStart} type="number" min="1" max="100" onBlur={this.handleSetNumTries} onKeyPress={this.handleSetNumTries} />
          </label>
          <BackToGameButton to="/">Back to Game</BackToGameButton>
        </SettingsWrapper>
      </Layout>
    )
  }
}
