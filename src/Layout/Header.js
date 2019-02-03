import React from 'react';
import styled from 'styled-components';
import SettingsContext from '../Game/SettingsContext';
import { Link } from 'react-router-dom';

const Header = styled.header`
    grid-column: left-gutter-start / right-gutter-end;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: black;
    color: white;
`;

const SettingsLink = styled(Link)`
    font-size: 18px;
`;

const PlayAgainLink = styled(Link)`
    margin-left: 15px;
    padding-bottom: 3px;
    color: lightblue;
    border-bottom: 2px solid lightblue;
`;

const PlayAgain = ({ text, clickHandler }) => (
    <React.Fragment>
        {text}
        <PlayAgainLink onClick={clickHandler} to="/">
            {' '}
            Play Again?
        </PlayAgainLink>
    </React.Fragment>
);

export default () => (
    <Header>
        <h1>
            <Link to="/">CSS Grid Game</Link>
        </h1>
        <p>
            <SettingsContext.Consumer>
                {context => {
                    if (context.gameWon) {
                        return (
                            <PlayAgain
                                clickHandler={context.resetGame}
                                text="You Win!"
                            />
                        );
                    } else if (context.triesRemaining === 0) {
                        return (
                            <PlayAgain
                                clickHandler={context.resetGame}
                                text="You Lose :("
                            />
                        );
                    } else {
                        return `Tries Remaining: ${
                            context.triesRemaining === null
                                ? context.triesToStart
                                : context.triesRemaining
                        }`;
                    }
                }}
            </SettingsContext.Consumer>
        </p>
        <SettingsLink to="/settings">Settings</SettingsLink>
    </Header>
);
